/// <reference no-default-lib="true"/>

interface VirtualCurrencyServiceProxy {
	/**
	 * Retrieve the user's currency account.  Optional parameters: vcId (if retrieving all currencies).
	 * 
	 * @param  {string} vcId The currency type to retrieve or null if all currency types are being requested.
	 * @returns ServiceProxyResponse
	 */ 
	getCurrency(vcId: string): ServiceProxyResponse;

	/**
	 * Retrieve the parent user's currency account.  Optional parameters: vcId (if retrieving all currencies).
	 * 
	 * @param  {string} vcId The currency type to retrieve or null if all currency types are being requested.
	 * @param  {string} levelName The name of the parent level.
	 * @returns ServiceProxyResponse
	 */ 
	getParentCurrency(vcId: string, levelName: string): ServiceProxyResponse;

	/**
	 * Retrieve the peer user's currency account.  Optional parameters: vcId (if retrieving all currencies).
	 * 
	 * @param  {string} vcId The currency type to retrieve or null if all currency types are being requested.
	 * @param  {string} peerCode The name of the peer.
	 * @returns ServiceProxyResponse
	 */ 
	getPeerCurrency(vcId: string, peerCode: string): ServiceProxyResponse;

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
	 * @param  {long} vcAmount The amount of currency to award.
	 * @returns ServiceProxyResponse
	 */ 
	awardCurrency(vcId: string, vcAmount: long): ServiceProxyResponse;

	/**
	 * Award parent user the specified amount of currency. Returns the new currency values.
	 * 
	 * @param  {string} vcId The currency type to award.
	 * @param  {long} vcAmount The amount of currency to award.
	 * @param  {string} levelName The name of the parent level.
	 * @returns ServiceProxyResponse
	 */ 
	awardParentCurrency(vcId: string, vcAmount: long, levelName: string): ServiceProxyResponse;

	/**
	 * Used to manually award additional currency to the user.
	 * 
	 * @param  {string} vcId Type of currency (Ex. ticket, tokens.)
	 * @param  {long} vcAmount A currency amount to award.
	 * @param  {string} peerCode The name of the peer.
	 * @returns ServiceProxyResponse
	 */ 
	awardPeerCurrency(vcId: string, vcAmount: long, peerCode: string): ServiceProxyResponse;

	/**
	 * Consume the specified amount of currency from the user.
	 * 
	 * @param  {string} vcId The currency type to consume.
	 * @param  {long} vcAmount The amount of currency to consume.
	 * @returns ServiceProxyResponse
	 */ 
	consumeCurrency(vcId: string, vcAmount: long): ServiceProxyResponse;

	/**
	 * Consume the specified amount of currency from the user.
	 * 
	 * @param  {string} vcId The currency type to consume.
	 * @param  {long} vcAmount The amount of currency to consume.
	 * @param  {string} levelName The name of the parent level.
	 * @returns ServiceProxyResponse
	 */ 
	consumeParentCurrency(vcId: string, vcAmount: long, levelName: string): ServiceProxyResponse;

	/**
	 * Used to manually consume game currencies.
	 * 
	 * @param  {string} vcId Type of currency (Ex. ticket, tokens.)
	 * @param  {long} vcAmount The amount of currency to be consumed.
	 * @param  {string} peerCode The name of the peer.
	 * @returns ServiceProxyResponse
	 */ 
	consumePeerCurrency(vcId: string, vcAmount: long, peerCode: string): ServiceProxyResponse;

	/**
	 * Retrieves the virtual currency types defined for the current app.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	sysGetCurrencyTypes(): ServiceProxyResponse;

	/**
	 * Retrieves the virtual currency types inherited from the parent app(s).
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	sysGetParentCurrencyTypes(): ServiceProxyResponse;

	/**
	 * Retrieves the virtual currency types inherited from the configured peer apps.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	sysGetPeerCurrencyTypes(): ServiceProxyResponse;
}