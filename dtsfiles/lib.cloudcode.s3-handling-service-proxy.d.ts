/// <reference no-default-lib="true"/>

interface S3HandlingServiceProxy {
	/**
	 * Get list of updated file by category.
	 * 
	 * @param  {string} category Category of files on server to compare against.
	 * @param  {nativeObject} fileDetails An array of file details.
	 * @returns ServiceProxyResponse
	 */ 
	getUpdatedFiles(category: string, fileDetails: nativeObject): ServiceProxyResponse;

	/**
	 * Get list of files.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	getFileList(): ServiceProxyResponse;

	/**
	 * Generates a CDN url for a user file.
	 * 
	 * @param  {string} fileId The id of the file.
	 * @returns ServiceProxyResponse
	 */ 
	getCDNUrl(fileId: string): ServiceProxyResponse;
}