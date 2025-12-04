/// <reference no-default-lib="true"/>

interface ChatServiceProxy {
	/**
	 * Gets the channelId for the given <channelType> and <channelSubId>. Channel type must be one of "gl" or "gr".
	 * 
	 * @param  {String} channelType The channel type - ‘gl’ for global, ‘gr’ for groups, ‘dy’ for dynamic.
	 * @param  {String} channelSubId The type-specific sub id.
	 * @returns ServiceProxyResponse
	 */ 
	getChannelId(channelType: string, channelSubId: string): {
    status: number;
    data: 
    {
        channelId: string;
    };
};

	/**
	 * Gets a list of the channels of type <channelType> that the user has access to. Channel type must be one of "gl", "gr" or "all".
	 * 
	 * @param  {String} channelType Specifies the type of channels subscriptions to return. If empty string, returns channels of all types.
	 * @returns ServiceProxyResponse
	 */ 
	getSubscribedChannels(channelType: string): {
    data: 
    {
        channels: Array<
        {
            id: string;
            type: string;
            code: string;
            name: string;
            desc: string;
            stats: 
            {
                messageCount: number;
            };
        }>;
    };
    status: number;
};

	/**
	 * Gets description info and activity stats for channel <channelId>. Note that numMsgs and listeners only returned for non-global groups. Only callable for channels the user is a member of.
	 * 
	 * @param  {String} channelId The id of the channel.
	 * @returns ServiceProxyResponse
	 */ 
	getChannelInfo(channelId: string): {
    data: 
    {
        id: string;
        type: string;
        code: string;
        name: string;
        desc: string;
        stats: 
        {
            messageCount: number;
        };
    };
    status: number;
};

	/**
	 * Registers a listener for incoming events from <channelId>. Also returns a list of <maxReturn> recent messages from history.
	 * 
	 * @param  {String} channelId The id of the channel to connect to.
	 * @param  {Long} maxReturn The maximum number of recent messages to return from history.
	 * @returns ServiceProxyResponse
	 */ 
	channelConnect(channelId: string, maxReturn: number): {
    data: 
    {
        messages: Array<
        {
            date: number;
            ver: number;
            msgId: string;
            from: 
            {
                id: string;
                name: string;
                pic: any | null;
            };
            chId: string;
            content: 
            {
                text: string;
                rich: 
                {
                    SELL_ITEM: 
                    {
                        ITEM_TYPE: string;
                        ITEM_ID: string;
                        PRICE: string;
                        CURRENCY: string;
                    };
                };
            };
        }>;
    };
    status: number;
};

	/**
	 * Unregisters a listener for incoming events from <channelId>.
	 * 
	 * @param  {String} channelId The id of the channel to connect to.
	 * @returns ServiceProxyResponse
	 */ 
	channelDisconnect(channelId: string): {
    status: number;
    data: 
    {
    };
};

	/**
	 * Gets a populated chat object (normally for editing.)
	 * 
	 * @param  {String} channelId The channel id of the message.
	 * @param  {String} msgId The message id.
	 * @returns ServiceProxyResponse
	 */ 
	getChatMessage(channelId: string, msgId: string): {
    data: 
    {
        date: number;
        ver: number;
        msgId: string;
        from: 
        {
            id: string;
            name: string;
            pic: any | null;
        };
        chId: string;
        content: 
        {
            text: string;
        };
    };
    status: number;
};

	/**
	 * Get a list of <maxReturn> messages from history of channel <channelId>.
	 * 
	 * @param  {String} channelId The chat channel to retrieve messages from.
	 * @param  {Long} maxReturn The maximum number of messages to return.
	 * @returns ServiceProxyResponse
	 */ 
	getRecentChatMessages(channelId: string, maxReturn: number): {
    data: 
    {
        messages: Array<
        {
            date: number;
            ver: number;
            msgId: string;
            from: 
            {
                id: string;
                name: string;
                pic: any | null;
            };
            chId: string;
            content: 
            {
                text: string;
                rich: 
                {
                    SELL_ITEM: 
                    {
                        ITEM_TYPE: string;
                        ITEM_ID: string;
                        PRICE: string;
                        CURRENCY: string;
                    };
                };
            };
        }>;
    };
    status: number;
};

	/**
	 * Send a potentially rich chat message. <recordInHistory> is optional and true by default.
	 * 
	 * @param  {String} channelId The chat channel to post to.
	 * @param  {NativeObject} content The json content of the message. Split into chatMessage and jsonRich for plain text and json content respectively.
	 * @param  {Boolean} recordInHistory Should the message be recorded in history? Using 'false' is useful for sending non-conversational messages, like when users join a room, etc.
	 * @returns ServiceProxyResponse
	 */ 
	postChatMessage(channelId: string, content: Object, recordInHistory: boolean): {
    status: number;
    data: 
    {
        msgId: string;
    };
};

	/**
	 * Send simple-text chat message. <recordInHistory> is optional and true by default.
	 * 
	 * @param  {String} channelId The chat channel to post to.
	 * @param  {String} text Simple string content for the message. Will be placed inside of a `text` field of the `content` section.
	 * @param  {Boolean} recordInHistory Should the message be recorded in history? Using 'false' is useful for sending non-conversational messages, like when users join a room, etc.
	 * @returns ServiceProxyResponse
	 */ 
	postChatMessageSimple(channelId: string, text: string, recordInHistory: boolean): {
    status: number;
    data: 
    {
        msgId: string;
    };
};

