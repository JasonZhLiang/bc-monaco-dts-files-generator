/// <reference no-default-lib="true"/>

interface IdentityServiceProxy {
	/**
	 * Attaches the given identity to the current profile.
	 * 
	 * @param  {string} externalId The user id.
	 * @param  {string} authenticationToken A password or client side token.
	 * @param  {string} authenticationType Type of authentication.
	 * @param  {string} externalAuthName The name of the external authentication mechanism (optional, used for custom authentication types)
	 * @returns ServiceProxyResponse
	 */ 
	attach(externalId: string, authenticationToken: string, authenticationType: string, externalAuthName: string): {
		status: number;
		data: any | null;
	};


	/**
	 * Attaches the given portal identity to the current profile.
	 * 
	 * @param  {string} externalId The user id.
	 * @param  {string} authenticationToken A password or client side token.
	 * @param  {string} authenticationType Type of authentication.
	 * @returns ServiceProxyResponse
	 */ 
	attachPortalIdentity(externalId: string, authenticationToken: string, authenticationType: string): ServiceProxyResponse;


	/**
	 * Attaches the given block chain public key identity to the current profile.
	 * 
	 * @param  {string} blockchainConfig Identifies the block chain.
	 * @param  {string} publicKey Block chain public key.
	 * @returns ServiceProxyResponse
	 */ 
	attachBlockchainIdentity(blockchainConfig: string, publicKey: string): ServiceProxyResponse;


	/**
	 * Attaches a universal id to the current profile with no login capability.
	 * 
	 * @param  {string} externalId The user's user id.
	 * @returns ServiceProxyResponse
	 */ 
	attachNonLoginUniversalId(externalId: string): {
		status: number;
		data: any | null;
	};


	/**
	 * Attaches the given immediate parent identity to the current profile.
	 * 
	 * @param  {string} externalId The user id.
	 * @param  {string} authenticationToken A password or client side token.
	 * @param  {string} authenticationType Type of authentication.
	 * @param  {string} externalAuthName The name of the external authentication mechanism (optional, used for custom authentication types)
	 * @param  {boolean} forceCreate Whether to create the profile if it does not exist.
	 * @returns ServiceProxyResponse
	 */ 
	attachParentWithIdentity(externalId: string, authenticationToken: string, authenticationType: string, externalAuthName: string, forceCreate: boolean): {
		status: number;
		data: {
		    profileId: string;
		    newUser: number;
		};
	};


	/**
	 * Attaches the given peer identity to the current profile.
	 * 
	 * @param  {string} peer Identifies peer app.
	 * @param  {string} externalId The user id.
	 * @param  {string} authenticationToken A password or client side token.
	 * @param  {string} authenticationType Type of authentication.
	 * @param  {string} externalAuthName The name of the external authentication mechanism (optional, used for custom authentication types)
	 * @param  {boolean} forceCreate Whether to create the profile if it does not exist.
	 * @returns ServiceProxyResponse
	 */ 
	attachPeerProfile(peer: string, externalId: string, authenticationToken: string, authenticationType: string, externalAuthName: string, forceCreate: boolean): {
		data: {
		    profileId: string;
		    newUser: number;
		};
		status: number;
	};


	/**
	 * Merges the given identity into the current profile.
	 * 
	 * @param  {string} externalId The user id.
	 * @param  {string} authenticationToken A password or client side token.
	 * @param  {string} authenticationType Type of authentication.
	 * @param  {string} externalAuthName The name of the external authentication mechanism (optional)
	 * @returns ServiceProxyResponse
	 */ 
	merge(externalId: string, authenticationToken: string, authenticationType: string, externalAuthName: string): {
		data: {
		    profileId: string;
		};
		status: number;
	};


