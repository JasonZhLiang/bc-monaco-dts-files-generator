/// <reference no-default-lib="true"/>

interface UserItemsServiceProxy {
	/**
	 * Retrieves the identified user item from the server. If includeDef is true, response includes associated itemDef with language fields limited to the current or default language.
	 * 
	 * @param  {string} itemId The unique id of the user item.
	 * @param  {boolean} includeDef If true, the associated item definition will be included in the response.
	 * @returns ServiceProxyResponse
	 */ 
	getUserItem(itemId: string, includeDef: boolean): {
		data: {
		    item: {
		        itemId: string;
		        defId: string;
		        quantity: number;
		        usesLeft: any | null;
		        coolDownStart: number;
		        recoveryStart: number;
		        itemData: {
		        };
		        giftedTo: any | null;
		        giftedFrom: any | null;
		        blockId: any | null;
		        createdAt: number;
		        updatedAt: number;
		        version: number;
		        maxUses: any | null;
		        coolDownUntil: number;
		        recoveryUntil: number;
		        itemDef: {
		            defId: string;
		            name: string;
		            desc: string;
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
		            pState: string;
		            publishedAt: number;
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
		    };
		};
		status: number;
	};


	/**
	 * Retrieves the page of user's inventory from the server based on the context. If includeDef is true, response includes associated itemDef with each user item, with language fields limited to the current or default language.
	 * 
	 * @param  {Object} context The json context for the page request.
	 * @param  {boolean} includeDef If true, the associated item definition will be included in the response.
	 * @returns ServiceProxyResponse
	 */ 
	getUserItemsPage(context: Object, includeDef: boolean): {
		data: {
		    context: string;
		    results: {
		        count: number;
		        page: number;
		        items: Array<{
		            itemId: string;
		            defId: string;
		            quantity: number;
		            usesLeft: any | null;
		            coolDownStart: number;
		            recoveryStart: number;
		            itemData: {
		            };
		            giftedTo: any | null;
		            giftedFrom: any | null;
		            blockId: any | null;
		            createdAt: number;
		            updatedAt: number;
		            version: number;
		            maxUses: any | null;
		            coolDownUntil: number;
		            recoveryUntil: number;
		            itemDef: {
		                defId: string;
		                name: string;
		                desc: string;
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
		                pState: string;
		                publishedAt: number;
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
		        }>;
		        moreAfter: number;
		        moreBefore: number;
		    };
		};
		status: number;
	};


	/**
	 * Retrieves the page of user's inventory from the server based on the encoded context. If includeDef is true, response includes associated itemDef with each user item, with language fields limited to the current or default language.
	 * 
	 * @param  {string} context The context string returned from the server from a previous call to GetUserItemsPage or GetUserItemsPageOffset.
	 * @param  {number} pageOffset The positive or negative page offset to fetch. Uses the last page retrieved using the context string to determine a starting point.
	 * @param  {boolean} includeDef If true, the associated item definition will be included in the response.
	 * @returns ServiceProxyResponse
	 */ 
	getUserItemsPageOffset(context: string, pageOffset: number, includeDef: boolean): {
		data: {
		    context: string;
		    results: {
		        count: number;
		        page: number;
		        items: Array<any>;
		        moreAfter: number;
		        moreBefore: number;
		    };
		};
		status: number;
	};


	/**
	 * Allows item(s) to be awarded to a user without collecting the purchase amount. If includeDef is true, response includes associated itemDef with language fields limited to the current or default language.
	 * 
	 * @param  {string} defId The unique id of the item definition to award.
	 * @param  {number} quantity The quantity of the item to award.
	 * @param  {boolean} includeDef If true, the associated item definition will be included in the response.
	 * @returns ServiceProxyResponse
	 */ 
	awardUserItem(defId: string, quantity: number, includeDef: boolean): {
		data: {
		    items: {
		        d01c70b8b1a1457eba14dd52909ffc4a: {
		            itemId: string;
		            defId: string;
		            quantity: number;
		            usesLeft: any | null;
		            coolDownStart: number;
		            recoveryStart: number;
		            itemData: {
		                exp: number;
		            };
		            giftedTo: any | null;
		            giftedFrom: any | null;
		            blockId: any | null;
		            createdAt: number;
		            updatedAt: number;
		            version: number;
		            maxUses: any | null;
		            coolDownUntil: number;
		            recoveryUntil: number;
		            itemDef: {
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
		                pState: string;
		                publishedAt: number;
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
		        };
		    };
		};
		status: number;
	};


	/**
	 * Allows item(s) to be awarded to a user without collecting the purchase amount. If includeDef is true, response includes associated itemDef with language fields limited to the current or default language. Additional 'optionsJson' to provide directives for processing, especially relevant for BUNDLE type awarding.
	 * 
	 * @param  {string} defId The unique id of the item definition to award.
	 * @param  {number} quantity The quantity of the item to award.
	 * @param  {boolean} includeDef If true, the associated item definition will be included in the response.
	 * @param  {Object} optionsJson Optional support for specifying additional options, especially for awarding BUNDLE type items. Option 'blockIfExceedItemMaxStackable' indicating how to process the awarding if the defId is for a stackable item with a max stackable quantity and the specified quantity being purchased is too high - If true and the quantity is too high, the call is blocked and an error is returned. If false (default) and quantity is too high, the quantity is adjusted to the allowed maximum and the quantity not awarded is reported in response key 'itemsNotPurchased' - unless the adjusted quantity would be 0, in which case the call is blocked and an error is returned. Option 'blockIfExceedBundleContentItemMaxStackable' - If true, fail the award if quantity of bundle content item would be in excess of its maxStackable IF the bundle were to be opened immediately (based on its currenct quantity). If false, just report the excess quantity for any item if the bundle were opened immediately.
	 * @returns ServiceProxyResponse
	 */ 
	awardUserItemWithOptions(defId: string, quantity: number, includeDef: boolean, optionsJson: Object): {
		data: {
		    items: {
		        3f980b72e9b0421ca23b09f4a297432f: {
		            itemId: string;
		            defId: string;
		            type: string;
		            quantity: number;
		            itemData: {
		            };
		            giftedTo: any | null;
		            giftedFrom: any | null;
		            createdAt: number;
		            updatedAt: number;
		            version: number;
		            usesLeft: any | null;
		            coolDownStart: number;
		            recoveryStart: number;
		            maxUses: any | null;
		            coolDownUntil: number;
		            recoveryUntil: number;
		            itemDef: {
		                defId: string;
		                name: string;
		                desc: string;
		                type: string;
		                category: string;
		                tags: Array<string>;
		                buyPriceDisabled: number;
		                buyPrice: {
		                    coins: number;
		                };
		                sellPrice: {
		                    coins: number;
		                };
		                image: any | null;
		                resourceGroup: string;
		                resourceTag: string;
		                meta: any | null;
		                pState: string;
		                publishedAt: number;
		                stackable: number;
		                maxStackable: any | null;
		                tradable: number;
		                blockchain: number;
		                consumable: number;
		                uses: any | null;
		                coolDownSecs: number;
		                recoverySecs: number;
		                activatable: number;
		                statusName: any | null;
		                activeSecs: any | null;
		                maxActiveSecs: any | null;
		                statusBehaviour: any | null;
		            };
		        };
		    };
		};
		status: number;
	};


	/**
	 * Client cloud code only call to allow item(s) to be awarded to the session user without collecting the purchase amount. If includeDef is true, response includes associated itemDef with language fields limited to the current or default language. Additional 'optionsJson' to provide directives for processing, especially relevant for BUNDLE type awarding.
	 * 
	 * @param  {string} defId The unique id of the item definition to award.
	 * @param  {number} quantity The quantity of the item to award.
	 * @param  {boolean} includeDef If true, the associated item definition will be included in the response.
	 * @param  {Object} optionsJson Optional support for specifying additional options, especially for awarding BUNDLE type items. Option 'blockIfExceedItemMaxStackable' indicating how to process the awarding if the defId is for a stackable item with a max stackable quantity and the specified quantity being purchased is too high - If true and the quantity is too high, the call is blocked and an error is returned. If false (default) and quantity is too high, the quantity is adjusted to the allowed maximum and the quantity not awarded is reported in response key 'itemsNotPurchased' - unless the adjusted quantity would be 0, in which case the call is blocked and an error is returned. Option 'blockIfExceedBundleContentItemMaxStackable' - If true, fail the award if quantity of bundle content item would be in excess of its maxStackable IF the bundle were to be opened immediately (based on its currenct quantity). If false, just report the excess quantity for any item if the bundle were opened immediately.
	 * @returns ServiceProxyResponse
	 */ 
	sysAwardUserItem(defId: string, quantity: number, includeDef: boolean, optionsJson: Object): {
		data: {
		    quantity: number;
		    items: {
		        5e3d9c33174c48269b52d911d56c7671: {
		            itemId: string;
		            defId: string;
		            type: string;
		            quantity: number;
		            itemData: {
		            };
		            giftedTo: any | null;
		            giftedFrom: any | null;
		            createdAt: number;
		            updatedAt: number;
		            version: number;
		            usesLeft: any | null;
		            coolDownStart: number;
		            recoveryStart: number;
		            maxUses: any | null;
		            coolDownUntil: number;
		            recoveryUntil: number;
		            itemDef: {
		                defId: string;
		                name: string;
		                desc: any | null;
		                type: string;
		                category: string;
		                tags: any | null;
		                buyPriceDisabled: number;
		                buyPrice: {
		                };
		                sellPrice: {
		                };
		                image: string;
		                resourceGroup: any | null;
		                resourceTag: any | null;
		                meta: {
		                };
		                pState: string;
		                publishedAt: number;
		                stackable: number;
		                maxStackable: any | null;
		                tradable: number;
		                blockchain: number;
		                consumable: number;
		                uses: any | null;
		                coolDownSecs: number;
		                recoverySecs: number;
		                activatable: number;
		                statusName: any | null;
		                activeSecs: any | null;
		                maxActiveSecs: any | null;
		                statusBehaviour: any | null;
		            };
		        };
		    };
		};
		status: number;
	};


	/**
	 * Client cloud code only Sys API to allow item(s) to be awarded to the applicable user without collecting the purchase amount. If includeDef is true, response includes associated itemDef with language fields limited to the current or default language. Additional 'optionsJson' to provide directives for processing, especially relevant for BUNDLE type awarding.
	 * 
	 * @param  {string} profileId The profile id of the user being awarded the user item.
	 * @param  {string} defId The unique id of the item definition to award.
	 * @param  {number} quantity The quantity of the item to award.
	 * @param  {boolean} includeDef If true, the associated item definition will be included in the response.
	 * @param  {Object} optionsJson Optional support for specifying additional options, especially for awarding BUNDLE type items. Option 'blockIfExceedItemMaxStackable' indicating how to process the awarding if the defId is for a stackable item with a max stackable quantity and the specified quantity being purchased is too high - If true and the quantity is too high, the call is blocked and an error is returned. If false (default) and quantity is too high, the quantity is adjusted to the allowed maximum and the quantity not awarded is reported in response key 'itemsNotPurchased' - unless the adjusted quantity would be 0, in which case the call is blocked and an error is returned. Option 'blockIfExceedBundleContentItemMaxStackable' - If true, fail the award if quantity of bundle content item would be in excess of its maxStackable IF the bundle were to be opened immediately (based on its currenct quantity). If false, just report the excess quantity for any item if the bundle were opened immediately.
	 * @returns ServiceProxyResponse
	 */ 
	sysAwardUserItemToUser(profileId: string, defId: string, quantity: number, includeDef: boolean, optionsJson: Object): {
		data: {
		    quantity: number;
		    items: {
		        ad2a0f811efc4c76a8f4608c6efb488d: {
		            itemId: string;
		            defId: string;
		            type: string;
		            quantity: number;
		            itemData: {
		            };
		            giftedTo: any | null;
		            giftedFrom: any | null;
		            createdAt: number;
		            updatedAt: number;
		            version: number;
		            usesLeft: any | null;
		            coolDownStart: number;
		            recoveryStart: number;
		            maxUses: any | null;
		            coolDownUntil: number;
		            recoveryUntil: number;
		            itemDef: {
		                defId: string;
		                name: string;
		                desc: any | null;
		                type: string;
		                category: string;
		                tags: any | null;
		                buyPriceDisabled: number;
		                buyPrice: {
		                };
		                sellPrice: {
		                };
		                image: string;
		                resourceGroup: any | null;
		                resourceTag: any | null;
		                meta: {
		                };
		                pState: string;
		                publishedAt: number;
		                stackable: number;
		                maxStackable: any | null;
		                tradable: number;
		                blockchain: number;
		                consumable: number;
		                uses: any | null;
		                coolDownSecs: number;
		                recoverySecs: number;
		                activatable: number;
		                statusName: any | null;
		                activeSecs: any | null;
		                maxActiveSecs: any | null;
		                statusBehaviour: any | null;
		            };
		        };
		    };
		};
		status: number;
	};


	/**
	 * Allows a quantity of a specified user item to be dropped, without any recovery of the money paid for the item. If any quantity of the user item remains, it will be returned, potentially with the associated itemDef (with language fields limited to the current or default language).
	 * 
	 * @param  {string} itemId The unique id of the user item.
	 * @param  {number} quantity The quantity of the user item to drop.
	 * @param  {boolean} includeDef If true and any quantity of the user item remains, the associated item definition will be included in the response.
	 * @returns ServiceProxyResponse
	 */ 
	dropUserItem(itemId: string, quantity: number, includeDef: boolean): {
		data: {
		    item: {
		    };
		};
		status: number;
	};


	/**
	 * Purchases a quantity of an item from the specified store, if the user has enough funds and purchasing for listed buy price is not disabled for associated catalog item definition. If includeDef is true, response includes associated itemDef with language fields limited to the current or default language.
	 * 
	 * @param  {string} defId The unique id of the item definition to purchase.
	 * @param  {number} quantity The quantity of the item to purchase.
	 * @param  {string} shopId The id identifying the store the item is being purchased from, if applicable.
	 * @param  {boolean} includeDef If true, the associated item definition will be included in the response.
	 * @returns ServiceProxyResponse
	 */ 
	purchaseUserItem(defId: string, quantity: number, shopId: string, includeDef: boolean): {
		data: {
		    items: {
		        8e12e9073f544971b84ab685ce50b684: {
		            itemId: string;
		            defId: string;
		            quantity: number;
		            usesLeft: any | null;
		            coolDownStart: number;
		            recoveryStart: number;
		            itemData: {
		            };
		            giftedTo: any | null;
		            giftedFrom: any | null;
		            blockId: any | null;
		            createdAt: number;
		            updatedAt: number;
		            version: number;
		            maxUses: any | null;
		            coolDownUntil: number;
		            recoveryUntil: number;
		            itemDef: {
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
		                };
		                image: any | null;
		                resourceGroup: any | null;
		                resourceTag: any | null;
		                meta: {
		                };
		                pState: string;
		                publishedAt: number;
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
		        };
		    };
		    currencySpent: {
		        coins: number;
		    };
		    currencyBalances: {
		        createdAt: number;
		        currencyMap: {
		            coins: {
		                consumed: number;
		                balance: number;
		                purchased: number;
		                awarded: number;
		            };
		        };
		        playerId: string;
		        updatedAt: number;
		    };
		};
		status: number;
	};


	/**
	 * Purchases a quantity of an item from the specified store, if the user has enough funds and purchasing for listed buy price is not disabled for associated catalog item definition. If includeDef is true, response includes associated itemDef with language fields limited to the current or default language. Additional 'optionsJson' to provide directives for processing, especially relevant for BUNDLE type awarding.
	 * 
	 * @param  {string} defId The unique id of the item definition to purchase.
	 * @param  {number} quantity The quantity of the item to purchase.
	 * @param  {string} shopId The id identifying the store the item is being purchased from, if applicable.
	 * @param  {boolean} includeDef If true, the associated item definition will be included in the response.
	 * @param  {Object} optionsJson Optional support for specifying 'blockIfExceedItemMaxStackable' indicating how to process the purchase if the defId is for a stackable item with a max stackable quantity and the specified quantity being purchased is too high - If true and the quantity is too high, the call is blocked and an error is returned. If false (default) and quantity is too high, the quantity is adjusted to the allowed maximum and the quantity not purchased is reported in response key 'itemsNotPurchased' - unless the adjusted quantity would be 0, in which case the call is blocked and an error is returned. And option 'blockIfExceedBundleContentItemMaxStackable' - If true, fail the purchase if quantity of bundle content item would be in excess of its maxStackable IF the bundle were to be opened immediately (based on its currenct quantity). If false, just report the excess quantity for any item if the bundle were opened immediately.
	 * @returns ServiceProxyResponse
	 */ 
	purchaseUserItemWithOptions(defId: string, quantity: number, shopId: string, includeDef: boolean, optionsJson: Object): ServiceProxyResponse;


	/**
	 * Allows a quantity of a specified user item to be sold, if selling is not disabled for associated catalog item definition. If any quantity of the user item remains, it will be returned, potentially with the associated itemDef (with language fields limited to the current or default language), along with the currency refunded and currency balances.
	 * 
	 * @param  {string} itemId The unique id of the user item.
	 * @param  {number} version The version of the user item being sold.
	 * @param  {number} quantity The quantity of the user item to sell.
	 * @param  {string} shopId The id identifying the store the item is being sold to, if applicable.
	 * @param  {boolean} includeDef If true and any quantity of the user item remains, the associated item definition will be included in the response.
	 * @returns ServiceProxyResponse
	 */ 
	sellUserItem(itemId: string, version: number, quantity: number, shopId: string, includeDef: boolean): {
		data: {
		    item: {
		    };
		    currencyRefunded: {
		        coins: number;
		    };
		    currencyBalances: {
		        createdAt: number;
		        currencyMap: {
		            coins: {
		                consumed: number;
		                balance: number;
		                purchased: number;
		                awarded: number;
		            };
		        };
		        playerId: string;
		        updatedAt: number;
		    };
		};
		status: number;
	};


	/**
	 * Gifts item to the specified player.
	 * 
	 * @param  {string} profileId The ID of the recipient's user profile.
	 * @param  {string} itemId The ID uniquely identifying the user item to be transferred.
	 * @param  {number} version The version of the user item being transferred.
	 * @param  {number} quantity The quantity of the user item to transfer.
	 * @param  {boolean} immediate Flag set to true if item is to be immediately transferred, otherwise false to have the recipient sent an event and transfer item only when recipient calls receiveUserItemFrom.
	 * @returns ServiceProxyResponse
	 */ 
	giveUserItemTo(profileId: string, itemId: string, version: number, quantity: number, immediate: boolean): {
		data: {
		    item: {
		        itemId: string;
		        defId: string;
		        quantity: number;
		        usesLeft: any | null;
		        coolDownStart: number;
		        recoveryStart: number;
		        itemData: {
		        };
		        giftedTo: string;
		        giftedFrom: string;
		        blockId: any | null;
		        createdAt: number;
		        updatedAt: number;
		        version: number;
		        maxUses: any | null;
		        coolDownUntil: number;
		        recoveryUntil: number;
		        itemDef: {
		        };
		    };
		    giftItemId: string;
		};
		status: number;
	};


	/**
	 * Retrieves and transfers the gift item from the specified player, who must have previously called giveUserItemTo with immediate false.
	 * 
	 * @param  {string} profileId The profile ID of the user who is giving the item.
	 * @param  {string} itemId The ID uniquely identifying the user item to be transferred.
	 * @returns ServiceProxyResponse
	 */ 
	receiveUserItemFrom(profileId: string, itemId: string): {
		data: {
		    item: {
		        itemId: string;
		        defId: string;
		        quantity: number;
		        usesLeft: any | null;
		        coolDownStart: number;
		        recoveryStart: number;
		        itemData: {
		        };
		        giftedTo: any | null;
		        giftedFrom: any | null;
		        blockId: any | null;
		        createdAt: number;
		        updatedAt: number;
		        version: number;
		        maxUses: any | null;
		        coolDownUntil: number;
		        recoveryUntil: number;
		        itemDef: {
		        };
		    };
		};
		status: number;
	};


	/**
	 * Updates the item data on the specified user item.
	 * 
	 * @param  {string} itemId The unique id of the user item.
	 * @param  {number} version The version of the user item being updated.
	 * @param  {Object} newItemData New item data to replace existing user item data.
	 * @returns ServiceProxyResponse
	 */ 
	updateUserItemData(itemId: string, version: number, newItemData: Object): {
		data: {
		    item: {
		        itemId: string;
		        defId: string;
		        quantity: number;
		        usesLeft: any | null;
		        coolDownStart: number;
		        recoveryStart: number;
		        itemData: {
		            condition: number;
		            bonus: number;
		        };
		        giftedTo: any | null;
		        giftedFrom: any | null;
		        blockId: any | null;
		        createdAt: number;
		        updatedAt: number;
		        version: number;
		        maxUses: any | null;
		        coolDownUntil: number;
		        recoveryUntil: number;
		        itemDef: {
		        };
		    };
		};
		status: number;
	};


	/**
	 * Uses the specified item, of type 'ITEM', potentially consuming it.
	 * 
	 * @param  {string} itemId The unique id of the user item. Must be of type 'ITEM'.
	 * @param  {number} version The version of the user item being used.
	 * @param  {Object} newItemData Optional item data to replace existing user item data. Specify null to leave item data unchanged. Specify empty map to clear item data.
	 * @param  {boolean} includeDef If true, the associated item definition will be included in the response.
	 * @returns ServiceProxyResponse
	 */ 
	useUserItem(itemId: string, version: number, newItemData: Object, includeDef: boolean): {
		data: {
		    used: number;
		    statusEffects: {
		        activeStart: number;
		        statusName: string;
		        details: {
		        };
		        activeUntil: number;
		    };
		    item: {
		        itemId: string;
		        defId: string;
		        quantity: number;
		        usesLeft: any | null;
		        coolDownStart: number;
		        recoveryStart: number;
		        itemData: {
		            condition: number;
		            bonus: number;
		        };
		        giftedTo: any | null;
		        giftedFrom: any | null;
		        blockId: any | null;
		        createdAt: number;
		        updatedAt: number;
		        version: number;
		        maxUses: any | null;
		        coolDownUntil: number;
		        recoveryUntil: number;
		        itemDef: {
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
		            pState: string;
		            publishedAt: number;
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
		    };
		};
		status: number;
	};


	/**
	 * Allows a quantity of a specified bundle user item to be opened. Response indicates any items and currency awards configured for the associated bundle user item's BUNDLE type item definition, plus any 'items' awarded and any 'currencies' awarded, along with the resulting currency balances. If includeItemDef is true, the associated item definition will be included in the response for any user items awarded and for the bundle user item being opened (if any quantity of the bundle user item remains), with language fields limited to the current or default language).
	 * 
	 * @param  {string} itemId The unique id of the bundle user item.
	 * @param  {number} version The version of the bundle user item being sold. Accepts -1 if any version.
	 * @param  {number} quantity The quantity of the bundle user item to open.
	 * @param  {boolean} includeDef If true, the associated item definition will be included in the response for any user items awarded and if any quantity of the bundle user item remains.
	 * @param  {Object} optionsJson Optional support for specifying 'blockIfExceedItemMaxStackable' indicating how to process awarding the bundle content items if the defId for any is for a stackable item with a max stackable quantity and the specified quantity to be awarded is too high. If true and the quantity is too high, the call is blocked and an error is returned. If false (default) and quantity is too high, the quantity is adjusted to the allowed maximum and the quantity not awarded is reported in response key 'itemsNotAwarded' - unless the adjusted quantity would be 0, in which case the call is blocked and an error is returned.
	 * @returns ServiceProxyResponse
	 */ 
	openBundle(itemId: string, version: number, quantity: number, includeDef: boolean, optionsJson: Object): {
		data: {
		    quantity: number;
		    itemsNotAwarded: {
		        s001: number;
		        sword001: number;
		    };
		    itemDef: {
		        defId: string;
		        name: string;
		        desc: string;
		        type: string;
		        category: string;
		        tags: Array<string>;
		        buyPriceDisabled: number;
		        buyPrice: {
		        };
		        sellPrice: {
		        };
		        image: any | null;
		        resourceGroup: any | null;
		        resourceTag: any | null;
		        meta: any | null;
		        pState: string;
		        publishedAt: number;
		        stackable: number;
		        maxStackable: any | null;
		        tradable: number;
		        blockchain: number;
		        autoOpen: number;
		        items: {
		            s001: {
		                defId: string;
		                quantity: number;
		            };
		            sword001: {
		                defId: string;
		                quantity: number;
		            };
		        };
		    };
		    items: {
		    };
		};
		status: number;
	};


	/**
	 * Publishes the specified item to the item management attached blockchain. Results are reported asynchronously via an RTT event.
	 * 
	 * @param  {string} itemId The unique id of the user item.
	 * @param  {number} version The version of the user item being published.
	 * @returns ServiceProxyResponse
	 */ 
	publishUserItemToBlockchain(itemId: string, version: number): ServiceProxyResponse;


	/**
	 * Syncs the caller's user items with the item management attached blockchain. Results are reported asynchronously via an RTT event.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	refreshBlockchainUserItems(): ServiceProxyResponse;


	/**
	 * Removes the specified item from the item management attached blockchain. Results are reported asynchronously via an RTT event.
	 * 
	 * @param  {string} itemId The unique id of the user item.
	 * @param  {number} version The version of the user item being removed.
	 * @returns ServiceProxyResponse
	 */ 
	removeUserItemFromBlockchain(itemId: string, version: number): {
		status: number;
		data: any | null;
	};


	/**
	 * Returns list of promotional details for the specified item definition, for promotions available to the current user.
	 * 
	 * @param  {string} defId The unique id of the item definition to check.
	 * @param  {string} shopId The id identifying the store the item is from, if applicable.
	 * @param  {boolean} includeDef If true, the associated item definition will be included in the response.
	 * @param  {boolean} includePromotionDetails If true, the promotion details will be included in the response.
	 * @returns ServiceProxyResponse
	 */ 
	getItemPromotionDetails(defId: string, shopId: string, includeDef: boolean, includePromotionDetails: boolean): ServiceProxyResponse;


	/**
	 * Returns list of promotional details for the specified item definition, for promotions available to the current user.
	 * 
	 * @param  {string} shopId The id identifying the store the item is from, if applicable.
	 * @param  {boolean} includeDef If true, the associated item definition info of the promotional items will be included in the response.
	 * @param  {boolean} includePromotionDetails If true, the promotion details of the eligible promotions will be included in the response.
	 * @returns ServiceProxyResponse
	 */ 
	getItemsOnPromotion(shopId: string, includeDef: boolean, includePromotionDetails: boolean): {
		data: {
		    items: Array<{
		        defId: string;
		        itemDef: {
		            resourceGroup: any | null;
		            sellPrice: {
		            };
		            type: string;
		            coolDownSecs: number;
		            recoverySecs: number;
		            statusName: any | null;
		            buyPrice: {
		                bar: number;
		            };
		            image: any | null;
		            stackable: number;
		            publishedAt: number;
		            pState: string;
		            activatable: number;
		            tags: any | null;
		            defId: string;
		            maxStackable: number;
		            blockchain: number;
		            meta: any | null;
		            consumable: number;
		            name: {
		                en: string;
		            };
		            tradable: number;
		            resourceTag: any | null;
		            uses: any | null;
		            _id: {
		                timestamp: number;
		                date: number;
		            };
		            activeSecs: any | null;
		            category: string;
		            desc: {
		                en: string;
		            };
		        };
		        winningPromotionId: number;
		        promotionPrices: Array<{
		            promotionPrice: {
		                bar: number;
		            };
		            name: string;
		            type: string;
		            promotionId: number;
		        }>;
		    }>;
		    promotionDetails: Array<{
		        promotionId: number;
		        type: string;
		        name: string;
		        duration: number;
		        customJson: {
		            priority: number;
		            itemIds: {
		                barBundle1Imp: {
		                    currency: {
		                        bars: number;
		                    };
		                    extra: {
		                        specialItemReward: string;
		                    };
		                };
		                gemcollection: {
		                    currency: {
		                        gems: number;
		                    };
		                    extra: {
		                        specialItemReward: string;
		                    };
		                };
		            };
		        };
		        isRetriggerable: number;
		        maxRetriggers: any | null;
		        maxPurchases: any | null;
		        triggeredForUserAt: number;
		        expiresForUserAt: number;
		    }>;
		};
		status: number;
	};

}