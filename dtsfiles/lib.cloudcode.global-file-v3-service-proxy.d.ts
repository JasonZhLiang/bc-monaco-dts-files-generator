/// <reference no-default-lib="true"/>

interface GlobalFileV3ServiceProxy {
	/**
	 * Returns information on a file using fileId.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	getFileInfo(): ServiceProxyResponse;

	/**
	 * Returns information on a file using path and name.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	getFileInfoSimple(): ServiceProxyResponse;

	/**
	 * Check if filename exists for provided path and name.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	checkFilenameExists(): ServiceProxyResponse;

	/**
	 * Check if filename exists for provided full path name.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	checkFullpathFilenameExists(): ServiceProxyResponse;

	/**
	 * Returns a list of files.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	getGlobalFileList(): ServiceProxyResponse;

	/**
	 * Return CDN url for file for clients that cannot handle redirect.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	getGlobalCDNUrl(): ServiceProxyResponse;

	/**
	 * Returns information on a file using fileId.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	sysGetFileInfo(): ServiceProxyResponse;

	/**
	 * Returns information on a file using path and name.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	sysGetFileInfoSimple(): ServiceProxyResponse;

	/**
	 * Check if filename exists for provided path and name.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	sysCheckFilenameExists(): ServiceProxyResponse;

	/**
	 * Check if filename exists for provided full path name.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	sysCheckFullpathFilenameExists(): ServiceProxyResponse;

	/**
	 * Move a file from user space to global space.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	sysMoveToGlobalFile(): ServiceProxyResponse;

	/**
	 * Copy a global file.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	sysCopyGlobalFile(): ServiceProxyResponse;

	/**
	 * Move a global file.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	sysMoveGlobalFile(): ServiceProxyResponse;

	/**
	 * Delete a global file.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	sysDeleteGlobalFile(): ServiceProxyResponse;

	/**
	 * Delete multiple global files based on folder.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	sysDeleteGlobalFiles(): ServiceProxyResponse;

	/**
	 * Returns a list of files.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	sysGetGlobalFileList(): ServiceProxyResponse;

	/**
	 * Return CDN url for file for clients that cannot handle redirect.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	sysGetGlobalCDNUrl(): ServiceProxyResponse;

	/**
	 * Create a folder in the global file tree.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	sysCreateFolder(): ServiceProxyResponse;

	/**
	 * Move a folder in the global file tree.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	sysMoveFolder(): ServiceProxyResponse;

	/**
	 * Rename a folder in the global file tree.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	sysRenameFolder(): ServiceProxyResponse;

	/**
	 * Retrieves tree id of specified folder.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	sysLookupFolder(): ServiceProxyResponse;

	/**
	 * Delete a folder.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	sysDeleteFolder(): ServiceProxyResponse;
}