	/**
	 * Merges the given peer identity into the current profile.
	 * 
	 * @param  {string} peer Name of the peer service.
	 * @param  {string} externalId The user id.
	 * @param  {string} authenticationToken A password or client side token.
	 * @param  {string} authenticationType Type of authentication.
	 * @param  {string} externalAuthName The name of the external authentication mechanism (optional, used for custom authentication types)
	 * @returns ServiceProxyResponse
	 */ 
	mergePeerProfile(peer: string, externalId: string, authenticationToken: string, authenticationType: string, externalAuthName: string): {
		data: {
		    profileId: string;
		};
		status: number;
	};


	/**
	 * Detaches the given identity to the current profile.
	 * 
	 * @param  {string} externalId The user id.
	 * @param  {string} authenticationType Type of authentication.
	 * @param  {boolean} continueAnon If false will generate an error when downgrading to anonymous (null is false)
	 * @returns ServiceProxyResponse
	 */ 
	detach(externalId: string, authenticationType: string, continueAnon: boolean): {
		status: number;
		data: any | null;
	};


	/**
	 * Detaches the blockchain identity to the current profile.
	 * 
	 * @param  {string} blockchainConfig Identifies the block chain.
	 * @param  {boolean} continueAnon If false will generate an error when downgrading to anonymous (null is false)
	 * @returns ServiceProxyResponse
	 */ 
	detachBlockchainIdentity(blockchainConfig: string, continueAnon: boolean): ServiceProxyResponse;


	/**
	 * Detaches the parent from the current profile.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	detachParent(): {
		status: number;
		data: {
		    profileId: string;
		};
	};


	/**
	 * Detaches the peer from the current profile.
	 * 
	 * @param  {string} peer Identifies the peer of the profile you wish to detach.
	 * @returns ServiceProxyResponse
	 */ 
	detachPeer(peer: string): {
		status: number;
		data: {
		    profileId: string;
		};
	};


	/**
	 * Switches to child profile.
	 * 
	 * @param  {string} profileId The profileId of the child profile to switch to. If null and forceCreate is true a new profile will be created.
	 * @param  {string} appId The appId of the child app to switch to.
	 * @param  {boolean} forceCreate Should a new profile be created if it does not exist?
	 * @param  {boolean} forceSingleton Should force a singleton?
	 * @returns ServiceProxyResponse
	 */ 
	switchToChildProfile(profileId: string, appId: string, forceCreate: boolean, forceSingleton: boolean): {
		data: {
		    abTestingId: number;
		    lastLogin: number;
		    server_time: number;
		    refundCount: number;
		    timeZoneOffset: number;
		    experiencePoints: number;
		    createdAt: number;
		    parentProfileId: string;
		    emailAddress: any | null;
		    experienceLevel: number;
		    countryCode: string;
		    vcClaimed: number;
		    currency: {
		    };
		    id: string;
		    amountSpent: number;
		    parentCurrency: {
		        Parent: {
		        };
		    };
		    previousLogin: number;
		    playerName: string;
		    pictureUrl: any | null;
		    incoming_events: Array<any>;
		    languageCode: string;
		    vcPurchased: number;
		    isTester: number;
		    loginCount: number;
		    xpCapped: number;
		    profileId: string;
		    newUser: number;
		    sent_events: Array<any>;
		    rewards: {
		        rewardDetails: {
		        };
		        currency: {
		        };
		        rewards: {
		        };
		    };
		    switchToAppId: string;
		    statistics: {
		    };
		};
		status: number;
	};


	/**
	 * Switches to parent profile.
	 * 
	 * @param  {string} levelName The level of the parent to switch to.
	 * @returns ServiceProxyResponse
	 */ 
	switchToParentProfile(levelName: string): {
		data: {
		    gameId: string;
		    profileId: string;
		    switchToAppId: string;
		};
		status: number;
	};


	/**
	 * Gets information about the user's child profiles.
	 * 
	 * @param  {boolean} includeProfileSummaryData Whether to return the summary friend data along with this call?
	 * @returns ServiceProxyResponse
	 */ 
	getChildProfiles(includeProfileSummaryData: boolean): {
		status: number;
		data: {
		    children: Array<{
		        appId: string;
		        profileId: string;
		        profileName: string;
		        summaryFriendData: any | null;
		    }>;
		};
	};


