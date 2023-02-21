/// <reference no-default-lib="true"/>

interface EntityServiceProxy {
	/**
	 * Create a new entity on the server.
	 * 
	 * @param  {string} entityType The entity type as defined by the user.
	 * @param  {nativeObject} data The entity's data object.
	 * @param  {nativeObject} acl The entity's Access Control List as an object. A null ACL implies default permissions which make the entity readable/writeable by only the owner.
	 * @returns ServiceProxyResponse
	 */ 
	createEntity(entityType: string, data: nativeObject, acl: nativeObject): ServiceProxyResponse;

	/**
	 * Read an existing entity on the server.
	 * 
	 * @param  {string} entityId The id of the entity.
	 * @returns ServiceProxyResponse
	 */ 
	getEntity(entityId: string): ServiceProxyResponse;

	/**
	 * Returns all shared entities for the given profile ID.
	 * 
	 * @param  {string} targetProfileId The profile id to retrieve shared entities for.
	 * @returns ServiceProxyResponse
	 */ 
	getSharedEntitiesForProfileId(targetProfileId: string): ServiceProxyResponse;

	/**
	 * Returns all shared entities for the given profile ID subject to the 'where' query.
	 * 
	 * @param  {string} targetProfileId The profile id to retrieve shared entities for.
	 * @param  {nativeObject} where A mongo style query string.
	 * @param  {nativeObject} orderBy Specifies the order in which the query returns matching documents. The sort parameter consists of a field followed by an ascending(1)/descending flag(-1). eg. `{ "name" : 1}` sorts by name in ascending order.
	 * @param  {long} maxReturn The maximum number of entities to return.
	 * @returns ServiceProxyResponse
	 */ 
	getSharedEntitiesListForProfileId(targetProfileId: string, where: nativeObject, orderBy: nativeObject, maxReturn: long): ServiceProxyResponse;

	/**
	 * Returns a single shared entity for the given profile ID.
	 * 
	 * @param  {string} targetProfileId The profile id to retrieve shared entities for.
	 * @param  {string} entityId The id of the entity that will be retrieved.
	 * @returns ServiceProxyResponse
	 */ 
	getSharedEntityForProfileId(targetProfileId: string, entityId: string): ServiceProxyResponse;

	/**
	 * Read a singleton entity.
	 * 
	 * @param  {string} entityType The entity type as defined by the user.
	 * @returns ServiceProxyResponse
	 */ 
	getSingleton(entityType: string): ServiceProxyResponse;

	/**
	 * Read entities for a specific type
	 * 
	 * @param  {string} entityType The entity type to search for.
	 * @returns ServiceProxyResponse
	 */ 
	getEntitiesByType(entityType: string): ServiceProxyResponse;

	/**
	 * Updates an entity on the server. This operation results in the entity data being completely replaced by the passed in JSON string.
	 * 
	 * @param  {string} entityId The id of the entity to update.
	 * @param  {string} entityType The entity type as defined by the user.
	 * @param  {nativeObject} data The entity's data object.
	 * @param  {nativeObject} acl The entity's Access Control List as an object. A null ACL implies default permissions which make the entity readable/writeable by only the owner.
	 * @param  {long} version The version of the entity to update. Use -1 to indicate the newest version.
	 * @returns ServiceProxyResponse
	 */ 
	updateEntity(entityId: string, entityType: string, data: nativeObject, acl: nativeObject, version: long): ServiceProxyResponse;

	/**
	 * Partial increment of user entity data field items.  Partial set of items incremented as specified.
	 * 
	 * @param  {string} entityId The id of the entity to update.
	 * @param  {nativeObject} data The entity's data object.
	 * @returns ServiceProxyResponse
	 */ 
	incrementUserEntityData(entityId: string, data: nativeObject): ServiceProxyResponse;

