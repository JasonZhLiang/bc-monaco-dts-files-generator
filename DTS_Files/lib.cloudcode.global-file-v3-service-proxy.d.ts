/// <reference no-default-lib="true"/>

interface GlobalFileV3ServiceProxy {
	/**
	 * Returns information on a file using fileId.
	 * 
	 * @param  {String} fileId The id of the file.
	 * @returns ServiceProxyResponse
	 */ 
	getFileInfo(fileId: string): ServiceProxyResponse;

	/**
	 * Returns information on a file using path and name.
	 * 
	 * @param  {String} folderPath The folder path.
	 * @param  {String} filename The file name.
	 * @returns ServiceProxyResponse
	 */ 
	getFileInfoSimple(folderPath: string, filename: string): ServiceProxyResponse;

	/**
	 * Check if filename exists for provided path and name.
	 * 
	 * @param  {String} folderPath The folder path.
	 * @param  {String} filename The file name.
	 * @returns ServiceProxyResponse
	 */ 
	checkFilenameExists(folderPath: string, filename: string): ServiceProxyResponse;

	/**
	 * Check if filename exists for provided full path name.
	 * 
	 * @param  {String} fullPathFilename The full file name with path.
	 * @returns ServiceProxyResponse
	 */ 
	checkFullpathFilenameExists(fullPathFilename: string): ServiceProxyResponse;

	/**
	 * Returns a list of files.
	 * 
	 * @param  {String} folderPath The folder path.
	 * @param  {Boolean} recurse Whether to recurse beyond the starting folder.
	 * @returns ServiceProxyResponse
	 */ 
	getGlobalFileList(folderPath: string, recurse: boolean): ServiceProxyResponse;

	/**
	 * Return CDN url for file for clients that cannot handle redirect.
	 * 
	 * @param  {String} fileId The id of the file.
	 * @returns ServiceProxyResponse
	 */ 
	getGlobalCDNUrl(fileId: string): ServiceProxyResponse;

	/**
	 * Returns information on a file using fileId.
	 * 
	 * @param  {String} fileId The id of the file.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetFileInfo(fileId: string): ServiceProxyResponse;

	/**
	 * Returns information on a file using path and name.
	 * 
	 * @param  {String} folderPath The folder path.
	 * @param  {String} filename The file name.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetFileInfoSimple(folderPath: string, filename: string): ServiceProxyResponse;

	/**
	 * Check if filename exists for provided path and name.
	 * 
	 * @param  {String} folderPath The folder path.
	 * @param  {String} filename The file name.
	 * @returns ServiceProxyResponse
	 */ 
	sysCheckFilenameExists(folderPath: string, filename: string): ServiceProxyResponse;

	/**
	 * Check if filename exists for provided full path name.
	 * 
	 * @param  {String} fullPathFilename The file full path.
	 * @returns ServiceProxyResponse
	 */ 
	sysCheckFullpathFilenameExists(fullPathFilename: string): ServiceProxyResponse;

	/**
	 * Move a file from user space to global space.
	 * 
	 * @param  {String} userProfileId The user file owner name.
	 * @param  {String} userCloudPath The user file folder path.
	 * @param  {String} userCloudFilename The user file name.
	 * @param  {String} globalTreeId The destination folder id.
	 * @param  {String} globalFilename The destination file name.
	 * @param  {Boolean} overwriteIfPresent Whether to allow overwrite of an existing file if present.
	 * @returns ServiceProxyResponse
	 */ 
	sysMoveToGlobalFile(userProfileId: string, userCloudPath: string, userCloudFilename: string, globalTreeId: string, globalFilename: string, overwriteIfPresent: boolean): ServiceProxyResponse;

	/**
	 * Copy a global file.
	 * 
	 * @param  {String} fileId The id of the file.
	 * @param  {Number} version The source file version.
	 * @param  {String} newTreeId The id of the destination folder.
	 * @param  {Number} treeVersion The folder tree target version.
	 * @param  {String} newFilename The destination file name.
	 * @param  {Boolean} overwriteIfPresent Whether to allow overwrite of an existing file if present.
	 * @returns ServiceProxyResponse
	 */ 
	sysCopyGlobalFile(fileId: string, version: number, newTreeId: string, treeVersion: number, newFilename: string, overwriteIfPresent: boolean): ServiceProxyResponse;

	/**
	 * Move a global file.
	 * 
	 * @param  {String} fileId The id of the file.
	 * @param  {Number} version The source file version.
	 * @param  {String} newTreeId The id of the destination folder.
	 * @param  {Number} treeVersion The folder tree target version.
	 * @param  {String} newFilename The destination file name.
	 * @param  {Boolean} overwriteIfPresent Whether to allow overwrite of an existing file if present.
	 * @returns ServiceProxyResponse
	 */ 
	sysMoveGlobalFile(fileId: string, version: number, newTreeId: string, treeVersion: number, newFilename: string, overwriteIfPresent: boolean): ServiceProxyResponse;

