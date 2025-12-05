/// <reference no-default-lib="true"/>

interface AppStoreServiceProxy {
	/**
	 * Verifies that purchase was properly made at the store.
	 * 
	 * @param  {string} storeId The store type - "itunes", "googlePlay", "facebook" or "windows."
	 * @param  {Object} receiptData A JSON object with data in the format for the specified store.
	 * @returns ServiceProxyResponse
	 */ 
	verifyPurchase(storeId: string, receiptData: Object): {
		data: {
		    resultCode: number;
		    errorMessage: any | null;
		    store: string;
		    transactionSummary: {
		        processedCount: number;
		        unprocessedCount: number;
		        transactionDetails: Array<Record<string, any>>;
		        extra: Record<string, any>;
		    };
		    rewards: {
		        currency: Record<string, any>;
		        parentCurrency: Record<string, any>;
		        peerCurrency: Record<string, any>;
		    };
		    currency: {
		        coins: Record<string, any>;
		    };
		    parentCurrency: {
		        awesomeMaster: Record<string, any>;
		    };
		    peerCurrency: {
		        peerApp: Record<string, any>;
		    };
		    server_time: number;
		};
		status: number;
	};


	/**
	 * Generic version of start of two-part purchase flow.
	 * 
	 * @param  {string} storeId The store id. Currently only accepts "steam."
	 * @param  {Object} purchaseData Data for the purchase. language: ISO 639-1 language code. itemId: Items to purchase.
	 * @returns ServiceProxyResponse
	 */ 
	startPurchase(storeId: string, purchaseData: Object): {
		data: {
		    resultCode: number;
		    serverTime: number;
		    store: string;
		    transactionSummary: {
		        result: string;
		        params: Record<string, any>;
		        rawStringResp: string;
		        currencyOverride: string;
		    };
		    transactionId: string;
		};
		status: number;
	};


	/**
	 * Generic version of finalize portion of two-part flow.
	 * 
	 * @param  {string} storeId Store type.
	 * @param  {string} transactionId Id of transaction to finalize.
	 * @param  {Object} transactionData Store-specific transaction data.
	 * @returns ServiceProxyResponse
	 */ 
	finalizePurchase(storeId: string, transactionId: string, transactionData: Object): {
		data: {
		    processed: number;
		    itemId: string;
		    referencePrice: number;
		    promotions: any | null;
		    resultCode: number;
		    currency: {
		        goldWings: Record<string, any>;
		    };
		    serverTime: number;
		    store: string;
		    transactionSummary: {
		        result: string;
		        params: Record<string, any>;
		        rawStringResp: string;
		        queryTxn: Record<string, any>;
		    };
		    rewards: {
		        extra: any | null;
		        currency: Record<string, any>;
		    };
		};
		status: number;
	};


	/**
	 * Retrieves the list of products for a store. Criteria is store specific.
	 * 
	 * @param  {string} storeId The store platform.
	 * @param  {Object} priceInfoCriteria The currency to retrieve the sales inventory for. This is only used for Steam and Facebook stores.
	 * @returns ServiceProxyResponse
	 */ 
	getSalesInventory(storeId: string, priceInfoCriteria: Object): {
		data: {
		    productInventory: Array<{
		        currency: Record<string, any>;
		        description: string;
		        fbUrl: string;
		        gameId: string;
		        imageUrl: string;
		        itemId: string;
		        priceData: Record<string, any>;
		        payload: string;
		        title: string;
		    }>;
		    serverTime: number;
		};
		status: number;
	};


	/**
	 * Retrieves the list of products for a store, with the given category. Criteria is store specific.
	 * 
	 * @param  {string} storeId The store platform.
	 * @param  {string} category The currency to retrieve the sales inventory for. This is only used for Steam and Facebook stores.
	 * @param  {Object} priceInfoCriteria The currency to retrieve the sales inventory for. This is only used for Steam and Facebook stores.
	 * @returns ServiceProxyResponse
	 */ 
	getSalesInventoryByCategory(storeId: string, category: string, priceInfoCriteria: Object): {
		data: {
		    productInventory: Array<{
		        currency: Record<string, any>;
		        description: string;
		        fbUrl: string;
		        gameId: string;
		        imageUrl: string;
		        itemId: string;
		        priceData: Record<string, any>;
		        payload: string;
		        title: string;
		    }>;
		    serverTime: number;
		};
		status: number;
	};


