/// <reference no-default-lib="true"/>

interface GlobalAppServiceProxy {
	/**
	 * Read all the global properties of the app.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	readProperties(): {
		status: number;
		data: {
		    pName: {
		        name: string;
		        description: string;
		        value: string;
		    };
		};
	};


	/**
	 * Read all the global properties of the app identified by the property names provided in parameter.
	 * 
	 * @param  {Array<any>} propertyNames List of property names identifying the global properties to return.
	 * @returns ServiceProxyResponse
	 */ 
	readSelectedProperties(propertyNames: Array<any>): {
		status: number;
		data: {
		    pName1: {
		        name: string;
		        value: string;
		    };
		    pName2: {
		        name: string;
		        value: string;
		    };
		};
	};


	/**
	 * Read all the global properties of the app that exist in any of the categories provided.
	 * 
	 * @param  {Array<any>} categories List of categories to retrieve the global properties.
	 * @returns ServiceProxyResponse
	 */ 
	readPropertiesInCategories(categories: Array<any>): {
		status: number;
		data: {
		    pName1: {
		        name: string;
		        value: string;
		    };
		    pName2: {
		        name: string;
		        value: string;
		    };
		};
	};


	/**
	 * Returns the contents of the daily game counts record of the current app for the specified day (yyyy-MM-dd). If day is empty, uses the current date.
	 * 
	 * @param  {string} day Day of interest. Must be in format 'yyyy-MM-dd'. Leave blank (empty string) for the current day.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetDailyCounts(day: string): {
		status: number;
		data: {
		    date: string;
		    sessionCount: number;
		    sessionCountPlatform: {
		        IOS: number;
		    };
		    sessionCountLibrary: {
		        APIExplorer: number;
		    };
		    sessionCountLibraryVersion: {
		        4_3_0: number;
		    };
		    sessionCountHourly: Array<number>;
		    userCount: number;
		    userCountPlatform: {
		        IOS: number;
		    };
		    accountCreationCount: number;
		    accountCreationCountPlatform: {
		        IOS: number;
		    };
		    purchaseCount: number;
		    purchaseCountPlatform: {
		    };
		    purchasedCountItem: {
		    };
		    revenue: number;
		    revenuePlatform: {
		    };
		    revenueItem: {
		    };
		    apiCallCountDay: number;
		    heartbeatCountDay: number;
		    apiCallCount: {
		        authenticationV2: Record<string, any>;
		        user: Record<string, any>;
		        group: Record<string, any>;
		        leaderboard: Record<string, any>;
		        playerState: Record<string, any>;
		        customEntity: Record<string, any>;
		        log: Record<string, any>;
		        script: Record<string, any>;
		        identity: Record<string, any>;
		        gamification: Record<string, any>;
		        globalApp: Record<string, any>;
		    };
		    apiCallTime: {
		        group: Record<string, any>;
		        leaderboard: Record<string, any>;
		        authenticationV2: Record<string, any>;
		        user: Record<string, any>;
		        playerState: Record<string, any>;
		        customEntity: Record<string, any>;
		        script: Record<string, any>;
		        identity: Record<string, any>;
		        gamification: Record<string, any>;
		        log: Record<string, any>;
		        globalApp: Record<string, any>;
		    };
		    apiAppErrors: {
		        leaderboard: Record<string, any>;
		        user: Record<string, any>;
		        customEntity: Record<string, any>;
		        script: Record<string, any>;
		    };
		    apiAppWarnings: {
		    };
		    apiSysErrors: {
		        globalApp: Record<string, any>;
		    };
		    s2sCallCountDay: number;
		    s2sCallAppErrors: number;
		    s2sCallAppWarnings: number;
		    s2sCallSysErrors: number;
		    webCallCountDay: number;
		    webhookCallCountDay: number;
		    webhookAppErrors: number;
		    webhookAppWarnings: number;
		    webhookSysErrors: number;
		    ccApiCallCountDay: number;
		    dispV1CallCountDay: number;
		    offboardEventCountDay: number;
		    ccScriptInvokeCountDay: number;
		    scheduledScriptCallCountDay: number;
		    loginsOverLimitCount: number;
		    notificationCount: number;
		    notificationCountPlatform: {
		    };
		    notificationCountTemplateId: {
		    };
		    notificationCountPromotionId: {
		    };
		    emailsSentCount: number;
		    bulkOpsCount: number;
		    unreadableRequestCount: number;
		    unprocessedRequestCount: number;
		    freePeerApiCallCount: number;
		    hostedCost: any | null;
		    hostedHours: any | null;
		    kbDownloaded: number;
		    kbStorage: number;
		    dormant: {
		        accountsStored180to365Days: number;
		        accountsStoredDormant: number;
		        accountsStoredTotal: number;
		        accountsStored30to90Days: number;
		        accountsStoredUpto30Days: number;
		        accountsStored90to180Days: number;
		        accountsStoredGT365Days: number;
		    };
		    rtt: {
		        sends: number;
		        entries: number;
		        deliveries: number;
		        ccxHourly: Record<string, any>;
		        ccxTotal: number;
		        ccxOverageHourly: Record<string, any>;
		        ccxOveragesTotal: number;
		    };
		    createdAt: number;
		    updatedAt: number;
		    billingNetAPICount: number;
		    billingBulkOpsCount: number;
		    billingTotalAPICount: number;
		    billingFreeApiCalls: number;
		    billingDiscountedAPICredit: number;
		    billingTotalBilledToCustomer: number;
		};
	};


	/**
	 * Returns the contents of the monthly game counts record of the current app for the specified month (yyyy-MM). If month is empty, uses the current month.
	 * 
	 * @param  {string} month Month of interest. Must be in format 'yyyy-MM'. Leave blank (empty string) for the current day.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetMonthlyCounts(month: string): {
		status: number;
		data: {
		    monthDate: string;
		    sessionCount: number;
		    sessionCountPlatform: {
		        IOS: number;
		    };
		    sessionCountLibrary: {
		        APIExplorer: number;
		    };
		    sessionCountLibraryVersion: {
		        4_3_0: number;
		    };
		    dauCount: number;
		    dauCountPlatform: {
		        IOS: number;
		    };
		    mauCount: number;
		    mauCountPlatform: {
		        IOS: number;
		    };
		    accountCreationCount: number;
		    accountCreationCountPlatform: {
		        IOS: number;
		    };
		    purchaseCount: number;
		    purchaseCountPlatform: {
		    };
		    purchasedCountItem: {
		    };
		    revenue: number;
		    revenuePlatform: {
		    };
		    revenueItem: {
		    };
		    apiCallCount: number;
		    s2sCallCount: number;
		    webhookCallCount: number;
		    webCallCount: number;
		    ccApiCallCount: number;
		    dispV1CallCount: number;
		    offboardEventCount: number;
		    ccScriptInvokeCount: number;
		    scheduledScriptCallCount: number;
		    loginsOverLimitCount: number;
		    emailsSentCount: number;
		    bulkOpCount: number;
		    unreadableRequestCount: number;
		    unprocessedRequestCount: number;
		    freePeerApiCallCount: number;
		    hostedCost: any | null;
		    hostedHours: any | null;
		    dormant: {
		        billedDormantAccounts: number;
		        aggregatedDormantAccounts: number;
		    };
		    rtt: {
		    };
		    notificationCount: number;
		    notificationCountTemplateId: {
		    };
		    notificationCountPromotionId: {
		    };
		    kbDownloaded: number;
		    kbStorage: number;
		    kbStorageMax: number;
		    kbStorageDays: number;
		    billingNetAPICount: number;
		    billingBulkOpsCount: number;
		    billingTotalAPICount: number;
		    billingFreeApiCalls: number;
		    billingDiscountedAPICredit: number;
		    billingTotalBilledToCustomer: number;
		};
	};


	/**
	 * Updates the named global property with the given json value.
	 * 
	 * @param  {string} name Name of the global property being updated.
	 * @param  {Object} value The new property value as json.
	 * @returns ServiceProxyResponse
	 */ 
	sysUpdatePropertyJson(name: string, value: Object): {
		status: number;
		data: any | null;
	};


