/// <reference no-default-lib="true"/>

interface EventServiceProxy {
	/**
	 * Sends an event to the designated user ID with the attached json data.
	 * 
	 * @param  {String} toId The id of the player who is being sent the event.
	 * @param  {String} eventType The user-defined type of the event.
	 * @param  {NativeObject} eventData The user-defined data for this event encoded in JSON.
	 * @returns ServiceProxyResponse
	 */ 
	sendEvent(toId: string, eventType: string, eventData: Object): {
    status: number;
    data: 
    {
        evId: string;
    };
};

	/**
	 * Sends an event to multiple users with the attached json data.
	 * 
	 * @param  {NativeArray} toIds The profile ids of the users to send the event.
	 * @param  {String} eventType The user-defined type of the event.
	 * @param  {NativeObject} eventData The user-defined data for this event encoded in JSON.
	 * @returns ServiceProxyResponse
	 */ 
	sendEventToProfiles(toIds: Array<any>, eventType: string, eventData: Object): {
    status: number;
    data: 
    {
        errorProfiles: Array<any>;
        errorCount: number;
        sentCount: number;
    };
};

	/**
	 * Sends an event to multiple users with the attached json data.
	 * 
	 * @param  {NativeArray} toIds The profile ids of the users to send the event.
	 * @param  {String} eventType The user-defined type of the event.
	 * @param  {NativeObject} eventData The user-defined data for this event encoded in JSON.
	 * @param  {String} fromProfileId Profile id of the user/system triggering the event. Accepted values are the session profile id or, to send as system event, specify null or 'System'.
	 * @returns ServiceProxyResponse
	 */ 
	sysSendEventToProfiles(toIds: Array<any>, eventType: string, eventData: Object, fromProfileId: string): {
    status: number;
    data: 
    {
        errorProfiles: Array<any>;
        errorCount: number;
        sentCount: number;
    };
};

	/**
	 * Sends an event to the designated user ID with the attached json data. Will only deliver the event via RTT. Will not persist the event.
	 * 
	 * @param  {String} toId The id of the player who is being sent the event.
	 * @param  {String} eventType The user-defined type of the event.
	 * @param  {NativeObject} eventData The user-defined data for this event encoded in JSON.
	 * @returns ServiceProxyResponse
	 */ 
	sysSendEventRTTOnly(toId: string, eventType: string, eventData: Object): {
    data: 
    {
        evId: string;
    };
    status: number;
};

	/**
	 * Updates an event in the user's incoming event mailbox.
	 * 
	 * @param  {String} evId The event id.
	 * @param  {NativeObject} eventData The user-defined data for this event encoded in JSON.
	 * @returns ServiceProxyResponse
	 */ 
	updateIncomingEventData(evId: string, eventData: Object): {
    status: number;
    data: any | null;
};

	/**
	 * Updates an event in the user's incoming event mailbox if the event exists. If event does not exist, just returns null and success, instead of an error.
	 * 
	 * @param  {String} evId The event id.
	 * @param  {NativeObject} eventData The user-defined data for this event encoded in JSON.
	 * @returns ServiceProxyResponse
	 */ 
	updateIncomingEventDataIfExists(evId: string, eventData: Object): {
    status: number;
    data: any | null;
};

	/**
	 * Delete an event out of the user's incoming mailbox.
	 * 
	 * @param  {String} evId The event id.
	 * @returns ServiceProxyResponse
	 */ 
	deleteIncomingEvent(evId: string): {
    status: number;
    data: any | null;
};

	/**
	 * Delete a list of events out of the user's incoming mailbox.
	 * 
	 * @param  {NativeArray} evIds Collection of event ids.
	 * @returns ServiceProxyResponse
	 */ 
	deleteIncomingEvents(evIds: Array<any>): {
    data: 
    {
        deleted: number;
        deletedCount: number;
    };
    status: number;
};

	/**
	 * Delete any events older than the given date out of the user's incoming mailbox.
	 * 
	 * @param  {Long} dateMillis createdAt cut-off time whereby older events will be deleted
	 * @returns ServiceProxyResponse
	 */ 
	deleteIncomingEventsOlderThan(dateMillis: number): {
    data: 
    {
        deleted: number;
        deletedCount: number;
    };
    status: number;
};

	/**
	 * Delete any events of the given type older than the given date out of the user's incoming mailbox.
	 * 
	 * @param  {String} eventType The user-defined type of the event.
	 * @param  {Long} dateMillis createdAt cut-off time whereby older events will be deleted
	 * @returns ServiceProxyResponse
	 */ 
	deleteIncomingEventsByTypeOlderThan(eventType: string, dateMillis: number): {
    data: 
    {
        deleted: number;
        deletedCount: number;
    };
    status: number;
};

	/**
	 * Get the events currently queued for the user.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	getEvents(): {
    data: 
    {
        incoming_events: Array<
        {
            eventData: 
            {
                someMapAttribute: string;
            };
            createdAt: number;
            fromPlayerId: string;
            toPlayerId: string;
            eventType: string;
            evId: string;
        }>;
    };
    status: number;
};
}