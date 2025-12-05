/// <reference no-default-lib="true"/>

interface TournamentServiceProxy {
	/**
	 * Get tournament status associated with a leaderboard. Option parameter: leaderboard version id 'versionId'.
	 * 
	 * @param  {string} leaderboardId The leaderboard for the tournament.
	 * @param  {number} versionId Version of the tournament, use -1 for the latest version.
	 * @returns ServiceProxyResponse
	 */ 
	getTournamentStatus(leaderboardId: string, versionId: number): {
		status: number;
		data: {
		    enrolled: number;
		    versionId: number;
		    server_time: number;
		    tournamentTimetable: {
		        tRegistrationStart: number;
		        tRegistrationEnd: number;
		        tState: string;
		        tPlayEnd: number;
		        tPlayStart: number;
		    };
		    tournamentConfigs: Array<{
		        tournamentCode: string;
		        description: Record<string, any>;
		        customJson: Record<string, any>;
		        payoutRules: Array<Record<string, any>>;
		        entryFee: Record<string, any>;
		    }>;
		    leaderboardEnrollment: {
		        score: number;
		        data: any | null;
		        createdAt: number;
		        updatedAt: number;
		        tCode: string;
		        tRank: number;
		        tClaimedAt: number;
		    };
		};
	};


	/**
	 * Enrolls a given player in to the tournament and assigns a initial score
	 * 
	 * @param  {string} leaderboardId The leaderboard for the tournament.
	 * @param  {string} tournamentCode Tournament to join.
	 * @param  {number} initialScore Initial score for the user.
	 * @returns ServiceProxyResponse
	 */ 
	joinTournament(leaderboardId: string, tournamentCode: string, initialScore: number): {
		status: number;
		data: {
		    balance: {
		        currency: Record<string, any>;
		    };
		    enrolled: number;
		    entryFee: {
		    };
		};
	};


	/**
	 * Removes player's score from tournament leaderboard
	 * 
	 * @param  {string} leaderboardId The leaderboard for the tournament.
	 * @returns ServiceProxyResponse
	 */ 
	leaveTournament(leaderboardId: string): {
		status: number;
		data: {
		    numScoresRemoved: number;
		};
	};


	/**
	 * Record the given score to the leaderboard
	 * 
	 * @param  {string} leaderboardId The leaderboard for the tournament.
	 * @param  {number} score The score to post.
	 * @param  {Object} data Optional data attached to the leaderboard entry.
	 * @param  {Date} roundStartedEpoch Time the user started the match resulting in the score being posted. (date in millis.)
	 * @returns ServiceProxyResponse
	 */ 
	postTournamentScoreUTC(leaderboardId: string, score: number, data: Object, roundStartedEpoch: Date): {
		data: {
		    leaderboardId: string;
		    versionId: number;
		    playerId: string;
		    score: number;
		    data: {
		        nickname: string;
		    };
		    createdAt: number;
		    updatedAt: number;
		    tCode: string;
		    tRank: number;
		    tClaimedAt: number;
		    tNotifiedAt: number;
		    previousScore: number;
		};
		status: number;
	};


