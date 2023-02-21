/// <reference no-default-lib="true"/>

interface TournamentServiceProxy {
	/**
	 * Get tournament status associated with a leaderboard. Option parameter: leaderboard version id 'versionId'.
	 * 
	 * @param  {string} leaderboardId The leaderboard for the tournament.
	 * @param  {long} versionId Version of the tournament, use -1 for the latest version.
	 * @returns ServiceProxyResponse
	 */ 
	getTournamentStatus(leaderboardId: string, versionId: long): ServiceProxyResponse;

	/**
	 * Enrolls a given player in to the tournament and assigns a initial score
	 * 
	 * @param  {string} leaderboardId The leaderboard for the tournament.
	 * @param  {string} tournamentCode Tournament to join.
	 * @param  {long} initialScore Initial score for the user.
	 * @returns ServiceProxyResponse
	 */ 
	joinTournament(leaderboardId: string, tournamentCode: string, initialScore: long): ServiceProxyResponse;

	/**
	 * Removes player's score from tournament leaderboard
	 * 
	 * @param  {string} leaderboardId The leaderboard for the tournament.
	 * @returns ServiceProxyResponse
	 */ 
	leaveTournament(leaderboardId: string): ServiceProxyResponse;

	/**
	 * Record the given score to the leaderboard
	 * 
	 * @param  {string} leaderboardId The leaderboard for the tournament.
	 * @param  {long} score The score to post.
	 * @param  {nativeObject} data Optional data attached to the leaderboard entry.
	 * @param  {date} roundStartedEpoch Time the user started the match resulting in the score being posted. (date in millis.)
	 * @returns ServiceProxyResponse
	 */ 
	postTournamentScore(leaderboardId: string, score: long, data: nativeObject, roundStartedEpoch: date): ServiceProxyResponse;

	/**
	 * Record the given score to the leaderboard
	 * 
	 * @param  {string} leaderboardId The leaderboard for the tournament.
	 * @param  {long} score The score to post.
	 * @param  {nativeObject} data Optional data attached to the leaderboard entry.
	 * @param  {date} roundStartedEpoch Time the user started the match resulting in the score being posted. (date in millis.)
	 * @returns ServiceProxyResponse
	 */ 
	postTournamentScoreUTC(leaderboardId: string, score: long, data: nativeObject, roundStartedEpoch: date): ServiceProxyResponse;

	/**
	 * Record the given score to the leaderboard and returns leaderboard results.  Option parameter: leaderboard version id 'versionId'.
	 * 
	 * @param  {string} leaderboardId The leaderboard for the tournament.
	 * @param  {long} score A score to post.
	 * @param  {nativeObject} data Optional data attached to the leaderboard entry.
	 * @param  {date} roundStartedEpoch Time the user started the match resulting in the score being posted.
	 * @param  {string} sort Sort key for sort order of page.  ("HIGH_TO_LOW" or "LOW_TO_HIGH")
	 * @param  {long} beforeCount The count of players before the current player to include.
	 * @param  {long} afterCount The count of players after the current player to include.
	 * @param  {long} initialScore The initial score for players first joining a tournament. Usually 0, unless leaderboard is LOW_VALUE.
	 * @returns ServiceProxyResponse
	 */ 
	postTournamentScoreWithResults(leaderboardId: string, score: long, data: nativeObject, roundStartedEpoch: date, sort: string, beforeCount: long, afterCount: long, initialScore: long): ServiceProxyResponse;

	/**
	 * Record the given score to the leaderboard and returns leaderboard results.  Option parameter: leaderboard version id 'versionId'.
	 * 
	 * @param  {string} leaderboardId The leaderboard for the tournament.
	 * @param  {long} score A score to post.
	 * @param  {nativeObject} data Optional data attached to the leaderboard entry.
	 * @param  {date} roundStartedEpoch Time the user started the match resulting in the score being posted.
	 * @param  {string} sort Sort key for sort order of page.  ("HIGH_TO_LOW" or "LOW_TO_HIGH")
	 * @param  {long} beforeCount The count of players before the current player to include.
	 * @param  {long} afterCount The count of players after the current player to include.
	 * @param  {long} initialScore The initial score for players first joining a tournament. Usually 0, unless leaderboard is LOW_VALUE.
	 * @returns ServiceProxyResponse
	 */ 
	postTournamentScoreWithResultsUTC(leaderboardId: string, score: long, data: nativeObject, roundStartedEpoch: date, sort: string, beforeCount: long, afterCount: long, initialScore: long): ServiceProxyResponse;

