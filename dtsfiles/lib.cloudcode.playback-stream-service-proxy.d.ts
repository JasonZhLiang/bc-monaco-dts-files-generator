/// <reference no-default-lib="true"/>

interface PlaybackStreamServiceProxy {
	/**
	 * Start a playback stream.
	 * 
	 * @param  {string} targetPlayerId The player to start a stream with.
	 * @param  {boolean} includeSharedData Whether to include shared data in the stream.
	 * @returns ServiceProxyResponse
	 */ 
	startStream(targetPlayerId: string, includeSharedData: boolean): ServiceProxyResponse;

	/**
	 * Read a playback stream.
	 * 
	 * @param  {string} playbackStreamId Identifies the stream to read.
	 * @returns ServiceProxyResponse
	 */ 
	readStream(playbackStreamId: string): ServiceProxyResponse;

	/**
	 * End a playback stream.
	 * 
	 * @param  {string} playbackStreamId Identifies the stream to end.
	 * @returns ServiceProxyResponse
	 */ 
	endStream(playbackStreamId: string): ServiceProxyResponse;

	/**
	 * Delete a playback stream.
	 * 
	 * @param  {string} playbackStreamId Identifies the stream to delete.
	 * @returns ServiceProxyResponse
	 */ 
	deleteStream(playbackStreamId: string): ServiceProxyResponse;

	/**
	 * Get recent streams for initiating player, optional parameter: initiatingPlayerId.
	 * 
	 * @param  {string} initiatingPlayerId The player that started the stream.
	 * @param  {long} maxNumStreams The max number of stream to return in the response.
	 * @returns ServiceProxyResponse
	 */ 
	getRecentStreamsForInitiatingPlayer(initiatingPlayerId: string, maxNumStreams: long): ServiceProxyResponse;

	/**
	 * Get recent streams for target player, optional parameter: targetPlayerId.
	 * 
	 * @param  {string} targetPlayerId The player that received the stream.
	 * @param  {long} maxNumStreams The max number of stream to return in the response.
	 * @returns ServiceProxyResponse
	 */ 
	getRecentStreamsForTargetPlayer(targetPlayerId: string, maxNumStreams: long): ServiceProxyResponse;

	/**
	 * Add event to stream.
	 * 
	 * @param  {string} playbackStreamId Identifies the stream to read.
	 * @param  {nativeObject} eventData Describes the event.
	 * @param  {nativeObject} summary Current summary data as of this event.
	 * @returns ServiceProxyResponse
	 */ 
	addEvent(playbackStreamId: string, eventData: nativeObject, summary: nativeObject): ServiceProxyResponse;
}