import json
import re
import os


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


source_path = "/Users/jasonl//bitbucket/braincloud-portal/Development/Server-AppServer/src/main/webapp/js/json/"
target_path = "./DTS_Files"

proxy_name_array = []
file_name_array = []

for file in os.scandir(source_path):
    if file.name.endswith(".json") and file.name != "Script.json":
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

                # Process the comments/jsdoc section, this contains a method description along with parameter descriptions.
                file.write(f'\t/**\n')
                file.write(f'\t * {method["desc"]}\n')
                file.write(f'\t * \n')
                param_string = ""
                try:
                    for param in method["paramInfo"]:
                        try:
                            file.write(
                                f'\t * @param  {{{param["type"]}}} {param["name"]} {param["desc"]}\n')
                        except KeyError:
                            print(f'{service_name}.json - Parameter <{param["name"]}> missing "paramInfo.desc".')
                        param_string += f'{param["name"]}: {sanitizeParameterType(param["type"])}, '
                except KeyError:
                    print(f'{service_name}.json - Missing "paramInfo".')
                file.write(f'\t * @returns ServiceProxyResponse\n')
                file.write(f'\t */ \n')

                if param_string:
                    file.write(f'\t{method_name}({param_string[0:-2]}): ServiceProxyResponse;\n')
                else:
                    file.write(f'\t{method_name}(): ServiceProxyResponse;\n')

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
