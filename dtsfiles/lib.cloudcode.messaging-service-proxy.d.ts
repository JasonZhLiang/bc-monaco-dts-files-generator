/// <reference no-default-lib="true"/>

interface MessagingServiceProxy {
	/**
	 * Retrieve user's message boxes, including 'inbox', 'sent', etc.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	getMessageBoxes(): ServiceProxyResponse;

	/**
	 * Returns count of user's 'total' messages and their 'unread' messages.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	getMessageCounts(): ServiceProxyResponse;

	/**
	 * Retrieves a page of messages.
	 * 
	 * @param  {nativeObject} context A context object that controls the searchCriteria, pagination and sorting of the results to be returned.
	 * @returns ServiceProxyResponse
	 */ 
	getMessagesPage(context: nativeObject): ServiceProxyResponse;

	/**
	 * Gets the page of messages from the server based on the encoded context and specified page offset.
	 * 
	 * @param  {string} context The id of the channel to connect to.
	 * @returns ServiceProxyResponse
	 */ 
	getMessagesPageOffset(context: string): ServiceProxyResponse;

	/**
	 * Sends a simple message to specified list of users.
	 * 
	 * @param  {nativeArray} toProfileIds An array of recipients of the message.
	 * @param  {string} text The text to send.
	 * @returns ServiceProxyResponse
	 */ 
	sendMessageSimple(toProfileIds: nativeArray, text: string): ServiceProxyResponse;

	/**
	 * Sends a message with specified 'subject' and 'text' to list of users.
	 * 
	 * @param  {nativeArray} toProfileIds An array of recipients of the message.
	 * @param  {nativeObject} contentJson The message content.
	 * @returns ServiceProxyResponse
	 */ 
	sendMessage(toProfileIds: nativeArray, contentJson: nativeObject): ServiceProxyResponse;

	/**
	 * Retrieves list of specified messages and optionally marks messages as read.
	 * 
	 * @param  {string} msgbox The messagebox that the messages reside in.
	 * @param  {nativeArray} msgIds An array of message ids.
	 * @param  {boolean} markAsRead Whether the messages should be marked as read once retrieved.
	 * @returns ServiceProxyResponse
	 */ 
	getMessages(msgbox: string, msgIds: nativeArray, markAsRead: boolean): ServiceProxyResponse;

	/**
	 * Marks list of user messages as read on the server.
	 * 
	 * @param  {string} msgbox The box that the messages reside in.
	 * @param  {nativeArray} msgIds An array of msgIds.
	 * @returns ServiceProxyResponse
	 */ 
	markMessagesRead(msgbox: string, msgIds: nativeArray): ServiceProxyResponse;

	/**
	 * Deletes specified user messages on the server.
	 * 
	 * @param  {string} msgbox The msgbox that we are deleting messages from.
	 * @param  {nativeArray} msgIds An array of ids of the messages to delete.
	 * @returns ServiceProxyResponse
	 */ 
	deleteMessages(msgbox: string, msgIds: nativeArray): ServiceProxyResponse;

	/**
	 * Gets the page of system messages from the server based on the encoded context.
	 * 
	 * @param  {nativeObject} context The search and paging criteria.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetMessagesPage(context: nativeObject): ServiceProxyResponse;

	/**
	 * Gets the page of system messages from the server based on the encoded context and specified page offset.
	 * 
	 * @param  {string} context The search and paging criteria.
	 * @param  {long} pageOffset Number of pages to go forward or back.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetMessagesPageOffset(context: string, pageOffset: long): ServiceProxyResponse;

	/**
	 * Retrieves the page of messages, owned by specified ownerId, from the server based on the encoded context.
	 * 
	 * @param  {string} ownerId The profile ID of the owner.
	 * @param  {string} context The search and paging criteria.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetMessagesForOwnerPage(ownerId: string, context: string): ServiceProxyResponse;

	/**
	 * Retrieves the page of messages, owned by specified ownerId, from the server based on the encoded context and specified page offset.
	 * 
	 * @param  {string} ownerId The profile ID of the owner.
	 * @param  {string} context The search and paging criteria.
	 * @param  {long} pageOffset Number of pages to go forward or back.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetMessagesForOwnerPageOffset(ownerId: string, context: string, pageOffset: long): ServiceProxyResponse;

	/**
	 * Retrieves list of specified system messages.
	 * 
	 * @param  {nativeArray} msgIds An array of the ids of messages to retrieve.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetMessages(msgIds: nativeArray): ServiceProxyResponse;

	/**
	 * Updates a system message.
	 * 
	 * @param  {string} msgId The id of the message to update.
	 * @param  {long} msgVer The version of the message. Use -1 to specify latest version.
	 * @param  {nativeObject} contentJson The new content to write to the message.
	 * @returns ServiceProxyResponse
	 */ 
	sysUpdateMessage(msgId: string, msgVer: long, contentJson: nativeObject): ServiceProxyResponse;

	/**
	 * Deletes specified system message on the server. Note, if a regular message, deletes all references to it.
	 * 
	 * @param  {string} msgId The id of the message to update.
	 * @param  {long} msgVer The version of the message. Use -1 to specify latest version.
	 * @returns ServiceProxyResponse
	 */ 
	sysDeleteMessage(msgId: string, msgVer: long): ServiceProxyResponse;

	/**
	 * Sends a simple string-based message on behalf of the system (i.e. app) to the specified users.
	 * 
	 * @param  {nativeArray} toProfileIds An array of recipients.
	 * @param  {string} text A simple text message.
	 * @param  {nativeObject} fromJson Who the message is from. Should contain at least "name" field, and potential "pic" field as well.
	 * @returns ServiceProxyResponse
	 */ 
	sysSendMessageSimple(toProfileIds: nativeArray, text: string, fromJson: nativeObject): ServiceProxyResponse;

	/**
	 * Sends a message on behalf of the system (i.e. app) to the specified users.
	 * 
	 * @param  {nativeArray} toProfileIds An array of recipients.
	 * @param  {nativeObject} contentJson The json content object to send in the message.
	 * @param  {nativeObject} fromJson Who the message is from. Should contain at least "name" field, and potential "pic" field as well.
	 * @returns ServiceProxyResponse
	 */ 
	sysSendMessage(toProfileIds: nativeArray, contentJson: nativeObject, fromJson: nativeObject): ServiceProxyResponse;
}