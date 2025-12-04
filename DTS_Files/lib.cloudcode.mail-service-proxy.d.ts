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
	sendBasicEmail(profileId: string, subject: string, body: string): {
		data: {
		};
		status: number;
	};


	/**
	 * Sends an plain text email to the user with the specified profileId. 
 See the documentation for contents of 'serviceParams'.
	 * 
	 * @param  {string} profileId The user to send the email to.
	 * @param  {Object} serviceParams Set of parameters dependent on the mail service configured.
	 * @returns ServiceProxyResponse
	 */ 
	sendAdvancedEmail(profileId: string, serviceParams: Object): ServiceProxyResponse;


	/**
	 * Sends a plain text email to the address specified. 
 See the documentation for contents of 'serviceParams'.
	 * 
	 * @param  {string} emailAddress The address to send the email to.
	 * @param  {Object} serviceParams Set of parameters dependent on the mail service configured.
	 * @returns ServiceProxyResponse
	 */ 
	sendAdvancedEmailByAddress(emailAddress: string, serviceParams: Object): ServiceProxyResponse;


	/**
	 * Sends a plain text email to the addresses specified. 
 See the documentation for contents of 'serviceParams'.
	 * 
	 * @param  {Array<any>} emailAddresses The list of addresses to send the email to.
	 * @param  {Object} serviceParams Set of parameters dependent on the mail service configured.
	 * @returns ServiceProxyResponse
	 */ 
	sendAdvancedEmailByAddresses(emailAddresses: Array<any>, serviceParams: Object): ServiceProxyResponse;


}