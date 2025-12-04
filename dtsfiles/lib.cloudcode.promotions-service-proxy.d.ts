/// <reference no-default-lib="true"/>

interface PromotionsServiceProxy {
	/**
	 * Returns the list of configured promotions (without full details).
	 * 
	 * @param  {string} type SCHEDULED or AUTOMATED to filter specific type, or empty string to return all promotions.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetPromotionList(type: string): ServiceProxyResponse;

	/**
	 * Returns the full configuration data of the specified promotion.
	 * 
	 * @param  {long} promotionId ID uniquely identifying the promotion to read.
	 * @returns ServiceProxyResponse
	 */ 
	sysReadPromotion(promotionId: long): ServiceProxyResponse;

	/**
	 * Creates a new promotion. The full promotion JSON (minus the promotionId) should be provided. The full promotion JSON, including the created promotionId, will be returned as a result (similar to SysReadPromotion())
	 * 
	 * @param  {nativeObject} promotionJson The full promotion JSON (minus the promotionId).
	 * @returns ServiceProxyResponse
	 */ 
	sysCreatePromotion(promotionJson: nativeObject): ServiceProxyResponse;

	/**
	 * Updates the specified promotion with the provided promotionJson. Any promotionId included in the promotionJson will be ignored.
	 * 
	 * @param  {long} promotionId ID uniquely identifying the promotion to update. Note: If promotionId is included in the promotionJson, it is ignored. The promotionId provided as a direct parameter takes priority.
	 * @param  {integer} version Version of the promotion to update. Can bypass version check by passing in -1.
	 * @param  {nativeObject} promotionJson The promotion JSON (minus the promotionId).
	 * @returns ServiceProxyResponse
	 */ 
	sysUpdatePromotion(promotionId: long, version: integer, promotionJson: nativeObject): ServiceProxyResponse;

	/**
	 * Deletes the specified promotion from the server.
	 * 
	 * @param  {long} promotionId ID uniquely identifying the promotion to update. Note: If promotionId is included in the promotionJson, it is ignored. The promotionId provided as a direct parameter takes priority.
	 * @param  {integer} version Version of the promotion to update. Can bypass version check by passing in -1.
	 * @returns ServiceProxyResponse
	 */ 
	sysDeletePromotion(promotionId: long, version: integer): ServiceProxyResponse;

	/**
	 * Enable/Disable a promotion. A convenience API for easily toggling a promotion on/off.
	 * 
	 * @param  {long} promotionId ID uniquely identifying the promotion to update. Note: If promotionId is included in the promotionJson, it is ignored. The promotionId provided as a direct parameter takes priority.
	 * @param  {integer} version Version of the promotion to enable/disable. Can bypass version check by passing in -1.
	 * @param  {boolean} enabled Flag true to enable promotion, false to disable promotion.
	 * @returns ServiceProxyResponse
	 */ 
	sysEnablePromotion(promotionId: long, version: integer, enabled: boolean): ServiceProxyResponse;
}