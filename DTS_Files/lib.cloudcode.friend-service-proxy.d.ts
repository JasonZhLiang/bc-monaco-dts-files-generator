/// <reference no-default-lib="true"/>

interface FriendServiceProxy {
	/**
	 * Reads entity data of friend.
	 * 
	 * @param  {string} friendId Profile id of friend who owns entity.
	 * @param  {string} entityId Id of entity to retrieve.
	 * @returns ServiceProxyResponse
	 */ 
	readFriendEntity(friendId: string, entityId: string): {
		data: {
		    entityId: string;
		    entityType: string;
		    version: number;
		    data: {
		        ACCOUNT_CREATION_TIME: number;
		        ALL_TIME_SCORE: number;
		        FIRST_PLAY_TIME: number;
		    };
		    acl: {
		        other: number;
		    };
		    createdAt: number;
		    updatedAt: number;
		};
		status: number;
	};


	/**
	 * Reads entities data of friends.
	 * 
	 * @param  {string} entityType Type of entities to retrieve.
	 * @returns ServiceProxyResponse
	 */ 
	readFriendsEntities(entityType: string): {
		data: {
		    results: Array<{
		        userId: string;
		        entities: Array<Record<string, any>>;
		    }>;
		};
		status: number;
	};


	/**
	 * Updates the friend summary data associated with the logged in user.
	 * 
	 * @param  {string} friendId Profile id of friend who owns entity.
	 * @returns ServiceProxyResponse
	 */ 
	readFriendUserState(friendId: string): {
		data: {
		    vcPurchased: number;
		    xpCapped: number;
		    experiencePoints: number;
		    playerName: string;
		    vcClaimed: number;
		    parentProfileId: any | null;
		    countryCode: any | null;
		    loginCount: number;
		    server_time: number;
		    experienceLevel: number;
		    entities: Array<{
		        entityId: string;
		        entityType: string;
		        version: number;
		        data: Record<string, any>;
		        acl: Record<string, any>;
		        createdAt: number;
		        updatedAt: number;
		    }>;
		    currency: {
		        coin: Record<string, any>;
		    };
		    statistics: {
		        SCORE_STREAK_COUNT: number;
		    };
		    abTestingId: number;
		    id: string;
		    profileId: string;
		};
		status: number;
	};


	/**
	 * Retrieves the external ID for the specified user profile ID on the specified social platform.
	 * 
	 * @param  {string} profileId Profile (user) id.
	 * @param  {string} authenticationType Associated authentication type.
	 * @returns ServiceProxyResponse
	 */ 
	getExternalIdForProfileId(profileId: string, authenticationType: string): {
		data: {
		    externalId: string;
		};
		status: number;
	};


	/**
	 * Retrieves summary information for the specified user profile ID.
	 * 
	 * @param  {string} profileId Profile (user) id.
	 * @returns ServiceProxyResponse
	 */ 
	getSummaryDataForProfileId(profileId: string): {
		data: {
		    pictureUrl: string;
		    email: any | null;
		    profileId: string;
		    playerSummaryData: {
		        LEVEL: number;
		    };
		    profileName: string;
		};
		status: number;
	};


	/**
	 * Retrieves profile information for the specified user.
	 * 
	 * @param  {string} externalId External id.
	 * @param  {string} authenticationType Associated authentication type.
	 * @returns ServiceProxyResponse
	 */ 
	getProfileInfoForCredential(externalId: string, authenticationType: string): {
		data: {
		    playerName: string;
		    email: any | null;
		    profileId: string;
		    summaryFriendData: {
		        LEVEL: number;
		    };
		};
		status: number;
	};


	/**
	 * Retrieves profile information for the specified user. Silently fails
	 * 
	 * @param  {string} externalId External id.
	 * @param  {string} authenticationType Associated authentication type.
	 * @returns ServiceProxyResponse
	 */ 
	getProfileInfoForCredentialIfExists(externalId: string, authenticationType: string): {
		data: {
		};
		status: number;
	};