	/**
	 * Gives a view of the reward based on the current scores.
	 * 
	 * @param  {string} leaderboardId The leaderboard for the tournament.
	 * @returns ServiceProxyResponse
	 */ 
	viewCurrentReward(leaderboardId: string): ServiceProxyResponse;

	/**
	 * Gives a view of the reward associated with a leaderboard. Option parameter: leaderboard version id 'versionId'. If versionId is not passed, previously ended tournament reward will be returned.
	 * 
	 * @param  {string} leaderboardId The leaderboard for the tournament.
	 * @param  {long} versionId Version of the tournament, use -1 for the latest version.
	 * @returns ServiceProxyResponse
	 */ 
	viewReward(leaderboardId: string, versionId: long): ServiceProxyResponse;

	/**
	 * Processes any outstanding rewards for the given player
	 * 
	 * @param  {string} leaderboardId The leaderboard for the tournament.
	 * @param  {long} versionId Version of the completed tournament.
	 * @returns ServiceProxyResponse
	 */ 
	claimTournamentReward(leaderboardId: string, versionId: long): ServiceProxyResponse;

	/**
	 * Returns a list of the player's recently active divisions, organized by simplified tournament state: ACTIVE, PENDING, CLAIMABLE, COMPLETE.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	getMyDivisions(): ServiceProxyResponse;

	/**
	 * Essentially the same as GetTournamentStatus(), but takes a division set id instead of a leaderboardId as its parameter. Would generally be called before JoinDivision() in the case that there are multiple tournaments, or if the user is shown information to make an informed choice as to whether to join a tournament.
	 * 
	 * @param  {string} divSetId Division set id.
	 * @returns ServiceProxyResponse
	 */ 
	getDivisionInfo(divSetId: string): ServiceProxyResponse;

	/**
	 * Similar to Join Tournament, except that you specify the division set id instead of the leaderboard id. If joining tournament requires a fee, it is possible to fail at joining the division.
	 * 
	 * @param  {string} divSetId Division set id.
	 * @param  {string} tournamentCode The code for the tournament to join (eg. free vs. premium, etc.)
	 * @param  {long} initialScore The initial score to give the player on the leaderboard.
	 * @returns ServiceProxyResponse
	 */ 
	joinDivision(divSetId: string, tournamentCode: string, initialScore: long): ServiceProxyResponse;

	/**
	 * Similar to Leave Tournament, but removes player from division instance and also ensures that the division instance is removed from the player's division list.
	 * 
	 * @param  {string} leaderboardId Id of the division leaderboard the user is in.
	 * @returns ServiceProxyResponse
	 */ 
	leaveDivisionInstance(leaderboardId: string): ServiceProxyResponse;

	/**
	 * Post score to another user.
	 * 
	 * @param  {string} profileId Profile id of the target user.
	 * @param  {string} leaderboardId The leaderboard for the tournament.
	 * @param  {long} score A score to post.
	 * @param  {nativeObject} data Optional data attached to the leaderboard entry.
	 * @param  {date} roundStartedEpoch Time the user started the match resulting in the score being posted. (date in millis)
	 * @param  {boolean} forceCreate Should a new score be created? When false, the call can only modify a currently existing score.
	 * @returns ServiceProxyResponse
	 */ 
	postTournamentScoreOnBehalfOf(profileId: string, leaderboardId: string, score: long, data: nativeObject, roundStartedEpoch: date, forceCreate: boolean): ServiceProxyResponse;

	/**
	 * Lists all tournament templates.
	 * 
	 * @param  {nativeObject} optionsJson Optional json to sort the list of tournament templates. Valid values for sort field are "ASCENDING" or "DESCENDING"; defaults to ASCENDING
	 * @returns ServiceProxyResponse
	 */ 
	sysListTournamentTemplates(optionsJson: nativeObject): ServiceProxyResponse;

	/**
	 * Creates a new tournament template.
	 * 
	 * @param  {string} tournamentCode The unique tournament code to assign to the template.
	 * @param  {nativeObject} configJson Configuration data defining the tournament template.
	 * @returns ServiceProxyResponse
	 */ 
	sysCreateTournamentTemplate(tournamentCode: string, configJson: nativeObject): ServiceProxyResponse;

	/**
	 * Read a specific tournament template by tournament code and version.
	 * 
	 * @param  {string} tournamentCode The tournament code uniquely identifying the template to return.
	 * @param  {integer} version Version number of tournament template to return, use -1 to return current default version
	 * @returns ServiceProxyResponse
	 */ 
	sysReadTournamentTemplate(tournamentCode: string, version: integer): ServiceProxyResponse;

