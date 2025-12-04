/// <reference no-default-lib="true"/>

interface GlobalFileServiceProxy {
	/**
	 * Get list of updated file by category.
	 * 
	 * @param  {String} category Optional. If set, will filter the returned list to only files belonging to said category.
	 * @param  {NativeObject} fileDetails Optional. If set, will use the given md5Hash values to determine/indicate if the corresponding files have been updated or not.
	 * @returns ServiceProxyResponse
	 */ 
	getUpdatedFiles(category: string, fileDetails: Object): ServiceProxyResponse;

	/**
	 * Get list of files.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	getFileList(): ServiceProxyResponse;

	/**
	 * Generates a CDN url for a user file.
	 * 
	 * @param  {String} fileId File identifier.
	 * @returns ServiceProxyResponse
	 */ 
	getCDNUrl(fileId: string): ServiceProxyResponse;

	/**
	 * Move a file from user space to global space.
	 * 
	 * @param  {String} userProfileId Profile id of file owner.
	 * @param  {String} userCloudPath Cloud path of target file.
	 * @param  {String} userCloudFilename Cloud filename of target file.
	 * @param  {String} shortName New desired short filename.
	 * @param  {String} globalCloudFilename New desired global cloud filename.
	 * @param  {Boolean} overwriteIfPresent Flag to force a file overwrite if already exists.
	 * @returns ServiceProxyResponse
	 */ 
	sysMoveToLegacyGlobalFile(userProfileId: string, userCloudPath: string, userCloudFilename: string, shortName: string, globalCloudFilename: string, overwriteIfPresent: boolean): ServiceProxyResponse;
}