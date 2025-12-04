/// <reference no-default-lib="true"/>

interface RedemptionCodeServiceProxy {
	/**
	 * Redeem a code. Optional parameters: customRedemptionInfo.
	 * 
	 * @param  {String} scanCode The scan code to redeem.
	 * @param  {String} codeType The type of the scan code.
	 * @param  {NativeObject} customRedemptionInfo Optional JSON string containing custom redemption data.
	 * @returns ServiceProxyResponse
	 */ 
	redeemCode(scanCode: string, codeType: string, customRedemptionInfo: Object): {
    data: 
    {
        gameId: string;
        scanCode: string;
        codeType: string;
        redemptionCodeId: string;
        version: number;
        codeState: string;
        customCodeInfo: 
        {
        };
        customRedemptionInfo: 
        {
        };
        redeemedByProfileId: string;
        redeemedByProfileName: string;
        invalidationReason: any | null;
        createdAt: number;
        activatedAt: number;
        redeemedAt: number;
        invalidatedAt: any | null;
        updatedAt: number;
    };
    status: number;
};

	/**
	 * Callback with asynchronous response for the redemption code service to process for an asynchronous redemption code.
	 * 
	 * @param  {String} scanCode The scan code being redeemed. Required.
	 * @param  {String} redemptionCodeId The redemption code id of the redemption code being processed. Required.
	 * @param  {String} codeType The type of the scan code. Optional.
	 * @param  {Integer} attempt The applicable attempt number associated with the redemption attempt being processed. Required.
	 * @param  {NativeObject} asyncResponse Required asynchronous response info, as JSON object, indicating status via success and complete flags, along with applicable, but optional, customRedemptionInfo (JSON object) and/or errorCode (Integer) and errorMsg (String).  Note: A timeout exception is thrown if the max asynchronous processing time (configured for the associated redemption code type) has been exceeded and processing is still in progress (complete: false).
	 * @returns ServiceProxyResponse
	 */ 
	processAsynchronousResponse(scanCode: string, redemptionCodeId: string, codeType: string, attempt: number, asyncResponse: Object): {
    data: 
    {
        gameId: string;
        scanCode: string;
        codeType: string;
        redemptionCodeId: string;
        version: number;
        codeState: string;
        customCodeInfo: 
        {
            factoryId: number;
        };
        customRedemptionInfo: 
        {
            transaction_id: string;
        };
        redeemedByProfileId: any | null;
        redeemedByProfileName: any | null;
        invalidationReason: any | null;
        createdAt: number;
        activatedAt: number;
        redeemedAt: any | null;
        invalidatedAt: any | null;
        updatedAt: number;
        currentAttempt: number;
        status: 
        {
            attempt: number;
            attemptedAt: number;
            attemptedBy: string;
            scriptId: string;
            scriptVersion: number;
            attemptState: string;
            response: 
            {
                success: number;
                complete: number;
                customRedemptionInfo: 
                {
                    transaction_id: string;
                };
                errorCode: any | null;
                errorMsg: any | null;
            };
        };
    };
    status: number;
};

	/**
	 * Retrieve the codes already redeemed by user. Optional parameters: codeType.
	 * 
	 * @param  {String} codeType Optional type of codes to retrieve. Returns all codes if left unspecified.
	 * @returns ServiceProxyResponse
	 */ 
	getRedeemedCodes(codeType: string): {
    status: number;
    data: 
    {
        codes: Array<
        {
            gameId: string;
            scanCode: string;
            codeType: string;
            version: number;
            codeState: string;
            customCodeInfo: 
            {
            };
            customRedemptionInfo: 
            {
            };
            redeemedByProfileId: string;
            redeemedByProfileName: string;
            invalidationReason: any | null;
            createdAt: number;
            activatedAt: any | null;
            redeemedAt: number;
            invalidatedAt: any | null;
        }>;
    };
};

