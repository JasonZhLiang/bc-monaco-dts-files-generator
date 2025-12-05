/// <reference no-default-lib="true"/>

interface PlayerStateServiceProxy {
	/**
	 * Deletes the specified status.
	 * 
	 * @param  {string} statusName Name of the status.
	 * @returns ServiceProxyResponse
	 */ 
	clearUserStatus(statusName: string): {
		data: any | null;
		status: number;
	};


	/**
	 * Read the state of the currently logged in user. Optional parameter: entityTypeFilter.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	readUserState(): {
		data: {
		    vcPurchased: number;
		    experiencePoints: number;
		    refundCount: number;
		    server_time: number;
		    experienceLevel: number;
		    currency: {
		        credits: Record<string, any>;
		    };
		    statistics: {
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
		    peerProfileIds: {
		        peerapp: Record<string, any>;
		    };
		    previousLogin: number;
		    incoming_events: Array<any>;
		    peerCurrency: {
		        peerapp: Record<string, any>;
		    };
		    lastLogin: number;
		    languageCode: string;
		    pictureUrl: any | null;
		    amountSpent: number;
		};
		status: number;
	};


	/**
	 * Deletes the user and data owned by the user.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	deleteUser(): {
		data: any | null;
		status: number;
	};


	/**
	 * Deletes the data owned by the user but does not delete the user itself.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	resetUser(): {
		data: any | null;
		status: number;
	};


	/**
	 * Update User name.
	 * 
	 * @param  {string} userName The name of the user.
	 * @returns ServiceProxyResponse
	 */ 
	updateUserName(userName: string): {
		data: {
		    playerName: string;
		};
		status: number;
	};


	/**
	 * Update User picture URL.
	 * 
	 * @param  {string} userPictureUrl URL to apply.
	 * @returns ServiceProxyResponse
	 */ 
	updateUserPictureUrl(userPictureUrl: string): {
		data: {
		    playerPictureUrl: string;
		};
		status: number;
	};


	/**
	 * Update contact email.
	 * 
	 * @param  {string} contactEmail Updated email.
	 * @returns ServiceProxyResponse
	 */ 
	updateContactEmail(contactEmail: string): {
		data: {
		    contactEmail: string;
		};
		status: number;
	};


	/**
	 * Update summary friend data.
	 * 
	 * @param  {Object} summaryFriendData A JSON string defining the summary data. For example `{ "xp":123, "level":12, "highScore":45123 }`
	 * @returns ServiceProxyResponse
	 */ 
	updateSummaryFriendData(summaryFriendData: Object): {
		data: any | null;
		status: number;
	};


	/**
	 * Get player attributes.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	getAttributes(): {
		data: {
		    attributes: {
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
	 * @param  {Object} attributes Single layer JSON string that is a set of key-value pairs.
	 * @param  {boolean} wipeExisting Whether to wipe existing attributes prior to update.
	 * @returns ServiceProxyResponse
	 */ 
	updateAttributes(attributes: Object, wipeExisting: boolean): {
		data: any | null;
		status: number;
	};


	/**
	 * Remove player attributes.
	 * 
	 * @param  {Array<any>} attributes Array of attribute names.
	 * @returns ServiceProxyResponse
	 */ 
	removeAttributes(attributes: Array<any>): {
		data: any | null;
		status: number;
	};


	/**
	 * Update flag indicating player is a tester or not.
	 * 
	 * @param  {boolean} isTester Boolean flag to indicate if the profile belongs to a test account.
	 * @returns ServiceProxyResponse
	 */ 
	updateIsTester(isTester: boolean): {
		data: {
		    isTester: number;
		};
		status: number;
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
		data: any | null;
		status: number;
	};


	/**
	 * Set timed status for a user.
	 * 
	 * @param  {string} statusName Name of the status.
	 * @param  {number} durationSecs An active duration.
	 * @param  {Object} details Json String to add additional details.
	 * @returns ServiceProxyResponse
	 */ 
	setUserStatus(statusName: string, durationSecs: number, details: Object): {
		data: {
		    rapidFire: {
		        activeStart: number;
		        statusName: string;
		        details: Record<string, any>;
		        activeUntil: number;
		    };
		};
		status: number;
	};


	/**
	 * Stack user's statuses
	 * 
	 * @param  {string} statusName Name of the status.
	 * @param  {number} additionalSecs Add time to existing expiry time.
	 * @param  {Object} details Json String to add additional details.
	 * @returns ServiceProxyResponse
	 */ 
	extendUserStatus(statusName: string, additionalSecs: number, details: Object): {
		data: {
		    activeStart: number;
		    statusName: string;
		    details: {
		    };
		    activeUntil: number;
		};
		status: number;
	};


	/**
	 * Stack user's status times with optional maximum active duration (in seconds)
	 * 
	 * @param  {string} statusName Name of the status.
	 * @param  {number} additionalSecs Add time to existing expiry time.
	 * @param  {number} maxActiveSecs Maximum duration the status can be active (in seconds). Optional.
	 * @param  {Object} details JSON object to add additional details.
	 * @returns ServiceProxyResponse
	 */ 
	extendUserStatusWithMax(statusName: string, additionalSecs: number, maxActiveSecs: number, details: Object): ServiceProxyResponse;


	/**
	 * Get user status.
	 * 
	 * @param  {string} statusName Name of the status.
	 * @returns ServiceProxyResponse
	 */ 
	getUserStatus(statusName: string): {
		data: {
		    rapidFire: {
		        activeStart: number;
		        statusName: string;
		        details: Record<string, any>;
		        activeUntil: number;
		    };
		};
		status: number;
	};


	/**
	 * Update user's time zone offset preference on their profile.
	 * 
	 * @param  {number} timeZoneOffset New offset value
	 * @returns ServiceProxyResponse
	 */ 
	updateTimeZoneOffset(timeZoneOffset: number): {
		data: {
		    timeZoneOffset: number;
		};
		status: number;
	};


	/**
	 * Update user's language code preference on their profile.
	 * 
	 * @param  {string} languageCode New language code
	 * @returns ServiceProxyResponse
	 */ 
	updateLanguageCode(languageCode: string): {
		data: {
		    languageCode: string;
		};
		status: number;
	};


	/**
	 * Update user's country code preference on their profile.
	 * 
	 * @param  {string} countryCode New country code
	 * @returns ServiceProxyResponse
	 */ 
	updateCountryCode(countryCode: string): {
		data: {
		    countryCode: string;
		};
		status: number;
	};

}