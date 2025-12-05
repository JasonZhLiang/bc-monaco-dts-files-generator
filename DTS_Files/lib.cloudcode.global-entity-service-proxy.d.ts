/// <reference no-default-lib="true"/>

interface GlobalEntityServiceProxy {
	/**
	 * Create a new entity on the server.
	 * 
	 * @param  {string} entityType The entity type as defined by the user.
	 * @param  {number} timeToLive Sets expiry time for entity in milliseconds if > 0.
	 * @param  {Object} acl The entity's Access Control List as an object. A null ACL implies default permissions which make the entity readable/writeable by only the owner.
	 * @param  {Object} data The entity's data object.
	 * @returns ServiceProxyResponse
	 */ 
	createEntity(entityType: string, timeToLive: number, acl: Object, data: Object): {
		data: {
		    gameId: string;
		    entityId: string;
		    ownerId: string;
		    entityType: string;
		    entityIndexedId: any | null;
		    version: number;
		    acl: {
		        other: number;
		    };
		    expiresAt: number;
		    timeToLive: number;
		    createdAt: number;
		    updatedAt: number;
		};
		status: number;
	};


	/**
	 * Creates a new entity on the server with an indexed id.
	 * 
	 * @param  {string} entityType The entity type as defined by the user.
	 * @param  {string} entityIndexedId A secondary id that will be indexed.
	 * @param  {number} timeToLive Sets expiry time for entity in milliseconds if > 0.
	 * @param  {Object} acl The entity's Access Control List as an object. A null ACL implies default permissions which make the entity readable/writeable by only the owner.
	 * @param  {Object} data The entity's data object.
	 * @returns ServiceProxyResponse
	 */ 
	createEntityWithIndexedId(entityType: string, entityIndexedId: string, timeToLive: number, acl: Object, data: Object): {
		data: {
		    gameId: string;
		    entityId: string;
		    ownerId: string;
		    entityType: string;
		    entityIndexedId: string;
		    version: number;
		    acl: {
		        other: number;
		    };
		    expiresAt: number;
		    timeToLive: number;
		    createdAt: number;
		    updatedAt: number;
		};
		status: number;
	};


	/**
	 * Updates an existing entity on the server.
	 * 
	 * @param  {string} entityId The id of the entity to update.
	 * @param  {number} version The version of the entity to update. Use -1 to indicate the newest version.
	 * @param  {Object} data The entity's data object.
	 * @returns ServiceProxyResponse
	 */ 
	updateEntity(entityId: string, version: number, data: Object): {
		status: number;
		data: {
		    gameId: string;
		    entityId: string;
		    ownerId: string;
		    entityType: string;
		    entityIndexedId: string;
		    version: number;
		    acl: {
		        other: number;
		    };
		    expiresAt: number;
		    timeToLive: number;
		    createdAt: number;
		    updatedAt: number;
		};
	};


	/**
	 * Updates an existing system entity on the server.
	 * 
	 * @param  {string} entityId The id of the entity to update.
	 * @param  {number} version The version of the entity to update. Use -1 to indicate the newest version.
	 * @param  {Object} data The entity's data object.
	 * @returns ServiceProxyResponse
	 */ 
	updateSystemEntity(entityId: string, version: number, data: Object): {
		status: number;
		data: {
		    gameId: string;
		    entityId: string;
		    ownerId: string;
		    entityType: string;
		    entityIndexedId: string;
		    version: number;
		    acl: {
		        other: number;
		    };
		    expiresAt: number;
		    timeToLive: number;
		    createdAt: number;
		    updatedAt: number;
		};
	};


	/**
	 * Updates an existing entity's Acl on the server.
	 * 
	 * @param  {string} entityId The id of the entity to update.
	 * @param  {number} version The version of the entity to update. Use -1 to indicate the newest version.
	 * @param  {Object} acl The entity's Access Control List as json.
	 * @returns ServiceProxyResponse
	 */ 
	updateEntityAcl(entityId: string, version: number, acl: Object): {
		status: number;
		data: {
		    gameId: string;
		    entityId: string;
		    ownerId: string;
		    entityType: string;
		    entityIndexedId: string;
		    version: number;
		    acl: {
		        other: number;
		    };
		    expiresAt: number;
		    timeToLive: number;
		    createdAt: number;
		    updatedAt: number;
		};
	};


