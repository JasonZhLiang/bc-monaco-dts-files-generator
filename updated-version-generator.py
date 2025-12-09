import json
import re
import os
# import requests # Import the requests library
import urllib.request
import urllib.error
import ssl

GITHUB_BASE_URL = "https://raw.githubusercontent.com/getbraincloud/braincloud-docs/develop/docs/api/2_capi/"

MAX_DEPTH_FOR_TYPE_GENERATION = 3 # Define the maximum depth for type generation in data json

EXCLUDED_METHODS = {
    # "Identity": ["attach", "merge", "detach"],
    # "VirtualCurrency": ["resetCurrencyState"]
    "AppStore": ["awardProductHook"]
}

EXCLUDED_SERVICES = ["Script", "Authenticate", "Dispatcher"]

# def fetch_md_content(service_name, method_name):
#     url = f"{GITHUB_BASE_URL}{service_name}/{method_name}.md"
#     try:
#         headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}
#         response = requests.get(url, headers=headers, timeout=10) # Removed verify=False again
#         response.raise_for_status()  # Raise an exception for HTTP errors
#         return response.text
#     except requests.exceptions.RequestException as e:
#         # print(f"Error fetching {url}: {e}")
#         return None

def fetch_md_content(service_name, method_name):
    url = f"{GITHUB_BASE_URL}{service_name}/{method_name}.md"
    
    try:
        # Create request with headers
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}
        req = urllib.request.Request(url, headers=headers)
        
        # Open the URL with timeout
        response = urllib.request.urlopen(req, timeout=10, context=ssl._create_unverified_context())
        
        # Read and decode the response
        content = response.read().decode('utf-8')
        
        return content
        
    # except urllib.error.HTTPError as e:
    #     # HTTP error (404, 500, etc.)
    #     print(f"HTTP Error fetching {url}: {e.code} {e.reason}")
    #     return None
    # except urllib.error.URLError as e:
    #     # URL/connection error
    #     print(f"URL Error fetching {url}: {e.reason}")
    #     return None
    # except TimeoutError:
    #     print(f"Timeout fetching {url}")
    #     return None
    except Exception as e:
        # Other exceptions
        print(f"Error fetching {url}: {e}")
        return None

def sanitizeMethodName(sourceMethodName):
    sanitizedMethodName = sourceMethodName.lstrip().rstrip()

    if sanitizedMethodName.find(" ") > -1:
        sanitizedMethodName = sanitizedMethodName[0:sanitizedMethodName.find(" ")]

    if sanitizedMethodName.find("(") > -1:
        sanitizedMethodName = sanitizedMethodName[0:sanitizedMethodName.find("(")]

    if sanitizedMethodName.find("{") > -1:
        sanitizedMethodName = sanitizedMethodName[0:sanitizedMethodName.find("{")]

    if sanitizedMethodName.find("[") > -1:
        sanitizedMethodName = sanitizedMethodName[0:sanitizedMethodName.find("[")]

    sanitizedMethodName = sanitizedMethodName.lstrip().rstrip()

    if len(sanitizedMethodName) > 0:
        if len(sanitizedMethodName) > 1:
            sanitizedMethodName = sanitizedMethodName[0].lower() + sanitizedMethodName[1:]
        else:
            sanitizedMethodName = sanitizedMethodName[0].lower()

    return sanitizedMethodName


def sanitizeParameterType(sourceParameterType):
    sanitizedParameterType = sourceParameterType.lstrip().rstrip()

    if sanitizedParameterType.find("|") == -1:
        sanitizedParameterType = sourceParameterType.lstrip().rstrip().lower()

    if sanitizedParameterType == "string":
        return "string"
    elif sanitizedParameterType == "number" or sanitizedParameterType == "integer" or sanitizedParameterType == "int" or sanitizedParameterType == "long" or sanitizedParameterType == "float" or sanitizedParameterType == "double" or sanitizedParameterType == "biginteger":
        return "number"
    elif sanitizedParameterType == "boolean" or sanitizedParameterType == "bool":
        return "boolean"
    elif sanitizedParameterType == "nativeobject":
        return "Object"
    elif sanitizedParameterType == "nativearray":
        return "Array<any>"
    elif sanitizedParameterType == "stringarray":
        return "Array<string>"
    elif sanitizedParameterType == "numberarray" or sanitizedParameterType == "integerarray" or sanitizedParameterType == "intarray" or sanitizedParameterType == "longarray" or sanitizedParameterType == "floatarray" or sanitizedParameterType == "doublearray" or sanitizedParameterType == "bigintegerarray":
        return "Array<number>"
    elif sanitizedParameterType == "booleanarray" or sanitizedParameterType == "boolarray":
        return "Array<boolean>"
    elif sanitizedParameterType == "map":
        return "Map<any, any>"
    elif sanitizedParameterType == "list":
        return "Array<any>"
    else:
        if sourceParameterType.find("|") > -1:
            parts = sourceParameterType.split("|")

            multiPartString = ""

            for part in parts:
                if len(multiPartString) > 0:
                    multiPartString = multiPartString + " | " + "\"" + part.lstrip().rstrip() + "\""
                else:
                    multiPartString = "\"" + part.lstrip().rstrip() + "\""

            return multiPartString
        else:
            return sourceParameterType.lstrip().rstrip()


