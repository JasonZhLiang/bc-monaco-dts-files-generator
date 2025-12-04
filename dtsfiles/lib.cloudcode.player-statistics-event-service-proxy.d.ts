/// <reference no-default-lib="true"/>

interface PlayerStatisticsEventServiceProxy {
	/**
	 * Trigger an event server side that will increase the user statistics.
	 * 
	 * @param  {string} eventName The name of the event configured through the <%= data.branding.productName %> portal.
	 * @param  {long} eventMultiplier The multiplier to apply to the event.
	 * @returns ServiceProxyResponse
	 */ 
	triggerStatsEvent(eventName: string, eventMultiplier: long): ServiceProxyResponse;

	/**
	 * See documentation for TriggerUserStatsEvents for more documentation.
	 * 
	 * @param  {nativeArray} events An array of JSON objects representing Event Names and Multipliers.  ex. `[ { "eventName": "event1", "eventMultiplier": 1 } ]`
	 * @returns ServiceProxyResponse
	 */ 
	triggerStatsEvents(events: nativeArray): ServiceProxyResponse;
}