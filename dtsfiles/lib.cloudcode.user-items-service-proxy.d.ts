/// <reference no-default-lib="true"/>

interface UserItemsServiceProxy {
	/**
	 * Retrieves the identified user item from the server. If includeDef is true, response includes associated itemDef with language fields limited to the current or default language.
	 * 
	 * @param  {string} itemId The unique id of the user item.
	 * @param  {boolean} includeDef If true, the associated item definition will be included in the response.
	 * @returns ServiceProxyResponse
	 */ 
	getUserItem(itemId: string, includeDef: boolean): ServiceProxyResponse;

	/**
	 * Retrieves the page of user's inventory from the server based on the context. If includeDef is true, response includes associated itemDef with each user item, with language fields limited to the current or default language.
	 * 
	 * @param  {nativeObject} context The json context for the page request.
	 * @param  {boolean} includeDef If true, the associated item definition will be included in the response.
	 * @returns ServiceProxyResponse
	 */ 
	getUserItemsPage(context: nativeObject, includeDef: boolean): ServiceProxyResponse;

	/**
	 * Retrieves the page of user's inventory from the server based on the encoded context. If includeDef is true, response includes associated itemDef with each user item, with language fields limited to the current or default language.
	 * 
	 * @param  {string} context The context string returned from the server from a previous call to GetUserItemsPage or GetUserItemsPageOffset.
	 * @param  {long} pageOffset The positive or negative page offset to fetch. Uses the last page retrieved using the context string to determine a starting point.
	 * @param  {boolean} includeDef If true, the associated item definition will be included in the response.
	 * @returns ServiceProxyResponse
	 */ 
	getUserItemsPageOffset(context: string, pageOffset: long, includeDef: boolean): ServiceProxyResponse;

	/**
	 * Allows item(s) to be awarded to a user without collecting the purchase amount. If includeDef is true, response includes associated itemDef with language fields limited to the current or default language.
	 * 
	 * @param  {string} defId The unique id of the item definition to award.
	 * @param  {integer} quantity The quantity of the item to award.
	 * @param  {boolean} includeDef If true, the associated item definition will be included in the response.
	 * @returns ServiceProxyResponse
	 */ 
	awardUserItem(defId: string, quantity: integer, includeDef: boolean): ServiceProxyResponse;

	/**
	 * Allows a quantity of a specified user item to be dropped, without any recovery of the money paid for the item. If any quantity of the user item remains, it will be returned, potentially with the associated itemDef (with language fields limited to the current or default language).
	 * 
	 * @param  {string} itemId The unique id of the user item.
	 * @param  {integer} quantity The quantity of the user item to drop.
	 * @param  {boolean} includeDef If true and any quantity of the user item remains, the associated item definition will be included in the response.
	 * @returns ServiceProxyResponse
	 */ 
	dropUserItem(itemId: string, quantity: integer, includeDef: boolean): ServiceProxyResponse;

	/**
	 * Purchases a quantity of an item from the specified store, if the user has enough funds. If includeDef is true, response includes associated itemDef with language fields limited to the current or default language.
	 * 
	 * @param  {string} defId The unique id of the item definition to purchase.
	 * @param  {integer} quantity The quantity of the item to purchase.
	 * @param  {string} shopId The id identifying the store the item is being purchased from.
	 * @param  {boolean} includeDef If true, the associated item definition will be included in the response.
	 * @returns ServiceProxyResponse
	 */ 
	purchaseUserItem(defId: string, quantity: integer, shopId: string, includeDef: boolean): ServiceProxyResponse;

	/**
	 * Allows a quantity of a specified user item to be sold. If any quantity of the user item remains, it will be returned, potentially with the associated itemDef (with language fields limited to the current or default language), along with the currency refunded and currency balances.
	 * 
	 * @param  {string} itemId The unique id of the user item.
	 * @param  {integer} version The version of the user item being sold.
	 * @param  {integer} quantity The quantity of the user item to sell.
	 * @param  {string} shopId The id identifying the store the item is being sold to.
	 * @param  {boolean} includeDef If true and any quantity of the user item remains, the associated item definition will be included in the response.
	 * @returns ServiceProxyResponse
	 */ 
	sellUserItem(itemId: string, version: integer, quantity: integer, shopId: string, includeDef: boolean): ServiceProxyResponse;

	/**
	 * Gifts item to the specified player.
	 * 
	 * @param  {string} profileId The ID of the recipient's user profile.
	 * @param  {string} itemId The ID uniquely identifying the user item to be transferred.
	 * @param  {integer} version The version of the user item being transferred.
	 * @param  {integer} quantity The quantity of the user item to transfer.
	 * @param  {boolean} immediate Flag set to true if item is to be immediately transferred, otherwise false to have the recipient sent an event and transfer item only when recipient calls receiveUserItemFrom.
	 * @returns ServiceProxyResponse
	 */ 
	giveUserItemTo(profileId: string, itemId: string, version: integer, quantity: integer, immediate: boolean): ServiceProxyResponse;

	/**
	 * Retrieves and transfers the gift item from the specified player, who must have previously called giveUserItemTo with immediate false.
	 * 
	 * @param  {string} profileId The profile ID of the user who is giving the item.
	 * @param  {string} itemId The ID uniquely identifying the user item to be transferred.
	 * @returns ServiceProxyResponse
	 */ 
	receiveUserItemFrom(profileId: string, itemId: string): ServiceProxyResponse;

	/**
	 * Updates the item data on the specified user item.
	 * 
	 * @param  {string} itemId The unique id of the user item.
	 * @param  {integer} version The version of the user item being updated.
	 * @param  {nativeObject} newItemData New item data to replace existing user item data.
	 * @returns ServiceProxyResponse
	 */ 
	updateUserItemData(itemId: string, version: integer, newItemData: nativeObject): ServiceProxyResponse;

	/**
	 * Uses the specified item, potentially consuming it.
	 * 
	 * @param  {string} itemId The unique id of the user item.
	 * @param  {integer} version The version of the user item being used.
	 * @param  {nativeObject} newItemData Optional item data to replace existing user item data. Specify null to leave item data unchanged. Specify empty map to clear item data.
	 * @param  {boolean} includeDef If true, the associated item definition will be included in the response.
	 * @returns ServiceProxyResponse
	 */ 
	useUserItem(itemId: string, version: integer, newItemData: nativeObject, includeDef: boolean): ServiceProxyResponse;

	/**
	 * Publishes the specified item to the item management attached blockchain. Results are reported asynchronously via an RTT event.
	 * 
	 * @param  {string} itemId The unique id of the user item.
	 * @param  {integer} version The version of the user item being published.
	 * @returns ServiceProxyResponse
	 */ 
	publishUserItemToBlockchain(itemId: string, version: integer): ServiceProxyResponse;

	/**
	 * Syncs the caller's user items with the item management attached blockchain. Results are reported asynchronously via an RTT event.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	refreshBlockchainUserItems(): ServiceProxyResponse;

	/**
	 * Removes the specified item from the item management attached blockchain. Results are reported asynchronously via an RTT event.
	 * 
	 * @param  {string} itemId The unique id of the user item.
	 * @param  {integer} version The version of the user item being removed.
	 * @returns ServiceProxyResponse
	 */ 
	removeUserItemFromBlockchain(itemId: string, version: integer): ServiceProxyResponse;
}