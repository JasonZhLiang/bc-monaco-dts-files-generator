/// <reference no-default-lib="true"/>

interface CustomEntityServiceProxy {
	/**
	 * Creates new custom entity.
	 * 
	 * @param  {string} entityType The type of custom entity to create.
	 * @param  {nativeObject} dataJson The entity's custom field data, as JSON.
	 * @param  {nativeObject} acl The entity's Access Control List as an object. A null ACL implies default permissions which make the entity readable by others.
	 * @param  {long} timeToLive The duration of time, in milliseconds, the custom entity should live before being expired. Null indicates never expires.
	 * @param  {boolean} isOwned If true, ownerId will be set to calling user's profile id; otherwise, ownerId set to null.
	 * @returns ServiceProxyResponse
	 */ 
	createEntity(entityType: string, dataJson: nativeObject, acl: nativeObject, timeToLive: long, isOwned: boolean): ServiceProxyResponse;

	/**
	 * Creates new custom entity.
	 * 
	 * @param  {string} entityType The type of custom entity to create.
	 * @param  {nativeObject} dataJson The entity's custom field data, as JSON.
	 * @param  {nativeObject} acl The entity's Access Control List as an object. A null ACL implies default permissions which make the entity readable by others.
	 * @param  {long} timeToLive The duration of time, in milliseconds, the custom entity should live before being expired. Null indicates never expires.
	 * @param  {string} ownerId A valid user profile id, or null to indicate no owner.
	 * @returns ServiceProxyResponse
	 */ 
	sysCreateEntity(entityType: string, dataJson: nativeObject, acl: nativeObject, timeToLive: long, ownerId: string): ServiceProxyResponse;

	/**
	 * Reads a custom entity, enforcing ownership/ACL permissions.
	 * 
	 * @param  {string} entityType The type of custom entity being read.
	 * @param  {string} entityId The id of custom entity being read.
	 * @returns ServiceProxyResponse
	 */ 
	readEntity(entityType: string, entityId: string): ServiceProxyResponse;

	/**
	 * Reads a custom entity, bypassing ownership/ACL permissions checks.
	 * 
	 * @param  {string} entityType The type of custom entity being read.
	 * @param  {string} entityId The id of custom entity being read.
	 * @returns ServiceProxyResponse
	 */ 
	sysReadEntity(entityType: string, entityId: string): ServiceProxyResponse;

	/**
	 * Replaces the specified custom entity's data, and optionally updates the acl and expiry, on the server, enforcing current ownership/ACL permissions.
	 * 
	 * @param  {string} entityType The type of custom entity being updated.
	 * @param  {string} entityId The id of custom entity being updated.
	 * @param  {integer} version Version of the custom entity being updated.
	 * @param  {nativeObject} dataJson New custom data, as JSON, to replace existing custom data.
	 * @param  {nativeObject} acl New access control list settings to replace existing acl. Optional, ignored if null.
	 * @param  {long} timeToLive The duration of time, in milliseconds, the custom entity should live from now before being expired. Null indicates never expires. To indicate no change, use -1.
	 * @returns ServiceProxyResponse
	 */ 
	updateEntity(entityType: string, entityId: string, version: integer, dataJson: nativeObject, acl: nativeObject, timeToLive: long): ServiceProxyResponse;

	/**
	 * Replaces the specified custom entity's data, and optionally updates the acl and expiry, on the server, bypassing ownership/ACL permissions checks.
	 * 
	 * @param  {string} entityType The type of custom entity being updated.
	 * @param  {string} entityId The id of custom entity being updated.
	 * @param  {integer} version Version of the custom entity being updated.
	 * @param  {nativeObject} dataJson New custom data, as JSON, to replace existing custom data.
	 * @param  {nativeObject} acl New access control list settings to replace existing acl. Optional, ignored if null.
	 * @param  {long} timeToLive The duration of time, in milliseconds, the custom entity should live from now before being expired. Null indicates never expires. To indicate no change, use -1.
	 * @returns ServiceProxyResponse
	 */ 
	sysUpdateEntity(entityType: string, entityId: string, version: integer, dataJson: nativeObject, acl: nativeObject, timeToLive: long): ServiceProxyResponse;

