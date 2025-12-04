/// <reference no-default-lib="true"/>

interface LogServiceProxy {
	/**
	 * Logs an error with string-based context.
	 * 
	 * @param  {string} errorMessage Message to log
	 * @param  {string} context Context of log message
	 * @returns ServiceProxyResponse
	 */ 
	logError(errorMessage: string, context: string): ServiceProxyResponse;

	/**
	 * Logs an warning with string-based context.
	 * 
	 * @param  {string} errorMessage Message to log
	 * @param  {string} context Context of log message
	 * @returns ServiceProxyResponse
	 */ 
	logWarning(errorMessage: string, context: string): ServiceProxyResponse;

	/**
	 * Logs an info message with string-based context.
	 * 
	 * @param  {string} errorMessage Message to log
	 * @param  {string} context Context of log message
	 * @returns ServiceProxyResponse
	 */ 
	logInfo(errorMessage: string, context: string): ServiceProxyResponse;

	/**
	 * Logs an error with JSON context.
	 * 
	 * @param  {string} errorMessage Message to log
	 * @param  {map} jsonContext Context of log message
	 * @returns ServiceProxyResponse
	 */ 
	logErrorJson(errorMessage: string, jsonContext: map): ServiceProxyResponse;

	/**
	 * Logs an warning with JSON context.
	 * 
	 * @param  {string} errorMessage Message to log
	 * @param  {map} jsonContext Context of log message
	 * @returns ServiceProxyResponse
	 */ 
	logWarningJson(errorMessage: string, jsonContext: map): ServiceProxyResponse;

	/**
	 * Logs an info message with JSON context.
	 * 
	 * @param  {string} errorMessage Message to log
	 * @param  {map} jsonContext Context of log message
	 * @returns ServiceProxyResponse
	 */ 
	logInfoJson(errorMessage: string, jsonContext: map): ServiceProxyResponse;
}