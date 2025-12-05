/// <reference no-default-lib="true"/>

interface FileServiceProxy {
	/**
	 * Prepares for user file upload.
	 * 
	 * @param  {string} cloudPath The desired cloud path of the file.
	 * @param  {string} cloudFilename The desired cloud fileName of the file.
	 * @param  {boolean} shareable True if the file is shareable.
	 * @param  {boolean} replaceIfExists Whether to replace file if it exists.
	 * @param  {number} fileSize File size (in bytes) to be uploaded.
	 * @param  {string} localPath Optional. Local path to the file to be uploaded.
	 * @returns ServiceProxyResponse
	 */ 
	prepareUserUpload(cloudPath: string, cloudFilename: string, shareable: boolean, replaceIfExists: boolean, fileSize: number, localPath: string): {
		data: {
		    fileDetails: {
		        updatedAt: number;
		        fileSize: number;
		        fileType: string;
		        expiresAt: number;
		        shareable: number;
		        uploadId: string;
		        createdAt: number;
		        profileId: string;
		        gameId: string;
		        path: string;
		        filename: string;
		        replaceIfExists: number;
		        cloudPath: string;
		    };
		};
		status: number;
	};


	/**
	 * Returns a list of user files.
	 * 
	 * @param  {string} path The file path.
	 * @param  {boolean} recurse Whether to recurse into sub-directories.
	 * @returns ServiceProxyResponse
	 */ 
	listUserFiles(path: string, recurse: boolean): {
		data: {
		    fileList: Array<{
		        updatedAt: number;
		        uploadedAt: any | null;
		        fileSize: number;
		        shareable: number;
		        createdAt: number;
		        profileId: string;
		        gameId: string;
		        path: string;
		        filename: string;
		        downloadUrl: string;
		        cloudLocation: string;
		    }>;
		};
		status: number;
	};


	/**
	 * Deletes a single user file.
	 * 
	 * @param  {string} cloudPath The file path.
	 * @param  {string} cloudFilename The name of the file.
	 * @returns ServiceProxyResponse
	 */ 
	deleteUserFile(cloudPath: string, cloudFilename: string): {
		data: {
		    fileDetails: {
		        updatedAt: number;
		        fileSize: number;
		        fileType: string;
		        expiresAt: number;
		        shareable: number;
		        uploadId: string;
		        createdAt: number;
		        profileId: string;
		        gameId: string;
		        path: string;
		        filename: string;
		        replaceIfExists: number;
		        cloudPath: string;
		    };
		};
		status: number;
	};


	/**
	 * Deletes multiple files.
	 * 
	 * @param  {string} path The file path.
	 * @param  {boolean} recurse Whether to recurse into sub-directories.
	 * @returns ServiceProxyResponse
	 */ 
	deleteUserFiles(path: string, recurse: boolean): {
		data: {
		    fileList: Array<{
		        updatedAt: number;
		        uploadedAt: any | null;
		        fileSize: number;
		        shareable: number;
		        createdAt: number;
		        profileId: string;
		        gameId: string;
		        path: string;
		        filename: string;
		        downloadUrl: string;
		        cloudLocation: string;
		    }>;
		};
		status: number;
	};


	/**
	 * Generates a CDN url for a user file.
	 * 
	 * @param  {string} cloudPath The file path.
	 * @param  {string} cloudFilename The name of the file.
	 * @returns ServiceProxyResponse
	 */ 
	getCDNUrl(cloudPath: string, cloudFilename: string): {
		data: {
		    appServerUrl: string;
		    cdnUrl: string;
		};
		status: number;
	};

}