	/**
	 * Gets list of user's peer profiles by peer code.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	getPeerProfiles(): {
		status: number;
		data: {
		    mypeer: {
		        profileId: string;
		    };
		};
	};


	/**
	 * Gets map of identities by type.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	getIdentities(): {
		status: number;
		data: {
		    identities: {
		        Facebook: string;
		        Twitter: string;
		    };
		};
	};


	/**
	 * Gets map of expired identities by type.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	getExpiredIdentities(): {
		status: number;
		data: {
		    identities: {
		        facebook: string;
		        twitter: string;
		    };
		};
	};


	/**
	 * Refreshes the given identity.
	 * 
	 * @param  {string} externalId The user id.
	 * @param  {string} authenticationToken A password or client side token.
	 * @param  {string} authenticationType Type of authentication.
	 * @returns ServiceProxyResponse
	 */ 
	refreshIdentity(externalId: string, authenticationToken: string, authenticationType: string): {
		data: {
		    externalId: string;
		    authenticationType: string;
		};
		status: number;
	};


	/**
	 * Refreshes the given external identity.
	 * 
	 * @param  {string} externalId The user id.
	 * @param  {string} authenticationToken A password or client side token.
	 * @param  {string} externalAuthName The name of the external authentication mechanism
	 * @returns ServiceProxyResponse
	 */ 
	refreshExternalIdentity(externalId: string, authenticationToken: string, externalAuthName: string): ServiceProxyResponse;


	/**
	 * Attaches the given identity to the current profile.
	 * 
	 * @param  {string} oldEmailAddress The old email address.
	 * @param  {string} authenticationToken The password.
	 * @param  {string} newEmailAddress A new email address.
	 * @param  {boolean} updateContactEmail Whether to update contact email in profile.
	 * @returns ServiceProxyResponse
	 */ 
	changeEmailIdentity(oldEmailAddress: string, authenticationToken: string, newEmailAddress: string, updateContactEmail: boolean): {
		status: number;
		data: {
		};
	};


	/**
	 * Changes email address associated with specified user's email identity.
	 * 
	 * @param  {string} profileId The profileId of the applicable user.
	 * @param  {string} oldEmailAddress The user's old email address.
	 * @param  {string} newEmailAddress The user's new email address.
	 * @param  {boolean} updateContactEmail Whether to also update contact email in user's profile.
	 * @returns ServiceProxyResponse
	 */ 
	sysChangeEmailIdentity(profileId: string, oldEmailAddress: string, newEmailAddress: string, updateContactEmail: boolean): {
		status: number;
		data: {
		};
	};


	/**
	 * Creates a handoff authentication id with security token.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	createHandoffId(): {
		data: {
		    securityToken: string;
		    handoffId: string;
		};
		status: number;
	};


	/**
	 * Updates universal id of the current profile.
	 * 
	 * @param  {string} externalId The new universal id to update to.
	 * @returns ServiceProxyResponse
	 */ 
	updateUniversalIdLogin(externalId: string): {
		status: number;
		data: any | null;
	};


	/**
	 * Updates the password for the universal id of the current profile.
	 * 
	 * @param  {string} oldPassword The current password associated with the user's universal id.
	 * @param  {string} newPassword The new password to associate with the user's universal id.
	 * @returns ServiceProxyResponse
	 */ 
	updateUniversalIdPassword(oldPassword: string, newPassword: string): {
		status: number;
		data: {
		};
	};


	/**
	 * Updates the password associated with the user's email identity.
	 * 
	 * @param  {string} oldPassword The current password associated with the user's email identity.
	 * @param  {string} newPassword The new password to associate with the user's email identity.
	 * @returns ServiceProxyResponse
	 */ 
	updateEmailIdentityPassword(oldPassword: string, newPassword: string): {
		status: number;
		data: {
		};
	};