	/**
	 * Updates the named global property with the given value.
	 * 
	 * @param  {string} name Name of the global property being updated.
	 * @param  {string} value The new property value.
	 * @returns ServiceProxyResponse
	 */ 
	sysUpdatePropertyString(name: string, value: string): {
		status: number;
		data: any | null;
	};


	/**
	 * Retrieves app secret.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	sysGetAppSecret(): {
		data: {
		    secret: string;
		};
		status: number;
	};


	/**
	 * Creates the named global property with the given string value.
	 * 
	 * @param  {string} name Name of the global property being created.
	 * @param  {string} value Property value as String
	 * @param  {string} category Category of the new property
	 * @param  {string} description Description of the new property
	 * @param  {Object} optionsJson Optional boolean property preserveValue to indicate whether to preserve value during deploy, defaults to false
	 * @returns ServiceProxyResponse
	 */ 
	sysCreatePropertyString(name: string, value: string, category: string, description: string, optionsJson: Object): {
		data: {
		    name: string;
		    description: string;
		    category: string;
		    value: string;
		    type: string;
		    preserveValue: number;
		};
		status: number;
	};


	/**
	 * Creates the named global property with the given json value.
	 * 
	 * @param  {string} name Name of the global property being created.
	 * @param  {Object} value Property value as JSON
	 * @param  {string} category Category of the new property
	 * @param  {string} description Description of the new property
	 * @param  {Object} optionsJson Optional boolean property preserveValue to indicate whether to preserve value during deploy, defaults to false
	 * @returns ServiceProxyResponse
	 */ 
	sysCreatePropertyJson(name: string, value: Object, category: string, description: string, optionsJson: Object): {
		data: {
		    name: string;
		    description: string;
		    category: string;
		    value: string;
		    type: string;
		    preserveValue: number;
		};
		status: number;
	};


