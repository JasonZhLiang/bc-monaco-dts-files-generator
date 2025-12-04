/// <reference no-default-lib="true"/>

interface GlobalEntityServiceProxy {
	/**
	 * Create a new entity on the server.
	 * 
	 * @param  {string} entityType The entity type as defined by the user.
	 * @param  {long} timeToLive Sets expiry time for entity in milliseconds if > 0.
	 * @param  {nativeObject} acl The entity's Access Control List as an object. A null ACL implies default permissions which make the entity readable/writeable by only the owner.
	 * @param  {nativeObject} data The entity's data object.
	 * @returns ServiceProxyResponse
	 */ 
	createEntity(entityType: string, timeToLive: long, acl: nativeObject, data: nativeObject): ServiceProxyResponse;

	/**
	 * Creates a new entity on the server with an indexed id.
	 * 
	 * @param  {string} entityType The entity type as defined by the user.
	 * @param  {string} entityIndexedId A secondary id that will be indexed.
	 * @param  {long} timeToLive Sets expiry time for entity in milliseconds if > 0.
	 * @param  {nativeObject} acl The entity's Access Control List as an object. A null ACL implies default permissions which make the entity readable/writeable by only the owner.
	 * @param  {nativeObject} data The entity's data object.
	 * @returns ServiceProxyResponse
	 */ 
	createEntityWithIndexedId(entityType: string, entityIndexedId: string, timeToLive: long, acl: nativeObject, data: nativeObject): ServiceProxyResponse;

	/**
	 * Updates an existing entity on the server.
	 * 
	 * @param  {string} entityId The id of the entity to update.
	 * @param  {long} version The version of the entity to update. Use -1 to indicate the newest version.
	 * @param  {nativeObject} data The entity's data object.
	 * @returns ServiceProxyResponse
	 */ 
	updateEntity(entityId: string, version: long, data: nativeObject): ServiceProxyResponse;

	/**
	 * Updates an existing system entity on the server.
	 * 
	 * @param  {string} entityId The id of the entity to update.
	 * @param  {long} version The version of the entity to update. Use -1 to indicate the newest version.
	 * @param  {nativeObject} data The entity's data object.
	 * @returns ServiceProxyResponse
	 */ 
	updateSystemEntity(entityId: string, version: long, data: nativeObject): ServiceProxyResponse;

	/**
	 * Updates an existing entity's Acl on the server.
	 * 
	 * @param  {string} entityId The id of the entity to update.
	 * @param  {long} version The version of the entity to update. Use -1 to indicate the newest version.
	 * @param  {nativeObject} acl The entity's Access Control List as json.
	 * @returns ServiceProxyResponse
	 */ 
	updateEntityAcl(entityId: string, version: long, acl: nativeObject): ServiceProxyResponse;

	/**
	 * Updates an existing entity's IndexedId on the server.
	 * 
	 * @param  {string} entityId The id of the entity to update.
	 * @param  {long} version The version of the entity to update. Use -1 to indicate the newest version.
	 * @param  {string} entityIndexedId InxdexedId of the entity to update.
	 * @returns ServiceProxyResponse
	 */ 
	updateEntityIndexedId(entityId: string, version: long, entityIndexedId: string): ServiceProxyResponse;

	/**
	 * Updates an existing system entity's Acl on the server.
	 * 
	 * @param  {string} entityId The id of the entity to update.
	 * @param  {long} version The version of the entity to update. Use -1 to indicate the newest version.
	 * @param  {nativeObject} acl The entity's Access Control List as json.
	 * @returns ServiceProxyResponse
	 */ 
	updateSystemEntityAcl(entityId: string, version: long, acl: nativeObject): ServiceProxyResponse;

	/**
	 * Updates an existing entity's TTL on the server.
	 * 
	 * @param  {string} entityId The id of the entity to update.
	 * @param  {long} version The version of the entity to update. Use -1 to indicate the newest version.
	 * @param  {long} timeToLive Sets expiry time for entity in milliseconds if > 0.
	 * @returns ServiceProxyResponse
	 */ 
	updateEntityTimeToLive(entityId: string, version: long, timeToLive: long): ServiceProxyResponse;

	/**
	 * Updates an existing entity's Owner and Acl on the server.
	 * 
	 * @param  {string} entityId The id of the entity to update.
	 * @param  {long} version The version of the entity to update. Use -1 to indicate the newest version.
	 * @param  {string} ownerId The id of the new owner.
	 * @param  {nativeObject} acl The entity's Access Control List as json.
	 * @returns ServiceProxyResponse
	 */ 
	updateEntityOwnerAndAcl(entityId: string, version: long, ownerId: string, acl: nativeObject): ServiceProxyResponse;

