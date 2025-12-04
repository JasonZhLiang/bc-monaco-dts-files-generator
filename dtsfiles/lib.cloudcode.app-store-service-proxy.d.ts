/// <reference no-default-lib="true"/>

interface AppStoreServiceProxy {
	/**
	 * Verifies that purchase was properly made at the store.
	 * 
	 * @param  {string} storeId The store type - "itunes", "googlePlay", "facebook" or "windows."
	 * @param  {nativeObject} receiptData A JSON object with data in the format for the specified store.
	 * @returns ServiceProxyResponse
	 */ 
	verifyPurchase(storeId: string, receiptData: nativeObject): ServiceProxyResponse;

	/**
	 * Amazon version of generic
	 * 
	 * @param  {string} storeId The store type - , "amazon", "itunes", "googlePlay", "facebook" or "windows."
	 * @param  {nativeObject} receiptData A JSON object with data in the format for the specified store.
	 * @returns ServiceProxyResponse
	 */ 
	verifyPurchase (Amazon)(storeId: string, receiptData: nativeObject): ServiceProxyResponse;

	/**
	 * Google version of generic
	 * 
	 * @param  {string} storeId The store type - "itunes", "googlePlay", "facebook" or "windows."
	 * @param  {nativeObject} receiptData A JSON object with data in the format for the specified store.
	 * @returns ServiceProxyResponse
	 */ 
	verifyPurchase (GooglePlay)(storeId: string, receiptData: nativeObject): ServiceProxyResponse;

	/**
	 * ITunes version of generic.
	 * 
	 * @param  {string} storeId The store type - "itunes", "googlePlay", "facebook" or "windows."
	 * @param  {nativeObject} receiptData A JSON object with data in the format for the specified store.
	 * @returns ServiceProxyResponse
	 */ 
	verifyPurchase (iTunes)(storeId: string, receiptData: nativeObject): ServiceProxyResponse;

	/**
	 * Mock version of generic.
	 * 
	 * @param  {string} storeId The store type - "itunes", "googlePlay", "facebook" or "windows."
	 * @param  {nativeObject} receiptData A JSON object with data in the format for the specified store.
	 * @returns ServiceProxyResponse
	 */ 
	verifyPurchase (mock)(storeId: string, receiptData: nativeObject): ServiceProxyResponse;

	/**
	 * Generic version of start of two-part purchase flow.
	 * 
	 * @param  {string} storeId The store id. Currently only accepts "steam."
	 * @param  {nativeObject} purchaseData Data for the purchase. language: ISO 639-1 language code. itemId: Items to purchase.
	 * @returns ServiceProxyResponse
	 */ 
	startPurchase(storeId: string, purchaseData: nativeObject): ServiceProxyResponse;

	/**
	 * Steam version of start purchase.
	 * 
	 * @param  {string} storeId The store id. Currently only accepts "steam."
	 * @param  {nativeObject} purchaseData Data for the purchase. language: ISO 639-1 language code. itemId: Items to purchase.
	 * @returns ServiceProxyResponse
	 */ 
	startPurchase (Steam)(storeId: string, purchaseData: nativeObject): ServiceProxyResponse;

	/**
	 * Mock version of start purchase.
	 * 
	 * @param  {string} storeId The store id. Currently only accepts "steam."
	 * @param  {nativeObject} purchaseData Data for the purchase. language: ISO 639-1 language code. itemId: Items to purchase.
	 * @returns ServiceProxyResponse
	 */ 
	startPurchase (Mock)(storeId: string, purchaseData: nativeObject): ServiceProxyResponse;

	/**
	 * Generic version of finalize portion of two-part flow.
	 * 
	 * @param  {string} storeId Store type.
	 * @param  {string} transactionId Id of transaction to finalize.
	 * @param  {nativeObject} transactionData Store-specific transaction data.
	 * @returns ServiceProxyResponse
	 */ 
	finalizePurchase(storeId: string, transactionId: string, transactionData: nativeObject): ServiceProxyResponse;

	/**
	 * Steam version of finalize purchase.
	 * 
	 * @param  {string} storeId Store type.
	 * @param  {string} transactionId Id of transaction to finalize.
	 * @param  {nativeObject} transactionData Store-specific transaction data.
	 * @returns ServiceProxyResponse
	 */ 
	finalizePurchase (Steam)(storeId: string, transactionId: string, transactionData: nativeObject): ServiceProxyResponse;

	/**
	 * Mock version of finalize purchase.
	 * 
	 * @param  {string} storeId Store type.
	 * @param  {string} transactionId Id of transaction to finalize.
	 * @param  {nativeObject} transactionData Store-specific transaction data.
	 * @returns ServiceProxyResponse
	 */ 
	finalizePurchase (mock)(storeId: string, transactionId: string, transactionData: nativeObject): ServiceProxyResponse;

	/**
	 * Retrieves the list of products for a store. Criteria is store specific.
	 * 
	 * @param  {string} storeId The store platform.
	 * @param  {nativeObject} priceInfoCriteria The currency to retrieve the sales inventory for. This is only used for Steam and Facebook stores.
	 * @returns ServiceProxyResponse
	 */ 
	getSalesInventory(storeId: string, priceInfoCriteria: nativeObject): ServiceProxyResponse;

	/**
	 * Retrieves the list of products for a store, with the given category. Criteria is store specific.
	 * 
	 * @param  {string} storeId The store platform.
	 * @param  {string} category The currency to retrieve the sales inventory for. This is only used for Steam and Facebook stores.
	 * @param  {nativeObject} priceInfoCriteria The currency to retrieve the sales inventory for. This is only used for Steam and Facebook stores.
	 * @returns ServiceProxyResponse
	 */ 
	getSalesInventoryByCategory(storeId: string, category: string, priceInfoCriteria: nativeObject): ServiceProxyResponse;

	/**
	 * Retrieves eligible promotions.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	getEligiblePromotions(): ServiceProxyResponse;

	/**
	 * Returns up-to-date eligible 'promotions' for the user and a 'requiredRefresh' flag indicating whether the user's promotion info required refreshing
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	refreshPromotions(): ServiceProxyResponse;

	/**
	 * This a hook only operation for processing purchase reward success.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	purchaseRewardHook(): ServiceProxyResponse;

	/**
	 * Mock version of return purchase.
	 * 
	 * @param  {string} storeId Store type.
	 * @param  {string} transactionId Id of transaction to return.
	 * @returns ServiceProxyResponse
	 */ 
	returnPurchase (mock)(storeId: string, transactionId: string): ServiceProxyResponse;
}