	/**
	 * Sets the specified fields within custom entity data on the server, enforcing ownership/ACL permissions.
	 * 
	 * @param  {string} entityType The type of custom entity being updated.
	 * @param  {string} entityId The id of custom entity being updated.
	 * @param  {integer} version Version of the custom entity being updated.
	 * @param  {nativeObject} fieldsJson Specific fields, as JSON, to set within entity's custom data.
	 * @returns ServiceProxyResponse
	 */ 
	updateEntityFields(entityType: string, entityId: string, version: integer, fieldsJson: nativeObject): ServiceProxyResponse;

	/**
	 * Sets the specified fields within custom entity data on the server, bypassing ownership/ACL permissions checks.
	 * 
	 * @param  {string} entityType The type of custom entity being updated.
	 * @param  {string} entityId The id of custom entity being updated.
	 * @param  {integer} version Version of the custom entity being updated.
	 * @param  {nativeObject} fieldsJson Specific fields, as JSON, to set within entity's custom data.
	 * @returns ServiceProxyResponse
	 */ 
	sysUpdateEntityFields(entityType: string, entityId: string, version: integer, fieldsJson: nativeObject): ServiceProxyResponse;

	/**
	 * For sharded custom collection entities. Sets the specified fields within custom entity data on the server, enforcing ownership/ACL permissions.
	 * 
	 * @param  {string} entityType The type of custom entity being updated.
	 * @param  {string} entityId The id of custom entity being updated.
	 * @param  {integer} version Version of the custom entity being updated.
	 * @param  {nativeObject} fieldsJson Specific fields, as JSON, to set within entity's custom data.
	 * @param  {nativeObject} shardKeyJson The shard key field(s) and value(s), as JSON, applicable to the entity being updated.
	 * @returns ServiceProxyResponse
	 */ 
	updateEntityFieldsSharded(entityType: string, entityId: string, version: integer, fieldsJson: nativeObject, shardKeyJson: nativeObject): ServiceProxyResponse;

	/**
	 * For sharded custom collection entities. Sets the specified fields within custom entity data on the server, bypassing ACL permissions checks.
	 * 
	 * @param  {string} entityType The type of custom entity being updated.
	 * @param  {string} entityId The id of custom entity being updated.
	 * @param  {integer} version Version of the custom entity being updated.
	 * @param  {nativeObject} fieldsJson Specific fields, as JSON, to set within entity's custom data.
	 * @param  {nativeObject} shardKeyJson The shard key field(s) and value(s), as JSON, applicable to the entity being updated.
	 * @returns ServiceProxyResponse
	 */ 
	sysUpdateEntityFieldsSharded(entityType: string, entityId: string, version: integer, fieldsJson: nativeObject, shardKeyJson: nativeObject): ServiceProxyResponse;

	/**
	 * Increments the specified fields by the specified amount within custom entity data on the server, enforcing ownership/ACL permissions.
	 * 
	 * @param  {string} entityType The type of custom entity being updated.
	 * @param  {string} entityId The id of custom entity being updated.
	 * @param  {nativeObject} fieldsJson Specific fields, as JSON, within entity's custom data, with respective increment amount.
	 * @returns ServiceProxyResponse
	 */ 
	incrementData(entityType: string, entityId: string, fieldsJson: nativeObject): ServiceProxyResponse;

	/**
	 * Increments the specified fields by the specified amount within custom entity data on the server, bypassing ownership/ACL permissions checks.
	 * 
	 * @param  {string} entityType The type of custom entity being updated.
	 * @param  {string} entityId The id of custom entity being updated.
	 * @param  {nativeObject} fieldsJson Specific fields, as JSON, within entity's custom data, with respective increment amount.
	 * @returns ServiceProxyResponse
	 */ 
	sysIncrementData(entityType: string, entityId: string, fieldsJson: nativeObject): ServiceProxyResponse;

	/**
	 * Increments the specified fields by the specified amount within custom entity data on the server, enforcing ownership/ACL permissions.
	 * 
	 * @param  {string} entityType The type of custom entity being updated.
	 * @param  {string} entityId The id of custom entity being updated.
	 * @param  {nativeObject} fieldsJson Specific fields, as JSON, within entity's custom data, with respective increment amount.
	 * @param  {nativeObject} shardKeyJson The shard key field(s) and value(s), as JSON, applicable to the entity being updated. If entity is owned, ownerId must be specified in the shardKeyJson info; otherwise, shardKeyJson must indicate values for all fields in the applicable shard key index.
	 * @returns ServiceProxyResponse
	 */ 
	incrementDataSharded(entityType: string, entityId: string, fieldsJson: nativeObject, shardKeyJson: nativeObject): ServiceProxyResponse;

