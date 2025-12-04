/// <reference no-default-lib="true"/>

interface GamificationServiceProxy {
	/**
	 * Retrieves all gamification data for the player.
	 * 
	 * @param  {boolean} includeMetaData Should the meta data be returned as well?
	 * @returns ServiceProxyResponse
	 */ 
	readAllGamification(includeMetaData: boolean): ServiceProxyResponse;

	/**
	 * Returns all defined xp levels and any rewards associated with those xp levels.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	readXpLevelsMetadata(): ServiceProxyResponse;

	/**
	 * Retrieves all quests
	 * 
	 * @param  {boolean} includeMetaData Should the meta data be returned as well?
	 * @returns ServiceProxyResponse
	 */ 
	readQuests(includeMetaData: boolean): ServiceProxyResponse;

	/**
	 * Retrieves quests of the given category.
	 * 
	 * @param  {string} category The quest category.
	 * @param  {boolean} includeMetaData Should the meta data be returned as well?
	 * @returns ServiceProxyResponse
	 */ 
	readQuestsByCategory(category: string, includeMetaData: boolean): ServiceProxyResponse;

	/**
	 * Retrieves all available Quests the player has completed.
	 * 
	 * @param  {boolean} includeMetaData Should the meta data be returned as well?
	 * @returns ServiceProxyResponse
	 */ 
	readCompletedQuests(includeMetaData: boolean): ServiceProxyResponse;

	/**
	 * Retrieves all available quests for which the player has not yet made any progress.
	 * 
	 * @param  {boolean} includeMetaData Should the meta data be returned as well?
	 * @returns ServiceProxyResponse
	 */ 
	readNotStartedQuests(includeMetaData: boolean): ServiceProxyResponse;

	/**
	 * Retrieves all available in-progress quests for the player.
	 * 
	 * @param  {boolean} includeMetaData Should the meta data be returned as well?
	 * @returns ServiceProxyResponse
	 */ 
	readInProgressQuests(includeMetaData: boolean): ServiceProxyResponse;

	/**
	 * Retrieves all available Quests with a simple boolean indication of completeness.
	 * 
	 * @param  {boolean} includeMetaData Should the meta data be returned as well?
	 * @returns ServiceProxyResponse
	 */ 
	readQuestsWithStatus(includeMetaData: boolean): ServiceProxyResponse;

	/**
	 * Retrieves all available Quests with a basic percentage indication of completeness.
	 * 
	 * @param  {boolean} includeMetaData Should the meta data be returned as well?
	 * @returns ServiceProxyResponse
	 */ 
	readQuestsWithBasicPercentage(includeMetaData: boolean): ServiceProxyResponse;

	/**
	 * Retrieves all available Quests with a complex percentage indication of completeness.
	 * 
	 * @param  {boolean} includeMetaData Should the meta data be returned as well?
	 * @returns ServiceProxyResponse
	 */ 
	readQuestsWithComplexPercentage(includeMetaData: boolean): ServiceProxyResponse;

	/**
	 * Retrieves all of the achievements defined for the game.
	 * 
	 * @param  {boolean} includeMetaData Should the meta data be returned as well?
	 * @returns ServiceProxyResponse
	 */ 
	readAchievements(includeMetaData: boolean): ServiceProxyResponse;

	/**
	 * Retrieves the list of achieved achievements.
	 * 
	 * @param  {boolean} includeMetaData Should the meta data be returned as well?
	 * @returns ServiceProxyResponse
	 */ 
	readAchievedAchievements(includeMetaData: boolean): ServiceProxyResponse;

	/**
	 * Award the achievements specified
	 * 
	 * @param  {nativeArray} achievements A list of achievement ids to award.
	 * @returns ServiceProxyResponse
	 */ 
	awardAchievements(achievements: nativeArray): ServiceProxyResponse;

	/**
	 * Retrieves all milestones.
	 * 
	 * @param  {boolean} includeMetaData Should the meta data be returned as well?
	 * @returns ServiceProxyResponse
	 */ 
	readMilestones(includeMetaData: boolean): ServiceProxyResponse;

