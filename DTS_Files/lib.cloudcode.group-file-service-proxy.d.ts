/// <reference no-default-lib="true"/>

interface GroupFileServiceProxy {
	/**
	 * Check if filename exists for provided path and name.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {String} folderPath The folder path.
	 * @param  {String} filename The file name.
	 * @returns ServiceProxyResponse
	 */ 
	checkFilenameExists(groupId: string, folderPath: string, filename: string): {
    data: 
    {
        fileDetails: 
        {
            treeId: string;
            fileName: string;
            fileSize: number;
            dateUploaded: number;
            etag: string;
            acl: 
            {
                member: number;
                other: number;
            };
            version: number;
            url: string;
            fileId: string;
        };
        groupId: string;
        exists: number;
    };
    status: number;
};

	/**
	 * Check if filename exists for provided path and name.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {String} folderPath The folder path.
	 * @param  {String} filename The file name.
	 * @returns ServiceProxyResponse
	 */ 
	sysCheckFilenameExists(groupId: string, folderPath: string, filename: string): {
    data: 
    {
        fileDetails: 
        {
            treeId: string;
            fileName: string;
            fileSize: number;
            dateUploaded: number;
            etag: string;
            acl: 
            {
                member: number;
                other: number;
            };
            version: number;
            url: string;
            fileId: string;
        };
        groupId: string;
        exists: number;
    };
    status: number;
};

	/**
	 * Check if filename exists for provided full path name.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {String} fullPathFilename The full file name with path.
	 * @returns ServiceProxyResponse
	 */ 
	checkFullpathFilenameExists(groupId: string, fullPathFilename: string): {
    data: 
    {
        fileDetails: 
        {
            treeId: string;
            fileName: string;
            fileSize: number;
            dateUploaded: number;
            etag: string;
            acl: 
            {
                member: number;
                other: number;
            };
            version: number;
            url: string;
            fileId: string;
        };
        groupId: string;
        exists: number;
    };
    status: number;
};

	/**
	 * Check if filename exists for provided full path name.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {String} fullPathFilename The full file name with path.
	 * @returns ServiceProxyResponse
	 */ 
	sysCheckFullpathFilenameExists(groupId: string, fullPathFilename: string): {
    data: 
    {
        fileDetails: 
        {
            treeId: string;
            fileName: string;
            fileSize: number;
            dateUploaded: number;
            etag: string;
            acl: 
            {
                member: number;
                other: number;
            };
            version: number;
            url: string;
            fileId: string;
        };
        groupId: string;
        exists: number;
    };
    status: number;
};

	/**
	 * Returns information on a file using fileId.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {String} fileId The id of the file.
	 * @returns ServiceProxyResponse
	 */ 
	getFileInfo(groupId: string, fileId: string): {
    data: 
    {
        fileDetails: 
        {
            treeId: string;
            fileName: string;
            fileSize: number;
            dateUploaded: number;
            etag: string;
            acl: 
            {
                member: number;
                other: number;
            };
            version: number;
            url: string;
            fileId: string;
        };
        groupId: string;
    };
    status: number;
};

	/**
	 * Returns information on a file using fileId.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {String} fileId The id of the file.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetFileInfo(groupId: string, fileId: string): {
    data: 
    {
        fileDetails: 
        {
            treeId: string;
            fileName: string;
            fileSize: number;
            dateUploaded: number;
            etag: string;
            acl: 
            {
                member: number;
                other: number;
            };
            version: number;
            url: string;
            fileId: string;
        };
        groupId: string;
    };
    status: number;
};

	/**
	 * Returns information on a file using path and name.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {String} folderPath The folder path.
	 * @param  {String} filename The file name.
	 * @returns ServiceProxyResponse
	 */ 
	getFileInfoSimple(groupId: string, folderPath: string, filename: string): {
    data: 
    {
        fileDetails: 
        {
            treeId: string;
            fileName: string;
            fileSize: number;
            dateUploaded: number;
            etag: string;
            acl: 
            {
                member: number;
                other: number;
            };
            version: number;
            url: string;
            fileId: string;
        };
        groupId: string;
    };
    status: number;
};