	/**
	 * Caches a payload context to retreive as fallback if the store API cannot provide the payload.
	 * 
	 * @param  {string} storeId The store platform.
	 * @param  {string} iapId In-app product id.
	 * @param  {string} payload The payload string to cache.
	 * @returns ServiceProxyResponse
	 */ 
	cachePurchasePayloadContext(storeId: string, iapId: string, payload: string): {
		data: {
		};
		status: number;
	};


	/**
	 * Retrieves eligible promotions.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	getEligiblePromotions(): {
		data: {
		    promotions: Array<{
		        gameId: string;
		        promotionId: number;
		        type: string;
		        name: string;
		        message: string;
		        enabled: number;
		        targetAllUsers: number;
		        segments: Array<number>;
		        prices: Array<Record<string, any>>;
		        notifications: Array<Record<string, any>>;
		        customJson: Record<string, any>;
		        startAt: number;
		        endAt: number;
		        createdAt: number;
		        updatedAt: number;
		    }>;
		};
		status: number;
	};


	/**
	 * Returns up-to-date eligible 'promotions' for the user and a 'requiredRefresh' flag indicating whether the user's promotion info required refreshing
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	refreshPromotions(): {
		data: {
		    promotionsRefreshed: number;
		    promotions: Array<{
		        gameId: string;
		        promotionId: number;
		        type: string;
		        name: string;
		        message: string;
		        enabled: number;
		        segments: Array<number>;
		        prices: Array<Record<string, any>>;
		        notifications: Array<Record<string, any>>;
		        duration: number;
		        customJson: any | null;
		        isRetriggerable: number;
		        maxRetriggers: any | null;
		        maxPurchases: number;
		        createdAt: number;
		        updatedAt: number;
		        version: number;
		        triggeredForUserAt: number;
		        expiresForUserAt: number;
		    }>;
		};
		status: number;
	};


	/**
	 * This a hook-only operation for processing purchase reward success.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	purchaseRewardHook(): ServiceProxyResponse;


	/**
	 * Gets the page of product transactions information from the server based on the specified context.
	 * 
	 * @param  {Object} context The json context for the page request.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetTransactionsPage(context: Object): {
		data: {
		    _serverTime: number;
		    context: string;
		    results: {
		        count: number;
		        page: number;
		        items: Array<Record<string, any>>;
		        moreAfter: number;
		        moreBefore: number;
		    };
		};
		status: number;
	};


	/**
	 * Gets the page of product transactions information from the server based on the encoded context and specified page offset.
	 * 
	 * @param  {Object} context The context string returned from the server from a previous call to SysGetTransactionsPage or SysGetTransactionsPageOffset.
	 * @param  {number} pageOffset The positive or negative page offset to fetch. Uses the last page retrieved using the context string to determine a starting point.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetTransactionsPageOffset(context: Object, pageOffset: number): {
		data: {
		    _serverTime: number;
		    context: string;
		    results: {
		        count: number;
		        page: number;
		        items: Array<Record<string, any>>;
		        moreAfter: number;
		        moreBefore: number;
		    };
		};
		status: number;
	};


	/**
	 * Returns details of the identified product transaction.
	 * 
	 * @param  {string} sequenceId The sequenceId that uniquely identifies the transaction to retrieve for app.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetTransactionDetails(sequenceId: string): {
		data: {
		    sequenceId: string;
		    playerId: string;
		    type: string;
		    itemId: string;
		    title: any | null;
		    data: any | null;
		    createdAt: number;
		    updatedAt: number;
		    transactionId: string;
		    dataJson: {
		        pending: Record<string, any>;
		        final: Record<string, any>;
		    };
		    rewards: {
		        extra: any | null;
		        currency: Record<string, any>;
		    };
		    userItemRewards: any | null;
		    sandbox: number;
		    refPrice: number;
		    regularPrice: any | null;
		    promotion: any | null;
		    pending: number;
		    pendingPriceId: number;
		    pendingPromotionId: any | null;
		};
		status: number;
	};


	/**
	 * Awards the current user the product item rewards without requiring a purchase (free, no purchase transaction recorded).
	 * 
	 * @param  {string} itemId Item ID of the product to be awarded.
	 * @param  {number} quantity Quantity of item to be awarded. Limited to 1 at this time.
	 * @returns ServiceProxyResponse
	 */ 
	sysAwardProduct(itemId: string, quantity: number): {
		data: {
		    userItemRewards: {
		        sword001: Record<string, any>;
		    };
		    extra: {
		        customAttr: string;
		    };
		    currency: {
		        bar: Record<string, any>;
		        coins: Record<string, any>;
		    };
		    serverTime: number;
		    rewards: {
		        extra: Record<string, any>;
		        currency: Record<string, any>;
		        items: Record<string, any>;
		    };
		};
		status: number;
	};


