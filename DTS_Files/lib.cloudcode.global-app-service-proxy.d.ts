/// <reference no-default-lib="true"/>

interface GlobalAppServiceProxy {
	/**
	 * Read all the global properties of the app.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	readProperties(): {
    status: number;
    data: 
    {
        pName: 
        {
            name: string;
            description: string;
            value: string;
        };
    };
};

	/**
	 * Read all the global properties of the app identified by the property names provided in parameter.
	 * 
	 * @param  {NativeArray} propertyNames List of property names identifying the global properties to return.
	 * @returns ServiceProxyResponse
	 */ 
	readSelectedProperties(propertyNames: Array<any>): {
    status: number;
    data: 
    {
        pName1: 
        {
            name: string;
            value: string;
        };
        pName2: 
        {
            name: string;
            value: string;
        };
    };
};

	/**
	 * Read all the global properties of the app that exist in any of the categories provided.
	 * 
	 * @param  {NativeArray} categories List of categories to retrieve the global properties.
	 * @returns ServiceProxyResponse
	 */ 
	readPropertiesInCategories(categories: Array<any>): {
    status: number;
    data: 
    {
        pName1: 
        {
            name: string;
            value: string;
        };
        pName2: 
        {
            name: string;
            value: string;
        };
    };
};

	/**
	 * Returns the contents of the daily game counts record of the current app for the specified day (yyyy-MM-dd). If day is empty, uses the current date.
	 * 
	 * @param  {String} day Day of interest. Must be in format 'yyyy-MM-dd'. Leave blank (empty string) for the current day.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetDailyCounts(day: string): {
    status: number;
    data: 
    {
        date: string;
        sessionCount: number;
        sessionCountPlatform: 
        {
            IOS: number;
        };
        sessionCountLibrary: 
        {
            APIExplorer: number;
        };
        sessionCountLibraryVersion: 
        {
            4_3_0: number;
        };
        sessionCountHourly: Array<number>;
        userCount: number;
        userCountPlatform: 
        {
            IOS: number;
        };
        accountCreationCount: number;
        accountCreationCountPlatform: 
        {
            IOS: number;
        };
        purchaseCount: number;
        purchaseCountPlatform: 
        {
        };
        purchasedCountItem: 
        {
        };
        revenue: number;
        revenuePlatform: 
        {
        };
        revenueItem: 
        {
        };
        apiCallCountDay: number;
        heartbeatCountDay: number;
        apiCallCount: 
        {
            authenticationV2: 
            {
                AUTHENTICATEEmail: number;
            };
            user: 
            {
                SYS_CREATE_USER_EMAIL_PASSWORD: number;
                SYS_CREATE_USER_EXTERNAL_AUTH: number;
                SYS_CREATE_USER_UNIVERSAL_ID: number;
                SYS_GET_PAGE: number;
            };
            group: 
            {
                GET_MY_GROUPS: number;
            };
            leaderboard: 
            {
                POST_GROUP_SCORE_DYNAMIC: number;
            };
            playerState: 
            {
                UPDATE_SUMMARY: number;
                READ: number;
            };
            customEntity: 
            {
                SYS_LIST_COLLECTIONS: number;
                SYS_LIST_INDEXES: number;
            };
            log: 
            {
                LOG_DEBUG: number;
            };
            script: 
            {
                RUNCreateSettopHandoffCode: number;
                RUNResetAllQuestsAndMilestones: number;
                RUNSysGetDailyCounts: number;
            };
            identity: 
            {
                CREATE_SETTOP_HANDOFF_CODE: number;
            };
            gamification: 
            {
                RESET_ALL_QUESTS_AND_MILESTONES: number;
                RESET_QUESTS: number;
            };
            globalApp: 
            {
                SYS_GET_DAILY_COUNTS: number;
            };
        };
        apiCallTime: 
        {
            group: 
            {
                GET_MY_GROUPS: number;
            };
            leaderboard: 
            {
                POST_GROUP_SCORE_DYNAMIC: number;
            };
            authenticationV2: 
            {
                AUTHENTICATEEmail: number;
            };
            user: 
            {
                SYS_CREATE_USER_EMAIL_PASSWORD: number;
                SYS_CREATE_USER_UNIVERSAL_ID: number;
                SYS_CREATE_USER_EXTERNAL_AUTH: number;
                SYS_GET_PAGE: number;
            };
            playerState: 
            {
                UPDATE_SUMMARY: number;
                READ: number;
            };
            customEntity: 
            {
                SYS_LIST_COLLECTIONS: number;
                SYS_LIST_INDEXES: number;
            };
            script: 
            {
                RUNCreateSettopHandoffCode: number;
                RUNResetAllQuestsAndMilestones: number;
                RUNSysGetDailyCounts: number;
            };
            identity: 
            {
                CREATE_SETTOP_HANDOFF_CODE: number;
            };
            gamification: 
            {
                RESET_ALL_QUESTS_AND_MILESTONES: number;
                RESET_QUESTS: number;
            };
            log: 
            {
                LOG_DEBUG: number;
            };
            globalApp: 
            {
                SYS_GET_DAILY_COUNTS: number;
            };
        };
        apiAppErrors: 
        {
            leaderboard: 
            {
                POST_GROUP_SCORE_DYNAMIC: number;
            };
            user: 
            {
                SYS_CREATE_USER_EMAIL_PASSWORD: number;
            };
            customEntity: 
            {
                SYS_LIST_INDEXES: number;
            };
            script: 
            {
                RUNCreateSettopHandoffCode: number;
                RUNResetAllQuestsAndMilestones: number;
            };
        };
        apiAppWarnings: 
        {
        };
        apiSysErrors: 
        {
            globalApp: 
            {
                SYS_GET_DAILY_COUNTS: number;
            };
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
        notificationCountPlatform: 
        {
        };
        notificationCountTemplateId: 
        {
        };
        notificationCountPromotionId: 
        {
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
        dormant: 
        {
            accountsStored180to365Days: number;
            accountsStoredDormant: number;
            accountsStoredTotal: number;
            accountsStored30to90Days: number;
            accountsStoredUpto30Days: number;
            accountsStored90to180Days: number;
            accountsStoredGT365Days: number;
        };
        rtt: 
        {
            sends: number;
            entries: number;
            deliveries: number;
            ccxHourly: 
            {
            };
            ccxTotal: number;
            ccxOverageHourly: 
            {
            };
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
	 * @param  {String} month Month of interest. Must be in format 'yyyy-MM'. Leave blank (empty string) for the current day.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetMonthlyCounts(month: string): {
    status: number;
    data: 
    {
        monthDate: string;
        sessionCount: number;
        sessionCountPlatform: 
        {
            IOS: number;
        };
        sessionCountLibrary: 
        {
            APIExplorer: number;
        };
        sessionCountLibraryVersion: 
        {
            4_3_0: number;
        };
        dauCount: number;
        dauCountPlatform: 
        {
            IOS: number;
        };
        mauCount: number;
        mauCountPlatform: 
        {
            IOS: number;
        };
        accountCreationCount: number;
        accountCreationCountPlatform: 
        {
            IOS: number;
        };
        purchaseCount: number;
        purchaseCountPlatform: 
        {
        };
        purchasedCountItem: 
        {
        };
        revenue: number;
        revenuePlatform: 
        {
        };
        revenueItem: 
        {
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
        dormant: 
        {
            billedDormantAccounts: number;
            aggregatedDormantAccounts: number;
        };
        rtt: 
        {
        };
        notificationCount: number;
        notificationCountTemplateId: 
        {
        };
        notificationCountPromotionId: 
        {
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
	 * @param  {String} name Name of the global property being updated.
	 * @param  {NativeObject} value The new property value as json.
	 * @returns ServiceProxyResponse
	 */ 
	sysUpdatePropertyJson(name: string, value: Object): {
    status: number;
    data: any | null;
};

