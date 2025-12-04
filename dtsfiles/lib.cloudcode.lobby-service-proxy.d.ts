/// <reference no-default-lib="true"/>

interface LobbyServiceProxy {
	/**
	 * Gets data for the given lobby instance <lobbyId>.
	 * 
	 * @param  {string} lobbyId Id of chosen lobby.
	 * @returns ServiceProxyResponse
	 */ 
	getLobbyData(lobbyId: string): ServiceProxyResponse;

	/**
	 * Gets a map keyed by rating of the lobby instances matching the given type and rating range.
	 * 
	 * @param  {string} lobbyType The type of lobby to look for. Lobby types are defined in the portal.
	 * @param  {nativeObject} criteriaJson JSON object describing the filter criteria. Supported sub-values include: 'rating'.
	 * @returns ServiceProxyResponse
	 */ 
	getLobbyInstances(lobbyType: string, criteriaJson: nativeObject): ServiceProxyResponse;

	/**
	 * Gets a map keyed by rating of the lobby instances matching the given type, rating range, and ping threshold.
	 * 
	 * @param  {string} lobbyType The type of lobby to look for. Lobby types are defined in the portal.
	 * @param  {nativeObject} criteriaJson JSON object describing the filter criteria. Supported sub-values include: 'rating', 'ping'.
	 * @param  {nativeObject} pingData JSON object specifying ping times for the regions returned by the GET_REGIONS_FOR_LOBBIES call.
	 * @returns ServiceProxyResponse
	 */ 
	getLobbyInstancesWithPingData(lobbyType: string, criteriaJson: nativeObject, pingData: nativeObject): ServiceProxyResponse;

	/**
	 * Adds the caller to the lobby entry queue.
	 * 
	 * @param  {string} lobbyType The type of lobby to look for. Lobby types are defined in the portal.
	 * @param  {long} rating The skill rating to use for finding the lobby. Provided as a separate parameter because it may not exactly match the user's rating (especially in cases where parties are involved).
	 * @param  {long} maxSteps The maximum number of steps to wait when looking for an applicable lobby. Each step is ~5 seconds.
	 * @param  {nativeObject} algo The algorithm to use for increasing the search scope.
	 * @param  {nativeObject} filterJson Used to help filter the list of rooms to consider. Passed to the matchmaking filter, if configured.
	 * @param  {nativeArray} otherUserCxIds Array of other users (i.e. party members) to add to the lobby as well. Will constrain things so that only lobbies with room for all players will be considered.
	 * @param  {boolean} isReady Initial ready-status of this user.
	 * @param  {nativeObject} extraJson Initial extra-data about this user.
	 * @param  {string} teamCode Preferred team for this user, if applicable. Send `""` or `null` for automatic assignment.
	 * @returns ServiceProxyResponse
	 */ 
	findLobby(lobbyType: string, rating: long, maxSteps: long, algo: nativeObject, filterJson: nativeObject, otherUserCxIds: nativeArray, isReady: boolean, extraJson: nativeObject, teamCode: string): ServiceProxyResponse;

	/**
	 * Adds the caller to the lobby entry queue.
	 * 
	 * @param  {string} lobbyType The type of lobby to look for. Lobby types are defined in the portal.
	 * @param  {long} rating The skill rating to use for finding the lobby. Provided as a separate parameter because it may not exactly match the user's rating (especially in cases where parties are involved).
	 * @param  {long} maxSteps The maximum number of steps to wait when looking for an applicable lobby. Each step is ~5 seconds.
	 * @param  {nativeObject} algo The algorithm to use for increasing the search scope.
	 * @param  {nativeObject} filterJson Used to help filter the list of rooms to consider. Passed to the matchmaking filter, if configured.
	 * @param  {nativeArray} otherUserCxIds Array of other users (i.e. party members) to add to the lobby as well. Will constrain things so that only lobbies with room for all players will be considered.
	 * @param  {boolean} isReady Initial ready-status of this user.
	 * @param  {nativeObject} extraJson Initial extra-data about this user.
	 * @param  {string} teamCode Preferred team for this user, if applicable. Send `""` or `null` for automatic assignment.
	 * @param  {nativeObject} pingData Ping times for each region available for this lobby type. Can use GET_REGIONS_FOR_LOBBIES to retrieve the list of regions for a given lobby type.
	 * @returns ServiceProxyResponse
	 */ 
	findLobbyWithPingData(lobbyType: string, rating: long, maxSteps: long, algo: nativeObject, filterJson: nativeObject, otherUserCxIds: nativeArray, isReady: boolean, extraJson: nativeObject, teamCode: string, pingData: nativeObject): ServiceProxyResponse;

