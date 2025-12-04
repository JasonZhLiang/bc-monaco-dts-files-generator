/// <reference no-default-lib="true"/>

interface ItemCatalogServiceProxy {
	/**
	 * Retrieves page of catalog items from the server, with language fields limited to the text for the current or default language.
	 * 
	 * @param  {Object} context The json context for the page request.
	 * @returns ServiceProxyResponse
	 */ 
	getCatalogItemsPage(context: Object): {
		data: {
		    context: string;
		    results: {
		        count: number;
		        page: number;
		        items: Array<{
		            defId: string;
		            name: string;
		            desc: string;
		            type: string;
		            category: string;
		            tags: Array<string>;
		            buyPrice: {
		                coins: number;
		            };
		            sellPrice: {
		                coins: number;
		            };
		            image: string;
		            resourceGroup: any | null;
		            resourceTag: any | null;
		            meta: {
		                level: string;
		            };
		            initData: {
		                exp: number;
		            };
		            pState: string;
		            publishedAt: number;
		            createdAt: number;
		            updatedAt: number;
		            version: number;
		            stackable: number;
		            consumable: number;
		            uses: any | null;
		            coolDownSecs: number;
		            recoverySecs: number;
		            activatable: number;
		            statusName: any | null;
		            activeSecs: any | null;
		            tradable: number;
		            blockchain: number;
		            blockchainDefId: any | null;
		        }>;
		        moreAfter: number;
		        moreBefore: number;
		    };
		};
		status: number;
	};


	/**
	 * Retrieves page of catalog items from the server, with full language fields mappings.
	 * 
	 * @param  {Object} context The json context for the page request.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetCatalogItemsPage(context: Object): {
		data: {
		    context: string;
		    results: {
		        count: number;
		        page: number;
		        items: Array<{
		            defId: string;
		            name: string;
		            desc: string;
		            type: string;
		            category: string;
		            tags: Array<string>;
		            buyPrice: {
		                coins: number;
		            };
		            sellPrice: {
		                coins: number;
		            };
		            image: string;
		            resourceGroup: any | null;
		            resourceTag: any | null;
		            meta: {
		                level: string;
		            };
		            initData: {
		                exp: number;
		            };
		            pState: string;
		            publishedAt: number;
		            createdAt: number;
		            updatedAt: number;
		            version: number;
		            stackable: number;
		            consumable: number;
		            uses: any | null;
		            coolDownSecs: number;
		            recoverySecs: number;
		            activatable: number;
		            statusName: any | null;
		            activeSecs: any | null;
		            tradable: number;
		            blockchain: number;
		            blockchainDefId: any | null;
		        }>;
		        moreAfter: number;
		        moreBefore: number;
		    };
		};
		status: number;
	};


	/**
	 * Gets the page of catalog items from the server based on the encoded context and specified page offset, with language fields limited to the text for the current or default language.
	 * 
	 * @param  {Object} context The context string returned from the server from a previous call to GetCatalogItemsPage or GetCatalogItemsPageOffset.
	 * @param  {number} pageOffset The positive or negative page offset to fetch. Uses the last page retrieved using the context string to determine a starting point.
	 * @returns ServiceProxyResponse
	 */ 
	getCatalogItemsPageOffset(context: Object, pageOffset: number): {
		data: {
		    context: string;
		    results: {
		        count: number;
		        page: number;
		        items: Array<{
		            gameId: string;
		            defId: string;
		            name: {
		                en: string;
		            };
		            desc: {
		                en: string;
		            };
		            type: string;
		            category: string;
		            tags: Array<string>;
		            buyPrice: {
		            };
		            sellPrice: {
		            };
		            image: any | null;
		            resourceGroup: any | null;
		            resourceTag: any | null;
		            meta: {
		            };
		            initData: {
		            };
		            pState: string;
		            publishedAt: number;
		            createdAt: number;
		            updatedAt: number;
		            version: number;
		            stackable: number;
		            consumable: number;
		            uses: any | null;
		            coolDownSecs: number;
		            recoverySecs: number;
		            activatable: number;
		            statusName: any | null;
		            activeSecs: any | null;
		            tradable: number;
		            blockchain: number;
		            blockchainDefId: any | null;
		        }>;
		        moreAfter: number;
		        moreBefore: number;
		    };
		};
		status: number;
	};