	/**
	 * Updates an existing entity's IndexedId on the server.
	 * 
	 * @param  {string} entityId The id of the entity to update.
	 * @param  {number} version The version of the entity to update. Use -1 to indicate the newest version.
	 * @param  {string} entityIndexedId InxdexedId of the entity to update.
	 * @returns ServiceProxyResponse
	 */ 
	updateEntityIndexedId(entityId: string, version: number, entityIndexedId: string): {
		data: {
		    gameId: string;
		    entityId: string;
		    ownerId: string;
		    entityType: string;
		    entityIndexedId: string;
		    version: number;
		    acl: {
		        other: number;
		    };
		    expiresAt: number;
		    timeToLive: number;
		    createdAt: number;
		    updatedAt: number;
		};
		status: number;
	};


	/**
	 * Updates an existing system entity's Acl on the server.
	 * 
	 * @param  {string} entityId The id of the entity to update.
	 * @param  {number} version The version of the entity to update. Use -1 to indicate the newest version.
	 * @param  {Object} acl The entity's Access Control List as json.
	 * @returns ServiceProxyResponse
	 */ 
	updateSystemEntityAcl(entityId: string, version: number, acl: Object): {
		status: number;
		data: {
		    gameId: string;
		    entityId: string;
		    ownerId: string;
		    entityType: string;
		    entityIndexedId: string;
		    version: number;
		    acl: {
		        other: number;
		    };
		    expiresAt: number;
		    timeToLive: number;
		    createdAt: number;
		    updatedAt: number;
		};
	};


	/**
	 * Updates an existing entity's TTL on the server.
	 * 
	 * @param  {string} entityId The id of the entity to update.
	 * @param  {number} version The version of the entity to update. Use -1 to indicate the newest version.
	 * @param  {number} timeToLive Sets expiry time for entity in milliseconds if > 0.
	 * @returns ServiceProxyResponse
	 */ 
	updateEntityTimeToLive(entityId: string, version: number, timeToLive: number): {
		status: number;
		data: {
		    gameId: string;
		    entityId: string;
		    ownerId: string;
		    entityType: string;
		    entityIndexedId: string;
		    version: number;
		    data: {
		        testData: number;
		    };
		    acl: {
		        other: number;
		    };
		    expiresAt: number;
		    timeToLive: number;
		    createdAt: number;
		    updatedAt: number;
		};
	};


	/**
	 * Updates an existing entity's Owner and Acl on the server.
	 * 
	 * @param  {string} entityId The id of the entity to update.
	 * @param  {number} version The version of the entity to update. Use -1 to indicate the newest version.
	 * @param  {string} ownerId The id of the new owner.
	 * @param  {Object} acl The entity's Access Control List as json.
	 * @returns ServiceProxyResponse
	 */ 
	updateEntityOwnerAndAcl(entityId: string, version: number, ownerId: string, acl: Object): {
		status: number;
		data: {
		    gameId: string;
		    entityId: string;
		    ownerId: string;
		    entityType: string;
		    entityIndexedId: string;
		    version: number;
		    data: {
		        testData: number;
		    };
		    acl: {
		        other: number;
		    };
		    expiresAt: number;
		    timeToLive: number;
		    createdAt: number;
		    updatedAt: number;
		};
	};


	/**
	 * Sets an existing entity's Owner to null.
	 * 
	 * @param  {string} entityId The id of the entity to update.
	 * @param  {number} version The version of the entity to update. Use -1 to indicate the newest version.
	 * @param  {Object} acl The entity's Access Control List as json.
	 * @returns ServiceProxyResponse
	 */ 
	makeSystemEntity(entityId: string, version: number, acl: Object): {
		status: number;
		data: {
		    gameId: string;
		    entityId: string;
		    ownerId: any | null;
		    entityType: string;
		    entityIndexedId: string;
		    version: number;
		    data: {
		        testData: number;
		    };
		    acl: {
		        other: number;
		    };
		    expiresAt: number;
		    timeToLive: number;
		    createdAt: number;
		    updatedAt: number;
		};
	};


