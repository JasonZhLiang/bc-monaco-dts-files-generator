/// <reference no-default-lib="true"/>

interface GamificationServiceProxy {
	/**
	 * Retrieves all gamification data for the player.
	 * 
	 * @param  {Boolean} includeMetaData Should the meta data be returned as well?
	 * @returns ServiceProxyResponse
	 */ 
	readAllGamification(includeMetaData: boolean): {
    status: number;
    data: 
    {
        milestones: Array<
        {
            id: string;
            category: string;
            title: string;
            status: string;
            description: string;
            gameId: string;
            rewards: 
            {
                currency: 
                {
                    gold: number;
                };
            };
            extraData: any | null;
            questId: any | null;
        }>;
        achievements: Array<
        {
            fbEnabled: number;
            imageUrl: any | null;
            status: string;
            gameId: string;
            steamEnabled: number;
            extraData: any | null;
            achievementId: string;
            invisibleUntilEarned: number;
            steamAchievementId: string;
            id: string;
            appleEnabled: number;
            title: string;
            fbGamePoints: number;
            description: string;
            appleAchievementId: string;
        }>;
        quests: Array<any>;
        xp: 
        {
            xpCapped: number;
            experiencePoints: number;
            xpLevel: 
            {
                gameId: string;
                level: number;
                statusTitle: string;
                experience: number;
                fbAction: string;
            };
            experienceLevel: number;
        };
    };
};

	/**
	 * Returns all defined xp levels and any rewards associated with those xp levels.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	readXpLevelsMetadata(): {
    status: number;
    data: 
    {
        xp_levels: Array<
        {
            level: number;
            statusTitle: string;
            experience: number;
            fbAction: string;
        }>;
    };
};

	/**
	 * Retrieves all quests
	 * 
	 * @param  {Boolean} includeMetaData Should the meta data be returned as well?
	 * @returns ServiceProxyResponse
	 */ 
	readQuests(includeMetaData: boolean): {
    status: number;
    data: 
    {
        quests: Array<any>;
    };
};

	/**
	 * Retrieves quests of the given category.
	 * 
	 * @param  {String} category The quest category.
	 * @param  {Boolean} includeMetaData Should the meta data be returned as well?
	 * @returns ServiceProxyResponse
	 */ 
	readQuestsByCategory(category: string, includeMetaData: boolean): {
    status: number;
    data: 
    {
        quests: Array<any>;
    };
};

	/**
	 * Retrieves all available Quests the player has completed.
	 * 
	 * @param  {Boolean} includeMetaData Should the meta data be returned as well?
	 * @returns ServiceProxyResponse
	 */ 
	readCompletedQuests(includeMetaData: boolean): {
    status: number;
    data: 
    {
        quests: Array<any>;
    };
};

	/**
	 * Retrieves all available quests for which the player has not yet made any progress.
	 * 
	 * @param  {Boolean} includeMetaData Should the meta data be returned as well?
	 * @returns ServiceProxyResponse
	 */ 
	readNotStartedQuests(includeMetaData: boolean): {
    status: number;
    data: 
    {
        quests: Array<any>;
    };
};

	/**
	 * Retrieves all available in-progress quests for the player.
	 * 
	 * @param  {Boolean} includeMetaData Should the meta data be returned as well?
	 * @returns ServiceProxyResponse
	 */ 
	readInProgressQuests(includeMetaData: boolean): {
    status: number;
    data: 
    {
        quests: Array<any>;
    };
};

	/**
	 * Retrieves all available Quests with a simple boolean indication of completeness.
	 * 
	 * @param  {Boolean} includeMetaData Should the meta data be returned as well?
	 * @returns ServiceProxyResponse
	 */ 
	readQuestsWithStatus(includeMetaData: boolean): {
    status: number;
    data: 
    {
        quests: Array<any>;
    };
};

	/**
	 * Retrieves all available Quests with a basic percentage indication of completeness.
	 * 
	 * @param  {Boolean} includeMetaData Should the meta data be returned as well?
	 * @returns ServiceProxyResponse
	 */ 
	readQuestsWithBasicPercentage(includeMetaData: boolean): {
    status: number;
    data: 
    {
        quests: Array<any>;
    };
};