	/**
	 * Creates an instance of a lobby. Will return the newly created lobby id in the event of a successful creation.
	 * 
	 * @param  {string} lobbyType The type of lobby to look for. Lobby types are defined in the portal.
	 * @param  {long} rating The skill rating to use for finding the lobby. Provided as a separate parameter because it may not exactly match the user's rating (especially in cases where parties are involved).
	 * @param  {nativeArray} otherUserCxIds Array of other users (i.e. party members) to add to the lobby as well. Will constrain things so that only lobbies with room for all players will be considered.
	 * @param  {nativeObject} settings Owner settings for this lobby.
	 * @param  {boolean} isReady Initial ready-status of this user.
	 * @param  {nativeObject} extraJson Initial extra-data about this user.
	 * @param  {string} teamCode Preferred team for this user, if applicable. Send `""` or `null` for automatic assignment.
	 * @returns ServiceProxyResponse
	 */ 
	createLobby(lobbyType: string, rating: long, otherUserCxIds: nativeArray, settings: nativeObject, isReady: boolean, extraJson: nativeObject, teamCode: string): ServiceProxyResponse;

	/**
	 * Creates an instance of a lobby. Will return the newly created lobby id in the event of a successful creation.
	 * 
	 * @param  {string} lobbyType The type of lobby to look for. Lobby types are defined in the portal.
	 * @param  {long} rating The skill rating to use for finding the lobby. Provided as a separate parameter because it may not exactly match the user's rating (especially in cases where parties are involved).
	 * @param  {nativeArray} otherUserCxIds Array of other users (i.e. party members) to add to the lobby as well. Will constrain things so that only lobbies with room for all players will be considered.
	 * @param  {nativeObject} settings Owner settings for this lobby.
	 * @param  {boolean} isReady Initial ready-status of this user.
	 * @param  {nativeObject} extraJson Initial extra-data about this user.
	 * @param  {string} teamCode Preferred team for this user, if applicable. Send `""` or `null` for automatic assignment.
	 * @param  {nativeObject} pingData Ping times for each region available for this lobby type. Can use GET_REGIONS_FOR_LOBBIES to retrieve the list of regions for a given lobby type.
	 * @returns ServiceProxyResponse
	 */ 
	createLobbyWithPingData(lobbyType: string, rating: long, otherUserCxIds: nativeArray, settings: nativeObject, isReady: boolean, extraJson: nativeObject, teamCode: string, pingData: nativeObject): ServiceProxyResponse;

	/**
	 * Adds the caller to the lobby entry queue and will create a lobby if none are found.
	 * 
	 * @param  {string} lobbyType The type of lobby to look for. Lobby types are defined in the portal.
	 * @param  {long} rating The skill rating to use for finding the lobby. Provided as a separate parameter because it may not exactly match the user's rating (especially in cases where parties are involved).
	 * @param  {long} maxSteps The maximum number of steps to wait when looking for an applicable lobby. Each step is ~5 seconds.
	 * @param  {nativeObject} algo The algorithm to use for increasing the search scope.
	 * @param  {nativeObject} filterJson Used to help filter the list of rooms to consider. Passed to the matchmaking filter, if configured.
	 * @param  {nativeArray} otherUserCxIds Array of other users (i.e. party members) to add to the lobby as well. Will constrain things so that only lobbies with room for all players will be considered.
	 * @param  {nativeObject} settings Owner settings for the lobby.
	 * @param  {boolean} isReady Initial ready-status of this user.
	 * @param  {nativeObject} extraJson Initial extra-data about this user.
	 * @param  {string} teamCode Preferred team for this user, if applicable. Send `""` or `null` for automatic assignment.
	 * @returns ServiceProxyResponse
	 */ 
	findOrCreateLobby(lobbyType: string, rating: long, maxSteps: long, algo: nativeObject, filterJson: nativeObject, otherUserCxIds: nativeArray, settings: nativeObject, isReady: boolean, extraJson: nativeObject, teamCode: string): ServiceProxyResponse;

