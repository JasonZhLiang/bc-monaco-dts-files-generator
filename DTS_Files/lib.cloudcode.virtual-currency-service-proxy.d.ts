/// <reference no-default-lib="true"/>

interface VirtualCurrencyServiceProxy {
	/**
	 * Retrieve the user's currency account.  Optional parameters: vcId (if retrieving all currencies).
	 * 
	 * @param  {string} vcId The currency type to retrieve or null if all currency types are being requested.
	 * @returns ServiceProxyResponse
	 */ 
	getCurrency(vcId: string): {
		status: number;
		data: {
		    currencyMap: {
		        gems: {
		            purchased: number;
		            balance: number;
		            consumed: number;
		            awarded: number;
		            revoked: number;
		        };
		    };
		    parentCurrency: {
		        Master: {
		            credits: {
		                purchased: number;
		                balance: number;
		                consumed: number;
		                awarded: number;
		                revoked: number;
		            };
		        };
		    };
		    peerCurrency: {
		        gameLootPeer: {
		            tickets: {
		                purchased: number;
		                balance: number;
		                consumed: number;
		                awarded: number;
		                revoked: number;
		            };
		        };
		    };
		};
	};


	/**
	 * Retrieve the parent user's currency account.  Optional parameters: vcId (if retrieving all currencies).
	 * 
	 * @param  {string} vcId The currency type to retrieve or null if all currency types are being requested.
	 * @param  {string} levelName The name of the parent level.
	 * @returns ServiceProxyResponse
	 */ 
	getParentCurrency(vcId: string, levelName: string): {
		status: number;
		data: {
		    currencyMap: {
		        credits: {
		            consumed: number;
		            balance: number;
		            purchased: number;
		            awarded: number;
		            revoked: number;
		        };
		    };
		};
	};


	/**
	 * Retrieve the peer user's currency account.  Optional parameters: vcId (if retrieving all currencies).
	 * 
	 * @param  {string} vcId The currency type to retrieve or null if all currency types are being requested.
	 * @param  {string} peerCode The name of the peer.
	 * @returns ServiceProxyResponse
	 */ 
	getPeerCurrency(vcId: string, peerCode: string): {
		status: number;
		data: {
		    currencyMap: {
		        credits: {
		            consumed: number;
		            balance: number;
		            purchased: number;
		            awarded: number;
		            revoked: number;
		        };
		    };
		};
	};


	/**
	 * Resets the user's currency back to zero.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	resetCurrency(): {
		status: number;
		data: any | null;
	};


	/**
	 * Resets the parent user's currency back to zero.
	 * 
	 * @param  {string} levelName The name of the parent level.
	 * @returns ServiceProxyResponse
	 */ 
	resetParentCurrency(levelName: string): {
		status: number;
		data: any | null;
	};


	/**
	 * Resets the peer user's currency back to zero.
	 * 
	 * @param  {string} peerCode The name of the peer.
	 * @returns ServiceProxyResponse
	 */ 
	resetPeerCurrency(peerCode: string): ServiceProxyResponse;


	/**
	 * Award user the specified amount of currency. Returns the new currency values.
	 * 
	 * @param  {string} vcId The currency type to award.
	 * @param  {number} vcAmount The amount of currency to award.
	 * @returns ServiceProxyResponse
	 */ 
	awardCurrency(vcId: string, vcAmount: number): {
		data: {
		    currencyMap: {
		        gems: {
		            purchased: number;
		            balance: number;
		            consumed: number;
		            awarded: number;
		            revoked: number;
		        };
		        gold: {
		            purchased: number;
		            balance: number;
		            consumed: number;
		            awarded: number;
		            revoked: number;
		        };
		    };
		};
		status: number;
	};


	/**
	 * Award parent user the specified amount of currency. Returns the new currency values.
	 * 
	 * @param  {string} vcId The currency type to award.
	 * @param  {number} vcAmount The amount of currency to award.
	 * @param  {string} levelName The name of the parent level.
	 * @returns ServiceProxyResponse
	 */ 
	awardParentCurrency(vcId: string, vcAmount: number, levelName: string): {
		status: number;
		data: {
		    currencyMap: {
		        gems: {
		            purchased: number;
		            balance: number;
		            consumed: number;
		            awarded: number;
		            revoked: number;
		        };
		        gold: {
		            purchased: number;
		            balance: number;
		            consumed: number;
		            awarded: number;
		            revoked: number;
		        };
		    };
		};
	};


	/**
	 * Used to manually award additional currency to the user.
	 * 
	 * @param  {string} vcId Type of currency (Ex. ticket, tokens.)
	 * @param  {number} vcAmount A currency amount to award.
	 * @param  {string} peerCode The name of the peer.
	 * @returns ServiceProxyResponse
	 */ 
	awardPeerCurrency(vcId: string, vcAmount: number, peerCode: string): {
		status: number;
		data: {
		    currencyMap: {
		        gems: {
		            purchased: number;
		            balance: number;
		            consumed: number;
		            awarded: number;
		            revoked: number;
		        };
		        gold: {
		            purchased: number;
		            balance: number;
		            consumed: number;
		            awarded: number;
		            revoked: number;
		        };
		    };
		};
	};


