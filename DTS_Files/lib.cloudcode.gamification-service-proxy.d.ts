/// <reference no-default-lib="true"/>

interface GamificationServiceProxy {
	/**
	 * Retrieves all gamification data for the player.
	 * 
	 * @param  {boolean} includeMetaData Should the meta data be returned as well?
	 * @returns ServiceProxyResponse
	 */ 
	readAllGamification(includeMetaData: boolean): {
		data: {
		    milestones: Array<{
		        id: string;
		        category: string;
		        title: string;
		        status: string;
		        description: string;
		        gameId: string;
		        rewards: Record<string, any>;
		        extraData: any | null;
		        questId: any | null;
		    }>;
		    achievements: Array<{
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
		    xp: {
		        xpCapped: number;
		        experiencePoints: number;
		        xpLevel: Record<string, any>;
		        experienceLevel: number;
		    };
		};
		status: number;
	};


	/**
	 * Returns all defined xp levels and any rewards associated with those xp levels.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	readXpLevelsMetadata(): {
		data: {
		    xp_levels: Array<{
		        level: number;
		        statusTitle: string;
		        experience: number;
		        fbAction: string;
		    }>;
		};
		status: number;
	};


	/**
	 * Retrieves all quests
	 * 
	 * @param  {boolean} includeMetaData Should the meta data be returned as well?
	 * @returns ServiceProxyResponse
	 */ 
	readQuests(includeMetaData: boolean): {
		status: number;
		data: {
		    quests: Array<any>;
		};
	};


	/**
	 * Retrieves quests of the given category.
	 * 
	 * @param  {string} category The quest category.
	 * @param  {boolean} includeMetaData Should the meta data be returned as well?
	 * @returns ServiceProxyResponse
	 */ 
	readQuestsByCategory(category: string, includeMetaData: boolean): {
		data: {
		    quests: Array<any>;
		};
		status: number;
	};


	/**
	 * Retrieves all available Quests the player has completed.
	 * 
	 * @param  {boolean} includeMetaData Should the meta data be returned as well?
	 * @returns ServiceProxyResponse
	 */ 
	readCompletedQuests(includeMetaData: boolean): {
		data: {
		    quests: Array<any>;
		};
		status: number;
	};


	/**
	 * Retrieves all available quests for which the player has not yet made any progress.
	 * 
	 * @param  {boolean} includeMetaData Should the meta data be returned as well?
	 * @returns ServiceProxyResponse
	 */ 
	readNotStartedQuests(includeMetaData: boolean): {
		status: number;
		data: {
		    quests: Array<any>;
		};
	};


	/**
	 * Retrieves all available in-progress quests for the player.
	 * 
	 * @param  {boolean} includeMetaData Should the meta data be returned as well?
	 * @returns ServiceProxyResponse
	 */ 
	readInProgressQuests(includeMetaData: boolean): {
		data: {
		    quests: Array<any>;
		};
		status: number;
	};


	/**
	 * Retrieves all available Quests with a simple boolean indication of completeness.
	 * 
	 * @param  {boolean} includeMetaData Should the meta data be returned as well?
	 * @returns ServiceProxyResponse
	 */ 
	readQuestsWithStatus(includeMetaData: boolean): {
		status: number;
		data: {
		    quests: Array<any>;
		};
	};


	/**
	 * Retrieves all available Quests with a basic percentage indication of completeness.
	 * 
	 * @param  {boolean} includeMetaData Should the meta data be returned as well?
	 * @returns ServiceProxyResponse
	 */ 
	readQuestsWithBasicPercentage(includeMetaData: boolean): {
		data: {
		    quests: Array<any>;
		};
		status: number;
	};


	/**
	 * Retrieves all available Quests with a complex percentage indication of completeness.
	 * 
	 * @param  {boolean} includeMetaData Should the meta data be returned as well?
	 * @returns ServiceProxyResponse
	 */ 
	readQuestsWithComplexPercentage(includeMetaData: boolean): {
		data: {
		    quests: Array<any>;
		};
		status: number;
	};


	/**
	 * Retrieves all of the achievements defined for the game.
	 * 
	 * @param  {boolean} includeMetaData Should the meta data be returned as well?
	 * @returns ServiceProxyResponse
	 */ 
	readAchievements(includeMetaData: boolean): {
		data: {
		    achievements: Array<{
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
		status: number;
	};


	/**
	 * Retrieves the list of achieved achievements.
	 * 
	 * @param  {boolean} includeMetaData Should the meta data be returned as well?
	 * @returns ServiceProxyResponse
	 */ 
	readAchievedAchievements(includeMetaData: boolean): {
		data: {
		    achievements: Array<any>;
		};
		status: number;
	};


	/**
	 * Award the achievements specified
	 * 
	 * @param  {Array<any>} achievements A list of achievement ids to award.
	 * @returns ServiceProxyResponse
	 */ 
	awardAchievements(achievements: Array<any>): {
		data: any | null;
		status: number;
	};


	/**
	 * Retrieves all milestones.
	 * 
	 * @param  {boolean} includeMetaData Should the meta data be returned as well?
	 * @returns ServiceProxyResponse
	 */ 
	readMilestones(includeMetaData: boolean): {
		data: {
		    milestones: Array<{
		        gameId: string;
		        questId: any | null;
		        thresholds: Record<string, any>;
		        extraData: any | null;
		        unlockThresholds: Record<string, any>;
		        description: string;
		        id: string;
		        title: string;
		        category: string;
		        rewards: Record<string, any>;
		        status: string;
		    }>;
		};
		status: number;
	};


	/**
	 * Retrieves the list of completed milestones.
	 * 
	 * @param  {boolean} includeMetaData Should the meta data be returned as well?
	 * @returns ServiceProxyResponse
	 */ 
	readCompletedMilestones(includeMetaData: boolean): {
		data: {
		    milestones: Array<any>;
		};
		status: number;
	};


	/**
	 * Retrieves the list of in progress milestones
	 * 
	 * @param  {boolean} includeMetaData Should the meta data be returned as well?
	 * @returns ServiceProxyResponse
	 */ 
	readInProgressMilestones(includeMetaData: boolean): {
		data: {
		    milestones: Array<{
		        gameId: string;
		        questId: any | null;
		        thresholds: Record<string, any>;
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
	 * @param  {string} category The milestone category.
	 * @param  {boolean} includeMetaData Should the meta data be returned as well?
	 * @returns ServiceProxyResponse
	 */ 
	readMilestonesByCategory(category: string, includeMetaData: boolean): {
		data: {
		    milestones: Array<any>;
		};
		status: number;
	};


	/**
	 * Reset all quests.
	 * 
	 * @param  {Array<any>} quests A list of quests to reset.
	 * @returns ServiceProxyResponse
	 */ 
	resetQuests(quests: Array<any>): {
		status: number;
		data: any | null;
	};


	/**
	 * Reset all milestones.
	 * 
	 * @param  {Array<any>} milestones A list of milestones to reset.
	 * @returns ServiceProxyResponse
	 */ 
	resetMilestones(milestones: Array<any>): {
		data: any | null;
		status: number;
	};


	/**
	 * Reset all quests and milestones.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	resetAllQuestsAndMilestones(): {
		data: any | null;
		status: number;
	};


	/**
	 * Update rewards.
	 * 
	 * @param  {boolean} includeMetaData Should the meta data be returned as well?
	 * @returns ServiceProxyResponse
	 */ 
	updateRewards(includeMetaData: boolean): {
		status: number;
		data: any | null;
	};


	/**
	 * Gets the page of milestone information from the server based on the specified context.
	 * 
	 * @param  {Object} context The json context for the page request.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetMilestonePage(context: Object): {
		data: {
		    context: string;
		    results: {
		        count: number;
		        page: number;
		        items: Array<Record<string, any>>;
		        moreAfter: number;
		        moreBefore: number;
		    };
		};
		status: number;
	};


	/**
	 * Gets the page of milestone information from the server based on the encoded context and specified page offset.
	 * 
	 * @param  {Object} encodedContext The encoded context string returned from the server from a previous call to SysGetMilestonePage or SysGetMilestonePageOffset.
	 * @param  {number} pageOffset The positive or negative page offset to fetch. Uses the last page retrieved using the context string to determine a starting point.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetMilestonePageOffset(encodedContext: Object, pageOffset: number): {
		data: {
		    context: string;
		    results: {
		        count: number;
		        page: number;
		        items: Array<Record<string, any>>;
		        moreAfter: number;
		        moreBefore: number;
		    };
		};
		status: number;
	};


	/**
	 * Retrieves the specified milestone from the server.
	 * 
	 * @param  {string} milestoneId The unique id of the milestone.
	 * @returns ServiceProxyResponse
	 */ 
	sysReadMilestone(milestoneId: string): {
		status: number;
		data: {
		    milestoneId: string;
		    questId: any | null;
		    title: string;
		    description: string;
		    category: string;
		    extraData: {
		        secretMission: number;
		        actionIndex: number;
		    };
		    rewards: {
		        experiencePoints: number;
		    };
		    thresholds: {
		        playerStatistics: Record<string, any>;
		    };
		    createdAt: number;
		    updatedAt: number;
		    version: number;
		};
	};


	/**
	 * Creates a new milestone on the server.
	 * 
	 * @param  {Object} milestoneJson The data defining the milestone.
	 * @returns ServiceProxyResponse
	 */ 
	sysCreateMilestone(milestoneJson: Object): {
		status: number;
		data: {
		    milestoneId: string;
		    questId: any | null;
		    title: string;
		    description: string;
		    category: string;
		    extraData: {
		        secretMission: number;
		        actionIndex: number;
		    };
		    rewards: {
		        experiencePoints: number;
		    };
		    thresholds: {
		        playerStatistics: Record<string, any>;
		    };
		    createdAt: number;
		    updatedAt: number;
		    version: number;
		};
	};


	/**
	 * Updates the specified milestone on the server, incrementing the version.
	 * 
	 * @param  {string} milestoneId The unique id of the milestone.
	 * @param  {number} version Version of the milestone being edited.
	 * @param  {Object} milestoneJson Changed data for the milestone.
	 * @returns ServiceProxyResponse
	 */ 
	sysUpdateMilestone(milestoneId: string, version: number, milestoneJson: Object): {
		status: number;
		data: {
		    milestoneId: string;
		    questId: any | null;
		    title: string;
		    description: string;
		    category: string;
		    extraData: {
		        secretMission: number;
		        actionIndex: number;
		    };
		    rewards: {
		        experiencePoints: number;
		    };
		    thresholds: {
		        playerStatistics: Record<string, any>;
		    };
		    createdAt: number;
		    updatedAt: number;
		    version: number;
		};
	};


	/**
	 * Deletes the specified milestone on the server.
	 * 
	 * @param  {string} milestoneId The unique id of the milestone.
	 * @param  {number} version Version of the milestone being deleted.
	 * @returns ServiceProxyResponse
	 */ 
	sysDeleteMilestone(milestoneId: string, version: number): {
		status: number;
		data: any | null;
	};


	/**
	 * Gets the page of quest information from the server based on the specified context.
	 * 
	 * @param  {Object} context The json context for the page request.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetQuestPage(context: Object): {
		data: {
		    context: string;
		    results: {
		        count: number;
		        page: number;
		        items: Array<Record<string, any>>;
		        moreAfter: number;
		        moreBefore: number;
		    };
		};
		status: number;
	};


	/**
	 * Gets the page of quest information from the server based on the encoded context and specified page offset.
	 * 
	 * @param  {Object} encodedContext The encoded context string returned from the server from a previous call to SysGetQuestPage or SysGetQuestPageOffset.
	 * @param  {number} pageOffset The positive or negative page offset to fetch. Uses the last page retrieved using the context string to determine a starting point.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetQuestPageOffset(encodedContext: Object, pageOffset: number): {
		data: {
		    context: string;
		    results: {
		        count: number;
		        page: number;
		        items: Array<Record<string, any>>;
		        moreAfter: number;
		        moreBefore: number;
		    };
		};
		status: number;
	};


	/**
	 * Retrieves the specified quest from the server.
	 * 
	 * @param  {string} questId The unique id of the quest.
	 * @returns ServiceProxyResponse
	 */ 
	sysReadQuest(questId: string): {
		status: number;
		data: {
		    quest: {
		        questId: string;
		        questType: string;
		        questData: string;
		        title: string;
		        description: string;
		        category: string;
		        extraData: Record<string, any>;
		        rewards: Record<string, any>;
		        createdAt: number;
		        updatedAt: number;
		        version: number;
		        tasks: Array<any>;
		    };
		    tasks: {
		    };
		};
	};


	/**
	 * Creates a new quest on the server. Tasks can only be added after quest is created. Quest types include: 'orderedComplete', 'unordedComplete', 'orderedMinimal', 'unordedMinimal'. 
	 * 
	 * @param  {string} questId The unique id of the quest.
	 * @param  {Object} questJson The data defining the quest.
	 * @returns ServiceProxyResponse
	 */ 
	sysCreateQuest(questId: string, questJson: Object): {
		status: number;
		data: {
		    questId: string;
		    questType: string;
		    questData: string;
		    title: string;
		    description: string;
		    category: string;
		    extraData: {
		        difficulty: number;
		    };
		    rewards: {
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
	 * @param  {string} questId The unique id of the quest.
	 * @param  {number} version Version of the quest being edited.
	 * @param  {Object} questJson Changed data for the quest.
	 * @returns ServiceProxyResponse
	 */ 
	sysUpdateQuest(questId: string, version: number, questJson: Object): {
		status: number;
		data: {
		    quest: {
		        questId: string;
		        questType: string;
		        questData: string;
		        title: string;
		        description: string;
		        category: string;
		        extraData: Record<string, any>;
		        rewards: Record<string, any>;
		        createdAt: number;
		        updatedAt: number;
		        version: number;
		        tasks: Array<any>;
		    };
		    tasks: {
		    };
		};
	};


	/**
	 * Deletes the specified quest on the server.
	 * 
	 * @param  {string} questId The unique id of the quest.
	 * @param  {number} version Version of the quest being deleted.
	 * @returns ServiceProxyResponse
	 */ 
	sysDeleteQuest(questId: string, version: number): {
		status: number;
		data: any | null;
	};


	/**
	 * Creates a new task for the quest on the server.
	 * 
	 * @param  {string} questId The unique id of the quest.
	 * @param  {number} version Version of the quest being edited.
	 * @param  {Object} taskJson The data defining the task.
	 * @returns ServiceProxyResponse
	 */ 
	sysAddQuestTask(questId: string, version: number, taskJson: Object): {
		status: number;
		data: {
		    quest: {
		        questId: string;
		        questType: string;
		        questData: string;
		        title: string;
		        description: string;
		        category: string;
		        extraData: Record<string, any>;
		        rewards: Record<string, any>;
		        createdAt: number;
		        updatedAt: number;
		        version: number;
		        tasks: Array<string>;
		    };
		    newTask: string;
		    tasks: {
		        17: Record<string, any>;
		    };
		};
	};


	/**
	 * Updates the specified quest task on the server, incrementing the version of the quest.
	 * 
	 * @param  {string} questId The unique id of the quest.
	 * @param  {number} version Version of the quest being edited.
	 * @param  {string} taskId The unique id of the task being edited.
	 * @param  {Object} taskJson Changed data for the task.
	 * @returns ServiceProxyResponse
	 */ 
	sysUpdateQuestTask(questId: string, version: number, taskId: string, taskJson: Object): {
		status: number;
		data: {
		    quest: {
		        questId: string;
		        questType: string;
		        questData: string;
		        title: string;
		        description: string;
		        category: string;
		        extraData: Record<string, any>;
		        rewards: Record<string, any>;
		        createdAt: number;
		        updatedAt: number;
		        version: number;
		        tasks: Array<string>;
		    };
		    updatedTask: string;
		    tasks: {
		        17: Record<string, any>;
		    };
		};
	};


	/**
	 * Deletes the identified task from the specified quest on the server.
	 * 
	 * @param  {string} questId The unique id of the quest being edited.
	 * @param  {number} version Version of the quest being edited.
	 * @param  {string} taskId The unique id of the task being deleted.
	 * @returns ServiceProxyResponse
	 */ 
	sysDeleteQuestTask(questId: string, version: number, taskId: string): {
		status: number;
		data: {
		    quest: {
		        questId: string;
		        questType: string;
		        questData: string;
		        title: string;
		        description: string;
		        category: string;
		        extraData: Record<string, any>;
		        rewards: Record<string, any>;
		        createdAt: number;
		        updatedAt: number;
		        version: number;
		        tasks: Array<string>;
		    };
		    deletedTask: string;
		    tasks: {
		        17: Record<string, any>;
		    };
		};
	};


	/**
	 * Reorders the quest's tasks on the server as specified.
	 * 
	 * @param  {string} questId The unique id of the quest being edited.
	 * @param  {number} version Version of the quest being edited.
	 * @param  {Array<any>} newTaskArray Ordered list of task IDs.
	 * @returns ServiceProxyResponse
	 */ 
	sysReorderQuestTasks(questId: string, version: number, newTaskArray: Array<any>): {
		status: number;
		data: {
		    quest: {
		        questId: string;
		        questType: string;
		        questData: string;
		        title: string;
		        description: string;
		        category: string;
		        extraData: Record<string, any>;
		        rewards: Record<string, any>;
		        createdAt: number;
		        updatedAt: number;
		        version: number;
		        tasks: Array<string>;
		    };
		    deletedTasks: Array<any>;
		    tasks: {
		        17: Record<string, any>;
		        19: Record<string, any>;
		    };
		};
	};

}