/// <reference no-default-lib="true"/>

interface PlayerStateServiceProxy {
	/**
	 * Deletes the specified status.
	 * 
	 * @param  {String} statusName Name of the status.
	 * @returns ServiceProxyResponse
	 */ 
	clearUserStatus(statusName: string): {
    status: number;
    data: any | null;
};

	/**
	 * Read the state of the currently logged in user. Optional parameter: entityTypeFilter.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	readUserState(): {
    status: number;
    data: 
    {
        vcPurchased: number;
        experiencePoints: number;
        refundCount: number;
        server_time: number;
        experienceLevel: number;
        currency: 
        {
            credits: 
            {
                purchased: number;
                balance: number;
                consumed: number;
                awarded: number;
            };
        };
        statistics: 
        {
            TestStat: number;
            TestStat2: number;
        };
        abTestingId: number;
        id: string;
        createdAt: number;
        profileId: string;
        isTester: number;
        xpCapped: number;
        sent_events: Array<any>;
        timeZoneOffset: number;
        playerName: string;
        vcClaimed: number;
        parentProfileId: any | null;
        countryCode: string;
        loginCount: number;
        emailAddress: string;
        peerProfileIds: 
        {
            peerapp: 
            {
                profileId: string;
            };
        };
        previousLogin: number;
        incoming_events: Array<any>;
        peerCurrency: 
        {
            peerapp: 
            {
                gold: 
                {
                    purchased: number;
                    balance: number;
                    consumed: number;
                    awarded: number;
                };
            };
        };
        lastLogin: number;
        languageCode: string;
        pictureUrl: any | null;
        amountSpent: number;
    };
};

	/**
	 * Deletes the user and data owned by the user.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	deleteUser(): {
    status: number;
    data: any | null;
};

	/**
	 * Deletes the data owned by the user but does not delete the user itself.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	resetUser(): {
    status: number;
    data: any | null;
};

	/**
	 * Update User name.
	 * 
	 * @param  {String} userName The name of the user.
	 * @returns ServiceProxyResponse
	 */ 
	updateUserName(userName: string): {
    status: number;
    data: 
    {
        playerName: string;
    };
};

	/**
	 * Update User picture URL.
	 * 
	 * @param  {String} userPictureUrl URL to apply.
	 * @returns ServiceProxyResponse
	 */ 
	updateUserPictureUrl(userPictureUrl: string): {
    status: number;
    data: 
    {
        playerPictureUrl: string;
    };
};

	/**
	 * Update contact email.
	 * 
	 * @param  {String} contactEmail Updated email.
	 * @returns ServiceProxyResponse
	 */ 
	updateContactEmail(contactEmail: string): {
    status: number;
    data: 
    {
        contactEmail: string;
    };
};

	/**
	 * Update summary friend data.
	 * 
	 * @param  {NativeObject} summaryFriendData A JSON string defining the summary data. For example `{ "xp":123, "level":12, "highScore":45123 }`
	 * @returns ServiceProxyResponse
	 */ 
	updateSummaryFriendData(summaryFriendData: Object): {
    status: number;
    data: any | null;
};

	/**
	 * Get player attributes.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	getAttributes(): {
    data: 
    {
        attributes: 
        {
            avatarId: string;
            validatedContactEmail: string;
            address: string;
            numberOfGamePlayed: string;
        };
    };
    status: number;
};

	/**
	 * Update player attributes.
	 * 
	 * @param  {NativeObject} attributes Single layer JSON string that is a set of key-value pairs.
	 * @param  {Boolean} wipeExisting Whether to wipe existing attributes prior to update.
	 * @returns ServiceProxyResponse
	 */ 
	updateAttributes(attributes: Object, wipeExisting: boolean): {
    status: number;
    data: any | null;
};

	/**
	 * Remove player attributes.
	 * 
	 * @param  {NativeArray} attributes Array of attribute names.
	 * @returns ServiceProxyResponse
	 */ 
	removeAttributes(attributes: Array<any>): {
    status: number;
    data: any | null;
};

	/**
	 * Update flag indicating player is a tester or not.
	 * 
	 * @param  {Boolean} isTester Boolean flag to indicate if the profile belongs to a test account.
	 * @returns ServiceProxyResponse
	 */ 
	updateIsTester(isTester: boolean): {
    status: number;
    data: 
    {
        isTester: number;
    };
};

	/**
	 * Resend validation email.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	resendValidationEmail(): {
    data: any | null;
    status: number;
};

	/**
	 * Logs player out of the server.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	logout(): {
    status: number;
    data: any | null;
};

	/**
	 * Set timed status for a user.
	 * 
	 * @param  {String} statusName Name of the status.
	 * @param  {Long} durationSecs An active duration.
	 * @param  {NativeObject} details Json String to add additional details.
	 * @returns ServiceProxyResponse
	 */ 
	setUserStatus(statusName: string, durationSecs: number, details: Object): {
    data: 
    {
        rapidFire: 
        {
            activeStart: number;
            statusName: string;
            details: 
            {
            };
            activeUntil: number;
        };
    };
    status: number;
};

	/**
	 * Stack user's statuses
	 * 
	 * @param  {String} statusName Name of the status.
	 * @param  {Long} additionalSecs Add time to existing expiry time.
	 * @param  {NativeObject} details Json String to add additional details.
	 * @returns ServiceProxyResponse
	 */ 
	extendUserStatus(statusName: string, additionalSecs: number, details: Object): {
    data: 
    {
        activeStart: number;
        statusName: string;
        details: 
        {
        };
        activeUntil: number;
    };
    status: number;
};

	/**
	 * Stack user's status times with optional maximum active duration (in seconds)
	 * 
	 * @param  {String} statusName Name of the status.
	 * @param  {Long} additionalSecs Add time to existing expiry time.
	 * @param  {Long} maxActiveSecs Maximum duration the status can be active (in seconds). Optional.
	 * @param  {NativeObject} details JSON object to add additional details.
	 * @returns ServiceProxyResponse
	 */ 
	extendUserStatusWithMax(statusName: string, additionalSecs: number, maxActiveSecs: number, details: Object): ServiceProxyResponse;

	/**
	 * Get user status.
	 * 
	 * @param  {String} statusName Name of the status.
	 * @returns ServiceProxyResponse
	 */ 
	getUserStatus(statusName: string): {
    data: 
    {
        rapidFire: 
        {
            activeStart: number;
            statusName: string;
            details: 
            {
            };
            activeUntil: number;
        };
    };
    status: number;
};

	/**
	 * Update user's time zone offset preference on their profile.
	 * 
	 * @param  {Double} timeZoneOffset New offset value
	 * @returns ServiceProxyResponse
	 */ 
	updateTimeZoneOffset(timeZoneOffset: number): {
    status: number;
    data: 
    {
        timeZoneOffset: number;
    };
};

	/**
	 * Update user's language code preference on their profile.
	 * 
	 * @param  {String} languageCode New language code
	 * @returns ServiceProxyResponse
	 */ 
	updateLanguageCode(languageCode: string): {
    status: number;
    data: 
    {
        languageCode: string;
    };
};

	/**
	 * Update user's country code preference on their profile.
	 * 
	 * @param  {String} countryCode New country code
	 * @returns ServiceProxyResponse
	 */ 
	updateCountryCode(countryCode: string): {
    data: 
    {
        countryCode: string;
    };
    status: number;
};
}