	/**
	 * Add a redemption code for a single-use ('personal') code type. Optional parameters: codeState and customCodeInfo.
	 * 
	 * @param  {String} scanCode A scan code. Warning: If the scanCode added is less than 25 characters, the optional codeType must be specified in order to redeem it.
	 * @param  {String} codeType The single-use ('personal') code type.
	 * @param  {String} codeState Initial state of the redemption code.
	 * @param  {NativeObject} customCodeInfo Optional custom information.
	 * @returns ServiceProxyResponse
	 */ 
	addCode(scanCode: string, codeType: string, codeState: string, customCodeInfo: Object): {
    data: 
    {
        gameId: string;
        scanCode: string;
        codeType: string;
        redemptionCodeId: string;
        version: number;
        codeState: string;
        customCodeInfo: 
        {
        };
        customRedemptionInfo: 
        {
        };
        redeemedByProfileId: any | null;
        redeemedByProfileName: any | null;
        invalidationReason: any | null;
        createdAt: number;
        activatedAt: number;
        redeemedAt: any | null;
        invalidatedAt: any | null;
        updatedAt: number;
    };
    status: number;
};

	/**
	 * Activate a redemption code for a single-use ('personal') code type. Optional parameters: customCodeInfo.
	 * 
	 * @param  {String} scanCode The single-use ('personal') code type.
	 * @param  {String} codeType The code type.
	 * @param  {NativeObject} customCodeInfo Optional custom information.
	 * @returns ServiceProxyResponse
	 */ 
	activateCode(scanCode: string, codeType: string, customCodeInfo: Object): {
    data: 
    {
        gameId: string;
        scanCode: string;
        codeType: string;
        redemptionCodeId: string;
        version: number;
        codeState: string;
        customCodeInfo: 
        {
        };
        customRedemptionInfo: 
        {
        };
        redeemedByProfileId: any | null;
        redeemedByProfileName: any | null;
        invalidationReason: any | null;
        createdAt: number;
        activatedAt: number;
        redeemedAt: any | null;
        invalidatedAt: any | null;
        updatedAt: number;
    };
    status: number;
};

	/**
	 * Invalidate a redemption code for a single-use ('personal') code type.
	 * 
	 * @param  {String} scanCode The scan code.
	 * @param  {String} codeType The single-use ('personal') code type.
	 * @param  {String} invalidationReason Optional custom information.
	 * @returns ServiceProxyResponse
	 */ 
	invalidateCode(scanCode: string, codeType: string, invalidationReason: string): {
    data: 
    {
        gameId: string;
        scanCode: string;
        codeType: string;
        redemptionCodeId: string;
        version: number;
        codeState: string;
        customCodeInfo: 
        {
        };
        customRedemptionInfo: 
        {
        };
        redeemedByProfileId: any | null;
        redeemedByProfileName: any | null;
        invalidationReason: string;
        createdAt: number;
        activatedAt: number;
        redeemedAt: any | null;
        invalidatedAt: number;
        updatedAt: number;
    };
    status: number;
};

	/**
	 * Update the custom information for a redemption code for a single-use ('personal') code type.
	 * 
	 * @param  {String} scanCode The scan code.
	 * @param  {String} codeType The single-use ('personal') code type.
	 * @param  {Long} version Current version of the redemption code (for concurrency checking.)
	 * @param  {NativeObject} customCodeInfo Optional custom information.
	 * @returns ServiceProxyResponse
	 */ 
	updateCustomInfo(scanCode: string, codeType: string, version: number, customCodeInfo: Object): {
    data: 
    {
        gameId: string;
        scanCode: string;
        codeType: string;
        redemptionCodeId: string;
        version: number;
        codeState: string;
        customCodeInfo: 
        {
            new_key: string;
        };
        customRedemptionInfo: 
        {
        };
        redeemedByProfileId: any | null;
        redeemedByProfileName: any | null;
        invalidationReason: string;
        createdAt: number;
        activatedAt: number;
        redeemedAt: any | null;
        invalidatedAt: number;
        updatedAt: number;
    };
    status: number;
};

	/**
	 * Generates specified quantity of redemption codes for a single-use ('personal') code type.
	 * 
	 * @param  {String} codeType The single-use ('personal') code type.
	 * @param  {String} codeState Optional. Initial state of the redemption code: 'Inactive' or 'Available'. Defaults to 'Inactive'.
	 * @param  {Long} quantity The quantity of scan codes to be generated.
	 * @param  {NativeObject} customCodeInfo Optional custom information, as JSON object.
	 * @param  {String} prefix Prefix for all scan codes generate. Optional.
	 * @param  {String} algorithmName Name of the algorithm to be used to generate the codes. Currently supporting 'StructuredGuid' and 'FiveByFive'.
	 * @param  {NativeObject} algorithmDetailsJson Optional algorithm details, as JSON object.
	 * @param  {String} emailAddress Email address to send to for background generated codes. Optional.
	 * @returns ServiceProxyResponse
	 */ 
	generateCodes(codeType: string, codeState: string, quantity: number, customCodeInfo: Object, prefix: string, algorithmName: string, algorithmDetailsJson: Object, emailAddress: string): {
    data: 
    {
        message: string;
    };
    status: number;
};