	/**
	 * Retrieves the list of completed milestones.
	 * 
	 * @param  {boolean} includeMetaData Should the meta data be returned as well?
	 * @returns ServiceProxyResponse
	 */ 
	readCompletedMilestones(includeMetaData: boolean): ServiceProxyResponse;

	/**
	 * Retrieves the list of in progress milestones
	 * 
	 * @param  {boolean} includeMetaData Should the meta data be returned as well?
	 * @returns ServiceProxyResponse
	 */ 
	readInProgressMilestones(includeMetaData: boolean): ServiceProxyResponse;

	/**
	 * Retrieves milestones of the given category.
	 * 
	 * @param  {string} category The milestone category.
	 * @param  {boolean} includeMetaData Should the meta data be returned as well?
	 * @returns ServiceProxyResponse
	 */ 
	readMilestonesByCategory(category: string, includeMetaData: boolean): ServiceProxyResponse;

	/**
	 * Reset all quests.
	 * 
	 * @param  {nativeArray} quests A list of quests to reset.
	 * @returns ServiceProxyResponse
	 */ 
	resetQuests(quests: nativeArray): ServiceProxyResponse;

	/**
	 * Reset all milestones.
	 * 
	 * @param  {nativeArray} milestones A list of milestones to reset.
	 * @returns ServiceProxyResponse
	 */ 
	resetMilestones(milestones: nativeArray): ServiceProxyResponse;

	/**
	 * Reset all quests and milestones.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	resetAllQuestsAndMilestones(): ServiceProxyResponse;

	/**
	 * Update rewards.
	 * 
	 * @param  {boolean} includeMetaData Should the meta data be returned as well?
	 * @returns ServiceProxyResponse
	 */ 
	updateRewards(includeMetaData: boolean): ServiceProxyResponse;

	/**
	 * Gets the page of milestone information from the server based on the specified context.
	 * 
	 * @param  {nativeObject} context The json context for the page request.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetMilestonePage(context: nativeObject): ServiceProxyResponse;

	/**
	 * Gets the page of milestone information from the server based on the encoded context and specified page offset.
	 * 
	 * @param  {nativeObject} encodedContext The encoded context string returned from the server from a previous call to SysGetMilestonePage or SysGetMilestonePageOffset.
	 * @param  {long} pageOffset The positive or negative page offset to fetch. Uses the last page retrieved using the context string to determine a starting point.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetMilestonePageOffset(encodedContext: nativeObject, pageOffset: long): ServiceProxyResponse;

	/**
	 * Retrieves the specified milestone from the server.
	 * 
	 * @param  {string} milestoneId The unique id of the milestone.
	 * @returns ServiceProxyResponse
	 */ 
	sysReadMilestone(milestoneId: string): ServiceProxyResponse;

	/**
	 * Creates a new milestone on the server.
	 * 
	 * @param  {nativeObject} milestoneJson The data defining the milestone.
	 * @returns ServiceProxyResponse
	 */ 
	sysCreateMilestone(milestoneJson: nativeObject): ServiceProxyResponse;

	/**
	 * Updates the specified milestone on the server, incrementing the version.
	 * 
	 * @param  {string} milestoneId The unique id of the milestone.
	 * @param  {integer} version Version of the milestone being edited.
	 * @param  {nativeObject} milestoneJson Changed data for the milestone.
	 * @returns ServiceProxyResponse
	 */ 
	sysUpdateMilestone(milestoneId: string, version: integer, milestoneJson: nativeObject): ServiceProxyResponse;

	/**
	 * Deletes the specified milestone on the server.
	 * 
	 * @param  {string} milestoneId The unique id of the milestone.
	 * @param  {integer} version Version of the milestone being deleted.
	 * @returns ServiceProxyResponse
	 */ 
	sysDeleteMilestone(milestoneId: string, version: integer): ServiceProxyResponse;

