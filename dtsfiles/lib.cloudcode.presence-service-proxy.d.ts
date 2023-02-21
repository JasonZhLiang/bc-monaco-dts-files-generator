/// <reference no-default-lib="true"/>

interface PresenceServiceProxy {
	/**
	 * Gets the presence data for the given <friendPlatform>. Can be one of "all", "brainCloud", "facebook" or omitted. Will not include offline profiles unless <includeOffline> is set to true.
	 * 
	 * @param  {string} friendPlatform Gets a list of Presence entries for the specified platform. Use "all" or omit for all platforms.
	 * @param  {boolean} includeOffline Should offline users be included in the response?
	 * @returns ServiceProxyResponse
	 */ 
	getPresenceOfFriends(friendPlatform: string, includeOffline: boolean): ServiceProxyResponse;

	/**
	 * Gets the presence data for the given <groupId>. Will not include offline profiles unless <includeOffline> is set to true.
	 * 
	 * @param  {string} groupId Gets a list of Presence for the members of the specified group. The caller must be a member of the given group.
	 * @param  {boolean} includeOffline Should offline users be included in the response?
	 * @returns ServiceProxyResponse
	 */ 
	getPresenceOfGroup(groupId: string, includeOffline: boolean): ServiceProxyResponse;

	/**
	 * Gets the presence data for the given <profileIds>. Will not include offline profiles unless <includeOffline> is set to true.
	 * 
	 * @param  {nativeArray} profileIds Gets a list of Presence for the specified profile ids.
	 * @param  {boolean} includeOffline Should offline users be included in the response?
	 * @returns ServiceProxyResponse
	 */ 
	getPresenceOfUsers(profileIds: nativeArray, includeOffline: boolean): ServiceProxyResponse;

	/**
	 * Update the presence data activity field for the caller.
	 * 
	 * @param  {nativeObject} activity Presence activity record json. Size of the given activity must be equal to or less than the *Max content size (bytes)* app setting (see Messaging > Presence in the portal).
	 * @returns ServiceProxyResponse
	 */ 
	updateActivity(activity: nativeObject): ServiceProxyResponse;

	/**
	 * Update the presence data visible field for the caller.
	 * 
	 * @param  {boolean} visible Should user appear in presence? True by default.
	 * @returns ServiceProxyResponse
	 */ 
	setVisibility(visible: boolean): ServiceProxyResponse;

	/**
	 * Registers the caller for RTT presence updates from friends for the given <friendPlatform>. Can be one of "all", "brainCloud", or "facebook". If <bidirectional> is set to true, then also registers the targeted users for presence updates from the caller.
	 * 
	 * @param  {string} friendPlatform Presence for friends of the caller on the specified platform. Use "all" or omit for all platforms.
	 * @param  {boolean} bidirectional Should those profiles be mutually registered to listen to the current profile?
	 * @returns ServiceProxyResponse
	 */ 
	registerListenersForFriends(friendPlatform: string, bidirectional: boolean): ServiceProxyResponse;

	/**
	 * Registers the caller for RTT presence updates from the members of the given <groupId>. The caller must be a member of said group. If <bidirectional> is set to true, then also registers the targeted users for presence updates from the caller.
	 * 
	 * @param  {string} groupId Target group id.
	 * @param  {boolean} bidirectional Should those profiles be mutually registered to listen to the current profile?
	 * @returns ServiceProxyResponse
	 */ 
	registerListenersForGroup(groupId: string, bidirectional: boolean): ServiceProxyResponse;

	/**
	 * Registers the caller for RTT presence updates for the given <profileIds>. If <bidirectional> is set to true, then also registers the targeted users for presence updates from the caller.
	 * 
	 * @param  {nativeArray} profileIds An array of target profile ids.
	 * @param  {boolean} bidirectional Should those profiles be mutually registered to listen to the current profile?
	 * @returns ServiceProxyResponse
	 */ 
	registerListenersForProfiles(profileIds: nativeArray, bidirectional: boolean): ServiceProxyResponse;

	/**
	 * Stops the caller from receiving RTT presence updates. Does not affect the broadcasting of *their* presence updates to other listeners.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	stopListening(): ServiceProxyResponse;

	/**
	 * Force an RTT presence update to all listeners of the caller.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	forcePush(): ServiceProxyResponse;

	/**
	 * Creates or updates the presence of <profileId>. <visible> is optional (defaults to true). <activity> is optional. <expirySecs> is optional (defaults to brainCloud property <presPxExpirySecs>).
	 * 
	 * @param  {string} profileId The target profile id.
	 * @param  {boolean} visible Should user appear in presence? True by default.
	 * @param  {nativeObject} activity Presence activity record json.
	 * @param  {long} expirySecs Time before this activity record expires.
	 * @returns ServiceProxyResponse
	 */ 
	sysInitializePresence(profileId: string, visible: boolean, activity: nativeObject, expirySecs: long): ServiceProxyResponse;

	/**
	 * Terminates the presence of <profileId>.
	 * 
	 * @param  {string} profileId The target profile id.
	 * @returns ServiceProxyResponse
	 */ 
	sysTerminatePresence(profileId: string): ServiceProxyResponse;

	/**
	 * Extends the presence TTL for <profileId> by <seconds>.
	 * 
	 * @param  {string} profileId The target profile id.
	 * @param  {long} seconds The number of seconds to extend the px expiry.
	 * @returns ServiceProxyResponse
	 */ 
	sysExtendPxExpiry(profileId: string, seconds: long): ServiceProxyResponse;
}