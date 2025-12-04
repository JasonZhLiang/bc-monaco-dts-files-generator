/// <reference no-default-lib="true"/>

interface RedemptionCodeServiceProxy {
	/**
	 * Redeem a code. Optional parameters: customRedemptionInfo.
	 * 
	 * @param  {string} scanCode The scan code to redeem.
	 * @param  {string} codeType The type of the scan code.
	 * @param  {nativeObject} customRedemptionInfo Optional JSON string containing custom redemption data.
	 * @returns ServiceProxyResponse
	 */ 
	redeemCode(scanCode: string, codeType: string, customRedemptionInfo: nativeObject): ServiceProxyResponse;

	/**
	 * Callback with asynchronous response for the redemption code service to process for an asynchronous redemption code.
	 * 
	 * @param  {string} scanCode The scan code being redeemed. Required.
	 * @param  {string} redemptionCodeId The redemption code id of the redemption code being processed. Required.
	 * @param  {string} codeType The type of the scan code. Optional.
	 * @param  {integer} attempt The applicable attempt number associated with the redemption attempt being processed. Required.
	 * @param  {nativeObject} asyncResponse Required asynchronous response info, as JSON object, indicating status via success and complete flags, along with applicable, but optional, customRedemptionInfo (JSON object) and/or errorCode (Integer) and errorMsg (String).  Note: A timeout exception is thrown if the max asynchronous processing time (configured for the associated redemption code type) has been exceeded and processing is still in progress (complete: false).
	 * @returns ServiceProxyResponse
	 */ 
	processAsynchronousResponse(scanCode: string, redemptionCodeId: string, codeType: string, attempt: integer, asyncResponse: nativeObject): ServiceProxyResponse;

	/**
	 * Retrieve the codes already redeemed by user. Optional parameters: codeType.
	 * 
	 * @param  {string} codeType Optional type of codes to retrieve. Returns all codes if left unspecified.
	 * @returns ServiceProxyResponse
	 */ 
	getRedeemedCodes(codeType: string): ServiceProxyResponse;

	/**
	 * Add a redemption code. Optional parameters: codeState and customCodeInfo.
	 * 
	 * @param  {string} scanCode A scan code.
	 * @param  {string} codeType The code type.
	 * @param  {string} codeState Initial state of the redemption code.
	 * @param  {nativeObject} customCodeInfo Optional custom information.
	 * @returns ServiceProxyResponse
	 */ 
	addCode(scanCode: string, codeType: string, codeState: string, customCodeInfo: nativeObject): ServiceProxyResponse;

	/**
	 * Activate a redemption code. Optional parameters: customCodeInfo.
	 * 
	 * @param  {string} scanCode The scan code.
	 * @param  {string} codeType The code type.
	 * @param  {nativeObject} customCodeInfo Optional custom information.
	 * @returns ServiceProxyResponse
	 */ 
	activateCode(scanCode: string, codeType: string, customCodeInfo: nativeObject): ServiceProxyResponse;

	/**
	 * Invalidate a redemption code.
	 * 
	 * @param  {string} scanCode The scan code.
	 * @param  {string} codeType The code type.
	 * @param  {string} invalidationReason Optional custom information.
	 * @returns ServiceProxyResponse
	 */ 
	invalidateCode(scanCode: string, codeType: string, invalidationReason: string): ServiceProxyResponse;

	/**
	 * Update the custom information for a redemption code.
	 * 
	 * @param  {string} scanCode The scan code.
	 * @param  {string} codeType The code type.
	 * @param  {long} version Current version of the redemption code (for concurrency checking.)
	 * @param  {nativeObject} customCodeInfo Optional custom information.
	 * @returns ServiceProxyResponse
	 */ 
	updateCustomInfo(scanCode: string, codeType: string, version: long, customCodeInfo: nativeObject): ServiceProxyResponse;

	/**
	 * Generates specified quantity of redemption codes.
	 * 
	 * @param  {string} codeType The code type.
	 * @param  {string} codeState Optional. Initial state of the redemption code: 'Inactive' or 'Available'. Defaults to 'Inactive'.
	 * @param  {long} quantity The quantity of scan codes to be generated.
	 * @param  {nativeObject} customCodeInfo Optional custom information, as JSON object.
	 * @param  {string} prefix Prefix for all scan codes generate. Optional.
	 * @param  {string} algorithmName Name of the algorithm to be used to generate the codes. Currently supporting 'StructuredGuid' and 'FiveByFive'.
	 * @param  {nativeObject} algorithmDetailsJson Optional algorithm details, as JSON object.
	 * @param  {string} emailAddress Email address to send to for background generated codes. Optional.
	 * @returns ServiceProxyResponse
	 */ 
	generateCodes(codeType: string, codeState: string, quantity: long, customCodeInfo: nativeObject, prefix: string, algorithmName: string, algorithmDetailsJson: nativeObject, emailAddress: string): ServiceProxyResponse;

	/**
	 * Generates specified quantity of redemption codes inline. Response indicates list of 'generatedScanCodes' on success.
	 * 
	 * @param  {string} codeType The code type.
	 * @param  {string} codeState Optional. Initial state of the redemption code: 'Inactive' or 'Available'. Defaults to 'Inactive'.
	 * @param  {long} quantity The quantity of scan codes to be generated.
	 * @param  {nativeObject} customCodeInfo Optional custom information, as JSON object.
	 * @param  {string} prefix Prefix for all scan codes generate. Optional.
	 * @param  {string} algorithmName Name of the algorithm to be used to generate the codes. Currently supporting 'StructuredGuid' and 'FiveByFive'.
	 * @param  {nativeObject} algorithmDetailsJson Optional algorithm details, as JSON object.
	 * @returns ServiceProxyResponse
	 */ 
	generateCodesInline(codeType: string, codeState: string, quantity: long, customCodeInfo: nativeObject, prefix: string, algorithmName: string, algorithmDetailsJson: nativeObject): ServiceProxyResponse;
}