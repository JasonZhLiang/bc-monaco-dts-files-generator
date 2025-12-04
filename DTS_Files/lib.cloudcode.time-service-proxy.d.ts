/// <reference no-default-lib="true"/>

interface TimeServiceProxy {
	/**
	 * Retrieve the server time in UTC.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	readServerTime(): {
		status: number;
		data: {
		    server_time: number;
		};
	};

}