	/**
	 * Returns information on a file using path and name.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {String} folderPath The folder path.
	 * @param  {String} filename The file name.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetFileInfoSimple(groupId: string, folderPath: string, filename: string): {
    data: 
    {
        fileDetails: 
        {
            treeId: string;
            fileName: string;
            fileSize: number;
            dateUploaded: number;
            etag: string;
            acl: 
            {
                member: number;
                other: number;
            };
            version: number;
            url: string;
            fileId: string;
        };
        groupId: string;
    };
    status: number;
};

	/**
	 * Returns a list of files.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {String} folderPath The folder path.
	 * @param  {Boolean} recurse Whether to recurse beyond the starting folder.
	 * @returns ServiceProxyResponse
	 */ 
	getFileList(groupId: string, folderPath: string, recurse: boolean): {
    data: 
    {
        treeVersion: number;
        groupId: string;
        fileList: 
        {
            folderPath: string;
            treeId: string;
            folders: 
            {
                gpathcopy: 
                {
                    folderPath: string;
                    treeId: string;
                    folders: 
                    {
                        gpathcopy: 
                        {
                            folderPath: string;
                            treeId: string;
                            folders: 
                            {
                            };
                            name: string;
                            files: 
                            {
                                glogcopyjson: 
                                {
                                    fileName: string;
                                    fileSize: number;
                                    dateUploaded: number;
                                    acl: 
                                    {
                                        member: number;
                                        other: number;
                                    };
                                    version: number;
                                    url: string;
                                    fileId: string;
                                };
                                glogcopy1json: 
                                {
                                    fileName: string;
                                    fileSize: number;
                                    dateUploaded: number;
                                    acl: 
                                    {
                                        member: number;
                                        other: number;
                                    };
                                    version: number;
                                    url: string;
                                    fileId: string;
                                };
                            };
                            totalFileSize: number;
                            acl: 
                            {
                                member: number;
                                other: number;
                            };
                            totalFileCount: number;
                            desc: string;
                        };
                    };
                    name: string;
                    files: 
                    {
                        glog1newnamejson: 
                        {
                            fileName: string;
                            fileSize: number;
                            dateUploaded: number;
                            acl: 
                            {
                                member: number;
                                other: number;
                            };
                            version: number;
                            url: string;
                            fileId: string;
                        };
                    };
                    totalFileSize: number;
                    acl: 
                    {
                        member: number;
                        other: number;
                    };
                    totalFileCount: number;
                    desc: string;
                };
                gpath: 
                {
                    folderPath: string;
                    treeId: string;
                    folders: 
                    {
                        gpath: 
                        {
                            folderPath: string;
                            treeId: string;
                            folders: 
                            {
                            };
                            name: string;
                            files: 
                            {
                            };
                            totalFileSize: number;
                            acl: 
                            {
                                member: number;
                                other: number;
                            };
                            totalFileCount: number;
                            desc: string;
                        };
                    };
                    name: string;
                    files: 
                    {
                    };
                    totalFileSize: number;
                    acl: 
                    {
                        member: number;
                        other: number;
                    };
                    totalFileCount: number;
                    desc: string;
                };
                foldername: 
                {
                    folderPath: string;
                    treeId: string;
                    folders: 
                    {
                        subfoldername: 
                        {
                            folderPath: string;
                            treeId: string;
                            folders: 
                            {
                            };
                            name: string;
                            files: 
                            {
                                glogcopy1subjson: 
                                {
                                    fileName: string;
                                    fileSize: number;
                                    dateUploaded: number;
                                    acl: 
                                    {
                                        member: number;
                                        other: number;
                                    };
                                    version: number;
                                    url: string;
                                    fileId: string;
                                };
                            };
                            totalFileSize: number;
                            acl: 
                            {
                                member: number;
                                other: number;
                            };
                            totalFileCount: number;
                            desc: string;
                        };
                    };
                    name: string;
                    files: 
                    {
                    };
                    totalFileSize: number;
                    acl: 
                    {
                        member: number;
                        other: number;
                    };
                    totalFileCount: number;
                    desc: string;
                };
            };
            name: string;
            files: 
            {
                glogrootjson: 
                {
                    fileName: string;
                    fileSize: number;
                    dateUploaded: number;
                    acl: 
                    {
                        member: number;
                        other: number;
                    };
                    version: number;
                    url: string;
                    fileId: string;
                };
            };
            totalFileSize: number;
            acl: 
            {
                member: number;
                other: number;
            };
            totalFileCount: number;
            desc: any | null;
        };
    };
    status: number;
};

