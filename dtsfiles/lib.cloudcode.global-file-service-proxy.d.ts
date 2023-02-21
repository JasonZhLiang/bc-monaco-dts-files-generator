/// <reference no-default-lib="true"/>

interface GlobalFileServiceProxy {
	/**
	 * Get list of updated file by category.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	getUpdatedFiles(): ServiceProxyResponse;

	/**
	 * Get list of files.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	getFileList(): ServiceProxyResponse;

	/**
	 * Generates a CDN url for a user file.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	getCDNUrl(): ServiceProxyResponse;

	/**
	 * Move a file from user space to global space.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	sysMoveToLegacyGlobalFile(): ServiceProxyResponse;
}