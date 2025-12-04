/// <reference no-default-lib="true"/>

interface LeaderboardServiceProxy {
	/**
	 * Delete leaderboards.
	 * 
	 * @param  {Array<any>} leaderboardIds Collection of leaderboard ids.
	 * @returns ServiceProxyResponse
	 */ 
	deleteLeaderboards(leaderboardIds: Array<any>): {
		status: number;
		data: {
		    deletedLeaderboardCount: number;
		    message: string;
		};
	};


	/**
	 * Create a leaderboard. Optional parameter,data, numDaysToRotate(but mandatory for 'DAYS' rotationType.
	 * 
	 * @param  {string} leaderboardId The leaderboard to create.
	 * @param  {string} leaderboardType Leaderboard type.
	 * @param  {string} rotationType Type of rotation.
	 * @param  {Object} rotationResetTime Date to start the rotation (date in millis.)
	 * @param  {number} retainedCount How many previous rotations to keep.
	 * @param  {number} numDaysToRotate Optional parameter for use only with DAYS rotation type.
	 * @param  {Object} data Optional user-defined data to relevant to the created leaderboard.
	 * @returns ServiceProxyResponse
	 */ 
	createLeaderboard(leaderboardId: string, leaderboardType: string, rotationType: string, rotationResetTime: Object, retainedCount: number, numDaysToRotate: number, data: Object): {
		status: number;
		data: any | null;
	};


	/**
	 * Create a new player or group entry leaderboard configuration.
	 * 
	 * @param  {string} leaderboardId Unique ID of the leaderboard configuration to create.
	 * @param  {string} entryType Type of leaderboard entry. Valid values: 'PLAYER', 'GROUP'.
	 * @param  {string} leaderboardType Type of leaderboard. Valid values: 'LAST_VALUE', 'HIGH_VALUE', 'LOW_VALUE', 'CUMULATIVE', 'ARCADE_HIGH', 'ARCADE_LOW'.
	 * @param  {string} rotationType Type of rotation. Valid values: 'NEVER', 'DAILY', 'DAYS', 'WEEKLY', 'MONTHLY', 'YEARLY'.
	 * @param  {number} numDaysToRotate Optional parameter. Required only if 'DAYS' rotation type; otherwise, null.
	 * @param  {number} rotationResetTimestampUtcMillis UTC timestamp, in milliseconds, at which to rotate the leaderboard.
	 * @param  {number} retainedCount The number of rotations (versions) of the leaderboard to retain.
	 * @param  {Object} data Optional parameter. Developer-defined data relevant to the created leaderboard.
	 * @returns ServiceProxyResponse
	 */ 
	sysCreateLeaderboard(leaderboardId: string, entryType: string, leaderboardType: string, rotationType: string, numDaysToRotate: number, rotationResetTimestampUtcMillis: number, retainedCount: number, data: Object): {
		status: number;
		data: any | null;
	};


	/**
	 * Edit a leaderboard. Optional parameter,data, numDaysToRotate(but mandatory for 'DAYS' rotationType.
	 * 
	 * @param  {string} leaderboardId The leaderboard to edit.
	 * @param  {string} leaderboardType Optional user-defined data relevant to the edited leaderboard.
	 * @param  {string} rotationType The leaderboard type.
	 * @param  {Object} rotationResetTime Type of rotation.
	 * @param  {number} retainedCount Date to start the rotation (date in millis.)
	 * @param  {number} numDaysToRotate How many previous rotations to keep.
	 * @param  {Object} data Optional parameter for use only with DAYS rotation type.
	 * @returns ServiceProxyResponse
	 */ 
	editLeaderboard(leaderboardId: string, leaderboardType: string, rotationType: string, rotationResetTime: Object, retainedCount: number, numDaysToRotate: number, data: Object): {
		status: number;
		data: any | null;
	};


	/**
	 * Edit a player or group entry leaderboard configuration.
	 * 
	 * @param  {string} leaderboardId ID uniquely identifying the leaderboard configuration to edit.
	 * @param  {string} leaderboardType Type of leaderboard. Valid values: 'LAST_VALUE', 'HIGH_VALUE', 'LOW_VALUE', 'CUMULATIVE', 'ARCADE_HIGH', 'ARCADE_LOW'.
	 * @param  {string} rotationType Type of rotation. Valid values: 'NEVER', 'DAILY', 'DAYS', 'WEEKLY', 'MONTHLY', 'YEARLY'.
	 * @param  {number} numDaysToRotate Optional parameter. Required if 'DAYS' rotation type; otherwise, null.
	 * @param  {number} rotationResetTimestampUtcMillis UTC timestamp, in milliseconds, at which to rotate the leaderboard.
	 * @param  {number} retainedCount The number of rotations (versions) of the leaderboard to retain.
	 * @param  {Object} data Optional parameter. Developer-defined data relevant to the leaderboard.
	 * @returns ServiceProxyResponse
	 */ 
	sysEditLeaderboard(leaderboardId: string, leaderboardType: string, rotationType: string, numDaysToRotate: number, rotationResetTimestampUtcMillis: number, retainedCount: number, data: Object): {
		status: number;
		data: any | null;
	};


	/**
	 * Resets a leaderboard configured with rotation strategy NEVER by incrementing its version.
	 * 
	 * @param  {string} leaderboardId The leaderboard to reset.
	 * @returns ServiceProxyResponse
	 */ 
	sysResetNeverLeaderboard(leaderboardId: string): {
		status: number;
		data: {
		    leaderboardId: string;
		    leaderboardType: string;
		    entryType: string;
		    rotationType: string;
		    numDaysToRotate: number;
		    retainedCount: number;
		    versionId: number;
		};
	};


	/**
	 * List all the leaderboards.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	listAllLeaderboards(): {
		status: number;
		data: {
		    leaderboardListCount: number;
		    leaderboardList: Array<{
		        leaderboardId: string;
		        leaderboardType: string;
		        resetAt: number;
		        rotationType: string;
		        currentVersionId: number;
		        maxRetainedCount: number;
		        retainedVersionsCount: number;
		        data: {
		        };
		    }>;
		};
	};


	/**
	 * Retrieve the social leaderboard. Optional parameters: replaceName.
	 * 
	 * @param  {string} leaderboardId The id of the leaderboard to retrieve.
	 * @param  {boolean} replaceName If true, the currently logged in player's name will be replaced by the string "You."
	 * @returns ServiceProxyResponse
	 */ 
	getSocialLeaderboard(leaderboardId: string, replaceName: boolean): {
		status: number;
		data: {
		    social_leaderboard: Array<{
		        updatedAt: number;
		        pictureUrl: any | null;
		        playerId: string;
		        createdAt: number;
		        name: string;
		        otherData: any | null;
		        authenticationType: any | null;
		        externalId: any | null;
		        summaryFriendData: any | null;
		        score: number;
		    }>;
		    timeBeforeReset: number;
		    server_time: number;
		};
	};


	/**
	 * Retrieve the social leaderboard, if it exists. Optional parameters: replaceName.
	 * 
	 * @param  {string} leaderboardId The id of the leaderboard to retrieve.
	 * @param  {boolean} replaceName If true, the currently logged in player's name will be replaced by the string "You."
	 * @returns ServiceProxyResponse
	 */ 
	getSocialLeaderboardIfExists(leaderboardId: string, replaceName: boolean): {
		status: number;
		data: {
		    social_leaderboard: Array<{
		        updatedAt: number;
		        pictureUrl: any | null;
		        playerId: string;
		        createdAt: number;
		        name: string;
		        otherData: any | null;
		        authenticationType: any | null;
		        externalId: any | null;
		        summaryFriendData: any | null;
		        score: number;
		    }>;
		    timeBeforeReset: number;
		    server_time: number;
		};
	};


	/**
	 * Retrieve the social leaderboard by version. Optional parameters: replaceName.
	 * 
	 * @param  {string} leaderboardId The id of the leaderboard to retrieve.
	 * @param  {boolean} replaceName If true, the currently logged in player's name will be replaced by the string "You."
	 * @param  {number} versionId The leaderboard version to get.
	 * @returns ServiceProxyResponse
	 */ 
	getSocialLeaderboardByVersion(leaderboardId: string, replaceName: boolean, versionId: number): {
		status: number;
		data: {
		    social_leaderboard: Array<{
		        updatedAt: number;
		        pictureUrl: any | null;
		        playerId: string;
		        createdAt: number;
		        name: string;
		        otherData: any | null;
		        authenticationType: any | null;
		        externalId: any | null;
		        summaryFriendData: any | null;
		        score: number;
		    }>;
		    timeBeforeReset: number;
		    server_time: number;
		};
	};


