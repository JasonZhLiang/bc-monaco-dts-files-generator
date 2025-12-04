/// <reference no-default-lib="true"/>

interface FileServiceProxy {
	/**
	 * Prepares for user file upload.
	 * 
	 * @param  {String} cloudPath The desired cloud path of the file.
	 * @param  {String} cloudFilename The desired cloud fileName of the file.
	 * @param  {Boolean} shareable True if the file is shareable.
	 * @param  {Boolean} replaceIfExists Whether to replace file if it exists.
	 * @param  {Long} fileSize File size (in bytes) to be uploaded.
	 * @param  {String} localPath Optional. Local path to the file to be uploaded.
	 * @returns ServiceProxyResponse
	 */ 
	prepareUserUpload(cloudPath: string, cloudFilename: string, shareable: boolean, replaceIfExists: boolean, fileSize: number, localPath: string): {
    status: number;
    data: 
    {
        fileDetails: 
        {
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
};

	/**
	 * Returns a list of user files.
	 * 
	 * @param  {String} path The file path.
	 * @param  {Boolean} recurse Whether to recurse into sub-directories.
	 * @returns ServiceProxyResponse
	 */ 
	listUserFiles(path: string, recurse: boolean): {
    status: number;
    data: 
    {
        fileList: Array<
        {
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
};

	/**
	 * Deletes a single user file.
	 * 
	 * @param  {String} cloudPath The file path.
	 * @param  {String} cloudFilename The name of the file.
	 * @returns ServiceProxyResponse
	 */ 
	deleteUserFile(cloudPath: string, cloudFilename: string): {
    status: number;
    data: 
    {
        fileDetails: 
        {
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
};

	/**
	 * Deletes multiple files.
	 * 
	 * @param  {String} path The file path.
	 * @param  {Boolean} recurse Whether to recurse into sub-directories.
	 * @returns ServiceProxyResponse
	 */ 
	deleteUserFiles(path: string, recurse: boolean): {
    status: number;
    data: 
    {
        fileList: Array<
        {
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
};

	/**
	 * Generates a CDN url for a user file.
	 * 
	 * @param  {String} cloudPath The file path.
	 * @param  {String} cloudFilename The name of the file.
	 * @returns ServiceProxyResponse
	 */ 
	getCDNUrl(cloudPath: string, cloudFilename: string): {
    status: number;
    data: 
    {
        appServerUrl: string;
        cdnUrl: string;
    };
};
}