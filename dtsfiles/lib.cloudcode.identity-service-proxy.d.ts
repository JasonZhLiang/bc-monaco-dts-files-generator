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
	attach(externalId: string, authenticationToken: string, authenticationType: string, externalAuthName: string): ServiceProxyResponse;

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
	attachNonLoginUniversalId(externalId: string): ServiceProxyResponse;

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
	attachParentWithIdentity(externalId: string, authenticationToken: string, authenticationType: string, externalAuthName: string, forceCreate: boolean): ServiceProxyResponse;

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
	attachPeerProfile(peer: string, externalId: string, authenticationToken: string, authenticationType: string, externalAuthName: string, forceCreate: boolean): ServiceProxyResponse;

	/**
	 * Merges the given identity into the current profile.
	 * 
	 * @param  {string} externalId The user id.
	 * @param  {string} authenticationToken A password or client side token.
	 * @param  {string} authenticationType Type of authentication.
	 * @param  {string} externalAuthName The name of the external authentication mechanism (optional)
	 * @returns ServiceProxyResponse
	 */ 
	merge(externalId: string, authenticationToken: string, authenticationType: string, externalAuthName: string): ServiceProxyResponse;

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
	mergePeerProfile(peer: string, externalId: string, authenticationToken: string, authenticationType: string, externalAuthName: string): ServiceProxyResponse;

	/**
	 * Detaches the given identity to the current profile.
	 * 
	 * @param  {string} externalId The user id.
	 * @param  {string} authenticationType Type of authentication.
	 * @param  {boolean} continueAnon If false will generate an error when downgrading to anonymous (null is false)
	 * @returns ServiceProxyResponse
	 */ 
	detach(externalId: string, authenticationType: string, continueAnon: boolean): ServiceProxyResponse;

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
	detachParent(): ServiceProxyResponse;

	/**
	 * Detaches the peer from the current profile.
	 * 
	 * @param  {string} peer Identifies the peer of the profile you wish to detach.
	 * @returns ServiceProxyResponse
	 */ 
	detachPeer(peer: string): ServiceProxyResponse;

	/**
	 * Switches to child profile.
	 * 
	 * @param  {string} profileId The profileId of the child profile to switch to. If null and forceCreate is true a new profile will be created.
	 * @param  {string} appId The appId of the child app to switch to.
	 * @param  {boolean} forceCreate Should a new profile be created if it does not exist?
	 * @param  {boolean} forceSingleton Should force a singleton?
	 * @returns ServiceProxyResponse
	 */ 
	switchToChildProfile(profileId: string, appId: string, forceCreate: boolean, forceSingleton: boolean): ServiceProxyResponse;

	/**
	 * Switches to parent profile.
	 * 
	 * @param  {string} levelName The level of the parent to switch to.
	 * @returns ServiceProxyResponse
	 */ 
	switchToParentProfile(levelName: string): ServiceProxyResponse;

	/**
	 * Gets information about the user's child profiles.
	 * 
	 * @param  {boolean} includeProfileSummaryData Whether to return the summary friend data along with this call?
	 * @returns ServiceProxyResponse
	 */ 
	getChildProfiles(includeProfileSummaryData: boolean): ServiceProxyResponse;

	/**
	 * Gets list of user's peer profiles by peer code.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	getPeerProfiles(): ServiceProxyResponse;

	/**
	 * Gets map of identities by type.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	getIdentities(): ServiceProxyResponse;

	/**
	 * Gets map of expired identities by type.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	getExpiredIdentities(): ServiceProxyResponse;

	/**
	 * Attaches the given identity to the current profile.
	 * 
	 * @param  {string} externalId The user id.
	 * @param  {string} authenticationToken A password or client side token.
	 * @param  {string} authenticationType Type of authentication.
	 * @returns ServiceProxyResponse
	 */ 
	refreshIdentity(externalId: string, authenticationToken: string, authenticationType: string): ServiceProxyResponse;

	/**
	 * Attaches the given identity to the current profile.
	 * 
	 * @param  {string} oldEmailAddress The old email address.
	 * @param  {string} authenticationToken The password.
	 * @param  {string} newEmailAddress A new email address.
	 * @param  {boolean} updateContactEmail Whether to update contact email in profile.
	 * @returns ServiceProxyResponse
	 */ 
	changeEmailIdentity(oldEmailAddress: string, authenticationToken: string, newEmailAddress: string, updateContactEmail: boolean): ServiceProxyResponse;

	/**
	 * Changes email address associated with specified user's email identity.
	 * 
	 * @param  {string} profileId The profileId of the applicable user.
	 * @param  {string} oldEmailAddress The user's old email address.
	 * @param  {string} newEmailAddress The user's new email address.
	 * @param  {boolean} updateContactEmail Whether to also update contact email in user's profile.
	 * @returns ServiceProxyResponse
	 */ 
	sysChangeEmailIdentity(profileId: string, oldEmailAddress: string, newEmailAddress: string, updateContactEmail: boolean): ServiceProxyResponse;

	/**
	 * Creates a handoff authentication id with security token.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	createHandoffId(): ServiceProxyResponse;

	/**
	 * Updates universal id of the current profile.
	 * 
	 * @param  {string} externalId The new universal id to update to.
	 * @returns ServiceProxyResponse
	 */ 
	updateUniversalIdLogin(externalId: string): ServiceProxyResponse;

	/**
	 * Updates the password for the universal id of the current profile.
	 * 
	 * @param  {string} oldPassword The current password associated with the user's universal id.
	 * @param  {string} newPassword The new password to associate with the user's universal id.
	 * @returns ServiceProxyResponse
	 */ 
	updateUniversalIdPassword(oldPassword: string, newPassword: string): ServiceProxyResponse;

	/**
	 * Updates the password associated with the user's email identity.
	 * 
	 * @param  {string} oldPassword The current password associated with the user's email identity.
	 * @param  {string} newPassword The new password to associate with the user's email identity.
	 * @returns ServiceProxyResponse
	 */ 
	updateEmailIdentityPassword(oldPassword: string, newPassword: string): ServiceProxyResponse;

	/**
	 * Create a settop handoff code.
	 * 
	 * @param  {number} numChars The length of the code requested.
	 * @param  {number} validSecs The length of time the code will be valid.
	 * @param  {map} handoffJson Json data to added to authentication result.
	 * @param  {list} stringPool Pool of strings to use to populate code.
	 * @returns ServiceProxyResponse
	 */ 
	createSettopHandoffCode(numChars: number, validSecs: number, handoffJson: map, stringPool: list): ServiceProxyResponse;

	/**
	 * Verifies an OKTA JWT string.
	 * 
	 * @param  {string} issuer OKTA issuer uri.
	 * @param  {string} audience JWT audience.
	 * @param  {string} jwtString JWT string representation.
	 * @returns ServiceProxyResponse
	 */ 
	verifyOktaJwt(issuer: string, audience: string, jwtString: string): ServiceProxyResponse;

	/**
	 * Verifies a signed JWT provided as a string.
	 * 
	 * @param  {string} jksUri JKS uri.
	 * @param  {string} issuer issuer uri.
	 * @param  {string} audience JWT audience.
	 * @param  {string} jwtString JWT string representation.
	 * @returns ServiceProxyResponse
	 */ 
	verifySignedJwt(jksUri: string, issuer: string, audience: string, jwtString: string): ServiceProxyResponse;

	/**
	 * Retrieves identity data for given identity type for this profile.
	 * 
	 * @param  {string} authenticationType Type of authentication.
	 * @param  {string} externalAuthName The name of the external authentication mechanism (optional, used for custom authentication types)
	 * @returns ServiceProxyResponse
	 */ 
	getIdentityData(authenticationType: string, externalAuthName: string): ServiceProxyResponse;
}