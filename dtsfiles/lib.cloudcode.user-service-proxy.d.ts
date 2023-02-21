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
	sysCreateUserEmailPassword(externalId: string, password: string, userName: string, notificationTemplateId: string): ServiceProxyResponse;

	/**
	 * Reset users password
	 * 
	 * @param  {string} profileId Profile Id of the target user to reset password.
	 * @returns ServiceProxyResponse
	 */ 
	sysSendPasswordResetEmail(profileId: string): ServiceProxyResponse;

	/**
	 * Reset users password with a token expiration.
	 * 
	 * @param  {string} profileId Profile Id of the target user to reset password.
	 * @param  {integer} tokenTtlInMinutes Optional time-to-live value in minutes for the password reset token.
	 * @returns ServiceProxyResponse
	 */ 
	sysSendPasswordResetEmailWithExpiry(profileId: string, tokenTtlInMinutes: integer): ServiceProxyResponse;

	/**
	 * Reset users password using templates.
	 * 
	 * @param  {string} profileId Profile Id of the target user to reset password.
	 * @param  {nativeObject} serviceParams Set of parameters dependant on the mail service configured.
	 * @returns ServiceProxyResponse
	 */ 
	sysSendPasswordResetEmailAdvanced(profileId: string, serviceParams: nativeObject): ServiceProxyResponse;

	/**
	 * Reset users password with a token expiration using templates.
	 * 
	 * @param  {string} profileId Profile Id of the target user to reset password.
	 * @param  {nativeObject} serviceParams Set of parameters dependant on the mail service configured.
	 * @param  {integer} tokenTtlInMinutes Optional time-to-live value in minutes for the password reset token.
	 * @returns ServiceProxyResponse
	 */ 
	sysSendPasswordResetEmailAdvancedWithExpiry(profileId: string, serviceParams: nativeObject, tokenTtlInMinutes: integer): ServiceProxyResponse;

	/**
	 * Reset users password
	 * 
	 * @param  {string} profileId universal Id of the target user to reset password.
	 * @returns ServiceProxyResponse
	 */ 
	sysSendPasswordResetUniversalId(profileId: string): ServiceProxyResponse;

	/**
	 * Reset users password with a token expiration
	 * 
	 * @param  {string} profileId universal Id of the target user to reset password.
	 * @param  {integer} tokenTtlInMinutes Optional time-to-live value in minutes for the password reset token.
	 * @returns ServiceProxyResponse
	 */ 
	sysSendPasswordResetUniversalIdWithExpiry(profileId: string, tokenTtlInMinutes: integer): ServiceProxyResponse;

	/**
	 * Reset users password using templates.
	 * 
	 * @param  {string} profileId Profile ID of the target user to reset password.
	 * @param  {nativeObject} serviceParams Set of parameters dependant on the mail service configured.
	 * @returns ServiceProxyResponse
	 */ 
	sysSendPasswordResetUniversalIdAdvanced(profileId: string, serviceParams: nativeObject): ServiceProxyResponse;

	/**
	 * Reset users password with a token expiration using templates.
	 * 
	 * @param  {string} profileId Profile ID of the target user to reset password.
	 * @param  {nativeObject} serviceParams Set of parameters dependant on the mail service configured.
	 * @param  {integer} tokenTtlInMinutes Optional time-to-live value in minutes for the password reset token.
	 * @returns ServiceProxyResponse
	 */ 
	sysSendPasswordResetUniversalIdAdvancedWithExpiry(profileId: string, serviceParams: nativeObject, tokenTtlInMinutes: integer): ServiceProxyResponse;

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
	sysCreateUserUniversalId(externalId: string, password: string, userName: string, contactEmail: string, notificationTemplateId: string): ServiceProxyResponse;

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
	sysCreateUserExternalAuth(externalId: string, externalAuthType: string, userName: string, contactEmail: string, notificationTemplateId: string): ServiceProxyResponse;

	/**
	 * Gets the page of user information from the server based on the specified context. For full collationCriteria settings, refer to MongoDB Manual version 3.6 documentation on Collation.
	 * 
	 * @param  {nativeObject} context The json context for the page request.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetPage(context: nativeObject): ServiceProxyResponse;

	/**
	 * Gets the page of user information from the server based on the encoded context and specified page offset.
	 * 
	 * @param  {nativeObject} context The context string returned from the server from a previous call to GetPage or GetPageOffset.
	 * @param  {long} pageOffset The positive or negative page offset to fetch. Uses the last page retrieved using the context string to determine a starting point.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetPageOffset(context: nativeObject, pageOffset: long): ServiceProxyResponse;

	/**
	 * Set the password associated with the universal id of the given profile.
	 * 
	 * @param  {string} profileId Profile ID of the target user to set password.
	 * @param  {string} password New password value.
	 * @returns ServiceProxyResponse
	 */ 
	sysSetPasswordUniversalId(profileId: string, password: string): ServiceProxyResponse;

	/**
	 * Retrieves user information for a single profile ID
	 * 
	 * @param  {string} profileId Profile ID of the user.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetUserInfo(profileId: string): ServiceProxyResponse;

	/**
	 * Exports user information for a single profile ID
	 * 
	 * @param  {string} profileId Profile ID of the user.
	 * @param  {nativeObject} optionsJson Export options as JSON object, includeEntities field is required.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetUserExport(profileId: string, optionsJson: nativeObject): ServiceProxyResponse;
}