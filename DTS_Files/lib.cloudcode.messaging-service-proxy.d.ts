/// <reference no-default-lib="true"/>

interface MessagingServiceProxy {
	/**
	 * Retrieve user's message boxes, including 'inbox', 'sent', etc.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	getMessageBoxes(): {
		status: number;
		data: {
		    items: Array<string>;
		};
	};


	/**
	 * Returns count of user's 'total' messages and their 'unread' messages.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	getMessageCounts(): {
		status: number;
		data: {
		    inbox: {
		        total: number;
		        unread: number;
		    };
		    sent: {
		        total: number;
		        unread: number;
		    };
		};
	};


	/**
	 * Retrieves a page of messages.
	 * 
	 * @param  {Object} context A context object that controls the searchCriteria, pagination and sorting of the results to be returned.
	 * @returns ServiceProxyResponse
	 */ 
	getMessagesPage(context: Object): {
		data: {
		    context: string;
		    results: {
		        count: number;
		        page: number;
		        items: Array<{
		            mbVer: number;
		            mbUp: number;
		            read: number;
		            msgCr: number;
		            msgVer: number;
		            mbCr: number;
		            msgId: string;
		            msgUp: number;
		            message: {
		                from: {
		                    id: string;
		                    name: string;
		                };
		                sentAt: number;
		                to: Array<string>;
		                content: {
		                    subject: string;
		                    text: string;
		                };
		            };
		            msgbox: string;
		        }>;
		        moreAfter: number;
		        moreBefore: number;
		    };
		};
		status: number;
	};


	/**
	 * Gets the page of messages from the server based on the encoded context and specified page offset.
	 * 
	 * @param  {string} context The id of the channel to connect to.
	 * @param  {number} pageOffset Number of pages to go forward or back.
	 * @returns ServiceProxyResponse
	 */ 
	getMessagesPageOffset(context: string, pageOffset: number): {
		data: {
		    context: string;
		    results: {
		        count: number;
		        page: number;
		        items: Array<{
		            mbVer: number;
		            mbUp: number;
		            read: number;
		            msgCr: number;
		            msgVer: number;
		            mbCr: number;
		            msgId: string;
		            msgUp: number;
		            message: {
		                from: {
		                    id: string;
		                    name: string;
		                };
		                sentAt: number;
		                to: Array<string>;
		                content: {
		                    subject: string;
		                    text: string;
		                };
		            };
		            msgbox: string;
		        }>;
		        moreAfter: number;
		        moreBefore: number;
		    };
		};
		status: number;
	};


	/**
	 * Sends a simple message to specified list of users.
	 * 
	 * @param  {Array<any>} toProfileIds An array of recipients of the message.
	 * @param  {string} text The text to send.
	 * @returns ServiceProxyResponse
	 */ 
	sendMessageSimple(toProfileIds: Array<any>, text: string): {
		data: {
		    actual: number;
		    requested: number;
		    msgId: string;
		};
		status: number;
	};


	/**
	 * Sends a message with specified 'subject' and 'text' to list of users.
	 * 
	 * @param  {Array<any>} toProfileIds An array of recipients of the message.
	 * @param  {Object} contentJson The message content.
	 * @returns ServiceProxyResponse
	 */ 
	sendMessage(toProfileIds: Array<any>, contentJson: Object): {
		status: number;
		data: {
		    actual: number;
		    requested: number;
		    msgId: string;
		};
	};


	/**
	 * Retrieves list of specified messages and optionally marks messages as read.
	 * 
	 * @param  {string} msgbox The messagebox that the messages reside in.
	 * @param  {Array<any>} msgIds An array of message ids.
	 * @param  {boolean} markAsRead Whether the messages should be marked as read once retrieved.
	 * @returns ServiceProxyResponse
	 */ 
	getMessages(msgbox: string, msgIds: Array<any>, markAsRead: boolean): {
		data: {
		    requested: number;
		    actual: number;
		    items: Array<{
		        msgbox: string;
		        msgId: string;
		        mbVer: number;
		        mbCr: number;
		        mbUp: number;
		        read: number;
		        message: {
		            from: {
		                id: string;
		                name: string;
		            };
		            to: Array<string>;
		            sentAt: number;
		            content: {
		                subject: string;
		                text: string;
		            };
		        };
		    }>;
		};
		status: number;
	};


	/**
	 * Marks list of user messages as read on the server.
	 * 
	 * @param  {string} msgbox The box that the messages reside in.
	 * @param  {Array<any>} msgIds An array of msgIds.
	 * @returns ServiceProxyResponse
	 */ 
	markMessagesRead(msgbox: string, msgIds: Array<any>): {
		data: {
		    actual: number;
		    requested: number;
		};
		status: number;
	};


	/**
	 * Deletes specified user messages on the server.
	 * 
	 * @param  {string} msgbox The msgbox that we are deleting messages from.
	 * @param  {Array<any>} msgIds An array of ids of the messages to delete.
	 * @returns ServiceProxyResponse
	 */ 
	deleteMessages(msgbox: string, msgIds: Array<any>): {
		data: {
		    actual: number;
		    requested: number;
		};
		status: number;
	};


