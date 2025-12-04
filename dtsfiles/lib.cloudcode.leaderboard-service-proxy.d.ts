/// <reference no-default-lib="true"/>

interface LeaderboardServiceProxy {
	/**
	 * Delete leaderboards.
	 * 
	 * @param  {nativeArray} leaderboardIds Collection of leaderboard ids.
	 * @returns ServiceProxyResponse
	 */ 
	deleteLeaderboards(leaderboardIds: nativeArray): ServiceProxyResponse;

	/**
	 * Create a leaderboard. Optional parameter,data, numDaysToRotate(but mandatory for 'DAYS' rotationType.
	 * 
	 * @param  {string} leaderboardId The leaderboard to create.
	 * @param  {string} leaderboardType Leaderboard type.
	 * @param  {string} rotationType Type of rotation.
	 * @param  {object} rotationResetTime Date to start the rotation (date in millis.)
	 * @param  {long} retainedCount How many previous rotations to keep.
	 * @param  {integer} numDaysToRotate Optional parameter for use only with DAYS rotation type.
	 * @param  {nativeObject} data Optional user-defined data to relevant to the created leaderboard.
	 * @returns ServiceProxyResponse
	 */ 
	createLeaderboard(leaderboardId: string, leaderboardType: string, rotationType: string, rotationResetTime: object, retainedCount: long, numDaysToRotate: integer, data: nativeObject): ServiceProxyResponse;

	/**
	 * Create a new player or group entry leaderboard configuration.
	 * 
	 * @param  {string} leaderboardId Unique ID of the leaderboard configuration to create.
	 * @param  {string} entryType Type of leaderboard entry. Valid values: 'PLAYER', 'GROUP'.
	 * @param  {string} leaderboardType Type of leaderboard. Valid values: 'LAST_VALUE', 'HIGH_VALUE', 'LOW_VALUE', 'CUMULATIVE', 'ARCADE_HIGH', 'ARCADE_LOW'.
	 * @param  {string} rotationType Type of rotation. Valid values: 'NEVER', 'DAILY', 'DAYS', 'WEEKLY', 'MONTHLY', 'YEARLY'.
	 * @param  {integer} numDaysToRotate Optional parameter. Required only if 'DAYS' rotation type; otherwise, null.
	 * @param  {long} rotationResetTimestampUtcMillis UTC timestamp, in milliseconds, at which to rotate the leaderboard.
	 * @param  {long} retainedCount The number of rotations (versions) of the leaderboard to retain.
	 * @param  {nativeObject} data Optional parameter. Developer-defined data relevant to the created leaderboard.
	 * @returns ServiceProxyResponse
	 */ 
	sysCreateLeaderboard(leaderboardId: string, entryType: string, leaderboardType: string, rotationType: string, numDaysToRotate: integer, rotationResetTimestampUtcMillis: long, retainedCount: long, data: nativeObject): ServiceProxyResponse;

	/**
	 * Edit a leaderboard. Optional parameter,data, numDaysToRotate(but mandatory for 'DAYS' rotationType.
	 * 
	 * @param  {string} leaderboardId The leaderboard to edit.
	 * @param  {string} leaderboardType Optional user-defined data relevant to the edited leaderboard.
	 * @param  {string} rotationType The leaderboard type.
	 * @param  {object} rotationResetTime Type of rotation.
	 * @param  {long} retainedCount Date to start the rotation (date in millis.)
	 * @param  {integer} numDaysToRotate How many previous rotations to keep.
	 * @param  {nativeObject} data Optional parameter for use only with DAYS rotation type.
	 * @returns ServiceProxyResponse
	 */ 
	editLeaderboard(leaderboardId: string, leaderboardType: string, rotationType: string, rotationResetTime: object, retainedCount: long, numDaysToRotate: integer, data: nativeObject): ServiceProxyResponse;

	/**
	 * Edit a player or group entry leaderboard configuration.
	 * 
	 * @param  {string} leaderboardId ID uniquely identifying the leaderboard configuration to edit.
	 * @param  {string} leaderboardType Type of leaderboard. Valid values: 'LAST_VALUE', 'HIGH_VALUE', 'LOW_VALUE', 'CUMULATIVE', 'ARCADE_HIGH', 'ARCADE_LOW'.
	 * @param  {string} rotationType Type of rotation. Valid values: 'NEVER', 'DAILY', 'DAYS', 'WEEKLY', 'MONTHLY', 'YEARLY'.
	 * @param  {integer} numDaysToRotate Optional parameter. Required if 'DAYS' rotation type; otherwise, null.
	 * @param  {long} rotationResetTimestampUtcMillis UTC timestamp, in milliseconds, at which to rotate the leaderboard.
	 * @param  {long} retainedCount The number of rotations (versions) of the leaderboard to retain.
	 * @param  {nativeObject} data Optional parameter. Developer-defined data relevant to the leaderboard.
	 * @returns ServiceProxyResponse
	 */ 
	sysEditLeaderboard(leaderboardId: string, leaderboardType: string, rotationType: string, numDaysToRotate: integer, rotationResetTimestampUtcMillis: long, retainedCount: long, data: nativeObject): ServiceProxyResponse;

