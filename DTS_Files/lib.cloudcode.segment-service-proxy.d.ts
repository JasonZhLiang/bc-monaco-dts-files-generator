/// <reference no-default-lib="true"/>

interface SegmentServiceProxy {
	/**
	 * Returns the segments for the current user - in legacy format (i.e. using the existing, numeric segment ids). Available via cloud-code only.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	getMySegmentsLegacy(): {
    data: 
    {
        segments: Array<
        {
            segmentId: number;
            name: string;
        }>;
    };
    status: number;
};

	/**
	 * Refreshes the segments for the current user. Available via cloud-code only.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	refreshMySegments(): {
    data: 
    {
    };
    status: number;
};

	/**
	 * Returns a list of all segments with basic meta-data. i.e. does not include the criteria details.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	sysGetSegmentList(): {
    data: 
    {
        segments: Array<
        {
            segmentId: number;
            name: string;
            description: string;
            testersOnly: number;
            createdAt: number;
            updatedAt: number;
            version: number;
        }>;
    };
    status: number;
};
}