	/**
	 * Gets the page of system messages from the server based on the encoded context.
	 * 
	 * @param  {Object} context The search and paging criteria.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetMessagesPage(context: Object): {
		data: {
		    context: string;
		    results: {
		        count: number;
		        page: number;
		        items: Array<{
		            mbVer: number;
		            mbUp: number;
		            read: number;
		            msgCr: number;
		            msgVer: number;
		            mbCr: number;
		            msgId: string;
		            msgUp: number;
		            message: {
		                from: {
		                    id: string;
		                    name: string;
		                };
		                sentAt: number;
		                to: Array<string>;
		                content: {
		                    subject: string;
		                    text: string;
		                };
		            };
		            msgbox: string;
		        }>;
		        moreAfter: number;
		        moreBefore: number;
		    };
		};
		status: number;
	};


	/**
	 * Gets the page of system messages from the server based on the encoded context and specified page offset.
	 * 
	 * @param  {string} context The search and paging criteria.
	 * @param  {number} pageOffset Number of pages to go forward or back.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetMessagesPageOffset(context: string, pageOffset: number): {
		data: {
		    context: string;
		    results: {
		        count: number;
		        page: number;
		        items: Array<{
		            mbVer: number;
		            mbUp: number;
		            read: number;
		            msgCr: number;
		            msgVer: number;
		            mbCr: number;
		            msgId: string;
		            msgUp: number;
		            message: {
		                from: {
		                    id: string;
		                    name: string;
		                };
		                sentAt: number;
		                to: Array<string>;
		                content: {
		                    subject: string;
		                    text: string;
		                };
		            };
		            msgbox: string;
		        }>;
		        moreAfter: number;
		        moreBefore: number;
		    };
		};
		status: number;
	};


	/**
	 * Retrieves the page of messages, owned by specified ownerId, from the server based on the encoded context.
	 * 
	 * @param  {string} ownerId The profile ID of the owner.
	 * @param  {string} context The search and paging criteria.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetMessagesForOwnerPage(ownerId: string, context: string): {
		data: {
		    context: string;
		    results: {
		        count: number;
		        page: number;
		        items: Array<{
		            mbVer: number;
		            mbUp: number;
		            read: number;
		            msgCr: number;
		            msgVer: number;
		            mbCr: number;
		            msgId: string;
		            msgUp: number;
		            message: {
		                from: {
		                    id: string;
		                    name: string;
		                };
		                sentAt: number;
		                to: Array<string>;
		                content: {
		                    subject: string;
		                    text: string;
		                };
		            };
		            msgbox: string;
		        }>;
		        moreAfter: number;
		        moreBefore: number;
		    };
		};
		status: number;
	};


	/**
	 * Retrieves the page of messages, owned by specified ownerId, from the server based on the encoded context and specified page offset.
	 * 
	 * @param  {string} ownerId The profile ID of the owner.
	 * @param  {string} context The search and paging criteria.
	 * @param  {number} pageOffset Number of pages to go forward or back.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetMessagesForOwnerPageOffset(ownerId: string, context: string, pageOffset: number): {
		data: {
		    context: string;
		    results: {
		        count: number;
		        page: number;
		        items: Array<{
		            mbVer: number;
		            mbUp: number;
		            read: number;
		            msgCr: number;
		            msgVer: number;
		            mbCr: number;
		            msgId: string;
		            msgUp: number;
		            message: {
		                from: {
		                    id: string;
		                    name: string;
		                };
		                sentAt: number;
		                to: Array<string>;
		                content: {
		                    subject: string;
		                    text: string;
		                };
		            };
		            msgbox: string;
		        }>;
		        moreAfter: number;
		        moreBefore: number;
		    };
		};
		status: number;
	};


	/**
	 * Retrieves list of specified system messages.
	 * 
	 * @param  {Array<any>} msgIds An array of the ids of messages to retrieve.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetMessages(msgIds: Array<any>): {
		status: number;
		data: {
		};
	};


	/**
	 * Updates a system message.
	 * 
	 * @param  {string} msgId The id of the message to update.
	 * @param  {number} msgVer The version of the message. Use -1 to specify latest version.
	 * @param  {Object} contentJson The new content to write to the message.
	 * @returns ServiceProxyResponse
	 */ 
	sysUpdateMessage(msgId: string, msgVer: number, contentJson: Object): {
		status: number;
		data: {
		    actual: number;
		    requested: number;
		    msgId: string;
		};
	};


	/**
	 * Deletes specified system message on the server. Note, if a regular message, deletes all references to it.
	 * 
	 * @param  {string} msgId The id of the message to update.
	 * @param  {number} msgVer The version of the message. Use -1 to specify latest version.
	 * @returns ServiceProxyResponse
	 */ 
	sysDeleteMessage(msgId: string, msgVer: number): {
		status: number;
		data: {
		};
	};


	/**
	 * Deletes specified system messages on the server. Note, if a regular message, deletes all references to it.
	 * 
	 * @param  {Array<any>} msgIds An array of message ids.
	 * @returns ServiceProxyResponse
	 */ 
	sysDeleteMessages(msgIds: Array<any>): {
		data: {
		    actual: number;
		    requested: number;
		};
		status: number;
	};


	/**
	 * Sends a simple string-based message on behalf of the system (i.e. app) to the specified users.
	 * 
	 * @param  {Array<any>} toProfileIds An array of recipients.
	 * @param  {string} text A simple text message.
	 * @param  {Object} fromJson Who the message is from. Should contain at least "name" field, and potential "pic" field as well.
	 * @returns ServiceProxyResponse
	 */ 
	sysSendMessageSimple(toProfileIds: Array<any>, text: string, fromJson: Object): ServiceProxyResponse;


	/**
	 * Sends a message on behalf of the system (i.e. app) to the specified users.
	 * 
	 * @param  {Array<any>} toProfileIds An array of recipients.
	 * @param  {Object} contentJson The json content object to send in the message.
	 * @param  {Object} fromJson Who the message is from. Should contain at least "name" field, and potential "pic" field as well.
	 * @returns ServiceProxyResponse
	 */ 
	sysSendMessage(toProfileIds: Array<any>, contentJson: Object, fromJson: Object): {
		status: number;
		data: {
		};
	};

}