	/**
	 * Increments the specified fields by the specified amount within custom entity data on the server, bypassing ownership/ACL permissions.
	 * 
	 * @param  {string} entityType The type of custom entity being updated.
	 * @param  {string} entityId The id of custom entity being updated.
	 * @param  {nativeObject} fieldsJson Specific fields, as JSON, within entity's custom data, with respective increment amount.
	 * @param  {nativeObject} shardKeyJson The shard key field(s) and value(s), as JSON, applicable to the entity being updated. If entity is owned, ownerId must be specified in the shardKeyJson info; otherwise, shardKeyJson must indicate values for all fields in the applicable shard key index.
	 * @returns ServiceProxyResponse
	 */ 
	sysIncrementDataSharded(entityType: string, entityId: string, fieldsJson: nativeObject, shardKeyJson: nativeObject): ServiceProxyResponse;

	/**
	 * Updates the ownerId of the specified custom entity.
	 * 
	 * @param  {string} entityType The type of custom entity being updated.
	 * @param  {string} entityId The id of custom entity being updated.
	 * @param  {string} oldOwnerId ID of the profile of the old owner.
	 * @param  {string} newOwnerId ID of the profile of the new owner.
	 * @param  {integer} version Version of the custom entity being updated.
	 * @returns ServiceProxyResponse
	 */ 
	sysUpdateEntityOwner(entityType: string, entityId: string, oldOwnerId: string, newOwnerId: string, version: integer): ServiceProxyResponse;

	/**
	 * Retrieves first page of custom entities from the server based on the custom entity type and specified query context, enforcing ownership/ACL permissions.
	 * 
	 * @param  {string} entityType The type of custom entity being retrieved.
	 * @param  {nativeObject} context The json context for the page request.
	 * @returns ServiceProxyResponse
	 */ 
	getEntityPage(entityType: string, context: nativeObject): ServiceProxyResponse;

	/**
	 * Retrieves first page of custom entities from the server based on the custom entity type and specified query context, bypassing ownership/ACL permissions checks.
	 * 
	 * @param  {string} entityType The type of custom entity being retrieved.
	 * @param  {nativeObject} context The json context for the page request.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetEntityPage(entityType: string, context: nativeObject): ServiceProxyResponse;

	/**
	 * Gets the page of custom entities from the server based on the encoded context and specified page offset, enforcing ownership/ACL permissions.
	 * 
	 * @param  {string} entityType The type of custom entity being retrieved.
	 * @param  {nativeObject} context The encoded context string returned from the server from a previous call to GetEntityPage or GetEntityPageOffset.
	 * @param  {long} pageOffset The positive or negative page offset to fetch. Uses the last page retrieved using the context string to determine a starting point.
	 * @returns ServiceProxyResponse
	 */ 
	getEntityPageOffset(entityType: string, context: nativeObject, pageOffset: long): ServiceProxyResponse;

	/**
	 * Gets the page of custom entities from the server based on the encoded context and specified page offset, bypassing ownership/ACL permissions checks.
	 * 
	 * @param  {string} entityType The type of custom entity being retrieved.
	 * @param  {nativeObject} context The context string returned from the server from a previous call to SysGetEntityPage or SysGetEntityPageOffset.
	 * @param  {long} pageOffset The positive or negative page offset to fetch. Uses the last page retrieved using the context string to determine a starting point.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetEntityPageOffset(entityType: string, context: nativeObject, pageOffset: long): ServiceProxyResponse;

	/**
	 * Counts the number of custom entities meeting the specified where clause, enforcing ownership/ACL permissions.
	 * 
	 * @param  {string} entityType The type of custom entity to be counted.
	 * @param  {nativeObject} whereJson The where clause, as JSON object.
	 * @returns ServiceProxyResponse
	 */ 
	getCount(entityType: string, whereJson: nativeObject): ServiceProxyResponse;

	/**
	 * Counts the number of custom entities meeting the specified where clause, bypassing ownership/ACL permissions checks.
	 * 
	 * @param  {string} entityType The type of custom entity to be counted.
	 * @param  {nativeObject} whereJson The where clause, as JSON object.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetCount(entityType: string, whereJson: nativeObject): ServiceProxyResponse;

	/**
	 * Deletes the specified custom entity on the server, enforcing ownership/ACL permissions.
	 * 
	 * @param  {string} entityType The type of custom entity being deleted.
	 * @param  {string} entityId The id of custom entity being deleted.
	 * @param  {integer} version Version of the custom entity being deleted.
	 * @returns ServiceProxyResponse
	 */ 
	deleteEntity(entityType: string, entityId: string, version: integer): ServiceProxyResponse;

