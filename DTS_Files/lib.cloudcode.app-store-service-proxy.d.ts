/// <reference no-default-lib="true"/>

interface AppStoreServiceProxy {
	/**
	 * Verifies that purchase was properly made at the store.
	 * 
	 * @param  {String} storeId The store type - "itunes", "googlePlay", "facebook" or "windows."
	 * @param  {NativeObject} receiptData A JSON object with data in the format for the specified store.
	 * @returns ServiceProxyResponse
	 */ 
	verifyPurchase(storeId: string, receiptData: Object): {
    status: number;
    data: 
    {
        resultCode: number;
        errorMessage: any | null;
        store: string;
        transactionSummary: 
        {
            processedCount: number;
            unprocessedCount: number;
            transactionDetails: Array<
            {
                transactionId: string;
                itemId: string;
                transactionResultCode: number;
                processed: number;
                originalTransactionId: string;
                referencePrice: number;
                quantity: number;
                payload: string;
                sandbox: number;
                purchaseDateMs: number;
                productId: string;
                purchaseDate: string;
                rewards: 
                {
                    extra: any | null;
                    currency: 
                    {
                        bar: number;
                        coinMultiplier: number;
                    };
                };
            }>;
            extra: 
            {
                appleReceipt: string;
            };
        };
        rewards: 
        {
            currency: 
            {
                coins: number;
            };
            parentCurrency: 
            {
                awesomeMaster: 
                {
                    rubies: number;
                };
            };
            peerCurrency: 
            {
                peerApp: 
                {
                    rogerCurrency: number;
                };
            };
        };
        currency: 
        {
            coins: 
            {
                balance: number;
                purchased: number;
                awarded: number;
                consumed: number;
            };
        };
        parentCurrency: 
        {
            awesomeMaster: 
            {
                rubies: 
                {
                    balance: number;
                    purchased: number;
                    awarded: number;
                    consumed: number;
                };
            };
        };
        peerCurrency: 
        {
            peerApp: 
            {
                rogerCurrency: 
                {
                    balance: number;
                    purchased: number;
                    awarded: number;
                    consumed: number;
                };
            };
        };
        server_time: number;
    };
};

