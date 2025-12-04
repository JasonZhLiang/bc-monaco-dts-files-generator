/// <reference no-default-lib="true"/>

interface HttpClientServiceProxy {
	/**
	 * Retrieves a JSON document.
	 * 
	 * @param  {string} serviceCode Service identifier to be called (configured in Design | Cloud Code | Web Services or Design | Servers | My Servers).
	 * @param  {string} path Optional. Path to append to the base service url.
	 * @param  {Object} query Optional. Query parameters to include in the http request.
	 * @param  {Object} headers Optional. Header keys and values to include in the http request.
	 * @returns ServiceProxyResponse
	 */ 
	getResponseJson(serviceCode: string, path: string, query: Object, headers: Object): {
		status: number;
		data: {
		    statusCode: number;
		    json: {
		        key: string;
		    };
		};
	};


	/**
	 * Retrieves a Text document.
	 * 
	 * @param  {string} serviceCode Service identifier to be called (configured in Design | Cloud Code | Web Services or Design | Servers | My Servers).
	 * @param  {string} path Optional. Path to append to the base service url.
	 * @param  {Object} query Optional. Query parameters to include in the http request.
	 * @param  {Object} headers Optional. Header keys and values to include in the http request.
	 * @returns ServiceProxyResponse
	 */ 
	getResponseText(serviceCode: string, path: string, query: Object, headers: Object): {
		status: number;
		data: {
		    statusCode: number;
		    text: string;
		};
	};


	/**
	 * Posts a JSON document, expects a JSON response.
	 * 
	 * @param  {string} serviceCode Service identifier to be called (configured in Design | Cloud Code | Web Services or Design | Servers | My Servers).
	 * @param  {string} path Optional. Path to append to the base service url.
	 * @param  {Object} query Optional. Query parameters to include in the http request.
	 * @param  {Object} headers Optional. Header keys and values to include in the http request.
	 * @param  {Object} json Valid JSON to POST.
	 * @returns ServiceProxyResponse
	 */ 
	postJsonResponseJson(serviceCode: string, path: string, query: Object, headers: Object, json: Object): {
		status: number;
		data: {
		    statusCode: number;
		    json: {
		        key: string;
		    };
		};
	};


	/**
	 * Posts a JSON document, expects a text response.
	 * 
	 * @param  {string} serviceCode Service identifier to be called (configured in Design | Cloud Code | Web Services or Design | Servers | My Servers).
	 * @param  {string} path Optional. Path to append to the base service url.
	 * @param  {Object} query Optional. Query parameters to include in the http request.
	 * @param  {Object} headers Optional. Header keys and values to include in the http request.
	 * @param  {Object} json Valid JSON to POST.
	 * @returns ServiceProxyResponse
	 */ 
	postJsonResponseText(serviceCode: string, path: string, query: Object, headers: Object, json: Object): ServiceProxyResponse;


	/**
	 * Posts a Form encoded document, expects a JSON response.
	 * 
	 * @param  {string} serviceCode Service identifier to be called (configured in Design | Cloud Code | Web Services or Design | Servers | My Servers).
	 * @param  {string} path Optional. Path to append to the base service url.
	 * @param  {Object} query Optional. Query parameters to include in the http request.
	 * @param  {Object} headers Optional. Header keys and values to include in the http request.
	 * @param  {Object} form Valid form data to POST.
	 * @returns ServiceProxyResponse
	 */ 
	postFormResponseJson(serviceCode: string, path: string, query: Object, headers: Object, form: Object): {
		status: number;
		data: {
		    statusCode: number;
		    json: {
		        key: string;
		    };
		};
	};


	/**
	 * Posts a Form encoded document, expects a JSON response.
	 * 
	 * @param  {string} serviceCode Service identifier to be called (configured in Design | Cloud Code | Web Services or Design | Servers | My Servers).
	 * @param  {string} path Optional. Path to append to the base service url.
	 * @param  {Object} query Optional. Query parameters to include in the http request.
	 * @param  {Object} headers Optional. Header keys and values to include in the http request.
	 * @param  {Object} formData Valid form data to POST.
	 * @returns ServiceProxyResponse
	 */ 
	postMultipartResponseJson(serviceCode: string, path: string, query: Object, headers: Object, formData: Object): ServiceProxyResponse;