	/**
	 * Retrieve the social leaderboard by version, if leaderboard exists. Optional parameters: replaceName.
	 * 
	 * @param  {string} leaderboardId The id of the leaderboard to retrieve.
	 * @param  {boolean} replaceName If true, the currently logged in player's name will be replaced by the string "You."
	 * @param  {number} versionId The leaderboard version to get.
	 * @returns ServiceProxyResponse
	 */ 
	getSocialLeaderboardByVersionIfExists(leaderboardId: string, replaceName: boolean, versionId: number): {
		status: number;
		data: {
		    social_leaderboard: Array<{
		        updatedAt: number;
		        pictureUrl: any | null;
		        playerId: string;
		        createdAt: number;
		        name: string;
		        otherData: any | null;
		        authenticationType: any | null;
		        externalId: any | null;
		        summaryFriendData: any | null;
		        score: number;
		    }>;
		    timeBeforeReset: number;
		    server_time: number;
		};
	};


	/**
	 * Retrieve multiple social leaderboards. Optional parameters: replaceName.
	 * 
	 * @param  {Array<any>} leaderboardIds Collection of leaderboard ids.
	 * @param  {number} leaderboardResultCount Maximum count of entries to return for each leaderboard.
	 * @param  {boolean} replaceName If true, the currently logged in player's name will be replaced by the string "You"
	 * @returns ServiceProxyResponse
	 */ 
	getMultiSocialLeaderboard(leaderboardIds: Array<any>, leaderboardResultCount: number, replaceName: boolean): {
		status: number;
		data: {
		    server_time: number;
		    leaderboards: Array<{
		        leaderboardId: string;
		        leaderboard: Array<{
		            externalId: string;
		            name: string;
		            pictureUrl: string;
		            playerId: string;
		            authenticationType: any | null;
		            score: number;
		            data: {
		                pacerTag: any | null;
		                pacerLeaderboardTag: {
		                };
		            };
		            createdAt: any | null;
		            updatedAt: any | null;
		        }>;
		        self: {
		            externalId: any | null;
		            name: any | null;
		            pictureUrl: any | null;
		            playerId: string;
		            authenticationType: any | null;
		            score: number;
		            data: {
		                nickname: string;
		            };
		            createdAt: number;
		            updatedAt: number;
		            summaryFriendData: any | null;
		        };
		        selfIndex: number;
		    }>;
		};
	};


	/**
	 * Retrieve the social leaderboard for a group.
	 * 
	 * @param  {string} leaderboardId The id of the leaderboard.
	 * @param  {string} groupId The id of the group.
	 * @returns ServiceProxyResponse
	 */ 
	getGroupSocialLeaderboard(leaderboardId: string, groupId: string): {
		status: number;
		data: {
		    leaderboardId: string;
		    timeBeforeReset: number;
		    leaderboard: Array<{
		        updatedAt: number;
		        pictureUrl: any | null;
		        playerName: string;
		        playerId: string;
		        createdAt: number;
		        data: {
		            nickname: string;
		        };
		        score: number;
		        summaryFriendData: any | null;
		    }>;
		    server_time: number;
		};
	};


	/**
	 * Retrieve the social leaderboard for a group by version.
	 * 
	 * @param  {string} leaderboardId The id of the leaderboard.
	 * @param  {string} groupId The id of the group.
	 * @param  {number} versionId The leaderboard version to get.
	 * @returns ServiceProxyResponse
	 */ 
	getGroupSocialLeaderboardByVersion(leaderboardId: string, groupId: string, versionId: number): {
		status: number;
		data: {
		    leaderboardId: string;
		    timeBeforeReset: number;
		    leaderboard: Array<{
		        updatedAt: number;
		        pictureUrl: any | null;
		        playerName: string;
		        playerId: string;
		        createdAt: number;
		        data: {
		            nickname: string;
		        };
		        score: number;
		        summaryFriendData: any | null;
		    }>;
		    server_time: number;
		};
	};


	/**
	 * Retrieve a sorted, social leaderboard of the specified list of players by version.
	 * 
	 * @param  {string} leaderboardId The id of the leaderboard.
	 * @param  {Array<string>} profileIds The ids of the players.
	 * @param  {number} versionId The leaderboard version to get.
	 * @returns ServiceProxyResponse
	 */ 
	getPlayersSocialLeaderboardByVersion(leaderboardId: string, profileIds: Array<string>, versionId: number): {
		data: {
		    leaderboardId: string;
		    timeBeforeReset: number;
		    leaderboard: Array<{
		        updatedAt: number;
		        pictureUrl: any | null;
		        playerName: string;
		        playerId: string;
		        createdAt: number;
		        data: {
		            nickname: string;
		        };
		        score: number;
		        summaryFriendData: any | null;
		    }>;
		    server_time: number;
		};
		status: number;
	};


	/**
	 * Retrieve a sorted, social leaderboard of the specified list of players by version, if leaderboard exists.
	 * 
	 * @param  {string} leaderboardId The id of the leaderboard.
	 * @param  {Array<string>} profileIds The ids of the players.
	 * @param  {number} versionId The leaderboard version to get.
	 * @returns ServiceProxyResponse
	 */ 
	getPlayersSocialLeaderboardByVersionIfExists(leaderboardId: string, profileIds: Array<string>, versionId: number): {
		status: number;
		data: {
		    leaderboardId: string;
		    timeBeforeReset: number;
		    leaderboard: Array<{
		        updatedAt: number;
		        pictureUrl: any | null;
		        playerName: string;
		        playerId: string;
		        createdAt: number;
		        data: {
		            nickname: string;
		        };
		        score: number;
		        summaryFriendData: any | null;
		    }>;
		    server_time: number;
		};
	};


	/**
	 * Retrieve a sorted, social leaderboard of the specified list of players.
	 * 
	 * @param  {string} leaderboardId The id of the leaderboard.
	 * @param  {Array<any>} profileIds The ids of the players.
	 * @returns ServiceProxyResponse
	 */ 
	getPlayersSocialLeaderboard(leaderboardId: string, profileIds: Array<any>): {
		status: number;
		data: {
		    leaderboardId: string;
		    timeBeforeReset: number;
		    leaderboard: Array<{
		        updatedAt: number;
		        pictureUrl: any | null;
		        playerName: string;
		        playerId: string;
		        createdAt: number;
		        data: {
		            nickname: string;
		        };
		        score: number;
		        summaryFriendData: any | null;
		    }>;
		    server_time: number;
		};
	};


	/**
	 * Retrieve a sorted, social leaderboard of the specified list of players, if leaderboard exists.
	 * 
	 * @param  {string} leaderboardId The id of the leaderboard.
	 * @param  {Array<any>} profileIds The ids of the players.
	 * @returns ServiceProxyResponse
	 */ 
	getPlayersSocialLeaderboardIfExists(leaderboardId: string, profileIds: Array<any>): {
		status: number;
		data: {
		    leaderboardId: string;
		    timeBeforeReset: number;
		    leaderboard: Array<{
		        updatedAt: number;
		        pictureUrl: any | null;
		        playerName: string;
		        playerId: string;
		        createdAt: number;
		        data: {
		            nickname: string;
		        };
		        score: number;
		        summaryFriendData: any | null;
		    }>;
		    server_time: number;
		};
	};


	/**
	 * Retrieve a page of the global leaderboard specified by the start and end indexes (0-based).
	 * 
	 * @param  {string} leaderboardId The id of the leaderboard.
	 * @param  {string} sort Sort order of page. ("HIGH_TO_LOW" or "LOW_TO_HIGH")
	 * @param  {number} startIndex The rank at which to start the page.
	 * @param  {number} endIndex The rank at which to end the page.
	 * @returns ServiceProxyResponse
	 */ 
	getGlobalLeaderboardPage(leaderboardId: string, sort: string, startIndex: number, endIndex: number): {
		data: {
		    leaderboard: Array<{
		        playerId: string;
		        score: number;
		        data: any | null;
		        createdAt: number;
		        updatedAt: number;
		        index: number;
		        rank: number;
		        name: string;
		        summaryFriendData: any | null;
		        pictureUrl: any | null;
		    }>;
		    moreBefore: number;
		    moreAfter: number;
		    timeBeforeReset: number;
		    server_time: number;
		};
		status: number;
	};