	/**
	 * Retrieves all available Quests with a complex percentage indication of completeness.
	 * 
	 * @param  {Boolean} includeMetaData Should the meta data be returned as well?
	 * @returns ServiceProxyResponse
	 */ 
	readQuestsWithComplexPercentage(includeMetaData: boolean): {
    status: number;
    data: 
    {
        quests: Array<any>;
    };
};

	/**
	 * Retrieves all of the achievements defined for the game.
	 * 
	 * @param  {Boolean} includeMetaData Should the meta data be returned as well?
	 * @returns ServiceProxyResponse
	 */ 
	readAchievements(includeMetaData: boolean): {
    status: number;
    data: 
    {
        achievements: Array<
        {
            fbEnabled: number;
            imageUrl: string;
            status: string;
            gameId: string;
            steamEnabled: number;
            extraData: any | null;
            achievementId: string;
            invisibleUntilEarned: number;
            steamAchievementId: any | null;
            id: string;
            appleEnabled: number;
            title: string;
            fbGamePoints: any | null;
            description: string;
            appleAchievementId: any | null;
        }>;
    };
};

	/**
	 * Retrieves the list of achieved achievements.
	 * 
	 * @param  {Boolean} includeMetaData Should the meta data be returned as well?
	 * @returns ServiceProxyResponse
	 */ 
	readAchievedAchievements(includeMetaData: boolean): {
    status: number;
    data: 
    {
        achievements: Array<any>;
    };
};

	/**
	 * Award the achievements specified
	 * 
	 * @param  {NativeArray} achievements A list of achievement ids to award.
	 * @returns ServiceProxyResponse
	 */ 
	awardAchievements(achievements: Array<any>): {
    status: number;
    data: any | null;
};

	/**
	 * Retrieves all milestones.
	 * 
	 * @param  {Boolean} includeMetaData Should the meta data be returned as well?
	 * @returns ServiceProxyResponse
	 */ 
	readMilestones(includeMetaData: boolean): {
    data: 
    {
        milestones: Array<
        {
            gameId: string;
            questId: any | null;
            thresholds: 
            {
                playerStatistics: 
                {
                    experienceLevel: number;
                };
            };
            extraData: any | null;
            unlockThresholds: 
            {
                playerStatistics: 
                {
                    statistics: 
                    {
                        Levels_Completed: number;
                    };
                };
            };
            description: string;
            id: string;
            title: string;
            category: string;
            rewards: 
            {
                currency: 
                {
                    Gems: number;
                };
            };
            status: string;
        }>;
    };
    status: number;
};

	/**
	 * Retrieves the list of completed milestones.
	 * 
	 * @param  {Boolean} includeMetaData Should the meta data be returned as well?
	 * @returns ServiceProxyResponse
	 */ 
	readCompletedMilestones(includeMetaData: boolean): {
    status: number;
    data: 
    {
        milestones: Array<any>;
    };
};

	/**
	 * Retrieves the list of in progress milestones
	 * 
	 * @param  {Boolean} includeMetaData Should the meta data be returned as well?
	 * @returns ServiceProxyResponse
	 */ 
	readInProgressMilestones(includeMetaData: boolean): {
    data: 
    {
        milestones: Array<
        {
            gameId: string;
            questId: any | null;
            thresholds: 
            {
                playerStatistics: 
                {
                    statistics: 
                    {
                        Plane_Shot_Down: number;
                    };
                };
            };
            extraData: any | null;
            description: string;
            id: string;
            title: string;
            category: string;
            status: string;
        }>;
    };
    status: number;
};

	/**
	 * Retrieves milestones of the given category.
	 * 
	 * @param  {String} category The milestone category.
	 * @param  {Boolean} includeMetaData Should the meta data be returned as well?
	 * @returns ServiceProxyResponse
	 */ 
	readMilestonesByCategory(category: string, includeMetaData: boolean): {
    status: number;
    data: 
    {
        milestones: Array<any>;
    };
};

	/**
	 * Reset all quests.
	 * 
	 * @param  {NativeArray} quests A list of quests to reset.
	 * @returns ServiceProxyResponse
	 */ 
	resetQuests(quests: Array<any>): {
    status: number;
    data: any | null;
};

