/// <reference no-default-lib="true"/>

interface GroupFileServiceProxy {
	/**
	 * Check if filename exists for provided path and name.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {string} folderPath The folder path.
	 * @param  {string} filename The file name.
	 * @returns ServiceProxyResponse
	 */ 
	checkFilenameExists(groupId: string, folderPath: string, filename: string): ServiceProxyResponse;

	/**
	 * Check if filename exists for provided path and name.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {string} folderPath The folder path.
	 * @param  {string} filename The file name.
	 * @returns ServiceProxyResponse
	 */ 
	sysCheckFilenameExists(groupId: string, folderPath: string, filename: string): ServiceProxyResponse;

	/**
	 * Check if filename exists for provided full path name.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {string} fullPathFilename The full file name with path.
	 * @returns ServiceProxyResponse
	 */ 
	checkFullpathFilenameExists(groupId: string, fullPathFilename: string): ServiceProxyResponse;

	/**
	 * Check if filename exists for provided full path name.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {string} fullPathFilename The full file name with path.
	 * @returns ServiceProxyResponse
	 */ 
	sysCheckFullpathFilenameExists(groupId: string, fullPathFilename: string): ServiceProxyResponse;

	/**
	 * Returns information on a file using fileId.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {string} fileId The id of the file.
	 * @returns ServiceProxyResponse
	 */ 
	getFileInfo(groupId: string, fileId: string): ServiceProxyResponse;

	/**
	 * Returns information on a file using fileId.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {string} fileId The id of the file.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetFileInfo(groupId: string, fileId: string): ServiceProxyResponse;

	/**
	 * Returns information on a file using path and name.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {string} folderPath The folder path.
	 * @param  {string} filename The file name.
	 * @returns ServiceProxyResponse
	 */ 
	getFileInfoSimple(groupId: string, folderPath: string, filename: string): ServiceProxyResponse;

	/**
	 * Returns information on a file using path and name.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {string} folderPath The folder path.
	 * @param  {string} filename The file name.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetFileInfoSimple(groupId: string, folderPath: string, filename: string): ServiceProxyResponse;

	/**
	 * Returns a list of files.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {string} folderPath The folder path.
	 * @param  {boolean} recurse Whether to recurse beyond the starting folder.
	 * @returns ServiceProxyResponse
	 */ 
	getFileList(groupId: string, folderPath: string, recurse: boolean): ServiceProxyResponse;

	/**
	 * Returns a list of files.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {string} folderPath The folder path.
	 * @param  {boolean} recurse Whether to recurse beyond the starting folder.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetFileList(groupId: string, folderPath: string, recurse: boolean): ServiceProxyResponse;

	/**
	 * Return CDN url for file for clients that cannot handle redirect.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {string} fileId The id of the file.
	 * @returns ServiceProxyResponse
	 */ 
	getCDNUrl(groupId: string, fileId: string): ServiceProxyResponse;

	/**
	 * Return CDN url for file for clients that cannot handle redirect.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {string} fileId The id of the file.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetCDNUrl(groupId: string, fileId: string): ServiceProxyResponse;

	/**
	 * Returns information on a file using fileId.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {string} fileId The id of the file.
	 * @param  {integer} version The target version of the file.
	 * @param  {string} newFilename The optional new file name.
	 * @param  {nativeObject} newAcl The optional new acl.
	 * @returns ServiceProxyResponse
	 */ 
	updateFileInfo(groupId: string, fileId: string, version: integer, newFilename: string, newAcl: nativeObject): ServiceProxyResponse;

	/**
	 * Returns information on a file using fileId.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {string} fileId The id of the file.
	 * @param  {number} version The target version of the file.
	 * @param  {string} newFilename The optional new file name.
	 * @param  {map} newAcl The optional new acl.
	 * @returns ServiceProxyResponse
	 */ 
	sysUpdateFileInfo(groupId: string, fileId: string, version: number, newFilename: string, newAcl: map): ServiceProxyResponse;

	/**
	 * Copy a file.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {string} fileId The id of the file.
	 * @param  {number} version The target version of the file.
	 * @param  {string} newTreeId The id of the destination folder.
	 * @param  {number} treeVersion The target version of the folder tree.
	 * @param  {string} newFilename The optional new file name.
	 * @param  {boolean} overwriteIfPresent Whether to allow overwrite of an existing file if present.
	 * @returns ServiceProxyResponse
	 */ 
	copyFile(groupId: string, fileId: string, version: number, newTreeId: string, treeVersion: number, newFilename: string, overwriteIfPresent: boolean): ServiceProxyResponse;

	/**
	 * Copy a file.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {string} fileId The id of the file.
	 * @param  {number} version The target version of the file.
	 * @param  {string} newTreeId The id of the destination folder.
	 * @param  {number} treeVersion The target version of the folder tree.
	 * @param  {string} newFilename The optional new file name.
	 * @param  {boolean} overwriteIfPresent Whether to allow overwrite of an existing file if present.
	 * @returns ServiceProxyResponse
	 */ 
	sysCopyFile(groupId: string, fileId: string, version: number, newTreeId: string, treeVersion: number, newFilename: string, overwriteIfPresent: boolean): ServiceProxyResponse;

	/**
	 * Move a file.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {string} fileId The id of the file.
	 * @param  {number} version The target version of the file.
	 * @param  {string} newTreeId The id of the destination folder.
	 * @param  {number} treeVersion The target version of the folder tree.
	 * @param  {string} newFilename The optional new file name.
	 * @param  {boolean} overwriteIfPresent Whether to allow overwrite of an existing file if present.
	 * @returns ServiceProxyResponse
	 */ 
	moveFile(groupId: string, fileId: string, version: number, newTreeId: string, treeVersion: number, newFilename: string, overwriteIfPresent: boolean): ServiceProxyResponse;

