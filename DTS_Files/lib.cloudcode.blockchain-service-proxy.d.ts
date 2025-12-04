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
		        processed: {
		            id: string;
		            block_num: number;
		            block_time: string;
		            producer_block_id: any | null;
		            receipt: {
		                status: string;
		                cpu_usage_us: number;
		                net_usage_words: number;
		            };
		            elapsed: number;
		            net_usage: number;
		            scheduled: number;
		            action_traces: Array<{
		                action_ordinal: number;
		                creator_action_ordinal: number;
		                closest_unnotified_ancestor_action_ordinal: number;
		                receipt: {
		                    receiver: string;
		                    act_digest: string;
		                    global_sequence: number;
		                    recv_sequence: number;
		                    auth_sequence: Array<any>;
		                    code_sequence: number;
		                    abi_sequence: number;
		                };
		                receiver: string;
		                act: {
		                    account: string;
		                    name: string;
		                    authorization: Array<{
		                        actor: string;
		                        permission: string;
		                    }>;
		                    data: {
		                        issue: {
		                            to: string;
		                            token_configs: Array<{
		                                token_factory_id: number;
		                                amount: number;
		                                custom_data: string;
		                            }>;
		                            memo: string;
		                        };
		                    };
		                    hex_data: string;
		                };
		                context_free: number;
		                elapsed: number;
		                console: string;
		                trx_id: string;
		                block_num: number;
		                block_time: string;
		                producer_block_id: any | null;
		                account_ram_deltas: Array<{
		                    account: string;
		                    delta: number;
		                }>;
		                except: any | null;
		                error_code: any | null;
		                inline_traces: Array<any>;
		            }>;
		            account_ram_delta: any | null;
		            except: any | null;
		            error_code: any | null;
		        };
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
		        transaction: {
		            expiration: string;
		            ref_block_num: number;
		            ref_block_prefix: number;
		            max_net_usage_words: number;
		            max_cpu_usage_ms: number;
		            delay_sec: number;
		            context_free_actions: any | null;
		            actions: Array<{
		                account: string;
		                name: string;
		                authorization: Array<{
		                    actor: string;
		                    permission: string;
		                }>;
		                hex_data: string;
		            }>;
		            transaction_extensions: any | null;
		            signatures: Array<string>;
		            context_free_data: Array<any>;
		        };
		        execution_trace: {
		            id: string;
		            block_num: number;
		            block_time: string;
		            producer_block_id: string;
		            receipt: {
		                status: string;
		                cpu_usage_us: number;
		                net_usage_words: number;
		            };
		            elapsed: number;
		            net_usage: number;
		            scheduled: number;
		            action_traces: Array<{
		                action_ordinal: number;
		                creator_action_ordinal: number;
		                closest_unnotified_ancestor_action_ordinal: number;
		                receipt: {
		                    receiver: string;
		                    act_digest: string;
		                    global_sequence: number;
		                    recv_sequence: number;
		                    auth_sequence: Array<any>;
		                    code_sequence: number;
		                    abi_sequence: number;
		                };
		                act: {
		                    account: string;
		                    name: string;
		                    authorization: Array<{
		                        actor: string;
		                        permission: string;
		                    }>;
		                    data: {
		                        issue: {
		                            memo: string;
		                            to: string;
		                            token_configs: Array<{
		                                amount: number;
		                                custom_data: string;
		                                token_factory_id: number;
		                            }>;
		                        };
		                    };
		                    hex_data: string;
		                };
		                context_free: number;
		                elapsed: number;
		                console: string;
		                trx_id: string;
		                block_num: number;
		                block_time: string;
		                producer_block_id: string;
		                account_ram_deltas: Array<{
		                    account: string;
		                    delta: number;
		                }>;
		                except: any | null;
		                receiver: string;
		                inline_traces: Array<any>;
		            }>;
		            failed_dtrx_trace: any | null;
		            except: any | null;
		        };
		        execution_block_header: {
		            timestamp: string;
		            producer: string;
		            confirmed: number;
		            previous: string;
		            transaction_mroot: string;
		            action_mroot: string;
		            schedule_version: number;
		            header_extensions: any | null;
		        };
		        dtrxops: any | null;
		        creation_tree: Array<any>;
		        dbops: Array<{
		            op: string;
		            action_idx: number;
		            account: string;
		            table: string;
		            key: string;
		            old: {
		                payer: string;
		                hex: string;
		            };
		            new: {
		                payer: string;
		                hex: string;
		            };
		        }>;
		        ramops: Array<{
		            op: string;
		            action_idx: number;
		            payer: string;
		            delta: number;
		            usage: number;
		        }>;
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
		        items: Array<{
		            key: string;
		            payer: string;
		            json: {
		                id: number;
		                mint_date: string;
		                serial_number: number;
		                token_factory_id: number;
		            };
		        }>;
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
		        uniqs: Array<{
		            key: string;
		            payer: string;
		            json: {
		                id: number;
		                mint_date: string;
		                serial_number: number;
		                token_factory_id: number;
		            };
		        }>;
		    };
		};
		status: number;
	};

}