	/**
	 * Delete a global file.
	 * 
	 * @param  {String} fileId The id of the file.
	 * @param  {Number} version The file version target.
	 * @param  {String} filename The name of the file.
	 * @returns ServiceProxyResponse
	 */ 
	sysDeleteGlobalFile(fileId: string, version: number, filename: string): ServiceProxyResponse;

	/**
	 * Delete multiple global files based on folder.
	 * 
	 * @param  {String} treeId The id of the folder.
	 * @param  {String} folderPath The folder path.
	 * @param  {Number} treeVersion The folder tree target version.
	 * @param  {Boolean} recurse Whether to recurse beyond the starting folder.
	 * @returns ServiceProxyResponse
	 */ 
	sysDeleteGlobalFiles(treeId: string, folderPath: string, treeVersion: number, recurse: boolean): ServiceProxyResponse;

	/**
	 * Returns a list of files.
	 * 
	 * @param  {String} folderPath The folder path.
	 * @param  {Boolean} recurse Whether to recurse beyond the starting folder.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetGlobalFileList(folderPath: string, recurse: boolean): ServiceProxyResponse;

	/**
	 * Return CDN url for file for clients that cannot handle redirect.
	 * 
	 * @param  {String} fileId The id of the file.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetGlobalCDNUrl(fileId: string): ServiceProxyResponse;

	/**
	 * Create a folder in the global file tree.
	 * 
	 * @param  {String} folderPath The folder path.
	 * @param  {Number} treeVersion The target version of the folder tree.
	 * @param  {String} name The new folder name.
	 * @param  {String} desc The new folder description.
	 * @param  {Boolean} createInterimDirectories Whether to automatically create folders if needed.
	 * @returns ServiceProxyResponse
	 */ 
	sysCreateFolder(folderPath: string, treeVersion: number, name: string, desc: string, createInterimDirectories: boolean): ServiceProxyResponse;

	/**
	 * Move a folder in the global file tree.
	 * 
	 * @param  {String} treeId The id of the folder.
	 * @param  {Number} treeVersion The target version of the folder tree.
	 * @param  {String} newFolderPath The new folder path.
	 * @param  {String} updatedName The new folder name.
	 * @param  {Boolean} createInterimDirectories Whether to automatically create folders if needed.
	 * @returns ServiceProxyResponse
	 */ 
	sysMoveFolder(treeId: string, treeVersion: number, newFolderPath: string, updatedName: string, createInterimDirectories: boolean): ServiceProxyResponse;

	/**
	 * Rename a folder in the global file tree.
	 * 
	 * @param  {String} treeId The id of the folder.
	 * @param  {Number} treeVersion The target version of the folder tree.
	 * @param  {String} updatedName The new folder name.
	 * @returns ServiceProxyResponse
	 */ 
	sysRenameFolder(treeId: string, treeVersion: number, updatedName: string): ServiceProxyResponse;

	/**
	 * Retrieves tree id of specified folder.
	 * 
	 * @param  {String} fullFolderPath The full folder path.
	 * @returns ServiceProxyResponse
	 */ 
	sysLookupFolder(fullFolderPath: string): ServiceProxyResponse;

	/**
	 * Delete a folder.
	 * 
	 * @param  {String} treeId The id of the folder.
	 * @param  {String} folderPath The folder path.
	 * @param  {Number} treeVersion The target version of the folder tree.
	 * @param  {Boolean} force Whether to delete non-empty folders, sub-folders and their files.
	 * @returns ServiceProxyResponse
	 */ 
	sysDeleteFolder(treeId: string, folderPath: string, treeVersion: number, force: boolean): ServiceProxyResponse;

	/**
	 * Prepare for the uploading of a global file.
	 * 
	 * @param  {String} treeId The id of the folder (optional). Defaults to root folder.
	 * @param  {String} filename The destination file name.
	 * @param  {Long} fileSize File size (in bytes) to be uploaded.
	 * @param  {Boolean} overwriteIfPresent Whether to allow overwrite of an existing file if present (optional). Defaults to false.
	 * @returns ServiceProxyResponse
	 */ 
	sysPrepareUpload(treeId: string, filename: string, fileSize: number, overwriteIfPresent: boolean): ServiceProxyResponse;

	/**
	 * Upload a global file directly.
	 * 
	 * @param  {String} treeId The id of the folder (optional). Default is the root folder.
	 * @param  {String} filename The destination file name.
	 * @param  {Boolean} overwriteIfPresent Whether to allow overwrite of an existing file if present (optional). Default is false.
	 * @param  {String} fileData Base64 encoded file contents.
	 * @returns ServiceProxyResponse
	 */ 
	sysUploadStream(treeId: string, filename: string, overwriteIfPresent: boolean, fileData: string): ServiceProxyResponse;
}