	/**
	 * Returns a list of files.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {String} folderPath The folder path.
	 * @param  {Boolean} recurse Whether to recurse beyond the starting folder.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetFileList(groupId: string, folderPath: string, recurse: boolean): {
    data: 
    {
        treeVersion: number;
        groupId: string;
        fileList: 
        {
            folderPath: string;
            treeId: string;
            folders: 
            {
                gpathcopy: 
                {
                    folderPath: string;
                    treeId: string;
                    folders: 
                    {
                        gpathcopy: 
                        {
                            folderPath: string;
                            treeId: string;
                            folders: 
                            {
                            };
                            name: string;
                            files: 
                            {
                                glogcopyjson: 
                                {
                                    fileName: string;
                                    fileSize: number;
                                    dateUploaded: number;
                                    acl: 
                                    {
                                        member: number;
                                        other: number;
                                    };
                                    version: number;
                                    url: string;
                                    fileId: string;
                                };
                                glogcopy1json: 
                                {
                                    fileName: string;
                                    fileSize: number;
                                    dateUploaded: number;
                                    acl: 
                                    {
                                        member: number;
                                        other: number;
                                    };
                                    version: number;
                                    url: string;
                                    fileId: string;
                                };
                            };
                            totalFileSize: number;
                            acl: 
                            {
                                member: number;
                                other: number;
                            };
                            totalFileCount: number;
                            desc: string;
                        };
                    };
                    name: string;
                    files: 
                    {
                        glog1newnamejson: 
                        {
                            fileName: string;
                            fileSize: number;
                            dateUploaded: number;
                            acl: 
                            {
                                member: number;
                                other: number;
                            };
                            version: number;
                            url: string;
                            fileId: string;
                        };
                    };
                    totalFileSize: number;
                    acl: 
                    {
                        member: number;
                        other: number;
                    };
                    totalFileCount: number;
                    desc: string;
                };
                gpath: 
                {
                    folderPath: string;
                    treeId: string;
                    folders: 
                    {
                        gpath: 
                        {
                            folderPath: string;
                            treeId: string;
                            folders: 
                            {
                            };
                            name: string;
                            files: 
                            {
                            };
                            totalFileSize: number;
                            acl: 
                            {
                                member: number;
                                other: number;
                            };
                            totalFileCount: number;
                            desc: string;
                        };
                    };
                    name: string;
                    files: 
                    {
                    };
                    totalFileSize: number;
                    acl: 
                    {
                        member: number;
                        other: number;
                    };
                    totalFileCount: number;
                    desc: string;
                };
                foldername: 
                {
                    folderPath: string;
                    treeId: string;
                    folders: 
                    {
                        subfoldername: 
                        {
                            folderPath: string;
                            treeId: string;
                            folders: 
                            {
                            };
                            name: string;
                            files: 
                            {
                                glogcopy1subjson: 
                                {
                                    fileName: string;
                                    fileSize: number;
                                    dateUploaded: number;
                                    acl: 
                                    {
                                        member: number;
                                        other: number;
                                    };
                                    version: number;
                                    url: string;
                                    fileId: string;
                                };
                            };
                            totalFileSize: number;
                            acl: 
                            {
                                member: number;
                                other: number;
                            };
                            totalFileCount: number;
                            desc: string;
                        };
                    };
                    name: string;
                    files: 
                    {
                    };
                    totalFileSize: number;
                    acl: 
                    {
                        member: number;
                        other: number;
                    };
                    totalFileCount: number;
                    desc: string;
                };
            };
            name: string;
            files: 
            {
                glogrootjson: 
                {
                    fileName: string;
                    fileSize: number;
                    dateUploaded: number;
                    acl: 
                    {
                        member: number;
                        other: number;
                    };
                    version: number;
                    url: string;
                    fileId: string;
                };
            };
            totalFileSize: number;
            acl: 
            {
                member: number;
                other: number;
            };
            totalFileCount: number;
            desc: any | null;
        };
    };
    status: number;
};

	/**
	 * Return CDN url for file for clients that cannot handle redirect.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {String} fileId The id of the file.
	 * @returns ServiceProxyResponse
	 */ 
	getCDNUrl(groupId: string, fileId: string): {
    data: 
    {
        cdnUrl: string;
        groupId: string;
        appServerUrl: string;
    };
    status: number;
};

