/// <reference no-default-lib="true"/>

interface GlobalFileV3ServiceProxy {
	/**
	 * Returns information on a file using fileId.
	 * 
	 * @param  {string} fileId The id of the file.
	 * @returns ServiceProxyResponse
	 */ 
	getFileInfo(fileId: string): ServiceProxyResponse;

	/**
	 * Returns information on a file using path and name.
	 * 
	 * @param  {string} folderPath The folder path.
	 * @param  {string} filename The file name.
	 * @returns ServiceProxyResponse
	 */ 
	getFileInfoSimple(folderPath: string, filename: string): ServiceProxyResponse;

	/**
	 * Check if filename exists for provided path and name.
	 * 
	 * @param  {string} folderPath The folder path.
	 * @param  {string} filename The file name.
	 * @returns ServiceProxyResponse
	 */ 
	checkFilenameExists(folderPath: string, filename: string): ServiceProxyResponse;

	/**
	 * Check if filename exists for provided full path name.
	 * 
	 * @param  {string} fullPathFilename The full file name with path.
	 * @returns ServiceProxyResponse
	 */ 
	checkFullpathFilenameExists(fullPathFilename: string): ServiceProxyResponse;

	/**
	 * Returns a list of files.
	 * 
	 * @param  {string} folderPath The folder path.
	 * @param  {boolean} recurse Whether to recurse beyond the starting folder.
	 * @returns ServiceProxyResponse
	 */ 
	getGlobalFileList(folderPath: string, recurse: boolean): ServiceProxyResponse;

	/**
	 * Return CDN url for file for clients that cannot handle redirect.
	 * 
	 * @param  {string} fileId The id of the file.
	 * @returns ServiceProxyResponse
	 */ 
	getGlobalCDNUrl(fileId: string): ServiceProxyResponse;

	/**
	 * Returns information on a file using fileId.
	 * 
	 * @param  {string} fileId The id of the file.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetFileInfo(fileId: string): ServiceProxyResponse;

	/**
	 * Returns information on a file using path and name.
	 * 
	 * @param  {string} folderPath The folder path.
	 * @param  {string} filename The file name.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetFileInfoSimple(folderPath: string, filename: string): ServiceProxyResponse;

	/**
	 * Check if filename exists for provided path and name.
	 * 
	 * @param  {string} folderPath The folder path.
	 * @param  {string} filename The file name.
	 * @returns ServiceProxyResponse
	 */ 
	sysCheckFilenameExists(folderPath: string, filename: string): ServiceProxyResponse;

	/**
	 * Check if filename exists for provided full path name.
	 * 
	 * @param  {string} fullPathFilename The file full path.
	 * @returns ServiceProxyResponse
	 */ 
	sysCheckFullpathFilenameExists(fullPathFilename: string): ServiceProxyResponse;

	/**
	 * Move a file from user space to global space.
	 * 
	 * @param  {string} userProfileId The user file owner name.
	 * @param  {string} userCloudPath The user file folder path.
	 * @param  {string} userCloudFilename The user file name.
	 * @param  {string} globalTreeId The destination folder id.
	 * @param  {string} globalFilename The destination file name.
	 * @param  {boolean} overwriteIfPresent Whether to allow overwrite of an existing file if present.
	 * @returns ServiceProxyResponse
	 */ 
	sysMoveToGlobalFile(userProfileId: string, userCloudPath: string, userCloudFilename: string, globalTreeId: string, globalFilename: string, overwriteIfPresent: boolean): ServiceProxyResponse;

	/**
	 * Copy a global file.
	 * 
	 * @param  {string} fileId The id of the file.
	 * @param  {number} version The source file version.
	 * @param  {string} newTreeId The id of the destination folder.
	 * @param  {number} treeVersion The folder tree target version.
	 * @param  {string} newFilename The destination file name.
	 * @param  {boolean} overwriteIfPresent Whether to allow overwrite of an existing file if present.
	 * @returns ServiceProxyResponse
	 */ 
	sysCopyGlobalFile(fileId: string, version: number, newTreeId: string, treeVersion: number, newFilename: string, overwriteIfPresent: boolean): ServiceProxyResponse;

