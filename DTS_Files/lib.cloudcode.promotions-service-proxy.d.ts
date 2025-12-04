/// <reference no-default-lib="true"/>

interface PromotionsServiceProxy {
	/**
	 * Returns the list of configured promotions (without full details).
	 * 
	 * @param  {String} type SCHEDULED or AUTOMATED to filter specific type, or empty string to return all promotions.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetPromotionList(type: string): {
    data: 
    {
        promotions: Array<
        {
            promotionId: number;
            type: string;
            name: string;
            enabled: number;
            segments: Array<any>;
            startAt: number;
            endAt: number;
            createdAt: number;
            updatedAt: number;
            version: number;
        }>;
    };
    status: number;
};

	/**
	 * Returns the full configuration data of the specified promotion.
	 * 
	 * @param  {Long} promotionId ID uniquely identifying the promotion to read.
	 * @returns ServiceProxyResponse
	 */ 
	sysReadPromotion(promotionId: number): {
    data: 
    {
        promotion: 
        {
            promotionId: number;
            type: string;
            name: string;
            message: 
            {
                en: string;
            };
            enabled: number;
            segments: Array<any>;
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
            version: number;
        };
    };
    status: number;
};

	/**
	 * Creates a new SCHEDULED type promotion. The full promotion JSON (excluding the promotionId) should be provided. The full promotion JSON, including the created promotionId, will be returned as a result (similar to SysReadPromotion())
	 * 
	 * @param  {NativeObject} promotionJson The full SCHEDULED promotion JSON (excluding the promotionId).
	 * @returns ServiceProxyResponse
	 */ 
	sysCreatePromotion(promotionJson: Object): ServiceProxyResponse;

	/**
	 * Updates the specified promotion with the provided promotionJson. Any promotionId included in the promotionJson will be ignored.
	 * 
	 * @param  {Long} promotionId ID uniquely identifying the promotion to update. Note: If promotionId is included in the promotionJson, it is ignored. The promotionId provided as a direct parameter takes priority.
	 * @param  {Integer} version Version of the promotion to update. Can bypass version check by passing in -1.
	 * @param  {NativeObject} promotionJson The promotion JSON (minus the promotionId).
	 * @returns ServiceProxyResponse
	 */ 
	sysUpdatePromotion(promotionId: number, version: number, promotionJson: Object): ServiceProxyResponse;

	/**
	 * Deletes the specified promotion from the server.
	 * 
	 * @param  {Long} promotionId ID uniquely identifying the promotion to update. Note: If promotionId is included in the promotionJson, it is ignored. The promotionId provided as a direct parameter takes priority.
	 * @param  {Integer} version Version of the promotion to update. Can bypass version check by passing in -1.
	 * @returns ServiceProxyResponse
	 */ 
	sysDeletePromotion(promotionId: number, version: number): {
    data: any | null;
    status: number;
};

	/**
	 * Enable/Disable a promotion. A convenience API for easily toggling a promotion on/off.
	 * 
	 * @param  {Long} promotionId ID uniquely identifying the promotion to update. Note: If promotionId is included in the promotionJson, it is ignored. The promotionId provided as a direct parameter takes priority.
	 * @param  {Integer} version Version of the promotion to enable/disable. Can bypass version check by passing in -1.
	 * @param  {Boolean} enabled Flag true to enable promotion, false to disable promotion.
	 * @returns ServiceProxyResponse
	 */ 
	sysEnablePromotion(promotionId: number, version: number, enabled: boolean): {
    data: 
    {
        promotion: 
        {
            promotionId: number;
            type: string;
            name: string;
            message: 
            {
                en: string;
            };
            enabled: number;
            segments: Array<any>;
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
            version: number;
        };
    };
    status: number;
};

}