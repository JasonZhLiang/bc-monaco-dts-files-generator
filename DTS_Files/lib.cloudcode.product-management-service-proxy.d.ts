/// <reference no-default-lib="true"/>

interface ProductManagementServiceProxy {
	/**
	 * Retrieve the full product meta-data for the specified product
	 * 
	 * @param  {String} itemId The item id being requested.
	 * @returns ServiceProxyResponse
	 */ 
	sysReadProduct(itemId: string): {
    data: 
    {
        productDetails: 
        {
            gameId: string;
            itemId: string;
            type: string;
            iTunesSubscriptionType: any | null;
            category: string;
            title: string;
            description: string;
            imageUrl: any | null;
            currency: 
            {
            };
            parentCurrency: 
            {
            };
            peerCurrency: 
            {
                deploypeer: 
                {
                    gems: number;
                };
            };
            defaultPriceId: number;
            prices: Array<
            {
                priceId: number;
                referencePrice: number;
                storeData: 
                {
                    amazon: 
                    {
                        id: string;
                    };
                    facebook: 
                    {
                        currencyList: Array<
                        {
                            currency: string;
                            price: number;
                        }>;
                    };
                    googlePlay: 
                    {
                        id: string;
                    };
                };
            }>;
            data: any | null;
            createdAt: number;
            updatedAt: number;
            version: number;
            absoluteImageUrl: any | null;
        };
    };
    status: number;
};

	/**
	 * Creates a new product with the specifed values.
	 * 
	 * @param  {NativeObject} productJson The product details.
	 * @returns ServiceProxyResponse
	 */ 
	sysCreateProduct(productJson: Object): {
    data: 
    {
        gameId: string;
        itemId: string;
        type: string;
        iTunesSubscriptionType: string;
        category: string;
        title: string;
        description: string;
        imageUrl: string;
        currency: 
        {
            bar: number;
        };
        parentCurrency: 
        {
        };
        peerCurrency: 
        {
            deploypeer: 
            {
                gems: number;
            };
        };
        defaultPriceId: number;
        prices: Array<any>;
        data: 
        {
            customAttr: string;
        };
        createdAt: number;
        updatedAt: number;
        version: number;
        absoluteImageUrl: string;
    };
    status: number;
};

	/**
	 * Updates an existing product with the specifed values. Pass -1 as the version to bypass version checking.
	 * 
	 * @param  {String} itemId The product item identifier.
	 * @param  {Integer} version The product configuration version.
	 * @param  {NativeObject} productJson The product details to update. Note: If itemId is included in the productJson, it is ignored. The itemId provided as a direct parameter takes priority.
	 * @returns ServiceProxyResponse
	 */ 
	sysUpdateProduct(itemId: string, version: number, productJson: Object): {
    data: 
    {
        gameId: string;
        itemId: string;
        type: string;
        iTunesSubscriptionType: string;
        category: string;
        title: string;
        description: string;
        imageUrl: string;
        currency: 
        {
            bar: number;
        };
        parentCurrency: 
        {
        };
        peerCurrency: 
        {
        };
        defaultPriceId: number;
        prices: Array<any>;
        data: 
        {
            customAttr: string;
        };
        createdAt: number;
        updatedAt: number;
        version: number;
        absoluteImageUrl: string;
    };
    status: number;
};

	/**
	 * Delete the product item.
	 * 
	 * @param  {String} itemId The item id being deleted.
	 * @param  {Integer} version The version being validated. Pass -1 to bypass version checking.
	 * @returns ServiceProxyResponse
	 */ 
	sysDeleteProduct(itemId: string, version: number): {
    data: any | null;
    status: number;
};

	/**
	 * Returns the list of products (summary details only) for the specified category (optional).
	 * 
	 * @param  {String} category Optional. The product item category to filter on. Leave blank or null to retrieve all products.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetProductList(category: string): {
    data: 
    {
        products: Array<
        {
            itemId: string;
            defaultReferencePrice: number;
            iTunesSubscriptionType: string;
            data: 
            {
                customAttr: string;
            };
            imageUrl: string;
            description: string;
            title: string;
            category: string;
            type: string;
        }>;
    };
    status: number;
};

	/**
	 * Adds a new price to the given product item.
	 * 
	 * @param  {String} itemId The item id being deleted.
	 * @param  {Integer} version The version being validated. Pass -1 to bypass version checking.
	 * @param  {NativeObject} priceJson The price details as JSON map.
	 * @returns ServiceProxyResponse
	 */ 
	sysAddProductPrice(itemId: string, version: number, priceJson: Object): {
    data: 
    {
        gameId: string;
        itemId: string;
        type: string;
        iTunesSubscriptionType: any | null;
        category: string;
        title: string;
        description: string;
        imageUrl: string;
        currency: 
        {
            bar: number;
        };
        parentCurrency: 
        {
        };
        peerCurrency: 
        {
            deploypeer: 
            {
                gems: number;
            };
        };
        defaultPriceId: number;
        prices: Array<
        {
            priceId: number;
            referencePrice: number;
            storeData: 
            {
                amazon: 
                {
                    id: string;
                };
                itunes: 
                {
                    ids: Array<
                    {
                        appId: string;
                        itunesId: string;
                    }>;
                };
                facebook: 
                {
                    currencyList: Array<
                    {
                        currency: string;
                        price: number;
                    }>;
                };
                googlePlay: 
                {
                    id: string;
                };
            };
        }>;
        data: 
        {
            customAttr: string;
        };
        createdAt: number;
        updatedAt: number;
        version: number;
        absoluteImageUrl: string;
        newPriceId: number;
    };
    status: number;
};