	/**
	 * Resets a leaderboard configured with rotation strategy NEVER by incrementing its version.
	 * 
	 * @param  {string} leaderboardId The leaderboard to reset.
	 * @returns ServiceProxyResponse
	 */ 
	sysResetNeverLeaderboard(leaderboardId: string): ServiceProxyResponse;

	/**
	 * List all the leaderboards.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	listAllLeaderboards(): ServiceProxyResponse;

	/**
	 * Retrieve the social leaderboard. Optional parameters: replaceName.
	 * 
	 * @param  {string} leaderboardId The id of the leaderboard to retrieve.
	 * @param  {boolean} replaceName If true, the currently logged in player's name will be replaced by the string "You."
	 * @returns ServiceProxyResponse
	 */ 
	getSocialLeaderboard(leaderboardId: string, replaceName: boolean): ServiceProxyResponse;

	/**
	 * Retrieve the social leaderboard by version. Optional parameters: replaceName.
	 * 
	 * @param  {string} leaderboardId The id of the leaderboard to retrieve.
	 * @param  {boolean} replaceName If true, the currently logged in player's name will be replaced by the string "You."
	 * @param  {long} versionId The leaderboard version to get.
	 * @returns ServiceProxyResponse
	 */ 
	getSocialLeaderboardByVersion(leaderboardId: string, replaceName: boolean, versionId: long): ServiceProxyResponse;

	/**
	 * Retrieve multiple social leaderboards. Optional parameters: replaceName.
	 * 
	 * @param  {nativeArray} leaderboardIds Collection of leaderboard ids.
	 * @param  {long} leaderboardResultCount Maximum count of entries to return for each leaderboard.
	 * @param  {boolean} replaceName If true, the currently logged in player's name will be replaced by the string "You"
	 * @returns ServiceProxyResponse
	 */ 
	getMultiSocialLeaderboard(leaderboardIds: nativeArray, leaderboardResultCount: long, replaceName: boolean): ServiceProxyResponse;

	/**
	 * Retrieve the social leaderboard for a group.
	 * 
	 * @param  {string} leaderboardId The id of the leaderboard.
	 * @param  {string} groupId The id of the group.
	 * @returns ServiceProxyResponse
	 */ 
	getGroupSocialLeaderboard(leaderboardId: string, groupId: string): ServiceProxyResponse;

	/**
	 * Retrieve the social leaderboard for a group by version.
	 * 
	 * @param  {string} leaderboardId The id of the leaderboard.
	 * @param  {string} groupId The id of the group.
	 * @param  {long} versionId The leaderboard version to get.
	 * @returns ServiceProxyResponse
	 */ 
	getGroupSocialLeaderboardByVersion(leaderboardId: string, groupId: string, versionId: long): ServiceProxyResponse;

	/**
	 * Retrieve a sorted, social leaderboard of the specified list of players by version.
	 * 
	 * @param  {string} leaderboardId The id of the leaderboard.
	 * @param  {stringArray} profileIds The ids of the players.
	 * @param  {long} versionId The leaderboard version to get.
	 * @returns ServiceProxyResponse
	 */ 
	getPlayersSocialLeaderboardByVersion(leaderboardId: string, profileIds: stringArray, versionId: long): ServiceProxyResponse;

	/**
	 * Retrieve a sorted, social leaderboard of the specified list of players.
	 * 
	 * @param  {string} leaderboardId The id of the leaderboard.
	 * @param  {nativeArray} profileIds The ids of the players.
	 * @returns ServiceProxyResponse
	 */ 
	getPlayersSocialLeaderboard(leaderboardId: string, profileIds: nativeArray): ServiceProxyResponse;

	/**
	 * Retrieve a page of the global leaderboard specified by the start and end indexes (0-based).
	 * 
	 * @param  {string} leaderboardId The id of the leaderboard.
	 * @param  {string} sort Sort order of page. ("HIGH_TO_LOW" or "LOW_TO_HIGH")
	 * @param  {long} startIndex The rank at which to start the page.
	 * @param  {long} endIndex The rank at which to end the page.
	 * @returns ServiceProxyResponse
	 */ 
	getGlobalLeaderboardPage(leaderboardId: string, sort: string, startIndex: long, endIndex: long): ServiceProxyResponse;

	/**
	 * Retrieve a page of the global leaderboard specified by the start and end indexes (0-based). By using a non-current version id, the user can retrieve a historical leaderboard.
	 * 
	 * @param  {string} leaderboardId The id of the leaderboard.
	 * @param  {string} sort Sort order of page. ("HIGH_TO_LOW" or "LOW_TO_HIGH")
	 * @param  {long} startIndex The rank at which to start the page.
	 * @param  {long} endIndex The rank at which to end the page.
	 * @param  {long} versionId The leaderboard version to get.
	 * @returns ServiceProxyResponse
	 */ 
	getGlobalLeaderboardPageByVersion(leaderboardId: string, sort: string, startIndex: long, endIndex: long, versionId: long): ServiceProxyResponse;