	/**
	 * Gets the page of catalog items from the server based on the encoded context and specified page offset, with full language fields mappings.
	 * 
	 * @param  {string} context The context string returned from the server from a previous call to SysGetCatalogItemsPage or SysGetCatalogItemsPageOffset.
	 * @param  {number} pageOffset The positive or negative page offset to fetch. Uses the last page retrieved using the context string to determine a starting point.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetCatalogItemsPageOffset(context: string, pageOffset: number): {
		data: {
		    context: string;
		    results: {
		        count: number;
		        page: number;
		        items: Array<{
		            gameId: string;
		            defId: string;
		            name: {
		                en: string;
		            };
		            desc: {
		                en: string;
		            };
		            type: string;
		            category: string;
		            tags: Array<string>;
		            buyPrice: {
		            };
		            sellPrice: {
		            };
		            image: any | null;
		            resourceGroup: any | null;
		            resourceTag: any | null;
		            meta: {
		            };
		            initData: {
		            };
		            pState: string;
		            publishedAt: number;
		            createdAt: number;
		            updatedAt: number;
		            version: number;
		            stackable: number;
		            consumable: number;
		            uses: any | null;
		            coolDownSecs: number;
		            recoverySecs: number;
		            activatable: number;
		            statusName: any | null;
		            activeSecs: any | null;
		            tradable: number;
		            blockchain: number;
		            blockchainDefId: any | null;
		        }>;
		        moreAfter: number;
		        moreBefore: number;
		    };
		};
		status: number;
	};


	/**
	 * Reads an existing item definition from the server, with language fields limited to the current or default language.
	 * 
	 * @param  {string} defId The unique id of the item definition.
	 * @returns ServiceProxyResponse
	 */ 
	getCatalogItemDefinition(defId: string): {
		data: {
		    defId: string;
		    name: string;
		    desc: string;
		    type: string;
		    category: string;
		    tags: any | null;
		    buyPrice: {
		        coins: number;
		    };
		    sellPrice: {
		        coins: number;
		    };
		    image: any | null;
		    resourceGroup: any | null;
		    resourceTag: any | null;
		    meta: {
		    };
		    initData: {
		    };
		    pState: string;
		    publishedAt: number;
		    createdAt: number;
		    updatedAt: number;
		    version: number;
		    stackable: number;
		    consumable: number;
		    uses: any | null;
		    coolDownSecs: number;
		    recoverySecs: number;
		    activatable: number;
		    statusName: string;
		    activeSecs: number;
		    tradable: number;
		    blockchain: number;
		    blockchainDefId: any | null;
		};
		status: number;
	};


	/**
	 * Reads an existing item definition from the server, with full language fields mappings.
	 * 
	 * @param  {string} defId The unique id of the item definition.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetCatalogItemDefinition(defId: string): {
		data: {
		    defId: string;
		    name: string;
		    desc: string;
		    type: string;
		    category: string;
		    tags: any | null;
		    buyPrice: {
		        coins: number;
		    };
		    sellPrice: {
		        coins: number;
		    };
		    image: any | null;
		    resourceGroup: any | null;
		    resourceTag: any | null;
		    meta: {
		    };
		    initData: {
		    };
		    pState: string;
		    publishedAt: number;
		    createdAt: number;
		    updatedAt: number;
		    version: number;
		    stackable: number;
		    consumable: number;
		    uses: any | null;
		    coolDownSecs: number;
		    recoverySecs: number;
		    activatable: number;
		    statusName: string;
		    activeSecs: number;
		    tradable: number;
		    blockchain: number;
		    blockchainDefId: any | null;
		};
		status: number;
	};


	/**
	 * Delete an existing Item catalog
	 * 
	 * @param  {string} defId The unique id of the item definition.
	 * @param  {number} version Version of catalog item to delete. For any version, specify -1.
	 * @param  {boolean} forceDeleteAnyState false - Delete only if the item is in Revoked state. true - delete item irrespective of the state. Note: A catalog item cannot be deleted if reference dependencies exist.
	 * @returns ServiceProxyResponse
	 */ 
	sysDeleteCatalogItem(defId: string, version: number, forceDeleteAnyState: boolean): {
		status: number;
		data: any | null;
	};


	/**
	 * Create a new catalog item on the server. Note: Default for buyPriceDisabled is false. If set to true, the item cannot be purchased except through a promotion.
	 * 
	 * @param  {string} defId Unique ID for new catalog item. Required.
	 * @param  {Object} itemDefData The data defining the ITEM type catalog item.
	 * @returns ServiceProxyResponse
	 */ 
	sysAddCatalogItem(defId: string, itemDefData: Object): ServiceProxyResponse;


	/**
	 * Update a catalog item on the server. Note: Default for buyPriceDisabled is false. If set to true, the item cannot be purchased except through a promotion.
	 * 
	 * @param  {string} defId Unique ID identifying catalog item to be updated.
	 * @param  {number} version Version of catalog item being edited.
	 * @param  {Object} itemDefData The data to update on the ITEM type catalog item.
	 * @returns ServiceProxyResponse
	 */ 
	sysEditCatalogItem(defId: string, version: number, itemDefData: Object): ServiceProxyResponse;