	/**
	 * Generic version of start of two-part purchase flow.
	 * 
	 * @param  {String} storeId The store id. Currently only accepts "steam."
	 * @param  {NativeObject} purchaseData Data for the purchase. language: ISO 639-1 language code. itemId: Items to purchase.
	 * @returns ServiceProxyResponse
	 */ 
	startPurchase(storeId: string, purchaseData: Object): {
    data: 
    {
        resultCode: number;
        serverTime: number;
        store: string;
        transactionSummary: 
        {
            result: string;
            params: 
            {
                orderid: number;
                transid: number;
            };
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
	 * @param  {String} storeId Store type.
	 * @param  {String} transactionId Id of transaction to finalize.
	 * @param  {NativeObject} transactionData Store-specific transaction data.
	 * @returns ServiceProxyResponse
	 */ 
	finalizePurchase(storeId: string, transactionId: string, transactionData: Object): {
    data: 
    {
        processed: number;
        itemId: string;
        referencePrice: number;
        promotions: any | null;
        resultCode: number;
        currency: 
        {
            goldWings: 
            {
                consumed: number;
                balance: number;
                purchased: number;
                awarded: number;
            };
        };
        serverTime: number;
        store: string;
        transactionSummary: 
        {
            result: string;
            params: 
            {
                orderid: number;
                transid: number;
            };
            rawStringResp: string;
            queryTxn: 
            {
                response: 
                {
                    result: string;
                    params: 
                    {
                        orderid: string;
                        transid: string;
                        steamid: string;
                        status: string;
                        currency: string;
                        time: string;
                        country: string;
                        usstate: string;
                        timecreated: string;
                        items: Array<
                        {
                            itemid: number;
                            qty: number;
                            amount: number;
                            vat: number;
                            itemstatus: string;
                        }>;
                    };
                };
            };
        };
        rewards: 
        {
            extra: any | null;
            currency: 
            {
                goldWings: number;
            };
        };
    };
    status: number;
};

	/**
	 * Retrieves the list of products for a store. Criteria is store specific.
	 * 
	 * @param  {String} storeId The store platform.
	 * @param  {NativeObject} priceInfoCriteria The currency to retrieve the sales inventory for. This is only used for Steam and Facebook stores.
	 * @returns ServiceProxyResponse
	 */ 
	getSalesInventory(storeId: string, priceInfoCriteria: Object): {
    status: number;
    data: 
    {
        productInventory: Array<
        {
            currency: 
            {
                bar: number;
            };
            description: string;
            fbUrl: string;
            gameId: string;
            imageUrl: string;
            itemId: string;
            priceData: 
            {
                ids: Array<
                {
                    appId: string;
                    itunesId: string;
                }>;
            };
            payload: string;
            title: string;
        }>;
        serverTime: number;
    };
};

	/**
	 * Retrieves the list of products for a store, with the given category. Criteria is store specific.
	 * 
	 * @param  {String} storeId The store platform.
	 * @param  {String} category The currency to retrieve the sales inventory for. This is only used for Steam and Facebook stores.
	 * @param  {NativeObject} priceInfoCriteria The currency to retrieve the sales inventory for. This is only used for Steam and Facebook stores.
	 * @returns ServiceProxyResponse
	 */ 
	getSalesInventoryByCategory(storeId: string, category: string, priceInfoCriteria: Object): {
    status: number;
    data: 
    {
        productInventory: Array<
        {
            currency: 
            {
                bar: number;
            };
            description: string;
            fbUrl: string;
            gameId: string;
            imageUrl: string;
            itemId: string;
            priceData: 
            {
                ids: Array<
                {
                    appId: string;
                    itunesId: string;
                }>;
            };
            payload: string;
            title: string;
        }>;
        serverTime: number;
    };
};

	/**
	 * Caches a payload context to retreive as fallback if the store API cannot provide the payload.
	 * 
	 * @param  {String} storeId The store platform.
	 * @param  {String} iapId In-app product id.
	 * @param  {String} payload The payload string to cache.
	 * @returns ServiceProxyResponse
	 */ 
	cachePurchasePayloadContext(storeId: string, iapId: string, payload: string): {
        status: number;
        data: 
        {
        };
    };

	/**
	 * Retrieves eligible promotions.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	getEligiblePromotions(): {
    status: number;
    data: 
    {
        promotions: Array<
        {
            gameId: string;
            promotionId: number;
            type: string;
            name: string;
            message: string;
            enabled: number;
            targetAllUsers: number;
            segments: Array<number>;
            prices: Array<
            {
                itemId: string;
                priceId: number;
            }>;
            notifications: Array<
            {
                trigger: string;
                notificationTemplateId: number;
            }>;
            customJson: 
            {
                key: string;
            };
            startAt: number;
            endAt: number;
            createdAt: number;
            updatedAt: number;
        }>;
    };
};

	/**
	 * Returns up-to-date eligible 'promotions' for the user and a 'requiredRefresh' flag indicating whether the user's promotion info required refreshing
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	refreshPromotions(): {
    data: 
    {
        promotionsRefreshed: number;
        promotions: Array<
        {
            gameId: string;
            promotionId: number;
            type: string;
            name: string;
            message: string;
            enabled: number;
            segments: Array<number>;
            prices: Array<
            {
                itemId: string;
                priceId: number;
            }>;
            notifications: Array<
            {
                trigger: string;
                notificationTemplateId: number;
            }>;
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
	 * @param  {NativeObject} context The json context for the page request.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetTransactionsPage(context: Object): {
    data: 
    {
        _serverTime: number;
        context: string;
        results: 
        {
            count: number;
            page: number;
            items: Array<
            {
                regularPrice: number;
                pending: number;
                sandbox: number;
                type: string;
                title: string;
                sequenceId: string;
                transactionId: string;
                refPrice: number;
                itemId: string;
                createdAt: number;
                pendingPromotionId: any | null;
                profileId: string;
                pendingPriceId: any | null;
                updatedAt: number;
            }>;
            moreAfter: number;
            moreBefore: number;
        };
    };
    status: number;
};

	/**
	 * Gets the page of product transactions information from the server based on the encoded context and specified page offset.
	 * 
	 * @param  {NativeObject} context The context string returned from the server from a previous call to SysGetTransactionsPage or SysGetTransactionsPageOffset.
	 * @param  {Long} pageOffset The positive or negative page offset to fetch. Uses the last page retrieved using the context string to determine a starting point.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetTransactionsPageOffset(context: Object, pageOffset: number): {
    data: 
    {
        _serverTime: number;
        context: string;
        results: 
        {
            count: number;
            page: number;
            items: Array<
            {
                pending: number;
                sandbox: number;
                type: string;
                sequenceId: string;
                transactionId: string;
                refPrice: number;
                itemId: string;
                createdAt: number;
                pendingPromotionId: any | null;
                profileId: string;
                pendingPriceId: number;
                updatedAt: number;
            }>;
            moreAfter: number;
            moreBefore: number;
        };
    };
    status: number;
};

	/**
	 * Returns details of the identified product transaction.
	 * 
	 * @param  {String} sequenceId The sequenceId that uniquely identifies the transaction to retrieve for app.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetTransactionDetails(sequenceId: string): {
    data: 
    {
        sequenceId: string;
        playerId: string;
        type: string;
        itemId: string;
        title: any | null;
        data: any | null;
        createdAt: number;
        updatedAt: number;
        transactionId: string;
        dataJson: 
        {
            pending: 
            {
                itemId: string;
                transactionId: string;
            };
            final: 
            {
                purchaseData: 
                {
                    transId: string;
                };
                transactionSummary: 
                {
                    transId: string;
                };
            };
        };
        rewards: 
        {
            extra: any | null;
            currency: 
            {
                coins: number;
            };
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
	 * @param  {String} itemId Item ID of the product to be awarded.
	 * @param  {Long} quantity Quantity of item to be awarded. Limited to 1 at this time.
	 * @returns ServiceProxyResponse
	 */ 
	sysAwardProduct(itemId: string, quantity: number): {
    data: 
    {
        userItemRewards: 
        {
            sword001: 
            {
                17311754f6104a2099343c9d255874e3: 
                {
                    itemId: string;
                    quantity: number;
                };
            };
        };
        extra: 
        {
            customAttr: string;
        };
        currency: 
        {
            bar: 
            {
                consumed: number;
                balance: number;
                purchased: number;
                awarded: number;
                revoked: number;
            };
            coins: 
            {
                consumed: number;
                balance: number;
                purchased: number;
                awarded: number;
                revoked: number;
            };
        };
        serverTime: number;
        rewards: 
        {
            extra: 
            {
                customAttr: string;
            };
            currency: 
            {
                bar: number;
            };
            items: 
            {
                sword001: 
                {
                    defId: string;
                    quantity: number;
                };
            };
        };
    };
    status: number;
};

	/**
	 * Awards the specified user the product item rewards without requiring a purchase (free, no purchase transaction recorded).
	 * 
	 * @param  {String} profileId Profile ID of the user to be awarded the product.
	 * @param  {String} itemId Item ID of the product to be awarded.
	 * @param  {Long} quantity Quantity of item to be awarded. Limited to 1 at this time.
	 * @returns ServiceProxyResponse
	 */ 
	sysAwardProductToUser(profileId: string, itemId: string, quantity: number): {
    data: 
    {
        userItemRewards: 
        {
            sword001: 
            {
                17311754f6104a2099343c9d255874e3: 
                {
                    itemId: string;
                    quantity: number;
                };
            };
        };
        extra: 
        {
            customAttr: string;
        };
        currency: 
        {
            bar: 
            {
                consumed: number;
                balance: number;
                purchased: number;
                awarded: number;
                revoked: number;
            };
            coins: 
            {
                consumed: number;
                balance: number;
                purchased: number;
                awarded: number;
                revoked: number;
            };
        };
        serverTime: number;
        rewards: 
        {
            extra: 
            {
                customAttr: string;
            };
            currency: 
            {
                bar: number;
            };
            items: 
            {
                sword001: 
                {
                    defId: string;
                    quantity: number;
                };
            };
        };
    };
    status: number;
};

	/**
	 * Records a manual transaction for stores which we don't directly support
	 * 
	 * @param  {String} profileId Profile ID of the user.
	 * @param  {String} storeId Identifies the store type.
	 * @param  {String} itemId Item ID of the product transaction to be recorded.
	 * @param  {Map} dataJson Transaction details from the store's perspective.
	 * @param  {Map} receiptData Receipt information.
	 * @param  {Number} promotionId Optional ID of any promotion that applies.
	 * @param  {Boolean} processAwards Whether to deliver rewards/items.
	 * @param  {String} transactionId Transaction ID of the product transaction to be recorded.
	 * @param  {Number} price Price in cents.
	 * @param  {Boolean} sandbox Whether purchase is sandbox.
	 * @param  {String} platform Optional. Platform to indicate for off-board event sending.
	 * @returns ServiceProxyResponse
	 */ 
	sysRecordTransaction(profileId: string, storeId: string, itemId: string, dataJson: Map<any, any>, receiptData: Map<any, any>, promotionId: number, processAwards: boolean, transactionId: string, price: number, sandbox: boolean, platform: string): {
    data: 
    {
        userItemRewards: 
        {
            sword001: 
            {
                fac9e483c95846b9a47806c97a85e74a: 
                {
                    itemId: string;
                    quantity: number;
                };
            };
        };
        extra: 
        {
            customAttr: string;
        };
        rewards: 
        {
            extra: 
            {
                customAttr: string;
            };
            currency: 
            {
                bar: number;
            };
            items: 
            {
                sword001: 
                {
                    defId: string;
                    quantity: number;
                };
            };
        };
        currencies: 
        {
            currency: 
            {
                bar: 
                {
                    consumed: number;
                    balance: number;
                    purchased: number;
                    awarded: number;
                    revoked: number;
                };
                coins: 
                {
                    consumed: number;
                    balance: number;
                    purchased: number;
                    awarded: number;
                    revoked: number;
                };
            };
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
	 * @param  {String} resource Resource to access.
	 * @returns ServiceProxyResponse
	 */ 
	sysGenerateAzureADAccessToken(resource: string): {
    data: 
    {
        token: string;
    };
    status: number;
};

}