	/**
	 * Return CDN url for file for clients that cannot handle redirect.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {String} fileId The id of the file.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetCDNUrl(groupId: string, fileId: string): {
    data: 
    {
        cdnUrl: string;
        groupId: string;
        appServerUrl: string;
    };
    status: number;
};

	/**
	 * Returns information on a file using fileId.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {String} fileId The id of the file.
	 * @param  {Number} version The target version of the file.
	 * @param  {String} newFilename The optional new file name.
	 * @param  {Map} newAcl The optional new acl.
	 * @returns ServiceProxyResponse
	 */ 
	updateFileInfo(groupId: string, fileId: string, version: number, newFilename: string, newAcl: Map<any, any>): {
    data: 
    {
        fileDetails: 
        {
            treeId: string;
            fileName: string;
            fileSize: number;
            dateUploaded: number;
            etag: string;
            acl: 
            {
                member: number;
                other: number;
            };
            version: number;
            url: string;
            fileId: string;
        };
        groupId: string;
    };
    status: number;
};

	/**
	 * Returns information on a file using fileId.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {String} fileId The id of the file.
	 * @param  {Number} version The target version of the file.
	 * @param  {String} newFilename The optional new file name.
	 * @param  {Map} newAcl The optional new acl.
	 * @returns ServiceProxyResponse
	 */ 
	sysUpdateFileInfo(groupId: string, fileId: string, version: number, newFilename: string, newAcl: Map<any, any>): {
    data: 
    {
        fileDetails: 
        {
            treeId: string;
            fileName: string;
            fileSize: number;
            dateUploaded: number;
            etag: string;
            acl: 
            {
                member: number;
                other: number;
            };
            version: number;
            url: string;
            fileId: string;
        };
        groupId: string;
    };
    status: number;
};

	/**
	 * Copy a file.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {String} fileId The id of the file.
	 * @param  {Number} version The target version of the file.
	 * @param  {String} newTreeId The id of the destination folder.
	 * @param  {Number} treeVersion The target version of the folder tree.
	 * @param  {String} newFilename The optional new file name.
	 * @param  {Boolean} overwriteIfPresent Whether to allow overwrite of an existing file if present.
	 * @returns ServiceProxyResponse
	 */ 
	copyFile(groupId: string, fileId: string, version: number, newTreeId: string, treeVersion: number, newFilename: string, overwriteIfPresent: boolean): {
    data: 
    {
        fileDetails: 
        {
            treeId: string;
            fileName: string;
            fileSize: number;
            dateUploaded: number;
            etag: string;
            acl: 
            {
                member: number;
                other: number;
            };
            version: number;
            url: string;
            fileId: string;
        };
        groupId: string;
    };
    status: number;
};

