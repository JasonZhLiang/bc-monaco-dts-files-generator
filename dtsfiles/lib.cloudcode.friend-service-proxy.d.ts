/// <reference no-default-lib="true"/>

interface FriendServiceProxy {
	/**
	 * Reads entity data of friend.
	 * 
	 * @param  {string} friendId Profile id of friend who owns entity.
	 * @param  {string} entityId Id of entity to retrieve.
	 * @returns ServiceProxyResponse
	 */ 
	readFriendEntity(friendId: string, entityId: string): ServiceProxyResponse;

	/**
	 * Reads entities data of friends.
	 * 
	 * @param  {string} entityType Type of entities to retrieve.
	 * @returns ServiceProxyResponse
	 */ 
	readFriendsEntities(entityType: string): ServiceProxyResponse;

	/**
	 * Updates the friend summary data associated with the logged in user.
	 * 
	 * @param  {string} friendId Profile id of friend who owns entity.
	 * @returns ServiceProxyResponse
	 */ 
	readFriendUserState(friendId: string): ServiceProxyResponse;

	/**
	 * Retrieves the external ID for the specified user profile ID on the specified social platform.
	 * 
	 * @param  {string} profileId Profile (user) id.
	 * @param  {string} authenticationType Associated authentication type.
	 * @returns ServiceProxyResponse
	 */ 
	getExternalIdForProfileId(profileId: string, authenticationType: string): ServiceProxyResponse;

	/**
	 * Retrieves summary information for the specified user profile ID.
	 * 
	 * @param  {string} profileId Profile (user) id.
	 * @returns ServiceProxyResponse
	 */ 
	getSummaryDataForProfileId(profileId: string): ServiceProxyResponse;

	/**
	 * Retrieves profile information for the specified user.
	 * 
	 * @param  {string} externalId External id.
	 * @param  {string} authenticationType Associated authentication type.
	 * @returns ServiceProxyResponse
	 */ 
	getProfileInfoForCredential(externalId: string, authenticationType: string): ServiceProxyResponse;

	/**
	 * Retrieves profile information for the specified user. Silently fails
	 * 
	 * @param  {string} externalId External id.
	 * @param  {string} authenticationType Associated authentication type.
	 * @returns ServiceProxyResponse
	 */ 
	getProfileInfoForCredentialIfExists(externalId: string, authenticationType: string): ServiceProxyResponse;

	/**
	 * Retrieves profile information for the specified user.
	 * 
	 * @param  {string} externalId The external id.
	 * @param  {string} externalAuthType The name of the custom authentication type (linked to a cloud script that performs authentication.) Configured via the **Design &#124; Authentication &#124; External** page of the Design Portal.
	 * @returns ServiceProxyResponse
	 */ 
	getProfileInfoForExternalAuthId(externalId: string, externalAuthType: string): ServiceProxyResponse;

	/**
	 * Retrieves profile information for the specified user. Silently fails
	 * 
	 * @param  {string} externalId The external id.
	 * @param  {string} externalAuthType The name of the custom authentication type (linked to a cloud script that performs authentication.) Configured via the **Design &#124; Authentication &#124; External** page of the Design Portal.
	 * @returns ServiceProxyResponse
	 */ 
	getProfileInfoForExternalAuthIdIfExists(externalId: string, externalAuthType: string): ServiceProxyResponse;

	/**
	 * Retrieves profile information for exactly matched user names. Optional parameter: maxResults
	 * 
	 * @param  {string} searchText The exact string to search for.
	 * @param  {long} maxResults Maximum number of results to return.
	 * @returns ServiceProxyResponse
	 */ 
	findUsersByExactName(searchText: string, maxResults: long): ServiceProxyResponse;

	/**
	 * Retrieves profile information for users whose name starts with search text. Optional parameter: maxResults
	 * 
	 * @param  {string} searchText The exact string to search for.
	 * @param  {long} maxResults Maximum number of results to return.
	 * @returns ServiceProxyResponse
	 */ 
	findUsersByNameStartingWith(searchText: string, maxResults: long): ServiceProxyResponse;

	/**
	 * Retrieves profile information for partially matched user names. Optional parameter: maxResults
	 * 
	 * @param  {string} searchText The substring to search for. Minimum length of 3 characters.
	 * @param  {long} maxResults Maximum number of results to return.
	 * @returns ServiceProxyResponse
	 */ 
	findUsersBySubstrName(searchText: string, maxResults: long): ServiceProxyResponse;