	/**
	 * Generates specified quantity of redemption codes, for a single-use ('personal') code type, inline. Response indicates list of 'generatedScanCodes' on success.
	 * 
	 * @param  {String} codeType The single-use ('personal') code type.
	 * @param  {String} codeState Optional. Initial state of the redemption code: 'Inactive' or 'Available'. Defaults to 'Inactive'.
	 * @param  {Long} quantity The quantity of scan codes to be generated.
	 * @param  {NativeObject} customCodeInfo Optional custom information, as JSON object.
	 * @param  {String} prefix Prefix for all scan codes generate. Optional.
	 * @param  {String} algorithmName Name of the algorithm to be used to generate the codes. Currently supporting 'StructuredGuid' and 'FiveByFive'.
	 * @param  {NativeObject} algorithmDetailsJson Optional algorithm details, as JSON object.
	 * @returns ServiceProxyResponse
	 */ 
	generateCodesInline(codeType: string, codeState: string, quantity: number, customCodeInfo: Object, prefix: string, algorithmName: string, algorithmDetailsJson: Object): {
    data: 
    {
        generatedScanCodes: Array<string>;
        message: string;
    };
    status: number;
};

	/**
	 * Add a new, multi-use redemption code type configuration
	 * 
	 * @param  {String} codeType The unique code type.
	 * @param  {NativeObject} jsonOptions The multi-use code type configuration options, as JSON object. Required options are 'scanCode', 'validStart', and 'validEnd'. The 'scanCode' option must be unique and not exceed 20 characters. A 'maxRedemptions' of null indicates no limit. The 'customCodeInfo' will be applied to the multi-use codes upon redemption processing. For custom redemption codes, set a valid 'redemptionCodeScriptId' or, if null, the 'redemptionCodeScriptFullPathName' will be checked and, if valid, used to set the applicable script id. The 'async', 'maxRetries' and 'timeout' (in seconds) are only applicable if a valid 'redemptionScriptId' is specified.
	 * @returns ServiceProxyResponse
	 */ 
	sysAddMultiUseCodeType(codeType: string, jsonOptions: Object): {
    data: 
    {
        codeType: string;
        description: string;
        version: number;
        createdAt: number;
        updatedAt: number;
        async: number;
        maxRetries: number;
        isDisabled: number;
        customCodeInfo: 
        {
        };
        validStart: number;
        validEnd: number;
        codeUseType: string;
        scanCode: string;
        maxRedemptions: number;
    };
    status: number;
};

	/**
	 * Gets the page of redemption code type configuration information from the server based on the specified context.
	 * 
	 * @param  {NativeObject} context The json context for the page request.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetCodeTypePage(context: Object): {
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
                gameId: string;
                codeType: string;
                description: string;
                version: number;
                createdAt: number;
                updatedAt: number;
                async: number;
                maxRetries: number;
                isDisabled: number;
                customCodeInfo: 
                {
                };
                validStart: number;
                validEnd: number;
                codeUseType: string;
                scanCode: string;
                maxRedemptions: number;
            }>;
            moreAfter: number;
            moreBefore: number;
        };
    };
    status: number;
};

	/**
	 * Gets the page of redemption code type configuration information from the server based on the encoded context and specified page offset.
	 * 
	 * @param  {NativeObject} context The context string returned from the server from a previous call to SysGetCodeTypePage or SysGetCodeTypePageOffset.
	 * @param  {Integer} pageOffset The positive or negative page offset to fetch. Uses the last page retrieved using the context string to determine a starting point.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetCodeTypePageOffset(context: Object, pageOffset: number): {
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
                gameId: string;
                codeType: string;
                description: string;
                version: number;
                createdAt: number;
                updatedAt: number;
                async: number;
                maxRetries: number;
                isDisabled: number;
                customCodeInfo: 
                {
                };
                validStart: number;
                validEnd: number;
                codeUseType: string;
                scanCode: string;
                maxRedemptions: number;
            }>;
            moreAfter: number;
            moreBefore: number;
        };
    };
    status: number;
};
}