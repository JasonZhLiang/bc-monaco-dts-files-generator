/// <reference no-default-lib="true"/>

interface OnewayMatchServiceProxy {
	/**
	 * Start a oneway match.
	 * 
	 * @param  {string} playerId The player to start a match with.
	 * @param  {long} rangeDelta The player rating range delta required for the match to start. If otherPlayerId has too high or low of a rating compared to the current player and range delta, a MATCH_RANGE_ERROR (40334) will be returned.
	 * @returns ServiceProxyResponse
	 */ 
	startMatch(playerId: string, rangeDelta: long): ServiceProxyResponse;

	/**
	 * Cancel a oneway match.
	 * 
	 * @param  {string} playbackStreamId The playback stream id returned in the start match.
	 * @returns ServiceProxyResponse
	 */ 
	cancelMatch(playbackStreamId: string): ServiceProxyResponse;

	/**
	 * Complete a oneway match.
	 * 
	 * @param  {string} playbackStreamId The playback stream id returned in the start match.
	 * @returns ServiceProxyResponse
	 */ 
	completeMatch(playbackStreamId: string): ServiceProxyResponse;
}