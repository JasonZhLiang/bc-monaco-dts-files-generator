/// <reference no-default-lib="true"/>

interface ScriptServiceProxy {
	/**
	 * Schedules a script to run X minutes from now.
	 * 
	 * @param  {string} scriptName The name of the script to be run.
	 * @param  {nativeObject} scriptData Data to be sent to the script in JSON format.
	 * @param  {long} minutesFromNow Number of minutes from now to run the script.
	 * @returns ServiceProxyResponse
	 */ 
	scheduleRunScriptMinutes(scriptName: string, scriptData: nativeObject, minutesFromNow: long): ServiceProxyResponse;

	/**
	 * Schedules a script to run at given UTC time.
	 * 
	 * @param  {string} scriptName The name of the script to be run.
	 * @param  {nativeObject} scriptData Data to be sent to the script in JSON format.
	 * @param  {date} startDateUTC The start date. (date in millis.)
	 * @returns ServiceProxyResponse
	 */ 
	scheduleRunScriptUTC(scriptName: string, scriptData: nativeObject, startDateUTC: date): ServiceProxyResponse;

	/**
	 * Schedules a script to run at given UTC time.
	 * 
	 * @param  {string} scriptName The name of the script to be run.
	 * @param  {nativeObject} scriptData Data to be sent to the script in JSON format.
	 * @param  {date} startDateUTC The start date. (date in millis.)
	 * @returns ServiceProxyResponse
	 */ 
	scheduleRunScriptUTCv2(scriptName: string, scriptData: nativeObject, startDateUTC: date): ServiceProxyResponse;

	/**
	 * Runs a script with parent level context.
	 * 
	 * @param  {string} scriptName The name of the script to be run.
	 * @param  {nativeObject} scriptData Data to be sent to the script in JSON format.
	 * @param  {string} parentLevel The level name of the parent to run the script from.
	 * @returns ServiceProxyResponse
	 */ 
	runParentScript(scriptName: string, scriptData: nativeObject, parentLevel: string): ServiceProxyResponse;

	/**
	 * Runs a service script.
	 * 
	 * @param  {string} scriptName The name of the script to be run.
	 * @param  {nativeObject} scriptData Data to be sent to the script in JSON format.
	 * @returns ServiceProxyResponse
	 */ 
	runScript(scriptName: string, scriptData: nativeObject): ServiceProxyResponse;

	/**
	 * Runs a peer service script.
	 * 
	 * @param  {string} scriptName The name of the script to be run.
	 * @param  {nativeObject} scriptData Data to be sent to the script in json format.
	 * @param  {string} peer The service name of the peer.
	 * @returns ServiceProxyResponse
	 */ 
	runPeerScript(scriptName: string, scriptData: nativeObject, peer: string): ServiceProxyResponse;

	/**
	 * Runs a peer service script asynchronously.
	 * 
	 * @param  {string} scriptName The name of the script to be run.
	 * @param  {nativeObject} scriptData Data to be sent to the script in json format.
	 * @param  {string} peer The service name of the peer.
	 * @returns ServiceProxyResponse
	 */ 
	runPeerScriptAsync(scriptName: string, scriptData: nativeObject, peer: string): ServiceProxyResponse;

	/**
	 * Cancels a previously scheduled script.
	 * 
	 * @param  {string} jobId The id of the job to cancel.
	 * @returns ServiceProxyResponse
	 */ 
	cancelScheduledScript(jobId: string): ServiceProxyResponse;

	/**
	 * Cancels a previously scheduled script, if it exists and is still in Scheduled state.
	 * 
	 * @param  {string} jobId The id of the job to cancel.
	 * @returns ServiceProxyResponse
	 */ 
	sysCancelScheduledScriptIfExists(jobId: string): ServiceProxyResponse;

	/**
	 * Cancels a running user script batch.
	 * 
	 * @param  {string} jobId The id of the job to cancel.
	 * @returns ServiceProxyResponse
	 */ 
	cancelUserScriptBatch(jobId: string): ServiceProxyResponse;

	/**
	 * Cancels a user script batch, if it exists and is in Scheduled, Queued or Running state.
	 * 
	 * @param  {string} jobId The id of the job to cancel.
	 * @returns ServiceProxyResponse
	 */ 
	sysCancelUserScriptBatchIfExists(jobId: string): ServiceProxyResponse;

	/**
	 * Retrieves scripts scheduled to run up to and including the specified start time (UTC in ms).
	 * 
	 * @param  {long} startDateUTC The start time in milliseconds for which cloud scripts are scheduled to run on or prior to.
	 * @returns ServiceProxyResponse
	 */ 
	getScheduledCloudScripts(startDateUTC: long): ServiceProxyResponse;

	/**
	 * Retrieves scripts currently running or queued.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	getRunningOrQueuedCloudScripts(): ServiceProxyResponse;
}