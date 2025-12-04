/// <reference no-default-lib="true"/>

interface PlayerStatisticsEventServiceProxy {
	/**
	 * Trigger an event server side that will increase the user statistics.
	 * 
	 * @param  {string} eventName The name of the event configured through the <%= data.branding.productName %> portal.
	 * @param  {number} eventMultiplier The multiplier to apply to the event.
	 * @returns ServiceProxyResponse
	 */ 
	triggerStatsEvent(eventName: string, eventMultiplier: number): ServiceProxyResponse;


	/**
	 * Trigger multiple event servers side that will increase user statistics
	 * 
	 * @param  {Array<any>} events An array of JSON objects representing Event Names and Multipliers.  ex. `[ { "eventName": "event1", "eventMultiplier": 1 } ]`
	 * @returns ServiceProxyResponse
	 */ 
	triggerStatsEvents(events: Array<any>): ServiceProxyResponse;

}