	/**
	 * Retrieve a page of the global leaderboard specified, if it exists, by the start and end indexes (0-based).
	 * 
	 * @param  {string} leaderboardId The id of the leaderboard.
	 * @param  {string} sort Sort order of page. ("HIGH_TO_LOW" or "LOW_TO_HIGH")
	 * @param  {number} startIndex The rank at which to start the page.
	 * @param  {number} endIndex The rank at which to end the page.
	 * @returns ServiceProxyResponse
	 */ 
	getGlobalLeaderboardPageIfExists(leaderboardId: string, sort: string, startIndex: number, endIndex: number): {
		data: {
		    leaderboard: Array<{
		        playerId: string;
		        score: number;
		        data: any | null;
		        createdAt: number;
		        updatedAt: number;
		        index: number;
		        rank: number;
		        name: string;
		        summaryFriendData: any | null;
		        pictureUrl: any | null;
		    }>;
		    moreBefore: number;
		    moreAfter: number;
		    timeBeforeReset: number;
		    server_time: number;
		};
		status: number;
	};


	/**
	 * Retrieve a page of the global leaderboard specified by the start and end indexes (0-based). By using a non-current version id, the user can retrieve a historical leaderboard.
	 * 
	 * @param  {string} leaderboardId The id of the leaderboard.
	 * @param  {string} sort Sort order of page. ("HIGH_TO_LOW" or "LOW_TO_HIGH")
	 * @param  {number} startIndex The rank at which to start the page.
	 * @param  {number} endIndex The rank at which to end the page.
	 * @param  {number} versionId The leaderboard version to get.
	 * @returns ServiceProxyResponse
	 */ 
	getGlobalLeaderboardPageByVersion(leaderboardId: string, sort: string, startIndex: number, endIndex: number, versionId: number): {
		data: {
		    leaderboard: Array<{
		        playerId: string;
		        score: number;
		        data: any | null;
		        createdAt: number;
		        updatedAt: number;
		        index: number;
		        rank: number;
		        name: string;
		        summaryFriendData: any | null;
		        pictureUrl: any | null;
		    }>;
		    leaderboardSize: number;
		    moreBefore: number;
		    moreAfter: number;
		    timeBeforeReset: number;
		    server_time: number;
		};
		status: number;
	};


	/**
	 * Retrieve a page of the global leaderboard specified, if it exists, by the start and end indexes (0-based). By using a non-current version id, the user can retrieve a historical leaderboard.
	 * 
	 * @param  {string} leaderboardId The id of the leaderboard.
	 * @param  {string} sort Sort order of page. ("HIGH_TO_LOW" or "LOW_TO_HIGH")
	 * @param  {number} startIndex The rank at which to start the page.
	 * @param  {number} endIndex The rank at which to end the page.
	 * @param  {number} versionId The leaderboard version to get.
	 * @returns ServiceProxyResponse
	 */ 
	getGlobalLeaderboardPageByVersionIfExists(leaderboardId: string, sort: string, startIndex: number, endIndex: number, versionId: number): {
		data: {
		    leaderboard: Array<{
		        playerId: string;
		        score: number;
		        data: any | null;
		        createdAt: number;
		        updatedAt: number;
		        index: number;
		        rank: number;
		        name: string;
		        summaryFriendData: any | null;
		        pictureUrl: any | null;
		    }>;
		    leaderboardSize: number;
		    moreBefore: number;
		    moreAfter: number;
		    timeBeforeReset: number;
		    server_time: number;
		};
		status: number;
	};


	/**
	 * Retrieve a view of the global leaderboard surrounding the current player.
	 * 
	 * @param  {string} leaderboardId The id of the leaderboard.
	 * @param  {string} sort Sort order of page. ("HIGH_TO_LOW" or "LOW_TO_HIGH")
	 * @param  {number} beforeCount The count of players before the current player to include.
	 * @param  {number} afterCount The count of players after the current player to include.
	 * @returns ServiceProxyResponse
	 */ 
	getGlobalLeaderboardView(leaderboardId: string, sort: string, beforeCount: number, afterCount: number): {
		data: {
		    leaderboardId: string;
		    moreBefore: number;
		    timeBeforeReset: number;
		    leaderboard: Array<{
		        playerId: string;
		        score: number;
		        data: {
		            nickname: string;
		        };
		        createdAt: number;
		        updatedAt: number;
		        index: number;
		        rank: number;
		        name: string;
		        summaryFriendData: {
		            xp: number;
		            favColour: string;
		        };
		        pictureUrl: any | null;
		    }>;
		    server_time: number;
		    moreAfter: number;
		};
		status: number;
	};


	/**
	 * Retrieve a view of the global leaderboard, if it exists, surrounding the current player.
	 * 
	 * @param  {string} leaderboardId The id of the leaderboard.
	 * @param  {string} sort Sort order of page. ("HIGH_TO_LOW" or "LOW_TO_HIGH")
	 * @param  {number} beforeCount The count of players before the current player to include.
	 * @param  {number} afterCount The count of players after the current player to include.
	 * @returns ServiceProxyResponse
	 */ 
	getGlobalLeaderboardViewIfExists(leaderboardId: string, sort: string, beforeCount: number, afterCount: number): {
		data: {
		    leaderboardId: string;
		    moreBefore: number;
		    timeBeforeReset: number;
		    leaderboard: Array<{
		        playerId: string;
		        score: number;
		        data: {
		            nickname: string;
		        };
		        createdAt: number;
		        updatedAt: number;
		        index: number;
		        rank: number;
		        name: string;
		        summaryFriendData: {
		            xp: number;
		            favColour: string;
		        };
		        pictureUrl: any | null;
		    }>;
		    server_time: number;
		    moreAfter: number;
		};
		status: number;
	};


	/**
	 * Method returns a view of global leaderboard results that centers on the current player. By using a non-current version id, the user can retrieve a historical leaderboard.
	 * 
	 * @param  {string} leaderboardId The id of the leaderboard.
	 * @param  {string} sort Sort order of page. ("HIGH_TO_LOW" or "LOW_TO_HIGH")
	 * @param  {number} beforeCount The count of players before the current player to include.
	 * @param  {number} afterCount The count of players after the current player to include.
	 * @param  {number} versionId The leaderboard version to get.
	 * @returns ServiceProxyResponse
	 */ 
	getGlobalLeaderboardViewByVersion(leaderboardId: string, sort: string, beforeCount: number, afterCount: number, versionId: number): {
		data: {
		    leaderboardId: string;
		    moreBefore: number;
		    timeBeforeReset: number;
		    leaderboard: Array<{
		        playerId: string;
		        score: number;
		        data: {
		            nickname: string;
		        };
		        createdAt: number;
		        updatedAt: number;
		        index: number;
		        rank: number;
		        name: string;
		        summaryFriendData: {
		            xp: number;
		            favColour: string;
		        };
		        pictureUrl: any | null;
		    }>;
		    server_time: number;
		    moreAfter: number;
		};
		status: number;
	};


	/**
	 * Method returns a view of global leaderboard results that centers on the current player, if the leaderboard exists. By using a non-current version id, the user can retrieve a historical leaderboard.
	 * 
	 * @param  {string} leaderboardId The id of the leaderboard.
	 * @param  {string} sort Sort order of page. ("HIGH_TO_LOW" or "LOW_TO_HIGH")
	 * @param  {number} beforeCount The count of players before the current player to include.
	 * @param  {number} afterCount The count of players after the current player to include.
	 * @param  {number} versionId The leaderboard version to get.
	 * @returns ServiceProxyResponse
	 */ 
	getGlobalLeaderboardViewByVersionIfExists(leaderboardId: string, sort: string, beforeCount: number, afterCount: number, versionId: number): {
		data: {
		    leaderboardId: string;
		    moreBefore: number;
		    timeBeforeReset: number;
		    leaderboard: Array<{
		        playerId: string;
		        score: number;
		        data: {
		            nickname: string;
		        };
		        createdAt: number;
		        updatedAt: number;
		        index: number;
		        rank: number;
		        name: string;
		        summaryFriendData: {
		            xp: number;
		            favColour: string;
		        };
		        pictureUrl: any | null;
		    }>;
		    server_time: number;
		    moreAfter: number;
		};
		status: number;
	};


	/**
	 * Retrieve information about the retained versions for the leaderboard (sorted newest to oldest).
	 * 
	 * @param  {string} leaderboardId The id of the leaderboard.
	 * @returns ServiceProxyResponse
	 */ 
	getGlobalLeaderboardVersions(leaderboardId: string): {
		status: number;
		data: {
		    leaderboardId: string;
		    leaderboardType: string;
		    rotationType: string;
		    retainedCount: number;
		    versions: Array<{
		        versionId: number;
		        startingAt: number;
		        endingAt: number;
		    }>;
		};
	};


