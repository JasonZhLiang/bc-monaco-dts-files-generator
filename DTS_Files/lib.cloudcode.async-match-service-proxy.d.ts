/// <reference no-default-lib="true"/>

interface AsyncMatchServiceProxy {
	/**
	 * Creates an instance of an asynchronous match and can send a notification message. Optional parameter: pushContent.
	 * 
	 * @param  {NativeArray} players List of objects identifying the opponent platform and id for this match.
	 * @param  {String} pushContent Optional push notification message to send to the other party. Refer to the Push Notification functions for the syntax required.
	 * @returns ServiceProxyResponse
	 */ 
	createMatch(players: Array<any>, pushContent: string): {
    status: number;
    data: 
    {
        gameId: string;
        ownerId: string;
        matchId: string;
        version: number;
        players: Array<
        {
            playerId: string;
            playerName: string;
            pictureUrl: any | null;
            summaryFriendData: any | null;
        }>;
        status: 
        {
            status: string;
            currentPlayer: string;
        };
        summary: any | null;
        createdAt: number;
        updatedAt: number;
    };
};

	/**
	 * Creates an instance of an asynchronous match and applies the given initial turn. This call can send a notification message. Optional parameter: pushContent.
	 * 
	 * @param  {NativeArray} players List of objects identifying the opponent platform and id for this match.
	 * @param  {NativeObject} matchState JSON string blob provided by the caller.
	 * @param  {String} pushContent Optional push notification message to send to the other party. Refer to the Push Notification functions for the syntax required.
	 * @param  {String} currentPlayer Optionally, force the next player player to be a specific player.
	 * @param  {NativeObject} summary Optional JSON string defining what the other player will see as a summary of the game when listing their games.
	 * @returns ServiceProxyResponse
	 */ 
	createMatchWithInitialTurn(players: Array<any>, matchState: Object, pushContent: string, currentPlayer: string, summary: Object): {
    data: 
    {
        createdAt: number;
        gameId: string;
        matchId: string;
        ownerId: string;
        players: Array<
        {
            pictureUrl: any | null;
            playerId: string;
            playerName: string;
        }>;
        status: 
        {
            currentPlayer: string;
            status: string;
        };
        summary: 
        {
            map: string;
        };
        updatedAt: number;
        version: number;
    };
    status: number;
};

	/**
	 * Returns the current state of the given match.
	 * 
	 * @param  {String} ownerId The match owner id.
	 * @param  {String} matchId The match id.
	 * @returns ServiceProxyResponse
	 */ 
	readMatch(ownerId: string, matchId: string): {
    status: number;
    data: 
    {
        gameId: string;
        ownerId: string;
        matchId: string;
        version: number;
        players: Array<
        {
            playerId: string;
            playerName: string;
            pictureUrl: any | null;
            summaryFriendData: any | null;
        }>;
        status: 
        {
            status: string;
            currentPlayer: string;
        };
        summary: any | null;
        statistics: 
        {
        };
        matchState: 
        {
            testKey: string;
        };
        createdAt: number;
        updatedAt: number;
    };
};

	/**
	 * Submits a turn for the given match. This call can send a notification message. Optional parameter: pushContent.
	 * 
	 * @param  {String} ownerId The match owner id.
	 * @param  {String} matchId The match id.
	 * @param  {BigInteger} version Game state version to ensure turns are submitted once and in order.
	 * @param  {NativeObject} matchState JSON object provided by the caller.
	 * @param  {String} pushContent Optional push notification message to send to the other party. Refer to the Push Notification functions for the syntax required.
	 * @param  {String} currentPlayer Optionally, force the next player to be a specific player.
	 * @param  {NativeObject} summary Optional JSON object defining what the other player will see as a summary of the game when listing their games.
	 * @param  {NativeObject} statistics Optional JSON object provided by the caller.
	 * @returns ServiceProxyResponse
	 */ 
	submitTurn(ownerId: string, matchId: string, version: number, matchState: Object, pushContent: string, currentPlayer: string, summary: Object, statistics: Object): {
    data: 
    {
        createdAt: number;
        gameId: string;
        matchId: string;
        ownerId: string;
        players: Array<
        {
            pictureUrl: any | null;
            playerId: string;
            playerName: string;
            summaryFriendData: any | null;
        }>;
        status: 
        {
            currentPlayer: string;
            status: string;
        };
        summary: 
        {
            map: string;
        };
        updatedAt: number;
        version: number;
    };
    status: number;
};

	/**
	 * Allows the current player (only) to update Summary data without having to submit a whole turn. This call can send a notification message. Optional parameter: pushContent.
	 * 
	 * @param  {String} ownerId The match owner id.
	 * @param  {String} matchId The match id.
	 * @param  {BigInteger} version Game state version to ensure turns are submitted once and in order.
	 * @param  {NativeObject} summary JSON object provided by the caller that other players will see as a summary of the game when listing their games.
	 * @param  {String} pushContent Optional push notification message to send to the other party. Refer to the Push Notification functions for the syntax required.
	 * @returns ServiceProxyResponse
	 */ 
	updateMatchSummaryData(ownerId: string, matchId: string, version: number, summary: Object, pushContent: string): {
    status: number;
    data: 
    {
        gameId: string;
        ownerId: string;
        matchId: string;
        version: number;
        players: Array<
        {
            playerId: string;
            playerName: string;
            pictureUrl: any | null;
            summaryFriendData: any | null;
        }>;
        status: 
        {
            status: string;
            currentPlayer: string;
        };
        summary: 
        {
            resources: number;
        };
        createdAt: number;
        updatedAt: number;
    };
};

