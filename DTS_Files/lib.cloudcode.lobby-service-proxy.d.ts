/// <reference no-default-lib="true"/>

interface LobbyServiceProxy {
	/**
	 * Gets data for the given lobby instance <lobbyId>.
	 * 
	 * @param  {string} lobbyId Id of chosen lobby.
	 * @returns ServiceProxyResponse
	 */ 
	getLobbyData(lobbyId: string): {
		data: {
		    id: string;
		    lobbyType: string;
		    state: string;
		    rating: number;
		    lobbyTypeDef: {
		        lobbyTypeId: string;
		        teams: {
		            all: {
		                minUsers: number;
		                maxUsers: number;
		                autoAssign: number;
		                code: string;
		            };
		        };
		        rules: {
		            allowEarlyStartWithoutMax: number;
		            forceOnTimeStartWithoutReady: number;
		            allowJoinInProgress: number;
		            onTimeStartSecs: number;
		            disbandOnStart: number;
		            everyReadyMinPercent: number;
		            everyReadyMinNum: number;
		            earliestStartSecs: number;
		            tooLateSecs: number;
		        };
		        desc: string;
		    };
		    settings: {
		    };
		    version: number;
		    connectData: {
		    };
		    timetable: {
		        createdAt: number;
		        early: number;
		        onTime: number;
		        tooLate: number;
		    };
		    cRegions: Array<any>;
		    round: number;
		    ownerCxId: string;
		    legacyLobbyOwnerEnabled: number;
		    owner: string;
		    numMembers: number;
		    members: Array<{
		        profileId: string;
		        name: string;
		        pic: string;
		        rating: number;
		        team: string;
		        isReady: number;
		        extra: {
		        };
		        cxId: string;
		    }>;
		};
		status: number;
	};


	/**
	 * Gets a map keyed by rating of the lobby instances matching the given type and rating range.
	 * 
	 * @param  {string} lobbyType The type of lobby to look for. Lobby types are defined in the portal.
	 * @param  {Object} criteriaJson JSON object describing the filter criteria. Supported sub-values include 'rating' (required) and 'includeUnavailable' (optional).
	 * @returns ServiceProxyResponse
	 */ 
	getLobbyInstances(lobbyType: string, criteriaJson: Object): {
		data: {
		    lobbiesByRating: {
		        200: Array<{
		            id: string;
		            lobbyType: string;
		            state: string;
		            rating: number;
		            desc: string;
		            owner: {
		                profileId: string;
		                name: string;
		                rating: number;
		                pic: any | null;
		                cxId: string;
		            };
		            numMembers: number;
		            maxMembers: number;
		            publicSettings: {
		                name: string;
		                pwd: string;
		            };
		        }>;
		    };
		};
		status: number;
	};


	/**
	 * Gets a map keyed by rating of the lobby instances matching the given type, rating range, and ping threshold.
	 * 
	 * @param  {string} lobbyType The type of lobby to look for. Lobby types are defined in the portal.
	 * @param  {Object} criteriaJson JSON object describing the filter criteria. Supported sub-values include: 'rating', 'ping'.
	 * @param  {Object} pingData JSON object specifying ping times for the regions returned by the GET_REGIONS_FOR_LOBBIES call.
	 * @returns ServiceProxyResponse
	 */ 
	getLobbyInstancesWithPingData(lobbyType: string, criteriaJson: Object, pingData: Object): {
		data: {
		    lobbiesByRating: {
		        200: Array<{
		            id: string;
		            lobbyType: string;
		            state: string;
		            rating: number;
		            desc: string;
		            owner: {
		                profileId: string;
		                name: string;
		                rating: number;
		                pic: any | null;
		                cxId: string;
		            };
		            numMembers: number;
		            maxMembers: number;
		        }>;
		    };
		};
		status: number;
	};