	/**
	 * Create a settop handoff code.
	 * 
	 * @param  {number} numChars The length of the code requested.
	 * @param  {number} validSecs The length of time the code will be valid.
	 * @param  {Map<any, any>} handoffJson Json data to added to authentication result.
	 * @param  {Array<any>} stringPool Pool of strings to use to populate code.
	 * @returns ServiceProxyResponse
	 */ 
	createSettopHandoffCode(numChars: number, validSecs: number, handoffJson: Map<any, any>, stringPool: Array<any>): {
		data: {
		    handoffCode: string;
		};
		status: number;
	};


	/**
	 * Verifies an OKTA JWT string.
	 * 
	 * @param  {string} issuer OKTA issuer uri.
	 * @param  {string} audience JWT audience.
	 * @param  {string} jwtString JWT string representation.
	 * @returns ServiceProxyResponse
	 */ 
	verifyOktaJwt(issuer: string, audience: string, jwtString: string): {
		data: {
		    claims: {
		        sub: string;
		        name: string;
		        email: string;
		        ver: number;
		        iss: string;
		        aud: string;
		        iat: number;
		        exp: number;
		        jti: string;
		        amr: Array<string>;
		        idp: string;
		        nonce: string;
		        preferred_username: string;
		        auth_time: number;
		        at_hash: string;
		        groups: Array<string>;
		    };
		    issuedAt: number;
		    expiresAt: number;
		};
		status: number;
	};


	/**
	 * Verifies a signed JWT provided as a string.
	 * 
	 * @param  {string} jksUri JKS uri.
	 * @param  {string} issuer issuer uri.
	 * @param  {string} audience JWT audience.
	 * @param  {string} jwtString JWT string representation.
	 * @returns ServiceProxyResponse
	 */ 
	verifySignedJwt(jksUri: string, issuer: string, audience: string, jwtString: string): {
		data: {
		    claims: {
		        sub: string;
		        name: string;
		        email: string;
		        ver: number;
		        iss: string;
		        aud: string;
		        iat: number;
		        exp: number;
		        jti: string;
		        amr: Array<string>;
		        idp: string;
		        nonce: string;
		        preferred_username: string;
		        auth_time: number;
		        at_hash: string;
		        groups: Array<string>;
		    };
		    issuedAt: number;
		    expiresAt: number;
		};
		status: number;
	};


	/**
	 * Retrieves identity data for given identity type for this profile.
	 * 
	 * @param  {string} authenticationType Type of authentication.
	 * @param  {string} externalAuthName The name of the external authentication mechanism (optional, used for custom authentication types)
	 * @returns ServiceProxyResponse
	 */ 
	getIdentityData(authenticationType: string, externalAuthName: string): {
		data: {
		    identityData: {
		        blockchain_id: string;
		    };
		};
		status: number;
	};


	/**
	 * Retrieves identity status for given identity type for this profile.
	 * 
	 * @param  {string} authenticationType Type of authentication.
	 * @param  {string} externalAuthName The name of the external authentication mechanism (optional, used for custom authentication types)
	 * @returns ServiceProxyResponse
	 */ 
	getIdentityStatus(authenticationType: string, externalAuthName: string): {
		data: {
		    identities: {
		        Facebook: {
		            tokenExpired: number;
		            externalId: string;
		            loginAuthType: string;
		        };
		    };
		};
		status: number;
	};


	/**
	 * Retrieves identity status and data for given identity type for this profile.
	 * 
	 * @param  {string} authenticationType Type of authentication.
	 * @param  {string} externalAuthName The name of the external authentication mechanism (optional, used for custom authentication types)
	 * @returns ServiceProxyResponse
	 */ 
	getIdentityStatusAndData(authenticationType: string, externalAuthName: string): {
		data: {
		    identities: {
		        Facebook: {
		            tokenExpired: number;
		            externalId: string;
		            loginAuthType: string;
		            identityData: any | null;
		        };
		    };
		};
		status: number;
	};

}