	/**
	 * Adds the caller to the lobby entry queue and will create a lobby if none are found.
	 * 
	 * @param  {string} lobbyType The type of lobby to look for. Lobby types are defined in the portal.
	 * @param  {long} rating The skill rating to use for finding the lobby. Provided as a separate parameter because it may not exactly match the user's rating (especially in cases where parties are involved).
	 * @param  {long} maxSteps The maximum number of steps to wait when looking for an applicable lobby. Each step is ~5 seconds.
	 * @param  {nativeObject} algo The algorithm to use for increasing the search scope.
	 * @param  {nativeObject} filterJson Used to help filter the list of rooms to consider. Passed to the matchmaking filter, if configured.
	 * @param  {nativeArray} otherUserCxIds Array of other users (i.e. party members) to add to the lobby as well. Will constrain things so that only lobbies with room for all players will be considered.
	 * @param  {nativeObject} settings Owner settings for the lobby.
	 * @param  {boolean} isReady Initial ready-status of this user.
	 * @param  {nativeObject} extraJson Initial extra-data about this user.
	 * @param  {string} teamCode Preferred team for this user, if applicable. Send `""` or `null` for automatic assignment.
	 * @param  {nativeObject} pingData Ping times for each region available for this lobby type. Can use GET_REGIONS_FOR_LOBBIES to retrieve the list of regions for a given lobby type.
	 * @returns ServiceProxyResponse
	 */ 
	findOrCreateLobbyWithPingData(lobbyType: string, rating: long, maxSteps: long, algo: nativeObject, filterJson: nativeObject, otherUserCxIds: nativeArray, settings: nativeObject, isReady: boolean, extraJson: nativeObject, teamCode: string, pingData: nativeObject): ServiceProxyResponse;

	/**
	 * Adds the caller to the given lobby instance.
	 * 
	 * @param  {string} lobbyId The lobby instance to join.
	 * @param  {nativeArray} otherUserCxIds Array of other users (i.e. party members) to add to the lobby as well. The call will fail if all users can't be added.
	 * @param  {boolean} isReady Initial ready-status of this user.
	 * @param  {nativeObject} extraJson Initial extra-data about this user.
	 * @param  {string} teamCode Preferred team for this user, if applicable. Send `""` or `null` for automatic assignment.
	 * @returns ServiceProxyResponse
	 */ 
	joinLobby(lobbyId: string, otherUserCxIds: nativeArray, isReady: boolean, extraJson: nativeObject, teamCode: string): ServiceProxyResponse;

	/**
	 * Adds the caller to the given lobby instance.
	 * 
	 * @param  {string} lobbyId The lobby instance to join.
	 * @param  {nativeArray} otherUserCxIds Array of other users (i.e. party members) to add to the lobby as well. The call will fail if all users can't be added.
	 * @param  {boolean} isReady Initial ready-status of this user.
	 * @param  {nativeObject} extraJson Initial extra-data about this user.
	 * @param  {string} teamCode Preferred team for this user, if applicable. Send `""` or `null` for automatic assignment.
	 * @param  {nativeObject} pingData Ping times for each region available for this lobby type. Can use GET_REGIONS_FOR_LOBBIES to retrieve the list of regions for a given lobby type.
	 * @returns ServiceProxyResponse
	 */ 
	joinLobbyWithPingData(lobbyId: string, otherUserCxIds: nativeArray, isReady: boolean, extraJson: nativeObject, teamCode: string, pingData: nativeObject): ServiceProxyResponse;

	/**
	 * Updates the ready status and extra json for the given lobby member.
	 * 
	 * @param  {string} lobbyId Id of chosen lobby.
	 * @param  {boolean} isReady Initial ready-status of this user.
	 * @param  {nativeObject} extraJson Initial extra-data about this user.
	 * @returns ServiceProxyResponse
	 */ 
	updateReady(lobbyId: string, isReady: boolean, extraJson: nativeObject): ServiceProxyResponse;

	/**
	 * Updates the settings for the given lobby instance.
	 * 
	 * @param  {string} lobbyId Id of the specfified lobby.
	 * @param  {nativeObject} settings Configuration data for the room.
	 * @returns ServiceProxyResponse
	 */ 
	updateSettings(lobbyId: string, settings: nativeObject): ServiceProxyResponse;

	/**
	 * Switches the player in the given lobby to the given team.
	 * 
	 * @param  {string} lobbyId Id of chosen lobby.
	 * @param  {string} toTeamCode Specified team code.
	 * @returns ServiceProxyResponse
	 */ 
	switchTeam(lobbyId: string, toTeamCode: string): ServiceProxyResponse;

	/**
	 * Send the given data to all members of the given lobby. Sender must be a member of said lobby.
	 * 
	 * @param  {string} lobbyId Id of chosen lobby.
	 * @param  {nativeObject} signalData Signal data to be sent.
	 * @returns ServiceProxyResponse
	 */ 
	sendSignal(lobbyId: string, signalData: nativeObject): ServiceProxyResponse;