	/**
	 * Adds the caller to the lobby entry queue.
	 * 
	 * @param  {string} lobbyType The type of lobby to look for. Lobby types are defined in the portal.
	 * @param  {number} rating The skill rating to use for finding the lobby. Provided as a separate parameter because it may not exactly match the user's rating (especially in cases where parties are involved).
	 * @param  {number} maxSteps The maximum number of steps to wait when looking for an applicable lobby. Each step is ~5 seconds.
	 * @param  {Object} algo The algorithm to use for increasing the search scope.
	 * @param  {Object} filterJson Used to help filter the list of rooms to consider. Passed to the matchmaking filter, if configured.
	 * @param  {Array<any>} otherUserCxIds Array of other users (i.e. party members) to add to the lobby as well. Will constrain things so that only lobbies with room for all players will be considered.
	 * @param  {boolean} isReady Initial ready-status of this user.
	 * @param  {Object} extraJson Initial extra-data about this user.
	 * @param  {string} teamCode Preferred team for this user, if applicable. Send `""` or `null` for automatic assignment.
	 * @returns ServiceProxyResponse
	 */ 
	findLobby(lobbyType: string, rating: number, maxSteps: number, algo: Object, filterJson: Object, otherUserCxIds: Array<any>, isReady: boolean, extraJson: Object, teamCode: string): {
		status: number;
		data: {
		    entryId: string;
		};
	};


	/**
	 * Adds the caller to the lobby entry queue.
	 * 
	 * @param  {string} lobbyType The type of lobby to look for. Lobby types are defined in the portal.
	 * @param  {number} rating The skill rating to use for finding the lobby. Provided as a separate parameter because it may not exactly match the user's rating (especially in cases where parties are involved).
	 * @param  {number} maxSteps The maximum number of steps to wait when looking for an applicable lobby. Each step is ~5 seconds.
	 * @param  {Object} algo The algorithm to use for increasing the search scope.
	 * @param  {Object} filterJson Used to help filter the list of rooms to consider. Passed to the matchmaking filter, if configured.
	 * @param  {Array<any>} otherUserCxIds Array of other users (i.e. party members) to add to the lobby as well. Will constrain things so that only lobbies with room for all players will be considered.
	 * @param  {boolean} isReady Initial ready-status of this user.
	 * @param  {Object} extraJson Initial extra-data about this user.
	 * @param  {string} teamCode Preferred team for this user, if applicable. Send `""` or `null` for automatic assignment.
	 * @param  {Object} pingData Ping times for each region available for this lobby type. Can use GET_REGIONS_FOR_LOBBIES to retrieve the list of regions for a given lobby type.
	 * @returns ServiceProxyResponse
	 */ 
	findLobbyWithPingData(lobbyType: string, rating: number, maxSteps: number, algo: Object, filterJson: Object, otherUserCxIds: Array<any>, isReady: boolean, extraJson: Object, teamCode: string, pingData: Object): {
		status: number;
		data: {
		    entryId: string;
		};
	};


	/**
	 * Creates an instance of a lobby. Will return the newly created lobby id in the event of a successful creation.
	 * 
	 * @param  {string} lobbyType The type of lobby to look for. Lobby types are defined in the portal.
	 * @param  {number} rating The skill rating to use for finding the lobby. Provided as a separate parameter because it may not exactly match the user's rating (especially in cases where parties are involved).
	 * @param  {Array<any>} otherUserCxIds Array of other users (i.e. party members) to add to the lobby as well. Will constrain things so that only lobbies with room for all players will be considered.
	 * @param  {Object} settings Owner settings for this lobby.
	 * @param  {boolean} isReady Initial ready-status of this user.
	 * @param  {Object} extraJson Initial extra-data about this user.
	 * @param  {string} teamCode Preferred team for this user, if applicable. Send `""` or `null` for automatic assignment.
	 * @returns ServiceProxyResponse
	 */ 
	createLobby(lobbyType: string, rating: number, otherUserCxIds: Array<any>, settings: Object, isReady: boolean, extraJson: Object, teamCode: string): {
		status: number;
		data: {
		};
	};


	/**
	 * Creates an instance of a lobby. Will return the newly created lobby id in the event of a successful creation.
	 * 
	 * @param  {string} lobbyType The type of lobby to look for. Lobby types are defined in the portal.
	 * @param  {number} rating The skill rating to use for finding the lobby. Provided as a separate parameter because it may not exactly match the user's rating (especially in cases where parties are involved).
	 * @param  {Array<any>} otherUserCxIds Array of other users (i.e. party members) to add to the lobby as well. Will constrain things so that only lobbies with room for all players will be considered.
	 * @param  {Object} settings Owner settings for this lobby.
	 * @param  {boolean} isReady Initial ready-status of this user.
	 * @param  {Object} extraJson Initial extra-data about this user.
	 * @param  {string} teamCode Preferred team for this user, if applicable. Send `""` or `null` for automatic assignment.
	 * @param  {Object} pingData Ping times for each region available for this lobby type. Can use GET_REGIONS_FOR_LOBBIES to retrieve the list of regions for a given lobby type.
	 * @returns ServiceProxyResponse
	 */ 
	createLobbyWithPingData(lobbyType: string, rating: number, otherUserCxIds: Array<any>, settings: Object, isReady: boolean, extraJson: Object, teamCode: string, pingData: Object): ServiceProxyResponse;