	/**
	 * Copy a file.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {String} fileId The id of the file.
	 * @param  {Number} version The target version of the file.
	 * @param  {String} newTreeId The id of the destination folder.
	 * @param  {Number} treeVersion The target version of the folder tree.
	 * @param  {String} newFilename The optional new file name.
	 * @param  {Boolean} overwriteIfPresent Whether to allow overwrite of an existing file if present.
	 * @returns ServiceProxyResponse
	 */ 
	sysCopyFile(groupId: string, fileId: string, version: number, newTreeId: string, treeVersion: number, newFilename: string, overwriteIfPresent: boolean): {
    data: 
    {
        fileDetails: 
        {
            treeId: string;
            fileName: string;
            fileSize: number;
            dateUploaded: number;
            etag: string;
            acl: 
            {
                member: number;
                other: number;
            };
            version: number;
            url: string;
            fileId: string;
        };
        groupId: string;
    };
    status: number;
};

	/**
	 * Move a file.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {String} fileId The id of the file.
	 * @param  {Number} version The target version of the file.
	 * @param  {String} newTreeId The id of the destination folder.
	 * @param  {Number} treeVersion The target version of the folder tree.
	 * @param  {String} newFilename The optional new file name.
	 * @param  {Boolean} overwriteIfPresent Whether to allow overwrite of an existing file if present.
	 * @returns ServiceProxyResponse
	 */ 
	moveFile(groupId: string, fileId: string, version: number, newTreeId: string, treeVersion: number, newFilename: string, overwriteIfPresent: boolean): {
    data: 
    {
        fileDetails: 
        {
            treeId: string;
            fileName: string;
            fileSize: number;
            dateUploaded: number;
            etag: string;
            acl: 
            {
                member: number;
                other: number;
            };
            version: number;
            url: string;
            fileId: string;
        };
        groupId: string;
    };
    status: number;
};

	/**
	 * Move a file.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {String} fileId The id of the file.
	 * @param  {Number} version The target version of the file.
	 * @param  {String} newTreeId The id of the destination folder.
	 * @param  {Number} treeVersion The target version of the folder tree.
	 * @param  {String} newFilename The optional new file name.
	 * @param  {Boolean} overwriteIfPresent Whether to allow overwrite of an existing file if present.
	 * @returns ServiceProxyResponse
	 */ 
	sysMoveFile(groupId: string, fileId: string, version: number, newTreeId: string, treeVersion: number, newFilename: string, overwriteIfPresent: boolean): {
    data: 
    {
        fileDetails: 
        {
            treeId: string;
            fileName: string;
            fileSize: number;
            dateUploaded: number;
            etag: string;
            acl: 
            {
                member: number;
                other: number;
            };
            version: number;
            url: string;
            fileId: string;
        };
        groupId: string;
    };
    status: number;
};

	/**
	 * Delete a file.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {String} fileId The id of the file.
	 * @param  {Number} version The target version of the file.
	 * @param  {String} filename The file name for verification purposes.
	 * @returns ServiceProxyResponse
	 */ 
	deleteFile(groupId: string, fileId: string, version: number, filename: string): {
    data: 
    {
        fileDetails: 
        {
            treeId: string;
            fileName: string;
            version: number;
            fileId: string;
        };
        groupId: string;
    };
    status: number;
};

	/**
	 * Delete a file.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {String} fileId The id of the file.
	 * @param  {Number} version The target version of the file.
	 * @param  {String} filename The file name for verification purposes.
	 * @returns ServiceProxyResponse
	 */ 
	sysDeleteFile(groupId: string, fileId: string, version: number, filename: string): {
    data: 
    {
        fileDetails: 
        {
            treeId: string;
            fileName: string;
            version: number;
            fileId: string;
        };
        groupId: string;
    };
    status: number;
};