	/**
	 * Retrieve a view of the global leaderboard surrounding the current player.
	 * 
	 * @param  {string} leaderboardId The id of the leaderboard.
	 * @param  {string} sort Sort order of page. ("HIGH_TO_LOW" or "LOW_TO_HIGH")
	 * @param  {long} beforeCount The count of players before the current player to include.
	 * @param  {long} afterCount The count of players after the current player to include.
	 * @returns ServiceProxyResponse
	 */ 
	getGlobalLeaderboardView(leaderboardId: string, sort: string, beforeCount: long, afterCount: long): ServiceProxyResponse;

	/**
	 * Method returns a view of global leaderboard results that centers on the current player. By using a non-current version id, the user can retrieve a historical leaderboard.
	 * 
	 * @param  {string} leaderboardId The id of the leaderboard.
	 * @param  {string} sort Sort order of page. ("HIGH_TO_LOW" or "LOW_TO_HIGH")
	 * @param  {long} beforeCount The count of players before the current player to include.
	 * @param  {long} afterCount The count of players after the current player to include.
	 * @param  {long} versionId The leaderboard version to get.
	 * @returns ServiceProxyResponse
	 */ 
	getGlobalLeaderboardViewByVersion(leaderboardId: string, sort: string, beforeCount: long, afterCount: long, versionId: long): ServiceProxyResponse;

	/**
	 * Retrieve information about the retained versions for the leaderboard (sorted newest to oldest).
	 * 
	 * @param  {string} leaderboardId The id of the leaderboard.
	 * @returns ServiceProxyResponse
	 */ 
	getGlobalLeaderboardVersions(leaderboardId: string): ServiceProxyResponse;

	/**
	 * Post the players score to the given social leaderboard. Optional parameters: leaderboardId and data.
	 * 
	 * @param  {string} leaderboardId The leaderboard to post to.
	 * @param  {long} score The score to post.
	 * @param  {nativeObject} data Optional user-defined data to post with the score.
	 * @returns ServiceProxyResponse
	 */ 
	postScoreToLeaderboard(leaderboardId: string, score: long, data: nativeObject): ServiceProxyResponse;

	/**
	 * Post score to another player's score.
	 * 
	 * @param  {string} profileId The profileId of the player to post on behalf of.
	 * @param  {string} leaderboardId The id of the leaderboard.
	 * @param  {long} score The score to post.
	 * @param  {nativeObject} data Optional user-defined data to post with the score.
	 * @param  {boolean} forceCreate Should a new score be created? When false, the call can only modify a currently existing score.
	 * @returns ServiceProxyResponse
	 */ 
	postScoreToLeaderboardOnBehalfOf(profileId: string, leaderboardId: string, score: long, data: nativeObject, forceCreate: boolean): ServiceProxyResponse;

	/**
	 * Post the player's score to the given social leaderboard and dynamically create if necessary. LeaderboardType, rotationType, rotationReset, and retainedCount are required.
	 * 
	 * @param  {string} leaderboardId The leaderboard to post to.
	 * @param  {long} score A score to post.
	 * @param  {nativeObject} data Optional user-defined data to post with the score.
	 * @param  {string} leaderboardType The leaderboard type.
	 * @param  {string} rotationType Type of rotation.
	 * @param  {object} rotationResetTime Date to start the rotation (date in millis.)
	 * @param  {long} retainedCount How many previous rotations to keep.
	 * @returns ServiceProxyResponse
	 */ 
	postScoreToDynamicLeaderboard(leaderboardId: string, score: long, data: nativeObject, leaderboardType: string, rotationType: string, rotationResetTime: object, retainedCount: long): ServiceProxyResponse;

	/**
	 * Post the player's score to the given social leaderboard, dynamically creating the leaderboard if it does not exist yet. To create new leaderboard, configJson must specify leaderboardType, rotationType, resetAt, and retainedCount, at a minimum, with support to optionally specify an expiry in minutes.
	 * 
	 * @param  {string} leaderboardId The leaderboard to post to.
	 * @param  {long} score A score to post.
	 * @param  {nativeObject} scoreData Optional user-defined data to post with the score.
	 * @param  {nativeObject} configJson Configuration for the leaderboard if it does not exist yet, specified as JSON object. Configuration fields supported are: leaderboardType': Required. Type of leaderboard. Valid values are 'LAST_VALUE', 'HIGH_VALUE', 'LOW_VALUE', 'CUMULATIVE', 'ARCADE_HIGH', 'ARCADE_LOW';  'rotationType': Required. Type of rotation. Valid values are 'NEVER', 'DAILY', 'DAYS', 'WEEKLY', 'MONTHLY', 'YEARLY';  'numDaysToRotate': Required if 'DAYS' rotation type, with valid values between 2 and 14; otherwise, null;  'resetAt': UTC timestamp, in milliseconds, at which to rotate the period. Always null if 'NEVER' rotation type;  'retainedCount': Required. Number of rotations (versions) of the leaderboard to retain; 'expireInMins': Optional. Duration, in minutes, before the leaderboard is to automatically expire.
	 * @returns ServiceProxyResponse
	 */ 
	postScoreToDynamicLeaderboardUsingConfig(leaderboardId: string, score: long, scoreData: nativeObject, configJson: nativeObject): ServiceProxyResponse;

