/// <reference no-default-lib="true"/>

interface PresenceServiceProxy {
	/**
	 * Gets the presence data for the given <friendPlatform>. Can be one of "all", "brainCloud", "facebook" or omitted. Will not include offline profiles unless <includeOffline> is set to true.
	 * 
	 * @param  {String} friendPlatform Gets a list of Presence entries for the specified platform. Use "all" or omit for all platforms.
	 * @param  {Boolean} includeOffline Should offline users be included in the response?
	 * @returns ServiceProxyResponse
	 */ 
	getPresenceOfFriends(friendPlatform: string, includeOffline: boolean): ServiceProxyResponse;

	/**
	 * Gets the presence data for the given <groupId>. Will not include offline profiles unless <includeOffline> is set to true.
	 * 
	 * @param  {String} groupId Gets a list of Presence for the members of the specified group. The caller must be a member of the given group.
	 * @param  {Boolean} includeOffline Should offline users be included in the response?
	 * @returns ServiceProxyResponse
	 */ 
	getPresenceOfGroup(groupId: string, includeOffline: boolean): {
    data: 
    {
        presence: Array<
        {
            user: 
            {
                id: string;
                name: string;
                pic: any | null;
                cxs: Array<string>;
            };
            online: number;
            summaryFriendData: 
            {
            };
            activity: 
            {
            };
        }>;
    };
    status: number;
};

	/**
	 * Gets the presence data for the given <profileIds>. Will not include offline profiles unless <includeOffline> is set to true.
	 * 
	 * @param  {NativeArray} profileIds Gets a list of Presence for the specified profile ids.
	 * @param  {Boolean} includeOffline Should offline users be included in the response?
	 * @returns ServiceProxyResponse
	 */ 
	getPresenceOfUsers(profileIds: Array<any>, includeOffline: boolean): {
    data: 
    {
        presence: Array<
        {
            user: 
            {
                id: string;
                name: string;
                pic: any | null;
                cxs: Array<string>;
            };
            online: number;
            summaryFriendData: 
            {
            };
            activity: 
            {
                LOCATION: string;
                STATUS: string;
            };
        }>;
    };
    status: number;
};

	/**
	 * Update the presence data activity field for the caller.
	 * 
	 * @param  {NativeObject} activity Presence activity record json. Size of the given activity must be equal to or less than the *Max content size (bytes)* app setting (see Messaging > Presence in the portal).
	 * @returns ServiceProxyResponse
	 */ 
	updateActivity(activity: Object): {
    data: any | null;
    status: number;
};

	/**
	 * Update the presence data visible field for the caller.
	 * 
	 * @param  {Boolean} visible Should user appear in presence? True by default.
	 * @returns ServiceProxyResponse
	 */ 
	setVisibility(visible: boolean): {
    data: any | null;
    status: number;
};

	/**
	 * Registers the caller for RTT presence updates from friends for the given <friendPlatform>. Can be one of "all", "brainCloud", or "facebook". If <bidirectional> is set to true, then also registers the targeted users for presence updates from the caller.
	 * 
	 * @param  {String} friendPlatform Presence for friends of the caller on the specified platform. Use "all" or omit for all platforms.
	 * @param  {Boolean} bidirectional Should those profiles be mutually registered to listen to the current profile?
	 * @returns ServiceProxyResponse
	 */ 
	registerListenersForFriends(friendPlatform: string, bidirectional: boolean): ServiceProxyResponse;

	/**
	 * Registers the caller for RTT presence updates from the members of the given <groupId>. The caller must be a member of said group. If <bidirectional> is set to true, then also registers the targeted users for presence updates from the caller.
	 * 
	 * @param  {String} groupId Target group id.
	 * @param  {Boolean} bidirectional Should those profiles be mutually registered to listen to the current profile?
	 * @returns ServiceProxyResponse
	 */ 
	registerListenersForGroup(groupId: string, bidirectional: boolean): {
    data: 
    {
        presence: Array<
        {
            user: 
            {
                id: string;
                name: string;
                pic: any | null;
                cxs: Array<string>;
            };
            online: number;
            summaryFriendData: 
            {
            };
            activity: 
            {
                LOCATION: string;
                STATUS: string;
            };
        }>;
    };
    status: number;
};

	/**
	 * Registers the caller for RTT presence updates for the given <profileIds>. If <bidirectional> is set to true, then also registers the targeted users for presence updates from the caller.
	 * 
	 * @param  {NativeArray} profileIds An array of target profile ids.
	 * @param  {Boolean} bidirectional Should those profiles be mutually registered to listen to the current profile?
	 * @returns ServiceProxyResponse
	 */ 
	registerListenersForProfiles(profileIds: Array<any>, bidirectional: boolean): {
    data: 
    {
        presence: Array<
        {
            user: 
            {
                id: string;
                name: string;
                pic: any | null;
                cxs: Array<string>;
            };
            online: number;
            summaryFriendData: 
            {
            };
            activity: 
            {
                LOCATION: string;
                STATUS: string;
            };
        }>;
    };
    status: number;
};

	/**
	 * Stops the caller from receiving RTT presence updates. Does not affect the broadcasting of *their* presence updates to other listeners.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	stopListening(): {
    data: any | null;
    status: number;
};

	/**
	 * Force an RTT presence update to all listeners of the caller.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	forcePush(): {
    data: any | null;
    status: number;
};

	/**
	 * Creates or updates the presence of <profileId>. <visible> is optional (defaults to true). <activity> is optional. <expirySecs> is optional (defaults to brainCloud property <presPxExpirySecs>).
	 * 
	 * @param  {String} profileId The target profile id.
	 * @param  {Boolean} visible Should user appear in presence? True by default.
	 * @param  {NativeObject} activity Presence activity record json.
	 * @param  {Long} expirySecs Time before this activity record expires.
	 * @returns ServiceProxyResponse
	 */ 
	sysInitializePresence(profileId: string, visible: boolean, activity: Object, expirySecs: number): {
    data: any | null;
    status: number;
};

	/**
	 * Terminates the presence of <profileId>.
	 * 
	 * @param  {String} profileId The target profile id.
	 * @returns ServiceProxyResponse
	 */ 
	sysTerminatePresence(profileId: string): {
    data: any | null;
    status: number;
};

	/**
	 * Extends the presence TTL for <profileId> by <seconds>.
	 * 
	 * @param  {String} profileId The target profile id.
	 * @param  {Long} seconds The number of seconds to extend the px expiry.
	 * @returns ServiceProxyResponse
	 */ 
	sysExtendPxExpiry(profileId: string, seconds: number): {
    data: any | null;
    status: number;
};
}