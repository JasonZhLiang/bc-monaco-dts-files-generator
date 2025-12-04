/// <reference no-default-lib="true"/>

interface GlobalGameStatisticsServiceProxy {
	/**
	 * Returns all of the global statistics.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	readAllGlobalStats(): ServiceProxyResponse;

	/**
	 * Reads a subset of global statistics belonging to the specified category (all if omitted).
	 * 
	 * @param  {String} category The global statistics category.
	 * @returns ServiceProxyResponse
	 */ 
	readGlobalStatsForCategory(category: string): ServiceProxyResponse;

	/**
	 * Reads a subset of global statistics as defined by the input JSON.
	 * 
	 * @param  {NativeArray} statistics A collection containing the statistics to read.
	 * @returns ServiceProxyResponse
	 */ 
	readGlobalStatsSubset(statistics: Array<any>): ServiceProxyResponse;

	/**
	 * Atomically increment (or decrement) global statistics.
	 * 
	 * @param  {NativeObject} statistics A collection containing the statistics to increment.
	 * @returns ServiceProxyResponse
	 */ 
	incrementGlobalStats(statistics: Object): ServiceProxyResponse;

	/**
	 * Apply statistics grammar to a partial set of statistics.
	 * 
	 * @param  {NativeObject} statistics A collection containing the statistics to process.
	 * @returns ServiceProxyResponse
	 */ 
	processStatistics(statistics: Object): ServiceProxyResponse;
}