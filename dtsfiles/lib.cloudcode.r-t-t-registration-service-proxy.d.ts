/// <reference no-default-lib="true"/>

interface RTTRegistrationServiceProxy {
	/**
	 * Request an RTT client connection from an event server
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	requestClientConnection(): ServiceProxyResponse;
}