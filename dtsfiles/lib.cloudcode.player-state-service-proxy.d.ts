/// <reference no-default-lib="true"/>

interface PlayerStateServiceProxy {
	/**
	 * Deletes the specified status.
	 * 
	 * @param  {string} statusName Name of the status.
	 * @returns ServiceProxyResponse
	 */ 
	clearUserStatus(statusName: string): ServiceProxyResponse;

	/**
	 * Read the state of the currently logged in user. Optional parameter: entityTypeFilter.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	readUserState(): ServiceProxyResponse;

	/**
	 * Deletes the user and data owned by the user.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	deleteUser(): ServiceProxyResponse;

	/**
	 * Deletes the data owned by the user but does not delete the user itself.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	resetUser(): ServiceProxyResponse;

	/**
	 * Update User name.
	 * 
	 * @param  {string} userName The name of the user.
	 * @returns ServiceProxyResponse
	 */ 
	updateUserName(userName: string): ServiceProxyResponse;

	/**
	 * Update User picture URL.
	 * 
	 * @param  {string} userPictureUrl URL to apply.
	 * @returns ServiceProxyResponse
	 */ 
	updateUserPictureUrl(userPictureUrl: string): ServiceProxyResponse;

	/**
	 * Update contact email.
	 * 
	 * @param  {string} contactEmail Updated email.
	 * @returns ServiceProxyResponse
	 */ 
	updateContactEmail(contactEmail: string): ServiceProxyResponse;

	/**
	 * Update summary friend data.
	 * 
	 * @param  {nativeObject} summaryFriendData A JSON string defining the summary data. For example `{ "xp":123, "level":12, "highScore":45123 }`
	 * @returns ServiceProxyResponse
	 */ 
	updateSummaryFriendData(summaryFriendData: nativeObject): ServiceProxyResponse;

	/**
	 * Get player attributes.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	getAttributes(): ServiceProxyResponse;

	/**
	 * Update player attributes.
	 * 
	 * @param  {nativeObject} attributes Single layer JSON string that is a set of key-value pairs.
	 * @param  {boolean} wipeExisting Whether to wipe existing attributes prior to update.
	 * @returns ServiceProxyResponse
	 */ 
	updateAttributes(attributes: nativeObject, wipeExisting: boolean): ServiceProxyResponse;

	/**
	 * Remove player attributes.
	 * 
	 * @param  {nativeArray} attributes Array of attribute names.
	 * @returns ServiceProxyResponse
	 */ 
	removeAttributes(attributes: nativeArray): ServiceProxyResponse;

	/**
	 * Update flag indicating player is a tester or not.
	 * 
	 * @param  {boolean} isTester Boolean flag to indicate if the profile belongs to a test account.
	 * @returns ServiceProxyResponse
	 */ 
	updateIsTester(isTester: boolean): ServiceProxyResponse;

	/**
	 * Resend validation email.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	resendValidationEmail(): ServiceProxyResponse;

	/**
	 * Logs player out of the server.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	logout(): ServiceProxyResponse;

	/**
	 * Set timed status for a user.
	 * 
	 * @param  {string} statusName Name of the status.
	 * @param  {long} durationSecs An active duration.
	 * @param  {nativeObject} details Json String to add additional details.
	 * @returns ServiceProxyResponse
	 */ 
	setUserStatus(statusName: string, durationSecs: long, details: nativeObject): ServiceProxyResponse;

	/**
	 * Stack user's statuses
	 * 
	 * @param  {string} statusName Name of the status.
	 * @param  {long} additionalSecs Add time to existing expiry time.
	 * @param  {nativeObject} details Json String to add additional details.
	 * @returns ServiceProxyResponse
	 */ 
	extendUserStatus(statusName: string, additionalSecs: long, details: nativeObject): ServiceProxyResponse;

	/**
	 * Get user status.
	 * 
	 * @param  {string} statusName Name of the status.
	 * @returns ServiceProxyResponse
	 */ 
	getUserStatus(statusName: string): ServiceProxyResponse;

	/**
	 * Update user's time zone offset preference on their profile.
	 * 
	 * @param  {double} timeZoneOffset New offset value
	 * @returns ServiceProxyResponse
	 */ 
	updateTimeZoneOffset(timeZoneOffset: double): ServiceProxyResponse;

	/**
	 * Update user's language code preference on their profile.
	 * 
	 * @param  {string} languageCode New language code
	 * @returns ServiceProxyResponse
	 */ 
	updateLanguageCode(languageCode: string): ServiceProxyResponse;
}