	/**
	 * Posts a Form encoded document, expects a Text response.
	 * 
	 * @param  {string} serviceCode Service identifier to be called (configured in Design | Cloud Code | Web Services or Design | Servers | My Servers).
	 * @param  {string} path Optional. Path to append to the base service url.
	 * @param  {Object} query Optional. Query parameters to include in the http request.
	 * @param  {Object} headers Optional. Header keys and values to include in the http request.
	 * @param  {Object} form Valid form data to POST.
	 * @returns ServiceProxyResponse
	 */ 
	postFormResponseText(serviceCode: string, path: string, query: Object, headers: Object, form: Object): {
		status: number;
		data: {
		    statusCode: number;
		    json: {
		        key: string;
		    };
		};
	};


	/**
	 * Posts a text document, expects a Text response.
	 * 
	 * @param  {string} serviceCode Service identifier to be called (configured in Design | Cloud Code | Web Services or Design | Servers | My Servers).
	 * @param  {string} path Optional. Path to append to the base service url.
	 * @param  {Object} query Optional. Query parameters to include in the http request.
	 * @param  {Object} headers Optional. Header keys and values to include in the http request.
	 * @param  {string} text Text to POST.
	 * @returns ServiceProxyResponse
	 */ 
	postTextResponseText(serviceCode: string, path: string, query: Object, headers: Object, text: string): {
		status: number;
		data: {
		    statusCode: number;
		    text: string;
		};
	};


	/**
	 * Posts a text document, expects a Json response.
	 * 
	 * @param  {string} serviceCode Service identifier to be called (configured in Design | Cloud Code | Web Services or Design | Servers | My Servers).
	 * @param  {string} path Optional. Path to append to the base service url.
	 * @param  {Object} query Optional. Query parameters to include in the http request.
	 * @param  {Object} headers Optional. Header keys and values to include in the http request.
	 * @param  {string} text Text to POST.
	 * @returns ServiceProxyResponse
	 */ 
	postTextResponseJson(serviceCode: string, path: string, query: Object, headers: Object, text: string): {
		status: number;
		data: {
		    statusCode: number;
		    json: {
		        key: string;
		    };
		};
	};


	/**
	 * Posts a JSON document to an offboard service. Send and forget.
	 * 
	 * @param  {string} serviceCode Service identifier to be called (configured in Design | Cloud Code | Web Services or Design | Servers | My Servers).
	 * @param  {string} path Optional. Path to append to the base service url.
	 * @param  {Object} query Optional. Query parameters to include in the http request.
	 * @param  {Object} headers Optional. Header keys and values to include in the http request.
	 * @param  {Object} json Valid JSON to POST.
	 * @returns ServiceProxyResponse
	 */ 
	postJsonOffboard(serviceCode: string, path: string, query: Object, headers: Object, json: Object): {
		data: any | null;
		status: number;
	};


	/**
	 * Puts a JSON document, expects a JSON response.
	 * 
	 * @param  {string} serviceCode Service identifier to be called (configured in Design | Cloud Code | Web Services or Design | Servers | My Servers).
	 * @param  {string} path Optional. Path to append to the base service url.
	 * @param  {Object} query Optional. Query parameters to include in the http request.
	 * @param  {Object} headers Optional. Header keys and values to include in the http request.
	 * @param  {Object} json Valid JSON to POST.
	 * @returns ServiceProxyResponse
	 */ 
	putJsonResponseJson(serviceCode: string, path: string, query: Object, headers: Object, json: Object): {
		data: {
		    json: {
		        message: string;
		    };
		    statusCode: number;
		};
		status: number;
	};


	/**
	 * Puts a text document, expects a Text response.
	 * 
	 * @param  {string} serviceCode Service identifier to be called (configured in Design | Cloud Code | Web Services or Design | Servers | My Servers).
	 * @param  {string} path Optional. Path to append to the base service url.
	 * @param  {Object} query Optional. Query parameters to include in the http request.
	 * @param  {Object} headers Optional. Header keys and values to include in the http request.
	 * @param  {string} text Text to PUT.
	 * @returns ServiceProxyResponse
	 */ 
	putTextResponseText(serviceCode: string, path: string, query: Object, headers: Object, text: string): {
		data: {
		    text: string;
		    statusCode: number;
		};
		status: number;
	};