	/**
	 * Gets the page of quest information from the server based on the specified context.
	 * 
	 * @param  {nativeObject} context The json context for the page request.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetQuestPage(context: nativeObject): ServiceProxyResponse;

	/**
	 * Gets the page of quest information from the server based on the encoded context and specified page offset.
	 * 
	 * @param  {nativeObject} encodedContext The encoded context string returned from the server from a previous call to SysGetQuestPage or SysGetQuestPageOffset.
	 * @param  {long} pageOffset The positive or negative page offset to fetch. Uses the last page retrieved using the context string to determine a starting point.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetQuestPageOffset(encodedContext: nativeObject, pageOffset: long): ServiceProxyResponse;

	/**
	 * Retrieves the specified quest from the server.
	 * 
	 * @param  {string} questId The unique id of the quest.
	 * @returns ServiceProxyResponse
	 */ 
	sysReadQuest(questId: string): ServiceProxyResponse;

	/**
	 * Creates a new quest on the server. Tasks can only be added after quest is created. Quest types include: 'orderedComplete', 'unordedComplete', 'orderedMinimal', 'unordedMinimal'. 
	 * 
	 * @param  {string} questId The unique id of the quest.
	 * @param  {nativeObject} questJson The data defining the quest.
	 * @returns ServiceProxyResponse
	 */ 
	sysCreateQuest(questId: string, questJson: nativeObject): ServiceProxyResponse;

	/**
	 * Updates the specified quest on the server, incrementing the version. (Note: Use specific task APIs to update tasks.)
	 * 
	 * @param  {string} questId The unique id of the quest.
	 * @param  {integer} version Version of the quest being edited.
	 * @param  {nativeObject} questJson Changed data for the quest.
	 * @returns ServiceProxyResponse
	 */ 
	sysUpdateQuest(questId: string, version: integer, questJson: nativeObject): ServiceProxyResponse;

	/**
	 * Deletes the specified quest on the server.
	 * 
	 * @param  {string} questId The unique id of the quest.
	 * @param  {integer} version Version of the quest being deleted.
	 * @returns ServiceProxyResponse
	 */ 
	sysDeleteQuest(questId: string, version: integer): ServiceProxyResponse;

	/**
	 * Creates a new task for the quest on the server.
	 * 
	 * @param  {string} questId The unique id of the quest.
	 * @param  {integer} version Version of the quest being edited.
	 * @param  {nativeObject} taskJson The data defining the task.
	 * @returns ServiceProxyResponse
	 */ 
	sysAddQuestTask(questId: string, version: integer, taskJson: nativeObject): ServiceProxyResponse;

	/**
	 * Updates the specified quest task on the server, incrementing the version of the quest.
	 * 
	 * @param  {string} questId The unique id of the quest.
	 * @param  {integer} version Version of the quest being edited.
	 * @param  {string} taskId The unique id of the task being edited.
	 * @param  {nativeObject} taskJson Changed data for the task.
	 * @returns ServiceProxyResponse
	 */ 
	sysUpdateQuestTask(questId: string, version: integer, taskId: string, taskJson: nativeObject): ServiceProxyResponse;

	/**
	 * Deletes the identified task from the specified quest on the server.
	 * 
	 * @param  {string} questId The unique id of the quest being edited.
	 * @param  {integer} version Version of the quest being edited.
	 * @param  {string} taskId The unique id of the task being deleted.
	 * @returns ServiceProxyResponse
	 */ 
	sysDeleteQuestTask(questId: string, version: integer, taskId: string): ServiceProxyResponse;

	/**
	 * Reorders the quest's tasks on the server as specified.
	 * 
	 * @param  {string} questId The unique id of the quest being edited.
	 * @param  {integer} version Version of the quest being edited.
	 * @param  {nativeArray} newTaskArray Ordered list of task IDs.
	 * @returns ServiceProxyResponse
	 */ 
	sysReorderQuestTasks(questId: string, version: integer, newTaskArray: nativeArray): ServiceProxyResponse;
}