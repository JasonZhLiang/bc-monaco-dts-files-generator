/// <reference no-default-lib="true"/>

interface ProductServiceProxy {
	/**
	 * Retrieve the user's currency account.  Optional parameters: vc_id (if retrieving all currencies).
	 * 
	 * @param  {String} vc_id The currency type to retrieve or null if all currency types are being requested.
	 * @returns ServiceProxyResponse
	 */ 
	getCurrency(vc_id: string): {
    status: number;
    data: 
    {
        updatedAt: number;
        currencyMap: 
        {
            gems: 
            {
                purchased: number;
                balance: number;
                consumed: number;
                awarded: number;
            };
        };
        parentCurrency: 
        {
            Master: 
            {
                credits: 
                {
                    purchased: number;
                    balance: number;
                    consumed: number;
                    awarded: number;
                };
            };
        };
        peerCurrency: 
        {
            gameLootPeer: 
            {
                tickets: 
                {
                    purchased: number;
                    balance: number;
                    consumed: number;
                    awarded: number;
                };
            };
        };
        playerId: string;
        createdAt: number;
    };
};

	/**
	 * Retrieve the parent user's currency account.  Optional parameters: vc_id (if retrieving all currencies).
	 * 
	 * @param  {String} vc_id The currency type to retrieve or null if all currency types are being requested.
	 * @param  {String} levelName The name of the parent level.
	 * @returns ServiceProxyResponse
	 */ 
	getParentCurrency(vc_id: string, levelName: string): {
    status: number;
    data: 
    {
        createdAt: number;
        currencyMap: 
        {
            credits: 
            {
                consumed: number;
                balance: number;
                purchased: number;
                awarded: number;
            };
        };
        playerId: string;
        updatedAt: number;
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
	 * @param  {String} levelName The name of the parent level.
	 * @returns ServiceProxyResponse
	 */ 
	resetParentCurrency(levelName: string): {
    status: number;
    data: any | null;
};

	/**
	 * Award user the specified amount of currency. Returns the new currency values.
	 * 
	 * @param  {String} vc_id The currency type to award.
	 * @param  {Long} vc_amount The amount of currency to award.
	 * @returns ServiceProxyResponse
	 */ 
	awardCurrency(vc_id: string, vc_amount: number): {
    status: number;
    data: 
    {
        updatedAt: number;
        currencyMap: 
        {
            gems: 
            {
                purchased: number;
                balance: number;
                consumed: number;
                awarded: number;
            };
            gold: 
            {
                purchased: number;
                balance: number;
                consumed: number;
                awarded: number;
            };
        };
        playerId: string;
        createdAt: number;
    };
};

	/**
	 * Award parent user the specified amount of currency. Returns the new currency values.
	 * 
	 * @param  {String} vc_id The currency type to award.
	 * @param  {Long} vc_amount The amount of currency to award.
	 * @param  {String} levelName The name of the parent level.
	 * @returns ServiceProxyResponse
	 */ 
	awardParentCurrency(vc_id: string, vc_amount: number, levelName: string): {
    status: number;
    data: 
    {
        updatedAt: number;
        currencyMap: 
        {
            gems: 
            {
                purchased: number;
                balance: number;
                consumed: number;
                awarded: number;
            };
            gold: 
            {
                purchased: number;
                balance: number;
                consumed: number;
                awarded: number;
            };
        };
        playerId: string;
        createdAt: number;
    };
};

	/**
	 * Consume the specified amount of currency from the user.
	 * 
	 * @param  {String} vc_id The currency type to consume.
	 * @param  {Long} vc_amount The amount of currency to consume.
	 * @returns ServiceProxyResponse
	 */ 
	consumeCurrency(vc_id: string, vc_amount: number): {
    status: number;
    data: 
    {
        updatedAt: number;
        currencyMap: 
        {
            gems: 
            {
                purchased: number;
                balance: number;
                consumed: number;
                awarded: number;
            };
            gold: 
            {
                purchased: number;
                balance: number;
                consumed: number;
                awarded: number;
            };
        };
        playerId: string;
        createdAt: number;
    };
};

	/**
	 * Consume the specified amount of currency from the parent user.
	 * 
	 * @param  {String} vc_id The currency type to consume.
	 * @param  {Long} vc_amount The amount of currency to consume.
	 * @param  {String} levelName The name of the parent level.
	 * @returns ServiceProxyResponse
	 */ 
	consumeParentCurrency(vc_id: string, vc_amount: number, levelName: string): {
    status: number;
    data: 
    {
        updatedAt: number;
        currencyMap: 
        {
            gems: 
            {
                purchased: number;
                balance: number;
                consumed: number;
                awarded: number;
            };
            gold: 
            {
                purchased: number;
                balance: number;
                consumed: number;
                awarded: number;
            };
        };
        playerId: string;
        createdAt: number;
    };
};

	/**
	 * Retrieves the list of products for a platform [appworld | facebook | googlePlay | itunes | steam | windows | windowsPhone].  The user_currency parameter is only required for facebook and steam.  The product category parameter is optional.
	 * 
	 * @param  {String} platform The store platform.
	 * @param  {String} user_currency The currency to retrieve the sales inventory for. This is only used for Steam and Facebook stores.
	 * @returns ServiceProxyResponse
	 */ 
	getSalesInventory(platform: string, user_currency: string): {
    status: number;
    data: 
    {
        product_inventory: Array<
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
            title: string;
        }>;
        server_time: number;
    };
};

	/**
	 * Retrieves the list of products for a platform [appworld | facebook | googlePlay | itunes | steam | windows | windowsPhone].  The user_currency parameter is only required for facebook and steam.  The product category parameter is optional.
	 * 
	 * @param  {String} platform The store platform.
	 * @param  {String} user_currency The currency to retrieve the sales inventory for. This is only used for Steam and Facebook stores.
	 * @param  {String} category The product category.
	 * @returns ServiceProxyResponse
	 */ 
	getSalesInventoryByCategory(platform: string, user_currency: string, category: string): {
    status: number;
    data: 
    {
        product_inventory: Array<
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
            title: string;
        }>;
        server_time: number;
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
            startAt: number;
            endAt: number;
            createdAt: number;
            updatedAt: number;
        }>;
    };
};

	/**
	 * Verifies receipt returned by iTunes purchase
	 * 
	 * @param  {String} receipt The iTunes receipt **`payload`** string.
	 * @returns ServiceProxyResponse
	 */ 
	verifyItunesReceipt(receipt: string): {
    status: number;
    data: 
    {
        status: number;
        playerCurrency: 
        {
            updatedAt: number;
            currencyMap: 
            {
                Coin: 
                {
                    purchased: number;
                    balance: number;
                    consumed: number;
                    awarded: number;
                };
            };
            playerId: string;
            createdAt: number;
        };
        appleReceipt: string;
        transactionSummary: 
        {
            processedCount: number;
            unprocessedCount: number;
            transactionDetails: Array<
            {
                original_transaction_id: string;
                product_id: string;
                purchase_date_ms: number;
                quantity: number;
                purchase_date: string;
                transactionStatus: number;
                transaction_id: string;
            }>;
        };
        server_time: number;
    };
};

	/**
	 * Used to manually consume user's peer currencies.
	 * 
	 * @param  {String} vc_id Type of currency (Ex. ticket, tokens.)
	 * @param  {Long} vc_amount The amount of currency to be consumed.
	 * @param  {String} peer The name of the peer.
	 * @returns ServiceProxyResponse
	 */ 
	consumePeerCurrency(vc_id: string, vc_amount: number, peer: string): ServiceProxyResponse;

	/**
	 * Used to manually award additional currency to the user's peer currencies.
	 * 
	 * @param  {String} vc_id Type of currency (Ex. ticket, tokens.)
	 * @param  {Long} vc_amount Currency amount to be awarded.
	 * @param  {String} peer The name of the peer.
	 * @returns ServiceProxyResponse
	 */ 
	awardPeerCurrency(vc_id: string, vc_amount: number, peer: string): ServiceProxyResponse;

	/**
	 * Verifies receipt returned by Facebook purchase.
	 * 
	 * @param  {String} signed_request signed_request object received from Facebook.
	 * @returns ServiceProxyResponse
	 */ 
	confirmFacebookPurchase(signed_request: string): {
    status: number;
    data: 
    {
        result: string;
    };
};

	/**
	 * Start a steam in-app purchaser.
	 * 
	 * @param  {String} itemId Items to purchase.
	 * @param  {String} language The ISO 639-1 language code.
	 * @returns ServiceProxyResponse
	 */ 
	startSteamTransaction(itemId: string, language: string): {
    status: number;
    data: 
    {
    };
};

	/**
	 * Finalizes a steam in-app purchaser.
	 * 
	 * @param  {String} transId The Steam transaction id.
	 * @returns ServiceProxyResponse
	 */ 
	finalizeSteamTransaction(transId: string): {
    status: number;
    data: 
    {
        result: string;
    };
};

	/**
	 * Verifies validity of receipt issued by Microsoft on purchase.
	 * 
	 * @param  {String} receipt Receipt XML.
	 * @returns ServiceProxyResponse
	 */ 
	verifyMicrosoftReceipt(receipt: string): {
    status: number;
    data: 
    {
        result: string;
    };
};

	/**
	 * Confirms a GooglePlay purchase transaction.
	 * 
	 * @param  {String} orderId Google Play `orderId` ("GPA.####-####-####-#####")
	 * @param  {String} productId Google Play `productId` ("com.acme.runner.birdseed1")
	 * @param  {String} token Google Play `purchaseToken` ("bhcmgnlflegpffpbcpeknjpi.AO-J1Oy_...")
	 * @returns ServiceProxyResponse
	 */ 
	confirmGooglePlayPurchase(orderId: string, productId: string, token: string): {
    status: number;
    data: 
    {
        result: string;
        status: 
        {
            consumptionState: number;
            developerPayload: string;
            purchaseState: number;
            kind: string;
            purchaseTimeMillis: number;
        };
        playerCurrency: 
        {
            updatedAt: number;
            currencyMap: 
            {
                gems: 
                {
                    purchased: number;
                    balance: number;
                    consumed: number;
                    awarded: number;
                };
                gold: 
                {
                    purchased: number;
                    balance: number;
                    consumed: number;
                    awarded: number;
                };
            };
            playerId: string;
            createdAt: number;
        };
        server_time: number;
    };
};
}