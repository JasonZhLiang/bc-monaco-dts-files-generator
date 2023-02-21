/// <reference no-default-lib="true"/>

interface ProductManagementServiceProxy {
	/**
	 * Retrieve the full product meta-data for the specified product
	 * 
	 * @param  {string} itemId The item id being requested.
	 * @returns ServiceProxyResponse
	 */ 
	sysReadProduct(itemId: string): ServiceProxyResponse;

	/**
	 * Creates a new product with the specifed values.
	 * 
	 * @param  {nativeObject} productJson The product details.
	 * @returns ServiceProxyResponse
	 */ 
	sysCreateProduct(productJson: nativeObject): ServiceProxyResponse;

	/**
	 * Updates an existing product with the specifed values. Pass -1 as the version to bypass version checking.
	 * 
	 * @param  {string} itemId The product item identifier.
	 * @param  {integer} version The product configuration version.
	 * @param  {nativeObject} productJson The product details to update. Note: If itemId is included in the productJson, it is ignored. The itemId provided as a direct parameter takes priority.
	 * @returns ServiceProxyResponse
	 */ 
	sysUpdateProduct(itemId: string, version: integer, productJson: nativeObject): ServiceProxyResponse;

	/**
	 * Delete the product item.
	 * 
	 * @param  {string} itemId The item id being deleted.
	 * @param  {integer} version The version being validated. Pass -1 to bypass version checking.
	 * @returns ServiceProxyResponse
	 */ 
	sysDeleteProduct(itemId: string, version: integer): ServiceProxyResponse;

	/**
	 * Returns the list of products (summary details only) for the specified category (optional).
	 * 
	 * @param  {string} category Optional. The product item category to filter on. Leave blank or null to retrieve all products.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetProductList(category: string): ServiceProxyResponse;

	/**
	 * Adds a new price to the given product item.
	 * 
	 * @param  {string} itemId The item id being deleted.
	 * @param  {integer} version The version being validated. Pass -1 to bypass version checking.
	 * @param  {nativeObject} priceJson The price details as JSON map.
	 * @returns ServiceProxyResponse
	 */ 
	sysAddProductPrice(itemId: string, version: integer, priceJson: nativeObject): ServiceProxyResponse;

	/**
	 * Updates (replaces) a price for the given product item.
	 * 
	 * @param  {string} itemId The item id being deleted.
	 * @param  {integer} version The version being validated. Pass -1 to bypass version checking.
	 * @param  {integer} priceId The priceId being updated.
	 * @param  {nativeObject} priceJson The price details as JSON map.
	 * @returns ServiceProxyResponse
	 */ 
	sysUpdateProductPrice(itemId: string, version: integer, priceId: integer, priceJson: nativeObject): ServiceProxyResponse;

	/**
	 * Deletes a price for the given product item. If the priceId being deleted is the currently active price, the defaultPriceId will be set to -1 (not-for-sale).
	 * 
	 * @param  {string} itemId The item id being updated.
	 * @param  {integer} version The version being validated. Pass -1 to bypass version checking.
	 * @param  {integer} priceId The priceId being deleted.
	 * @returns ServiceProxyResponse
	 */ 
	sysDeleteProductPrice(itemId: string, version: integer, priceId: integer): ServiceProxyResponse;

	/**
	 * Sets the default (i.e. active) price for the given product item.
	 * 
	 * @param  {string} itemId The item id being updated.
	 * @param  {integer} version The version being validated. Pass -1 to bypass version checking.
	 * @param  {integer} priceId The priceId being set as the default. Pass -1 to make a product item not-for-sale.
	 * @returns ServiceProxyResponse
	 */ 
	sysSetDefaultProductPrice(itemId: string, version: integer, priceId: integer): ServiceProxyResponse;
}