	/**
	 * Update a chat message. <version> must match the latest or pass -1 to bypass version check.
	 * 
	 * @param  {String} channelId The channel id of the message.
	 * @param  {String} msgId The message id.
	 * @param  {Long} version The version of the message. Pass it -1 to bypass version checking.
	 * @param  {NativeObject} content The replacement content for the message.
	 * @returns ServiceProxyResponse
	 */ 
	updateChatMessage(channelId: string, msgId: string, version: number, content: Object): {
    status: number;
    data: 
    {
    };
};

	/**
	 * Delete a chat message. <version> must match the latest or pass -1 to bypass version check.
	 * 
	 * @param  {String} channelId The channel id of the message.
	 * @param  {String} msgId The message id.
	 * @param  {Long} version The version of the message. Pass it -1 to bypass version checking.
	 * @returns ServiceProxyResponse
	 */ 
	deleteChatMessage(channelId: string, msgId: string, version: number): {
    status: number;
    data: 
    {
        deleted: number;
    };
};

	/**
	 * Initializes a dynamic chat channel. Returns the channelId. Channel type must be "dy".
	 * 
	 * @param  {String} channelType The channel type - currently only 'dy' is supported.
	 * @param  {String} channelSubId An app-defined channel sub id. Only letters, numbers, dashes, and underscores are allowed.
	 * @returns ServiceProxyResponse
	 */ 
	sysCreateChannel(channelType: string, channelSubId: string): {
    data: 
    {
        channelId: string;
    };
    status: number;
};

	/**
	 * Deletes a dynamic chat channel. Channel type must be "dy". This will delete the chat history as well.
	 * 
	 * @param  {String} channelId The channel id - must be of type 'dy'.
	 * @returns ServiceProxyResponse
	 */ 
	sysDeleteChannel(channelId: string): ServiceProxyResponse;

	/**
	 * Gets description info and activity stats for channel <channelId>. Note that numMsgs and listeners only returned for non-global groups. Only callable for channels the user is a member of.
	 * 
	 * @param  {String} channelId The id of the channel.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetChannelInfo(channelId: string): {
    status: number;
    data: 
    {
        id: string;
        type: string;
        code: string;
        name: string;
        desc: string;
        stats: 
        {
            messageCount: number;
        };
    };
};

	/**
	 * Get a list of <maxReturn> messages from history of channel <channelId>.
	 * 
	 * @param  {String} channelId The chat channel to retrieve messages from.
	 * @param  {Long} maxReturn The maximum number of messages to return.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetRecentChatMessages(channelId: string, maxReturn: number): {
    status: number;
    data: 
    {
        messages: Array<
        {
            date: number;
            ver: number;
            msgId: string;
            from: 
            {
                id: string;
                name: string;
                pic: any | null;
            };
            chId: string;
            content: 
            {
                text: string;
            };
        }>;
    };
};

	/**
	 * Gets a populated chat object (normally for editing.)
	 * 
	 * @param  {String} channelId The channel id of the message.
	 * @param  {String} msgId The message id.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetChatMessage(channelId: string, msgId: string): {
    status: number;
    data: 
    {
        date: number;
        ver: number;
        msgId: string;
        from: 
        {
            id: string;
            name: string;
            pic: any | null;
        };
        chId: string;
        content: 
        {
            text: string;
            rich: 
            {
                somethingCustom: string;
            };
        };
    };
};

	/**
	 * Send a potentially rich chat message. <recordInHistory> is optional and true by default.
	 * 
	 * @param  {String} channelId The id of the channel to post to.
	 * @param  {NativeObject} content The json content of the message.
	 * @param  {Boolean} recordInHistory Should the message be recorded in history? Using 'false' is useful for sending non-conversational messages, like when users join a room, etc.
	 * @param  {NativeObject} from Details of the user posting the message.
	 * @returns ServiceProxyResponse
	 */ 
	sysPostChatMessage(channelId: string, content: Object, recordInHistory: boolean, from: Object): {
    status: number;
    data: 
    {
        msgId: string;
    };
};

	/**
	 * Send a simple-text message. <recordInHistory> is optional and true by default. <fromJson> is optional and can contain a "name" and/or "pic" entry.
	 * 
	 * @param  {String} channelId The chat channel to post to.
	 * @param  {String} text A simple message.
	 * @param  {Boolean} recordInHistory Should the message be recorded in history? Using 'false' is useful for sending non-conversational messages, like when users join a room, etc.
	 * @param  {NativeObject} from Details of the user posting the message.
	 * @returns ServiceProxyResponse
	 */ 
	sysPostChatMessageSimple(channelId: string, text: string, recordInHistory: boolean, from: Object): {
    status: number;
    data: 
    {
        msgId: string;
    };
};

	/**
	 * Update a chat message. <version> must match the latest or pass -1 to bypass version check.
	 * 
	 * @param  {String} channelId The channel id of the message.
	 * @param  {String} msgId The id of the message to update.
	 * @param  {Long} version The version of the message. Pass it -1 to bypass version checking.
	 * @param  {NativeObject} content The replacement content for the message.
	 * @returns ServiceProxyResponse
	 */ 
	sysUpdateChatMessage(channelId: string, msgId: string, version: number, content: Object): {
    status: number;
    data: 
    {
    };
};

	/**
	 * Delete a chat message. <version> must match the latest or pass -1 to bypass version check.
	 * 
	 * @param  {String} channelId The channel id of the message.
	 * @param  {String} msgId The id of the message to delete.
	 * @param  {Long} version The version of the message. Pass it -1 to bypass version checking.
	 * @returns ServiceProxyResponse
	 */ 
	sysDeleteChatMessage(channelId: string, msgId: string, version: number): {
    status: number;
    data: 
    {
        deleted: number;
    };
};
}