	/**
	 * Deletes an existing entity on the server.
	 * 
	 * @param  {string} entityId The id of the entity to update.
	 * @param  {number} version The version of the entity to update. Use -1 to indicate the newest version.
	 * @returns ServiceProxyResponse
	 */ 
	deleteEntity(entityId: string, version: number): {
		status: number;
		data: any | null;
	};


	/**
	 * Deletes an existing system entity on the server.
	 * 
	 * @param  {string} entityId The id of the entity to update.
	 * @param  {number} version The entity's data object. -1 indicates the current entity version.
	 * @returns ServiceProxyResponse
	 */ 
	deleteSystemEntity(entityId: string, version: number): {
		status: number;
		data: any | null;
	};


	/**
	 * Reads an existing entity from the server.
	 * 
	 * @param  {string} entityId The id of the entity.
	 * @returns ServiceProxyResponse
	 */ 
	readEntity(entityId: string): {
		status: number;
		data: {
		    entityId: string;
		    ownerId: string;
		    entityType: string;
		    entityIndexedId: string;
		    version: number;
		    data: {
		        testData: number;
		    };
		    acl: {
		        other: number;
		    };
		    expiresAt: number;
		    timeToLive: number;
		    createdAt: number;
		    updatedAt: number;
		    _serverTime: number;
		};
	};


	/**
	 * Reads an existing system entity from the server.
	 * 
	 * @param  {string} entityId The id of the entity to read.
	 * @returns ServiceProxyResponse
	 */ 
	readSystemEntity(entityId: string): {
		data: {
		    entityIndexedId: any | null;
		    timeToLive: number;
		    createdAt: number;
		    entityType: string;
		    entityId: string;
		    acl: {
		        other: number;
		    };
		    ownerId: any | null;
		    version: number;
		    expiresAt: number;
		    updatedAt: number;
		    _serverTime: number;
		};
		status: number;
	};


	/**
	 * Create a new system entity on the server.
	 * 
	 * @param  {string} entityType The entity type as defined by the user.
	 * @param  {number} timeToLive Sets expiry time for entity in milliseconds if > 0.
	 * @param  {Object} acl The entity's Access Control List as an object. A null ACL implies default permissions which make the entity readable/writeable by only the owner.
	 * @param  {Object} data The entity's data object.
	 * @returns ServiceProxyResponse
	 */ 
	createSystemEntity(entityType: string, timeToLive: number, acl: Object, data: Object): {
		data: {
		    response: {
		        data: Record<string, any>;
		        status: number;
		    };
		    success: number;
		};
		status: number;
	};


	/**
	 * Create a new system entity on the server with an indexed id.
	 * 
	 * @param  {string} entityType The entity type as defined by the user.
	 * @param  {string} entityIndexedId Id used to index the entity.
	 * @param  {number} timeToLive Sets expiry time for entity in milliseconds if > 0.
	 * @param  {Object} acl The entity's Access Control List as an object. A null ACL implies default permissions which make the entity readable/writeable by only the owner.
	 * @param  {Object} data The entity's data object.
	 * @returns ServiceProxyResponse
	 */ 
	createSystemEntityWithIndexedId(entityType: string, entityIndexedId: string, timeToLive: number, acl: Object, data: Object): {
		data: {
		    gameId: string;
		    entityId: string;
		    ownerId: any | null;
		    entityType: string;
		    entityIndexedId: string;
		    version: number;
		    acl: {
		        other: number;
		    };
		    expiresAt: number;
		    timeToLive: number;
		    createdAt: number;
		    updatedAt: number;
		};
		status: number;
	};