	/**
	 * Post the player's score to the given social leaderboard and dynamically create if necessary. LeaderboardType, rotationType, rotationReset, and retainedCount are required.
	 * 
	 * @param  {string} leaderboardId The leaderboard to post to.
	 * @param  {long} score A score to post.
	 * @param  {nativeObject} data Optional user-defined data to post with the score.
	 * @param  {string} leaderboardType The leaderboard type.
	 * @param  {string} rotationType Type of rotation.
	 * @param  {object} rotationResetTime Date to start the rotation (date in millis.)
	 * @param  {long} retainedCount How many previous rotations to keep.
	 * @returns ServiceProxyResponse
	 */ 
	postScoreToDynamicLeaderboardUTC(leaderboardId: string, score: long, data: nativeObject, leaderboardType: string, rotationType: string, rotationResetTime: object, retainedCount: long): ServiceProxyResponse;

	/**
	 * Post the player's score to the given social leaderboard and dynamically create if necessary. LeaderboardType, rotationType, rotationReset, retainedCount and numDaysToRotate are required.
	 * 
	 * @param  {string} leaderboardId The leaderboard to post to.
	 * @param  {long} score A score to post.
	 * @param  {nativeObject} data Optional user-defined data to post with the score.
	 * @param  {string} leaderboardType The leaderboard type.
	 * @param  {string} rotationType Type of rotation.
	 * @param  {object} rotationResetTime Date to start the rotation (date in millis.)
	 * @param  {long} retainedCount How many previous rotations to keep.
	 * @param  {integer} numDaysToRotate Optional parameter for use only with DAYS rotation type.
	 * @returns ServiceProxyResponse
	 */ 
	postScoreToDynamicLeaderboardDays(leaderboardId: string, score: long, data: nativeObject, leaderboardType: string, rotationType: string, rotationResetTime: object, retainedCount: long, numDaysToRotate: integer): ServiceProxyResponse;

	/**
	 * Post the player's score to the given social leaderboard and dynamically create if necessary. LeaderboardType, rotationType, rotationReset, retainedCount and numDaysToRotate are required.
	 * 
	 * @param  {string} leaderboardId The leaderboard to post to.
	 * @param  {long} score A score to post.
	 * @param  {nativeObject} data Optional user-defined data to post with the score.
	 * @param  {string} leaderboardType The leaderboard type.
	 * @param  {string} rotationType Type of rotation.
	 * @param  {object} rotationResetTime Date to start the rotation (date in millis.)
	 * @param  {long} retainedCount How many previous rotations to keep.
	 * @param  {integer} numDaysToRotate Optional parameter for use only with DAYS rotation type.
	 * @returns ServiceProxyResponse
	 */ 
	postScoreToDynamicLeaderboardDaysUTC(leaderboardId: string, score: long, data: nativeObject, leaderboardType: string, rotationType: string, rotationResetTime: object, retainedCount: long, numDaysToRotate: integer): ServiceProxyResponse;

	/**
	 * Gets the number of entries in a global leaderboard.
	 * 
	 * @param  {string} leaderboardId The id of the leaderboard.
	 * @returns ServiceProxyResponse
	 */ 
	getGlobalLeaderboardEntryCount(leaderboardId: string): ServiceProxyResponse;

	/**
	 * Gets the number of entries in a global leaderboard. By using a non-current version id, the user can retrieve a historical leaderboard.
	 * 
	 * @param  {string} leaderboardId The id of the leaderboard.
	 * @param  {long} versionId The leaderboard version to get.
	 * @returns ServiceProxyResponse
	 */ 
	getGlobalLeaderboardEntryCountByVersion(leaderboardId: string, versionId: long): ServiceProxyResponse;

	/**
	 * Retrieves the player's score data from the specified leaderboard. Optional parameters: versionId
	 * 
	 * @param  {string} leaderboardId The leaderboard to retrieve the score from.
	 * @param  {long} versionId The version of the leaderboard.
	 * @returns ServiceProxyResponse
	 */ 
	getPlayerScore(leaderboardId: string, versionId: long): ServiceProxyResponse;

	/**
	 * Retrieves up to maxResults scores data for user for arcade-style leaderboard.
	 * 
	 * @param  {string} leaderboardId The leaderboard to retrieve the score from.
	 * @param  {long} versionId The version of the leaderboard. Use -1 to specify the currently active leaderboard version.
	 * @param  {integer} maxResults The maximum number of player scores to retrieve.
	 * @returns ServiceProxyResponse
	 */ 
	getPlayerScores(leaderboardId: string, versionId: long, maxResults: integer): ServiceProxyResponse;

	/**
	 * Removes the player's score data from the specified leaderboard. Optional parameters: versionId
	 * 
	 * @param  {string} leaderboardId The leaderboard to post to.
	 * @param  {long} versionId The version of the leaderboard. Use -1 to specify the currently active leaderboard version.
	 * @returns ServiceProxyResponse
	 */ 
	removePlayerScore(leaderboardId: string, versionId: long): ServiceProxyResponse;

	/**
	 * Removes the group's score data from the specified group leaderboard. Optional parameters: versionId
	 * 
	 * @param  {string} leaderboardId The id of the leaderboard.
	 * @param  {string} groupId The id of the group.
	 * @param  {long} versionId The version of the leaderboard. Use -1 to specify the currently active leaderboard version.
	 * @returns ServiceProxyResponse
	 */ 
	removeGroupScore(leaderboardId: string, groupId: string, versionId: long): ServiceProxyResponse;