	/**
	 * Reset all milestones.
	 * 
	 * @param  {NativeArray} milestones A list of milestones to reset.
	 * @returns ServiceProxyResponse
	 */ 
	resetMilestones(milestones: Array<any>): {
    status: number;
    data: any | null;
};

	/**
	 * Reset all quests and milestones.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	resetAllQuestsAndMilestones(): {
    status: number;
    data: any | null;
};

	/**
	 * Update rewards.
	 * 
	 * @param  {Boolean} includeMetaData Should the meta data be returned as well?
	 * @returns ServiceProxyResponse
	 */ 
	updateRewards(includeMetaData: boolean): {
    status: number;
    data: any | null;
};

	/**
	 * Gets the page of milestone information from the server based on the specified context.
	 * 
	 * @param  {NativeObject} context The json context for the page request.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetMilestonePage(context: Object): {
    status: number;
    data: 
    {
        context: string;
        results: 
        {
            count: number;
            page: number;
            items: Array<
            {
                milestoneId: string;
                questId: any | null;
                title: string;
                description: string;
                category: string;
                extraData: 
                {
                    secretMission: number;
                    actionIndex: number;
                };
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
                        globalxp: number;
                    };
                    statistics: 
                    {
                        a3: number;
                        secretMissions: number;
                    };
                };
                thresholds: 
                {
                    playerStatistics: 
                    {
                        experienceLevel: number;
                        experiencePoints: number;
                        statistics: 
                        {
                            returningDay: number;
                        };
                    };
                };
                unlockThresholds: 
                {
                    playerStatistics: 
                    {
                        experienceLevel: number;
                        experiencePoints: number;
                        statistics: 
                        {
                            foodc: number;
                        };
                    };
                    globalStatistics: 
                    {
                        food_unlock: number;
                    };
                };
                createdAt: number;
                updatedAt: number;
                version: number;
            }>;
            moreAfter: number;
            moreBefore: number;
        };
    };
};

	/**
	 * Gets the page of milestone information from the server based on the encoded context and specified page offset.
	 * 
	 * @param  {NativeObject} encodedContext The encoded context string returned from the server from a previous call to SysGetMilestonePage or SysGetMilestonePageOffset.
	 * @param  {Long} pageOffset The positive or negative page offset to fetch. Uses the last page retrieved using the context string to determine a starting point.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetMilestonePageOffset(encodedContext: Object, pageOffset: number): {
    status: number;
    data: 
    {
        context: string;
        results: 
        {
            count: number;
            page: number;
            items: Array<
            {
                milestoneId: string;
                questId: any | null;
                title: string;
                description: string;
                category: string;
                extraData: 
                {
                    batmanIs: string;
                };
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
                        globalxp: number;
                    };
                    statistics: 
                    {
                        a3: number;
                        secretMissions: number;
                    };
                };
                thresholds: 
                {
                    playerStatistics: 
                    {
                        experienceLevel: number;
                        experiencePoints: number;
                        statistics: 
                        {
                            returningDay: number;
                        };
                    };
                };
                unlockThresholds: 
                {
                    playerStatistics: 
                    {
                        experienceLevel: number;
                        experiencePoints: number;
                        statistics: 
                        {
                            foodc: number;
                        };
                    };
                    globalStatistics: 
                    {
                        food_unlock: number;
                    };
                };
                createdAt: number;
                updatedAt: number;
                version: number;
            }>;
            moreAfter: number;
            moreBefore: number;
        };
    };
};

	/**
	 * Retrieves the specified milestone from the server.
	 * 
	 * @param  {String} milestoneId The unique id of the milestone.
	 * @returns ServiceProxyResponse
	 */ 
	sysReadMilestone(milestoneId: string): {
    status: number;
    data: 
    {
        milestoneId: string;
        questId: any | null;
        title: string;
        description: string;
        category: string;
        extraData: 
        {
            secretMission: number;
            actionIndex: number;
        };
        rewards: 
        {
            experiencePoints: number;
        };
        thresholds: 
        {
            playerStatistics: 
            {
                statistics: 
                {
                    wins: number;
                };
            };
        };
        createdAt: number;
        updatedAt: number;
        version: number;
    };
};

