/// <reference no-default-lib="true"/>

interface EntityServiceProxy {
	/**
	 * Create a new entity on the server.
	 * 
	 * @param  {string} entityType The entity type as defined by the user.
	 * @param  {Object} data The entity's data object.
	 * @param  {Object} acl The entity's Access Control List as an object. A null ACL implies default permissions which make the entity readable/writeable by only the owner.
	 * @returns ServiceProxyResponse
	 */ 
	createEntity(entityType: string, data: Object, acl: Object): {
		data: {
		    createdAt: number;
		    entityType: string;
		    entityId: string;
		    acl: {
		        other: number;
		    };
		    version: number;
		    updatedAt: number;
		};
		status: number;
	};


	/**
	 * Read an existing entity on the server.
	 * 
	 * @param  {string} entityId The id of the entity.
	 * @returns ServiceProxyResponse
	 */ 
	getEntity(entityId: string): {
		status: number;
		data: {
		    entityId: string;
		    entityType: string;
		    version: number;
		    data: {
		        name: string;
		        age: number;
		    };
		    acl: {
		        other: number;
		    };
		    createdAt: number;
		    updatedAt: number;
		    _serverTime: number;
		};
	};


	/**
	 * Returns all shared entities for the given profile ID.
	 * 
	 * @param  {string} targetProfileId The profile id to retrieve shared entities for.
	 * @returns ServiceProxyResponse
	 */ 
	getSharedEntitiesForProfileId(targetProfileId: string): {
		status: number;
		data: {
		    entities: Array<{
		        entityId: string;
		        entityType: string;
		        version: number;
		        data: {
		            name: string;
		            age: number;
		        };
		        acl: {
		            other: number;
		        };
		        createdAt: number;
		        updatedAt: number;
		    }>;
		    _serverTime: number;
		    entityListCount: number;
		};
	};


	/**
	 * Returns all shared entities for the given profile ID subject to the 'where' query.
	 * 
	 * @param  {string} targetProfileId The profile id to retrieve shared entities for.
	 * @param  {Object} where A mongo style query string.
	 * @param  {Object} orderBy Specifies the order in which the query returns matching documents. The sort parameter consists of a field followed by an ascending(1)/descending flag(-1). eg. `{ "name" : 1}` sorts by name in ascending order.
	 * @param  {number} maxReturn The maximum number of entities to return.
	 * @returns ServiceProxyResponse
	 */ 
	getSharedEntitiesListForProfileId(targetProfileId: string, where: Object, orderBy: Object, maxReturn: number): {
		status: number;
		data: {
		    entities: Array<{
		        entityId: string;
		        entityType: string;
		        version: number;
		        data: {
		            name: string;
		            age: number;
		        };
		        acl: {
		            other: number;
		        };
		        createdAt: number;
		        updatedAt: number;
		    }>;
		    _serverTime: number;
		    entityListCount: number;
		};
	};


	/**
	 * Returns a single shared entity for the given profile ID.
	 * 
	 * @param  {string} targetProfileId The profile id to retrieve shared entities for.
	 * @param  {string} entityId The id of the entity that will be retrieved.
	 * @returns ServiceProxyResponse
	 */ 
	getSharedEntityForProfileId(targetProfileId: string, entityId: string): {
		status: number;
		data: {
		    entityId: string;
		    entityType: string;
		    _serverTime: number;
		    version: number;
		    data: {
		        name: string;
		        age: number;
		    };
		    acl: {
		        other: number;
		    };
		    createdAt: number;
		    updatedAt: number;
		};
	};


	/**
	 * Read a singleton entity.
	 * 
	 * @param  {string} entityType The entity type as defined by the user.
	 * @returns ServiceProxyResponse
	 */ 
	getSingleton(entityType: string): {
		data: {
		    entityId: string;
		    entityType: string;
		    version: number;
		    data: {
		        name: string;
		        age: number;
		    };
		    acl: {
		        other: number;
		    };
		    createdAt: number;
		    updatedAt: number;
		    _serverTime: number;
		};
		status: number;
	};


	/**
	 * Read entities for a specific type
	 * 
	 * @param  {string} entityType The entity type to search for.
	 * @returns ServiceProxyResponse
	 */ 
	getEntitiesByType(entityType: string): {
		status: number;
		data: {
		    entities: Array<{
		        entityId: string;
		        entityType: string;
		        version: number;
		        data: {
		            street: string;
		        };
		        acl: {
		            other: number;
		        };
		        createdAt: number;
		        updatedAt: number;
		    }>;
		    _serverTime: number;
		};
	};


	/**
	 * Updates an entity on the server. This operation results in the entity data being completely replaced by the passed in JSON string.
	 * 
	 * @param  {string} entityId The id of the entity to update.
	 * @param  {string} entityType The entity type as defined by the user.
	 * @param  {Object} data The entity's data object.
	 * @param  {Object} acl The entity's Access Control List as an object. A null ACL implies default permissions which make the entity readable/writeable by only the owner.
	 * @param  {number} version The version of the entity to update. Use -1 to indicate the newest version.
	 * @returns ServiceProxyResponse
	 */ 
	updateEntity(entityId: string, entityType: string, data: Object, acl: Object, version: number): {
		status: number;
		data: {
		    entityId: string;
		    entityType: string;
		    version: number;
		    data: {
		        name: string;
		        age: number;
		    };
		    acl: {
		        other: number;
		    };
		    createdAt: number;
		    updatedAt: number;
		};
	};


