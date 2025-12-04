/// <reference no-default-lib="true"/>

interface UserServiceProxy {
	/**
	 * Creates an email based user.
	 * 
	 * @param  {string} externalId The email address and externalId of the new user.
	 * @param  {string} password The optional password to assign this user.
	 * @param  {string} userName The optional name to assign the new user.
	 * @param  {string} notificationTemplateId Identifies the template of the email notification.
	 * @returns ServiceProxyResponse
	 */ 
	sysCreateUserEmailPassword(externalId: string, password: string, userName: string, notificationTemplateId: string): {
		status: number;
		data: {
		    profileId: string;
		};
	};


	/**
	 * Reset users password
	 * 
	 * @param  {string} profileId Profile Id of the target user to reset password.
	 * @returns ServiceProxyResponse
	 */ 
	sysSendPasswordResetEmail(profileId: string): {
		status: number;
		data: any | null;
	};


	/**
	 * Reset users password with a token expiration.
	 * 
	 * @param  {string} profileId Profile Id of the target user to reset password.
	 * @param  {number} tokenTtlInMinutes Optional time-to-live value in minutes for the password reset token.
	 * @returns ServiceProxyResponse
	 */ 
	sysSendPasswordResetEmailWithExpiry(profileId: string, tokenTtlInMinutes: number): {
		status: number;
		data: any | null;
	};


	/**
	 * Reset users password using templates.
	 * 
	 * @param  {string} profileId Profile Id of the target user to reset password.
	 * @param  {Object} serviceParams Set of parameters dependant on the mail service configured.
	 * @returns ServiceProxyResponse
	 */ 
	sysSendPasswordResetEmailAdvanced(profileId: string, serviceParams: Object): {
		status: number;
		data: any | null;
	};


	/**
	 * Reset users password with a token expiration using templates.
	 * 
	 * @param  {string} profileId Profile Id of the target user to reset password.
	 * @param  {Object} serviceParams Set of parameters dependant on the mail service configured.
	 * @param  {number} tokenTtlInMinutes Optional time-to-live value in minutes for the password reset token.
	 * @returns ServiceProxyResponse
	 */ 
	sysSendPasswordResetEmailAdvancedWithExpiry(profileId: string, serviceParams: Object, tokenTtlInMinutes: number): {
		status: number;
		data: any | null;
	};


	/**
	 * Reset users password
	 * 
	 * @param  {string} profileId universal Id of the target user to reset password.
	 * @returns ServiceProxyResponse
	 */ 
	sysSendPasswordResetUniversalId(profileId: string): {
		status: number;
		data: any | null;
	};


	/**
	 * Reset users password with a token expiration
	 * 
	 * @param  {string} profileId universal Id of the target user to reset password.
	 * @param  {number} tokenTtlInMinutes Optional time-to-live value in minutes for the password reset token.
	 * @returns ServiceProxyResponse
	 */ 
	sysSendPasswordResetUniversalIdWithExpiry(profileId: string, tokenTtlInMinutes: number): {
		status: number;
		data: any | null;
	};


	/**
	 * Reset users password using templates.
	 * 
	 * @param  {string} profileId Profile ID of the target user to reset password.
	 * @param  {Object} serviceParams Set of parameters dependant on the mail service configured.
	 * @returns ServiceProxyResponse
	 */ 
	sysSendPasswordResetUniversalIdAdvanced(profileId: string, serviceParams: Object): {
		status: number;
		data: any | null;
	};


	/**
	 * Reset users password with a token expiration using templates.
	 * 
	 * @param  {string} profileId Profile ID of the target user to reset password.
	 * @param  {Object} serviceParams Set of parameters dependant on the mail service configured.
	 * @param  {number} tokenTtlInMinutes Optional time-to-live value in minutes for the password reset token.
	 * @returns ServiceProxyResponse
	 */ 
	sysSendPasswordResetUniversalIdAdvancedWithExpiry(profileId: string, serviceParams: Object, tokenTtlInMinutes: number): {
		status: number;
		data: any | null;
	};


	/**
	 * Creates an universal ID based user.
	 * 
	 * @param  {string} externalId The externalId of the new user.
	 * @param  {string} password The optional password to assign this user.
	 * @param  {string} userName The optional name to assign the new user.
	 * @param  {string} contactEmail The optional email address to assign to the user.
	 * @param  {string} notificationTemplateId Identifies the template of the email notification.
	 * @returns ServiceProxyResponse
	 */ 
	sysCreateUserUniversalId(externalId: string, password: string, userName: string, contactEmail: string, notificationTemplateId: string): {
		status: number;
		data: {
		    profileId: string;
		};
	};


	/**
	 * Creates an external id based user.
	 * 
	 * @param  {string} externalId The externalId of the new user.
	 * @param  {string} externalAuthType The external auth type.
	 * @param  {string} userName The optional name to assign the new user.
	 * @param  {string} contactEmail The optional email address to assign to the user.
	 * @param  {string} notificationTemplateId Identifies the template of the email notification.
	 * @returns ServiceProxyResponse
	 */ 
	sysCreateUserExternalAuth(externalId: string, externalAuthType: string, userName: string, contactEmail: string, notificationTemplateId: string): {
		status: number;
		data: {
		    profileId: string;
		};
	};