	/**
	 * Awards the specified user the product item rewards without requiring a purchase (free, no purchase transaction recorded).
	 * 
	 * @param  {string} profileId Profile ID of the user to be awarded the product.
	 * @param  {string} itemId Item ID of the product to be awarded.
	 * @param  {number} quantity Quantity of item to be awarded. Limited to 1 at this time.
	 * @returns ServiceProxyResponse
	 */ 
	sysAwardProductToUser(profileId: string, itemId: string, quantity: number): {
		data: {
		    userItemRewards: {
		        sword001: Record<string, any>;
		    };
		    extra: {
		        customAttr: string;
		    };
		    currency: {
		        bar: Record<string, any>;
		        coins: Record<string, any>;
		    };
		    serverTime: number;
		    rewards: {
		        extra: Record<string, any>;
		        currency: Record<string, any>;
		        items: Record<string, any>;
		    };
		};
		status: number;
	};


	/**
	 * Records a manual transaction for stores which we don't directly support
	 * 
	 * @param  {string} profileId Profile ID of the user.
	 * @param  {string} storeId Identifies the store type.
	 * @param  {string} itemId Item ID of the product transaction to be recorded.
	 * @param  {Map<any, any>} dataJson Transaction details from the store's perspective.
	 * @param  {Map<any, any>} receiptData Receipt information.
	 * @param  {number} promotionId Optional ID of any promotion that applies.
	 * @param  {boolean} processAwards Whether to deliver rewards/items.
	 * @param  {string} transactionId Transaction ID of the product transaction to be recorded.
	 * @param  {number} price Price in cents.
	 * @param  {boolean} sandbox Whether purchase is sandbox.
	 * @param  {string} platform Optional. Platform to indicate for off-board event sending.
	 * @returns ServiceProxyResponse
	 */ 
	sysRecordTransaction(profileId: string, storeId: string, itemId: string, dataJson: Map<any, any>, receiptData: Map<any, any>, promotionId: number, processAwards: boolean, transactionId: string, price: number, sandbox: boolean, platform: string): {
		data: {
		    userItemRewards: {
		        sword001: Record<string, any>;
		    };
		    extra: {
		        customAttr: string;
		    };
		    rewards: {
		        extra: Record<string, any>;
		        currency: Record<string, any>;
		        items: Record<string, any>;
		    };
		    currencies: {
		        currency: Record<string, any>;
		    };
		};
		status: number;
	};


	/**
	 * This a hook-only operation for processing SysAwardProduct/SysAwardProductToUser success.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	awardProductHook(): ServiceProxyResponse;


	/**
	 * Generates an Azure AD access token.
	 * 
	 * @param  {string} resource Resource to access.
	 * @returns ServiceProxyResponse
	 */ 
	sysGenerateAzureADAccessToken(resource: string): {
		data: {
		    token: string;
		};
		status: number;
	};


}