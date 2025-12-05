/// <reference no-default-lib="true"/>

interface DataStreamServiceProxy {
	/**
	 * Creates custom track event.
	 * 
	 * @param  {string} eventName The name of the event.
	 * @param  {Object} eventProperties The properties of the event.
	 * @returns ServiceProxyResponse
	 */ 
	customTrackEvent(eventName: string, eventProperties: Object): {
		data: any | null;
		status: number;
	};


	/**
	 * Creates custom page event.
	 * 
	 * @param  {string} eventName The name of the event.
	 * @param  {Object} eventProperties The properties of the event.
	 * @returns ServiceProxyResponse
	 */ 
	customPageEvent(eventName: string, eventProperties: Object): {
		data: any | null;
		status: number;
	};


	/**
	 * Creates custom screen event.
	 * 
	 * @param  {string} eventName The name of the event.
	 * @param  {Object} eventProperties The properties of the event.
	 * @returns ServiceProxyResponse
	 */ 
	customScreenEvent(eventName: string, eventProperties: Object): {
		data: any | null;
		status: number;
	};


	/**
	 * Send crash report.
	 * 
	 * @param  {string} crashType Identifies the crash category.
	 * @param  {string} errorMsg Short message describing crash.
	 * @param  {Object} crashJson Exception data.
	 * @param  {string} crashLog Client log up until the crash.
	 * @param  {string} userName Optional name provided by the user. If not provided, defaults to the caller's profile name.
	 * @param  {string} userEmail Optional email address to respond to. If not provided, defaults to the caller's profile email address.
	 * @param  {string} userNotes Notes provided by the user.
	 * @param  {boolean} userSubmitted User submitted flag.
	 * @returns ServiceProxyResponse
	 */ 
	submitCrashReport(crashType: string, errorMsg: string, crashJson: Object, crashLog: string, userName: string, userEmail: string, userNotes: string, userSubmitted: boolean): ServiceProxyResponse;

}