	/**
	 * Record the given score to the leaderboard and returns leaderboard results.  Option parameter: leaderboard version id 'versionId'.
	 * 
	 * @param  {string} leaderboardId The leaderboard for the tournament.
	 * @param  {number} score A score to post.
	 * @param  {Object} data Optional data attached to the leaderboard entry.
	 * @param  {Date} roundStartedEpoch Time the user started the match resulting in the score being posted.
	 * @param  {string} sort Sort key for sort order of page.  ("HIGH_TO_LOW" or "LOW_TO_HIGH")
	 * @param  {number} beforeCount The count of players before the current player to include.
	 * @param  {number} afterCount The count of players after the current player to include.
	 * @param  {number} initialScore The initial score for players first joining a tournament. Usually 0, unless leaderboard is LOW_VALUE.
	 * @returns ServiceProxyResponse
	 */ 
	postTournamentScoreWithResultsUTC(leaderboardId: string, score: number, data: Object, roundStartedEpoch: Date, sort: string, beforeCount: number, afterCount: number, initialScore: number): {
		data: {
		    postScore: {
		        createdAt: number;
		        data: any | null;
		        leaderboardId: string;
		        playerId: string;
		        previousLeaderboard: Record<string, any>;
		        previousScore: number;
		        score: number;
		        tClaimedAt: number;
		        tCode: string;
		        tNotifiedAt: number;
		        tRank: number;
		        updatedAt: number;
		        versionId: number;
		    };
		    scores: Array<{
		        createdAt: number;
		        data: any | null;
		        index: number;
		        name: string;
		        pictureUrl: string;
		        playerId: string;
		        rank: number;
		        score: number;
		        summaryFriendData: Record<string, any>;
		        tCode: string;
		        tNotifiedAt: number;
		        tRank: number;
		        updatedAt: number;
		    }>;
		};
		status: number;
	};


	/**
	 * Gives a view of the reward based on the current scores.
	 * 
	 * @param  {string} leaderboardId The leaderboard for the tournament.
	 * @returns ServiceProxyResponse
	 */ 
	viewCurrentReward(leaderboardId: string): {
		status: number;
		data: {
		    updatedAt: number;
		    tRank: number;
		    createdAt: number;
		    rewards: {
		        currency: Record<string, any>;
		    };
		    tCode: string;
		    data: any | null;
		    score: number;
		    tClaimedAt: number;
		};
	};


	/**
	 * Gives a view of the reward associated with a leaderboard. Option parameter: leaderboard version id 'versionId'. If versionId is not passed, previously ended tournament reward will be returned.
	 * 
	 * @param  {string} leaderboardId The leaderboard for the tournament.
	 * @param  {number} versionId Version of the tournament, use -1 for the latest version.
	 * @returns ServiceProxyResponse
	 */ 
	viewReward(leaderboardId: string, versionId: number): {
		status: number;
		data: {
		    updatedAt: number;
		    tRank: number;
		    createdAt: number;
		    rewards: {
		        currency: Record<string, any>;
		    };
		    tCode: string;
		    data: any | null;
		    score: number;
		    tClaimedAt: number;
		};
	};


	/**
	 * Processes any outstanding rewards for the given player
	 * 
	 * @param  {string} leaderboardId The leaderboard for the tournament.
	 * @param  {number} versionId Version of the completed tournament.
	 * @returns ServiceProxyResponse
	 */ 
	claimTournamentReward(leaderboardId: string, versionId: number): {
		status: number;
		data: {
		    rewards: {
		        experiencePoints: number;
		        experienceLevels: Array<number>;
		        playerAchievements: Array<string>;
		        globalStatistics: Record<string, any>;
		        statistics: Record<string, any>;
		        currency: Record<string, any>;
		    };
		    rewardDetails: {
		        tournaments: Array<Record<string, any>>;
		        milestones: Array<any>;
		        xp: Record<string, any>;
		    };
		    experiencePoints: number;
		    experienceLevel: number;
		    xpCapped: number;
		    currency: {
		        coin: Record<string, any>;
		    };
		    parentCurrency: {
		    };
		    peerCurrency: {
		    };
		    statistics: {
		        missions: number;
		        kills: number;
		    };
		};
	};


	/**
	 * Returns a list of the player's recently active divisions, organized by simplified tournament state: ACTIVE, PENDING, CLAIMABLE, COMPLETE.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	getMyDivisions(): {
		data: {
		    ACTIVE: {
		        weekly: Array<string>;
		    };
		    PENDING: {
		    };
		    CLAIMABLE: {
		    };
		    COMPLETE: {
		    };
		};
		status: number;
	};


	/**
	 * Essentially the same as GetTournamentStatus(), but takes a division set id instead of a leaderboardId as its parameter. Would generally be called before JoinDivision() in the case that there are multiple tournaments, or if the user is shown information to make an informed choice as to whether to join a tournament.
	 * 
	 * @param  {string} divSetId Division set id.
	 * @returns ServiceProxyResponse
	 */ 
	getDivisionInfo(divSetId: string): {
		data: {
		    server_time: number;
		    versionId: number;
		    tournamentTimetable: {
		        tRegistrationStart: number;
		        tState: string;
		        tPlayEnd: number;
		        tRegistrationEnd: number;
		        tPlayStart: number;
		    };
		    tournamentConfigs: Array<{
		        tournamentCode: string;
		        description: Record<string, any>;
		        customJson: Record<string, any>;
		        payoutRules: Array<Record<string, any>>;
		        entryFee: Record<string, any>;
		    }>;
		    enrolled: number;
		};
		status: number;
	};


