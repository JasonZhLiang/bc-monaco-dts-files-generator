/// <reference no-default-lib="true"/>

interface LogServiceProxy {
	/**
	 * Logs an error with string-based context.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	logError(): ServiceProxyResponse;

	/**
	 * Logs an warning with string-based context.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	logWarning(): ServiceProxyResponse;

	/**
	 * Logs an info message with string-based context.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	logInfo(): ServiceProxyResponse;

	/**
	 * Logs an error with JSON context.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	logErrorJson(): ServiceProxyResponse;

	/**
	 * Logs an warning with JSON context.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	logWarningJson(): ServiceProxyResponse;

	/**
	 * Logs an info message with JSON context.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	logInfoJson(): ServiceProxyResponse;
}