	/**
	 * Sets an existing entity's Owner to null.
	 * 
	 * @param  {string} entityId The id of the entity to update.
	 * @param  {long} version The version of the entity to update. Use -1 to indicate the newest version.
	 * @param  {nativeObject} acl The entity's Access Control List as json.
	 * @returns ServiceProxyResponse
	 */ 
	makeSystemEntity(entityId: string, version: long, acl: nativeObject): ServiceProxyResponse;

	/**
	 * Deletes an existing entity on the server.
	 * 
	 * @param  {string} entityId The id of the entity to update.
	 * @param  {long} version The version of the entity to update. Use -1 to indicate the newest version.
	 * @returns ServiceProxyResponse
	 */ 
	deleteEntity(entityId: string, version: long): ServiceProxyResponse;

	/**
	 * Deletes an existing system entity on the server.
	 * 
	 * @param  {string} entityId The id of the entity to update.
	 * @param  {long} version The entity's data object. -1 indicates the current entity version.
	 * @returns ServiceProxyResponse
	 */ 
	deleteSystemEntity(entityId: string, version: long): ServiceProxyResponse;

	/**
	 * Reads an existing entity from the server.
	 * 
	 * @param  {string} entityId The id of the entity.
	 * @returns ServiceProxyResponse
	 */ 
	readEntity(entityId: string): ServiceProxyResponse;

	/**
	 * Reads an existing system entity from the server.
	 * 
	 * @param  {string} entityId The id of the entity to read.
	 * @returns ServiceProxyResponse
	 */ 
	readSystemEntity(entityId: string): ServiceProxyResponse;

	/**
	 * Create a new system entity on the server.
	 * 
	 * @param  {string} entityType The entity type as defined by the user.
	 * @param  {long} timeToLive Sets expiry time for entity in milliseconds if > 0.
	 * @param  {nativeObject} acl The entity's Access Control List as an object. A null ACL implies default permissions which make the entity readable/writeable by only the owner.
	 * @param  {nativeObject} data The entity's data object.
	 * @returns ServiceProxyResponse
	 */ 
	createSystemEntity(entityType: string, timeToLive: long, acl: nativeObject, data: nativeObject): ServiceProxyResponse;

	/**
	 * Create a new system entity on the server with an indexed id.
	 * 
	 * @param  {string} entityType The entity type as defined by the user.
	 * @param  {string} entityIndexedId Id used to index the entity.
	 * @param  {long} timeToLive Sets expiry time for entity in milliseconds if > 0.
	 * @param  {nativeObject} acl The entity's Access Control List as an object. A null ACL implies default permissions which make the entity readable/writeable by only the owner.
	 * @param  {nativeObject} data The entity's data object.
	 * @returns ServiceProxyResponse
	 */ 
	createSystemEntityWithIndexedId(entityType: string, entityIndexedId: string, timeToLive: long, acl: nativeObject, data: nativeObject): ServiceProxyResponse;

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
	 * Get a list of entities from the server base on where clause and hinting on indicated index hint. Where clause allows entityType, createdAt, updatedAt, data items.
	 * 
	 * @param  {nativeObject} where A mongo style query string.
	 * @param  {nativeObject} orderBy Specifies the order in which the query returns matching documents. The sort parameter consists of a field followed by an ascending(1)/descending flag(-1). eg. `{ "name" : 1}` sorts by name in ascending order.
	 * @param  {long} maxReturn The maximum number of entities to return.
	 * @param  {nativeObject} hintJson The field index keys to be hinted, as JSON object.
	 * @returns ServiceProxyResponse
	 */ 
	getListWithHint(where: nativeObject, orderBy: nativeObject, maxReturn: long, hintJson: nativeObject): ServiceProxyResponse;

	/**
	 * Get a list of system entities from the server base on where. Where clause allows entityType, createdAt, updatedAt, data items.
	 * 
	 * @param  {nativeObject} where A mongo style query string.
	 * @param  {nativeObject} orderBy Specifies the order in which the query returns matching documents. The sort parameter consists of a field followed by an ascending(1)/descending flag(-1). eg. `{ "name" : 1}` sorts by name in ascending order.
	 * @param  {long} maxReturn The maximum number of entities to return.
	 * @returns ServiceProxyResponse
	 */ 
	getSystemEntityList(where: nativeObject, orderBy: nativeObject, maxReturn: long): ServiceProxyResponse;

	/**
	 * Get a list of system entities from the server base on where clause and hinting on indicated index hint. Where clause allows entityType, createdAt, updatedAt, data items.
	 * 
	 * @param  {nativeObject} where A mongo style query string.
	 * @param  {nativeObject} orderBy Specifies the order in which the query returns matching documents. The sort parameter consists of a field followed by an ascending(1)/descending flag(-1). eg. `{ "name" : 1}` sorts by name in ascending order.
	 * @param  {long} maxReturn The maximum number of entities to return.
	 * @param  {nativeObject} hintJson The field index keys to be hinted, as JSON object.
	 * @returns ServiceProxyResponse
	 */ 
	getSystemEntityListWithHint(where: nativeObject, orderBy: nativeObject, maxReturn: long, hintJson: nativeObject): ServiceProxyResponse;