	/**
	 * Post the players score to the given social leaderboard. Optional parameters: leaderboardId and data.
	 * 
	 * @param  {string} leaderboardId The leaderboard to post to.
	 * @param  {number} score The score to post.
	 * @param  {Object} data Optional user-defined data to post with the score.
	 * @returns ServiceProxyResponse
	 */ 
	postScoreToLeaderboard(leaderboardId: string, score: number, data: Object): {
		data: any | null;
		status: number;
	};


	/**
	 * Post score to another player's score.
	 * 
	 * @param  {string} profileId The profileId of the player to post on behalf of.
	 * @param  {string} leaderboardId The id of the leaderboard.
	 * @param  {number} score The score to post.
	 * @param  {Object} data Optional user-defined data to post with the score.
	 * @param  {boolean} forceCreate Should a new score be created? When false, the call can only modify a currently existing score.
	 * @returns ServiceProxyResponse
	 */ 
	postScoreToLeaderboardOnBehalfOf(profileId: string, leaderboardId: string, score: number, data: Object, forceCreate: boolean): ServiceProxyResponse;


	/**
	 * Post the player's score to the given social leaderboard and dynamically create if necessary. LeaderboardType, rotationType, rotationReset, and retainedCount are required.
	 * 
	 * @param  {string} leaderboardId The leaderboard to post to.
	 * @param  {number} score A score to post.
	 * @param  {Object} data Optional user-defined data to post with the score.
	 * @param  {string} leaderboardType The leaderboard type.
	 * @param  {string} rotationType Type of rotation.
	 * @param  {Object} rotationResetTime Date to start the rotation (date in millis.)
	 * @param  {number} retainedCount How many previous rotations to keep.
	 * @returns ServiceProxyResponse
	 */ 
	postScoreToDynamicLeaderboard(leaderboardId: string, score: number, data: Object, leaderboardType: string, rotationType: string, rotationResetTime: Object, retainedCount: number): ServiceProxyResponse;


	/**
	 * Post the player's score to the given social leaderboard, dynamically creating the leaderboard if it does not exist yet. To create new leaderboard, configJson must specify leaderboardType, rotationType, resetAt, and retainedCount, at a minimum, with support to optionally specify an expiry in minutes.
	 * 
	 * @param  {string} leaderboardId The leaderboard to post to.
	 * @param  {number} score A score to post.
	 * @param  {Object} scoreData Optional user-defined data to post with the score.
	 * @param  {Object} configJson Configuration for the leaderboard if it does not exist yet, specified as JSON object. Configuration fields supported are: leaderboardType': Required. Type of leaderboard. Valid values are 'LAST_VALUE', 'HIGH_VALUE', 'LOW_VALUE', 'CUMULATIVE', 'ARCADE_HIGH', 'ARCADE_LOW';  'rotationType': Required. Type of rotation. Valid values are 'NEVER', 'DAILY', 'DAYS', 'WEEKLY', 'MONTHLY', 'YEARLY';  'numDaysToRotate': Required if 'DAYS' rotation type, with valid values between 2 and 14; otherwise, null;  'resetAt': UTC timestamp, in milliseconds, at which to rotate the period. Always null if 'NEVER' rotation type;  'retainedCount': Required. Number of rotations (versions) of the leaderboard to retain; 'expireInMins': Optional. Duration, in minutes, before the leaderboard is to automatically expire.
	 * @returns ServiceProxyResponse
	 */ 
	postScoreToDynamicLeaderboardUsingConfig(leaderboardId: string, score: number, scoreData: Object, configJson: Object): {
		data: any | null;
		status: number;
	};


	/**
	 * Post the player's score to the given social leaderboard and dynamically create if necessary. LeaderboardType, rotationType, rotationReset, and retainedCount are required.
	 * 
	 * @param  {string} leaderboardId The leaderboard to post to.
	 * @param  {number} score A score to post.
	 * @param  {Object} data Optional user-defined data to post with the score.
	 * @param  {string} leaderboardType The leaderboard type.
	 * @param  {string} rotationType Type of rotation.
	 * @param  {Object} rotationResetTime Date to start the rotation (date in millis.)
	 * @param  {number} retainedCount How many previous rotations to keep.
	 * @returns ServiceProxyResponse
	 */ 
	postScoreToDynamicLeaderboardUTC(leaderboardId: string, score: number, data: Object, leaderboardType: string, rotationType: string, rotationResetTime: Object, retainedCount: number): {
		data: any | null;
		status: number;
	};


	/**
	 * Post the player's score to the given social leaderboard and dynamically create if necessary. LeaderboardType, rotationType, rotationReset, retainedCount and numDaysToRotate are required.
	 * 
	 * @param  {string} leaderboardId The leaderboard to post to.
	 * @param  {number} score A score to post.
	 * @param  {Object} data Optional user-defined data to post with the score.
	 * @param  {string} leaderboardType The leaderboard type.
	 * @param  {string} rotationType Type of rotation.
	 * @param  {Object} rotationResetTime Date to start the rotation (date in millis.)
	 * @param  {number} retainedCount How many previous rotations to keep.
	 * @param  {number} numDaysToRotate Optional parameter for use only with DAYS rotation type.
	 * @returns ServiceProxyResponse
	 */ 
	postScoreToDynamicLeaderboardDays(leaderboardId: string, score: number, data: Object, leaderboardType: string, rotationType: string, rotationResetTime: Object, retainedCount: number, numDaysToRotate: number): ServiceProxyResponse;


	/**
	 * Post the player's score to the given social leaderboard and dynamically create if necessary. LeaderboardType, rotationType, rotationReset, retainedCount and numDaysToRotate are required.
	 * 
	 * @param  {string} leaderboardId The leaderboard to post to.
	 * @param  {number} score A score to post.
	 * @param  {Object} data Optional user-defined data to post with the score.
	 * @param  {string} leaderboardType The leaderboard type.
	 * @param  {string} rotationType Type of rotation.
	 * @param  {Object} rotationResetTime Date to start the rotation (date in millis.)
	 * @param  {number} retainedCount How many previous rotations to keep.
	 * @param  {number} numDaysToRotate Optional parameter for use only with DAYS rotation type.
	 * @returns ServiceProxyResponse
	 */ 
	postScoreToDynamicLeaderboardDaysUTC(leaderboardId: string, score: number, data: Object, leaderboardType: string, rotationType: string, rotationResetTime: Object, retainedCount: number, numDaysToRotate: number): {
		data: any | null;
		status: number;
	};


	/**
	 * Gets the number of entries in a global leaderboard.
	 * 
	 * @param  {string} leaderboardId The id of the leaderboard.
	 * @returns ServiceProxyResponse
	 */ 
	getGlobalLeaderboardEntryCount(leaderboardId: string): {
		status: number;
		data: {
		    entryCount: number;
		};
	};


	/**
	 * Gets the number of entries in a global leaderboard. By using a non-current version id, the user can retrieve a historical leaderboard.
	 * 
	 * @param  {string} leaderboardId The id of the leaderboard.
	 * @param  {number} versionId The leaderboard version to get.
	 * @returns ServiceProxyResponse
	 */ 
	getGlobalLeaderboardEntryCountByVersion(leaderboardId: string, versionId: number): {
		status: number;
		data: {
		    entryCount: number;
		};
	};


	/**
	 * Retrieves the player's score data from the specified leaderboard. Optional parameters: versionId
	 * 
	 * @param  {string} leaderboardId The leaderboard to retrieve the score from.
	 * @param  {number} versionId The version of the leaderboard.
	 * @returns ServiceProxyResponse
	 */ 
	getPlayerScore(leaderboardId: string, versionId: number): {
		status: number;
		data: {
		    score: {
		        score: number;
		        data: {
		            test: string;
		        };
		        createdAt: number;
		        updatedAt: number;
		        leaderboardId: string;
		        versionId: number;
		    };
		};
	};


	/**
	 * Retrieves up to maxResults scores data for user for arcade-style leaderboard.
	 * 
	 * @param  {string} leaderboardId The leaderboard to retrieve the score from.
	 * @param  {number} versionId The version of the leaderboard. Use -1 to specify the currently active leaderboard version.
	 * @param  {number} maxResults The maximum number of player scores to retrieve.
	 * @returns ServiceProxyResponse
	 */ 
	getPlayerScores(leaderboardId: string, versionId: number, maxResults: number): {
		data: {
		    versionId: number;
		    scores: Array<{
		        score: number;
		        data: {
		            nickname: string;
		        };
		        createdAt: number;
		        updatedAt: number;
		    }>;
		    leaderboardId: string;
		};
		status: number;
	};


