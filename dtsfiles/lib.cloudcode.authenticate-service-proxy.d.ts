/// <reference no-default-lib="true"/>

interface AuthenticateServiceProxy {
	/**
	 * Authenticate the user using an externalId. Use forceCreate flag to create a new profile.
	 * 
	 * @param  {string} externalId If set to true, create a new profile if anonymous id not found. If set to false and anonymous id does not exist on the server, return an error.
	 * @returns ServiceProxyResponse
	 */ 
	authenticate(externalId: string): ServiceProxyResponse;

	/**
	 * Authenticate the user using a settop handoff code. Use forceCreate flag to create a new profile.
	 * 
	 * @param  {string} externalId If set to true, create a new profile if anonymous id not found. If set to false and anonymous id does not exist on the server, return an error.
	 * @returns ServiceProxyResponse
	 */ 
	authenticate (Settop Handoff)(externalId: string): ServiceProxyResponse;

	/**
	 * Reset email password.
	 * 
	 * @param  {string} externalId The email address to send the reset email to.
	 * @returns ServiceProxyResponse
	 */ 
	resetEmailPassword(externalId: string): ServiceProxyResponse;

	/**
	 * Reset email password with a token expiration.
	 * 
	 * @param  {string} externalId The email address to send the reset email to.
	 * @param  {integer} tokenTtlInMinutes Optional time-to-live value in minutes for the password reset token.
	 * @returns ServiceProxyResponse
	 */ 
	resetEmailPasswordWithExpiry(externalId: string, tokenTtlInMinutes: integer): ServiceProxyResponse;

	/**
	 * Advanced reset email password using templates.
	 * 
	 * @param  {string} emailAddress The email address to send the reset email to.
	 * @param  {nativeObject} serviceParams Set of parameters dependant on the mail service configured.
	 * @returns ServiceProxyResponse
	 */ 
	resetEmailPasswordAdvanced (legacy template)(emailAddress: string, serviceParams: nativeObject): ServiceProxyResponse;

	/**
	 * Advanced reset email password with a token expiration using templates.
	 * 
	 * @param  {string} emailAddress The email address to send the reset email to.
	 * @param  {nativeObject} serviceParams Set of parameters dependant on the mail service configured.
	 * @param  {integer} tokenTtlInMinutes Optional time-to-live value in minutes for the password reset token.
	 * @returns ServiceProxyResponse
	 */ 
	resetEmailPasswordAdvancedWithExpiry (legacy template)(emailAddress: string, serviceParams: nativeObject, tokenTtlInMinutes: integer): ServiceProxyResponse;

	/**
	 * Advanced reset email password using templates.
	 * 
	 * @param  {string} emailAddress The email address to send the reset email to.
	 * @param  {nativeObject} serviceParams Set of parameters dependant on the mail service configured.
	 * @returns ServiceProxyResponse
	 */ 
	resetEmailPasswordAdvanced (dynamic template)(emailAddress: string, serviceParams: nativeObject): ServiceProxyResponse;

	/**
	 * Advanced reset email password with token expiration using templates.
	 * 
	 * @param  {string} emailAddress The email address to send the reset email to.
	 * @param  {nativeObject} serviceParams Set of parameters dependant on the mail service configured.
	 * @param  {integer} tokenTtlInMinutes Optional time-to-live value in minutes for the password reset token.
	 * @returns ServiceProxyResponse
	 */ 
	resetEmailPasswordAdvancedWithExpiry (dynamic template)(emailAddress: string, serviceParams: nativeObject, tokenTtlInMinutes: integer): ServiceProxyResponse;

	/**
	 * Reset Universal ID password.
	 * 
	 * @param  {string} universalId The universalId to send the reset email to.
	 * @returns ServiceProxyResponse
	 */ 
	resetUniversalIdPassword(universalId: string): ServiceProxyResponse;

	/**
	 * Reset Universal ID password with a token expiration.
	 * 
	 * @param  {string} universalId The universalId to send the reset email to.
	 * @param  {integer} tokenTtlInMinutes Optional time-to-live value in minutes for the password reset token.
	 * @returns ServiceProxyResponse
	 */ 
	resetUniversalIdPasswordWithExpiry(universalId: string, tokenTtlInMinutes: integer): ServiceProxyResponse;

	/**
	 * Advanced universalId password reset using templates.
	 * 
	 * @param  {string} universalId The universalId to send the reset email to.
	 * @param  {nativeObject} serviceParams Set of parameters dependant on the mail service configured.
	 * @returns ServiceProxyResponse
	 */ 
	resetUniversalIdPasswordAdvanced (dynamic template)(universalId: string, serviceParams: nativeObject): ServiceProxyResponse;

	/**
	 * Advanced universalId password reset with a token expiration using templates.
	 * 
	 * @param  {string} universalId The universalId to send the reset email to.
	 * @param  {nativeObject} serviceParams Set of parameters dependant on the mail service configured.
	 * @param  {integer} tokenTtlInMinutes Optional time-to-live value in minutes for the password reset token.
	 * @returns ServiceProxyResponse
	 */ 
	resetUniversalIdPasswordAdvancedWithExpiry (dynamic template)(universalId: string, serviceParams: nativeObject, tokenTtlInMinutes: integer): ServiceProxyResponse;

	/**
	 * Advanced universalId password reset using templates.
	 * 
	 * @param  {string} universalId The universalId to send the reset email to.
	 * @param  {nativeObject} serviceParams Set of parameters dependant on the mail service configured.
	 * @returns ServiceProxyResponse
	 */ 
	resetUniversalIdPasswordAdvanced (legacy template)(universalId: string, serviceParams: nativeObject): ServiceProxyResponse;

	/**
	 * Advanced universalId password reset with a token expiration using templates.
	 * 
	 * @param  {string} universalId The universalId to send the reset email to.
	 * @param  {nativeObject} serviceParams Set of parameters dependant on the mail service configured.
	 * @param  {integer} tokenTtlInMinutes Optional time-to-live value in minutes for the password reset token.
	 * @returns ServiceProxyResponse
	 */ 
	resetUniversalIdPasswordAdvancedWithExpiry (legacy template)(universalId: string, serviceParams: nativeObject, tokenTtlInMinutes: integer): ServiceProxyResponse;
}