	/**
	 * Move a file from user space to group space.
	 * 
	 * @param  {String} userCloudPath The user file folder.
	 * @param  {String} userCloudFilename The user file name.
	 * @param  {String} groupId The id of the group.
	 * @param  {String} groupTreeId The id of the destination folder.
	 * @param  {String} groupFilename The group file name.
	 * @param  {Boolean} overwriteIfPresent Whether to allow overwrite of an existing file if present.
	 * @param  {Map} groupFileAcl The acl of the new group file.
	 * @returns ServiceProxyResponse
	 */ 
	moveUserToGroupFile(userCloudPath: string, userCloudFilename: string, groupId: string, groupTreeId: string, groupFilename: string, overwriteIfPresent: boolean, groupFileAcl: Map<any, any>): {
    data: 
    {
        fileDetails: 
        {
            treeId: string;
            fileName: string;
            fileSize: number;
            dateUploaded: number;
            etag: string;
            acl: 
            {
                member: number;
                other: number;
            };
            version: number;
            url: string;
            fileId: string;
        };
        groupId: string;
    };
    status: number;
};

	/**
	 * Move a file from user space to group space.
	 * 
	 * @param  {String} userProfileId The user file owner.
	 * @param  {String} userCloudPath The user file folder.
	 * @param  {String} userCloudFilename The user file name.
	 * @param  {String} groupId The id of the group.
	 * @param  {String} groupTreeId The id of the destination folder.
	 * @param  {String} groupFilename The group file name.
	 * @param  {String} groupFileOwnerId The optional owner id of of the new group file.
	 * @param  {Boolean} overwriteIfPresent Whether to allow overwrite of an existing file if present.
	 * @param  {Map} groupFileAcl The acl of the new group file.
	 * @returns ServiceProxyResponse
	 */ 
	sysMoveUserToGroupFile(userProfileId: string, userCloudPath: string, userCloudFilename: string, groupId: string, groupTreeId: string, groupFilename: string, groupFileOwnerId: string, overwriteIfPresent: boolean, groupFileAcl: Map<any, any>): {
    data: 
    {
        fileDetails: 
        {
            treeId: string;
            fileName: string;
            fileSize: number;
            dateUploaded: number;
            etag: string;
            acl: 
            {
                member: number;
                other: number;
            };
            version: number;
            url: string;
            fileId: string;
        };
        groupId: string;
    };
    status: number;
};

	/**
	 * Create a folder in the global file tree.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {String} folderPath The folder path.
	 * @param  {Number} treeVersion The target version of the folder tree.
	 * @param  {String} name The new folder name.
	 * @param  {String} ownerId The new folder owner id.
	 * @param  {String} desc The new folder description.
	 * @param  {Boolean} createInterimDirectories Whether to automatically create folders if needed.
	 * @param  {Map} groupFolderAcl The acl of the new group folder.
	 * @returns ServiceProxyResponse
	 */ 
	sysCreateFolder(groupId: string, folderPath: string, treeVersion: number, name: string, ownerId: string, desc: string, createInterimDirectories: boolean, groupFolderAcl: Map<any, any>): {
    data: 
    {
        groupId: string;
        groupFileTree: 
        {
            treeVersion: number;
            tree: Array<
            {
                treeId: string;
                children: Array<
                {
                    treeId: string;
                    children: any | null;
                    name: string;
                    acl: 
                    {
                        member: number;
                        other: number;
                    };
                    type: string;
                    ownerId: any | null;
                    desc: string;
                }>;
                name: string;
                acl: 
                {
                    member: number;
                    other: number;
                };
                type: string;
                ownerId: any | null;
                desc: string;
            }>;
            acl: 
            {
                member: number;
                other: number;
            };
        };
        createdTreeId: string;
    };
    status: number;
};