	/**
	 * Creates a new milestone on the server.
	 * 
	 * @param  {NativeObject} milestoneJson The data defining the milestone.
	 * @returns ServiceProxyResponse
	 */ 
	sysCreateMilestone(milestoneJson: Object): {
    status: number;
    data: 
    {
        milestoneId: string;
        questId: any | null;
        title: string;
        description: string;
        category: string;
        extraData: 
        {
            secretMission: number;
            actionIndex: number;
        };
        rewards: 
        {
            experiencePoints: number;
        };
        thresholds: 
        {
            playerStatistics: 
            {
                statistics: 
                {
                    wins: number;
                };
            };
        };
        createdAt: number;
        updatedAt: number;
        version: number;
    };
};

	/**
	 * Updates the specified milestone on the server, incrementing the version.
	 * 
	 * @param  {String} milestoneId The unique id of the milestone.
	 * @param  {Integer} version Version of the milestone being edited.
	 * @param  {NativeObject} milestoneJson Changed data for the milestone.
	 * @returns ServiceProxyResponse
	 */ 
	sysUpdateMilestone(milestoneId: string, version: number, milestoneJson: Object): {
    status: number;
    data: 
    {
        milestoneId: string;
        questId: any | null;
        title: string;
        description: string;
        category: string;
        extraData: 
        {
            secretMission: number;
            actionIndex: number;
        };
        rewards: 
        {
            experiencePoints: number;
        };
        thresholds: 
        {
            playerStatistics: 
            {
                statistics: 
                {
                    wins: number;
                };
            };
        };
        createdAt: number;
        updatedAt: number;
        version: number;
    };
};

	/**
	 * Deletes the specified milestone on the server.
	 * 
	 * @param  {String} milestoneId The unique id of the milestone.
	 * @param  {Integer} version Version of the milestone being deleted.
	 * @returns ServiceProxyResponse
	 */ 
	sysDeleteMilestone(milestoneId: string, version: number): {
    status: number;
    data: any | null;
};

	/**
	 * Gets the page of quest information from the server based on the specified context.
	 * 
	 * @param  {NativeObject} context The json context for the page request.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetQuestPage(context: Object): {
    status: number;
    data: 
    {
        context: string;
        results: 
        {
            count: number;
            page: number;
            items: Array<
            {
                questId: string;
                questType: string;
                questData: string;
                title: string;
                description: string;
                category: string;
                extraData: 
                {
                    difficulty: number;
                };
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
                        globalxp: number;
                    };
                    statistics: 
                    {
                        a3: number;
                        secretMissions: number;
                    };
                };
                unlockThresholds: 
                {
                    playerStatistics: 
                    {
                        experienceLevel: number;
                        experiencePoints: number;
                        statistics: 
                        {
                            levelC: number;
                        };
                    };
                    globalStatistics: 
                    {
                        level_unlock: number;
                    };
                };
                createdAt: number;
                updatedAt: number;
                version: number;
                tasks: Array<string>;
            }>;
            moreAfter: number;
            moreBefore: number;
        };
    };
};

	/**
	 * Gets the page of quest information from the server based on the encoded context and specified page offset.
	 * 
	 * @param  {NativeObject} encodedContext The encoded context string returned from the server from a previous call to SysGetQuestPage or SysGetQuestPageOffset.
	 * @param  {Long} pageOffset The positive or negative page offset to fetch. Uses the last page retrieved using the context string to determine a starting point.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetQuestPageOffset(encodedContext: Object, pageOffset: number): {
    status: number;
    data: 
    {
        context: string;
        results: 
        {
            count: number;
            page: number;
            items: Array<
            {
                questId: string;
                questType: string;
                questData: string;
                title: string;
                description: string;
                category: string;
                extraData: 
                {
                    difficulty: number;
                };
                rewards: 
                {
                    experiencePoints: number;
                };
                createdAt: number;
                updatedAt: number;
                version: number;
                tasks: Array<any>;
            }>;
            moreAfter: number;
            moreBefore: number;
        };
    };
};

	/**
	 * Retrieves the specified quest from the server.
	 * 
	 * @param  {String} questId The unique id of the quest.
	 * @returns ServiceProxyResponse
	 */ 
	sysReadQuest(questId: string): {
    status: number;
    data: 
    {
        quest: 
        {
            questId: string;
            questType: string;
            questData: string;
            title: string;
            description: string;
            category: string;
            extraData: 
            {
                difficulty: number;
            };
            rewards: 
            {
                experiencePoints: number;
            };
            createdAt: number;
            updatedAt: number;
            version: number;
            tasks: Array<any>;
        };
        tasks: 
        {
        };
    };
};