	/**
	 * Updates (replaces) a price for the given product item.
	 * 
	 * @param  {String} itemId The item id being deleted.
	 * @param  {Integer} version The version being validated. Pass -1 to bypass version checking.
	 * @param  {Integer} priceId The priceId being updated.
	 * @param  {NativeObject} priceJson The price details as JSON map.
	 * @returns ServiceProxyResponse
	 */ 
	sysUpdateProductPrice(itemId: string, version: number, priceId: number, priceJson: Object): {
    data: 
    {
        gameId: string;
        itemId: string;
        type: string;
        iTunesSubscriptionType: any | null;
        category: string;
        title: string;
        description: string;
        imageUrl: string;
        currency: 
        {
            bar: number;
        };
        parentCurrency: 
        {
        };
        peerCurrency: 
        {
            deploypeer: 
            {
                gems: number;
            };
        };
        defaultPriceId: number;
        prices: Array<
        {
            priceId: number;
            referencePrice: number;
            storeData: 
            {
                amazon: 
                {
                    id: string;
                };
                itunes: 
                {
                    ids: Array<
                    {
                        appId: string;
                        itunesId: string;
                    }>;
                };
                facebook: 
                {
                    currencyList: Array<
                    {
                        currency: string;
                        price: number;
                    }>;
                };
                googlePlay: 
                {
                    id: string;
                };
            };
        }>;
        data: 
        {
            customAttr: string;
        };
        createdAt: number;
        updatedAt: number;
        version: number;
        absoluteImageUrl: string;
    };
    status: number;
};

	/**
	 * Deletes a price for the given product item. If the priceId being deleted is the currently active price, the defaultPriceId will be set to -1 (not-for-sale).
	 * 
	 * @param  {String} itemId The item id being updated.
	 * @param  {Integer} version The version being validated. Pass -1 to bypass version checking.
	 * @param  {Integer} priceId The priceId being deleted.
	 * @returns ServiceProxyResponse
	 */ 
	sysDeleteProductPrice(itemId: string, version: number, priceId: number): {
    data: 
    {
        gameId: string;
        itemId: string;
        type: string;
        iTunesSubscriptionType: any | null;
        category: string;
        title: string;
        description: string;
        imageUrl: string;
        currency: 
        {
            bar: number;
        };
        parentCurrency: 
        {
        };
        peerCurrency: 
        {
            deploypeer: 
            {
                gems: number;
            };
        };
        defaultPriceId: number;
        prices: Array<
        {
            priceId: number;
            referencePrice: number;
            storeData: 
            {
                amazon: 
                {
                    id: string;
                };
                itunes: 
                {
                    ids: Array<
                    {
                        appId: string;
                        itunesId: string;
                    }>;
                };
                facebook: 
                {
                    currencyList: Array<
                    {
                        currency: string;
                        price: number;
                    }>;
                };
                googlePlay: 
                {
                    id: string;
                };
            };
        }>;
        data: 
        {
            customAttr: string;
        };
        createdAt: number;
        updatedAt: number;
        version: number;
        absoluteImageUrl: string;
    };
    status: number;
};

	/**
	 * Sets the default (i.e. active) price for the given product item.
	 * 
	 * @param  {String} itemId The item id being updated.
	 * @param  {Integer} version The version being validated. Pass -1 to bypass version checking.
	 * @param  {Integer} priceId The priceId being set as the default. Pass -1 to make a product item not-for-sale.
	 * @returns ServiceProxyResponse
	 */ 
	sysSetDefaultProductPrice(itemId: string, version: number, priceId: number): {
    data: 
    {
        gameId: string;
        itemId: string;
        type: string;
        iTunesSubscriptionType: any | null;
        category: string;
        title: string;
        description: string;
        imageUrl: string;
        currency: 
        {
            bar: number;
        };
        parentCurrency: 
        {
        };
        peerCurrency: 
        {
            deploypeer: 
            {
                gems: number;
            };
        };
        defaultPriceId: number;
        prices: Array<
        {
            priceId: number;
            referencePrice: number;
            storeData: 
            {
                amazon: 
                {
                    id: string;
                };
                itunes: 
                {
                    ids: Array<
                    {
                        appId: string;
                        itunesId: string;
                    }>;
                };
                facebook: 
                {
                    currencyList: Array<
                    {
                        currency: string;
                        price: number;
                    }>;
                };
                googlePlay: 
                {
                    id: string;
                };
            };
        }>;
        data: 
        {
            customAttr: string;
        };
        createdAt: number;
        updatedAt: number;
        version: number;
        absoluteImageUrl: string;
    };
    status: number;
};
}