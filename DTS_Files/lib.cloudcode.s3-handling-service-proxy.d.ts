/// <reference no-default-lib="true"/>

interface S3HandlingServiceProxy {
	/**
	 * Get list of updated file by category.
	 * 
	 * @param  {string} category Category of files on server to compare against.
	 * @param  {Object} fileDetails An array of file details.
	 * @returns ServiceProxyResponse
	 */ 
	getUpdatedFiles(category: string, fileDetails: Object): {
		status: number;
		data: {
		    fileDetails: Array<{
		        gameId: string;
		        fileId: string;
		        shortName: string;
		        fileName: string;
		        type: string;
		        subType: string;
		        category: any | null;
		        fileSize: number;
		        dateUploaded: number;
		        relativeUrl: string;
		        absoluteUrl: string;
		        md5Hash: string;
		        md5HashHex: string;
		        updated: number;
		    }>;
		};
	};


	/**
	 * Get list of files.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	getFileList(): {
		status: number;
		data: {
		    fileDetails: Array<{
		        gameId: string;
		        fileId: string;
		        shortName: string;
		        fileName: string;
		        type: string;
		        subType: string;
		        category: any | null;
		        fileSize: number;
		        dateUploaded: number;
		        relativeUrl: string;
		        absoluteUrl: string;
		        md5Hash: string;
		        md5HashHex: string;
		    }>;
		};
	};


	/**
	 * Generates a CDN url for a user file.
	 * 
	 * @param  {string} fileId The id of the file.
	 * @returns ServiceProxyResponse
	 */ 
	getCDNUrl(fileId: string): {
		status: number;
		data: {
		    appServerUrl: string;
		    cdnUrl: string;
		};
	};

}