	/**
	 * Get a list of entities from the server base on where. Where clause allows entityType, createdAt, updatedAt, data items.
	 * 
	 * @param  {Object} where A mongo style query string.
	 * @param  {Object} orderBy Specifies the order in which the query returns matching documents. The sort parameter consists of a field followed by an ascending(1)/descending flag(-1). eg. `{ "name" : 1}` sorts by name in ascending order.
	 * @param  {number} maxReturn The maximum number of entities to return.
	 * @returns ServiceProxyResponse
	 */ 
	getList(where: Object, orderBy: Object, maxReturn: number): {
		status: number;
		data: {
		    entityList: Array<{
		        gameId: string;
		        entityId: string;
		        ownerId: string;
		        entityType: string;
		        entityIndexedId: any | null;
		        version: number;
		        data: Record<string, any>;
		        acl: Record<string, any>;
		        expiresAt: number;
		        timeToLive: number;
		        createdAt: number;
		        updatedAt: number;
		    }>;
		    _serverTime: number;
		    entityListCount: number;
		};
	};


	/**
	 * Get a list of entities from the server base on where clause and hinting on indicated index hint. Where clause allows entityType, createdAt, updatedAt, data items.
	 * 
	 * @param  {Object} where A mongo style query string.
	 * @param  {Object} orderBy Specifies the order in which the query returns matching documents. The sort parameter consists of a field followed by an ascending(1)/descending flag(-1). eg. `{ "name" : 1}` sorts by name in ascending order.
	 * @param  {number} maxReturn The maximum number of entities to return.
	 * @param  {Object} hintJson The field index keys to be hinted, as JSON object.
	 * @returns ServiceProxyResponse
	 */ 
	getListWithHint(where: Object, orderBy: Object, maxReturn: number, hintJson: Object): {
		status: number;
		data: {
		    entityList: Array<{
		        gameId: string;
		        entityId: string;
		        ownerId: string;
		        entityType: string;
		        entityIndexedId: any | null;
		        version: number;
		        data: Record<string, any>;
		        acl: Record<string, any>;
		        expiresAt: number;
		        timeToLive: number;
		        createdAt: number;
		        updatedAt: number;
		    }>;
		    _serverTime: number;
		    entityListCount: number;
		};
	};


	/**
	 * Get a list of system entities from the server base on where. Where clause allows entityType, createdAt, updatedAt, data items.
	 * 
	 * @param  {Object} where A mongo style query string.
	 * @param  {Object} orderBy Specifies the order in which the query returns matching documents. The sort parameter consists of a field followed by an ascending(1)/descending flag(-1). eg. `{ "name" : 1}` sorts by name in ascending order.
	 * @param  {number} maxReturn The maximum number of entities to return.
	 * @returns ServiceProxyResponse
	 */ 
	getSystemEntityList(where: Object, orderBy: Object, maxReturn: number): {
		status: number;
		data: {
		    entityList: Array<{
		        gameId: string;
		        entityId: string;
		        ownerId: string;
		        entityType: string;
		        entityIndexedId: any | null;
		        version: number;
		        data: Record<string, any>;
		        acl: Record<string, any>;
		        expiresAt: number;
		        timeToLive: number;
		        createdAt: number;
		        updatedAt: number;
		    }>;
		    _serverTime: number;
		    entityListCount: number;
		};
	};


	/**
	 * Get a list of system entities from the server base on where clause and hinting on indicated index hint. Where clause allows entityType, createdAt, updatedAt, data items.
	 * 
	 * @param  {Object} where A mongo style query string.
	 * @param  {Object} orderBy Specifies the order in which the query returns matching documents. The sort parameter consists of a field followed by an ascending(1)/descending flag(-1). eg. `{ "name" : 1}` sorts by name in ascending order.
	 * @param  {number} maxReturn The maximum number of entities to return.
	 * @param  {Object} hintJson The field index keys to be hinted, as JSON object.
	 * @returns ServiceProxyResponse
	 */ 
	getSystemEntityListWithHint(where: Object, orderBy: Object, maxReturn: number, hintJson: Object): {
		status: number;
		data: {
		    entityList: Array<{
		        gameId: string;
		        entityId: string;
		        ownerId: string;
		        entityType: string;
		        entityIndexedId: any | null;
		        version: number;
		        data: Record<string, any>;
		        acl: Record<string, any>;
		        expiresAt: number;
		        timeToLive: number;
		        createdAt: number;
		        updatedAt: number;
		    }>;
		    _serverTime: number;
		    entityListCount: number;
		};
	};