	/**
	 * Similar to Join Tournament, except that you specify the division set id instead of the leaderboard id. If joining tournament requires a fee, it is possible to fail at joining the division.
	 * 
	 * @param  {string} divSetId Division set id.
	 * @param  {string} tournamentCode The code for the tournament to join (eg. free vs. premium, etc.)
	 * @param  {number} initialScore The initial score to give the player on the leaderboard.
	 * @returns ServiceProxyResponse
	 */ 
	joinDivision(divSetId: string, tournamentCode: string, initialScore: number): {
		data: {
		    entryFee: {
		    };
		    createdAt: number;
		    balance: {
		        currency: Record<string, any>;
		    };
		    leaderboardId: string;
		    enrolled: number;
		};
		status: number;
	};


	/**
	 * Similar to Leave Tournament, but removes player from division instance and also ensures that the division instance is removed from the player's division list.
	 * 
	 * @param  {string} leaderboardId Id of the division leaderboard the user is in.
	 * @returns ServiceProxyResponse
	 */ 
	leaveDivisionInstance(leaderboardId: string): {
		numScoresRemoved: number;
	};


	/**
	 * Post score to another user.
	 * 
	 * @param  {string} profileId Profile id of the target user.
	 * @param  {string} leaderboardId The leaderboard for the tournament.
	 * @param  {number} score A score to post.
	 * @param  {Object} data Optional data attached to the leaderboard entry.
	 * @param  {Date} roundStartedEpoch Time the user started the match resulting in the score being posted. (date in millis)
	 * @param  {boolean} forceCreate Should a new score be created? When false, the call can only modify a currently existing score.
	 * @returns ServiceProxyResponse
	 */ 
	postTournamentScoreOnBehalfOf(profileId: string, leaderboardId: string, score: number, data: Object, roundStartedEpoch: Date, forceCreate: boolean): {
		data: {
		    leaderboardId: string;
		    versionId: number;
		    playerId: string;
		    score: number;
		    data: {
		        nickname: string;
		    };
		    createdAt: number;
		    updatedAt: number;
		    tCode: string;
		    tRank: number;
		    tClaimedAt: number;
		    tNotifiedAt: number;
		    previousScore: number;
		};
		status: number;
	};


	/**
	 * Lists all tournament templates.
	 * 
	 * @param  {Object} optionsJson Optional json to sort the list of tournament templates. Valid values for sort field are "ASCENDING" or "DESCENDING"; defaults to ASCENDING
	 * @returns ServiceProxyResponse
	 */ 
	sysListTournamentTemplates(optionsJson: Object): {
		data: {
		    tournamentTemplatesCount: number;
		    tournamentTemplates: Array<{
		        tournamentCode: string;
		        version: number;
		        description: Record<string, any>;
		        notifications: Record<string, any>;
		        calcScript: string;
		        postScript: string;
		        customJson: Record<string, any>;
		        payoutRules: Array<Record<string, any>>;
		        entryFee: Record<string, any>;
		        createdAt: number;
		        updatedAt: number;
		    }>;
		};
		status: number;
	};


