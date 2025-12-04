/// <reference no-default-lib="true"/>

interface GlobalFileServiceProxy {
	/**
	 * Get list of updated file by category.
	 * 
	 * @param  {string} category Optional. If set, will filter the returned list to only files belonging to said category.
	 * @param  {nativeObject} fileDetails Optional. If set, will use the given md5Hash values to determine/indicate if the corresponding files have been updated or not.
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
	 * @param  {string} fileId File identifier.
	 * @returns ServiceProxyResponse
	 */ 
	getCDNUrl(fileId: string): ServiceProxyResponse;

	/**
	 * Move a file from user space to global space.
	 * 
	 * @param  {string} userProfileId Profile id of file owner.
	 * @param  {string} userCloudPath Cloud path of target file.
	 * @param  {string} userCloudFilename Cloud filename of target file.
	 * @param  {string} shortName New desired short filename.
	 * @param  {string} globalCloudFilename New desired global cloud filename.
	 * @param  {boolean} overwriteIfPresent Flag to force a file overwrite if already exists.
	 * @returns ServiceProxyResponse
	 */ 
	sysMoveToLegacyGlobalFile(userProfileId: string, userCloudPath: string, userCloudFilename: string, shortName: string, globalCloudFilename: string, overwriteIfPresent: boolean): ServiceProxyResponse;
}