	/**
	 * Move a file.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {string} fileId The id of the file.
	 * @param  {number} version The target version of the file.
	 * @param  {string} newTreeId The id of the destination folder.
	 * @param  {number} treeVersion The target version of the folder tree.
	 * @param  {string} newFilename The optional new file name.
	 * @param  {boolean} overwriteIfPresent Whether to allow overwrite of an existing file if present.
	 * @returns ServiceProxyResponse
	 */ 
	sysMoveFile(groupId: string, fileId: string, version: number, newTreeId: string, treeVersion: number, newFilename: string, overwriteIfPresent: boolean): ServiceProxyResponse;

	/**
	 * Delete a file.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {string} fileId The id of the file.
	 * @param  {number} version The target version of the file.
	 * @param  {string} filename The file name for verification purposes.
	 * @returns ServiceProxyResponse
	 */ 
	deleteFile(groupId: string, fileId: string, version: number, filename: string): ServiceProxyResponse;

	/**
	 * Delete a file.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {string} fileId The id of the file.
	 * @param  {number} version The target version of the file.
	 * @param  {string} filename The file name for verification purposes.
	 * @returns ServiceProxyResponse
	 */ 
	sysDeleteFile(groupId: string, fileId: string, version: number, filename: string): ServiceProxyResponse;

	/**
	 * Move a file from user space to group space.
	 * 
	 * @param  {string} userCloudPath The user file folder.
	 * @param  {string} userCloudFilename The user file name.
	 * @param  {string} groupId The id of the group.
	 * @param  {string} groupTreeId The id of the destination folder.
	 * @param  {string} groupFilename The group file name.
	 * @param  {boolean} overwriteIfPresent Whether to allow overwrite of an existing file if present.
	 * @param  {nativeObject} groupFileAcl The acl of the new group file.
	 * @returns ServiceProxyResponse
	 */ 
	moveUserToGroupFile(userCloudPath: string, userCloudFilename: string, groupId: string, groupTreeId: string, groupFilename: string, overwriteIfPresent: boolean, groupFileAcl: nativeObject): ServiceProxyResponse;

	/**
	 * Move a file from user space to group space.
	 * 
	 * @param  {string} userProfileId The user file owner.
	 * @param  {string} userCloudPath The user file folder.
	 * @param  {string} userCloudFilename The user file name.
	 * @param  {string} groupId The id of the group.
	 * @param  {string} groupTreeId The id of the destination folder.
	 * @param  {string} groupFilename The group file name.
	 * @param  {string} groupFileOwnerId The optional owner id of of the new group file.
	 * @param  {boolean} overwriteIfPresent Whether to allow overwrite of an existing file if present.
	 * @param  {map} groupFileAcl The acl of the new group file.
	 * @returns ServiceProxyResponse
	 */ 
	sysMoveUserToGroupFile(userProfileId: string, userCloudPath: string, userCloudFilename: string, groupId: string, groupTreeId: string, groupFilename: string, groupFileOwnerId: string, overwriteIfPresent: boolean, groupFileAcl: map): ServiceProxyResponse;

	/**
	 * Create a folder in the global file tree.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {string} folderPath The folder path.
	 * @param  {number} treeVersion The target version of the folder tree.
	 * @param  {string} name The new folder name.
	 * @param  {string} desc The new folder description.
	 * @param  {boolean} createInterimDirectories Whether to automatically create folders if needed.
	 * @param  {map} groupFolderAcl The acl of the new group folder.
	 * @returns ServiceProxyResponse
	 */ 
	sysCreateFolder(groupId: string, folderPath: string, treeVersion: number, name: string, desc: string, createInterimDirectories: boolean, groupFolderAcl: map): ServiceProxyResponse;

	/**
	 * Move a folder in the global file tree.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {string} treeId The id of the source folder.
	 * @param  {number} treeVersion The target version of the folder tree.
	 * @param  {string} newFolderPath The destination folder path.
	 * @param  {string} updatedName The optional new name of the folder.
	 * @param  {boolean} createInterimDirectories Whether to automatically create folders if needed.
	 * @returns ServiceProxyResponse
	 */ 
	sysMoveFolder(groupId: string, treeId: string, treeVersion: number, newFolderPath: string, updatedName: string, createInterimDirectories: boolean): ServiceProxyResponse;

	/**
	 * Update a folder in the group file tree.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {string} treeId The id of the folder to update.
	 * @param  {number} treeVersion The target version of the folder tree.
	 * @param  {string} updatedName The optional new name of the folder.
	 * @param  {string} updatedDesc The optional new description of the folder.
	 * @param  {map} updatedAcl The optional new acl of the folder.
	 * @returns ServiceProxyResponse
	 */ 
	sysUpdateFolder(groupId: string, treeId: string, treeVersion: number, updatedName: string, updatedDesc: string, updatedAcl: map): ServiceProxyResponse;

	/**
	 * Retrieves tree id of specified folder.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {string} fullFolderPath The full folder path.
	 * @returns ServiceProxyResponse
	 */ 
	sysLookupFolder(groupId: string, fullFolderPath: string): ServiceProxyResponse;

	/**
	 * Delete a folder.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {string} treeId The id of the folder to delete.
	 * @param  {string} folderPath The folder path.
	 * @param  {number} treeVersion The target version of the folder tree.
	 * @param  {boolean} force Whether to delete non-empty folders, sub-folders and their files.
	 * @returns ServiceProxyResponse
	 */ 
	sysDeleteFolder(groupId: string, treeId: string, folderPath: string, treeVersion: number, force: boolean): ServiceProxyResponse;
}