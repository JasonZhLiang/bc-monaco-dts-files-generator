/// <reference no-default-lib="true"/>

interface MailServiceProxy {
	/**
	 * Sends a simple text email to the given user.
	 * 
	 * @param  {string} profileId The user to send the email to.
	 * @param  {string} subject The email subject.
	 * @param  {string} body The email body.
	 * @returns ServiceProxyResponse
	 */ 
	sendBasicEmail(profileId: string, subject: string, body: string): ServiceProxyResponse;

	/**
	 * Sends an plain text email to the user with the specified profileId. 
 See the documentation for contents of 'serviceParams'.
	 * 
	 * @param  {string} profileId The user to send the email to.
	 * @param  {nativeObject} serviceParams Set of parameters dependant on the mail service configured.
	 * @returns ServiceProxyResponse
	 */ 
	sendAdvancedEmail (plain text)(profileId: string, serviceParams: nativeObject): ServiceProxyResponse;

	/**
	 * Sends an plain text email to the user with the specified profileId. 
 See the documentation for contents of 'serviceParams'.
	 * 
	 * @param  {string} profileId The user to send the email to.
	 * @param  {nativeObject} serviceParams Set of parameters dependant on the mail service configured.
	 * @returns ServiceProxyResponse
	 */ 
	sendAdvancedEmail (html)(profileId: string, serviceParams: nativeObject): ServiceProxyResponse;

	/**
	 * Sends a rich email to the user with the specified profileId using the specified legacy Sendgrid template. 
 See the documentation for contents of 'serviceParams'.
	 * 
	 * @param  {string} profileId The user to send the email to.
	 * @param  {nativeObject} serviceParams Set of parameters dependant on the mail service configured.
	 * @returns ServiceProxyResponse
	 */ 
	sendAdvancedEmail (legacy template)(profileId: string, serviceParams: nativeObject): ServiceProxyResponse;

	/**
	 * Sends a rich email to the user with the specified profileId using the specified dynamic Sendgrid template. 
 See the documentation for contents of 'serviceParams'.
	 * 
	 * @param  {string} profileId The user to send the email to.
	 * @param  {nativeObject} serviceParams Set of parameters dependant on the mail service configured.
	 * @returns ServiceProxyResponse
	 */ 
	sendAdvancedEmail (dynamic template)(profileId: string, serviceParams: nativeObject): ServiceProxyResponse;

	/**
	 * Sends a plain text email to the address specified. 
 See the documentation for contents of 'serviceParams'.
	 * 
	 * @param  {string} emailAddress The address to send the email to.
	 * @param  {nativeObject} serviceParams Set of parameters dependant on the mail service configured.
	 * @returns ServiceProxyResponse
	 */ 
	sendAdvancedEmailByAddress (plain text)(emailAddress: string, serviceParams: nativeObject): ServiceProxyResponse;

	/**
	 * Sends a plain text email to the address specified. 
 See the documentation for contents of 'serviceParams'.
	 * 
	 * @param  {string} emailAddress The address to send the email to.
	 * @param  {nativeObject} serviceParams Set of parameters dependant on the mail service configured.
	 * @returns ServiceProxyResponse
	 */ 
	sendAdvancedEmailByAddress (html)(emailAddress: string, serviceParams: nativeObject): ServiceProxyResponse;

	/**
	 * Sends a rich email to the address specified, using a legacy Sendgrid template. 
 See the documentation for contents of 'serviceParams'.
	 * 
	 * @param  {string} emailAddress The address to send the email to.
	 * @param  {nativeObject} serviceParams Set of parameters dependant on the mail service configured.
	 * @returns ServiceProxyResponse
	 */ 
	sendAdvancedEmailByAddress (legacy template)(emailAddress: string, serviceParams: nativeObject): ServiceProxyResponse;

	/**
	 * Sends a rich email to the address specified, using a dynamic Sendgrid template. 
 See the documentation for contents of 'serviceParams'.
	 * 
	 * @param  {string} emailAddress The address to send the email to.
	 * @param  {nativeObject} serviceParams Set of parameters dependant on the mail service configured.
	 * @returns ServiceProxyResponse
	 */ 
	sendAdvancedEmailByAddress (dynamic template)(emailAddress: string, serviceParams: nativeObject): ServiceProxyResponse;
}