	/**
	 * Adds the caller to the lobby entry queue and will create a lobby if none are found.
	 * 
	 * @param  {string} lobbyType The type of lobby to look for. Lobby types are defined in the portal.
	 * @param  {number} rating The skill rating to use for finding the lobby. Provided as a separate parameter because it may not exactly match the user's rating (especially in cases where parties are involved).
	 * @param  {number} maxSteps The maximum number of steps to wait when looking for an applicable lobby. Each step is ~5 seconds.
	 * @param  {Object} algo The algorithm to use for increasing the search scope.
	 * @param  {Object} filterJson Used to help filter the list of rooms to consider. Passed to the matchmaking filter, if configured.
	 * @param  {Array<any>} otherUserCxIds Array of other users (i.e. party members) to add to the lobby as well. Will constrain things so that only lobbies with room for all players will be considered.
	 * @param  {Object} settings Owner settings for the lobby.
	 * @param  {boolean} isReady Initial ready-status of this user.
	 * @param  {Object} extraJson Initial extra-data about this user.
	 * @param  {string} teamCode Preferred team for this user, if applicable. Send `""` or `null` for automatic assignment.
	 * @returns ServiceProxyResponse
	 */ 
	findOrCreateLobby(lobbyType: string, rating: number, maxSteps: number, algo: Object, filterJson: Object, otherUserCxIds: Array<any>, settings: Object, isReady: boolean, extraJson: Object, teamCode: string): {
		status: number;
		data: {
		    entryId: string;
		};
	};


	/**
	 * Adds the caller to the lobby entry queue and will create a lobby if none are found.
	 * 
	 * @param  {string} lobbyType The type of lobby to look for. Lobby types are defined in the portal.
	 * @param  {number} rating The skill rating to use for finding the lobby. Provided as a separate parameter because it may not exactly match the user's rating (especially in cases where parties are involved).
	 * @param  {number} maxSteps The maximum number of steps to wait when looking for an applicable lobby. Each step is ~5 seconds.
	 * @param  {Object} algo The algorithm to use for increasing the search scope.
	 * @param  {Object} filterJson Used to help filter the list of rooms to consider. Passed to the matchmaking filter, if configured.
	 * @param  {Array<any>} otherUserCxIds Array of other users (i.e. party members) to add to the lobby as well. Will constrain things so that only lobbies with room for all players will be considered.
	 * @param  {Object} settings Owner settings for the lobby.
	 * @param  {boolean} isReady Initial ready-status of this user.
	 * @param  {Object} extraJson Initial extra-data about this user.
	 * @param  {string} teamCode Preferred team for this user, if applicable. Send `""` or `null` for automatic assignment.
	 * @param  {Object} pingData Ping times for each region available for this lobby type. Can use GET_REGIONS_FOR_LOBBIES to retrieve the list of regions for a given lobby type.
	 * @returns ServiceProxyResponse
	 */ 
	findOrCreateLobbyWithPingData(lobbyType: string, rating: number, maxSteps: number, algo: Object, filterJson: Object, otherUserCxIds: Array<any>, settings: Object, isReady: boolean, extraJson: Object, teamCode: string, pingData: Object): {
		status: number;
		data: {
		    entryId: string;
		};
	};


	/**
	 * Adds the caller to the given lobby instance.
	 * 
	 * @param  {string} lobbyId The lobby instance to join.
	 * @param  {Array<any>} otherUserCxIds Array of other users (i.e. party members) to add to the lobby as well. The call will fail if all users can't be added.
	 * @param  {boolean} isReady Initial ready-status of this user.
	 * @param  {Object} extraJson Initial extra-data about this user.
	 * @param  {string} teamCode Preferred team for this user, if applicable. Send `""` or `null` for automatic assignment.
	 * @returns ServiceProxyResponse
	 */ 
	joinLobby(lobbyId: string, otherUserCxIds: Array<any>, isReady: boolean, extraJson: Object, teamCode: string): ServiceProxyResponse;