	/**
	 * Creates a new tournament template.
	 * 
	 * @param  {string} tournamentCode The unique tournament code to assign to the template.
	 * @param  {Object} configJson Configuration data defining the tournament template.
	 * @returns ServiceProxyResponse
	 */ 
	sysCreateTournamentTemplate(tournamentCode: string, configJson: Object): {
		data: {
		    gameId: string;
		    tournamentCode: string;
		    version: number;
		    description: {
		        name: Record<string, any>;
		        desc: Record<string, any>;
		    };
		    notifications: {
		        startingSoon: Record<string, any>;
		        start: Record<string, any>;
		        scorePassed: Record<string, any>;
		        endingSoon: Record<string, any>;
		        complete: Record<string, any>;
		    };
		    calcScript: string;
		    postScript: string;
		    customJson: {
		    };
		    payoutRules: Array<{
		        rank: Record<string, any>;
		        reward: Record<string, any>;
		    }>;
		    entryFee: {
		    };
		    createdAt: number;
		    updatedAt: number;
		};
		status: number;
	};


	/**
	 * Read a specific tournament template by tournament code and version.
	 * 
	 * @param  {string} tournamentCode The tournament code uniquely identifying the template to return.
	 * @param  {number} version Version number of tournament template to return, use -1 to return current default version
	 * @returns ServiceProxyResponse
	 */ 
	sysReadTournamentTemplate(tournamentCode: string, version: number): {
		data: {
		    gameId: string;
		    tournamentCode: string;
		    version: number;
		    description: {
		        name: Record<string, any>;
		        desc: Record<string, any>;
		    };
		    notifications: {
		        startingSoon: Record<string, any>;
		        start: Record<string, any>;
		        scorePassed: Record<string, any>;
		        endingSoon: Record<string, any>;
		        complete: Record<string, any>;
		    };
		    calcScript: string;
		    postScript: string;
		    customJson: {
		    };
		    payoutRules: Array<{
		        rank: Record<string, any>;
		        reward: Record<string, any>;
		    }>;
		    entryFee: {
		    };
		    createdAt: number;
		    updatedAt: number;
		};
		status: number;
	};


	/**
	 * Changes an existing tournament template.
	 * 
	 * @param  {string} tournamentCode The tournament code uniquely identifying the template being edited.
	 * @param  {Object} configJson Configuration data changes to be applied to the tournament template.
	 * @param  {number} version Current version number of tournament template to update, use -1 to disable version checking
	 * @param  {boolean} applyChangesToLiveLeaderboards If true, forces updates to all leaderboards with current version referencing that tournament code to set the new tournament template version. If false, new tournament template version is picked up on the leaderboards' next rotation.
	 * @returns ServiceProxyResponse
	 */ 
	sysEditTournamentTemplate(tournamentCode: string, configJson: Object, version: number, applyChangesToLiveLeaderboards: boolean): {
		data: {
		    gameId: string;
		    tournamentCode: string;
		    version: number;
		    description: {
		        name: Record<string, any>;
		        desc: Record<string, any>;
		    };
		    notifications: {
		        startingSoon: Record<string, any>;
		        start: Record<string, any>;
		        scorePassed: Record<string, any>;
		        endingSoon: Record<string, any>;
		        complete: Record<string, any>;
		    };
		    calcScript: string;
		    postScript: string;
		    customJson: {
		    };
		    payoutRules: Array<{
		        rank: Record<string, any>;
		        reward: Record<string, any>;
		    }>;
		    entryFee: {
		    };
		    createdAt: number;
		    updatedAt: number;
		};
		status: number;
	};


	/**
	 * Deletes the tournament template identified by the tournament code.
	 * 
	 * @param  {string} tournamentCode The tournament code uniquely identifying the tournament template to be deleted.
	 * @param  {number} version Current version number of tournament template to delete, use -1 to disable version checking
	 * @returns ServiceProxyResponse
	 */ 
	sysDeleteTournamentTemplate(tournamentCode: string, version: number): {
		data: {
		};
		status: number;
	};