	/**
	 * Creates a new quest on the server. Tasks can only be added after quest is created. Quest types include: 'orderedComplete', 'unordedComplete', 'orderedMinimal', 'unordedMinimal'. 
	 * 
	 * @param  {String} questId The unique id of the quest.
	 * @param  {NativeObject} questJson The data defining the quest.
	 * @returns ServiceProxyResponse
	 */ 
	sysCreateQuest(questId: string, questJson: Object): {
    status: number;
    data: 
    {
        questId: string;
        questType: string;
        questData: string;
        title: string;
        description: string;
        category: string;
        extraData: 
        {
            difficulty: number;
        };
        rewards: 
        {
            experiencePoints: number;
        };
        createdAt: number;
        updatedAt: number;
        version: number;
        tasks: Array<any>;
    };
};

	/**
	 * Updates the specified quest on the server, incrementing the version. (Note: Use specific task APIs to update tasks.)
	 * 
	 * @param  {String} questId The unique id of the quest.
	 * @param  {Integer} version Version of the quest being edited.
	 * @param  {NativeObject} questJson Changed data for the quest.
	 * @returns ServiceProxyResponse
	 */ 
	sysUpdateQuest(questId: string, version: number, questJson: Object): {
    status: number;
    data: 
    {
        quest: 
        {
            questId: string;
            questType: string;
            questData: string;
            title: string;
            description: string;
            category: string;
            extraData: 
            {
                difficulty: number;
            };
            rewards: 
            {
                experiencePoints: number;
            };
            createdAt: number;
            updatedAt: number;
            version: number;
            tasks: Array<any>;
        };
        tasks: 
        {
        };
    };
};

	/**
	 * Deletes the specified quest on the server.
	 * 
	 * @param  {String} questId The unique id of the quest.
	 * @param  {Integer} version Version of the quest being deleted.
	 * @returns ServiceProxyResponse
	 */ 
	sysDeleteQuest(questId: string, version: number): {
    status: number;
    data: any | null;
};

	/**
	 * Creates a new task for the quest on the server.
	 * 
	 * @param  {String} questId The unique id of the quest.
	 * @param  {Integer} version Version of the quest being edited.
	 * @param  {NativeObject} taskJson The data defining the task.
	 * @returns ServiceProxyResponse
	 */ 
	sysAddQuestTask(questId: string, version: number, taskJson: Object): {
    status: number;
    data: 
    {
        quest: 
        {
            questId: string;
            questType: string;
            questData: string;
            title: string;
            description: string;
            category: string;
            extraData: 
            {
                difficulty: number;
            };
            rewards: 
            {
                experiencePoints: number;
            };
            createdAt: number;
            updatedAt: number;
            version: number;
            tasks: Array<string>;
        };
        newTask: string;
        tasks: 
        {
            17: 
            {
                questId: string;
                title: string;
                description: string;
                category: string;
                extraData: 
                {
                    secretMission: number;
                    actionIndex: number;
                };
                rewards: 
                {
                    experiencePoints: number;
                };
                thresholds: 
                {
                    playerStatistics: 
                    {
                        statistics: 
                        {
                            wins: number;
                        };
                    };
                };
                createdAt: number;
                updatedAt: number;
                version: number;
                taskId: string;
            };
        };
    };
};

