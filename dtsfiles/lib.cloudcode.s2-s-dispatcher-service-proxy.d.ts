/// <reference no-default-lib="true"/>

interface S2SDispatcherServiceProxy {
	/**
	 * Special json for s2s dispatcher wide cloud code hook.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	processMessage(): ServiceProxyResponse;
}