	/**
	 * Publish the specified catalog item on the server.
	 * 
	 * @param  {string} defId Unique ID identifying catalog item.
	 * @param  {number} version Version of catalog item being edited.
	 * @param  {boolean} force Specify true to publish catalog items that have previously been retired or revoked, otherwise false. Note: A bundle can only be published if all contained items have been published.
	 * @returns ServiceProxyResponse
	 */ 
	sysPublishCatalogItem(defId: string, version: number, force: boolean): {
		data: {
		    defId: string;
		    name: string;
		    desc: string;
		    type: string;
		    category: string;
		    tags: Array<string>;
		    buyPrice: {
		        coins: number;
		    };
		    sellPrice: {
		        coins: number;
		    };
		    image: string;
		    resourceGroup: string;
		    resourceTag: string;
		    meta: {
		        speed: number;
		        damage: number;
		        accuracy: number;
		        range: number;
		    };
		    initData: {
		        condition: number;
		        bonus: number;
		    };
		    pState: string;
		    publishedAt: number;
		    createdAt: number;
		    updatedAt: number;
		    version: number;
		    stackable: number;
		    consumable: number;
		    uses: any | null;
		    coolDownSecs: number;
		    recoverySecs: number;
		    activatable: number;
		    statusName: any | null;
		    activeSecs: any | null;
		    tradable: number;
		    blockchain: number;
		    blockchainDefId: any | null;
		};
		status: number;
	};


	/**
	 * Retire the specified catalog item on the server.
	 * 
	 * @param  {string} defId Unique ID identifying catalog item.
	 * @param  {number} version Version of catalog item being edited.
	 * @returns ServiceProxyResponse
	 */ 
	sysRetireCatalogItem(defId: string, version: number): {
		data: {
		    defId: string;
		    name: string;
		    desc: string;
		    type: string;
		    category: string;
		    tags: Array<string>;
		    buyPrice: {
		        coins: number;
		    };
		    sellPrice: {
		        coins: number;
		    };
		    image: string;
		    resourceGroup: string;
		    resourceTag: string;
		    meta: {
		        speed: number;
		        damage: number;
		        accuracy: number;
		        range: number;
		    };
		    initData: {
		        condition: number;
		        bonus: number;
		    };
		    pState: string;
		    publishedAt: number;
		    createdAt: number;
		    updatedAt: number;
		    version: number;
		    stackable: number;
		    consumable: number;
		    uses: any | null;
		    coolDownSecs: number;
		    recoverySecs: number;
		    activatable: number;
		    statusName: any | null;
		    activeSecs: any | null;
		    tradable: number;
		    blockchain: number;
		    blockchainDefId: any | null;
		};
		status: number;
	};


	/**
	 * Revoke the specified catalog item on the server.
	 * 
	 * @param  {string} defId Unique ID identifying catalog item.
	 * @param  {number} version Version of catalog item being edited.
	 * @returns ServiceProxyResponse
	 */ 
	sysRevokeCatalogItem(defId: string, version: number): {
		data: {
		    defId: string;
		    name: string;
		    desc: string;
		    type: string;
		    category: string;
		    tags: Array<string>;
		    buyPrice: {
		        coins: number;
		    };
		    sellPrice: {
		        coins: number;
		    };
		    image: string;
		    resourceGroup: string;
		    resourceTag: string;
		    meta: {
		        speed: number;
		        damage: number;
		        accuracy: number;
		        range: number;
		    };
		    initData: {
		        condition: number;
		        bonus: number;
		    };
		    pState: string;
		    publishedAt: number;
		    createdAt: number;
		    updatedAt: number;
		    version: number;
		    stackable: number;
		    consumable: number;
		    uses: any | null;
		    coolDownSecs: number;
		    recoverySecs: number;
		    activatable: number;
		    statusName: any | null;
		    activeSecs: any | null;
		    tradable: number;
		    blockchain: number;
		    blockchainDefId: any | null;
		};
		status: number;
	};


	/**
	 * Copy item image from global file.
	 * 
	 * @param  {string} defId Unique ID identifying catalog item to be updated.
	 * @param  {number} version Version of catalog item being edited.
	 * @param  {string} globalFileId The fileId of the global file.
	 * @param  {boolean} deleteFileAfterwards Whether to delete the source file. i.e. move or copy.
	 * @param  {boolean} overwriteIfPresent Whether to copy over an existing image.
	 * @returns ServiceProxyResponse
	 */ 
	sysCopyItemImageFromGlobalFile(defId: string, version: number, globalFileId: string, deleteFileAfterwards: boolean, overwriteIfPresent: boolean): {
		data: {
		    image: string;
		};
		status: number;
	};


	/**
	 * Copy item image from global file.
	 * 
	 * @param  {string} defId Unique ID identifying catalog item to be updated.
	 * @param  {number} version Version of catalog item being edited.
	 * @param  {string} userProfileId The user file owner name.
	 * @param  {string} userCloudPath The user file folder path.
	 * @param  {string} userCloudFilename The user file name.
	 * @param  {boolean} deleteFileAfterwards Whether to delete the source file. i.e. move or copy.
	 * @param  {boolean} overwriteIfPresent Whether to copy over an existing image.
	 * @returns ServiceProxyResponse
	 */ 
	sysCopyItemImageFromUserFile(defId: string, version: number, userProfileId: string, userCloudPath: string, userCloudFilename: string, deleteFileAfterwards: boolean, overwriteIfPresent: boolean): {
		data: {
		    image: string;
		};
		status: number;
	};


}