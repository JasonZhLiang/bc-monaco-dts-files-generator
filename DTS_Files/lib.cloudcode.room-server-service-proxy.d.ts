/// <reference no-default-lib="true"/>

interface RoomServerServiceProxy {
	/**
	 * Launch a hosted server directly. Allows for the bypassing of brainCloud lobby matchmaking.
	 * 
	 * @param  {string} serverName The type of server to launch as defined in App > Design > Servers > My Servers .
	 * @param  {string} scriptName The cloud code script name to invoke for all hosted server launch events.
	 * @param  {Object} scriptData Optional JSON object that will be sent as input to the associated cloud code script.
	 * @param  {string} regionId Optional region id to target for the hosted server launch.
	 * @returns ServiceProxyResponse
	 */ 
	sysLaunchServer(serverName: string, scriptName: string, scriptData: Object, regionId: string): {
		data: {
		    serverId: string;
		};
		status: number;
	};


	/**
	 * Used to retrieve the details of the given room member.
	 * 
	 * @param  {Object} member Member data used as input to a direct launch provider for validating the connection of a client.
	 * @param  {Object} brainCloudContext Data provided by brainCloud when the server instance was launched.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetRoomMember(member: Object, brainCloudContext: Object): {
		status: number;
		data: {
		    answer: string;
		};
	};


	/**
	 * Arbitrary method for calling the script associated with a directly launched hosted server instance.
	 * 
	 * @param  {Object} event Custom data object.
	 * @param  {Object} brainCloudContext Data provided by brainCloud when the server instance was launched. 'scriptId' and 'scriptData' are the values that will be used to invoke the target script.
	 * @returns ServiceProxyResponse
	 */ 
	sysRoomEvent(event: Object, brainCloudContext: Object): {
		status: number;
		data: {
		};
	};


	/**
	 * Indicates that a room is ready for use by the members.
	 * 
	 * @param  {Object} brainCloudContext Data provided by brainCloud when the server instance was launched.
	 * @returns ServiceProxyResponse
	 */ 
	sysRoomReady(brainCloudContext: Object): {
		status: number;
		data: {
		};
	};


	/**
	 * Indicates that the given server instance has started.
	 * 
	 * @param  {string} serverId The room server instance id.
	 * @param  {Object} serverContext JSON object containing server context data.
	 * @returns ServiceProxyResponse
	 */ 
	sysRoomSessionStarted(serverId: string, serverContext: Object): {
		status: number;
		data: {
		};
	};


	/**
	 * Indicates that the given server instance has ended.
	 * 
	 * @param  {string} serverId The room server instance id.
	 * @param  {Object} serverContext JSON object containing server context data. Note that serverContext must contain an entry for SERVER_TYPE (currently only 'Hosted' or 'EdgeGap' are supported) and a CONTAINER_KEY entry (provided via the SERVER_CONTEXT env variable when the server instance is launched).
	 * @returns ServiceProxyResponse
	 */ 
	sysRoomSessionEnded(serverId: string, serverContext: Object): {
		data: {
		};
		status: number;
	};

}