	/**
	 * Causes the caller to leave the specified lobby. If the user was the owner, a new owner will be chosen. If user was the last member, the lobby will be deleted.
	 * 
	 * @param  {string} lobbyId Id of chosen lobby.
	 * @returns ServiceProxyResponse
	 */ 
	leaveLobby(lobbyId: string): ServiceProxyResponse;

	/**
	 * Evicts the specified user from the specified lobby. The caller must be the owner of the lobby.
	 * 
	 * @param  {string} lobbyId Id of chosen lobby.
	 * @param  {string} cxId RTT connection id of specified member to be removed from the lobby.
	 * @returns ServiceProxyResponse
	 */ 
	removeMember(lobbyId: string, cxId: string): ServiceProxyResponse;

	/**
	 * Cancels any FindLobby or FindOrCreateLobby requests that have been previously submitted by the caller for the given lobbyType.
	 * 
	 * @param  {string} cxId RTT connection id.
	 * @param  {string} lobbyType Type of lobby being targeted.
	 * @returns ServiceProxyResponse
	 */ 
	cancelFindRequest(cxId: string, lobbyType: string): ServiceProxyResponse;

	/**
	 * Retrieves the region settings for each of the given lobby types.
	 * 
	 * @param  {nativeArray} lobbyTypes Types of lobby being queried.
	 * @returns ServiceProxyResponse
	 */ 
	getRegionsForLobbies(lobbyTypes: nativeArray): ServiceProxyResponse;

	/**
	 * Indicates that a room is ready for use by the members of the given lobby.
	 * 
	 * @param  {string} lobbyId The id of lobby that this room server is associated with.
	 * @param  {nativeObject} connectInfo Info the clients will use to connect to the room server.
	 * @returns ServiceProxyResponse
	 */ 
	sysRoomReady(lobbyId: string, connectInfo: nativeObject): ServiceProxyResponse;

	/**
	 * Indicates that the room allocation process has been cancelled for the given lobby. <msg> and <details> are optional values.
	 * 
	 * @param  {string} lobbyId The id of lobby that this room server is associated with.
	 * @param  {string} msg Optional message to send to room members.
	 * @param  {nativeObject} details Optional details to send to room members.
	 * @returns ServiceProxyResponse
	 */ 
	sysRoomCancelled(lobbyId: string, msg: string, details: nativeObject): ServiceProxyResponse;

	/**
	 * Indicates that the gameplay for the room associated with the given lobby has completed. The lobby can be returned to the 'setup' state.
	 * 
	 * @param  {string} lobbyId The id of lobby that should be returned to the 'setup' state.
	 * @returns ServiceProxyResponse
	 */ 
	sysRoomStopped(lobbyId: string): ServiceProxyResponse;

	/**
	 * Send the given data to all members of the given lobby.
	 * 
	 * @param  {string} lobbyId Id of chosen lobby.
	 * @param  {nativeObject} signalData Signal data to be sent.
	 * @param  {nativeObject} from Optional 'from' data to be sent.
	 * @returns ServiceProxyResponse
	 */ 
	sysSendSignal(lobbyId: string, signalData: nativeObject, from: nativeObject): ServiceProxyResponse;

	/**
	 * Informs brainCloud that the specified user has left the specified lobby.
	 * 
	 * @param  {string} lobbyId Id of chosen lobby.
	 * @param  {string} cxId RTT connection id of specified member to be removed from the lobby.
	 * @param  {string} reason Optional reason for the member leaving. Can be one of 'LEFT_BY_CHOICE', 'EVICTED', or 'LOST_CONNECTION'.
	 * @param  {string} newOwnerCxId Optional RTT connection id of another lobby member to be made owner of the lobby if the member leaving is the current owner.
	 * @returns ServiceProxyResponse
	 */ 
	sysMemberLeft(lobbyId: string, cxId: string, reason: string, newOwnerCxId: string): ServiceProxyResponse;

	/**
	 * Retrieves lobby membership details for the specified user.
	 * 
	 * @param  {string} lobbyId Id of chosen lobby.
	 * @param  {string} cxId RTT connection id of a lobby member.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetLobbyMember(lobbyId: string, cxId: string): ServiceProxyResponse;

	/**
	 * Disbands the given lobby. <msg> and <details> are optional values.
	 * 
	 * @param  {string} lobbyId The id of lobby that this room server is associated with.
	 * @param  {string} msg Optional message to send to lobby members.
	 * @param  {nativeObject} details Optional data to send to lobby members.
	 * @returns ServiceProxyResponse
	 */ 
	sysDisbandLobby(lobbyId: string, msg: string, details: nativeObject): ServiceProxyResponse;
}