	/**
	 * Adds the caller to the given lobby instance.
	 * 
	 * @param  {string} lobbyId The lobby instance to join.
	 * @param  {Array<any>} otherUserCxIds Array of other users (i.e. party members) to add to the lobby as well. The call will fail if all users can't be added.
	 * @param  {boolean} isReady Initial ready-status of this user.
	 * @param  {Object} extraJson Initial extra-data about this user.
	 * @param  {string} teamCode Preferred team for this user, if applicable. Send `""` or `null` for automatic assignment.
	 * @param  {Object} pingData Ping times for each region available for this lobby type. Can use GET_REGIONS_FOR_LOBBIES to retrieve the list of regions for a given lobby type.
	 * @returns ServiceProxyResponse
	 */ 
	joinLobbyWithPingData(lobbyId: string, otherUserCxIds: Array<any>, isReady: boolean, extraJson: Object, teamCode: string, pingData: Object): ServiceProxyResponse;


	/**
	 * Updates the ready status and extra json for the given lobby member.
	 * 
	 * @param  {string} lobbyId Id of chosen lobby.
	 * @param  {boolean} isReady Initial ready-status of this user.
	 * @param  {Object} extraJson Initial extra-data about this user.
	 * @returns ServiceProxyResponse
	 */ 
	updateReady(lobbyId: string, isReady: boolean, extraJson: Object): {
		data: {
		};
		status: number;
	};


	/**
	 * Updates the settings for the given lobby instance. The caller must be the owner of the lobby.
	 * 
	 * @param  {string} lobbyId Id of the specified lobby.
	 * @param  {Object} settings Configuration data for the room.
	 * @returns ServiceProxyResponse
	 */ 
	updateSettings(lobbyId: string, settings: Object): {
		status: number;
		data: {
		};
	};


	/**
	 * Switches the player in the given lobby to the given team.
	 * 
	 * @param  {string} lobbyId Id of chosen lobby.
	 * @param  {string} toTeamCode Specified team code.
	 * @returns ServiceProxyResponse
	 */ 
	switchTeam(lobbyId: string, toTeamCode: string): {
		status: number;
		data: {
		};
	};


	/**
	 * Send the given data to all members of the given lobby. Sender must be a member of said lobby.
	 * 
	 * @param  {string} lobbyId Id of chosen lobby.
	 * @param  {Object} signalData Signal data to be sent.
	 * @returns ServiceProxyResponse
	 */ 
	sendSignal(lobbyId: string, signalData: Object): {
		status: number;
		data: {
		};
	};


	/**
	 * Causes the caller to leave the specified lobby. If the user was the owner, a new owner will be chosen. If user was the last member, the lobby will be deleted.
	 * 
	 * @param  {string} lobbyId Id of chosen lobby.
	 * @returns ServiceProxyResponse
	 */ 
	leaveLobby(lobbyId: string): {
		status: number;
		data: {
		};
	};


	/**
	 * Evicts the specified user from the specified lobby. The caller must be the owner of the lobby.
	 * 
	 * @param  {string} lobbyId Id of chosen lobby.
	 * @param  {string} cxId RTT connection id of specified member to be removed from the lobby.
	 * @returns ServiceProxyResponse
	 */ 
	removeMember(lobbyId: string, cxId: string): {
		data: {
		};
		status: number;
	};


	/**
	 * Cancels any FindLobby or FindOrCreateLobby requests that have been previously submitted by the caller for the given lobbyType and (optional) entryId.
	 * 
	 * @param  {string} lobbyType Type of lobby being targeted.
	 * @param  {string} entryId Specific entry id to cancel. Optional.
	 * @returns ServiceProxyResponse
	 */ 
	cancelFindRequest(lobbyType: string, entryId: string): ServiceProxyResponse;


	/**
	 * Retrieves the region settings for each of the given lobby types.
	 * 
	 * @param  {Array<any>} lobbyTypes Types of lobby being queried.
	 * @returns ServiceProxyResponse
	 */ 
	getRegionsForLobbies(lobbyTypes: Array<any>): {
		data: {
		    lobbyTypeRegions: {
		        Relay_lobbyT_v2: Array<string>;
		    };
		    regionPingData: {
		        cacentral1: {
		            type: string;
		            target: string;
		        };
		    };
		};
		status: number;
	};


