/// <reference no-default-lib="true"/>

interface DataStreamServiceProxy {
	/**
	 * Creates custom track event.
	 * 
	 * @param  {string} eventName The name of the event.
	 * @param  {nativeObject} eventProperties The properties of the event.
	 * @returns ServiceProxyResponse
	 */ 
	customTrackEvent(eventName: string, eventProperties: nativeObject): ServiceProxyResponse;

	/**
	 * Creates custom page event.
	 * 
	 * @param  {string} eventName The name of the event.
	 * @param  {nativeObject} eventProperties The properties of the event.
	 * @returns ServiceProxyResponse
	 */ 
	customPageEvent(eventName: string, eventProperties: nativeObject): ServiceProxyResponse;

	/**
	 * Creates custom screen event.
	 * 
	 * @param  {string} eventName The name of the event.
	 * @param  {nativeObject} eventProperties The properties of the event.
	 * @returns ServiceProxyResponse
	 */ 
	customScreenEvent(eventName: string, eventProperties: nativeObject): ServiceProxyResponse;

	/**
	 * Send crash report.
	 * 
	 * @param  {string} crashType Identifies the crash category.
	 * @param  {string} errorMsg Short message describing crash.
	 * @param  {nativeObject} crashJson Exception data.
	 * @param  {string} crashLog Client log up until the crash.
	 * @param  {string} userName Optional name provided by the user. If not provided, defaults to the caller's profile name.
	 * @param  {string} userEmail Optional email address to respond to. If not provided, defaults to the caller's profile email address.
	 * @param  {string} userNotes Notes provided by the user.
	 * @param  {boolean} userSubmitted User submitted flag.
	 * @returns ServiceProxyResponse
	 */ 
	submitCrashReport(crashType: string, errorMsg: string, crashJson: nativeObject, crashLog: string, userName: string, userEmail: string, userNotes: string, userSubmitted: boolean): ServiceProxyResponse;
}