	/**
	 * Retrieves the player's score data in the current rotation from a list of leaderboards.
	 * 
	 * @param  {nativeArray} leaderboardIds Collection of leaderboard ids.
	 * @returns ServiceProxyResponse
	 */ 
	getPlayerScoresFromLeaderboards(leaderboardIds: nativeArray): ServiceProxyResponse;

	/**
	 * Post the group score to the given group leaderboard. Optional parameters: data.
	 * 
	 * @param  {string} leaderboardId The id of the leaderboard.
	 * @param  {string} groupId The id of the group.
	 * @param  {long} score The score to post.
	 * @param  {nativeObject} data Optional user-defined data to post with the score.
	 * @returns ServiceProxyResponse
	 */ 
	postScoreToGroupLeaderboard(leaderboardId: string, groupId: string, score: long, data: nativeObject): ServiceProxyResponse;

	/**
	 * Post the group score to the given group leaderboard and dynamically create if necessary. LeaderboardType, rotationType, rotationReset, and retainedCount are required.
	 * 
	 * @param  {string} leaderboardId The leaderboard to post to.
	 * @param  {string} groupId The id of the group.
	 * @param  {long} score A score to post.
	 * @param  {nativeObject} data Optional user-defined data to post with the score.
	 * @param  {string} leaderboardType The leaderboard type.
	 * @param  {string} rotationType Type of rotation.
	 * @param  {object} rotationResetTime Date to start the rotation (date in millis.)
	 * @param  {long} retainedCount How many previous rotations to keep.
	 * @returns ServiceProxyResponse
	 */ 
	postScoreToDynamicGroupLeaderboard(leaderboardId: string, groupId: string, score: long, data: nativeObject, leaderboardType: string, rotationType: string, rotationResetTime: object, retainedCount: long): ServiceProxyResponse;

	/**
	 * Post the group score to the given group leaderboard and dynamically create if necessary. LeaderboardType, rotationType, rotationReset, and retainedCount are required.
	 * 
	 * @param  {string} leaderboardId The leaderboard to post to.
	 * @param  {string} groupId The id of the group.
	 * @param  {long} score A score to post.
	 * @param  {nativeObject} data Optional user-defined data to post with the score.
	 * @param  {string} leaderboardType The leaderboard type.
	 * @param  {string} rotationType Type of rotation.
	 * @param  {object} rotationResetTime Date to start the rotation (date in millis.)
	 * @param  {long} retainedCount How many previous rotations to keep.
	 * @returns ServiceProxyResponse
	 */ 
	postScoreToDynamicGroupLeaderboardUTC(leaderboardId: string, groupId: string, score: long, data: nativeObject, leaderboardType: string, rotationType: string, rotationResetTime: object, retainedCount: long): ServiceProxyResponse;

	/**
	 * Post the group score to the given group leaderboard and dynamically create if necessary. LeaderboardType, rotationType, rotationReset, retainedCount and numDaysToRotate are required.
	 * 
	 * @param  {string} leaderboardId The leaderboard to post to.
	 * @param  {string} groupId The id of the group.
	 * @param  {long} score A score to post.
	 * @param  {nativeObject} data Optional user-defined data to post with the score.
	 * @param  {string} leaderboardType The leaderboard type.
	 * @param  {string} rotationType Type of rotation.
	 * @param  {object} rotationResetTime Date to start the rotation (date in millis.)
	 * @param  {long} retainedCount How many previous rotations to keep.
	 * @param  {integer} numDaysToRotate Optional parameter for use only with DAYS rotation type.
	 * @returns ServiceProxyResponse
	 */ 
	postScoreToDynamicGroupLeaderboardDaysUTC(leaderboardId: string, groupId: string, score: long, data: nativeObject, leaderboardType: string, rotationType: string, rotationResetTime: object, retainedCount: long, numDaysToRotate: integer): ServiceProxyResponse;

	/**
	 * Post the group's score to the given social leaderboard, dynamically creating the group leaderboard if it does not exist yet. To create new leaderboard, configJson must specify leaderboardType, rotationType, resetAt, and retainedCount, at a minimum, with support to optionally specify an expiry in minutes.
	 * 
	 * @param  {string} leaderboardId The leaderboard to post to.
	 * @param  {string} groupId The id of the group.
	 * @param  {long} score A score to post.
	 * @param  {nativeObject} scoreData Optional user-defined data to post with the score.
	 * @param  {nativeObject} configJson Configuration for the group leaderboard if it does not exist yet, specified as JSON object. Configuration fields supported are: leaderboardType': Required. Type of leaderboard. Valid values are 'LAST_VALUE', 'HIGH_VALUE', 'LOW_VALUE', 'CUMULATIVE', 'ARCADE_HIGH', 'ARCADE_LOW';  'rotationType': Required. Type of rotation. Valid values are 'NEVER', 'DAILY', 'DAYS', 'WEEKLY', 'MONTHLY', 'YEARLY';  'numDaysToRotate': Required if 'DAYS' rotation type, with valid values between 2 and 14; otherwise, null;  'resetAt': UTC timestamp, in milliseconds, at which to rotate the period. Always null if 'NEVER' rotation type;  'retainedCount': Required. Number of rotations (versions) of the leaderboard to retain; 'expireInMins': Optional. Duration, in minutes, before the leaderboard is to automatically expire.
	 * @returns ServiceProxyResponse
	 */ 
	postScoreToDynamicGroupLeaderboardUsingConfig(leaderboardId: string, groupId: string, score: long, scoreData: nativeObject, configJson: nativeObject): ServiceProxyResponse;

