/// <reference no-default-lib="true"/>

interface HttpClientServiceProxy {
	/**
	 * Retrieves a Json document.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	getResponseJson(): ServiceProxyResponse;

	/**
	 * Retrieves a Text document.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	getResponseText(): ServiceProxyResponse;

	/**
	 * Posts a JSON document, expects a Json response.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	postJsonResponseJson(): ServiceProxyResponse;

	/**
	 * Posts a JSON document, expects a text response.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	postJsonResponseText(): ServiceProxyResponse;

	/**
	 * Posts a Form encoded document, expects a Json response.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	postFormResponseJson(): ServiceProxyResponse;

	/**
	 * Posts a Form encoded document, expects a Json response.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	postMultipartResponseJson(): ServiceProxyResponse;

	/**
	 * Posts a Form encoded document, expects a Text response.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	postFormResponseText(): ServiceProxyResponse;

	/**
	 * Posts a text document, expects a Text response.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	postTextResponseText(): ServiceProxyResponse;

	/**
	 * Posts a JSON document to an offboard service. Send and forget.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	postJsonOffboard(): ServiceProxyResponse;

	/**
	 * Puts a JSON document, expects a Json response.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	putJsonResponseJson(): ServiceProxyResponse;

	/**
	 * Puts a text document, expects a Text response.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	putTextResponseText(): ServiceProxyResponse;

	/**
	 * Patches a JSON document, expects a Json response.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	patchJsonResponseJson(): ServiceProxyResponse;

	/**
	 * Patches a text document, expects a Text response.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	patchTextResponseText(): ServiceProxyResponse;

	/**
	 * Deletes a document.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	delete(): ServiceProxyResponse;

	/**
	 * Deletes a document, passes a Json body, expects a Json response.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	deleteJsonResponseJson(): ServiceProxyResponse;

	/**
	 * Makes a request to Parse Rest API.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	parseRequest(): ServiceProxyResponse;

	/**
	 * Executes a HEAD request.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	headRequest(): ServiceProxyResponse;
}