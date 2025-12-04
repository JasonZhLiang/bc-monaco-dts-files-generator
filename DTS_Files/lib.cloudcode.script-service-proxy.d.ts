/// <reference no-default-lib="true"/>

interface ScriptServiceProxy {
	/**
	 * Schedules a script to run X minutes from now.
	 * 
	 * @param  {String} scriptName The name of the script to be run.
	 * @param  {NativeObject} scriptData Data to be sent to the script in JSON format.
	 * @param  {Long} minutesFromNow Number of minutes from now to run the script.
	 * @returns ServiceProxyResponse
	 */ 
	scheduleRunScriptMinutes(scriptName: string, scriptData: Object, minutesFromNow: number): {
    status: number;
    data: 
    {
        result: 
        {
        };
        scriptName: string;
        jobId: string;
        runState: string;
        description: any | null;
        gameId: string;
        runEndTime: number;
        parameters: 
        {
            testParm1: number;
        };
        runStartTime: number;
        scheduledStartTime: number;
    };
};

	/**
	 * Schedules a script to run at given UTC time.
	 * 
	 * @param  {String} scriptName The name of the script to be run.
	 * @param  {NativeObject} scriptData Data to be sent to the script in JSON format.
	 * @param  {Long} startDateUTC The start date. (date in millis.)
	 * @returns ServiceProxyResponse
	 */ 
	scheduleRunScriptUTC(scriptName: string, scriptData: Object, startDateUTC: number): {
    data: 
    {
        gameId: string;
        description: any | null;
        result: 
        {
        };
        jobId: string;
        localTime: any | null;
        createdAt: number;
        runStartTime: number;
        runEndTime: number;
        playerSessionId: any | null;
        scheduledStartTime: number;
        scriptName: string;
        jobType: string;
        runState: string;
        parameters: 
        {
            parm: string;
        };
        updatedAt: number;
    };
    status: number;
};

	/**
	 * Schedules a script to run at given UTC time.
	 * 
	 * @param  {String} scriptName The name of the script to be run.
	 * @param  {NativeObject} scriptData Data to be sent to the script in JSON format.
	 * @param  {Long} startDateUTC The start date. (date in millis.)
	 * @returns ServiceProxyResponse
	 */ 
	scheduleRunScriptUTCv2(scriptName: string, scriptData: Object, startDateUTC: number): {
    data: 
    {
        gameId: string;
        description: any | null;
        result: 
        {
        };
        jobId: string;
        localTime: any | null;
        createdAt: number;
        runStartTime: number;
        runEndTime: number;
        playerSessionId: any | null;
        scheduledStartTime: number;
        scriptName: string;
        jobType: string;
        runState: string;
        parameters: 
        {
            parm: string;
        };
        updatedAt: number;
    };
    status: number;
};

	/**
	 * Runs a script with parent level context.
	 * 
	 * @param  {String} scriptName The name of the script to be run.
	 * @param  {NativeObject} scriptData Data to be sent to the script in JSON format.
	 * @param  {String} parentLevel The level name of the parent to run the script from.
	 * @returns ServiceProxyResponse
	 */ 
	runParentScript(scriptName: string, scriptData: Object, parentLevel: string): {
    status: number;
    data: 
    {
        success: number;
    };
};

	/**
	 * Runs a service script.
	 * 
	 * @param  {String} scriptName The name of the script to be run.
	 * @param  {NativeObject} scriptData Data to be sent to the script in JSON format.
	 * @returns ServiceProxyResponse
	 */ 
	runScript(scriptName: string, scriptData: Object): {
    status: number;
    data: 
    {
        success: number;
    };
};

	/**
	 * Runs a peer service script.
	 * 
	 * @param  {String} scriptName The name of the script to be run.
	 * @param  {NativeObject} scriptData Data to be sent to the script in json format.
	 * @param  {String} peer The service name of the peer.
	 * @returns ServiceProxyResponse
	 */ 
	runPeerScript(scriptName: string, scriptData: Object, peer: string): {
    status: number;
    data: 
    {
        success: number;
    };
};

	/**
	 * Runs a peer service script asynchronously.
	 * 
	 * @param  {String} scriptName The name of the script to be run.
	 * @param  {NativeObject} scriptData Data to be sent to the script in json format.
	 * @param  {String} peer The service name of the peer.
	 * @returns ServiceProxyResponse
	 */ 
	runPeerScriptAsync(scriptName: string, scriptData: Object, peer: string): {
    status: number;
    data: 
    {
        result: 
        {
        };
        scriptName: string;
        jobId: string;
        runState: string;
        description: any | null;
        gameId: string;
        runEndTime: number;
        parameters: 
        {
            testParm1: number;
        };
        runStartTime: number;
        scheduledStartTime: number;
    };
};

	/**
	 * Cancels a previously scheduled script.
	 * 
	 * @param  {String} jobId The id of the job to cancel.
	 * @returns ServiceProxyResponse
	 */ 
	cancelScheduledScript(jobId: string): {
    status: number;
    data: 
    {
        result: 
        {
        };
        jobType: string;
        scriptName: string;
        jobId: string;
        gameId: string;
        updatedAt: number;
        runState: string;
        description: any | null;
        createdAt: number;
        runEndTime: number;
        localTime: any | null;
        parameters: 
        {
            testParm1: number;
        };
        scheduledStartTime: number;
        runStartTime: number;
    };
};

	/**
	 * Cancels a previously scheduled script, if it exists and is still in Scheduled state.
	 * 
	 * @param  {String} jobId The id of the job to cancel.
	 * @returns ServiceProxyResponse
	 */ 
	sysCancelScheduledScriptIfExists(jobId: string): {
    data: 
    {
        cancelled: number;
    };
    apiCount: number;
    totalCount: number;
    status: number;
};

	/**
	 * Cancels a running user script batch.
	 * 
	 * @param  {String} jobId The id of the job to cancel.
	 * @returns ServiceProxyResponse
	 */ 
	cancelUserScriptBatch(jobId: string): ServiceProxyResponse;

	/**
	 * Cancels a user script batch, if it exists and is in Scheduled, Queued or Running state.
	 * 
	 * @param  {String} jobId The id of the job to cancel.
	 * @returns ServiceProxyResponse
	 */ 
	sysCancelUserScriptBatchIfExists(jobId: string): {
    data: 
    {
        cancelled: number;
    };
    apiCount: number;
    totalCount: number;
    status: number;
};

	/**
	 * Retrieves scripts scheduled to run up to and including the specified start time (UTC in ms).
	 * 
	 * @param  {Long} startDateUTC The start time in milliseconds for which cloud scripts are scheduled to run on or prior to.
	 * @returns ServiceProxyResponse
	 */ 
	getScheduledCloudScripts(startDateUTC: number): {
    data: 
    {
        scheduledJobs: Array<
        {
            gameId: string;
            description: any | null;
            jobId: string;
            localTime: any | null;
            createdAt: number;
            runStartTime: number;
            playerSessionId: any | null;
            scheduledStartTime: number;
            scriptName: string;
            jobType: string;
            parameters: any | null;
            updatedAt: number;
        }>;
    };
    status: number;
};

	/**
	 * Retrieves scripts currently running or queued.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	getRunningOrQueuedCloudScripts(): {
    data: 
    {
        runningOrQueuedJobs: Array<
        {
            gameId: string;
            description: any | null;
            jobId: string;
            localTime: any | null;
            createdAt: number;
            runStartTime: number;
            playerSessionId: any | null;
            scheduledStartTime: number;
            scriptName: string;
            jobType: string;
            parameters: any | null;
            updatedAt: number;
        }>;
    };
    status: number;
};
}