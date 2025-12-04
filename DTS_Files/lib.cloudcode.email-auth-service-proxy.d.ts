/// <reference no-default-lib="true"/>

interface EmailAuthServiceProxy {
	/**
	 * Special json for email auth confirm email cloud code hook.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	confirmEmail(): ServiceProxyResponse;

	/**
	 * Special json for email auth password reset cloud code hook.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	resetPassword(): ServiceProxyResponse;
}