	/**
	 * Removes the player's score data from the specified leaderboard. Optional parameters: versionId
	 * 
	 * @param  {string} leaderboardId The leaderboard to post to.
	 * @param  {number} versionId The version of the leaderboard. Use -1 to specify the currently active leaderboard version.
	 * @returns ServiceProxyResponse
	 */ 
	removePlayerScore(leaderboardId: string, versionId: number): {
		status: number;
		data: {
		    numScoresRemoved: number;
		};
	};


	/**
	 * Removes the group's score data from the specified group leaderboard. Optional parameters: versionId
	 * 
	 * @param  {string} leaderboardId The id of the leaderboard.
	 * @param  {string} groupId The id of the group.
	 * @param  {number} versionId The version of the leaderboard. Use -1 to specify the currently active leaderboard version.
	 * @returns ServiceProxyResponse
	 */ 
	removeGroupScore(leaderboardId: string, groupId: string, versionId: number): ServiceProxyResponse;


	/**
	 * Retrieves the player's score data in the current rotation from a list of leaderboards.
	 * 
	 * @param  {Array<any>} leaderboardIds Collection of leaderboard ids.
	 * @returns ServiceProxyResponse
	 */ 
	getPlayerScoresFromLeaderboards(leaderboardIds: Array<any>): {
		status: number;
		data: {
		    scores: Array<{
		        score: number;
		        data: {
		            test: string;
		        };
		        createdAt: number;
		        updatedAt: number;
		        leaderboardId: string;
		        versionId: number;
		    }>;
		};
	};


	/**
	 * Post the group score to the given group leaderboard. Optional parameters: data.
	 * 
	 * @param  {string} leaderboardId The id of the leaderboard.
	 * @param  {string} groupId The id of the group.
	 * @param  {number} score The score to post.
	 * @param  {Object} data Optional user-defined data to post with the score.
	 * @returns ServiceProxyResponse
	 */ 
	postScoreToGroupLeaderboard(leaderboardId: string, groupId: string, score: number, data: Object): {
		status: number;
		data: any | null;
	};


	/**
	 * Post the group score to the given group leaderboard and dynamically create if necessary. LeaderboardType, rotationType, rotationReset, and retainedCount are required.
	 * 
	 * @param  {string} leaderboardId The leaderboard to post to.
	 * @param  {string} groupId The id of the group.
	 * @param  {number} score A score to post.
	 * @param  {Object} data Optional user-defined data to post with the score.
	 * @param  {string} leaderboardType The leaderboard type.
	 * @param  {string} rotationType Type of rotation.
	 * @param  {Object} rotationResetTime Date to start the rotation (date in millis.)
	 * @param  {number} retainedCount How many previous rotations to keep.
	 * @returns ServiceProxyResponse
	 */ 
	postScoreToDynamicGroupLeaderboard(leaderboardId: string, groupId: string, score: number, data: Object, leaderboardType: string, rotationType: string, rotationResetTime: Object, retainedCount: number): ServiceProxyResponse;


	/**
	 * Post the group score to the given group leaderboard and dynamically create if necessary. LeaderboardType, rotationType, rotationReset, and retainedCount are required.
	 * 
	 * @param  {string} leaderboardId The leaderboard to post to.
	 * @param  {string} groupId The id of the group.
	 * @param  {number} score A score to post.
	 * @param  {Object} data Optional user-defined data to post with the score.
	 * @param  {string} leaderboardType The leaderboard type.
	 * @param  {string} rotationType Type of rotation.
	 * @param  {Object} rotationResetTime Date to start the rotation (date in millis.)
	 * @param  {number} retainedCount How many previous rotations to keep.
	 * @returns ServiceProxyResponse
	 */ 
	postScoreToDynamicGroupLeaderboardUTC(leaderboardId: string, groupId: string, score: number, data: Object, leaderboardType: string, rotationType: string, rotationResetTime: Object, retainedCount: number): {
		data: any | null;
		status: number;
	};


	/**
	 * Post the group score to the given group leaderboard and dynamically create if necessary. LeaderboardType, rotationType, rotationReset, retainedCount and numDaysToRotate are required.
	 * 
	 * @param  {string} leaderboardId The leaderboard to post to.
	 * @param  {string} groupId The id of the group.
	 * @param  {number} score A score to post.
	 * @param  {Object} data Optional user-defined data to post with the score.
	 * @param  {string} leaderboardType The leaderboard type.
	 * @param  {string} rotationType Type of rotation.
	 * @param  {Object} rotationResetTime Date to start the rotation (date in millis.)
	 * @param  {number} retainedCount How many previous rotations to keep.
	 * @param  {number} numDaysToRotate Optional parameter for use only with DAYS rotation type.
	 * @returns ServiceProxyResponse
	 */ 
	postScoreToDynamicGroupLeaderboardDaysUTC(leaderboardId: string, groupId: string, score: number, data: Object, leaderboardType: string, rotationType: string, rotationResetTime: Object, retainedCount: number, numDaysToRotate: number): {
		data: any | null;
		status: number;
	};


	/**
	 * Post the group's score to the given social leaderboard, dynamically creating the group leaderboard if it does not exist yet. To create new leaderboard, configJson must specify leaderboardType, rotationType, resetAt, and retainedCount, at a minimum, with support to optionally specify an expiry in minutes.
	 * 
	 * @param  {string} leaderboardId The leaderboard to post to.
	 * @param  {string} groupId The id of the group.
	 * @param  {number} score A score to post.
	 * @param  {Object} scoreData Optional user-defined data to post with the score.
	 * @param  {Object} configJson Configuration for the group leaderboard if it does not exist yet, specified as JSON object. Configuration fields supported are: leaderboardType': Required. Type of leaderboard. Valid values are 'LAST_VALUE', 'HIGH_VALUE', 'LOW_VALUE', 'CUMULATIVE', 'ARCADE_HIGH', 'ARCADE_LOW';  'rotationType': Required. Type of rotation. Valid values are 'NEVER', 'DAILY', 'DAYS', 'WEEKLY', 'MONTHLY', 'YEARLY';  'numDaysToRotate': Required if 'DAYS' rotation type, with valid values between 2 and 14; otherwise, null;  'resetAt': UTC timestamp, in milliseconds, at which to rotate the period. Always null if 'NEVER' rotation type;  'retainedCount': Required. Number of rotations (versions) of the leaderboard to retain; 'expireInMins': Optional. Duration, in minutes, before the leaderboard is to automatically expire.
	 * @returns ServiceProxyResponse
	 */ 
	postScoreToDynamicGroupLeaderboardUsingConfig(leaderboardId: string, groupId: string, score: number, scoreData: Object, configJson: Object): {
		data: any | null;
		status: number;
	};


	/**
	 * Retrieve a view of the group leaderboard surrounding the current group score.
	 * 
	 * @param  {string} leaderboardId The id of the leaderboard.
	 * @param  {string} groupId The id of the group.
	 * @param  {string} sort Sort order of page. ("HIGH_TO_LOW" or "LOW_TO_HIGH")
	 * @param  {number} beforeCount The count of players before the current player to include.
	 * @param  {number} afterCount The count of players after the current player to include.
	 * @returns ServiceProxyResponse
	 */ 
	getGroupLeaderboardView(leaderboardId: string, groupId: string, sort: string, beforeCount: number, afterCount: number): ServiceProxyResponse;


	/**
	 * Method returns a view of group leaderboard results that centers on the current group. By using a non-current version id, the user can retrieve a historical group leaderboard.
	 * 
	 * @param  {string} leaderboardId The id of the leaderboard.
	 * @param  {string} groupId The id of the group.
	 * @param  {number} versionId The version of the group leaderboard.
	 * @param  {string} sort Sort order of page. ("HIGH_TO_LOW" or "LOW_TO_HIGH")
	 * @param  {number} beforeCount The count of players before the current player to include.
	 * @param  {number} afterCount The count of players after the current player to include.
	 * @returns ServiceProxyResponse
	 */ 
	getGroupLeaderboardViewByVersion(leaderboardId: string, groupId: string, versionId: number, sort: string, beforeCount: number, afterCount: number): ServiceProxyResponse;


