/// <reference no-default-lib="true"/>

interface PlaybackStreamServiceProxy {
	/**
	 * Start a playback stream.
	 * 
	 * @param  {string} targetPlayerId The player to start a stream with.
	 * @param  {boolean} includeSharedData Whether to include shared data in the stream.
	 * @returns ServiceProxyResponse
	 */ 
	startStream(targetPlayerId: string, includeSharedData: boolean): {
		status: number;
		data: {
		    playbackStreamId: string;
		    initiatingPlayerId: string;
		    targetPlayerId: string;
		    status: string;
		    summary: {
		    };
		    initialSharedData: {
		        entities: Array<any>;
		        statistics: Record<string, any>;
		    };
		    events: Array<any>;
		    createdAt: number;
		    updatedAt: number;
		};
	};


	/**
	 * Read a playback stream.
	 * 
	 * @param  {string} playbackStreamId Identifies the stream to read.
	 * @returns ServiceProxyResponse
	 */ 
	readStream(playbackStreamId: string): {
		data: {
		    playbackStreamId: string;
		    initiatingPlayerId: string;
		    targetPlayerId: string;
		    status: string;
		    summary: {
		        SUMMARY: string;
		        POINTS: number;
		    };
		    initialSharedData: {
		        entities: Array<any>;
		        statistics: Record<string, any>;
		    };
		    events: Array<{
		        MOVE: string;
		        EVENT: string;
		    }>;
		    expiryTime: any | null;
		    createdAt: number;
		    updatedAt: number;
		};
		status: number;
	};


	/**
	 * End a playback stream.
	 * 
	 * @param  {string} playbackStreamId Identifies the stream to end.
	 * @returns ServiceProxyResponse
	 */ 
	endStream(playbackStreamId: string): {
		status: number;
		data: any | null;
	};


	/**
	 * Delete a playback stream.
	 * 
	 * @param  {string} playbackStreamId Identifies the stream to delete.
	 * @returns ServiceProxyResponse
	 */ 
	deleteStream(playbackStreamId: string): {
		status: number;
		data: any | null;
	};


	/**
	 * Get recent streams for initiating player, optional parameter: initiatingPlayerId.
	 * 
	 * @param  {string} initiatingPlayerId The player that started the stream.
	 * @param  {number} maxNumStreams The max number of stream to return in the response.
	 * @returns ServiceProxyResponse
	 */ 
	getRecentStreamsForInitiatingPlayer(initiatingPlayerId: string, maxNumStreams: number): {
		data: {
		    streams: Array<{
		        playbackStreamId: string;
		        gameId: string;
		        initiatingPlayerId: string;
		        targetPlayerId: string;
		        status: string;
		        summary: Record<string, any>;
		        expiryTime: any | null;
		        createdAt: number;
		        updatedAt: number;
		    }>;
		};
		status: number;
	};


	/**
	 * Get recent streams for target player, optional parameter: targetPlayerId.
	 * 
	 * @param  {string} targetPlayerId The player that received the stream.
	 * @param  {number} maxNumStreams The max number of stream to return in the response.
	 * @returns ServiceProxyResponse
	 */ 
	getRecentStreamsForTargetPlayer(targetPlayerId: string, maxNumStreams: number): {
		data: {
		    streams: Array<{
		        playbackStreamId: string;
		        gameId: string;
		        initiatingPlayerId: string;
		        targetPlayerId: string;
		        status: string;
		        summary: Record<string, any>;
		        expiryTime: any | null;
		        createdAt: number;
		        updatedAt: number;
		    }>;
		};
		status: number;
	};


	/**
	 * Add event to stream.
	 * 
	 * @param  {string} playbackStreamId Identifies the stream to read.
	 * @param  {Object} eventData Describes the event.
	 * @param  {Object} summary Current summary data as of this event.
	 * @returns ServiceProxyResponse
	 */ 
	addEvent(playbackStreamId: string, eventData: Object, summary: Object): {
		data: any | null;
		status: number;
	};


	/**
	 * Start a playback stream.
	 * 
	 * @param  {string} profileId The player starting the stream.
	 * @param  {string} targetProfileId The player to start a stream with.
	 * @param  {boolean} includeSharedData Whether to include shared data in the stream.
	 * @returns ServiceProxyResponse
	 */ 
	sysStartStream(profileId: string, targetProfileId: string, includeSharedData: boolean): {
		status: number;
		data: {
		    playbackStreamId: string;
		    initiatingPlayerId: string;
		    targetPlayerId: string;
		    status: string;
		    summary: {
		    };
		    initialSharedData: {
		        entities: Array<any>;
		        statistics: Record<string, any>;
		    };
		    events: Array<any>;
		    createdAt: number;
		    updatedAt: number;
		};
	};


	/**
	 * Read a playback stream.
	 * 
	 * @param  {string} playbackStreamId Identifies the stream to read.
	 * @returns ServiceProxyResponse
	 */ 
	sysReadStream(playbackStreamId: string): {
		data: {
		    playbackStreamId: string;
		    initiatingPlayerId: string;
		    targetPlayerId: string;
		    status: string;
		    summary: {
		        total: number;
		    };
		    initialSharedData: {
		        entities: Array<any>;
		        statistics: Record<string, any>;
		    };
		    events: Array<{
		        value: number;
		    }>;
		    expiryTime: any | null;
		    createdAt: number;
		    updatedAt: number;
		};
		status: number;
	};


	/**
	 * End a playback stream.
	 * 
	 * @param  {string} profileId The player ending the stream.
	 * @param  {string} playbackStreamId Identifies the stream to end.
	 * @returns ServiceProxyResponse
	 */ 
	sysEndStream(profileId: string, playbackStreamId: string): {
		status: number;
		data: any | null;
	};


	/**
	 * Delete a playback stream.
	 * 
	 * @param  {string} profileId The player deleting the stream.
	 * @param  {string} playbackStreamId Identifies the stream to delete.
	 * @returns ServiceProxyResponse
	 */ 
	sysDeleteStream(profileId: string, playbackStreamId: string): {
		status: number;
		data: any | null;
	};


	/**
	 * Add event to stream.
	 * 
	 * @param  {string} profileId The player adding an event.
	 * @param  {string} playbackStreamId Identifies the stream to read.
	 * @param  {Object} eventData Describes the event.
	 * @param  {Object} summary Current summary data as of this event.
	 * @returns ServiceProxyResponse
	 */ 
	sysAddEvent(profileId: string, playbackStreamId: string, eventData: Object, summary: Object): {
		status: number;
		data: any | null;
	};


	/**
	 * Protects a playback stream from being purged (but not deleted) for the given number of days (from now). If the number of days given is less than the normal purge interval days (from createdAt), the longer protection date is applied. Can only be called by users involved in the playback stream.
	 * 
	 * @param  {string} playbackStreamId Identifies the stream to protect.
	 * @param  {number} numDays The number of days the stream is to be protected (from now).
	 * @returns ServiceProxyResponse
	 */ 
	protectStreamUntil(playbackStreamId: string, numDays: number): {
		data: {
		    protectedUntil: string;
		};
		status: number;
	};


	/**
	 * Protects a playback stream from being purged (but not deleted) for the given number of days (from now). If the number of days given is less than the normal purge interval days (from createdAt), the longer protection date is applied.
	 * 
	 * @param  {string} playbackStreamId Identifies the stream to protect.
	 * @param  {number} numDays The number of days the stream is to be protected (from now).
	 * @returns ServiceProxyResponse
	 */ 
	sysProtectStreamUntil(playbackStreamId: string, numDays: number): {
		data: {
		    protectedUntil: string;
		};
		status: number;
	};

}