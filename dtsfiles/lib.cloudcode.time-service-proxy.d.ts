/// <reference no-default-lib="true"/>

interface TimeServiceProxy {
	/**
	 * Retrieve the server time in UTC.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	readServerTime(): ServiceProxyResponse;
}