	/**
	 * Returns list of applicable leaderboards, with summary leaderboard configuration information, including tournament flags, if applicable. Option 'filterType' defaults to 'standard', with additional supported filter types of 'all', 'tournament', 'divisions' and 'templates'. If 'divisions', to filter on a specific division set, include 'divSetId' option to specify the applicable ID.
	 * 
	 * @param  {Object} optionsJson Supports filtering of returned list of leaderboard configs. Option 'filterType' defaults to 'standard' if not specified. Valid filterType values include 'all', 'standard', 'tournament', 'divisions' and 'templates'. If 'tournament' is specified, returned list will include leaderboards configured for tournaments, but excludes division set instances and templates. If 'division', returned list will include division set tournament leaderboard instances. If 'templates', returned list will include leaderboards flagged as division template only.
	 * @returns ServiceProxyResponse
	 */ 
	sysListLeaderboardConfigs(optionsJson: Object): {
		data: {
		    leaderboardList: Array<{
		        entryType: string;
		        numDaysToRotate: number;
		        data: {
		            street: string;
		        };
		        resetAt: number;
		        currentVersionId: number;
		        rotationType: string;
		        leaderboardType: string;
		        leaderboardId: string;
		    }>;
		    leaderboardListCount: number;
		};
		status: number;
	};


	/**
	 * Returns leaderboard configuration information, including tournament settings, for future and current (active) version of the specified leaderboard.
	 * 
	 * @param  {string} leaderboardId ID uniquely identifying the leaderboard configuration to retrieve.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetLeaderboardConfig(leaderboardId: string): {
		data: {
		    Dd31: {
		        leaderboardId: string;
		        dbVersion: number;
		        resetAt: number;
		        leaderboardType: string;
		        rotationType: string;
		        retainedCount: number;
		        data: {
		        };
		        numDaysToRotate: number;
		        entryType: string;
		        tConfigs: {
		            tcode1: {
		                activeUpUntil: number;
		                tConfigCode: string;
		            };
		            testTournamentId: {
		                activeUpUntil: number;
		                tConfigCode: string;
		            };
		        };
		        tStates: {
		            enrolMins: number;
		            disallowMins: number;
		            minMins: number;
		            compMins: number;
		            bufferMins: number;
		            announcementMins: number;
		        };
		        tAutoJoin: number;
		        tAutoClaim: number;
		        tEnabled: number;
		        divSet: string;
		        tTemplateOnly: number;
		        expiry: number;
		        currentVersionId: number;
		        currentPeriod: {
		            versionId: number;
		            startingAt: number;
		            endingAt: number;
		            rotationType: string;
		            numDaysToRotate: number;
		            tConfigVers: {
		                tcode1: number;
		                testTournamentId: number;
		            };
		            tState: string;
		            tAutoJoin: number;
		            tAutoClaim: number;
		            tRegistrationStart: number;
		            tRegistrationEnd: number;
		            tPlayStart: number;
		            tPlayEnd: number;
		            tProcessingStartAt: number;
		            tProcessingJobId: string;
		            tRegistrationStartJobId: any | null;
		            tPlayStartJobId: string;
		            tPlayEndJobId: string;
		            tStates: {
		                enrolMins: number;
		                disallowMins: number;
		                minMins: number;
		                compMins: number;
		                bufferMins: number;
		                announcementMins: number;
		            };
		        };
		        createdAt: number;
		    };
		};
		status: number;
	};


	/**
	 * Creates a leaderboard configuration, with support for tournament leaderboards.
	 * 
	 * @param  {string} leaderboardId ID uniquely identifying the leaderboard configuration to retrieve.
	 * @param  {Object} configJson Configuration for the leaderboard, specified as JSON object. Configuration fields supported are: 'entryType': Required. Valid values are 'PLAYER' and 'GROUP';  leaderboardType': Required. Type of leaderboard. Valid values are 'LAST_VALUE', 'HIGH_VALUE', 'LOW_VALUE', 'CUMULATIVE', 'ARCADE_HIGH', 'ARCADE_LOW';  'rotationType': Required. Type of rotation. Valid values are 'NEVER', 'DAILY', 'DAYS', 'WEEKLY', 'MONTHLY', 'YEARLY';  'numDaysToRotate': Required if 'DAYS' rotation type, with valid values between 2 and 14; otherwise, null;  'resetAt': UTC timestamp, in milliseconds, at which to rotate the period. Always null if 'NEVER' rotation type;  'retainedCount': Required. Number of rotations (versions) of the leaderboard to retain;  'data': Optional parameter for data;  'tEnabled': Optional parameter to set whether tournaments are enabled (true) or not (false). Must be false for NEVER. Must be true for ADHOC. Can be true or false for recurring rotation types. Defaults to false;  'tTemplateOnly': Optional parameter to set whether leaderboard is a tournament template only (true) or not (false). Can only be true if tEnabled is true. Defaults to false.
	 * @returns ServiceProxyResponse
	 */ 
	sysCreateLeaderboardConfig(leaderboardId: string, configJson: Object): {
		data: {
		    aLeaderboardId2: {
		        leaderboardId: string;
		        dbVersion: number;
		        resetAt: number;
		        leaderboardType: string;
		        rotationType: string;
		        retainedCount: number;
		        data: {
		            info: string;
		        };
		        numDaysToRotate: number;
		        entryType: string;
		        tEnabled: number;
		        tTemplateOnly: number;
		        expiry: any | null;
		        currentVersionId: number;
		        currentPeriod: {
		            versionId: number;
		            startingAt: number;
		            endingAt: number;
		            rotationType: string;
		            numDaysToRotate: number;
		        };
		    };
		};
		status: number;
	};


	/**
	 * Edits a leaderboard configuration, with support for tournament leaderboards.
	 * 
	 * @param  {string} leaderboardId ID uniquely identifying the leaderboard configuration to retrieve.
	 * @param  {number} dbVersion The database version of the leaderboard config being edited. For any version, specify -1.
	 * @param  {Object} configJson Configuration changes for the leaderboard, specified as JSON object. Configuration fields supported are: leaderboardType': Required. Type of leaderboard. Valid values are 'LAST_VALUE', 'HIGH_VALUE', 'LOW_VALUE', 'CUMULATIVE', 'ARCADE_HIGH', 'ARCADE_LOW';  'rotationType': Required. Type of rotation. Valid values are 'NEVER', 'DAILY', 'DAYS', 'WEEKLY', 'MONTHLY', 'YEARLY';  'numDaysToRotate': Required if 'DAYS' rotation type, with valid values between 2 and 14; otherwise, null;  'resetAt': UTC timestamp, in milliseconds, at which to rotate the period. Always null if 'NEVER' rotation type;  'retainedCount': Required. Number of rotations (versions) of the leaderboard to retain;  'data': Optional parameter for data;  'tEnabled': Optional parameter to set whether tournaments are enabled (true) or not (false). Must be false for NEVER. Must be true for ADHOC. Can be true or false for recurring rotation types. Defaults to false;  'tTemplateOnly': Optional parameter to set whether leaderboard is a tournament template only (true) or not (false). Can only be true if tEnabled is true. Defaults to false.
	 * @returns ServiceProxyResponse
	 */ 
	sysEditLeaderboardConfig(leaderboardId: string, dbVersion: number, configJson: Object): {
		data: {
		    aLeaderboardId2: {
		        leaderboardId: string;
		        dbVersion: number;
		        resetAt: number;
		        leaderboardType: string;
		        rotationType: string;
		        retainedCount: number;
		        data: {
		            info: string;
		        };
		        numDaysToRotate: number;
		        entryType: string;
		        tEnabled: number;
		        tTemplateOnly: number;
		        currentVersionId: number;
		        currentPeriod: {
		            versionId: number;
		            startingAt: number;
		            endingAt: number;
		            rotationType: string;
		            numDaysToRotate: number;
		        };
		    };
		};
		status: number;
	};


