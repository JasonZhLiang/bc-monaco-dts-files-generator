/// <reference no-default-lib="true"/>

interface MatchMakingServiceProxy {
	/**
	 * Read player match making data.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	read(): ServiceProxyResponse;

	/**
	 * Sets player match rating.
	 * 
	 * @param  {long} playerRating The new player rating.
	 * @returns ServiceProxyResponse
	 */ 
	setPlayerRating(playerRating: long): ServiceProxyResponse;

	/**
	 * Increments player match rating.
	 * 
	 * @param  {long} playerRating An increment amount.
	 * @returns ServiceProxyResponse
	 */ 
	incrementPlayerRating(playerRating: long): ServiceProxyResponse;

	/**
	 * Decrements player match rating.
	 * 
	 * @param  {long} playerRating A decrement amount.
	 * @returns ServiceProxyResponse
	 */ 
	decrementPlayerRating(playerRating: long): ServiceProxyResponse;

	/**
	 * Resets player match rating.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	resetPlayerRating(): ServiceProxyResponse;

	/**
	 * Turns player shield off.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	turnShieldOff(): ServiceProxyResponse;

	/**
	 * Turns player shield on.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	turnShieldOn(): ServiceProxyResponse;

	/**
	 * Turns player shield on for specified minutes.
	 * 
	 * @param  {long} minutes A number of minutes to turn the shield on for.
	 * @returns ServiceProxyResponse
	 */ 
	turnShieldOnFor(minutes: long): ServiceProxyResponse;

	/**
	 * Retrieves shield expiry time.
	 * 
	 * @param  {string} playerId The player id or use null to retrieve for the current player.
	 * @returns ServiceProxyResponse
	 */ 
	getShieldExpiry(playerId: string): ServiceProxyResponse;

	/**
	 * Finds one or more match candidates.
	 * 
	 * @param  {long} rangeDelta How close an opponents rating must be to yours.
	 * @param  {long} numMatches The maximum number of matches to return.
	 * @returns ServiceProxyResponse
	 */ 
	findPlayers(rangeDelta: long, numMatches: long): ServiceProxyResponse;

	/**
	 * Finds one or more match candidates.
	 * 
	 * @param  {long} rangeDelta How close an opponents rating must be to yours.
	 * @param  {long} numMatches The maximum number of matches to return.
	 * @param  {nativeObject} attributes Attributes match criteria.
	 * @returns ServiceProxyResponse
	 */ 
	findPlayersWithAttributes(rangeDelta: long, numMatches: long, attributes: nativeObject): ServiceProxyResponse;

	/**
	 * Finds one or more match candidates with script filter.
	 * 
	 * @param  {long} rangeDelta How close an opponents rating must be to yours.
	 * @param  {long} numMatches The maximum number of matches to return.
	 * @returns ServiceProxyResponse
	 */ 
	findPlayersUsingFilter(rangeDelta: long, numMatches: long): ServiceProxyResponse;

	/**
	 * Finds one or more match candidates with provided script filter and player rating override.
	 * 
	 * @param  {long} rangeDelta How close an opponents rating must be to yours.
	 * @param  {long} numMatches The maximum number of matches to return.
	 * @param  {long} playerRating Player rating override.
	 * @param  {string} scriptName The name of filter script.
	 * @param  {nativeObject} extraParms Parameters to be passed to the filter.
	 * @returns ServiceProxyResponse
	 */ 
	findPlayersUsingScript(rangeDelta: long, numMatches: long, playerRating: long, scriptName: string, extraParms: nativeObject): ServiceProxyResponse;

	/**
	 * Finds one or more match candidates with script filter.
	 * 
	 * @param  {long} rangeDelta How close an opponents rating must be to yours.
	 * @param  {long} numMatches The maximum number of matches to return.
	 * @param  {nativeObject} attributes Attributes match criteria.
	 * @returns ServiceProxyResponse
	 */ 
	findPlayersWithAttributesUsingFilter(rangeDelta: long, numMatches: long, attributes: nativeObject): ServiceProxyResponse;

	/**
	 * Finds one or more match candidates with provided script filter and player rating override.
	 * 
	 * @param  {long} rangeDelta How close an opponents rating must be to yours.
	 * @param  {long} numMatches The maximum number of matches to return.
	 * @param  {nativeObject} attributes Attributes match criteria.
	 * @param  {long} playerRating Player rating override.
	 * @param  {string} scriptName The name of filter script.
	 * @param  {nativeObject} extraParms Parameters to be passed to the filter.
	 * @returns ServiceProxyResponse
	 */ 
	findPlayersWithAttributesUsingScript(rangeDelta: long, numMatches: long, attributes: nativeObject, playerRating: long, scriptName: string, extraParms: nativeObject): ServiceProxyResponse;

	/**
	 * Enables match making for player.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	enableMatchmaking(): ServiceProxyResponse;

	/**
	 * Disables match making for player.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	disableMatchmaking(): ServiceProxyResponse;

	/**
	 * Increment shield on for 'X' minutes.
	 * 
	 * @param  {long} minutes Number of minutes to increment the shield on for.
	 * @returns ServiceProxyResponse
	 */ 
	incrementShieldOnFor(minutes: long): ServiceProxyResponse;
}