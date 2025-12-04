/// <reference no-default-lib="true"/>

interface MatchMakingServiceProxy {
	/**
	 * Read player match making data.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	read(): {
    status: number;
    data: 
    {
        lastMatch: number;
        matchAttackExpiry: number;
        matchEnabled: number;
        sharedAPIToken: any | null;
        shieldExpiry: number;
        playerRating: number;
        matchesPlayed: number;
    };
};

	/**
	 * Sets player match rating.
	 * 
	 * @param  {Long} playerRating The new player rating.
	 * @returns ServiceProxyResponse
	 */ 
	setPlayerRating(playerRating: number): {
    status: number;
    data: any | null;
};

	/**
	 * Increments player match rating.
	 * 
	 * @param  {Long} playerRating An increment amount.
	 * @returns ServiceProxyResponse
	 */ 
	incrementPlayerRating(playerRating: number): {
    status: number;
    data: any | null;
};

	/**
	 * Decrements player match rating.
	 * 
	 * @param  {Long} playerRating A decrement amount.
	 * @returns ServiceProxyResponse
	 */ 
	decrementPlayerRating(playerRating: number): {
    status: number;
    data: any | null;
};

	/**
	 * Resets player match rating.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	resetPlayerRating(): {
    status: number;
    data: any | null;
};

	/**
	 * Turns player shield off.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	turnShieldOff(): {
    status: number;
    data: any | null;
};

	/**
	 * Turns player shield on.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	turnShieldOn(): {
    status: number;
    data: any | null;
};

	/**
	 * Turns player shield on for specified minutes.
	 * 
	 * @param  {Long} minutes A number of minutes to turn the shield on for.
	 * @returns ServiceProxyResponse
	 */ 
	turnShieldOnFor(minutes: number): {
    status: number;
    data: any | null;
};

	/**
	 * Retrieves shield expiry time.
	 * 
	 * @param  {String} playerId The player id or use null to retrieve for the current player.
	 * @returns ServiceProxyResponse
	 */ 
	getShieldExpiry(playerId: string): {
    status: number;
    data: 
    {
        shieldExpiry: number;
    };
};

	/**
	 * Finds one or more match candidates.
	 * 
	 * @param  {Long} rangeDelta How close an opponents rating must be to yours.
	 * @param  {Long} numMatches The maximum number of matches to return.
	 * @returns ServiceProxyResponse
	 */ 
	findPlayers(rangeDelta: number, numMatches: number): {
    status: number;
    data: 
    {
        matchesFound: Array<
        {
            pictureUrl: any | null;
            playerName: string;
            playerId: string;
            playerRating: number;
            summaryFriendData: any | null;
        }>;
    };
};

	/**
	 * Finds one or more match candidates.
	 * 
	 * @param  {Long} rangeDelta How close an opponents rating must be to yours.
	 * @param  {Long} numMatches The maximum number of matches to return.
	 * @param  {NativeObject} attributes Attributes match criteria.
	 * @returns ServiceProxyResponse
	 */ 
	findPlayersWithAttributes(rangeDelta: number, numMatches: number, attributes: Object): {
    status: number;
    data: 
    {
        matchesFound: Array<
        {
            pictureUrl: any | null;
            playerName: string;
            playerId: string;
            playerRating: number;
            summaryFriendData: any | null;
        }>;
    };
};

	/**
	 * Finds one or more match candidates with script filter.
	 * 
	 * @param  {Long} rangeDelta How close an opponents rating must be to yours.
	 * @param  {Long} numMatches The maximum number of matches to return.
	 * @param  {NativeObject} extraParms Map of parameters to pass to the filter script.
	 * @returns ServiceProxyResponse
	 */ 
	findPlayersUsingFilter(rangeDelta: number, numMatches: number, extraParms: Object): {
    status: number;
    data: 
    {
        matchesFound: Array<
        {
            pictureUrl: any | null;
            playerName: string;
            playerId: string;
            playerRating: number;
            summaryFriendData: any | null;
        }>;
    };
};

	/**
	 * Finds one or more match candidates with provided script filter and player rating override.
	 * 
	 * @param  {Long} rangeDelta How close an opponents rating must be to yours.
	 * @param  {Long} numMatches The maximum number of matches to return.
	 * @param  {Long} playerRating Player rating override.
	 * @param  {String} scriptName The name of filter script.
	 * @param  {NativeObject} extraParms Parameters to be passed to the filter.
	 * @returns ServiceProxyResponse
	 */ 
	findPlayersUsingScript(rangeDelta: number, numMatches: number, playerRating: number, scriptName: string, extraParms: Object): {
    status: number;
    data: 
    {
        matchesFound: Array<
        {
            pictureUrl: any | null;
            playerName: string;
            playerId: string;
            playerRating: number;
            summaryFriendData: any | null;
        }>;
    };
};

	/**
	 * Finds one or more match candidates with script filter.
	 * 
	 * @param  {Long} rangeDelta How close an opponents rating must be to yours.
	 * @param  {Long} numMatches The maximum number of matches to return.
	 * @param  {NativeObject} attributes Attributes match criteria.
	 * @param  {NativeObject} extraParms Map of parameters to pass to the filter script.
	 * @returns ServiceProxyResponse
	 */ 
	findPlayersWithAttributesUsingFilter(rangeDelta: number, numMatches: number, attributes: Object, extraParms: Object): ServiceProxyResponse;

	/**
	 * Finds one or more match candidates with provided script filter and player rating override.
	 * 
	 * @param  {Long} rangeDelta How close an opponents rating must be to yours.
	 * @param  {Long} numMatches The maximum number of matches to return.
	 * @param  {NativeObject} attributes Attributes match criteria.
	 * @param  {Long} playerRating Player rating override.
	 * @param  {String} scriptName The name of filter script.
	 * @param  {NativeObject} extraParms Parameters to be passed to the filter.
	 * @returns ServiceProxyResponse
	 */ 
	findPlayersWithAttributesUsingScript(rangeDelta: number, numMatches: number, attributes: Object, playerRating: number, scriptName: string, extraParms: Object): {
    status: number;
    data: 
    {
        matchesFound: Array<
        {
            pictureUrl: any | null;
            playerName: string;
            playerId: string;
            playerRating: number;
            summaryFriendData: any | null;
        }>;
    };
};

	/**
	 * Enables match making for player.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	enableMatchmaking(): {
    status: number;
    data: any | null;
};

	/**
	 * Disables match making for player.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	disableMatchmaking(): {
    status: number;
    data: any | null;
};

	/**
	 * Increment shield on for 'X' minutes.
	 * 
	 * @param  {Long} minutes Number of minutes to increment the shield on for.
	 * @returns ServiceProxyResponse
	 */ 
	incrementShieldOnFor(minutes: number): {
    status: number;
    data: any | null;
};
}