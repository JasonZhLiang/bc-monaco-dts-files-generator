/// <reference no-default-lib="true"/>

interface TournamentServiceProxy {
	/**
	 * Get tournament status associated with a leaderboard. Option parameter: leaderboard version id 'versionId'.
	 * 
	 * @param  {String} leaderboardId The leaderboard for the tournament.
	 * @param  {Long} versionId Version of the tournament, use -1 for the latest version.
	 * @returns ServiceProxyResponse
	 */ 
	getTournamentStatus(leaderboardId: string, versionId: number): {
    status: number;
    data: 
    {
        enrolled: number;
        versionId: number;
        server_time: number;
        tournamentTimetable: 
        {
            tRegistrationStart: number;
            tRegistrationEnd: number;
            tState: string;
            tPlayEnd: number;
            tPlayStart: number;
        };
        tournamentConfigs: Array<
        {
            tournamentCode: string;
            description: 
            {
                name: 
                {
                    en: string;
                };
                desc: 
                {
                    en: string;
                };
            };
            customJson: 
            {
            };
            payoutRules: Array<
            {
                reward: 
                {
                    currency: 
                    {
                        credits: number;
                    };
                };
                rank: 
                {
                    rankAbs: number;
                };
            }>;
            entryFee: 
            {
            };
        }>;
        leaderboardEnrollment: 
        {
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
	 * @param  {String} leaderboardId The leaderboard for the tournament.
	 * @param  {String} tournamentCode Tournament to join.
	 * @param  {Long} initialScore Initial score for the user.
	 * @returns ServiceProxyResponse
	 */ 
	joinTournament(leaderboardId: string, tournamentCode: string, initialScore: number): {
    status: number;
    data: 
    {
        balance: 
        {
            currency: 
            {
                test: 
                {
                    purchased: number;
                    balance: number;
                    consumed: number;
                    awarded: number;
                };
                credits: 
                {
                    purchased: number;
                    balance: number;
                    consumed: number;
                    awarded: number;
                };
            };
        };
        enrolled: number;
        entryFee: 
        {
        };
    };
};

	/**
	 * Removes player's score from tournament leaderboard
	 * 
	 * @param  {String} leaderboardId The leaderboard for the tournament.
	 * @returns ServiceProxyResponse
	 */ 
	leaveTournament(leaderboardId: string): {
    status: number;
    data: 
    {
        numScoresRemoved: number;
    };
};

	/**
	 * Record the given score to the leaderboard
	 * 
	 * @param  {String} leaderboardId The leaderboard for the tournament.
	 * @param  {Long} score The score to post.
	 * @param  {NativeObject} data Optional data attached to the leaderboard entry.
	 * @param  {Date} roundStartedEpoch Time the user started the match resulting in the score being posted. (date in millis.)
	 * @returns ServiceProxyResponse
	 */ 
	postTournamentScoreUTC(leaderboardId: string, score: number, data: Object, roundStartedEpoch: Date): ServiceProxyResponse;

	/**
	 * Record the given score to the leaderboard and returns leaderboard results.  Option parameter: leaderboard version id 'versionId'.
	 * 
	 * @param  {String} leaderboardId The leaderboard for the tournament.
	 * @param  {Long} score A score to post.
	 * @param  {NativeObject} data Optional data attached to the leaderboard entry.
	 * @param  {Date} roundStartedEpoch Time the user started the match resulting in the score being posted.
	 * @param  {String} sort Sort key for sort order of page.  ("HIGH_TO_LOW" or "LOW_TO_HIGH")
	 * @param  {Long} beforeCount The count of players before the current player to include.
	 * @param  {Long} afterCount The count of players after the current player to include.
	 * @param  {Long} initialScore The initial score for players first joining a tournament. Usually 0, unless leaderboard is LOW_VALUE.
	 * @returns ServiceProxyResponse
	 */ 
	postTournamentScoreWithResultsUTC(leaderboardId: string, score: number, data: Object, roundStartedEpoch: Date, sort: string, beforeCount: number, afterCount: number, initialScore: number): {
    status: number;
    data: 
    {
        postScore: 
        {
            createdAt: number;
            data: any | null;
            leaderboardId: string;
            playerId: string;
            previousLeaderboard: 
            {
                createdAt: number;
                data: any | null;
                index: number;
                name: string;
                pictureUrl: string;
                playerId: string;
                rank: number;
                score: number;
                summaryFriendData: 
                {
                    field: string;
                };
                tCode: string;
                tNotifiedAt: number;
                tRank: number;
                updatedAt: number;
            };
            previousScore: number;
            score: number;
            tClaimedAt: number;
            tCode: string;
            tNotifiedAt: number;
            tRank: number;
            updatedAt: number;
            versionId: number;
        };
        scores: Array<
        {
            createdAt: number;
            data: any | null;
            index: number;
            name: string;
            pictureUrl: string;
            playerId: string;
            rank: number;
            score: number;
            summaryFriendData: 
            {
                field: string;
            };
            tCode: string;
            tNotifiedAt: number;
            tRank: number;
            updatedAt: number;
        }>;
    };
};

	/**
	 * Gives a view of the reward based on the current scores.
	 * 
	 * @param  {String} leaderboardId The leaderboard for the tournament.
	 * @returns ServiceProxyResponse
	 */ 
	viewCurrentReward(leaderboardId: string): {
    status: number;
    data: 
    {
        updatedAt: number;
        tRank: number;
        createdAt: number;
        rewards: 
        {
            currency: 
            {
                credits: number;
            };
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
	 * @param  {String} leaderboardId The leaderboard for the tournament.
	 * @param  {Long} versionId Version of the tournament, use -1 for the latest version.
	 * @returns ServiceProxyResponse
	 */ 
	viewReward(leaderboardId: string, versionId: number): {
    status: number;
    data: 
    {
        updatedAt: number;
        tRank: number;
        createdAt: number;
        rewards: 
        {
            currency: 
            {
                credits: number;
            };
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
	 * @param  {String} leaderboardId The leaderboard for the tournament.
	 * @param  {Long} versionId Version of the completed tournament.
	 * @returns ServiceProxyResponse
	 */ 
	claimTournamentReward(leaderboardId: string, versionId: number): {
    status: number;
    data: 
    {
        rewards: 
        {
            experiencePoints: number;
            experienceLevels: Array<number>;
            playerAchievements: Array<string>;
            globalStatistics: 
            {
                allWorldMissions: number;
            };
            statistics: 
            {
                missions: number;
            };
            currency: 
            {
                coin: number;
            };
        };
        rewardDetails: 
        {
            tournaments: Array<
            {
                leaderboardId: string;
                leaderboardVersion: number;
                tCode: string;
                tCVersion: number;
                updatedAt: number;
                tRank: number;
                tClaimed: number;
                createdAt: number;
                data: 
                {
                };
                score: number;
                rewards: 
                {
                    experiencePoints: number;
                    achievement: string;
                    currency: 
                    {
                        coins: number;
                    };
                    globalStatistics: 
                    {
                        allWorldMissions: number;
                    };
                    statistics: 
                    {
                        missions: number;
                    };
                };
            }>;
            milestones: Array<any>;
            xp: 
            {
            };
        };
        experiencePoints: number;
        experienceLevel: number;
        xpCapped: number;
        currency: 
        {
            coin: 
            {
                purchased: number;
                balance: number;
                consumed: number;
                awarded: number;
            };
        };
        parentCurrency: 
        {
        };
        peerCurrency: 
        {
        };
        statistics: 
        {
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
    data: 
    {
        ACTIVE: 
        {
            weekly: Array<string>;
        };
        PENDING: 
        {
        };
        CLAIMABLE: 
        {
        };
        COMPLETE: 
        {
        };
    };
    status: number;
};

	/**
	 * Essentially the same as GetTournamentStatus(), but takes a division set id instead of a leaderboardId as its parameter. Would generally be called before JoinDivision() in the case that there are multiple tournaments, or if the user is shown information to make an informed choice as to whether to join a tournament.
	 * 
	 * @param  {String} divSetId Division set id.
	 * @returns ServiceProxyResponse
	 */ 
	getDivisionInfo(divSetId: string): {
    data: 
    {
        server_time: number;
        versionId: number;
        tournamentTimetable: 
        {
            tRegistrationStart: number;
            tState: string;
            tPlayEnd: number;
            tRegistrationEnd: number;
            tPlayStart: number;
        };
        tournamentConfigs: Array<
        {
            tournamentCode: string;
            description: 
            {
                name: 
                {
                    en: string;
                };
                desc: 
                {
                    en: string;
                };
            };
            customJson: 
            {
            };
            payoutRules: Array<
            {
                reward: 
                {
                    experiencePoints: number;
                    currency: 
                    {
                        coin: number;
                    };
                };
                rank: 
                {
                    rankAbs: number;
                };
            }>;
            entryFee: 
            {
            };
        }>;
        enrolled: number;
    };
    status: number;
};

	/**
	 * Similar to Join Tournament, except that you specify the division set id instead of the leaderboard id. If joining tournament requires a fee, it is possible to fail at joining the division.
	 * 
	 * @param  {String} divSetId Division set id.
	 * @param  {String} tournamentCode The code for the tournament to join (eg. free vs. premium, etc.)
	 * @param  {Long} initialScore The initial score to give the player on the leaderboard.
	 * @returns ServiceProxyResponse
	 */ 
	joinDivision(divSetId: string, tournamentCode: string, initialScore: number): {
    data: 
    {
        entryFee: 
        {
        };
        createdAt: number;
        balance: 
        {
            currency: 
            {
                coin: 
                {
                    consumed: number;
                    balance: number;
                    purchased: number;
                    awarded: number;
                };
            };
        };
        leaderboardId: string;
        enrolled: number;
    };
    status: number;
};

	/**
	 * Similar to Leave Tournament, but removes player from division instance and also ensures that the division instance is removed from the player's division list.
	 * 
	 * @param  {String} leaderboardId Id of the division leaderboard the user is in.
	 * @returns ServiceProxyResponse
	 */ 
	leaveDivisionInstance(leaderboardId: string): {
    numScoresRemoved: number;
};

	/**
	 * Post score to another user.
	 * 
	 * @param  {String} profileId Profile id of the target user.
	 * @param  {String} leaderboardId The leaderboard for the tournament.
	 * @param  {Long} score A score to post.
	 * @param  {NativeObject} data Optional data attached to the leaderboard entry.
	 * @param  {Date} roundStartedEpoch Time the user started the match resulting in the score being posted. (date in millis)
	 * @param  {Boolean} forceCreate Should a new score be created? When false, the call can only modify a currently existing score.
	 * @returns ServiceProxyResponse
	 */ 
	postTournamentScoreOnBehalfOf(profileId: string, leaderboardId: string, score: number, data: Object, roundStartedEpoch: Date, forceCreate: boolean): {
    data: 
    {
        leaderboardId: string;
        versionId: number;
        playerId: string;
        score: number;
        data: 
        {
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
	 * @param  {NativeObject} optionsJson Optional json to sort the list of tournament templates. Valid values for sort field are "ASCENDING" or "DESCENDING"; defaults to ASCENDING
	 * @returns ServiceProxyResponse
	 */ 
	sysListTournamentTemplates(optionsJson: Object): ServiceProxyResponse;

	/**
	 * Creates a new tournament template.
	 * 
	 * @param  {String} tournamentCode The unique tournament code to assign to the template.
	 * @param  {NativeObject} configJson Configuration data defining the tournament template.
	 * @returns ServiceProxyResponse
	 */ 
	sysCreateTournamentTemplate(tournamentCode: string, configJson: Object): {
    data: 
    {
        gameId: string;
        tournamentCode: string;
        version: number;
        description: 
        {
            name: 
            {
                en: string;
            };
            desc: 
            {
                en: string;
            };
        };
        notifications: 
        {
            startingSoon: 
            {
                enabled: number;
                pushId: any | null;
                mail: 
                {
                };
            };
            start: 
            {
                enabled: number;
                pushId: number;
                mail: 
                {
                };
            };
            scorePassed: 
            {
                enabled: number;
                pushId: any | null;
                mail: 
                {
                };
            };
            endingSoon: 
            {
                enabled: number;
                pushId: any | null;
                mail: 
                {
                };
            };
            complete: 
            {
                enabled: number;
                pushId: number;
                mail: 
                {
                };
            };
        };
        calcScript: string;
        postScript: string;
        customJson: 
        {
        };
        payoutRules: Array<
        {
            rank: 
            {
                rankAbs: number;
            };
            reward: 
            {
                experiencePoints: number;
                currency: 
                {
                    coins: number;
                };
            };
        }>;
        entryFee: 
        {
        };
        createdAt: number;
        updatedAt: number;
    };
    status: number;
};

	/**
	 * Read a specific tournament template by tournament code and version.
	 * 
	 * @param  {String} tournamentCode The tournament code uniquely identifying the template to return.
	 * @param  {Integer} version Version number of tournament template to return, use -1 to return current default version
	 * @returns ServiceProxyResponse
	 */ 
	sysReadTournamentTemplate(tournamentCode: string, version: number): {
    data: 
    {
        gameId: string;
        tournamentCode: string;
        version: number;
        description: 
        {
            name: 
            {
                en: string;
            };
            desc: 
            {
                en: string;
            };
        };
        notifications: 
        {
            startingSoon: 
            {
                enabled: number;
                pushId: any | null;
                mail: 
                {
                };
            };
            start: 
            {
                enabled: number;
                pushId: number;
                mail: 
                {
                };
            };
            scorePassed: 
            {
                enabled: number;
                pushId: any | null;
                mail: 
                {
                };
            };
            endingSoon: 
            {
                enabled: number;
                pushId: any | null;
                mail: 
                {
                };
            };
            complete: 
            {
                enabled: number;
                pushId: number;
                mail: 
                {
                };
            };
        };
        calcScript: string;
        postScript: string;
        customJson: 
        {
        };
        payoutRules: Array<
        {
            rank: 
            {
                rankAbs: number;
            };
            reward: 
            {
                experiencePoints: number;
                currency: 
                {
                    coins: number;
                };
            };
        }>;
        entryFee: 
        {
        };
        createdAt: number;
        updatedAt: number;
    };
    status: number;
};

	/**
	 * Changes an existing tournament template.
	 * 
	 * @param  {String} tournamentCode The tournament code uniquely identifying the template being edited.
	 * @param  {NativeObject} configJson Configuration data changes to be applied to the tournament template.
	 * @param  {Integer} version Current version number of tournament template to update, use -1 to disable version checking
	 * @param  {Boolean} applyChangesToLiveLeaderboards If true, forces updates to all leaderboards with current version referencing that tournament code to set the new tournament template version. If false, new tournament template version is picked up on the leaderboards' next rotation.
	 * @returns ServiceProxyResponse
	 */ 
	sysEditTournamentTemplate(tournamentCode: string, configJson: Object, version: number, applyChangesToLiveLeaderboards: boolean): {
    data: 
    {
        gameId: string;
        tournamentCode: string;
        version: number;
        description: 
        {
            name: 
            {
                en: string;
            };
            desc: 
            {
                en: string;
            };
        };
        notifications: 
        {
            startingSoon: 
            {
                enabled: number;
                pushId: any | null;
                mail: 
                {
                };
            };
            start: 
            {
                enabled: number;
                pushId: number;
                mail: 
                {
                };
            };
            scorePassed: 
            {
                enabled: number;
                pushId: any | null;
                mail: 
                {
                };
            };
            endingSoon: 
            {
                enabled: number;
                pushId: any | null;
                mail: 
                {
                };
            };
            complete: 
            {
                enabled: number;
                pushId: number;
                mail: 
                {
                };
            };
        };
        calcScript: string;
        postScript: string;
        customJson: 
        {
        };
        payoutRules: Array<
        {
            rank: 
            {
                rankAbs: number;
            };
            reward: 
            {
                experiencePoints: number;
                currency: 
                {
                    coins: number;
                };
            };
        }>;
        entryFee: 
        {
        };
        createdAt: number;
        updatedAt: number;
    };
    status: number;
};

	/**
	 * Deletes the tournament template identified by the tournament code.
	 * 
	 * @param  {String} tournamentCode The tournament code uniquely identifying the tournament template to be deleted.
	 * @param  {Integer} version Current version number of tournament template to delete, use -1 to disable version checking
	 * @returns ServiceProxyResponse
	 */ 
	sysDeleteTournamentTemplate(tournamentCode: string, version: number): {
    data: 
    {
    };
    status: number;
};

	/**
	 * Lists all division set configurations for the app.
	 * 
	 * @param  {NativeObject} optionsJson Optional JSON to sort the list of division set configs. Valid values for sort field are "ASCENDING" or "DESCENDING". Unsorted if not specified.
	 * @returns ServiceProxyResponse
	 */ 
	sysListDivisionSetConfigs(optionsJson: Object): {
    data: 
    {
        count: number;
        divSetConfigs: Array<
        {
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
	 * @param  {String} divSetId The division set id uniquely identifying the division set configuration to be returned.
	 * @returns ServiceProxyResponse
	 */ 
	sysReadDivisionSetConfig(divSetId: string): {
    data: 
    {
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
	 * @param  {String} divSetId The unique division set id.
	 * @param  {NativeObject} configJson Configuration data defining the division set, including: description (desc), schedule type (scheduleType), id of template leaderboard (templateLeaderboardId), maximum number of players per division set instance (maxPlayers), and number of days after which division set instance results are to be expired (expireResultsAfterDays). Optional customJson supported.
	 * @returns ServiceProxyResponse
	 */ 
	sysCreateDivisionSetConfig(divSetId: string, configJson: Object): {
    data: 
    {
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
	 * @param  {String} divSetId The division set id uniquely identifying the division set configuration to be updated.
	 * @param  {Integer} version Current version number of division set config to update. Use -1 to disable version checking.
	 * @param  {NativeObject} configJson Configuration data defining the division set configuration changes, which may include changes to: description (desc), schedule type (scheduleType), id of template leaderboard (templateLeaderboardId), maximum number of players per division set instance (maxPlayers), and number of days after which division set instance results are to be expired (expireResultsAfterDays). Optional customJson supported.
	 * @returns ServiceProxyResponse
	 */ 
	sysEditDivisionSetConfig(divSetId: string, version: number, configJson: Object): {
    data: 
    {
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
	 * @param  {String} divSetId The division set id uniquely identifying the division set configuration to be deleted.
	 * @param  {Integer} version Current version number of division set config being deleted. Use -1 to disable version checking.
	 * @param  {Boolean} force Optional flag, defaults to false. If false, ensures the division set config has no associated, unexpired division set instance leaderboards that still exist (disallows the deletion if so). If true, this checking is not enforced and may result in some limitations.
	 * @returns ServiceProxyResponse
	 */ 
	sysDeleteDivisionSetConfig(divSetId: string, version: number, force: boolean): {
    status: number;
    data: any | null;
};
}