	/**
	 * Updates the tournament settings for the leaderboard configuration, for future recurring periods only (does not affect current rotation). Supported tSettingsJson settings include: 'tTournament' (with 'tConfigs' to configure tournament templates, 'tAutoJoin' flag, 'tAutoClaim' flag), and 'tPhases' (to schedule 'enrolMins', 'announcementMins', 'disallowMins' and 'bufferMins' minutes).
	 * 
	 * @param  {string} leaderboardId ID uniquely identifying the leaderboard configuration being edited. Leaderboard must have tournaments enabled.
	 * @param  {number} dbVersion The database version of the leaderboard config being edited. For any version, specify -1.
	 * @param  {Object} tSettingsJson Tournament settings changes for the in-progress leaderboard rotation, specified as JSON object. Settings may include: 'tConfigs': Defines the tournament configurations codes and versions for the leaderboard. Set 'activeUpUntil' to -1 to pick up latest version of tournament template at time of rotation, or optionally set to a maximum fixed version. 'tAutoJoin': Set to true to have users automatically join the tournament on posting score. Only supported if only 1 tournament configured and free entry.  'tAutoClaim': Set to true to have users automatically claim tournament rewards on login. 'tStates': Defines the phases, in minutes, within the start and end period times. The total time for the enabled phases cannot exceed the overall length of the period. The competition minutes are calculated and must be greater than 0. Configurable phases: 'enrolMins', 'disallowMins', 'bufferMins', 'announcementMins'.
	 * @returns ServiceProxyResponse
	 */ 
	sysEditTournamentSettingsForFuturePeriodsOnly(leaderboardId: string, dbVersion: number, tSettingsJson: Object): {
		data: {
		    aLeaderboardId: {
		        leaderboardId: string;
		        dbVersion: number;
		        resetAt: number;
		        leaderboardType: string;
		        rotationType: string;
		        retainedCount: number;
		        data: {
		            info: string;
		        };
		        numDaysToRotate: number;
		        entryType: string;
		        tConfigs: {
		            bronzeLevel: {
		                activeUpUntil: number;
		                tConfigCode: string;
		            };
		            silverLevel: {
		                activeUpUntil: number;
		                tConfigCode: string;
		            };
		            goldLevel: {
		                activeUpUntil: number;
		                tConfigCode: string;
		            };
		        };
		        tStates: {
		            enrolMins: number;
		            disallowMins: number;
		            minMins: number;
		            compMins: number;
		            bufferMins: number;
		            announcementMins: number;
		        };
		        tAutoJoin: number;
		        tAutoClaim: number;
		        tEnabled: number;
		        tTemplateOnly: number;
		        currentVersionId: number;
		        currentPeriod: {
		            versionId: number;
		            startingAt: number;
		            endingAt: number;
		            rotationType: string;
		            numDaysToRotate: number;
		            tConfigVers: {
		                bronzeLevel: number;
		                silverLevel: number;
		                goldLevel: number;
		            };
		            tState: string;
		            tAutoJoin: number;
		            tAutoClaim: number;
		            tRegistrationStart: number;
		            tRegistrationEnd: number;
		            tPlayStart: number;
		            tPlayEnd: number;
		            tProcessingStartAt: number;
		            tProcessingJobId: string;
		            tRegistrationStartJobId: string;
		            tPlayStartJobId: string;
		            tPlayEndJobId: string;
		            tStates: {
		                enrolMins: number;
		                disallowMins: number;
		                minMins: number;
		                compMins: number;
		                bufferMins: number;
		                announcementMins: number;
		            };
		        };
		    };
		};
		status: number;
	};


	/**
	 * Updates the tournament settings for the leaderboard configuration, for the current period in progress, as well as the future periods if recurring periods (not ADHOC). Supported tSettingsJson settings include: 'tTournament' (with 'tConfigs' to configure tournament templates, 'tAutoJoin' flag, 'tAutoClaim' flag), and 'tPhases' (to schedule 'enrolMins', 'announcementMins', 'disallowMins' and 'bufferMins' minutes), and, if ADHOC tournament in progress, API also supports 'tPeriod' duration settings ('durationDays', 'durationDays', 'durationDays').
	 * 
	 * @param  {string} leaderboardId ID uniquely identifying the leaderboard configuration being edited. Leaderboard must have tournaments enabled.
	 * @param  {number} dbVersion The database version of the leaderboard config being edited. For any version, specify -1.
	 * @param  {Object} tSettingsJson Tournament settings changes specified as JSON object. If tournament settings include 'tTournament', must specify 'tConfigs' defining the tournament configuration code(s) ('tConfigCode') and tournament template version(s) ('activeUpUntil', set to -1 to pick up latest version of tournament template at time of rotation, or optionally set to a maximum fixed version) for the leaderboard, as well as 'tAutoClaim' flag indicating whether users can automatically claim tournament rewards on login, and 'tAutoJoin' flag indicating whether users automatically join the tournament on posting score (must be free entry and only 1 tournament configured);  If tournament settings include 'tPhases', defines the phases, in minutes, within the start and end period times. The total time for the enabled phases cannot exceed the overall length of the period. The competition minutes are calculated and must be greater than 0. Configurable phases: 'enrolMins', 'disallowMins', 'bufferMins', 'announcementMins'. And, if ADHOC tournament in progress, tournament settings may include 'tPeriod' duration settings: 'durationDays', 'durationDays', 'durationDays'. Changes affect endingAt time and cannot overlap with any future ADHOC periods scheduled.
	 * @returns ServiceProxyResponse
	 */ 
	sysEditTournamentSettingsIncludingCurrentPeriod(leaderboardId: string, dbVersion: number, tSettingsJson: Object): {
		data: {
		    aLeaderboardId: {
		        leaderboardId: string;
		        dbVersion: number;
		        resetAt: number;
		        leaderboardType: string;
		        rotationType: string;
		        retainedCount: number;
		        data: {
		            info: string;
		        };
		        numDaysToRotate: number;
		        entryType: string;
		        tConfigs: {
		            bronzeLevel: {
		                activeUpUntil: number;
		                tConfigCode: string;
		            };
		            silverLevel: {
		                activeUpUntil: number;
		                tConfigCode: string;
		            };
		            goldLevel: {
		                activeUpUntil: number;
		                tConfigCode: string;
		            };
		        };
		        tStates: {
		            enrolMins: number;
		            disallowMins: number;
		            minMins: number;
		            compMins: number;
		            bufferMins: number;
		            announcementMins: number;
		        };
		        tAutoJoin: number;
		        tAutoClaim: number;
		        tEnabled: number;
		        tTemplateOnly: number;
		        currentVersionId: number;
		        currentPeriod: {
		            versionId: number;
		            startingAt: number;
		            endingAt: number;
		            rotationType: string;
		            numDaysToRotate: number;
		            tConfigVers: {
		                bronzeLevel: number;
		                silverLevel: number;
		                goldLevel: number;
		            };
		            tState: string;
		            tAutoJoin: number;
		            tAutoClaim: number;
		            tRegistrationStart: number;
		            tRegistrationEnd: number;
		            tPlayStart: number;
		            tPlayEnd: number;
		            tProcessingStartAt: number;
		            tProcessingJobId: string;
		            tRegistrationStartJobId: string;
		            tPlayStartJobId: string;
		            tPlayEndJobId: string;
		            tStates: {
		                enrolMins: number;
		                disallowMins: number;
		                minMins: number;
		                compMins: number;
		                bufferMins: number;
		                announcementMins: number;
		            };
		        };
		    };
		};
		status: number;
	};


	/**
	 * Schedules a new tournament period for the ADHOC leaderboard configuration. Tournament must be scheduled in the future. Tournament settings ('tSettingsJson') must include tournament period ('tPeriod'), tournament configs and associated flags ('tTournament') and tournament phases ('tPhases').
	 * 
	 * @param  {string} leaderboardId ID uniquely identifying the leaderboard configuration to edit. Leaderboard must be configured with ADHOC rotation type.
	 * @param  {number} dbVersion The database version of the leaderboard config being edited. For any version, specify -1.
	 * @param  {Object} tSettingsJson Tournament settings for the new ADHOC tournament period being scheduled. Settings may include: 'tPeriod': Required. Defines the UTC 'startingAt' time and the duration: 'durationDays', 'durationDays', 'durationDays'. Period cannot overlap with any other ADHOC period(s), future or in-progress;  'tTournament': Required. Must specify 'tConfigs' defining the tournament configuration code(s) ('tConfigCode') and tournament template version(s) ('activeUpUntil', set to -1 to pick up latest version of tournament template at time of rotation, or optionally set to a maximum fixed version) for the ADHOC period, as well as 'tAutoClaim' flag indicating whether users can automatically claim tournament rewards on login, and 'tAutoJoin' flag indicating whether users automatically join the tournament on posting score (must be free entry and only 1 tournament configured);   'tPhases': Required. Defines the phases, in minutes, within the start and end period times. The total time for the enabled phases cannot exceed the overall length of the period. The competition minutes are calculated and must be greater than 0. Configurable phases: 'enrolMins', 'disallowMins', 'minMins', 'bufferMins', 'announcementMins';  and, if ADHOC tournament in progress, tournament settings may include 'tPeriod' duration settings: 'durationDays', 'durationDays', 'durationDays', which may affect endingAt time and cannot overlap with any future ADHOC periods scheduled.
	 * @returns ServiceProxyResponse
	 */ 
	sysCreateAdhocTournamentPeriod(leaderboardId: string, dbVersion: number, tSettingsJson: Object): {
		data: {
		    aLeaderboardIdC: {
		        leaderboardId: string;
		        dbVersion: number;
		        resetAt: number;
		        leaderboardType: string;
		        rotationType: string;
		        retainedCount: number;
		        data: {
		        };
		        numDaysToRotate: number;
		        entryType: string;
		        tEnabled: number;
		        tScheduled: Array<{
		            startingAt: number;
		            endingAt: number;
		            tConfigs: {
		                silverLevel: {
		                    activeUpUntil: number;
		                    tConfigCode: string;
		                };
		                goldLevel: {
		                    activeUpUntil: number;
		                    tConfigCode: string;
		                };
		            };
		            tStates: {
		                enrolMins: number;
		                disallowMins: number;
		                minMins: number;
		                compMins: number;
		                bufferMins: number;
		                announcementMins: number;
		            };
		            tAutoJoin: number;
		            tAutoClaim: number;
		        }>;
		        tTemplateOnly: number;
		        currentVersionId: number;
		        currentPeriod: {
		            versionId: number;
		            startingAt: number;
		            endingAt: number;
		            rotationType: string;
		            numDaysToRotate: number;
		        };
		    };
		};
		status: number;
	};


