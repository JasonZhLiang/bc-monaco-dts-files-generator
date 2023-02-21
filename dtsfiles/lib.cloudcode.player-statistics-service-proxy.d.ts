/// <reference no-default-lib="true"/>

interface PlayerStatisticsServiceProxy {
	/**
	 * Read all available user statistics.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	readAllUserStats(): ServiceProxyResponse;

	/**
	 * Reads a subset of user statistics belonging to the specified category (all if omitted).
	 * 
	 * @param  {string} category The user statistics category.
	 * @returns ServiceProxyResponse
	 */ 
	readUserStatsForCategory(category: string): ServiceProxyResponse;

	/**
	 * Reads a subset of user statistics as defined by the input JSON.
	 * 
	 * @param  {nativeArray} statistics A collection containing the statistics to read.
	 * @returns ServiceProxyResponse
	 */ 
	readUserStatsSubset(statistics: nativeArray): ServiceProxyResponse;

	/**
	 * Atomically increment user experience points.
	 * 
	 * @param  {long} xp_points The amount to increase the user's experience by.
	 * @returns ServiceProxyResponse
	 */ 
	incrementExperiencePoints(xp_points: long): ServiceProxyResponse;

	/**
	 * Atomically increment user statistics.
	 * 
	 * @param  {nativeObject} statistics The data to be passed to method.
	 * @returns ServiceProxyResponse
	 */ 
	incrementUserStats(statistics: nativeObject): ServiceProxyResponse;

	/**
	 * Apply statistics grammar to a partial set of statistics.
	 * 
	 * @param  {nativeObject} statistics The stats data to be passed to the method.
	 * @returns ServiceProxyResponse
	 */ 
	processStatistics(statistics: nativeObject): ServiceProxyResponse;

	/**
	 * Returns JSON representing the next experience level for the user.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	getNextExperienceLevel(): ServiceProxyResponse;

	/**
	 * Sets the user's experience to an absolute value. Note that this is simply a set and will not reward the user if their level changes as a result.
	 * 
	 * @param  {long} xp_points The amount to set the user's experience to.
	 * @returns ServiceProxyResponse
	 */ 
	setExperiencePoints(xp_points: long): ServiceProxyResponse;

	/**
	 * Reset all of the statistics for this user back to their initial value.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	resetAllUserStats(): ServiceProxyResponse;
}