	/**
	 * Deletes the specified custom entity on the server, bypassing ownership/ACL permissions checks.
	 * 
	 * @param  {string} entityType The type of custom entity being deleted.
	 * @param  {string} entityId The id of custom entity being deleted.
	 * @param  {integer} version Version of the custom entity being deleted.
	 * @returns ServiceProxyResponse
	 */ 
	sysDeleteEntity(entityType: string, entityId: string, version: integer): ServiceProxyResponse;

	/**
	 * Deletes all applicable custom entities from the server based on the custom entity type and specified delete criteria, enforcing ownership/ACL permissions.
	 * 
	 * @param  {string} entityType The type of custom entities being deleted.
	 * @param  {nativeObject} deleteCriteria The delete criteria to be applied.
	 * @returns ServiceProxyResponse
	 */ 
	deleteEntities(entityType: string, deleteCriteria: nativeObject): ServiceProxyResponse;

	/**
	 * Deletes all applicable custom entities from the server based on the custom entity type, specified delete criteria and acrossAllUsers flag, bypassing ownership/ACL checks.
	 * 
	 * @param  {string} entityType The type of custom entity being deleted.
	 * @param  {nativeObject} deleteCriteria The delete criteria to be applied.
	 * @param  {boolean} acrossAllUsers Boolean indicating whether delete is to be applied to all users (true) or not (false), when custom entities are owned.
	 * @returns ServiceProxyResponse
	 */ 
	sysDeleteEntities(entityType: string, deleteCriteria: nativeObject, acrossAllUsers: boolean): ServiceProxyResponse;

	/**
	 * Reads the custom entity singleton owned by the session's user.
	 * 
	 * @param  {string} entityType The type of custom entity being read. Custom entity type must have option isOwned set to true.
	 * @returns ServiceProxyResponse
	 */ 
	readSingleton(entityType: string): ServiceProxyResponse;

	/**
	 * Updates the singleton owned by the user for the specified custom entity type on the server, creating the singleton if it does not exist. This operation results in the owned singleton's data being completely replaced by the passed in JSON object.
	 * 
	 * @param  {string} entityType The type of custom entity singleton to create/update. Custom entity type must have option isOwned set to true.
	 * @param  {integer} version Version of the custom entity singleton being updated.
	 * @param  {nativeObject} dataJson The singleton entity's custom field data, as JSON.
	 * @param  {nativeObject} acl The singleton entity's Access Control List as an object. A null ACL implies default permissions which make the entity readable by others.
	 * @param  {long} timeToLive The duration of time, in milliseconds, the singleton custom entity should live before being expired. Null indicates never expires. Value of -1 indicates no change for updates
	 * @returns ServiceProxyResponse
	 */ 
	updateSingleton(entityType: string, version: integer, dataJson: nativeObject, acl: nativeObject, timeToLive: long): ServiceProxyResponse;

	/**
	 * Partially updates the data, of the singleton owned by the user for the specified custom entity type, with the specified fields, on the server
	 * 
	 * @param  {string} entityType The type of custom entity singleton being updated. Custom entity type must have option isOwned set to true.
	 * @param  {integer} version Version of the custom entity singleton being updated.
	 * @param  {nativeObject} fieldsJson Specific fields, as JSON, to set within the singleton entity's custom data.
	 * @returns ServiceProxyResponse
	 */ 
	updateSingletonFields(entityType: string, version: integer, fieldsJson: nativeObject): ServiceProxyResponse;

	/**
	 * Increments the specified fields, of the singleton owned by the user, by the specified amount within the custom entity data on the server.
	 * 
	 * @param  {string} entityType The type of custom entity being updated.
	 * @param  {nativeObject} fieldsJson Specific fields, as JSON, within entity's custom data, with respective increment amount.
	 * @returns ServiceProxyResponse
	 */ 
	incrementSingletonData(entityType: string, fieldsJson: nativeObject): ServiceProxyResponse;

	/**
	 * Deletes the specified custom entity singleton, owned by the session's user, for the specified entity type, on the server.
	 * 
	 * @param  {string} entityType The type of custom entity singleton being deleted. Custom entity type must have option isOwned set to true.
	 * @param  {integer} version Version of the custom entity singleton being deleted.
	 * @returns ServiceProxyResponse
	 */ 
	deleteSingleton(entityType: string, version: integer): ServiceProxyResponse;