	/**
	 * Partial increment of user entity data field items.  Partial set of items incremented as specified.
	 * 
	 * @param  {string} entityId The id of the entity to update.
	 * @param  {Object} data The entity's data object.
	 * @returns ServiceProxyResponse
	 */ 
	incrementUserEntityData(entityId: string, data: Object): {
		status: number;
		data: {
		    acl: {
		        other: number;
		    };
		    createdAt: number;
		    data: {
		        test: number;
		    };
		    entityId: string;
		    entityType: string;
		    gameId: string;
		    playerId: string;
		    updatedAt: number;
		    version: number;
		};
	};


	/**
	 * Partial increment of shared user entity data field items.  Partial set of items incremented as specified.
	 * 
	 * @param  {string} entityId The id of the entity to update.
	 * @param  {string} targetProfileId Profile id of the entity owner.
	 * @param  {Object} data The entity's data object.
	 * @returns ServiceProxyResponse
	 */ 
	incrementSharedUserEntityData(entityId: string, targetProfileId: string, data: Object): {
		status: number;
		data: {
		    acl: {
		        other: number;
		    };
		    createdAt: number;
		    data: {
		        test: number;
		    };
		    entityId: string;
		    entityType: string;
		    gameId: string;
		    playerId: string;
		    updatedAt: number;
		    version: number;
		};
	};


	/**
	 * Updates a shared entity on the server. This operation results in the entity data being completely replaced by the passed in JSON string.
	 * 
	 * @param  {string} entityId The id of the entity to update.
	 * @param  {string} targetProfileId The id of the entity's owner.
	 * @param  {string} entityType The entity type as defined by the user.
	 * @param  {Object} data The entity's data object.
	 * @param  {number} version The version of the entity to update. Use -1 to indicate the newest version.
	 * @returns ServiceProxyResponse
	 */ 
	updateSharedEntity(entityId: string, targetProfileId: string, entityType: string, data: Object, version: number): {
		status: number;
		data: {
		    entityId: string;
		    entityType: string;
		    version: number;
		    data: {
		        name: string;
		        age: number;
		    };
		    acl: {
		        other: number;
		    };
		    createdAt: number;
		    updatedAt: number;
		};
	};


	/**
	 * Updates/Creates an entity singleton on the server.
	 * 
	 * @param  {string} entityType The entity type as defined by the user.
	 * @param  {Object} data The entity's data object.
	 * @param  {Object} acl The entity's Access Control List as an object. A null ACL implies default permissions which make the entity readable/writeable by only the owner.
	 * @param  {number} version The version of the entity to update. Use -1 to indicate the newest version.
	 * @returns ServiceProxyResponse
	 */ 
	updateSingleton(entityType: string, data: Object, acl: Object, version: number): {
		data: {
		    entityType: string;
		    version: number;
		};
		status: number;
	};


	/**
	 * Deletes the given entity on the server.
	 * 
	 * @param  {string} entityId The id of the entity to delete.
	 * @param  {number} version The version of the entity to delete. Use -1 to indicate the newest version.
	 * @returns ServiceProxyResponse
	 */ 
	deleteEntity(entityId: string, version: number): {
		status: number;
		data: any | null;
	};


	/**
	 * Deletes an entity singleton on the server.
	 * 
	 * @param  {string} entityType The id of the entity to delete.
	 * @param  {number} version The version of the entity to delete. Use -1 to indicate the newest version.
	 * @returns ServiceProxyResponse
	 */ 
	deleteSingleton(entityType: string, version: number): {
		status: number;
		data: any | null;
	};


	/**
	 * Gets the page of entities from the server based on the specified context.
	 * 
	 * @param  {Object} context The JSON context for the page request.
	 * @returns ServiceProxyResponse
	 */ 
	getPage(context: Object): {
		data: {
		    _serverTime: number;
		    results: {
		        moreBefore: number;
		        count: number;
		        items: Array<{
		            entityId: string;
		            entityType: string;
		            version: number;
		            data: {
		                testName: string;
		            };
		            acl: {
		                other: number;
		            };
		            createdAt: number;
		            updatedAt: number;
		        }>;
		        page: number;
		        moreAfter: number;
		    };
		    context: string;
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
		data: {
		    _serverTime: number;
		    results: {
		        moreBefore: number;
		        count: number;
		        items: Array<{
		            entityId: string;
		            entityType: string;
		            version: number;
		            data: {
		                testName: string;
		            };
		            acl: {
		                other: number;
		            };
		            createdAt: number;
		            updatedAt: number;
		        }>;
		        page: number;
		        moreAfter: number;
		    };
		    context: string;
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
		    _serverTime: number;
		    entityListCount: number;
		    entityList: Array<{
		        gameId: string;
		        entityId: string;
		        ownerId: string;
		        entityType: string;
		        version: number;
		        data: {
		            street: string;
		        };
		        acl: {
		            other: number;
		        };
		        createdAt: number;
		        updatedAt: number;
		    }>;
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

}