	/**
	 * Retrieves profile information for the specified user.
	 * 
	 * @param  {string} externalId The external id.
	 * @param  {string} externalAuthType The name of the custom authentication type (linked to a cloud script that performs authentication.) Configured via the **Design &#124; Authentication &#124; External** page of the Design Portal.
	 * @returns ServiceProxyResponse
	 */ 
	getProfileInfoForExternalAuthId(externalId: string, externalAuthType: string): {
		data: {
		    playerName: string;
		    email: any | null;
		    playerId: string;
		    playerSummaryData: {
		        LEVEL: number;
		    };
		};
		status: number;
	};


	/**
	 * Retrieves profile information for the specified user. Silently fails
	 * 
	 * @param  {string} externalId The external id.
	 * @param  {string} externalAuthType The name of the custom authentication type (linked to a cloud script that performs authentication.) Configured via the **Design &#124; Authentication &#124; External** page of the Design Portal.
	 * @returns ServiceProxyResponse
	 */ 
	getProfileInfoForExternalAuthIdIfExists(externalId: string, externalAuthType: string): {
		data: {
		};
		status: number;
	};


	/**
	 * Retrieves profile information for exactly matched user names. Optional parameter: maxResults
	 * 
	 * @param  {string} searchText The exact string to search for.
	 * @param  {number} maxResults Maximum number of results to return.
	 * @returns ServiceProxyResponse
	 */ 
	findUsersByExactName(searchText: string, maxResults: number): {
		data: {
		    matches: Array<{
		        profileId: string;
		        profileName: string;
		        playerSummaryData: any | null;
		        pictureUrl: string;
		    }>;
		    matchedCount: number;
		};
		status: number;
	};


	/**
	 * Retrieves profile information for users whose name starts with search text. Optional parameter: maxResults
	 * 
	 * @param  {string} searchText The exact string to search for.
	 * @param  {number} maxResults Maximum number of results to return.
	 * @returns ServiceProxyResponse
	 */ 
	findUsersByNameStartingWith(searchText: string, maxResults: number): {
		data: {
		    matchedCount: number;
		    message: string;
		    matches: Array<{
		        profileId: string;
		        profileName: string;
		        summaryFriendData: any | null;
		        pictureUrl: any | null;
		    }>;
		};
		status: number;
	};


	/**
	 * Retrieves profile information for partially matched user names. Optional parameter: maxResults
	 * 
	 * @param  {string} searchText The substring to search for. Minimum length of 3 characters.
	 * @param  {number} maxResults Maximum number of results to return.
	 * @returns ServiceProxyResponse
	 */ 
	findUsersBySubstrName(searchText: string, maxResults: number): {
		data: {
		    matches: Array<{
		        profileId: string;
		        profileName: string;
		        playerSummaryData: any | null;
		        pictureUrl: string;
		    }>;
		    matchedCount: number;
		};
		status: number;
	};


	/**
	 * Retrieves profile information based on the search criteria of the user summary data.
	 * 
	 * @param  {string} where A mongo style query string.
	 * @param  {number} maxResults Maximum number of results to return.
	 * @returns ServiceProxyResponse
	 */ 
	findUsersByUserSummary(where: string, maxResults: number): {
		data: {
		    matches: Array<{
		        profileId: string;
		        profileName: string;
		        playerSummaryData: any | null;
		        pictureUrl: string;
		    }>;
		    matchedCount: number;
		};
		status: number;
	};


	/**
	 * Retrieves profile information for the specified universal id.
	 * 
	 * @param  {string} searchText The universalId to search for.
	 * @returns ServiceProxyResponse
	 */ 
	findUserByExactUniversalId(searchText: string): {
		data: {
		    matchedCount: number;
		    matches: Array<{
		        profileId: string;
		        profileName: string;
		        summaryFriendData: any | null;
		        pictureUrl: any | null;
		    }>;
		};
		status: number;
	};


	/**
	 * Retrieves user information for partially matched universal IDs. Optional parameter: maxResults. Deprecated: use FindUserByExactUniversalId instead.
	 * 
	 * @param  {string} searchText The substring to search for. Minimum length of 3 characters.
	 * @param  {number} maxResults Maximum number of results to return. If there are more the message.
	 * @returns ServiceProxyResponse
	 */ 
	findUserByUniversalId(searchText: string, maxResults: number): {
		data: {
		    matchedCount: number;
		    matches: Array<{
		        profileId: string;
		        profileName: string;
		        summaryFriendData: any | null;
		        pictureUrl: any | null;
		    }>;
		};
		status: number;
	};