	/**
	 * Get a list of entities from the server base on indexed id.
	 * 
	 * @param  {string} entityIndexedId The entity indexed id.
	 * @param  {number} maxReturn The maximum number of entities to return.
	 * @returns ServiceProxyResponse
	 */ 
	getListByIndexedId(entityIndexedId: string, maxReturn: number): {
		status: number;
		data: {
		    entityList: Array<{
		        gameId: string;
		        entityId: string;
		        ownerId: string;
		        entityType: string;
		        entityIndexedId: string;
		        version: number;
		        data: Record<string, any>;
		        acl: Record<string, any>;
		        expiresAt: number;
		        timeToLive: number;
		        createdAt: number;
		        updatedAt: number;
		    }>;
		    _serverTime: number;
		    entityListCount: number;
		};
	};


	/**
	 * Get a count of entities from the server base on where. Where clause allows entityType, createdAt, updatedAt, data items.
	 * 
	 * @param  {Object} where A mongo style query string.
	 * @returns ServiceProxyResponse
	 */ 
	getListCount(where: Object): {
		status: number;
		data: {
		    entityListCount: number;
		};
	};


	/**
	 * Get a count of entities from the server base on where clause and hinting on index hint. Where clause allows entityType, createdAt, updatedAt, data items.
	 * 
	 * @param  {Object} where A mongo style query string.
	 * @param  {Object} hintJson The field index keys to be hinted, as JSON object.
	 * @returns ServiceProxyResponse
	 */ 
	getListCountWithHint(where: Object, hintJson: Object): {
		status: number;
		data: {
		    entityListCount: number;
		};
	};


	/**
	 * Get a count of system entities from the server base on where. Where clause allows entityType, createdAt, updatedAt, data items.
	 * 
	 * @param  {Object} where A mongo style query string.
	 * @returns ServiceProxyResponse
	 */ 
	getSystemEntityListCount(where: Object): {
		status: number;
		data: {
		    entityListCount: number;
		};
	};


	/**
	 * Get a count of system entities from the server base on where clause and hinting on index hint. Where clause allows entityType, createdAt, updatedAt, data items.
	 * 
	 * @param  {Object} where A mongo style query string.
	 * @param  {Object} hintJson The field index keys to be hinted, as JSON object.
	 * @returns ServiceProxyResponse
	 */ 
	getSystemEntityListCountWithHint(where: Object, hintJson: Object): {
		status: number;
		data: {
		    entityListCount: number;
		};
	};


	/**
	 * Gets the page of entities from the server based on the specified context.
	 * 
	 * @param  {Object} context The json context for the page request.
	 * @returns ServiceProxyResponse
	 */ 
	getPage(context: Object): {
		status: number;
		data: {
		    _serverTime: number;
		    results: {
		        moreBefore: number;
		        count: number;
		        items: Array<Record<string, any>>;
		        page: number;
		        moreAfter: number;
		    };
		    context: string;
		};
	};


	/**
	 * Gets the page of system entities from the server based on the specified context.
	 * 
	 * @param  {Object} context The json context for the page request.
	 * @returns ServiceProxyResponse
	 */ 
	getSystemEntityPage(context: Object): {
		data: {
		    _serverTime: number;
		    context: string;
		    results: {
		        count: number;
		        page: number;
		        items: Array<Record<string, any>>;
		        moreAfter: number;
		        moreBefore: number;
		    };
		};
		status: number;
	};


	/**
	 * Gets the page of entities from the server based on the encoded context and specified page offset.
	 * 
	 * @param  {Object} context The context string returned from the server from a previous call to GetPage or GetPageOffset.
	 * @param  {number} pageOffset The positive or negative page offset to fetch. Uses the last page retrieved using the context string to determine a starting point.
	 * @returns ServiceProxyResponse
	 */ 
	getPageOffset(context: Object, pageOffset: number): {
		status: number;
		data: {
		    _serverTime: number;
		    results: {
		        moreBefore: number;
		        count: number;
		        items: Array<Record<string, any>>;
		        page: number;
		        moreAfter: number;
		    };
		    context: string;
		};
	};