	/**
	 * Consume the specified amount of currency from the user.
	 * 
	 * @param  {string} vcId The currency type to consume.
	 * @param  {number} vcAmount The amount of currency to consume.
	 * @returns ServiceProxyResponse
	 */ 
	consumeCurrency(vcId: string, vcAmount: number): {
		data: {
		    currencyMap: {
		        gems: {
		            purchased: number;
		            balance: number;
		            consumed: number;
		            awarded: number;
		            revoked: number;
		        };
		        gold: {
		            purchased: number;
		            balance: number;
		            consumed: number;
		            awarded: number;
		            revoked: number;
		        };
		    };
		};
		status: number;
	};


	/**
	 * Consume the specified amount of currency from the user.
	 * 
	 * @param  {string} vcId The currency type to consume.
	 * @param  {number} vcAmount The amount of currency to consume.
	 * @param  {string} levelName The name of the parent level.
	 * @returns ServiceProxyResponse
	 */ 
	consumeParentCurrency(vcId: string, vcAmount: number, levelName: string): {
		status: number;
		data: {
		    currencyMap: {
		        gems: {
		            purchased: number;
		            balance: number;
		            consumed: number;
		            awarded: number;
		            revoked: number;
		        };
		        gold: {
		            purchased: number;
		            balance: number;
		            consumed: number;
		            awarded: number;
		            revoked: number;
		        };
		    };
		};
	};


	/**
	 * Used to manually consume game currencies.
	 * 
	 * @param  {string} vcId Type of currency (Ex. ticket, tokens.)
	 * @param  {number} vcAmount The amount of currency to be consumed.
	 * @param  {string} peerCode The name of the peer.
	 * @returns ServiceProxyResponse
	 */ 
	consumePeerCurrency(vcId: string, vcAmount: number, peerCode: string): {
		status: number;
		data: {
		    currencyMap: {
		        gems: {
		            purchased: number;
		            balance: number;
		            consumed: number;
		            awarded: number;
		            revoked: number;
		        };
		        gold: {
		            purchased: number;
		            balance: number;
		            consumed: number;
		            awarded: number;
		            revoked: number;
		        };
		    };
		};
	};


	/**
	 * Revoke the specified amount of currency from the user. User's balance can go negative.
	 * 
	 * @param  {string} vcId The currency type to revoke.
	 * @param  {number} vcAmount The amount of currency to revoke.
	 * @returns ServiceProxyResponse
	 */ 
	revokeCurrency(vcId: string, vcAmount: number): {
		data: {
		    currencyMap: {
		        bar: {
		            consumed: number;
		            balance: number;
		            purchased: number;
		            awarded: number;
		            revoked: number;
		        };
		        coins: {
		            consumed: number;
		            balance: number;
		            purchased: number;
		            awarded: number;
		            revoked: number;
		        };
		    };
		};
		status: number;
	};


	/**
	 * Revoke the specified amount of currency from the parent user. Parent user's balance can go negative
	 * 
	 * @param  {string} vcId The currency type to revoke.
	 * @param  {number} vcAmount The amount of currency to revoke.
	 * @param  {string} levelName The name of the parent level.
	 * @returns ServiceProxyResponse
	 */ 
	revokeParentCurrency(vcId: string, vcAmount: number, levelName: string): {
		data: {
		    currencyMap: {
		        parent2VC1: {
		            consumed: number;
		            balance: number;
		            purchased: number;
		            awarded: number;
		            revoked: number;
		        };
		        parent2VC2: {
		            consumed: number;
		            balance: number;
		            purchased: number;
		            awarded: number;
		            revoked: number;
		        };
		    };
		};
		status: number;
	};


	/**
	 * Revoke the specified amount of currency from the peer user. Peer user's balance can go negative.
	 * 
	 * @param  {string} vcId Type of currency (Ex. ticket, tokens)
	 * @param  {number} vcAmount The amount of currency to be revoked.
	 * @param  {string} peerCode The peer code of the peer.
	 * @returns ServiceProxyResponse
	 */ 
	revokePeerCurrency(vcId: string, vcAmount: number, peerCode: string): {
		data: {
		    currencyMap: {
		        peerVC1: {
		            consumed: number;
		            balance: number;
		            purchased: number;
		            awarded: number;
		            revoked: number;
		        };
		        peerVC2: {
		            consumed: number;
		            balance: number;
		            purchased: number;
		            awarded: number;
		            revoked: number;
		        };
		    };
		};
		status: number;
	};


	/**
	 * Retrieves the virtual currency types defined for the current app.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	sysGetCurrencyTypes(): {
		data: {
		    currencies: Array<string>;
		};
		status: number;
	};


	/**
	 * Retrieves the virtual currency types inherited from the parent app(s).
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	sysGetParentCurrencyTypes(): {
		data: {
		    parentCurrencies: {
		        parent1: Array<string>;
		        parent2: Array<string>;
		    };
		};
		status: number;
	};


	/**
	 * Retrieves the virtual currency types inherited from the configured peer apps.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	sysGetPeerCurrencyTypes(): {
		data: {
		    peerCurrencies: {
		        deploypeer: Array<string>;
		    };
		};
		status: number;
	};

}