/// <reference no-default-lib="true"/>

interface AsyncMatchServiceProxy {
	/**
	 * Creates an instance of an asynchronous match and can send a notification message. Optional parameter: pushContent.
	 * 
	 * @param  {nativeArray} players List of objects identifying the opponent platform and id for this match.
	 * @param  {string} pushContent Optional push notification message to send to the other party. Refer to the Push Notification functions for the syntax required.
	 * @returns ServiceProxyResponse
	 */ 
	createMatch(players: nativeArray, pushContent: string): ServiceProxyResponse;

	/**
	 * Creates an instance of an asynchronous match and applies the given initial turn. This call can send a notification message. Optional parameter: pushContent.
	 * 
	 * @param  {nativeArray} players List of objects identifying the opponent platform and id for this match.
	 * @param  {nativeObject} matchState JSON string blob provided by the caller.
	 * @param  {string} pushContent Optional push notification message to send to the other party. Refer to the Push Notification functions for the syntax required.
	 * @param  {string} currentPlayer Optionally, force the next player player to be a specific player.
	 * @param  {nativeObject} summary Optional JSON string defining what the other player will see as a summary of the game when listing their games.
	 * @returns ServiceProxyResponse
	 */ 
	createMatchWithInitialTurn(players: nativeArray, matchState: nativeObject, pushContent: string, currentPlayer: string, summary: nativeObject): ServiceProxyResponse;

	/**
	 * Returns the current state of the given match.
	 * 
	 * @param  {string} ownerId The match owner id.
	 * @param  {string} matchId The match id.
	 * @returns ServiceProxyResponse
	 */ 
	readMatch(ownerId: string, matchId: string): ServiceProxyResponse;

	/**
	 * Submits a turn for the given match. This call can send a notification message. Optional parameter: pushContent.
	 * 
	 * @param  {string} ownerId The match owner id.
	 * @param  {string} matchId The match id.
	 * @param  {bigInteger} version Game state version to ensure turns are submitted once and in order.
	 * @param  {nativeObject} matchState JSON string blob provided by the caller.
	 * @param  {string} pushContent Optional push notification message to send to the other party. Refer to the Push Notification functions for the syntax required.
	 * @param  {string} currentPlayer Optionally, force the next player to be a specific player.
	 * @param  {nativeObject} summary Optional JSON string defining what the other player will see as a summary of the game when listing their games.
	 * @param  {nativeObject} statistics Optional JSON string blob provided by the caller.
	 * @returns ServiceProxyResponse
	 */ 
	submitTurn(ownerId: string, matchId: string, version: bigInteger, matchState: nativeObject, pushContent: string, currentPlayer: string, summary: nativeObject, statistics: nativeObject): ServiceProxyResponse;

	/**
	 * Allows the current player (only) to update Summary data without having to submit a whole turn. This call can send a notification message. Optional parameter: pushContent.
	 * 
	 * @param  {string} ownerId The match owner id.
	 * @param  {string} matchId The match id.
	 * @param  {bigInteger} version Game state version to ensure turns are submitted once and in order.
	 * @param  {nativeObject} summary JSON string provided by the caller that other players will see as a summary of the game when listing their games.
	 * @param  {string} pushContent Optional push notification message to send to the other party. Refer to the Push Notification functions for the syntax required.
	 * @returns ServiceProxyResponse
	 */ 
	updateMatchSummaryData(ownerId: string, matchId: string, version: bigInteger, summary: nativeObject, pushContent: string): ServiceProxyResponse;

	/**
	 * Marks the given match as complete.
	 * 
	 * @param  {string} ownerId The match owner id.
	 * @param  {string} matchId The match id.
	 * @returns ServiceProxyResponse
	 */ 
	completeMatch(ownerId: string, matchId: string): ServiceProxyResponse;

	/**
	 * Marks the given match as complete. This call can send a notification message.
	 * 
	 * @param  {string} ownerId The match owner id.
	 * @param  {string} matchId The match id.
	 * @param  {string} pushContent Optional push notification message to send to the other party. Refer to the Push Notification functions for the syntax required.
	 * @param  {nativeObject} summary Optional JSON string defining what the other player will see as a summary of the game when listing their games.
	 * @returns ServiceProxyResponse
	 */ 
	completeMatchWithSummaryData(ownerId: string, matchId: string, pushContent: string, summary: nativeObject): ServiceProxyResponse;

	/**
	 * Returns the match history of the given match.
	 * 
	 * @param  {string} ownerId The match owner id.
	 * @param  {string} matchId The match id.
	 * @returns ServiceProxyResponse
	 */ 
	readMatchHistory(ownerId: string, matchId: string): ServiceProxyResponse;

	/**
	 * Returns all matches that are NOT in a COMPLETE state for which the player is involved.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	findMatches(): ServiceProxyResponse;

	/**
	 * Returns all matches that are in a COMPLETE state for which the player is involved.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	findCompleteMatches(): ServiceProxyResponse;

	/**
	 * Marks the given match as abandoned. 
	 * 
	 * @param  {string} ownerId The match owner id.
	 * @param  {string} matchId The match id.
	 * @returns ServiceProxyResponse
	 */ 
	abandonMatch(ownerId: string, matchId: string): ServiceProxyResponse;

	/**
	 * Marks the given match as abandoned. This call can send a notification message.
	 * 
	 * @param  {string} ownerId The match owner id.
	 * @param  {string} matchId The match id.
	 * @param  {string} pushContent Optional push notification message to send to the other party. Refer to the Push Notification functions for the syntax required.
	 * @param  {nativeObject} summary Optional JSON string defining what the other player will see as a summary of the game when listing their games.
	 * @returns ServiceProxyResponse
	 */ 
	abandonMatchWithSummaryData(ownerId: string, matchId: string, pushContent: string, summary: nativeObject): ServiceProxyResponse;

	/**
	 * Removes the match and match history from the server. DEBUG ONLY, in production it is recommended the user leave it as completed.
	 * 
	 * @param  {string} ownerId The match owner id.
	 * @param  {string} matchId The match id.
	 * @returns ServiceProxyResponse
	 */ 
	deleteMatch(ownerId: string, matchId: string): ServiceProxyResponse;
}