	/**
	 * Updates a future ADHOC tournament period scheduled for the leaderboard configuration, identified by the existing period's UTC startingAt time, in milliseconds. Period being edited must be scheduled in the future, not in-progress. Tournament settings may include tournament period ('tPeriod'), tournament configs and associated flags ('tTournament') and tournament phases ('tPhases').
	 * 
	 * @param  {string} leaderboardId ID uniquely identifying the leaderboard configuration to edit. Leaderboard must be configured with ADHOC rotation type.
	 * @param  {number} dbVersion The database version of the leaderboard config being edited. For any version, specify -1.
	 * @param  {number} periodStartingAtUtcMillis The exact startingAt UTC timestamp, in milliseconds, identifying the ADHOC period being edited.
	 * @param  {Object} tSettingsJson Tournament settings changes for identified AHDOC tournament period, specified as JSON object. Settings may include: 'tPeriod': Required. Defines the UTC 'startingAt' time and the duration: 'durationDays', 'durationDays', 'durationDays'. Period cannot overlap with any other ADHOC period(s), future or in-progress;  'tTournament': Required. Must specify 'tConfigs' defining the tournament configuration code(s) ('tConfigCode') and tournament template version(s) ('activeUpUntil', set to -1 to pick up latest version of tournament template at time of rotation, or optionally set to a maximum fixed version) for the ADHOC period, as well as 'tAutoClaim' flag indicating whether users can automatically claim tournament rewards on login, and 'tAutoJoin' flag indicating whether users automatically join the tournament on posting score (must be free entry and only 1 tournament configured);   'tPhases': Required. Defines the phases, in minutes, within the start and end period times. The total time for the enabled phases cannot exceed the overall length of the period. The competition minutes are calculated and must be greater than 0. Configurable phases: 'enrolMins', 'disallowMins', 'minMins', 'bufferMins', 'announcementMins';  and, if ADHOC tournament in progress, tournament settings may include 'tPeriod' duration settings: 'durationDays', 'durationDays', 'durationDays', which may affect endingAt time and cannot overlap with any future ADHOC periods scheduled.
	 * @returns ServiceProxyResponse
	 */ 
	sysEditAdhocTournamentPeriod(leaderboardId: string, dbVersion: number, periodStartingAtUtcMillis: number, tSettingsJson: Object): {
		data: {
		    aLeaderboardIdC: {
		        leaderboardId: string;
		        dbVersion: number;
		        resetAt: number;
		        leaderboardType: string;
		        rotationType: string;
		        retainedCount: number;
		        data: {
		        };
		        numDaysToRotate: number;
		        entryType: string;
		        tEnabled: number;
		        tScheduled: Array<{
		            startingAt: number;
		            endingAt: number;
		            tConfigs: {
		                bronzeLevel: {
		                    activeUpUntil: number;
		                    tConfigCode: string;
		                };
		                silverLevel: {
		                    activeUpUntil: number;
		                    tConfigCode: string;
		                };
		                goldLevel: {
		                    activeUpUntil: number;
		                    tConfigCode: string;
		                };
		            };
		            tStates: {
		                enrolMins: number;
		                disallowMins: number;
		                minMins: number;
		                compMins: number;
		                bufferMins: number;
		                announcementMins: number;
		            };
		            tAutoJoin: number;
		            tAutoClaim: number;
		        }>;
		        tTemplateOnly: number;
		        currentVersionId: number;
		        currentPeriod: {
		            versionId: number;
		            startingAt: number;
		            endingAt: number;
		            rotationType: string;
		            numDaysToRotate: number;
		        };
		    };
		};
		status: number;
	};


	/**
	 * Deletes a future ADHOC tournament period scheduled for the leaderboard configuration, identified by the existing period's UTC startingAt time, in milliseconds. Period being edited must be scheduled in the future, not in-progress. Tournament settings may include tournament period ('tPeriod'), tournament configs and associated flags ('tTournament') and tournament phases ('tPhases').
	 * 
	 * @param  {string} leaderboardId ID uniquely identifying the leaderboard configuration to edit. Leaderboard must be configured with ADHOC rotation type.
	 * @param  {number} dbVersion The database version of the leaderboard config being edited. For any version, specify -1.
	 * @param  {number} periodStartingAtUtcMillis The exact startingAt UTC timestamp, in milliseconds, identifying the ADHOC period to be deleted.
	 * @returns ServiceProxyResponse
	 */ 
	sysDeleteAdhocTournamentPeriod(leaderboardId: string, dbVersion: number, periodStartingAtUtcMillis: number): {
		data: {
		    aLeaderboardIdC: {
		        leaderboardId: string;
		        dbVersion: number;
		        resetAt: any | null;
		        leaderboardType: string;
		        rotationType: string;
		        retainedCount: number;
		        data: {
		        };
		        numDaysToRotate: number;
		        entryType: string;
		        tEnabled: number;
		        tTemplateOnly: number;
		        currentVersionId: number;
		        currentPeriod: {
		            versionId: number;
		            startingAt: number;
		            endingAt: any | null;
		            rotationType: string;
		            numDaysToRotate: number;
		        };
		    };
		};
		status: number;
	};


	/**
	 * Returns a page of leaderboard configurations from the server based on the specified context.
	 * 
	 * @param  {Object} context The json context for the page request.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetLeaderboardConfigsPage(context: Object): {
		data: {
		    context: string;
		    results: {
		        count: number;
		        page: number;
		        items: Array<{
		            entryType: string;
		            tTemplateOnly: number;
		            numDaysToRotate: number;
		            data: {
		            };
		            currentVersionId: number;
		            rotationType: string;
		            leaderboardType: string;
		            leaderboardId: string;
		            tEnabled: number;
		        }>;
		        moreAfter: number;
		        moreBefore: number;
		    };
		};
		status: number;
	};


	/**
	 * Gets the page of leaderboard configuration information from the server based on the encoded context and specified page offset.
	 * 
	 * @param  {Object} context The context string returned from the server from a previous call to SysGetLeaderboardConfigsPage or SysGetLeaderboardConfigsPageOffset.
	 * @param  {number} pageOffset The positive or negative page offset to fetch. Uses the last page retrieved using the context string to determine a starting point.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetLeaderboardConfigsPageOffset(context: Object, pageOffset: number): {
		data: {
		    context: string;
		    results: {
		        count: number;
		        page: number;
		        items: Array<{
		            entryType: string;
		            tTemplateOnly: number;
		            numDaysToRotate: number;
		            data: {
		            };
		            currentVersionId: number;
		            rotationType: string;
		            leaderboardType: string;
		            leaderboardId: string;
		            tEnabled: number;
		        }>;
		        moreAfter: number;
		        moreBefore: number;
		    };
		};
		status: number;
	};


	/**
	 * Delete a leaderboard config, with support for tournament leaderboards. Note that a leaderboard configured as a tournament template-only cannot be deleted if any division set configuration is referencing it.
	 * 
	 * @param  {string} leaderboardId The leaderboard to delete.
	 * @param  {boolean} forceDelete Flag indicates whether to force delete leaderboard even if it has a tournament in progress or if it is an ADHOC leaderboard with future scheduled tournament period(s).
	 * @returns ServiceProxyResponse
	 */ 
	sysDeleteLeaderboardConfig(leaderboardId: string, forceDelete: boolean): {
		status: number;
		data: {
		};
	};

}