	/**
	 * Move a global file.
	 * 
	 * @param  {string} fileId The id of the file.
	 * @param  {number} version The source file version.
	 * @param  {string} newTreeId The id of the destination folder.
	 * @param  {number} treeVersion The folder tree target version.
	 * @param  {string} newFilename The destination file name.
	 * @param  {boolean} overwriteIfPresent Whether to allow overwrite of an existing file if present.
	 * @returns ServiceProxyResponse
	 */ 
	sysMoveGlobalFile(fileId: string, version: number, newTreeId: string, treeVersion: number, newFilename: string, overwriteIfPresent: boolean): ServiceProxyResponse;

	/**
	 * Delete a global file.
	 * 
	 * @param  {string} fileId The id of the file.
	 * @param  {number} version The file version target.
	 * @param  {string} filename The name of the file.
	 * @returns ServiceProxyResponse
	 */ 
	sysDeleteGlobalFile(fileId: string, version: number, filename: string): ServiceProxyResponse;

	/**
	 * Delete multiple global files based on folder.
	 * 
	 * @param  {string} treeId The id of the folder.
	 * @param  {string} folderPath The folder path.
	 * @param  {number} treeVersion The folder tree target version.
	 * @param  {boolean} recurse Whether to recurse beyond the starting folder.
	 * @returns ServiceProxyResponse
	 */ 
	sysDeleteGlobalFiles(treeId: string, folderPath: string, treeVersion: number, recurse: boolean): ServiceProxyResponse;

	/**
	 * Returns a list of files.
	 * 
	 * @param  {string} folderPath The folder path.
	 * @param  {boolean} recurse Whether to recurse beyond the starting folder.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetGlobalFileList(folderPath: string, recurse: boolean): ServiceProxyResponse;

	/**
	 * Return CDN url for file for clients that cannot handle redirect.
	 * 
	 * @param  {string} fileId The id of the file.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetGlobalCDNUrl(fileId: string): ServiceProxyResponse;

	/**
	 * Create a folder in the global file tree.
	 * 
	 * @param  {string} folderPath The folder path.
	 * @param  {number} treeVersion The target version of the folder tree.
	 * @param  {string} name The new folder name.
	 * @param  {string} desc The new folder description.
	 * @param  {boolean} createInterimDirectories Whether to automatically create folders if needed.
	 * @returns ServiceProxyResponse
	 */ 
	sysCreateFolder(folderPath: string, treeVersion: number, name: string, desc: string, createInterimDirectories: boolean): ServiceProxyResponse;

	/**
	 * Move a folder in the global file tree.
	 * 
	 * @param  {string} treeId The id of the folder.
	 * @param  {number} treeVersion The target version of the folder tree.
	 * @param  {string} newFolderPath The new folder path.
	 * @param  {string} updatedName The new folder name.
	 * @param  {boolean} createInterimDirectories Whether to automatically create folders if needed.
	 * @returns ServiceProxyResponse
	 */ 
	sysMoveFolder(treeId: string, treeVersion: number, newFolderPath: string, updatedName: string, createInterimDirectories: boolean): ServiceProxyResponse;

	/**
	 * Rename a folder in the global file tree.
	 * 
	 * @param  {string} treeId The id of the folder.
	 * @param  {number} treeVersion The target version of the folder tree.
	 * @param  {string} updatedName The new folder name.
	 * @returns ServiceProxyResponse
	 */ 
	sysRenameFolder(treeId: string, treeVersion: number, updatedName: string): ServiceProxyResponse;

	/**
	 * Retrieves tree id of specified folder.
	 * 
	 * @param  {string} fullFolderPath The full folder path.
	 * @returns ServiceProxyResponse
	 */ 
	sysLookupFolder(fullFolderPath: string): ServiceProxyResponse;

	/**
	 * Delete a folder.
	 * 
	 * @param  {string} treeId The id of the folder.
	 * @param  {string} folderPath The folder path.
	 * @param  {number} treeVersion The target version of the folder tree.
	 * @param  {boolean} force Whether to delete non-empty folders, sub-folders and their files.
	 * @returns ServiceProxyResponse
	 */ 
	sysDeleteFolder(treeId: string, folderPath: string, treeVersion: number, force: boolean): ServiceProxyResponse;
}