	/**
	 * Creates an instance of a lobby. Will return the newly created lobby id in the event of a successful creation.
	 * 
	 * @param  {string} ownerCxId The cx of the lobby instance owner.
	 * @param  {string} lobbyType The type of lobby to look for. Lobby types are defined in the portal.
	 * @param  {number} rating The skill rating to use for finding the lobby. Provided as a separate parameter because it may not exactly match the user's rating (especially in cases where parties are involved).
	 * @param  {Array<any>} otherUserCxIds Array of other users (i.e. party members) to add to the lobby as well. Will constrain things so that only lobbies with room for all players will be considered.
	 * @param  {Object} settings Owner settings for this lobby.
	 * @param  {boolean} isReady Initial ready-status of this user.
	 * @param  {Object} extraJson Initial extra-data about this user.
	 * @param  {string} teamCode Preferred team for this user, if applicable. Send `""` or `null` for automatic assignment.
	 * @returns ServiceProxyResponse
	 */ 
	sysCreateLobby(ownerCxId: string, lobbyType: string, rating: number, otherUserCxIds: Array<any>, settings: Object, isReady: boolean, extraJson: Object, teamCode: string): {
		data: {
		    lobbyId: string;
		};
		status: number;
	};


	/**
	 * Creates an instance of a lobby. Will return the newly created lobby id in the event of a successful creation.
	 * 
	 * @param  {string} ownerCxId The cx of the lobby instance owner.
	 * @param  {string} lobbyType The type of lobby to look for. Lobby types are defined in the portal.
	 * @param  {number} rating The skill rating to use for finding the lobby. Provided as a separate parameter because it may not exactly match the user's rating (especially in cases where parties are involved).
	 * @param  {Array<any>} otherUserCxIds Array of other users (i.e. party members) to add to the lobby as well. Will constrain things so that only lobbies with room for all players will be considered.
	 * @param  {Object} settings Owner settings for this lobby.
	 * @param  {boolean} isReady Initial ready-status of this user.
	 * @param  {Object} extraJson Initial extra-data about this user.
	 * @param  {string} teamCode Preferred team for this user, if applicable. Send `""` or `null` for automatic assignment.
	 * @param  {Object} pingData Ping times for each region available for this lobby type. Can use GET_REGIONS_FOR_LOBBIES to retrieve the list of regions for a given lobby type.
	 * @returns ServiceProxyResponse
	 */ 
	sysCreateLobbyWithPingData(ownerCxId: string, lobbyType: string, rating: number, otherUserCxIds: Array<any>, settings: Object, isReady: boolean, extraJson: Object, teamCode: string, pingData: Object): {
		data: {
		    lobbyId: string;
		};
		status: number;
	};


	/**
	 * Gets data for the given lobby instance <lobbyId>.
	 * 
	 * @param  {string} lobbyId Id of chosen lobby.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetLobbyData(lobbyId: string): {
		data: {
		    id: string;
		    lobbyType: string;
		    state: string;
		    rating: number;
		    ownerCxId: string;
		    lobbyTypeDef: {
		        roomConfig: {
		            enableDisconnectButton: number;
		        };
		        lobbyTypeId: string;
		        teams: {
		            all: {
		                minUsers: number;
		                maxUsers: number;
		                autoAssign: number;
		                code: string;
		            };
		        };
		        rules: {
		            allowEarlyStartWithoutMax: number;
		            forceOnTimeStartWithoutReady: number;
		            allowJoinInProgress: number;
		            onTimeStartSecs: number;
		            disbandOnStart: number;
		            everyReadyMinPercent: number;
		            everyReadyMinNum: number;
		            earliestStartSecs: number;
		            tooLateSecs: number;
		        };
		        desc: string;
		    };
		    settings: {
		    };
		    version: number;
		    connectData: {
		    };
		    timetable: {
		        createdAt: number;
		        early: number;
		        onTime: number;
		        tooLate: number;
		        dropDead: number;
		        ignoreDropDeadUntil: number;
		    };
		    cRegions: Array<any>;
		    round: number;
		    isRoomReady: number;
		    keepAliveRateSeconds: number;
		    isAvailable: number;
		    shardId: number;
		    legacyLobbyOwnerEnabled: number;
		    numMembers: number;
		    members: Array<{
		        profileId: string;
		        name: string;
		        pic: string;
		        rating: number;
		        team: string;
		        isReady: number;
		        extra: {
		        };
		        passcode: string;
		        ipAddress: string;
		        cxId: string;
		    }>;
		};
		status: number;
	};


	/**
	 * Adds the given member to the given lobby instance.
	 * 
	 * @param  {string} memberCxId The cx id of the member being added.
	 * @param  {string} lobbyId The lobby instance to join.
	 * @param  {Array<any>} otherUserCxIds Array of other users (i.e. party members) to add to the lobby as well. The call will fail if all users can't be added.
	 * @param  {boolean} isReady Initial ready-status of this user.
	 * @param  {Object} extraJson Initial extra-data about this user.
	 * @param  {string} teamCode Preferred team for this user, if applicable. Send `""` or `null` for automatic assignment.
	 * @returns ServiceProxyResponse
	 */ 
	sysAddMember(memberCxId: string, lobbyId: string, otherUserCxIds: Array<any>, isReady: boolean, extraJson: Object, teamCode: string): {
		status: number;
		data: {
		};
	};