	/**
	 * Retrieves profile information for users whose universal ID starts with search text. Optional parameter: maxResults
	 * 
	 * @param  {string} searchText The substring to search for. Minimum length of 3 characters.
	 * @param  {number} maxResults Maximum number of results to return. If there are more the message.
	 * @returns ServiceProxyResponse
	 */ 
	findUsersByUniversalIdStartingWith(searchText: string, maxResults: number): {
		data: {
		    matchedCount: number;
		    message: string;
		    matches: Array<{
		        profileId: string;
		        profileName: string;
		        summaryFriendData: any | null;
		        pictureUrl: any | null;
		    }>;
		};
		status: number;
	};


	/**
	 * Retrieves the friend summary data associated with the logged in user. Optional parameters: includeNetworkFriends and includeSummaryData
	 * 
	 * @param  {"brainCloud" | "Facebook" | "All"} friendPlatform Friend platform to query. Valid values are "Facebook", "Steam", "PlaystationNetwork", "brainCloud" and "All".
	 * @param  {boolean} includeSummaryData True if including summary data; false otherwise.
	 * @returns ServiceProxyResponse
	 */ 
	listFriends(friendPlatform: "brainCloud" | "Facebook" | "All", includeSummaryData: boolean): {
		data: {
		    friends: Array<{
		        externalData: Record<string, any>;
		        friendPlatforms: Array<string>;
		        playerId: string;
		        name: string;
		        summaryFriendData: Record<string, any>;
		        pictureUrl: string;
		    }>;
		    server_time: number;
		};
		status: number;
	};


	/**
	 * Retrieves the social information associated with the logged in user. Includes summary data if includeSummaryData is true.
	 * 
	 * @param  {"brainCloud" | "Facebook" | "All"} friendPlatform Friend platform to query. Valid values are "Facebook", "Steam", "PlaystationNetwork", "brainCloud" and "All".
	 * @param  {boolean} includeSummaryData True if including summary data; false otherwise.
	 * @returns ServiceProxyResponse
	 */ 
	getMySocialInfo(friendPlatform: "brainCloud" | "Facebook" | "All", includeSummaryData: boolean): {
		data: {
		    playerId: string;
		    name: string;
		    pictureUrl: string;
		    summaryFriendData: any | null;
		    externalData: {
		        Facebook: Record<string, any>;
		    };
		    server_time: number;
		};
		status: number;
	};


	/**
	 * Adds brainCloud profile IDs to local friends.
	 * 
	 * @param  {Array<any>} profileIds Collection of profile ids.
	 * @returns ServiceProxyResponse
	 */ 
	addFriends(profileIds: Array<any>): {
		data: any | null;
		status: number;
	};


	/**
	 * Links the profiles for the specified externalIds for the given friend platform as internal friends.
	 * 
	 * @param  {"Facebook" | "Steam" | "PlaystationNetwork"} friendPlatform Friend platform to query. Valid values are "Facebook", "Steam", and "PlaystationNetwork".
	 * @param  {string} mode "ADD" to add friends only, "SYNC" to delete any previously saved friends that are not in the externalIds list.
	 * @param  {Array<any>} externalIds The list of platform-specific external IDs of the friends to add.
	 * @returns ServiceProxyResponse
	 */ 
	addFriendsFromPlatform(friendPlatform: "Facebook" | "Steam" | "PlaystationNetwork", mode: string, externalIds: Array<any>): {
		data: {
		    server_time: number;
		    rejected: Array<any>;
		    numRejected: number;
		    numNewAdded: number;
		    numDeleted: number;
		    numExisting: number;
		};
		status: number;
	};


	/**
	 * Removes brainCloud profile IDs from local friends.
	 * 
	 * @param  {Array<any>} profileIds Collection of profile ids.
	 * @returns ServiceProxyResponse
	 */ 
	removeFriends(profileIds: Array<any>): {
		data: any | null;
		status: number;
	};


	/**
	 * Get users online status.
	 * 
	 * @param  {Array<any>} profileIds Collection of profile ids.
	 * @returns ServiceProxyResponse
	 */ 
	getUsersOnlineStatus(profileIds: Array<any>): {
		data: {
		    onlineStatus: Array<{
		        isOnline: number;
		        profileId: string;
		        userValid: number;
		    }>;
		};
		status: number;
	};

}