	/**
	 * Retrieve a view of the group leaderboard surrounding the current group score.
	 * 
	 * @param  {string} leaderboardId The id of the leaderboard.
	 * @param  {string} groupId The id of the group.
	 * @param  {string} sort Sort order of page. ("HIGH_TO_LOW" or "LOW_TO_HIGH")
	 * @param  {long} beforeCount The count of players before the current player to include.
	 * @param  {long} afterCount The count of players after the current player to include.
	 * @returns ServiceProxyResponse
	 */ 
	getGroupLeaderboardView(leaderboardId: string, groupId: string, sort: string, beforeCount: long, afterCount: long): ServiceProxyResponse;

	/**
	 * Method returns a view of group leaderboard results that centers on the current group. By using a non-current version id, the user can retrieve a historical group leaderboard.
	 * 
	 * @param  {string} leaderboardId The id of the leaderboard.
	 * @param  {string} groupId The id of the group.
	 * @param  {long} versionId The version of the group leaderboard.
	 * @param  {string} sort Sort order of page. ("HIGH_TO_LOW" or "LOW_TO_HIGH")
	 * @param  {long} beforeCount The count of players before the current player to include.
	 * @param  {long} afterCount The count of players after the current player to include.
	 * @returns ServiceProxyResponse
	 */ 
	getGroupLeaderboardViewByVersion(leaderboardId: string, groupId: string, versionId: long, sort: string, beforeCount: long, afterCount: long): ServiceProxyResponse;

	/**
	 * Returns list of applicable leaderboards, with summary leaderboard configuration information, including tournament flags, if applicable. Option 'filterType' defaults to 'standard', with additional supported filter types of 'all', 'tournament', 'divisions' and 'templates'.
	 * 
	 * @param  {nativeObject} optionsJson Supports filtering of returned list of leaderboard configs. Option 'filterType' defaults to 'standard' if not specified. Valid filterType values include 'all', 'standard', 'tournament', 'divisions' and 'templates'. If 'tournament' is specified, returned list will include leaderboards configured for tournaments, but excludes division set instances and templates. If 'division', returned list will include division set tournament leaderboard instances. If 'templates', returned list will include leaderboards flagged as division template only.
	 * @returns ServiceProxyResponse
	 */ 
	sysListLeaderboardConfigs(optionsJson: nativeObject): ServiceProxyResponse;

	/**
	 * Returns leaderboard configuration information, including tournament settings, for future and current (active) version of the specified leaderboard.
	 * 
	 * @param  {string} leaderboardId ID uniquely identifying the leaderboard configuration to retrieve.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetLeaderboardConfig(leaderboardId: string): ServiceProxyResponse;

	/**
	 * Creates a leaderboard configuration, with support for tournament leaderboards.
	 * 
	 * @param  {string} leaderboardId ID uniquely identifying the leaderboard configuration to retrieve.
	 * @param  {nativeObject} configJson Configuration for the leaderboard, specified as JSON object. Configuration fields supported are: 'entryType': Required. Valid values are 'PLAYER' and 'GROUP';  leaderboardType': Required. Type of leaderboard. Valid values are 'LAST_VALUE', 'HIGH_VALUE', 'LOW_VALUE', 'CUMULATIVE', 'ARCADE_HIGH', 'ARCADE_LOW';  'rotationType': Required. Type of rotation. Valid values are 'NEVER', 'DAILY', 'DAYS', 'WEEKLY', 'MONTHLY', 'YEARLY';  'numDaysToRotate': Required if 'DAYS' rotation type, with valid values between 2 and 14; otherwise, null;  'resetAt': UTC timestamp, in milliseconds, at which to rotate the period. Always null if 'NEVER' rotation type;  'retainedCount': Required. Number of rotations (versions) of the leaderboard to retain;  'data': Optional parameter for data;  'tEnabled': Optional parameter to set whether tournaments are enabled (true) or not (false). Can only be true for recurring rotation types (not NEVER or ADHOC). Defaults to false;  'tTemplateOnly': Optional parameter to set whether leaderboard is a tournament template only (true) or not (false). Can only be true if tEnabled is true. Defaults to false.
	 * @returns ServiceProxyResponse
	 */ 
	sysCreateLeaderboardConfig(leaderboardId: string, configJson: nativeObject): ServiceProxyResponse;