	/**
	 * Adds the given member to the given lobby instance.
	 * 
	 * @param  {string} memberCxId The cx id of the member to add.
	 * @param  {string} lobbyId The lobby instance to join.
	 * @param  {Array<any>} otherUserCxIds Array of other users (i.e. party members) to add to the lobby as well. The call will fail if all users can't be added.
	 * @param  {boolean} isReady Initial ready-status of this user.
	 * @param  {Object} extraJson Initial extra-data about this user.
	 * @param  {string} teamCode Preferred team for this user, if applicable. Send `""` or `null` for automatic assignment.
	 * @param  {Object} pingData Ping times for each region available for this lobby type. Can use GET_REGIONS_FOR_LOBBIES to retrieve the list of regions for a given lobby type.
	 * @returns ServiceProxyResponse
	 */ 
	sysAddMemberWithPingData(memberCxId: string, lobbyId: string, otherUserCxIds: Array<any>, isReady: boolean, extraJson: Object, teamCode: string, pingData: Object): {
		status: number;
		data: {
		};
	};


	/**
	 * Evicts the specified user from the specified lobby.
	 * 
	 * @param  {string} lobbyId Id of chosen lobby.
	 * @param  {string} cxId RTT connection id of specified member to be removed from the lobby.
	 * @returns ServiceProxyResponse
	 */ 
	sysRemoveMember(lobbyId: string, cxId: string): {
		status: number;
		data: {
		};
	};


	/**
	 * Updates the settings for the given lobby instance.
	 * 
	 * @param  {string} lobbyId Id of the specified lobby.
	 * @param  {Object} settings Configuration data for the room.
	 * @returns ServiceProxyResponse
	 */ 
	sysUpdateSettings(lobbyId: string, settings: Object): {
		status: number;
		data: {
		};
	};


	/**
	 * Indicates that a room is ready for use by the members of the given lobby.
	 * 
	 * @param  {string} lobbyId The id of lobby that this room server is associated with.
	 * @param  {Object} connectInfo Info the clients will use to connect to the room server.
	 * @returns ServiceProxyResponse
	 */ 
	sysRoomReady(lobbyId: string, connectInfo: Object): {
		status: number;
		data: {
		};
	};


	/**
	 * Indicates that a room is still running and the associated lobby instance should be kept alive.
	 * 
	 * @param  {string} lobbyId The id of lobby that should be kept alive.
	 * @returns ServiceProxyResponse
	 */ 
	sysRoomKeepAlive(lobbyId: string): {
		status: number;
		data: any | null;
	};


	/**
	 * Indicates that the room allocation process has been cancelled for the given lobby. <msg> and <details> are optional values.
	 * 
	 * @param  {string} lobbyId The id of lobby that this room server is associated with.
	 * @param  {string} msg Optional message to send to room members.
	 * @param  {Object} details Optional details to send to room members.
	 * @returns ServiceProxyResponse
	 */ 
	sysRoomCancelled(lobbyId: string, msg: string, details: Object): {
		status: number;
		data: {
		};
	};


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
	 * @param  {Object} signalData Signal data to be sent.
	 * @param  {Object} from Optional 'from' data to be sent.
	 * @returns ServiceProxyResponse
	 */ 
	sysSendSignal(lobbyId: string, signalData: Object, from: Object): ServiceProxyResponse;


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
	sysGetLobbyMember(lobbyId: string, cxId: string): {
		data: {
		    profileId: string;
		    name: string;
		    pic: string;
		    rating: number;
		    team: string;
		    isReady: number;
		    extra: {
		    };
		    passcode: string;
		    cxId: string;
		};
		status: number;
	};


	/**
	 * Disbands the given lobby. <msg> and <details> are optional values.
	 * 
	 * @param  {string} lobbyId The id of lobby that this room server is associated with.
	 * @param  {string} msg Optional message to send to lobby members.
	 * @param  {Object} details Optional data to send to lobby members.
	 * @returns ServiceProxyResponse
	 */ 
	sysDisbandLobby(lobbyId: string, msg: string, details: Object): ServiceProxyResponse;

}