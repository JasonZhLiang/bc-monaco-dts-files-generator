/// <reference no-default-lib="true"/>

interface SegmentServiceProxy {
	/**
	 * Returns the segments for the current user - in legacy format (i.e. using the existing, numeric segment ids). Available via cloud-code only.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	getMySegmentsLegacy(): ServiceProxyResponse;

	/**
	 * Refreshes the segments for the current user. Available via cloud-code only.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	refreshMySegments(): ServiceProxyResponse;

	/**
	 * Returns a list of all segments with basic meta-data. i.e. does not include the criteria details.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	sysGetSegmentList(): ServiceProxyResponse;
}