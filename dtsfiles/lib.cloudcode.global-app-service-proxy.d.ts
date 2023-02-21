/// <reference no-default-lib="true"/>

interface GlobalAppServiceProxy {
	/**
	 * Read all the global properties of the app.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	readProperties(): ServiceProxyResponse;

	/**
	 * Read all the global properties of the app identified by the property names provided in parameter.
	 * 
	 * @param  {nativeArray} propertyNames List of property names identifying the global properties to return.
	 * @returns ServiceProxyResponse
	 */ 
	readSelectedProperties(propertyNames: nativeArray): ServiceProxyResponse;

	/**
	 * Read all the global properties of the app that exist in any of the categories provided.
	 * 
	 * @param  {nativeArray} categories List of categories to retrieve the global properties.
	 * @returns ServiceProxyResponse
	 */ 
	readPropertiesInCategories(categories: nativeArray): ServiceProxyResponse;

	/**
	 * Returns the contents of the daily game counts record of the current app for the specified day (yyyy-MM-dd). If day is empty, uses the current date.
	 * 
	 * @param  {string} day Day of interest. Must be in format 'yyyy-MM-dd'. Leave blank (empty string) for the current day.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetDailyCounts(day: string): ServiceProxyResponse;

	/**
	 * Returns the contents of the monthly game counts record of the current app for the specified month (yyyy-MM). If month is empty, uses the current month.
	 * 
	 * @param  {string} month Month of interest. Must be in format 'yyyy-MM'. Leave blank (empty string) for the current day.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetMonthlyCounts(month: string): ServiceProxyResponse;

	/**
	 * Updates the named global property with the given json value.
	 * 
	 * @param  {string} name Name of the global property being updated.
	 * @param  {nativeObject} value The new property value as json.
	 * @returns ServiceProxyResponse
	 */ 
	sysUpdatePropertyJson(name: string, value: nativeObject): ServiceProxyResponse;

	/**
	 * Updates the named global property with the given value.
	 * 
	 * @param  {string} name Name of the global property being updated.
	 * @param  {string} value The new property value.
	 * @returns ServiceProxyResponse
	 */ 
	sysUpdatePropertyString(name: string, value: string): ServiceProxyResponse;

	/**
	 * Retrieves app secret.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	sysGetAppSecret(): ServiceProxyResponse;

	/**
	 * Creates the named global property with the given string value.
	 * 
	 * @param  {string} name Name of the global property being created.
	 * @param  {string} value Property value as String
	 * @param  {string} category Category of the new property
	 * @param  {string} description Description of the new property
	 * @param  {nativeObject} optionsJson Optional boolean property preserveValue to indicate whether to preserve value during deploy, defaults to false
	 * @returns ServiceProxyResponse
	 */ 
	sysCreatePropertyString(name: string, value: string, category: string, description: string, optionsJson: nativeObject): ServiceProxyResponse;

	/**
	 * Creates the named global property with the given json value.
	 * 
	 * @param  {string} name Name of the global property being created.
	 * @param  {nativeObject} value Property value as JSON
	 * @param  {string} category Category of the new property
	 * @param  {string} description Description of the new property
	 * @param  {nativeObject} optionsJson Optional boolean property preserveValue to indicate whether to preserve value during deploy, defaults to false
	 * @returns ServiceProxyResponse
	 */ 
	sysCreatePropertyJson(name: string, value: nativeObject, category: string, description: string, optionsJson: nativeObject): ServiceProxyResponse;

	/**
	 * Retrieves the list of legacy flagged users for an app.
	 * 
	 * @param  {boolean} isActiveOnly Optional flag to include only actively flagged users. Default is true.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetLegacyFlaggedUserDataList(isActiveOnly: boolean): ServiceProxyResponse;

	/**
	 * Retrieves the details about a legacy flagged user.
	 * 
	 * @param  {string} profileId Target user's profile id.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetLegacyFlaggedUserData(profileId: string): ServiceProxyResponse;

	/**
	 * Adds a user to the legacy list of flagged users.
	 * 
	 * @param  {string} profileId Target user's profile id.
	 * @param  {string} notes A field for recording something noteworthy about this user.
	 * @returns ServiceProxyResponse
	 */ 
	sysAddLegacyFlaggedUser(profileId: string, notes: string): ServiceProxyResponse;

	/**
	 * Updates a user's entry in the legacy list of flagged users.
	 * 
	 * @param  {string} profileId Target user's profile id.
	 * @param  {boolean} isActive Flag indicating whether the user is flagged or not.
	 * @param  {string} notes A field for recording something noteworthy about this user.
	 * @returns ServiceProxyResponse
	 */ 
	sysUpdateLegacyFlaggedUser(profileId: string, isActive: boolean, notes: string): ServiceProxyResponse;

	/**
	 * Removes a user from the legacy list of flagged users.
	 * 
	 * @param  {string} profileId Target user's profile id.
	 * @returns ServiceProxyResponse
	 */ 
	sysRemoveFromLegacyFlaggedUsers(profileId: string): ServiceProxyResponse;
}