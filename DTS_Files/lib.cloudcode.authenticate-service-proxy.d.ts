/// <reference no-default-lib="true"/>

interface AuthenticateServiceProxy {
	/**
	 * Authenticate the user using an externalId. Use forceCreate flag to create a new profile.
	 * 
	 * @param  {String} externalId If set to true, create a new profile if anonymous id not found. If set to false and anonymous id does not exist on the server, return an error.
	 * @param  {String} authenticationToken The authentication token (i.e. password).
	 * @param  {Boolean} forceCreate Optional. If set to true, will attempt to create a new profile if an existing one is not found. Default value is 'false'.
	 * @returns ServiceProxyResponse
	 */ 
	authenticate(externalId: string, authenticationToken: string, forceCreate: boolean): ServiceProxyResponse;

	/**
	 * Reset email password.
	 * 
	 * @param  {String} externalId The email address to send the reset email to.
	 * @returns ServiceProxyResponse
	 */ 
	resetEmailPassword(externalId: string): ServiceProxyResponse;

	/**
	 * Reset email password with a token expiration.
	 * 
	 * @param  {String} externalId The email address to send the reset email to.
	 * @param  {Integer} tokenTtlInMinutes Optional time-to-live value in minutes for the password reset token.
	 * @returns ServiceProxyResponse
	 */ 
	resetEmailPasswordWithExpiry(externalId: string, tokenTtlInMinutes: number): ServiceProxyResponse;

	/**
	 * Advanced reset email password using templates.
	 * 
	 * @param  {String} emailAddress The email address to send the reset email to.
	 * @param  {NativeObject} serviceParams Set of parameters dependant on the mail service configured.
	 * @returns ServiceProxyResponse
	 */ 
	resetEmailPasswordAdvanced(emailAddress: string, serviceParams: Object): ServiceProxyResponse;

	/**
	 * Advanced reset email password with a token expiration using templates.
	 * 
	 * @param  {String} emailAddress The email address to send the reset email to.
	 * @param  {NativeObject} serviceParams Set of parameters dependant on the mail service configured.
	 * @param  {Integer} tokenTtlInMinutes Optional time-to-live value in minutes for the password reset token.
	 * @returns ServiceProxyResponse
	 */ 
	resetEmailPasswordAdvancedWithExpiry(emailAddress: string, serviceParams: Object, tokenTtlInMinutes: number): ServiceProxyResponse;

	/**
	 * Reset Universal ID password.
	 * 
	 * @param  {String} universalId The universalId to send the reset email to.
	 * @returns ServiceProxyResponse
	 */ 
	resetUniversalIdPassword(universalId: string): ServiceProxyResponse;

	/**
	 * Reset Universal ID password with a token expiration.
	 * 
	 * @param  {String} universalId The universalId to send the reset email to.
	 * @param  {Integer} tokenTtlInMinutes Optional time-to-live value in minutes for the password reset token.
	 * @returns ServiceProxyResponse
	 */ 
	resetUniversalIdPasswordWithExpiry(universalId: string, tokenTtlInMinutes: number): ServiceProxyResponse;

	/**
	 * Advanced universalId password reset using templates.
	 * 
	 * @param  {String} universalId The universalId to send the reset email to.
	 * @param  {NativeObject} serviceParams Set of parameters dependant on the mail service configured.
	 * @returns ServiceProxyResponse
	 */ 
	resetUniversalIdPasswordAdvanced(universalId: string, serviceParams: Object): ServiceProxyResponse;

	/**
	 * Advanced universalId password reset with a token expiration using templates.
	 * 
	 * @param  {String} universalId The universalId to send the reset email to.
	 * @param  {NativeObject} serviceParams Set of parameters dependant on the mail service configured.
	 * @param  {Integer} tokenTtlInMinutes Optional time-to-live value in minutes for the password reset token.
	 * @returns ServiceProxyResponse
	 */ 
	resetUniversalIdPasswordAdvancedWithExpiry(universalId: string, serviceParams: Object, tokenTtlInMinutes: number): ServiceProxyResponse;

	/**
	 * Get server version.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	getServerVersion(): ServiceProxyResponse;

}