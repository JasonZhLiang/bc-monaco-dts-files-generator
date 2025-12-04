/// <reference no-default-lib="true"/>

interface ProductServiceProxy {
	/**
	 * Retrieve the user's currency account.  Optional parameters: vc_id (if retrieving all currencies).
	 * 
	 * @param  {string} vc_id The currency type to retrieve or null if all currency types are being requested.
	 * @returns ServiceProxyResponse
	 */ 
	getCurrency(vc_id: string): ServiceProxyResponse;

	/**
	 * Retrieve the parent user's currency account.  Optional parameters: vc_id (if retrieving all currencies).
	 * 
	 * @param  {string} vc_id The currency type to retrieve or null if all currency types are being requested.
	 * @param  {string} levelName The name of the parent level.
	 * @returns ServiceProxyResponse
	 */ 
	getParentCurrency(vc_id: string, levelName: string): ServiceProxyResponse;

	/**
	 * Resets the user's currency back to zero.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	resetCurrency(): ServiceProxyResponse;

	/**
	 * Resets the parent user's currency back to zero.
	 * 
	 * @param  {string} levelName The name of the parent level.
	 * @returns ServiceProxyResponse
	 */ 
	resetParentCurrency(levelName: string): ServiceProxyResponse;

	/**
	 * Award user the specified amount of currency. Returns the new currency values.
	 * 
	 * @param  {string} vc_id The currency type to award.
	 * @param  {long} vc_amount The amount of currency to award.
	 * @returns ServiceProxyResponse
	 */ 
	awardCurrency(vc_id: string, vc_amount: long): ServiceProxyResponse;

	/**
	 * Award parent user the specified amount of currency. Returns the new currency values.
	 * 
	 * @param  {string} vc_id The currency type to award.
	 * @param  {long} vc_amount The amount of currency to award.
	 * @param  {string} levelName The name of the parent level.
	 * @returns ServiceProxyResponse
	 */ 
	awardParentCurrency(vc_id: string, vc_amount: long, levelName: string): ServiceProxyResponse;

	/**
	 * Consume the specified amount of currency from the user.
	 * 
	 * @param  {string} vc_id The currency type to consume.
	 * @param  {long} vc_amount The amount of currency to consume.
	 * @returns ServiceProxyResponse
	 */ 
	consumeCurrency(vc_id: string, vc_amount: long): ServiceProxyResponse;

	/**
	 * Consume the specified amount of currency from the parent user.
	 * 
	 * @param  {string} vc_id The currency type to consume.
	 * @param  {long} vc_amount The amount of currency to consume.
	 * @param  {string} levelName The name of the parent level.
	 * @returns ServiceProxyResponse
	 */ 
	consumeParentCurrency(vc_id: string, vc_amount: long, levelName: string): ServiceProxyResponse;

	/**
	 * Retrieves the list of products for a platform [appworld | facebook | googlePlay | itunes | steam | windows | windowsPhone].  The user_currency parameter is only required for facebook and steam.  The product category parameter is optional.
	 * 
	 * @param  {string} platform The store platform.
	 * @param  {string} user_currency The currency to retrieve the sales inventory for. This is only used for Steam and Facebook stores.
	 * @returns ServiceProxyResponse
	 */ 
	getSalesInventory(platform: string, user_currency: string): ServiceProxyResponse;

	/**
	 * Retrieves the list of products for a platform [appworld | facebook | googlePlay | itunes | steam | windows | windowsPhone].  The user_currency parameter is only required for facebook and steam.  The product category parameter is optional.
	 * 
	 * @param  {string} platform The store platform.
	 * @param  {string} user_currency The currency to retrieve the sales inventory for. This is only used for Steam and Facebook stores.
	 * @param  {string} category The product category.
	 * @returns ServiceProxyResponse
	 */ 
	getSalesInventoryByCategory(platform: string, user_currency: string, category: string): ServiceProxyResponse;

	/**
	 * Retrieves eligible promotions.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	getEligiblePromotions(): ServiceProxyResponse;

	/**
	 * Verifies receipt returned by iTunes purchase
	 * 
	 * @param  {string} receipt The iTunes receipt **`payload`** string.
	 * @returns ServiceProxyResponse
	 */ 
	verifyItunesReceipt(receipt: string): ServiceProxyResponse;

	/**
	 * Used to manually consume user's peer currencies.
	 * 
	 * @param  {string} vc_id Type of currency (Ex. ticket, tokens.)
	 * @param  {long} vc_amount The amount of currency to be consumed.
	 * @param  {string} peer The name of the peer.
	 * @returns ServiceProxyResponse
	 */ 
	consumePeerCurrency(vc_id: string, vc_amount: long, peer: string): ServiceProxyResponse;

	/**
	 * Used to manually award additional currency to the user's peer currencies.
	 * 
	 * @param  {string} vc_id Type of currency (Ex. ticket, tokens.)
	 * @param  {long} vc_amount Currency amount to be awarded.
	 * @param  {string} peer The name of the peer.
	 * @returns ServiceProxyResponse
	 */ 
	awardPeerCurrency(vc_id: string, vc_amount: long, peer: string): ServiceProxyResponse;

	/**
	 * Verifies receipt returned by Facebook purchase.
	 * 
	 * @param  {string} signed_request signed_request object received from Facebook.
	 * @returns ServiceProxyResponse
	 */ 
	confirmFacebookPurchase(signed_request: string): ServiceProxyResponse;

	/**
	 * Start a steam in-app purchaser.
	 * 
	 * @param  {string} itemId Items to purchase.
	 * @param  {string} language The ISO 639-1 language code.
	 * @returns ServiceProxyResponse
	 */ 
	startSteamTransaction(itemId: string, language: string): ServiceProxyResponse;

	/**
	 * Finalizes a steam in-app purchaser.
	 * 
	 * @param  {string} transId The Steam transaction id.
	 * @returns ServiceProxyResponse
	 */ 
	finalizeSteamTransaction(transId: string): ServiceProxyResponse;

	/**
	 * Verifies validity of receipt issued by Microsoft on purchase.
	 * 
	 * @param  {string} receipt Receipt XML.
	 * @returns ServiceProxyResponse
	 */ 
	verifyMicrosoftReceipt(receipt: string): ServiceProxyResponse;

	/**
	 * Confirms a GooglePlay purchase transaction.
	 * 
	 * @param  {string} orderId Google Play `orderId` ("GPA.####-####-####-#####")
	 * @param  {string} productId Google Play `productId` ("com.acme.runner.birdseed1")
	 * @param  {string} token Google Play `purchaseToken` ("bhcmgnlflegpffpbcpeknjpi.AO-J1Oy_...")
	 * @returns ServiceProxyResponse
	 */ 
	confirmGooglePlayPurchase(orderId: string, productId: string, token: string): ServiceProxyResponse;
}