	/**
	 * Changes an existing tournament template.
	 * 
	 * @param  {string} tournamentCode The tournament code uniquely identifying the template being edited.
	 * @param  {nativeObject} configJson Configuration data changes to be applied to the tournament template.
	 * @param  {integer} version Current version number of tournament template to update, use -1 to disable version checking
	 * @param  {boolean} applyChangesToLiveLeaderboards If true, forces updates to all leaderboards with current version referencing that tournament code to set the new tournament template version. If false, new tournament template version is picked up on the leaderboards' next rotation.
	 * @returns ServiceProxyResponse
	 */ 
	sysEditTournamentTemplate(tournamentCode: string, configJson: nativeObject, version: integer, applyChangesToLiveLeaderboards: boolean): ServiceProxyResponse;

	/**
	 * Deletes the tournament template identified by the tournament code.
	 * 
	 * @param  {string} tournamentCode The tournament code uniquely identifying the tournament template to be deleted.
	 * @param  {integer} version Current version number of tournament template to delete, use -1 to disable version checking
	 * @returns ServiceProxyResponse
	 */ 
	sysDeleteTournamentTemplate(tournamentCode: string, version: integer): ServiceProxyResponse;

	/**
	 * Lists all division set configurations for the app.
	 * 
	 * @param  {nativeObject} optionsJson Optional JSON to sort the list of division set configs. Valid values for sort field are "ASCENDING" or "DESCENDING". Unsorted if not specified.
	 * @returns ServiceProxyResponse
	 */ 
	sysListDivisionSetConfigs(optionsJson: nativeObject): ServiceProxyResponse;

	/**
	 * Reads the current version of the division set configuration identified by the division set id.
	 * 
	 * @param  {string} divSetId The division set id uniquely identifying the division set configuration to be returned.
	 * @returns ServiceProxyResponse
	 */ 
	sysReadDivisionSetConfig(divSetId: string): ServiceProxyResponse;

	/**
	 * Creates a new division set configuration
	 * 
	 * @param  {string} divSetId The unique division set id.
	 * @param  {nativeObject} configJson Configuration data defining the division set, including: description (desc), schedule type (scheduleType), id of template leaderboard (templateLeaderboardId), maximum number of players per division set instance (maxPlayers), and number of days after which division set instance results are to be expired (expireResultsAfterDays). Optional customJson supported.
	 * @returns ServiceProxyResponse
	 */ 
	sysCreateDivisionSetConfig(divSetId: string, configJson: nativeObject): ServiceProxyResponse;

	/**
	 * Updates a division set configuration with specified changes
	 * 
	 * @param  {string} divSetId The division set id uniquely identifying the division set configuration to be updated.
	 * @param  {integer} version Current version number of division set config to update. Use -1 to disable version checking.
	 * @param  {nativeObject} configJson Configuration data defining the division set configuration changes, which may include changes to: description (desc), schedule type (scheduleType), id of template leaderboard (templateLeaderboardId), maximum number of players per division set instance (maxPlayers), and number of days after which division set instance results are to be expired (expireResultsAfterDays). Optional customJson supported.
	 * @returns ServiceProxyResponse
	 */ 
	sysEditDivisionSetConfig(divSetId: string, version: integer, configJson: nativeObject): ServiceProxyResponse;

	/**
	 * Deletes the division set configuration uniquely identified by the division set id, with optional, additional enforcement. NOTE: Does NOT delete any division set instance leaderboards that have currently been created, those will expire at the normal time. Does NOT prevent players from posting scores to a division set instance they are already a member of. WILL prevent new players for joining the deleted division set (JoinDivisionSet Tournament service API). WILL prevent users from querying the division info (GetDivisionInfo Tournament service API). WILL prevent Design Portal users from being able to view the rankings of the division set instance leaderboards for the deleted Division Set config.
	 * 
	 * @param  {string} divSetId The division set id uniquely identifying the division set configuration to be deleted.
	 * @param  {integer} version Current version number of division set config being deleted. Use -1 to disable version checking.
	 * @param  {boolean} force Optional flag, defaults to false. If false, ensures the division set config has no associated, unexpired division set instance leaderboards that still exist (disallows the deletion if so). If true, this checking is not enforced and may result in some limitations.
	 * @returns ServiceProxyResponse
	 */ 
	sysDeleteDivisionSetConfig(divSetId: string, version: integer, force: boolean): ServiceProxyResponse;
}