	/**
	 * Patches a JSON document, expects a JSON response.
	 * 
	 * @param  {string} serviceCode Service identifier to be called (configured in Design | Cloud Code | Web Services or Design | Servers | My Servers).
	 * @param  {string} path Optional. Path to append to the base service url.
	 * @param  {Object} query Optional. Query parameters to include in the http request.
	 * @param  {Object} headers Optional. Header keys and values to include in the http request.
	 * @param  {Object} json Valid JSON to PATCH.
	 * @returns ServiceProxyResponse
	 */ 
	patchJsonResponseJson(serviceCode: string, path: string, query: Object, headers: Object, json: Object): {
		data: {
		    json: {
		        message: string;
		    };
		    statusCode: number;
		};
		status: number;
	};


	/**
	 * Patches a text document, expects a Text response.
	 * 
	 * @param  {string} serviceCode Service identifier to be called (configured in Design | Cloud Code | Web Services or Design | Servers | My Servers).
	 * @param  {string} path Optional. Path to append to the base service url.
	 * @param  {Object} query Optional. Query parameters to include in the http request.
	 * @param  {Object} headers Optional. Header keys and values to include in the http request.
	 * @param  {string} text Text to PATCH.
	 * @returns ServiceProxyResponse
	 */ 
	patchTextResponseText(serviceCode: string, path: string, query: Object, headers: Object, text: string): {
		data: {
		    text: string;
		    statusCode: number;
		};
		status: number;
	};


	/**
	 * Deletes a document.
	 * 
	 * @param  {string} serviceCode Service identifier to be called (configured in Design | Cloud Code | Web Services or Design | Servers | My Servers).
	 * @param  {string} path Optional. Path to append to the base service url.
	 * @param  {Object} query Optional. Query parameters to include in the http request.
	 * @param  {Object} headers Optional. Header keys and values to include in the http request.
	 * @returns ServiceProxyResponse
	 */ 
	delete(serviceCode: string, path: string, query: Object, headers: Object): {
		data: {
		    text: string;
		    statusCode: number;
		};
		status: number;
	};


	/**
	 * Deletes a document, passes a JSON body, expects a JSON response.
	 * 
	 * @param  {string} serviceCode Service identifier to be called (configured in Design | Cloud Code | Web Services or Design | Servers | My Servers).
	 * @param  {string} path Optional. Path to append to the base service url.
	 * @param  {Object} query Optional. Query parameters to include in the http request.
	 * @param  {Object} headers Optional. Header keys and values to include in the http request.
	 * @param  {Object} json Valid JSON to DELETE.
	 * @returns ServiceProxyResponse
	 */ 
	deleteJsonResponseJson(serviceCode: string, path: string, query: Object, headers: Object, json: Object): {
		data: {
		    json: {
		        message: string;
		    };
		    statusCode: number;
		};
		status: number;
	};


	/**
	 * Makes a request to Parse Rest API.
	 * 
	 * @param  {string} path Optional. Path to append to the base Parse url.
	 * @param  {Object} query Optional. Query parameters to include in the Parse request.
	 * @param  {string} sessionToken Optional. Parse session token to include in the Parse request.
	 * @returns ServiceProxyResponse
	 */ 
	parseRequest(path: string, query: Object, sessionToken: string): {
		status: number;
		data: {
		    statusCode: number;
		    json: {
		        key: string;
		    };
		};
	};


	/**
	 * Executes a HEAD request.
	 * 
	 * @param  {string} serviceCode Service identifier to be called (configured in Design | Cloud Code | Web Services or Design | Servers | My Servers).
	 * @param  {string} path Optional. Path to append to the base service url.
	 * @param  {Object} query Optional. Query parameters to include in the http request.
	 * @param  {Object} headers Optional. Header keys and values to include in the http request.
	 * @returns ServiceProxyResponse
	 */ 
	headRequest(serviceCode: string, path: string, query: Object, headers: Object): {
		status: number;
		data: {
		    statusCode: number;
		};
	};

}