	/**
	 * Marks the given match as complete.
	 * 
	 * @param  {String} ownerId The match owner id.
	 * @param  {String} matchId The match id.
	 * @returns ServiceProxyResponse
	 */ 
	completeMatch(ownerId: string, matchId: string): {
    status: number;
    data: any | null;
};

	/**
	 * Marks the given match as complete. This call can send a notification message.
	 * 
	 * @param  {String} ownerId The match owner id.
	 * @param  {String} matchId The match id.
	 * @param  {String} pushContent Optional push notification message to send to the other party. Refer to the Push Notification functions for the syntax required.
	 * @param  {NativeObject} summary Optional JSON object defining what the other player will see as a summary of the game when listing their games.
	 * @returns ServiceProxyResponse
	 */ 
	completeMatchWithSummaryData(ownerId: string, matchId: string, pushContent: string, summary: Object): {
    status: number;
    data: any | null;
};

	/**
	 * Returns the match history of the given match.
	 * 
	 * @param  {String} ownerId The match owner id.
	 * @param  {String} matchId The match id.
	 * @returns ServiceProxyResponse
	 */ 
	readMatchHistory(ownerId: string, matchId: string): {
    status: number;
    data: 
    {
        gameId: string;
        ownerId: string;
        matchId: string;
        turns: Array<
        {
            playerId: string;
            matchState: 
            {
                color: string;
            };
            createdAt: number;
        }>;
    };
};

	/**
	 * Returns all matches that are NOT in a COMPLETE state for which the player is involved.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	findMatches(): {
    status: number;
    data: 
    {
        results: Array<
        {
            gameId: string;
            ownerId: string;
            matchId: string;
            version: number;
            players: Array<
            {
                playerId: string;
                playerName: string;
                pictureUrl: any | null;
                summaryFriendData: any | null;
            }>;
            status: 
            {
                status: string;
                currentPlayer: string;
            };
            summary: any | null;
            createdAt: number;
            updatedAt: number;
        }>;
    };
};

	/**
	 * Returns all matches that are in a COMPLETE state for which the player is involved.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	findCompleteMatches(): {
    status: number;
    data: 
    {
        results: Array<
        {
            gameId: string;
            ownerId: string;
            matchId: string;
            version: number;
            players: Array<
            {
                playerId: string;
                playerName: string;
                pictureUrl: any | null;
                summaryFriendData: any | null;
            }>;
            status: 
            {
                status: string;
                currentPlayer: string;
            };
            summary: any | null;
            createdAt: number;
            updatedAt: number;
        }>;
    };
};

	/**
	 * Marks the given match as abandoned. 
	 * 
	 * @param  {String} ownerId The match owner id.
	 * @param  {String} matchId The match id.
	 * @returns ServiceProxyResponse
	 */ 
	abandonMatch(ownerId: string, matchId: string): {
    status: number;
    data: any | null;
};

	/**
	 * Marks the given match as abandoned. This call can send a notification message.
	 * 
	 * @param  {String} ownerId The match owner id.
	 * @param  {String} matchId The match id.
	 * @param  {String} pushContent Optional push notification message to send to the other party. Refer to the Push Notification functions for the syntax required.
	 * @param  {NativeObject} summary Optional JSON object defining what the other player will see as a summary of the game when listing their games.
	 * @returns ServiceProxyResponse
	 */ 
	abandonMatchWithSummaryData(ownerId: string, matchId: string, pushContent: string, summary: Object): {
    status: number;
    data: any | null;
};

	/**
	 * Removes the match and match history from the server. DEBUG ONLY, in production it is recommended the user leave it as completed.
	 * 
	 * @param  {String} ownerId The match owner id.
	 * @param  {String} matchId The match id.
	 * @returns ServiceProxyResponse
	 */ 
	deleteMatch(ownerId: string, matchId: string): {
    status: number;
    data: any | null;
};

	/**
	 * Allows the current player to overwrite the matchState and the statistics, without completing the turn for the given match (does not add to match history).
	 * 
	 * @param  {String} ownerId The match owner id.
	 * @param  {String} matchId The match id.
	 * @param  {Long} version Game state version being updated, to ensure data integrity.
	 * @param  {NativeObject} matchState JSON object provided by the caller. Overwrites the 'matchState'.
	 * @param  {NativeObject} statistics Optional JSON object provided by the caller. Overwrites the 'statistics'.
	 * @returns ServiceProxyResponse
	 */ 
	updateMatchStateCurrentTurn(ownerId: string, matchId: string, version: number, matchState: Object, statistics: Object): {
    data: 
    {
        gameId: string;
        ownerId: string;
        matchId: string;
        version: number;
        status: 
        {
            status: string;
            currentPlayer: string;
        };
        summary: 
        {
            Address: string;
        };
        createdAt: number;
        updatedAt: number;
    };
    status: number;
};
}