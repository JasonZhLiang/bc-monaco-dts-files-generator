/// <reference no-default-lib="true"/>

interface OnewayMatchServiceProxy {
	/**
	 * Start a oneway match.
	 * 
	 * @param  {string} playerId The player to start a match with.
	 * @param  {number} rangeDelta The player rating range delta required for the match to start. If otherPlayerId has too high or low of a rating compared to the current player and range delta, a MATCH_RANGE_ERROR (40334) will be returned.
	 * @returns ServiceProxyResponse
	 */ 
	startMatch(playerId: string, rangeDelta: number): {
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
		    expiryTime: number;
		    createdAt: number;
		    updatedAt: number;
		};
		status: number;
	};


	/**
	 * Cancel a oneway match.
	 * 
	 * @param  {string} playbackStreamId The playback stream id returned in the start match.
	 * @returns ServiceProxyResponse
	 */ 
	cancelMatch(playbackStreamId: string): {
		status: number;
		data: any | null;
	};


	/**
	 * Complete a oneway match.
	 * 
	 * @param  {string} playbackStreamId The playback stream id returned in the start match.
	 * @returns ServiceProxyResponse
	 */ 
	completeMatch(playbackStreamId: string): {
		status: number;
		data: any | null;
	};

}