	/**
	 * Gets a list of up to maxReturn randomly selected custom entities from the server based on the entity type and where condition.
	 * 
	 * @param  {string} entityType The type of custom entity being searched.
	 * @param  {nativeObject} whereJson The where clause, as JSON object.
	 * @param  {long} maxReturn The maximum number of entities to return.
	 * @returns ServiceProxyResponse
	 */ 
	getRandomEntitiesMatching(entityType: string, whereJson: nativeObject, maxReturn: long): ServiceProxyResponse;

	/**
	 * Gets a list of up to maxReturn randomly selected custom entities from the server based on the entity type and where condition, bypassing ownership/ACL permissions checking.
	 * 
	 * @param  {string} entityType The type of custom entity being searched.
	 * @param  {nativeObject} whereJson The where clause, as JSON object.
	 * @param  {long} maxReturn The maximum number of entities to return.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetRandomEntitiesMatching(entityType: string, whereJson: nativeObject, maxReturn: long): ServiceProxyResponse;

	/**
	 * Creates configuration for new custom entity collection.
	 * 
	 * @param  {string} entityType The type of custom entity collection to be created.
	 * @param  {nativeObject} collectionOptsJson The collection options, as JSON object.
	 * @returns ServiceProxyResponse
	 */ 
	sysCreateCollection(entityType: string, collectionOptsJson: nativeObject): ServiceProxyResponse;

	/**
	 * Drops the applicable custom entity collection on the server and deletes the associated custom entity configuration.
	 * 
	 * @param  {string} entityType The type of custom entity collection to be dropped.
	 * @returns ServiceProxyResponse
	 */ 
	sysDropCollection(entityType: string): ServiceProxyResponse;

	/**
	 * Updates the collection option indicating whether custom collection data is to be migrated (true) or not (false).
	 * 
	 * @param  {string} entityType The type of the custom entity collection to update.
	 * @param  {boolean} migrate Boolean indicating whether custom collection data is to be migrated (true) or not (false).
	 * @returns ServiceProxyResponse
	 */ 
	sysUpdateCollectionMigrate(entityType: string, migrate: boolean): ServiceProxyResponse;

	/**
	 * Updates the collection options for the custom collection.
	 * 
	 * @param  {string} entityType The type of the custom entity collection to update.
	 * @param  {nativeObject} collectionOptsJson The collection options updates, as JSON object.
	 * @returns ServiceProxyResponse
	 */ 
	sysUpdateCollectionOptions(entityType: string, collectionOptsJson: nativeObject): ServiceProxyResponse;

	/**
	 * Lists the custom entity collections configured for the application.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	sysListCollections(): ServiceProxyResponse;

	/**
	 * Creates a new index on a custom entity collection.
	 * 
	 * @param  {string} entityType The entity type identifying the applicable custom entity collection.
	 * @param  {string} indexName The name to assign to the new index.
	 * @param  {nativeObject} indexKeysJson The field index keys, as JSON object.
	 * @param  {nativeObject} indexOptsJson The index options, as JSON object.
	 * @returns ServiceProxyResponse
	 */ 
	sysCreateIndex(entityType: string, indexName: string, indexKeysJson: nativeObject, indexOptsJson: nativeObject): ServiceProxyResponse;

	/**
	 * Retrieves list of indexes configured for a custom entity collection.
	 * 
	 * @param  {string} entityType The entity type identifying the applicable custom entity collection.
	 * @returns ServiceProxyResponse
	 */ 
	sysListIndexes(entityType: string): ServiceProxyResponse;

	/**
	 * Drops the specified index from the identified custom entity collection.
	 * 
	 * @param  {string} entityType The entity type identifying the applicable custom entity collection.
	 * @param  {nativeObject} indexKeysJson The field index keys, as JSON object, identifying the index to be dropped.
	 * @returns ServiceProxyResponse
	 */ 
	sysDropIndex(entityType: string, indexKeysJson: nativeObject): ServiceProxyResponse;

	/**
	 * Drops the specified index from the identified custom entity collection.
	 * 
	 * @param  {string} entityType The entity type identifying the applicable custom entity collection.
	 * @param  {string} indexName The name of the index to be dropped.
	 * @param  {nativeObject} indexKeysJson The field index keys, as JSON object, identifying the index to be dropped.
	 * @returns ServiceProxyResponse
	 */ 
	sysDropIndexNamed(entityType: string, indexName: string, indexKeysJson: nativeObject): ServiceProxyResponse;
}