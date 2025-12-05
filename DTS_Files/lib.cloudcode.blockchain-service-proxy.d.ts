/// <reference no-default-lib="true"/>

interface BlockchainServiceProxy {
	/**
	 * Mints an NFT for the caller in response to the given redemption code.
	 * 
	 * @param  {string} integrationId The blockchain integration id. Currently only 'default' is supported.
	 * @param  {string} redemptionCodeId The internal id for the redemption code being redeemed.
	 * @param  {number} attempt The redemption attempt number.
	 * @param  {string} codeType The type of redemption code being redeemed.
	 * @param  {Object} mintDataJson JSON object containing blockchain provider specific data for minting NFTs.
	 * @returns ServiceProxyResponse
	 */ 
	mintNFTFromRedemptionCode(integrationId: string, redemptionCodeId: string, attempt: number, codeType: string, mintDataJson: Object): {
		data: {
		    success: number;
		    response: {
		        transaction_id: string;
		        processed: Record<string, any>;
		    };
		};
		status: number;
	};


	/**
	 * Retrieves the transaction details for the given transaction id.
	 * 
	 * @param  {string} integrationId The blockchain integration id. Currently only 'default' is supported.
	 * @param  {string} transactionId The target transaction id.
	 * @returns ServiceProxyResponse
	 */ 
	getTransaction(integrationId: string, transactionId: string): {
		data: {
		    success: number;
		    response: {
		        transaction_status: string;
		        id: string;
		        transaction: Record<string, any>;
		        execution_trace: Record<string, any>;
		        execution_block_header: Record<string, any>;
		        dtrxops: any | null;
		        creation_tree: Array<any>;
		        dbops: Array<Record<string, any>>;
		        ramops: Array<Record<string, any>>;
		        tableops: any | null;
		        pub_keys: Array<string>;
		        created_by: any | null;
		        canceled_by: any | null;
		        execution_irreversible: number;
		        dtrx_creation_irreversible: number;
		        dtrx_cancelation_irreversible: number;
		    };
		};
		status: number;
	};


	/**
	 * Retrieves the blockchain items owned by the caller.
	 * 
	 * @param  {string} integrationId The blockchain integration id. Currently only 'default' is supported.
	 * @param  {Object} contextJson Optional. Reserved for future use.
	 * @returns ServiceProxyResponse
	 */ 
	getBlockchainItems(integrationId: string, contextJson: Object): {
		data: {
		    success: number;
		    response: {
		        items: Array<Record<string, any>>;
		    };
		};
		status: number;
	};


	/**
	 * Retrieves the uniqs owned by the caller.
	 * 
	 * @param  {string} integrationId The blockchain integration id. Currently only 'default' is supported.
	 * @param  {Object} contextJson Optional. Reserved for future use.
	 * @returns ServiceProxyResponse
	 */ 
	getUniqs(integrationId: string, contextJson: Object): {
		data: {
		    success: number;
		    response: {
		        uniqs: Array<Record<string, any>>;
		    };
		};
		status: number;
	};

}