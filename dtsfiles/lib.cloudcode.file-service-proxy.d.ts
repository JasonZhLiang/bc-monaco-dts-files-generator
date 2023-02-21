/// <reference no-default-lib="true"/>

interface FileServiceProxy {
	/**
	 * Prepares for user file upload.
	 * 
	 * @param  {string} cloudPath The desired cloud path of the file.
	 * @param  {string} cloudFilename The desired cloud fileName of the file.
	 * @param  {boolean} shareable True if the file is shareable.
	 * @param  {boolean} replaceIfExists Whether to replace file if it exists.
	 * @returns ServiceProxyResponse
	 */ 
	prepareUserUpload(cloudPath: string, cloudFilename: string, shareable: boolean, replaceIfExists: boolean): ServiceProxyResponse;

	/**
	 * Returns a list of user files.
	 * 
	 * @param  {string} cloudPath The file path.
	 * @param  {boolean} recurse Whether to recurse into sub-directories.
	 * @returns ServiceProxyResponse
	 */ 
	listUserFiles(cloudPath: string, recurse: boolean): ServiceProxyResponse;

	/**
	 * Deletes a single user file.
	 * 
	 * @param  {string} cloudPath The file path.
	 * @param  {string} cloudFilename The name of the file.
	 * @returns ServiceProxyResponse
	 */ 
	deleteUserFile(cloudPath: string, cloudFilename: string): ServiceProxyResponse;

	/**
	 * Deletes multiple files.
	 * 
	 * @param  {string} path The file path.
	 * @param  {boolean} recurse Whether to recurse into sub-directories.
	 * @returns ServiceProxyResponse
	 */ 
	deleteUserFiles(path: string, recurse: boolean): ServiceProxyResponse;

	/**
	 * Generates a CDN url for a user file.
	 * 
	 * @param  {string} cloudPath The file path.
	 * @param  {string} cloudFilename The name of the file.
	 * @returns ServiceProxyResponse
	 */ 
	getCDNUrl(cloudPath: string, cloudFilename: string): ServiceProxyResponse;
}