	/**
	 * Edits a leaderboard configuration, with support for tournament leaderboards.
	 * 
	 * @param  {string} leaderboardId ID uniquely identifying the leaderboard configuration to retrieve.
	 * @param  {integer} dbVersion The database version of the leaderboard config being edited. For any version, specify -1.
	 * @param  {nativeObject} configJson Configuration changes for the leaderboard, specified as JSON object. Configuration fields supported are: leaderboardType': Required. Type of leaderboard. Valid values are 'LAST_VALUE', 'HIGH_VALUE', 'LOW_VALUE', 'CUMULATIVE', 'ARCADE_HIGH', 'ARCADE_LOW';  'rotationType': Required. Type of rotation. Valid values are 'NEVER', 'DAILY', 'DAYS', 'WEEKLY', 'MONTHLY', 'YEARLY';  'numDaysToRotate': Required if 'DAYS' rotation type, with valid values between 2 and 14; otherwise, null;  'resetAt': UTC timestamp, in milliseconds, at which to rotate the period. Always null if 'NEVER' rotation type;  'retainedCount': Required. Number of rotations (versions) of the leaderboard to retain;  'data': Optional parameter for data;  'tEnabled': Optional parameter to set whether tournaments are enabled (true) or not (false). Can only be true for recurring rotation types (not NEVER or ADHOC). Defaults to false;  'tTemplateOnly': Optional parameter to set whether leaderboard is a tournament template only (true) or not (false). Can only be true if tEnabled is true. Defaults to false.
	 * @returns ServiceProxyResponse
	 */ 
	sysEditLeaderboardConfig(leaderboardId: string, dbVersion: integer, configJson: nativeObject): ServiceProxyResponse;

	/**
	 * Updates the tournament settings for the leaderboard configuration, for future recurring periods only (does not affect current rotation). Supported tSettingsJson settings include: 'tTournament' (with 'tConfigs' to configure tournament templates, 'tAutoJoin' flag, 'tAutoClaim' flag), and 'tPhases' (to schedule 'enrolMins', 'announcementMins', 'disallowMins' and 'bufferMins' minutes).
	 * 
	 * @param  {string} leaderboardId ID uniquely identifying the leaderboard configuration being edited. Leaderboard must have tournaments enabled.
	 * @param  {integer} dbVersion The database version of the leaderboard config being edited. For any version, specify -1.
	 * @param  {nativeObject} tSettingsJson Tournament settings changes for the in-progress leaderboard rotation, specified as JSON object. Settings may include: 'tConfigs': Defines the tournament configurations codes and versions for the leaderboard. Set 'activeUpUntil' to -1 to pick up latest version of tournament template at time of rotation, or optionally set to a maximum fixed version. 'tAutoJoin': Set to true to have users automatically join the tournament on posting score. Only supported if only 1 tournament configured and free entry.  'tAutoClaim': Set to true to have users automatically claim tournament rewards on login. 'tStates': Defines the phases, in minutes, within the start and end period times. The total time for the enabled phases cannot exceed the overall length of the period. The competition minutes are calculated and must be greater than 0. Configurable phases: 'enrolMins', 'disallowMins', 'bufferMins', 'announcementMins'.
	 * @returns ServiceProxyResponse
	 */ 
	sysEditTournamentSettingsForFuturePeriodsOnly(leaderboardId: string, dbVersion: integer, tSettingsJson: nativeObject): ServiceProxyResponse;

	/**
	 * Updates the tournament settings for the leaderboard configuration, for the current period in progress, as well as the future periods if recurring periods (not ADHOC). Supported tSettingsJson settings include: 'tTournament' (with 'tConfigs' to configure tournament templates, 'tAutoJoin' flag, 'tAutoClaim' flag), and 'tPhases' (to schedule 'enrolMins', 'announcementMins', 'disallowMins' and 'bufferMins' minutes), and, if ADHOC tournament in progress, API also supports 'tPeriod' duration settings ('durationDays', 'durationDays', 'durationDays').
	 * 
	 * @param  {string} leaderboardId ID uniquely identifying the leaderboard configuration being edited. Leaderboard must have tournaments enabled.
	 * @param  {integer} dbVersion The database version of the leaderboard config being edited. For any version, specify -1.
	 * @param  {nativeObject} tSettingsJson Tournament settings changes specified as JSON object. If tournament settings include 'tTournament', must specify 'tConfigs' defining the tournament configuration code(s) ('tConfigCode') and tournament template version(s) ('activeUpUntil', set to -1 to pick up latest version of tournament template at time of rotation, or optionally set to a maximum fixed version) for the leaderboard, as well as 'tAutoClaim' flag indicating whether users can automatically claim tournament rewards on login, and 'tAutoJoin' flag indicating whether users automatically join the tournament on posting score (must be free entry and only 1 tournament configured);  If tournament settings include 'tPhases', defines the phases, in minutes, within the start and end period times. The total time for the enabled phases cannot exceed the overall length of the period. The competition minutes are calculated and must be greater than 0. Configurable phases: 'enrolMins', 'disallowMins', 'bufferMins', 'announcementMins'. And, if ADHOC tournament in progress, tournament settings may include 'tPeriod' duration settings: 'durationDays', 'durationDays', 'durationDays'. Changes affect endingAt time and cannot overlap with any future ADHOC periods scheduled.
	 * @returns ServiceProxyResponse
	 */ 
	sysEditTournamentSettingsIncludingCurrentPeriod(leaderboardId: string, dbVersion: integer, tSettingsJson: nativeObject): ServiceProxyResponse;

