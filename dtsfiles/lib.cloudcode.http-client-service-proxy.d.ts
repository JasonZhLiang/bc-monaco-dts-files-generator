/// <reference no-default-lib="true"/>

interface HttpClientServiceProxy {
	/**
	 * Retrieves a JSON document.
	 * 
	 * @param  {string} serviceCode Service identifier to be called (configured in Design | Cloud Code | Web Services or Design | Servers | My Servers).
	 * @param  {string} path Optional. Path to append to the base service url.
	 * @param  {nativeObject} query Optional. Query parameters to include in the http request.
	 * @param  {nativeObject} headers Optional. Header keys and values to include in the http request.
	 * @returns ServiceProxyResponse
	 */ 
	getResponseJson(serviceCode: string, path: string, query: nativeObject, headers: nativeObject): ServiceProxyResponse;

	/**
	 * Retrieves a Text document.
	 * 
	 * @param  {string} serviceCode Service identifier to be called (configured in Design | Cloud Code | Web Services or Design | Servers | My Servers).
	 * @param  {string} path Optional. Path to append to the base service url.
	 * @param  {nativeObject} query Optional. Query parameters to include in the http request.
	 * @param  {nativeObject} headers Optional. Header keys and values to include in the http request.
	 * @returns ServiceProxyResponse
	 */ 
	getResponseText(serviceCode: string, path: string, query: nativeObject, headers: nativeObject): ServiceProxyResponse;

	/**
	 * Posts a JSON document, expects a JSON response.
	 * 
	 * @param  {string} serviceCode Service identifier to be called (configured in Design | Cloud Code | Web Services or Design | Servers | My Servers).
	 * @param  {string} path Optional. Path to append to the base service url.
	 * @param  {nativeObject} query Optional. Query parameters to include in the http request.
	 * @param  {nativeObject} headers Optional. Header keys and values to include in the http request.
	 * @param  {nativeObject} json Valid JSON to POST.
	 * @returns ServiceProxyResponse
	 */ 
	postJsonResponseJson(serviceCode: string, path: string, query: nativeObject, headers: nativeObject, json: nativeObject): ServiceProxyResponse;

	/**
	 * Posts a JSON document, expects a text response.
	 * 
	 * @param  {string} serviceCode Service identifier to be called (configured in Design | Cloud Code | Web Services or Design | Servers | My Servers).
	 * @param  {string} path Optional. Path to append to the base service url.
	 * @param  {nativeObject} query Optional. Query parameters to include in the http request.
	 * @param  {nativeObject} headers Optional. Header keys and values to include in the http request.
	 * @param  {nativeObject} json Valid JSON to POST.
	 * @returns ServiceProxyResponse
	 */ 
	postJsonResponseText(serviceCode: string, path: string, query: nativeObject, headers: nativeObject, json: nativeObject): ServiceProxyResponse;

	/**
	 * Posts a Form encoded document, expects a JSON response.
	 * 
	 * @param  {string} serviceCode Service identifier to be called (configured in Design | Cloud Code | Web Services or Design | Servers | My Servers).
	 * @param  {string} path Optional. Path to append to the base service url.
	 * @param  {nativeObject} query Optional. Query parameters to include in the http request.
	 * @param  {nativeObject} headers Optional. Header keys and values to include in the http request.
	 * @param  {nativeObject} form Valid form data to POST.
	 * @returns ServiceProxyResponse
	 */ 
	postFormResponseJson(serviceCode: string, path: string, query: nativeObject, headers: nativeObject, form: nativeObject): ServiceProxyResponse;

	/**
	 * Posts a Form encoded document, expects a JSON response.
	 * 
	 * @param  {string} serviceCode Service identifier to be called (configured in Design | Cloud Code | Web Services or Design | Servers | My Servers).
	 * @param  {string} path Optional. Path to append to the base service url.
	 * @param  {nativeObject} query Optional. Query parameters to include in the http request.
	 * @param  {nativeObject} headers Optional. Header keys and values to include in the http request.
	 * @param  {nativeObject} formData Valid form data to POST.
	 * @returns ServiceProxyResponse
	 */ 
	postMultipartResponseJson(serviceCode: string, path: string, query: nativeObject, headers: nativeObject, formData: nativeObject): ServiceProxyResponse;

	/**
	 * Posts a Form encoded document, expects a Text response.
	 * 
	 * @param  {string} serviceCode Service identifier to be called (configured in Design | Cloud Code | Web Services or Design | Servers | My Servers).
	 * @param  {string} path Optional. Path to append to the base service url.
	 * @param  {nativeObject} query Optional. Query parameters to include in the http request.
	 * @param  {nativeObject} headers Optional. Header keys and values to include in the http request.
	 * @param  {nativeObject} form Valid form data to POST.
	 * @returns ServiceProxyResponse
	 */ 
	postFormResponseText(serviceCode: string, path: string, query: nativeObject, headers: nativeObject, form: nativeObject): ServiceProxyResponse;

	/**
	 * Posts a text document, expects a Text response.
	 * 
	 * @param  {string} serviceCode Service identifier to be called (configured in Design | Cloud Code | Web Services or Design | Servers | My Servers).
	 * @param  {string} path Optional. Path to append to the base service url.
	 * @param  {nativeObject} query Optional. Query parameters to include in the http request.
	 * @param  {nativeObject} headers Optional. Header keys and values to include in the http request.
	 * @param  {string} text Text to POST.
	 * @returns ServiceProxyResponse
	 */ 
	postTextResponseText(serviceCode: string, path: string, query: nativeObject, headers: nativeObject, text: string): ServiceProxyResponse;