	/**
	 * Retrieves the list of legacy flagged users for an app.
	 * 
	 * @param  {boolean} isActiveOnly Optional flag to include only actively flagged users. Default is true.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetLegacyFlaggedUserDataList(isActiveOnly: boolean): {
		data: {
		    f76698c7bb0c439aa46d44b5f6ca6e15: {
		        isActive: number;
		        notes: string;
		        updatedAt: number;
		        profileId: string;
		        playerName: string;
		        summaryFriendData: any | null;
		        pictureUrl: any | null;
		    };
		};
		status: number;
	};


	/**
	 * Retrieves the details about a legacy flagged user.
	 * 
	 * @param  {string} profileId Target user's profile id.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetLegacyFlaggedUserData(profileId: string): {
		data: {
		    isActive: number;
		    notes: string;
		    updatedAt: number;
		    profileId: string;
		    playerName: string;
		    pictureUrl: any | null;
		    summaryFriendData: any | null;
		};
		status: number;
	};


	/**
	 * Adds a user to the legacy list of flagged users.
	 * 
	 * @param  {string} profileId Target user's profile id.
	 * @param  {string} notes A field for recording something noteworthy about this user.
	 * @returns ServiceProxyResponse
	 */ 
	sysAddLegacyFlaggedUser(profileId: string, notes: string): {
		status: number;
		data: any | null;
	};


	/**
	 * Updates a user's entry in the legacy list of flagged users.
	 * 
	 * @param  {string} profileId Target user's profile id.
	 * @param  {boolean} isActive Flag indicating whether the user is flagged or not.
	 * @param  {string} notes A field for recording something noteworthy about this user.
	 * @returns ServiceProxyResponse
	 */ 
	sysUpdateLegacyFlaggedUser(profileId: string, isActive: boolean, notes: string): {
		status: number;
		data: any | null;
	};


	/**
	 * Removes a user from the legacy list of flagged users.
	 * 
	 * @param  {string} profileId Target user's profile id.
	 * @returns ServiceProxyResponse
	 */ 
	sysRemoveFromLegacyFlaggedUsers(profileId: string): {
		data: {
		    removed: number;
		};
		status: number;
	};

}