	/**
	 * Move a folder in the global file tree.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {String} treeId The id of the source folder.
	 * @param  {Number} treeVersion The target version of the folder tree.
	 * @param  {String} newFolderPath The destination folder path.
	 * @param  {String} updatedName The optional new name of the folder.
	 * @param  {Boolean} createInterimDirectories Whether to automatically create folders if needed.
	 * @returns ServiceProxyResponse
	 */ 
	sysMoveFolder(groupId: string, treeId: string, treeVersion: number, newFolderPath: string, updatedName: string, createInterimDirectories: boolean): {
    data: 
    {
        groupId: string;
        groupFileTree: 
        {
            treeVersion: number;
            tree: Array<
            {
                treeId: string;
                children: Array<
                {
                    treeId: string;
                    children: any | null;
                    name: string;
                    acl: 
                    {
                        member: number;
                        other: number;
                    };
                    type: string;
                    ownerId: any | null;
                    desc: string;
                }>;
                name: string;
                acl: 
                {
                    member: number;
                    other: number;
                };
                type: string;
                ownerId: any | null;
                desc: string;
            }>;
            acl: 
            {
                member: number;
                other: number;
            };
        };
    };
    status: number;
};

	/**
	 * Update a folder in the group file tree.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {String} treeId The id of the folder to update.
	 * @param  {Number} treeVersion The target version of the folder tree.
	 * @param  {String} updatedOwnerId The optional new folder owner id.
	 * @param  {String} updatedName The optional new name of the folder.
	 * @param  {String} updatedDesc The optional new description of the folder.
	 * @param  {Map} updatedAcl The optional new acl of the folder.
	 * @returns ServiceProxyResponse
	 */ 
	sysUpdateFolder(groupId: string, treeId: string, treeVersion: number, updatedOwnerId: string, updatedName: string, updatedDesc: string, updatedAcl: Map<any, any>): {
    data: 
    {
        groupId: string;
        groupFileTree: 
        {
            treeVersion: number;
            tree: Array<
            {
                treeId: string;
                children: Array<
                {
                    treeId: string;
                    children: any | null;
                    name: string;
                    acl: 
                    {
                        member: number;
                        other: number;
                    };
                    type: string;
                    ownerId: any | null;
                    desc: string;
                }>;
                name: string;
                acl: 
                {
                    member: number;
                    other: number;
                };
                type: string;
                ownerId: any | null;
                desc: string;
            }>;
            acl: 
            {
                member: number;
                other: number;
            };
        };
    };
    status: number;
};

	/**
	 * Retrieves tree id of specified folder.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {String} fullFolderPath The full folder path.
	 * @returns ServiceProxyResponse
	 */ 
	sysLookupFolder(groupId: string, fullFolderPath: string): {
    data: 
    {
        folderPath: string;
        treeId: string;
        treeVersion: number;
        groupId: string;
    };
    status: number;
};

	/**
	 * Delete a folder.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {String} treeId The id of the folder to delete.
	 * @param  {String} folderPath The folder path.
	 * @param  {Number} treeVersion The target version of the folder tree.
	 * @param  {Boolean} force Whether to delete non-empty folders, sub-folders and their files.
	 * @returns ServiceProxyResponse
	 */ 
	sysDeleteFolder(groupId: string, treeId: string, folderPath: string, treeVersion: number, force: boolean): {
    data: 
    {
        deletedFiles: Array<
        {
            treeId: string;
            fileName: string;
            version: number;
            fileId: string;
        }>;
        groupId: string;
        groupFileTree: 
        {
            treeVersion: number;
            tree: Array<
            {
                treeId: string;
                children: Array<
                {
                    treeId: string;
                    children: any | null;
                    name: string;
                    acl: 
                    {
                        member: number;
                        other: number;
                    };
                    type: string;
                    ownerId: any | null;
                    desc: string;
                }>;
                name: string;
                acl: 
                {
                    member: number;
                    other: number;
                };
                type: string;
                ownerId: any | null;
                desc: string;
            }>;
            acl: 
            {
                member: number;
                other: number;
            };
        };
    };
    status: number;
};
}