def extract_json_response(markdown_content):
    # Regex to find the JSON response block within the markdown
    match = re.search(r'<details>\s*<summary>JSON Response</summary>\s*```json\s*(.*?)\s*```\s*</details>', markdown_content, re.DOTALL)
    if match:
        json_str = match.group(1)
        try:
            return json.loads(json_str)
        except json.JSONDecodeError as e:
            print(f"Error decoding JSON: {e} in {json_str}")
            return None
    return None


def convert_json_to_typescript(json_obj, base_indent_string, current_depth):
    ts_string = ""
    current_indent = base_indent_string

    if isinstance(json_obj, dict):
        for key, value in json_obj.items():
            sanitized_key = re.sub(r'[^a-zA-Z0-9_]', '', key)

            if isinstance(value, dict):
                if current_depth >= MAX_DEPTH_FOR_TYPE_GENERATION - 1:
                    ts_string += f"{current_indent}{sanitized_key}: Record<string, any>;\n"
                else:
                    ts_string += f"{current_indent}{sanitized_key}: {{\n"
                    ts_string += convert_json_to_typescript(value, current_indent + "    ", current_depth + 1)
                    ts_string += f"{current_indent}}};\n"
            elif isinstance(value, list):
                if len(value) > 0 and isinstance(value[0], dict):
                    if current_depth >= MAX_DEPTH_FOR_TYPE_GENERATION - 1:
                        ts_string += f"{current_indent}{sanitized_key}: Array<Record<string, any>>;\n"
                    else:
                        ts_string += f"{current_indent}{sanitized_key}: Array<{{\n"
                        ts_string += convert_json_to_typescript(value[0], current_indent + "    ", current_depth + 1)
                        ts_string += f"{current_indent}}}>;\n"
                else:
                    # Existing logic for list of primitives or empty list
                    list_element_type = "any"
                    if len(value) > 0:
                        if isinstance(value[0], str): list_element_type = "string"
                        elif isinstance(value[0], int) or isinstance(value[0], float): list_element_type = "number"
                        elif isinstance(value[0], bool): list_element_type = "boolean"
                    ts_string += f"{current_indent}{sanitized_key}: Array<{list_element_type}>;\n"
            elif isinstance(value, str):
                ts_string += f"{current_indent}{sanitized_key}: string;\n"
            elif isinstance(value, int) or isinstance(value, float):
                ts_string += f"{current_indent}{sanitized_key}: number;\n"
            elif isinstance(value, bool):
                ts_string += f"{current_indent}{sanitized_key}: boolean;\n"
            elif value is None:
                ts_string += f"{current_indent}{sanitized_key}: any | null;\n"
            else:
                ts_string += f"{current_indent}{sanitized_key}: any;\n"
        return ts_string
    elif isinstance(json_obj, list):
        if len(json_obj) > 0:
            if isinstance(json_obj[0], dict):
                if current_depth >= MAX_DEPTH_FOR_TYPE_GENERATION - 1:
                     return f"Array<Record<string, any>>"
                else:
                    inner_content = convert_json_to_typescript(json_obj[0], current_indent + "    ", current_depth + 1)
                    return f"Array<{{\n{inner_content}{current_indent}}}>"
            else:
                # Existing logic for list of primitives
                if isinstance(json_obj[0], str): return "Array<string>"
                elif isinstance(json_obj[0], int) or isinstance(json_obj[0], float): return "Array<number>"
                elif isinstance(json_obj[0], bool): return "Array<boolean>"
                else: return "Array<any>"
        else:
            return "Array<any>"
    return ""


source_path = "/Users/jasonl//bitbucket/braincloud-portal/Development/Server-AppServer/src/main/webapp/js/json/"
target_path = "./DTS_Files"

proxy_name_array = []
file_name_array = []

for file in os.scandir(source_path):
    if file.name.endswith(".json") and file.name[:-5] not in EXCLUDED_SERVICES:
        proxy_name_array.append(file.name[:-5])

proxy_name_array.sort()

if not os.path.isdir(target_path):
    os.mkdir(target_path)

# Begin generation of the "lib.cloudcode.service-proxies.d.ts" file.
# This contains the "get<XXX>ServiceProxy" function definitions that are applied to the main Bridge interface.
with open(f"{target_path}/lib.cloudcode.service-proxies.d.ts", "w") as globaldts:
    globaldts.write(f'/// <reference no-default-lib="true"/>\n\n')
    globaldts.write(f'interface ServiceProxies {{\n')

