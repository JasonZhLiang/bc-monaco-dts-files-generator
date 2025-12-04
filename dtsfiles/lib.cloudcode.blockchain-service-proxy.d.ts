/// <reference no-default-lib="true"/>

interface BlockchainServiceProxy {
	/**
	 * Mints an NFT for the caller in response to the given redemption code.
	 * 
	 * @param  {string} integrationId The blockchain integration id. Currently only 'default' is supported.
	 * @param  {string} redemptionCodeId The internal id for the redemption code being redeemed.
	 * @param  {integer} attempt The redemption attempt number.
	 * @param  {string} codeType The type of redemption code being redeemed.
	 * @param  {nativeObject} mintDataJson JSON object containing blockchain provider specific data for minting NFTs.
	 * @returns ServiceProxyResponse
	 */ 
	mintNFTFromRedemptionCode(integrationId: string, redemptionCodeId: string, attempt: integer, codeType: string, mintDataJson: nativeObject): ServiceProxyResponse;

	/**
	 * Retrieves the transaction details for the given transaction id.
	 * 
	 * @param  {string} integrationId The blockchain integration id. Currently only 'default' is supported.
	 * @param  {string} transactionId The target transaction id.
	 * @returns ServiceProxyResponse
	 */ 
	getTransaction(integrationId: string, transactionId: string): ServiceProxyResponse;

	/**
	 * Retrieves the blockchain items owned by the caller.
	 * 
	 * @param  {string} integrationId The blockchain integration id. Currently only 'default' is supported.
	 * @param  {nativeObject} contextJson Optional. Reserved for future use.
	 * @returns ServiceProxyResponse
	 */ 
	getBlockchainItems(integrationId: string, contextJson: nativeObject): ServiceProxyResponse;

	/**
	 * Retrieves the uniqs owned by the caller.
	 * 
	 * @param  {string} integrationId The blockchain integration id. Currently only 'default' is supported.
	 * @param  {nativeObject} contextJson Optional. Reserved for future use.
	 * @returns ServiceProxyResponse
	 */ 
	getUniqs(integrationId: string, contextJson: nativeObject): ServiceProxyResponse;
}