	/**
	 * Lists all division set configurations for the app.
	 * 
	 * @param  {Object} optionsJson Optional JSON to sort the list of division set configs. Valid values for sort field are "ASCENDING" or "DESCENDING". Unsorted if not specified.
	 * @returns ServiceProxyResponse
	 */ 
	sysListDivisionSetConfigs(optionsJson: Object): {
		data: {
		    count: number;
		    divSetConfigs: Array<{
		        divSetId: string;
		        desc: string;
		        scheduleType: string;
		        lbTemplate: string;
		        max: number;
		        expiryDays: number;
		        createdAt: number;
		        updatedAt: number;
		        version: number;
		    }>;
		};
		status: number;
	};


	/**
	 * Reads the current version of the division set configuration identified by the division set id.
	 * 
	 * @param  {string} divSetId The division set id uniquely identifying the division set configuration to be returned.
	 * @returns ServiceProxyResponse
	 */ 
	sysReadDivisionSetConfig(divSetId: string): {
		data: {
		    gameId: string;
		    divSetId: string;
		    desc: string;
		    scheduleType: string;
		    lbTemplate: string;
		    max: number;
		    expiryDays: number;
		    createdAt: number;
		    updatedAt: number;
		    version: number;
		};
		status: number;
	};


	/**
	 * Creates a new division set configuration
	 * 
	 * @param  {string} divSetId The unique division set id.
	 * @param  {Object} configJson Configuration data defining the division set, including: description (desc), schedule type (scheduleType), id of template leaderboard (templateLeaderboardId), maximum number of players per division set instance (maxPlayers), and number of days after which division set instance results are to be expired (expireResultsAfterDays). Optional customJson supported.
	 * @returns ServiceProxyResponse
	 */ 
	sysCreateDivisionSetConfig(divSetId: string, configJson: Object): {
		data: {
		    gameId: string;
		    divSetId: string;
		    desc: string;
		    scheduleType: string;
		    lbTemplate: string;
		    max: number;
		    expiryDays: number;
		    createdAt: number;
		    updatedAt: number;
		    version: number;
		};
		status: number;
	};


	/**
	 * Updates a division set configuration with specified changes
	 * 
	 * @param  {string} divSetId The division set id uniquely identifying the division set configuration to be updated.
	 * @param  {number} version Current version number of division set config to update. Use -1 to disable version checking.
	 * @param  {Object} configJson Configuration data defining the division set configuration changes, which may include changes to: description (desc), schedule type (scheduleType), id of template leaderboard (templateLeaderboardId), maximum number of players per division set instance (maxPlayers), and number of days after which division set instance results are to be expired (expireResultsAfterDays). Optional customJson supported.
	 * @returns ServiceProxyResponse
	 */ 
	sysEditDivisionSetConfig(divSetId: string, version: number, configJson: Object): {
		data: {
		    gameId: string;
		    divSetId: string;
		    desc: string;
		    scheduleType: string;
		    lbTemplate: string;
		    max: number;
		    expiryDays: number;
		    createdAt: number;
		    updatedAt: number;
		    version: number;
		};
		status: number;
	};


	/**
	 * Deletes the division set configuration uniquely identified by the division set id, with optional, additional enforcement. NOTE: Does NOT delete any division set instance leaderboards that have currently been created, those will expire at the normal time. Does NOT prevent players from posting scores to a division set instance they are already a member of. WILL prevent new players for joining the deleted division set (JoinDivisionSet Tournament service API). WILL prevent users from querying the division info (GetDivisionInfo Tournament service API). WILL prevent Design Portal users from being able to view the rankings of the division set instance leaderboards for the deleted Division Set config.
	 * 
	 * @param  {string} divSetId The division set id uniquely identifying the division set configuration to be deleted.
	 * @param  {number} version Current version number of division set config being deleted. Use -1 to disable version checking.
	 * @param  {boolean} force Optional flag, defaults to false. If false, ensures the division set config has no associated, unexpired division set instance leaderboards that still exist (disallows the deletion if so). If true, this checking is not enforced and may result in some limitations.
	 * @returns ServiceProxyResponse
	 */ 
	sysDeleteDivisionSetConfig(divSetId: string, version: number, force: boolean): {
		status: number;
		data: any | null;
	};

}