# Process each source JSON file.
for proxy in proxy_name_array:
    try:
        with open(f"{source_path}/{proxy}.json", "r") as output:
            data = json.load(output)
    except FileNotFoundError:
        print(f"File does not exist: {source_path}/{proxy}.json")
    else:
        service_name = data["serviceName"]

        # Massage the service name into an appropriate proxy name (used as part of the output file name).
        proxy_name = re.sub(r'(?<!^)(?=[A-Z])', '-',
                            re.sub(r'^([A-Z0-9]+(?![a-z0-9]))(.*)$', lambda pat: pat.group(1).lower() + pat.group(2),
                                   service_name)).lower()

        # Construct the target output file name.
        output_file = f"lib.cloudcode.{proxy_name}-service-proxy.d.ts"

        # Append the new output file name to our list of file names.
        file_name_array.append(output_file)

        # Append the "get<XXX>ServiceProxy" function definition to the "lib.cloudcode.service-proxies.d.ts" file.
        with open(f"{target_path}/lib.cloudcode.service-proxies.d.ts", "a") as globaldts:
            globaldts.write(f'\t/**\n')
            globaldts.write(f'\t * Retrieves a {data["serviceName"]}Service proxy object.\n')
            globaldts.write(f'\t * \n')
            globaldts.write(
                f'\t * @param session A optional parameter for when a script is executed without a session.\n')
            globaldts.write(f'\t */ \n')
            globaldts.write(
                f'\tget{data["serviceName"]}ServiceProxy(session?: string): {data["serviceName"]}ServiceProxy;\n\n')

        with open(f"{target_path}/{output_file}", "w") as file:
            file.write(f'/// <reference no-default-lib="true"/>\n\n')
            file.write(f'interface {service_name}ServiceProxy {{\n')

            count = 0
            length = len(data["operations"])

            processed_methods = []

            # Process each defined operation.
            for method in data["operations"]:
                method_name = sanitizeMethodName(method["apiMethod"])

                # If the method name for the operation is an empty string, ignore it.
                if len(method_name.lstrip().rstrip()) == 0:
                    continue

                # Check if the method is excluded for this service
                if service_name in EXCLUDED_METHODS and method_name in EXCLUDED_METHODS[service_name]:
                    continue

                # Determine if we've already processed this operation.
                # There are aliases defined in the source JSON, so we only want to process the first occurance.
                methodAlreadyProcessed = False
                try:
                    processed_methods.index(method_name)
                    methodAlreadyProcessed = True
                except ValueError:
                    methodAlreadyProcessed = False

                # If the operation has already been processed, ignore it.
                if methodAlreadyProcessed:
                    continue

                # Append the method name for the operation to our list of processed methods.
                processed_methods.append(method_name)

                typescript_return_type_content = ""
                md_content = fetch_md_content(service_name.lower(), method["apiMethod"].lower())
                if md_content:
                    json_response = extract_json_response(md_content)
                    if json_response:
                        typescript_return_type_content = convert_json_to_typescript(json_response, base_indent_string='\t\t', current_depth=0) # Start inner content with 1 tab + 2 spaces (6 spaces)

                # Process the comments/jsdoc section, this contains a method description along with parameter descriptions.
                file.write(f'\t/**\n')
                file.write(f'\t * {method["desc"]}\n')
                file.write(f'\t * \n')
                param_string = ""
                try:
                    for param in method["paramInfo"]:
                        try:
                            file.write(
                                f'\t * @param  {{{sanitizeParameterType(param["type"])}}} {param["name"]} {param["desc"]}\n')
                        except KeyError:
                            print(f'{service_name}.json - Parameter <{param["name"]}> missing "paramInfo.desc".')
                        param_string += f'{param["name"]}: {sanitizeParameterType(param["type"])}, '
                except KeyError:
                    pass
                    # print(f'{service_name}.json - Missing "paramInfo".')
                file.write(f'\t * @returns ServiceProxyResponse\n')
                file.write(f'\t */ \n')

                if method_name == "createGroupWithSummaryData":
                    method_name = "createGroup"

                if param_string:
                    file.write(f'\t{method_name}({param_string[0:-2]}): ')
                else:
                    file.write(f'\t{method_name}(): ')

                if typescript_return_type_content:
                    file.write('{\n')
                    file.write(typescript_return_type_content)
                    file.write('\t};\n')
                else:
                    file.write('ServiceProxyResponse;\n')

                file.write('\n') # Ensure a single newline separates methods

                count += 1

                if count < length:
                    file.write(f'\n')
            file.write('}')

# Finish generation of the "lib.cloudcode.service-proxies.d.ts" file.
with open(f"{target_path}/lib.cloudcode.service-proxies.d.ts", "a") as globaldts:
    globaldts.write('}')

file_name_array.append("lib.cloudcode.service-proxies.d.ts")

# Generate a "dts_file_names" file that contains a list of all output files.
with open(f"{target_path}/dts_file_names", "w") as file_name:
    for i in file_name_array:
        file_name.write(f'{i}\n')