	/**
	 * Posts a JSON document to an offboard service. Send and forget.
	 * 
	 * @param  {string} serviceCode Service identifier to be called (configured in Design | Cloud Code | Web Services or Design | Servers | My Servers).
	 * @param  {string} path Optional. Path to append to the base service url.
	 * @param  {nativeObject} query Optional. Query parameters to include in the http request.
	 * @param  {nativeObject} headers Optional. Header keys and values to include in the http request.
	 * @param  {nativeObject} json Valid JSON to POST.
	 * @returns ServiceProxyResponse
	 */ 
	postJsonOffboard(serviceCode: string, path: string, query: nativeObject, headers: nativeObject, json: nativeObject): ServiceProxyResponse;

	/**
	 * Puts a JSON document, expects a JSON response.
	 * 
	 * @param  {string} serviceCode Service identifier to be called (configured in Design | Cloud Code | Web Services or Design | Servers | My Servers).
	 * @param  {string} path Optional. Path to append to the base service url.
	 * @param  {nativeObject} query Optional. Query parameters to include in the http request.
	 * @param  {nativeObject} headers Optional. Header keys and values to include in the http request.
	 * @param  {nativeObject} json Valid JSON to POST.
	 * @returns ServiceProxyResponse
	 */ 
	putJsonResponseJson(serviceCode: string, path: string, query: nativeObject, headers: nativeObject, json: nativeObject): ServiceProxyResponse;

	/**
	 * Puts a text document, expects a Text response.
	 * 
	 * @param  {string} serviceCode Service identifier to be called (configured in Design | Cloud Code | Web Services or Design | Servers | My Servers).
	 * @param  {string} path Optional. Path to append to the base service url.
	 * @param  {nativeObject} query Optional. Query parameters to include in the http request.
	 * @param  {nativeObject} headers Optional. Header keys and values to include in the http request.
	 * @param  {string} text Text to PUT.
	 * @returns ServiceProxyResponse
	 */ 
	putTextResponseText(serviceCode: string, path: string, query: nativeObject, headers: nativeObject, text: string): ServiceProxyResponse;

	/**
	 * Patches a JSON document, expects a JSON response.
	 * 
	 * @param  {string} serviceCode Service identifier to be called (configured in Design | Cloud Code | Web Services or Design | Servers | My Servers).
	 * @param  {string} path Optional. Path to append to the base service url.
	 * @param  {nativeObject} query Optional. Query parameters to include in the http request.
	 * @param  {nativeObject} headers Optional. Header keys and values to include in the http request.
	 * @param  {nativeObject} json Valid JSON to PATCH.
	 * @returns ServiceProxyResponse
	 */ 
	patchJsonResponseJson(serviceCode: string, path: string, query: nativeObject, headers: nativeObject, json: nativeObject): ServiceProxyResponse;

	/**
	 * Patches a text document, expects a Text response.
	 * 
	 * @param  {string} serviceCode Service identifier to be called (configured in Design | Cloud Code | Web Services or Design | Servers | My Servers).
	 * @param  {string} path Optional. Path to append to the base service url.
	 * @param  {nativeObject} query Optional. Query parameters to include in the http request.
	 * @param  {nativeObject} headers Optional. Header keys and values to include in the http request.
	 * @param  {string} text Text to PATCH.
	 * @returns ServiceProxyResponse
	 */ 
	patchTextResponseText(serviceCode: string, path: string, query: nativeObject, headers: nativeObject, text: string): ServiceProxyResponse;

	/**
	 * Deletes a document.
	 * 
	 * @param  {string} serviceCode Service identifier to be called (configured in Design | Cloud Code | Web Services or Design | Servers | My Servers).
	 * @param  {string} path Optional. Path to append to the base service url.
	 * @param  {nativeObject} query Optional. Query parameters to include in the http request.
	 * @param  {nativeObject} headers Optional. Header keys and values to include in the http request.
	 * @returns ServiceProxyResponse
	 */ 
	delete(serviceCode: string, path: string, query: nativeObject, headers: nativeObject): ServiceProxyResponse;

	/**
	 * Deletes a document, passes a JSON body, expects a JSON response.
	 * 
	 * @param  {string} serviceCode Service identifier to be called (configured in Design | Cloud Code | Web Services or Design | Servers | My Servers).
	 * @param  {string} path Optional. Path to append to the base service url.
	 * @param  {nativeObject} query Optional. Query parameters to include in the http request.
	 * @param  {nativeObject} headers Optional. Header keys and values to include in the http request.
	 * @param  {nativeObject} json Valid JSON to DELETE.
	 * @returns ServiceProxyResponse
	 */ 
	deleteJsonResponseJson(serviceCode: string, path: string, query: nativeObject, headers: nativeObject, json: nativeObject): ServiceProxyResponse;

	/**
	 * Makes a request to Parse Rest API.
	 * 
	 * @param  {string} path Optional. Path to append to the base Parse url.
	 * @param  {nativeObject} query Optional. Query parameters to include in the Parse request.
	 * @param  {string} sessionToken Optional. Parse session token to include in the Parse request.
	 * @returns ServiceProxyResponse
	 */ 
	parseRequest(path: string, query: nativeObject, sessionToken: string): ServiceProxyResponse;

	/**
	 * Executes a HEAD request.
	 * 
	 * @param  {string} serviceCode Service identifier to be called (configured in Design | Cloud Code | Web Services or Design | Servers | My Servers).
	 * @param  {string} path Optional. Path to append to the base service url.
	 * @param  {nativeObject} query Optional. Query parameters to include in the http request.
	 * @param  {nativeObject} headers Optional. Header keys and values to include in the http request.
	 * @returns ServiceProxyResponse
	 */ 
	headRequest(serviceCode: string, path: string, query: nativeObject, headers: nativeObject): ServiceProxyResponse;
}