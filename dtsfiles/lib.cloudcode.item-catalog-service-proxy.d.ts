/// <reference no-default-lib="true"/>

interface ItemCatalogServiceProxy {
	/**
	 * Retrieves page of catalog items from the server, with language fields limited to the text for the current or default language.
	 * 
	 * @param  {nativeObject} context The json context for the page request.
	 * @returns ServiceProxyResponse
	 */ 
	getCatalogItemsPage(context: nativeObject): ServiceProxyResponse;

	/**
	 * Retrieves page of catalog items from the server, with full language fields mappings.
	 * 
	 * @param  {nativeObject} context The json context for the page request.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetCatalogItemsPage(context: nativeObject): ServiceProxyResponse;

	/**
	 * Gets the page of catalog items from the server based on the encoded context and specified page offset, with language fields limited to the text for the current or default language.
	 * 
	 * @param  {nativeObject} context The context string returned from the server from a previous call to GetCatalogItemsPage or GetCatalogItemsPageOffset.
	 * @param  {long} pageOffset The positive or negative page offset to fetch. Uses the last page retrieved using the context string to determine a starting point.
	 * @returns ServiceProxyResponse
	 */ 
	getCatalogItemsPageOffset(context: nativeObject, pageOffset: long): ServiceProxyResponse;

	/**
	 * Gets the page of catalog items from the server based on the encoded context and specified page offset, with full language fields mappings.
	 * 
	 * @param  {string} context The context string returned from the server from a previous call to SysGetCatalogItemsPage or SysGetCatalogItemsPageOffset.
	 * @param  {long} pageOffset The positive or negative page offset to fetch. Uses the last page retrieved using the context string to determine a starting point.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetCatalogItemsPageOffset(context: string, pageOffset: long): ServiceProxyResponse;

	/**
	 * Reads an existing item definition from the server, with language fields limited to the current or default language.
	 * 
	 * @param  {string} defId The unique id of the item definition.
	 * @returns ServiceProxyResponse
	 */ 
	getCatalogItemDefinition(defId: string): ServiceProxyResponse;

	/**
	 * Reads an existing item definition from the server, with full language fields mappings.
	 * 
	 * @param  {string} defId The unique id of the item definition.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetCatalogItemDefinition(defId: string): ServiceProxyResponse;

	/**
	 * Create a new catalog item on the server.
	 * 
	 * @param  {string} defId Unique ID for new catalog item. Required.
	 * @param  {nativeObject} itemDefData The data defining the catalog item.
	 * @returns ServiceProxyResponse
	 */ 
	sysAddCatalogItem(defId: string, itemDefData: nativeObject): ServiceProxyResponse;

	/**
	 * Update a catalog item on the server.
	 * 
	 * @param  {string} defId Unique ID identifying catalog item to be updated.
	 * @param  {integer} version Version of catalog item being edited.
	 * @param  {nativeObject} itemDefData The data to update on the catalog item.
	 * @returns ServiceProxyResponse
	 */ 
	sysEditCatalogItem(defId: string, version: integer, itemDefData: nativeObject): ServiceProxyResponse;

	/**
	 * Publish the specified catalog item on the server.
	 * 
	 * @param  {string} defId Unique ID identifying catalog item.
	 * @param  {integer} version Version of catalog item being edited.
	 * @param  {boolean} force Specify true to publish items that have previously been retired or revoked, otherwise false.
	 * @returns ServiceProxyResponse
	 */ 
	sysPublishCatalogItem(defId: string, version: integer, force: boolean): ServiceProxyResponse;

	/**
	 * Retire the specified catalog item on the server.
	 * 
	 * @param  {string} defId Unique ID identifying catalog item.
	 * @param  {integer} version Version of catalog item being edited.
	 * @returns ServiceProxyResponse
	 */ 
	sysRetireCatalogItem(defId: string, version: integer): ServiceProxyResponse;

	/**
	 * Revoke the specified catalog item on the server.
	 * 
	 * @param  {string} defId Unique ID identifying catalog item.
	 * @param  {integer} version Version of catalog item being edited.
	 * @returns ServiceProxyResponse
	 */ 
	sysRevokeCatalogItem(defId: string, version: integer): ServiceProxyResponse;
}