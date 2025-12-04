/// <reference no-default-lib="true"/>

interface MailServiceProxy {
	/**
	 * Sends a simple text email to the given user.
	 * 
	 * @param  {String} profileId The user to send the email to.
	 * @param  {String} subject The email subject.
	 * @param  {String} body The email body.
	 * @returns ServiceProxyResponse
	 */ 
	sendBasicEmail(profileId: string, subject: string, body: string): {
    status: number;
    data: 
    {
    };
};

	/**
	 * Sends an plain text email to the user with the specified profileId. 
 See the documentation for contents of 'serviceParams'.
	 * 
	 * @param  {String} profileId The user to send the email to.
	 * @param  {NativeObject} serviceParams Set of parameters dependent on the mail service configured.
	 * @returns ServiceProxyResponse
	 */ 
	sendAdvancedEmail(profileId: string, serviceParams: Object): ServiceProxyResponse;

	/**
	 * Sends a plain text email to the address specified. 
 See the documentation for contents of 'serviceParams'.
	 * 
	 * @param  {String} emailAddress The address to send the email to.
	 * @param  {NativeObject} serviceParams Set of parameters dependent on the mail service configured.
	 * @returns ServiceProxyResponse
	 */ 
	sendAdvancedEmailByAddress(emailAddress: string, serviceParams: Object): ServiceProxyResponse;

	/**
	 * Sends a plain text email to the addresses specified. 
 See the documentation for contents of 'serviceParams'.
	 * 
	 * @param  {NativeArray} emailAddresses The list of addresses to send the email to.
	 * @param  {NativeObject} serviceParams Set of parameters dependent on the mail service configured.
	 * @returns ServiceProxyResponse
	 */ 
	sendAdvancedEmailByAddresses(emailAddresses: Array<any>, serviceParams: Object): ServiceProxyResponse;

}