	/**
	 * Retrieves profile information based on the search criteria of the user summary data.
	 * 
	 * @param  {string} where A mongo style query string.
	 * @param  {long} maxResults Maximum number of results to return.
	 * @returns ServiceProxyResponse
	 */ 
	findUsersByUserSummary(where: string, maxResults: long): ServiceProxyResponse;

	/**
	 * Retrieves profile information for the specified universal id.
	 * 
	 * @param  {string} searchText The universalId to search for.
	 * @returns ServiceProxyResponse
	 */ 
	findUserByExactUniversalId(searchText: string): ServiceProxyResponse;

	/**
	 * Retrieves user information for partially matched universal IDs. Optional parameter: maxResults. Deprecated: use FindUserByUniversalId instead.
	 * 
	 * @param  {string} searchText The substring to search for. Minimum length of 3 characters.
	 * @param  {long} maxResults Maximum number of results to return. If there are more the message.
	 * @returns ServiceProxyResponse
	 */ 
	findUserByUniversalId(searchText: string, maxResults: long): ServiceProxyResponse;

	/**
	 * Retrieves profile information for users whose universal ID starts with search text. Optional parameter: maxResults
	 * 
	 * @param  {string} searchText The substring to search for. Minimum length of 3 characters.
	 * @param  {long} maxResults Maximum number of results to return. If there are more the message.
	 * @returns ServiceProxyResponse
	 */ 
	findUsersByUniversalIdStartingWith(searchText: string, maxResults: long): ServiceProxyResponse;

	/**
	 * Retrieves the friend summary data associated with the logged in user. Optional parameters: includeNetworkFriends and includeSummaryData
	 * 
	 * @param  {brainCloud | Facebook | All} friendPlatform Friend platform to query. Valid values are "Facebook", "Steam", "PlaystationNetwork", "brainCloud" and "All".
	 * @param  {boolean} includeSummaryData True if including summary data; false otherwise.
	 * @returns ServiceProxyResponse
	 */ 
	listFriends(friendPlatform: brainCloud | Facebook | All, includeSummaryData: boolean): ServiceProxyResponse;

	/**
	 * Retrieves the social information associated with the logged in user. Includes summary data if includeSummaryData is true.
	 * 
	 * @param  {brainCloud | Facebook | All} friendPlatform Friend platform to query. Valid values are "Facebook", "Steam", "PlaystationNetwork", "brainCloud" and "All".
	 * @param  {boolean} includeSummaryData True if including summary data; false otherwise.
	 * @returns ServiceProxyResponse
	 */ 
	getMySocialInfo(friendPlatform: brainCloud | Facebook | All, includeSummaryData: boolean): ServiceProxyResponse;

	/**
	 * Adds brainCloud profile IDs to local friends.
	 * 
	 * @param  {nativeArray} profileIds Collection of profile ids.
	 * @returns ServiceProxyResponse
	 */ 
	addFriends(profileIds: nativeArray): ServiceProxyResponse;

	/**
	 * Links the profiles for the specified externalIds for the given friend platform as internal friends.
	 * 
	 * @param  {facebook | Steam | PlaystationNetwork} friendPlatform Friend platform to query. Valid values are "Facebook", "Steam", and "PlaystationNetwork".
	 * @param  {string} mode "ADD" to add friends only, "SYNC" to delete any previously saved friends that are not in the externalIds list.
	 * @param  {nativeArray} externalIds The list of platform-specific external IDs of the friends to add.
	 * @returns ServiceProxyResponse
	 */ 
	addFriendsFromPlatform(friendPlatform: facebook | Steam | PlaystationNetwork, mode: string, externalIds: nativeArray): ServiceProxyResponse;

	/**
	 * Removes brainCloud profile IDs from local friends.
	 * 
	 * @param  {nativeArray} profileIds Collection of profile ids.
	 * @returns ServiceProxyResponse
	 */ 
	removeFriends(profileIds: nativeArray): ServiceProxyResponse;

	/**
	 * Get users online status.
	 * 
	 * @param  {nativeArray} profileIds Collection of profile ids.
	 * @returns ServiceProxyResponse
	 */ 
	getUsersOnlineStatus(profileIds: nativeArray): ServiceProxyResponse;
}