/// <reference no-default-lib="true"/>

interface EventServiceProxy {
	/**
	 * Sends an event to the designated user ID with the attached json data.
	 * 
	 * @param  {string} toId The id of the player who is being sent the event.
	 * @param  {string} eventType The user-defined type of the event.
	 * @param  {nativeObject} eventData The user-defined data for this event encoded in JSON.
	 * @returns ServiceProxyResponse
	 */ 
	sendEvent(toId: string, eventType: string, eventData: nativeObject): ServiceProxyResponse;

	/**
	 * Updates an event in the user's incoming event mailbox.
	 * 
	 * @param  {string} evId The event id.
	 * @param  {nativeObject} eventData The user-defined data for this event encoded in JSON.
	 * @returns ServiceProxyResponse
	 */ 
	updateIncomingEventData(evId: string, eventData: nativeObject): ServiceProxyResponse;

	/**
	 * Delete an event out of the user's incoming mailbox.
	 * 
	 * @param  {string} evId The event id.
	 * @returns ServiceProxyResponse
	 */ 
	deleteIncomingEvent(evId: string): ServiceProxyResponse;

	/**
	 * Delete a list of events out of the user's incoming mailbox.
	 * 
	 * @param  {nativeArray} evIds Collection of event ids.
	 * @returns ServiceProxyResponse
	 */ 
	deleteIncomingEvents(evIds: nativeArray): ServiceProxyResponse;

	/**
	 * Delete any events older than the given date out of the user's incoming mailbox.
	 * 
	 * @param  {long} dateMillis createdAt cut-off time whereby older events will be deleted
	 * @returns ServiceProxyResponse
	 */ 
	deleteIncomingEventsOlderThan(dateMillis: long): ServiceProxyResponse;

	/**
	 * Delete any events of the given type older than the given date out of the user's incoming mailbox.
	 * 
	 * @param  {string} eventType The user-defined type of the event.
	 * @param  {long} dateMillis createdAt cut-off time whereby older events will be deleted
	 * @returns ServiceProxyResponse
	 */ 
	deleteIncomingEventsByTypeOlderThan(eventType: string, dateMillis: long): ServiceProxyResponse;

	/**
	 * Get the events currently queued for the user.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	getEvents(): ServiceProxyResponse;
}