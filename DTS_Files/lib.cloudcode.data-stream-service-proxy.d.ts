/// <reference no-default-lib="true"/>

interface DataStreamServiceProxy {
	/**
	 * Creates custom track event.
	 * 
	 * @param  {String} eventName The name of the event.
	 * @param  {NativeObject} eventProperties The properties of the event.
	 * @returns ServiceProxyResponse
	 */ 
	customTrackEvent(eventName: string, eventProperties: Object): {
    status: number;
    data: any | null;
};

	/**
	 * Creates custom page event.
	 * 
	 * @param  {String} eventName The name of the event.
	 * @param  {NativeObject} eventProperties The properties of the event.
	 * @returns ServiceProxyResponse
	 */ 
	customPageEvent(eventName: string, eventProperties: Object): {
    status: number;
    data: any | null;
};

	/**
	 * Creates custom screen event.
	 * 
	 * @param  {String} eventName The name of the event.
	 * @param  {NativeObject} eventProperties The properties of the event.
	 * @returns ServiceProxyResponse
	 */ 
	customScreenEvent(eventName: string, eventProperties: Object): {
    status: number;
    data: any | null;
};

	/**
	 * Send crash report.
	 * 
	 * @param  {String} crashType Identifies the crash category.
	 * @param  {String} errorMsg Short message describing crash.
	 * @param  {NativeObject} crashJson Exception data.
	 * @param  {String} crashLog Client log up until the crash.
	 * @param  {String} userName Optional name provided by the user. If not provided, defaults to the caller's profile name.
	 * @param  {String} userEmail Optional email address to respond to. If not provided, defaults to the caller's profile email address.
	 * @param  {String} userNotes Notes provided by the user.
	 * @param  {Boolean} userSubmitted User submitted flag.
	 * @returns ServiceProxyResponse
	 */ 
	submitCrashReport(crashType: string, errorMsg: string, crashJson: Object, crashLog: string, userName: string, userEmail: string, userNotes: string, userSubmitted: boolean): ServiceProxyResponse;
}