	/**
	 * Gets the page of entities from the server based on the encoded context and specified page offset.
	 * 
	 * @param  {string} context The context string returned from the server from a previous call to GetPage or GetPageOffset.
	 * @param  {number} pageOffset The positive or negative page offset to fetch. Uses the last page retrieved using the context string to determine a starting point.
	 * @returns ServiceProxyResponse
	 */ 
	getSystemEntityPageOffset(context: string, pageOffset: number): {
		status: number;
		data: {
		    _serverTime: number;
		    results: {
		        moreBefore: number;
		        count: number;
		        items: Array<Record<string, any>>;
		        page: number;
		        moreAfter: number;
		    };
		    context: string;
		};
	};


	/**
	 * Partial increment of global entity data field items.  Partial set of items incremented as specified.
	 * 
	 * @param  {string} entityId The id of the entity to update.
	 * @param  {Object} data The entity's data object.
	 * @returns ServiceProxyResponse
	 */ 
	incrementGlobalEntityData(entityId: string, data: Object): {
		status: number;
		data: {
		    gameId: string;
		    entityId: string;
		    ownerId: string;
		    entityType: string;
		    entityIndexedId: string;
		    version: number;
		    data: {
		        test: number;
		    };
		    acl: {
		        other: number;
		    };
		    expiresAt: number;
		    timeToLive: number;
		    createdAt: number;
		    updatedAt: number;
		};
	};


	/**
	 * Gets a list of up to randomCount randomly selected entities from the server based on the where condition and specified maximum return count.
	 * 
	 * @param  {Object} where A mongo style query string.
	 * @param  {number} maxReturn The maximum number of entities to return.
	 * @returns ServiceProxyResponse
	 */ 
	getRandomEntitiesMatching(where: Object, maxReturn: number): {
		data: {
		    entityList: Array<{
		        gameId: string;
		        entityId: string;
		        ownerId: string;
		        entityType: string;
		        entityIndexedId: any | null;
		        version: number;
		        data: Record<string, any>;
		        acl: Record<string, any>;
		        expiresAt: number;
		        timeToLive: any | null;
		        createdAt: number;
		        updatedAt: number;
		    }>;
		    _serverTime: number;
		    entityListCount: number;
		};
		status: number;
	};


	/**
	 * Gets a list of up to randomCount randomly selected entities from the server based on the where condition and specified maximum return count, using index hint provided.
	 * 
	 * @param  {Object} where A mongo style query string.
	 * @param  {number} maxReturn The maximum number of entities to return.
	 * @param  {Object} hintJson The field index keys to be hinted, as JSON object.
	 * @returns ServiceProxyResponse
	 */ 
	getRandomEntitiesMatchingWithHint(where: Object, maxReturn: number, hintJson: Object): {
		status: number;
		data: {
		    entityList: Array<{
		        gameId: string;
		        entityId: string;
		        ownerId: string;
		        entityType: string;
		        entityIndexedId: any | null;
		        version: number;
		        data: Record<string, any>;
		        acl: Record<string, any>;
		        expiresAt: number;
		        timeToLive: number;
		        createdAt: number;
		        updatedAt: number;
		    }>;
		    _serverTime: number;
		    entityListCount: number;
		};
	};


	/**
	 * Gets the page of entities from the server based on the specified context, bypassing ownership/ACL permissions checking.
	 * 
	 * @param  {Object} context The json context for the page request.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetPage(context: Object): ServiceProxyResponse;


	/**
	 * Gets the page of entities from the server based on the encoded context, bypassing ownership/ACL permissions checking.
	 * 
	 * @param  {Object} context The encoded context string returned from the server from a previous call to SysGetPage or SysGetPageOffset
	 * @param  {number} pageOffset The positive or negative page offset to fetch. Uses the last page retrieved using the context string to determine a starting point.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetPageOffset(context: Object, pageOffset: number): ServiceProxyResponse;

}