	/**
	 * Updates the named global property with the given value.
	 * 
	 * @param  {String} name Name of the global property being updated.
	 * @param  {String} value The new property value.
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
    data: 
    {
        secret: string;
    };
    status: number;
};

	/**
	 * Creates the named global property with the given string value.
	 * 
	 * @param  {String} name Name of the global property being created.
	 * @param  {String} value Property value as String
	 * @param  {String} category Category of the new property
	 * @param  {String} description Description of the new property
	 * @param  {NativeObject} optionsJson Optional boolean property preserveValue to indicate whether to preserve value during deploy, defaults to false
	 * @returns ServiceProxyResponse
	 */ 
	sysCreatePropertyString(name: string, value: string, category: string, description: string, optionsJson: Object): {
    data: 
    {
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
	 * @param  {String} name Name of the global property being created.
	 * @param  {NativeObject} value Property value as JSON
	 * @param  {String} category Category of the new property
	 * @param  {String} description Description of the new property
	 * @param  {NativeObject} optionsJson Optional boolean property preserveValue to indicate whether to preserve value during deploy, defaults to false
	 * @returns ServiceProxyResponse
	 */ 
	sysCreatePropertyJson(name: string, value: Object, category: string, description: string, optionsJson: Object): {
    data: 
    {
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
    data: 
    {
        f76698c7bb0c439aa46d44b5f6ca6e15: 
        {
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
	 * @param  {String} profileId Target user's profile id.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetLegacyFlaggedUserData(profileId: string): ServiceProxyResponse;

	/**
	 * Adds a user to the legacy list of flagged users.
	 * 
	 * @param  {String} profileId Target user's profile id.
	 * @param  {String} notes A field for recording something noteworthy about this user.
	 * @returns ServiceProxyResponse
	 */ 
	sysAddLegacyFlaggedUser(profileId: string, notes: string): {
    status: number;
    data: any | null;
};

	/**
	 * Updates a user's entry in the legacy list of flagged users.
	 * 
	 * @param  {String} profileId Target user's profile id.
	 * @param  {Boolean} isActive Flag indicating whether the user is flagged or not.
	 * @param  {String} notes A field for recording something noteworthy about this user.
	 * @returns ServiceProxyResponse
	 */ 
	sysUpdateLegacyFlaggedUser(profileId: string, isActive: boolean, notes: string): {
    status: number;
    data: any | null;
};

	/**
	 * Removes a user from the legacy list of flagged users.
	 * 
	 * @param  {String} profileId Target user's profile id.
	 * @returns ServiceProxyResponse
	 */ 
	sysRemoveFromLegacyFlaggedUsers(profileId: string): {
    data: 
    {
        removed: number;
    };
    status: number;
};
}