	/**
	 * Gets the page of user information from the server based on the specified context. For full collationCriteria settings, refer to MongoDB Manual documentation on Collation.
	 * 
	 * @param  {Object} context The json context for the page request.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetPage(context: Object): {
		status: number;
		data: {
		    context: string;
		    results: {
		        count: number;
		        page: number;
		        items: Array<{
		            profileId: string;
		            playerName: string;
		            countryCode: string;
		            timeZoneOffset: number;
		            summaryFriendData: {
		                favColor: string;
		            };
		            emailAddress: string;
		        }>;
		        moreAfter: number;
		        moreBefore: number;
		    };
		};
	};


	/**
	 * Gets the page of user information from the server based on the encoded context and specified page offset.
	 * 
	 * @param  {Object} context The context string returned from the server from a previous call to GetPage or GetPageOffset.
	 * @param  {number} pageOffset The positive or negative page offset to fetch. Uses the last page retrieved using the context string to determine a starting point.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetPageOffset(context: Object, pageOffset: number): {
		status: number;
		data: {
		    context: string;
		    results: {
		        count: number;
		        page: number;
		        items: Array<{
		            profileId: string;
		            playerName: string;
		            countryCode: string;
		            timeZoneOffset: number;
		            summaryFriendData: {
		                favColor: string;
		            };
		            emailAddress: string;
		        }>;
		        moreAfter: number;
		        moreBefore: number;
		    };
		};
	};


	/**
	 * Set the password associated with the universal id of the given profile.
	 * 
	 * @param  {string} profileId Profile ID of the target user to set password.
	 * @param  {string} password New password value.
	 * @returns ServiceProxyResponse
	 */ 
	sysSetPasswordUniversalId(profileId: string, password: string): {
		status: number;
		data: any | null;
	};


	/**
	 * Retrieves user information for a single profile ID
	 * 
	 * @param  {string} profileId Profile ID of the user.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetUserInfo(profileId: string): {
		data: {
		    emailAddress: string;
		    playerName: string;
		    profileId: string;
		    countryCode: string;
		    timeZoneOffset: number;
		    summaryFriendData: any | null;
		};
		status: number;
	};


	/**
	 * Exports user information for a single profile ID
	 * 
	 * @param  {string} profileId Profile ID of the user.
	 * @param  {Object} optionsJson Export options as JSON object, includeEntities field is required.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetUserExport(profileId: string, optionsJson: Object): {
		data: {
		    82cbbbf2ee444279b5a03e9bf04edf25: Array<{
		        appEmailAccounts: Array<{
		            emailAddress: string;
		        }>;
		        childEntities: Array<{
		            entityId: string;
		            entityType: string;
		            version: number;
		            data: {
		                street: string;
		            };
		            acl: {
		                other: number;
		            };
		            createdAt: number;
		            updatedAt: number;
		        }>;
		        credentials: Array<{
		            externalId: string;
		            authenticationType: string;
		            authSubType: string;
		        }>;
		        groups: {
		            requested: Array<any>;
		            invited: Array<any>;
		            groups: Array<any>;
		        };
		        leaderboardScores: Array<{
		            leaderboardId: string;
		            versionId: number;
		            score: number;
		            data: {
		                nickname: string;
		            };
		            createdAt: number;
		            updatedAt: number;
		        }>;
		        playerCurrency: {
		            createdAt: number;
		            updatedAt: number;
		            syncTimestamp: number;
		            items: {
		            };
		        };
		        playerProfile: Array<{
		            playerName: string;
		            pictureUrl: any | null;
		            platforms: Array<string>;
		            home: any | null;
		            countryCode: string;
		            languageCode: string;
		            timeZoneOffset: number;
		            createdAt: number;
		            updatedAt: number;
		            amountSpent: number;
		            refundCount: number;
		            vcClaimed: number;
		            vcPurchased: number;
		            summaryFriendData: any | null;
		            isTester: number;
		            ab_testing_id: number;
		            loginCount: number;
		            lastLogin: number;
		            previousLogin: any | null;
		            randomAttribute: number;
		            playerRating: number;
		            shieldExpiry: number;
		            matchesPlayed: number;
		            lastMatch: number;
		            activeSessions: Array<string>;
		            matchAttackExpiry: any | null;
		            matchEnabled: number;
		            attributes: {
		            };
		            automatedPromotions: Array<any>;
		            friendProfileIds: Array<any>;
		            emailAddress: string;
		        }>;
		        playerStatistics: {
		            syncTimestamp: number;
		            statistics: {
		            };
		            experienceLevel: number;
		            experiencePoints: number;
		            milestonesStatus: {
		            };
		            questsStatus: {
		            };
		            playerAchievements: Array<any>;
		        };
		    }>;
		};
		status: number;
	};


	/**
	 * Delete user with option to also delete user's children.
	 * 
	 * @param  {string} profileId Profile ID of the user.
	 * @param  {Object} optionsJson Additional options, including 'deleteChildren' flag to also delete children of the user. Defaults to false if not specified.
	 * @returns ServiceProxyResponse
	 */ 
	sysDeleteUser(profileId: string, optionsJson: Object): {
		data: {
		};
		status: number;
	};


	/**
	 * Returns self-service delete account URL that can be used to delete the specified user.
	 * 
	 * @param  {string} profileId The profile ID of the target user for whom the delete account URL is intended.
	 * @returns ServiceProxyResponse
	 */ 
	sysCreateSelfServiceDeletionUrlForUser(profileId: string): {
		data: {
		    url: string;
		};
		status: number;
	};

}