	/**
	 * Schedules a new tournament period for the ADHOC leaderboard configuration. Tournament must be scheduled in the future. Tournament settings ('tSettingsJson') must include tournament period ('tPeriod'), tournament configs and associated flags ('tTournament') and tournament phases ('tPhases').
	 * 
	 * @param  {string} leaderboardId ID uniquely identifying the leaderboard configuration to edit. Leaderboard must be configured with ADHOC rotation type.
	 * @param  {integer} dbVersion The database version of the leaderboard config being edited. For any version, specify -1.
	 * @param  {nativeObject} tSettingsJson Tournament settings for the new ADHOC tournament period being scheduled. Settings may include: 'tPeriod': Required. Defines the UTC 'startingAt' time and the duration: 'durationDays', 'durationDays', 'durationDays'. Period cannot overlap with any other ADHOC period(s), future or in-progress;  'tTournament': Required. Must specify 'tConfigs' defining the tournament configuration code(s) ('tConfigCode') and tournament template version(s) ('activeUpUntil', set to -1 to pick up latest version of tournament template at time of rotation, or optionally set to a maximum fixed version) for the ADHOC period, as well as 'tAutoClaim' flag indicating whether users can automatically claim tournament rewards on login, and 'tAutoJoin' flag indicating whether users automatically join the tournament on posting score (must be free entry and only 1 tournament configured);   'tPhases': Required. Defines the phases, in minutes, within the start and end period times. The total time for the enabled phases cannot exceed the overall length of the period. The competition minutes are calculated and must be greater than 0. Configurable phases: 'enrolMins', 'disallowMins', 'minMins', 'bufferMins', 'announcementMins';  and, if ADHOC tournament in progress, tournament settings may include 'tPeriod' duration settings: 'durationDays', 'durationDays', 'durationDays', which may affect endingAt time and cannot overlap with any future ADHOC periods scheduled.
	 * @returns ServiceProxyResponse
	 */ 
	sysCreateAdhocTournamentPeriod(leaderboardId: string, dbVersion: integer, tSettingsJson: nativeObject): ServiceProxyResponse;

	/**
	 * Updates a future ADHOC tournament period scheduled for the leaderboard configuration, identified by the existing period's UTC startingAt time, in milliseconds. Period being edited must be scheduled in the future, not in-progress. Tournament settings may include tournament period ('tPeriod'), tournament configs and associated flags ('tTournament') and tournament phases ('tPhases').
	 * 
	 * @param  {string} leaderboardId ID uniquely identifying the leaderboard configuration to edit. Leaderboard must be configured with ADHOC rotation type.
	 * @param  {integer} dbVersion The database version of the leaderboard config being edited. For any version, specify -1.
	 * @param  {long} periodStartingAtUtcMillis The exact startingAt UTC timestamp, in milliseconds, identifying the ADHOC period being edited.
	 * @param  {nativeObject} tSettingsJson Tournament settings changes for identified AHDOC tournament period, specified as JSON object. Settings may include: 'tPeriod': Required. Defines the UTC 'startingAt' time and the duration: 'durationDays', 'durationDays', 'durationDays'. Period cannot overlap with any other ADHOC period(s), future or in-progress;  'tTournament': Required. Must specify 'tConfigs' defining the tournament configuration code(s) ('tConfigCode') and tournament template version(s) ('activeUpUntil', set to -1 to pick up latest version of tournament template at time of rotation, or optionally set to a maximum fixed version) for the ADHOC period, as well as 'tAutoClaim' flag indicating whether users can automatically claim tournament rewards on login, and 'tAutoJoin' flag indicating whether users automatically join the tournament on posting score (must be free entry and only 1 tournament configured);   'tPhases': Required. Defines the phases, in minutes, within the start and end period times. The total time for the enabled phases cannot exceed the overall length of the period. The competition minutes are calculated and must be greater than 0. Configurable phases: 'enrolMins', 'disallowMins', 'minMins', 'bufferMins', 'announcementMins';  and, if ADHOC tournament in progress, tournament settings may include 'tPeriod' duration settings: 'durationDays', 'durationDays', 'durationDays', which may affect endingAt time and cannot overlap with any future ADHOC periods scheduled.
	 * @returns ServiceProxyResponse
	 */ 
	sysEditAdhocTournamentPeriod(leaderboardId: string, dbVersion: integer, periodStartingAtUtcMillis: long, tSettingsJson: nativeObject): ServiceProxyResponse;

	/**
	 * Deletes a future ADHOC tournament period scheduled for the leaderboard configuration, identified by the existing period's UTC startingAt time, in milliseconds. Period being edited must be scheduled in the future, not in-progress. Tournament settings may include tournament period ('tPeriod'), tournament configs and associated flags ('tTournament') and tournament phases ('tPhases').
	 * 
	 * @param  {string} leaderboardId ID uniquely identifying the leaderboard configuration to edit. Leaderboard must be configured with ADHOC rotation type.
	 * @param  {integer} dbVersion The database version of the leaderboard config being edited. For any version, specify -1.
	 * @param  {long} periodStartingAtUtcMillis The exact startingAt UTC timestamp, in milliseconds, identifying the ADHOC period to be deleted.
	 * @returns ServiceProxyResponse
	 */ 
	sysDeleteAdhocTournamentPeriod(leaderboardId: string, dbVersion: integer, periodStartingAtUtcMillis: long): ServiceProxyResponse;
}