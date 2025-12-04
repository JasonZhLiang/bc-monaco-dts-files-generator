/// <reference no-default-lib="true"/>

interface DispatcherServiceProxy {
	/**
	 * Special json for dispatcher wide cloud code hook.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	processMessage(): ServiceProxyResponse;

}