	/**
	 * Partial increment of shared user entity data field items.  Partial set of items incremented as specified.
	 * 
	 * @param  {string} entityId The id of the entity to update.
	 * @param  {string} targetProfileId Profile id of the entity owner.
	 * @param  {nativeObject} data The entity's data object.
	 * @returns ServiceProxyResponse
	 */ 
	incrementSharedUserEntityData(entityId: string, targetProfileId: string, data: nativeObject): ServiceProxyResponse;

	/**
	 * Updates a shared entity on the server. This operation results in the entity data being completely replaced by the passed in JSON string.
	 * 
	 * @param  {string} entityId The id of the entity to update.
	 * @param  {string} targetProfileId The id of the entity's owner.
	 * @param  {string} entityType The entity type as defined by the user.
	 * @param  {nativeObject} data The entity's data object.
	 * @param  {long} version The version of the entity to update. Use -1 to indicate the newest version.
	 * @returns ServiceProxyResponse
	 */ 
	updateSharedEntity(entityId: string, targetProfileId: string, entityType: string, data: nativeObject, version: long): ServiceProxyResponse;

	/**
	 * Updates/Creates an entity singleton on the server.
	 * 
	 * @param  {string} entityType The entity type as defined by the user.
	 * @param  {nativeObject} data The entity's data object.
	 * @param  {nativeObject} acl The entity's Access Control List as an object. A null ACL implies default permissions which make the entity readable/writeable by only the owner.
	 * @param  {long} version The version of the entity to update. Use -1 to indicate the newest version.
	 * @returns ServiceProxyResponse
	 */ 
	updateSingleton(entityType: string, data: nativeObject, acl: nativeObject, version: long): ServiceProxyResponse;

	/**
	 * Deletes the given entity on the server.
	 * 
	 * @param  {string} entityId The id of the entity to delete.
	 * @param  {long} version The version of the entity to delete. Use -1 to indicate the newest version.
	 * @returns ServiceProxyResponse
	 */ 
	deleteEntity(entityId: string, version: long): ServiceProxyResponse;

	/**
	 * Deletes an entity singleton on the server.
	 * 
	 * @param  {string} entityType The id of the entity to delete.
	 * @param  {long} version The version of the entity to delete. Use -1 to indicate the newest version.
	 * @returns ServiceProxyResponse
	 */ 
	deleteSingleton(entityType: string, version: long): ServiceProxyResponse;

	/**
	 * Gets the page of entities from the server based on the specified context.
	 * 
	 * @param  {nativeObject} context The JSON context for the page request.
	 * @returns ServiceProxyResponse
	 */ 
	getPage(context: nativeObject): ServiceProxyResponse;

	/**
	 * Gets the page of entities from the server based on the encoded context and specified page offset.
	 * 
	 * @param  {nativeObject} context The context string returned from the server from a previous call to GetPage or GetPageOffset.
	 * @param  {long} pageOffset The positive or negative page offset to fetch. Uses the last page retrieved using the context string to determine a starting point.
	 * @returns ServiceProxyResponse
	 */ 
	getPageOffset(context: nativeObject, pageOffset: long): ServiceProxyResponse;

	/**
	 * Get a list of entities from the server base on where. Where clause allows entityType, createdAt, updatedAt, data items.
	 * 
	 * @param  {nativeObject} where A mongo style query string.
	 * @param  {nativeObject} orderBy Specifies the order in which the query returns matching documents. The sort parameter consists of a field followed by an ascending(1)/descending flag(-1). eg. `{ "name" : 1}` sorts by name in ascending order.
	 * @param  {long} maxReturn The maximum number of entities to return.
	 * @returns ServiceProxyResponse
	 */ 
	getList(where: nativeObject, orderBy: nativeObject, maxReturn: long): ServiceProxyResponse;

	/**
	 * Get a count of entities from the server base on where. Where clause allows entityType, createdAt, updatedAt, data items.
	 * 
	 * @param  {nativeObject} where A mongo style query string.
	 * @returns ServiceProxyResponse
	 */ 
	getListCount(where: nativeObject): ServiceProxyResponse;
}