	/**
	 * Updates the specified quest task on the server, incrementing the version of the quest.
	 * 
	 * @param  {String} questId The unique id of the quest.
	 * @param  {Integer} version Version of the quest being edited.
	 * @param  {String} taskId The unique id of the task being edited.
	 * @param  {NativeObject} taskJson Changed data for the task.
	 * @returns ServiceProxyResponse
	 */ 
	sysUpdateQuestTask(questId: string, version: number, taskId: string, taskJson: Object): {
    status: number;
    data: 
    {
        quest: 
        {
            questId: string;
            questType: string;
            questData: string;
            title: string;
            description: string;
            category: string;
            extraData: 
            {
                difficulty: number;
            };
            rewards: 
            {
                experiencePoints: number;
            };
            createdAt: number;
            updatedAt: number;
            version: number;
            tasks: Array<string>;
        };
        updatedTask: string;
        tasks: 
        {
            17: 
            {
                title: string;
                description: string;
                category: string;
                extraData: 
                {
                    secretMission: number;
                    actionIndex: number;
                };
                rewards: 
                {
                    experiencePoints: number;
                };
                thresholds: 
                {
                    playerStatistics: 
                    {
                        statistics: 
                        {
                            wins: number;
                        };
                    };
                };
                createdAt: number;
                updatedAt: number;
                version: number;
                taskId: string;
            };
        };
    };
};

	/**
	 * Deletes the identified task from the specified quest on the server.
	 * 
	 * @param  {String} questId The unique id of the quest being edited.
	 * @param  {Integer} version Version of the quest being edited.
	 * @param  {String} taskId The unique id of the task being deleted.
	 * @returns ServiceProxyResponse
	 */ 
	sysDeleteQuestTask(questId: string, version: number, taskId: string): {
    status: number;
    data: 
    {
        quest: 
        {
            questId: string;
            questType: string;
            questData: string;
            title: string;
            description: string;
            category: string;
            extraData: 
            {
                difficulty: number;
            };
            rewards: 
            {
                experiencePoints: number;
            };
            createdAt: number;
            updatedAt: number;
            version: number;
            tasks: Array<string>;
        };
        deletedTask: string;
        tasks: 
        {
            17: 
            {
                title: string;
                description: string;
                category: string;
                extraData: 
                {
                    secretMission: number;
                    actionIndex: number;
                };
                rewards: 
                {
                    experiencePoints: number;
                };
                thresholds: 
                {
                    playerStatistics: 
                    {
                        statistics: 
                        {
                            wins: number;
                        };
                    };
                };
                createdAt: number;
                updatedAt: number;
                version: number;
                taskId: string;
            };
        };
    };
};

	/**
	 * Reorders the quest's tasks on the server as specified.
	 * 
	 * @param  {String} questId The unique id of the quest being edited.
	 * @param  {Integer} version Version of the quest being edited.
	 * @param  {NativeArray} newTaskArray Ordered list of task IDs.
	 * @returns ServiceProxyResponse
	 */ 
	sysReorderQuestTasks(questId: string, version: number, newTaskArray: Array<any>): {
    status: number;
    data: 
    {
        quest: 
        {
            questId: string;
            questType: string;
            questData: string;
            title: string;
            description: string;
            category: string;
            extraData: 
            {
                difficulty: number;
            };
            rewards: 
            {
                experiencePoints: number;
            };
            createdAt: number;
            updatedAt: number;
            version: number;
            tasks: Array<string>;
        };
        deletedTasks: Array<any>;
        tasks: 
        {
            17: 
            {
                questId: string;
                title: string;
                description: string;
                category: string;
                extraData: 
                {
                    secretMission: number;
                    actionIndex: number;
                };
                rewards: 
                {
                    experiencePoints: number;
                };
                thresholds: 
                {
                    playerStatistics: 
                    {
                        statistics: 
                        {
                            wins: number;
                        };
                    };
                };
                createdAt: number;
                updatedAt: number;
                version: number;
                taskId: string;
            };
            19: 
            {
                questId: string;
                title: string;
                description: string;
                category: string;
                extraData: 
                {
                };
                rewards: 
                {
                    experiencePoints: number;
                };
                thresholds: 
                {
                    playerStatistics: 
                    {
                        statistics: 
                        {
                            returningDay: number;
                        };
                    };
                };
                createdAt: number;
                updatedAt: number;
                version: number;
                taskId: string;
            };
        };
    };
};
}