	/**
	 * Get a list of entities from the server base on indexed id.
	 * 
	 * @param  {string} entityIndexedId The entity indexed id.
	 * @param  {long} maxReturn The maximum number of entities to return.
	 * @returns ServiceProxyResponse
	 */ 
	getListByIndexedId(entityIndexedId: string, maxReturn: long): ServiceProxyResponse;

	/**
	 * Get a count of entities from the server base on where. Where clause allows entityType, createdAt, updatedAt, data items.
	 * 
	 * @param  {nativeObject} where A mongo style query string.
	 * @returns ServiceProxyResponse
	 */ 
	getListCount(where: nativeObject): ServiceProxyResponse;

	/**
	 * Get a count of entities from the server base on where clause and hinting on index hint. Where clause allows entityType, createdAt, updatedAt, data items.
	 * 
	 * @param  {nativeObject} where A mongo style query string.
	 * @param  {nativeObject} hintJson The field index keys to be hinted, as JSON object.
	 * @returns ServiceProxyResponse
	 */ 
	getListCountWithHint(where: nativeObject, hintJson: nativeObject): ServiceProxyResponse;

	/**
	 * Get a count of system entities from the server base on where. Where clause allows entityType, createdAt, updatedAt, data items.
	 * 
	 * @param  {nativeObject} where A mongo style query string.
	 * @returns ServiceProxyResponse
	 */ 
	getSystemEntityListCount(where: nativeObject): ServiceProxyResponse;

	/**
	 * Get a count of system entities from the server base on where clause and hinting on index hint. Where clause allows entityType, createdAt, updatedAt, data items.
	 * 
	 * @param  {nativeObject} where A mongo style query string.
	 * @param  {nativeObject} hintJson The field index keys to be hinted, as JSON object.
	 * @returns ServiceProxyResponse
	 */ 
	getSystemEntityListCountWithHint(where: nativeObject, hintJson: nativeObject): ServiceProxyResponse;

	/**
	 * Gets the page of entities from the server based on the specified context.
	 * 
	 * @param  {nativeObject} context The json context for the page request.
	 * @returns ServiceProxyResponse
	 */ 
	getPage(context: nativeObject): ServiceProxyResponse;

	/**
	 * Gets the page of system entities from the server based on the specified context.
	 * 
	 * @param  {nativeObject} context The json context for the page request.
	 * @returns ServiceProxyResponse
	 */ 
	getSystemEntityPage(context: nativeObject): ServiceProxyResponse;

	/**
	 * Gets the page of entities from the server based on the encoded context and specified page offset.
	 * 
	 * @param  {nativeObject} context The context string returned from the server from a previous call to GetPage or GetPageOffset.
	 * @param  {long} pageOffset The positive or negative page offset to fetch. Uses the last page retrieved using the context string to determine a starting point.
	 * @returns ServiceProxyResponse
	 */ 
	getPageOffset(context: nativeObject, pageOffset: long): ServiceProxyResponse;

	/**
	 * Gets the page of entities from the server based on the encoded context and specified page offset.
	 * 
	 * @param  {string} context The context string returned from the server from a previous call to GetPage or GetPageOffset.
	 * @param  {long} pageOffset The positive or negative page offset to fetch. Uses the last page retrieved using the context string to determine a starting point.
	 * @returns ServiceProxyResponse
	 */ 
	getSystemEntityPageOffset(context: string, pageOffset: long): ServiceProxyResponse;

	/**
	 * Partial increment of global entity data field items.  Partial set of items incremented as specified.
	 * 
	 * @param  {string} entityId The id of the entity to update.
	 * @param  {nativeObject} data The entity's data object.
	 * @returns ServiceProxyResponse
	 */ 
	incrementGlobalEntityData(entityId: string, data: nativeObject): ServiceProxyResponse;

	/**
	 * Gets a list of up to randomCount randomly selected entities from the server based on the where condition and specified maximum return count.
	 * 
	 * @param  {nativeObject} where A mongo style query string.
	 * @param  {long} maxReturn The maximum number of entities to return.
	 * @returns ServiceProxyResponse
	 */ 
	getRandomEntitiesMatching(where: nativeObject, maxReturn: long): ServiceProxyResponse;

	/**
	 * Gets a list of up to randomCount randomly selected entities from the server based on the where condition and specified maximum return count, using index hint provided.
	 * 
	 * @param  {nativeObject} where A mongo style query string.
	 * @param  {long} maxReturn The maximum number of entities to return.
	 * @param  {nativeObject} hintJson The field index keys to be hinted, as JSON object.
	 * @returns ServiceProxyResponse
	 */ 
	getRandomEntitiesMatchingWithHint(where: nativeObject, maxReturn: long, hintJson: nativeObject): ServiceProxyResponse;
}