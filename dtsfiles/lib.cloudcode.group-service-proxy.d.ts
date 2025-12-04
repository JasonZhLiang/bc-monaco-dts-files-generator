/// <reference no-default-lib="true"/>

interface GroupServiceProxy {
	/**
	 * Find and join an open group in the pool of groups in multiple group types provided as input arguments.
	 * 
	 * @param  {nativeArray} groupTypes The name of the associated group types.
	 * @param  {string} autoJoinStrategy Selection strategy to employ when there are multiple matches.
	 * @param  {nativeObject} where Query parameters (optional.)
	 * @returns ServiceProxyResponse
	 */ 
	autoJoinGroupMulti(groupTypes: nativeArray, autoJoinStrategy: string, where: nativeObject): ServiceProxyResponse;

	/**
	 * Retrieve a page of group summary information based on the specified context.
	 * 
	 * @param  {nativeObject} context The JSON context for the page request.
	 * @returns ServiceProxyResponse
	 */ 
	listGroupsPage(context: nativeObject): ServiceProxyResponse;

	/**
	 * Retrieve a page of group summary information based on the encoded context and specified page offset.
	 * 
	 * @param  {string} context The context string returned from the server from a previous call to ListGroupsPage or ListGroupsPageByOffset.
	 * @param  {long} pageOffset The positive or negative page offset to fetch. Uses the last page retrieved using the context string to determine a starting point.
	 * @returns ServiceProxyResponse
	 */ 
	listGroupsPageByOffset(context: string, pageOffset: long): ServiceProxyResponse;

	/**
	 * Retrieve group summary information about the groups in which the specified user is a member.
	 * 
	 * @param  {string} profileId The id of a user to search for.
	 * @returns ServiceProxyResponse
	 */ 
	listGroupsWithMember(profileId: string): ServiceProxyResponse;

	/**
	 * Retrieve group information about the groups in which the current user is a member.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	getMyGroups(): ServiceProxyResponse;

	/**
	 * Gets a list of up to maxReturn randomly selected groups from the server based on the where condition.
	 * 
	 * @param  {nativeObject} where A mongo style query string.
	 * @param  {long} maxReturn The max count of groups to randomly select.
	 * @returns ServiceProxyResponse
	 */ 
	getRandomGroupsMatching(where: nativeObject, maxReturn: long): ServiceProxyResponse;

	/**
	 * Retrieve information about the group.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @returns ServiceProxyResponse
	 */ 
	readGroup(groupId: string): ServiceProxyResponse;

	/**
	 * Create a group. Optional parameters: all except name and groupType.
	 * 
	 * @param  {string} name A name for the group.
	 * @param  {string} groupType The type of group.
	 * @param  {boolean} isOpenGroup true if group is open; false if closed.
	 * @param  {nativeObject} acl The group's access control list. A null ACL implies default.
	 * @param  {nativeObject} ownerAttributes Attributes for the group owner (current user.)
	 * @param  {nativeObject} defaultMemberAttributes Default attributes for group members.
	 * @param  {nativeObject} data Custom application data.
	 * @returns ServiceProxyResponse
	 */ 
	createGroup(name: string, groupType: string, isOpenGroup: boolean, acl: nativeObject, ownerAttributes: nativeObject, defaultMemberAttributes: nativeObject, data: nativeObject): ServiceProxyResponse;

	/**
	 * Create a group. Optional parameters: all except name and groupType.
	 * 
	 * @param  {string} name A name for the group.
	 * @param  {string} groupType The type of group.
	 * @param  {boolean} isOpenGroup true if group is open; false if closed.
	 * @param  {nativeObject} acl The group's access control list. A null ACL implies default.
	 * @param  {nativeObject} ownerAttributes Attributes for the group owner (current user.)
	 * @param  {nativeObject} defaultMemberAttributes Default attributes for group members.
	 * @param  {nativeObject} data Custom application data.
	 * @param  {nativeObject} summaryData Public summary data for the group that is viewable even by non-members.
	 * @returns ServiceProxyResponse
	 */ 
	createGroupWithSummaryData(name: string, groupType: string, isOpenGroup: boolean, acl: nativeObject, ownerAttributes: nativeObject, defaultMemberAttributes: nativeObject, data: nativeObject, summaryData: nativeObject): ServiceProxyResponse;

	/**
	 * Update a group's name.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {string} name A name to apply to the group.
	 * @returns ServiceProxyResponse
	 */ 
	updateGroupName(groupId: string, name: string): ServiceProxyResponse;

	/**
	 * Retrieve the group data.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @returns ServiceProxyResponse
	 */ 
	readGroupData(groupId: string): ServiceProxyResponse;

	/**
	 * Update a group's data.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {long} version Version to verify.
	 * @param  {nativeObject} data Data to apply to group.
	 * @returns ServiceProxyResponse
	 */ 
	updateGroupData(groupId: string, version: long, data: nativeObject): ServiceProxyResponse;

	/**
	 * Update a group's summary data.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {long} version Version to verify.
	 * @param  {nativeObject} summaryData Public summary data for the group that is viewable even by non-members.
	 * @returns ServiceProxyResponse
	 */ 
	updateGroupSummaryData(groupId: string, version: long, summaryData: nativeObject): ServiceProxyResponse;

	/**
	 * Delete a group.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {long} version The current group version.
	 * @returns ServiceProxyResponse
	 */ 
	deleteGroup(groupId: string, version: long): ServiceProxyResponse;

	/**
	 * Partial increment of group data field items.  Partial set of items incremented as specified.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {nativeObject} data Partial data map with incremental values.
	 * @returns ServiceProxyResponse
	 */ 
	incrementGroupData(groupId: string, data: nativeObject): ServiceProxyResponse;

	/**
	 * Read all members in the group.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @returns ServiceProxyResponse
	 */ 
	readGroupMembers(groupId: string): ServiceProxyResponse;

	/**
	 * Add a member to the group. Optional parameters: attributes.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {string} profileId The profile id of the member being added.
	 * @param  {string} role Role of the member being added.
	 * @param  {nativeObject} attributes Attributes of the member being added.
	 * @returns ServiceProxyResponse
	 */ 
	addGroupMember(groupId: string, profileId: string, role: string, attributes: nativeObject): ServiceProxyResponse;

	/**
	 * Update a member in the group. Optional parameters: role OR attributes.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {string} profileId The profile id of the member being updated.
	 * @param  {string} role Role of the member being updated.
	 * @param  {nativeObject} attributes Attributes of the member being updated.
	 * @returns ServiceProxyResponse
	 */ 
	updateGroupMember(groupId: string, profileId: string, role: string, attributes: nativeObject): ServiceProxyResponse;

	/**
	 * Remove a member from the group.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {string} profileId The profile id of the user being removed.
	 * @returns ServiceProxyResponse
	 */ 
	removeGroupMember(groupId: string, profileId: string): ServiceProxyResponse;

	/**
	 * Remove a member from the group, bypassing group ownership/ACL checks.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {string} profileId The profile id of the user being removed from the group.
	 * @returns ServiceProxyResponse
	 */ 
	sysRemoveGroupMember(groupId: string, profileId: string): ServiceProxyResponse;

	/**
	 * Invite a member to the group. Optional parameters: attributes.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {string} profileId Profile id of the member being added.
	 * @param  {string} role Role of the member being added.
	 * @param  {nativeObject} attributes Attributes of the member being added.
	 * @returns ServiceProxyResponse
	 */ 
	inviteGroupMember(groupId: string, profileId: string, role: string, attributes: nativeObject): ServiceProxyResponse;

	/**
	 * Cancel the invitation to a pending group member.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {string} profileId Profile id of user whose invitation is being deleted.
	 * @returns ServiceProxyResponse
	 */ 
	cancelGroupInvitation(groupId: string, profileId: string): ServiceProxyResponse;

	/**
	 * Approve a request to join the group.  Role and/or attributes can optionally be overridden.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {string} profileId Profile id of the member being added.
	 * @param  {string} role Role of the member being added.
	 * @param  {nativeObject} attributes Attributes of the member being added.
	 * @returns ServiceProxyResponse
	 */ 
	approveGroupJoinRequest(groupId: string, profileId: string, role: string, attributes: nativeObject): ServiceProxyResponse;

	/**
	 * Reject a request to join the group.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {string} profileId Profile id of the user being rejected.
	 * @returns ServiceProxyResponse
	 */ 
	rejectGroupJoinRequest(groupId: string, profileId: string): ServiceProxyResponse;

	/**
	 * Accept an invitation to become a member of the group.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @returns ServiceProxyResponse
	 */ 
	acceptGroupInvitation(groupId: string): ServiceProxyResponse;

	/**
	 * Reject an invitation to become a member of the group.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @returns ServiceProxyResponse
	 */ 
	rejectGroupInvitation(groupId: string): ServiceProxyResponse;

	/**
	 * Join an open group or request membership in a closed group.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @returns ServiceProxyResponse
	 */ 
	joinGroup(groupId: string): ServiceProxyResponse;

	/**
	 * Find and join an open group (with available room) matching the input arguments.
	 * 
	 * @param  {string} groupType The name of the associated group type.
	 * @param  {string} autoJoinStrategy Selection strategy to employ when there are multiple matches.
	 * @param  {nativeObject} where Query parameters (optional.)
	 * @returns ServiceProxyResponse
	 */ 
	autoJoinGroup(groupType: string, autoJoinStrategy: string, where: nativeObject): ServiceProxyResponse;

	/**
	 * Leave as member of a group.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @returns ServiceProxyResponse
	 */ 
	leaveGroup(groupId: string): ServiceProxyResponse;

	/**
	 * Set a group's access conditions.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {nativeObject} acl The group's access control list. A null ACL implies default.
	 * @returns ServiceProxyResponse
	 */ 
	updateGroupAcl(groupId: string, acl: nativeObject): ServiceProxyResponse;

	/**
	 * Change Group Type
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {string} groupType The group type.
	 * @returns ServiceProxyResponse
	 */ 
	sysChangeGroupType(groupId: string, groupType: string): ServiceProxyResponse;

	/**
	 * Set whether a group is open (true) or closed (false).
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {boolean} isOpenGroup true if group is open; false if closed.
	 * @returns ServiceProxyResponse
	 */ 
	setGroupOpen(groupId: string, isOpenGroup: boolean): ServiceProxyResponse;

	/**
	 * Retrieve a page of group entity information based on the specified context.
	 * 
	 * @param  {nativeObject} context The JSON context for the page request.
	 * @returns ServiceProxyResponse
	 */ 
	readGroupEntitiesPage(context: nativeObject): ServiceProxyResponse;

	/**
	 * Retrieve a page of group entity information based on the encoded context and specified page offset.
	 * 
	 * @param  {string} context The context string returned from the server from a previous call to ReadGroupEntitiesPage or ReadGroupEntitiesPageByOffset.
	 * @param  {long} pageOffset The positive or negative page offset to fetch. Uses the last page retrieved using the context string to determine a starting point.
	 * @returns ServiceProxyResponse
	 */ 
	readGroupEntitiesPageByOffset(context: string, pageOffset: long): ServiceProxyResponse;

	/**
	 * Read an entity in the group.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {string} entityId Id of the entity.
	 * @returns ServiceProxyResponse
	 */ 
	readGroupEntity(groupId: string, entityId: string): ServiceProxyResponse;

	/**
	 * Create an entity in the group. Optional parameters: All except groupId. If entity is owned by a specific member, a member ACL is required.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {string} entityType Type of the group entity.
	 * @param  {boolean} isOwnedByGroupMember true if entity is owned by a member; false if owned by the entire group.
	 * @param  {nativeObject} acl Access control list for the group entity.
	 * @param  {nativeObject} data Custom application data.
	 * @returns ServiceProxyResponse
	 */ 
	createGroupEntity(groupId: string, entityType: string, isOwnedByGroupMember: boolean, acl: nativeObject, data: nativeObject): ServiceProxyResponse;

	/**
	 * Update the acl settings for a group entity, enforcing ownership.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {string} entityId The id of the entity to update.
	 * @param  {nativeObject} acl Access control list for the group entity.
	 * @returns ServiceProxyResponse
	 */ 
	updateGroupEntityAcl(groupId: string, entityId: string, acl: nativeObject): ServiceProxyResponse;

	/**
	 * Update the data for a group entity . Optional parameters: data (will clear data if not provided)
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {string} entityId The id of the entity to update.
	 * @param  {long} version Version to verify.
	 * @param  {nativeObject} data Data to apply to group.
	 * @returns ServiceProxyResponse
	 */ 
	updateGroupEntityData(groupId: string, entityId: string, version: long, data: nativeObject): ServiceProxyResponse;

	/**
	 * Delete an entity in the group.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {string} entityId Id of the entity.
	 * @param  {long} version The current version of the group entity (for concurrency checking).
	 * @returns ServiceProxyResponse
	 */ 
	deleteGroupEntity(groupId: string, entityId: string, version: long): ServiceProxyResponse;

	/**
	 * Partial increment of group entity data field items.  Partial set of items incremented as specified.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {string} entityId Id of the entity.
	 * @param  {nativeObject} data Partial data map with incremental values.
	 * @returns ServiceProxyResponse
	 */ 
	incrementGroupEntityData(groupId: string, entityId: string, data: nativeObject): ServiceProxyResponse;

	/**
	 * Retrieve a page of group summary information based on the specified context, bypassing ownership/ACL checks.
	 * 
	 * @param  {nativeObject} context The JSON context for the page request.
	 * @returns ServiceProxyResponse
	 */ 
	sysListGroupsPage(context: nativeObject): ServiceProxyResponse;

	/**
	 * Retrieve a page of group summary information based on the encoded context and specified page offset, bypassing ownership/ACL checks.
	 * 
	 * @param  {string} context The context string returned from the server from a previous call to ListGroupsPage or ListGroupsPageByOffset.
	 * @param  {long} pageOffset The positive or negative page offset to fetch. Uses the last page retrieved using the context string to determine a starting point.
	 * @returns ServiceProxyResponse
	 */ 
	sysListGroupsPageByOffset(context: string, pageOffset: long): ServiceProxyResponse;

	/**
	 * Retrieve information about the group, bypassing ownership/ACL checks.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @returns ServiceProxyResponse
	 */ 
	sysReadGroup(groupId: string): ServiceProxyResponse;

	/**
	 * Create a group owned by the specified owner. Optional parameters: all except name, groupType and ownerId.
	 * 
	 * @param  {string} name A name for the group.
	 * @param  {string} groupType The type of group.
	 * @param  {boolean} isOpenGroup true if group is open; false if closed.
	 * @param  {nativeObject} acl The group's access control list. A null ACL implies default.
	 * @param  {string} ownerId Profile ID of user to be owner of group.
	 * @param  {nativeObject} ownerAttributes Attributes for the group owner. Optional.
	 * @param  {nativeObject} defaultMemberAttributes Default attributes for group members. Optional.
	 * @param  {nativeObject} data Custom application data. Optional.
	 * @param  {nativeObject} summaryData Public summary data for the group that is viewable even by non-members. Optional.
	 * @returns ServiceProxyResponse
	 */ 
	sysCreateGroup(name: string, groupType: string, isOpenGroup: boolean, acl: nativeObject, ownerId: string, ownerAttributes: nativeObject, defaultMemberAttributes: nativeObject, data: nativeObject, summaryData: nativeObject): ServiceProxyResponse;

	/**
	 * Gets a list of up to maxReturn randomly selected groups from the server based on the where condition, bypassing ownership/ACL checks.
	 * 
	 * @param  {nativeObject} where A mongo style query string.
	 * @param  {long} maxReturn The max count of groups to randomly select.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetRandomGroupsMatching(where: nativeObject, maxReturn: long): ServiceProxyResponse;

	/**
	 * Update a group's name, bypassing ownership/ACL checks.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {string} name A name to apply to the group.
	 * @returns ServiceProxyResponse
	 */ 
	sysUpdateGroupName(groupId: string, name: string): ServiceProxyResponse;

	/**
	 * Retrieve the group data, bypassing ownership/ACL checks.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @returns ServiceProxyResponse
	 */ 
	sysReadGroupData(groupId: string): ServiceProxyResponse;

	/**
	 * Update a group's data, bypassing ownership/ACL checks.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {long} version Version to verify.
	 * @param  {nativeObject} data Data to apply to group.
	 * @returns ServiceProxyResponse
	 */ 
	sysUpdateGroupData(groupId: string, version: long, data: nativeObject): ServiceProxyResponse;

	/**
	 * Update a group's summary data, bypassing ownership/ACL checks.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {long} version Version to verify.
	 * @param  {nativeObject} summaryData Public summary data for the group that is viewable even by non-members.
	 * @returns ServiceProxyResponse
	 */ 
	sysUpdateGroupSummaryData(groupId: string, version: long, summaryData: nativeObject): ServiceProxyResponse;

	/**
	 * Delete a group, bypassing ownership/ACL checks.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {long} version The current group version.
	 * @returns ServiceProxyResponse
	 */ 
	sysDeleteGroup(groupId: string, version: long): ServiceProxyResponse;

	/**
	 * Partial increment of group data field items.  Partial set of items incremented as specified. Bypasses ownership/ACL checks.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {nativeObject} data Partial data map with incremental values.
	 * @returns ServiceProxyResponse
	 */ 
	sysIncrementGroupData(groupId: string, data: nativeObject): ServiceProxyResponse;

	/**
	 * Read all members in the group, bypassing ownership/ACL checks.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @returns ServiceProxyResponse
	 */ 
	sysReadGroupMembers(groupId: string): ServiceProxyResponse;

	/**
	 * Add a user as a member to the group, bypassing ownership/ACL checks. Optional parameters: role OR attributes.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {string} profileId The profile id of the member being added.
	 * @param  {string} role Role of the user being added as a member.
	 * @param  {nativeObject} attributes Attributes of the member being added.
	 * @returns ServiceProxyResponse
	 */ 
	sysAddGroupMember(groupId: string, profileId: string, role: string, attributes: nativeObject): ServiceProxyResponse;

	/**
	 * Update a member in the group, bypassing ownership/ACL checks. Must provide role, but attributes optional.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {string} profileId The profile id of the member being updated.
	 * @param  {string} role Role of the member being updated.
	 * @param  {nativeObject} attributes Attributes of the member being updated.
	 * @returns ServiceProxyResponse
	 */ 
	sysUpdateGroupMember(groupId: string, profileId: string, role: string, attributes: nativeObject): ServiceProxyResponse;

	/**
	 * Verifies if user is a group member and returns information about group member, bypassing ownership/ACL checks.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {string} profileId The profile id of the user to be checked.
	 * @returns ServiceProxyResponse
	 */ 
	sysIsGroupMember(groupId: string, profileId: string): ServiceProxyResponse;

	/**
	 * Set a group's access conditions, bypassing ownership/ACL checks.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {nativeObject} acl The group's access control list. A null ACL implies default.
	 * @returns ServiceProxyResponse
	 */ 
	sysUpdateGroupAcl(groupId: string, acl: nativeObject): ServiceProxyResponse;

	/**
	 * Set whether a group is open (true) or closed (false), bypassing ownership/ACL checks.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {boolean} isOpenGroup true if group is open; false if closed.
	 * @returns ServiceProxyResponse
	 */ 
	sysSetGroupOpen(groupId: string, isOpenGroup: boolean): ServiceProxyResponse;

	/**
	 * Retrieve a page of group entity information based on the specified context, bypassing ownership/ACL checks.
	 * 
	 * @param  {nativeObject} context The JSON context for the page request.
	 * @returns ServiceProxyResponse
	 */ 
	sysReadGroupEntitiesPage(context: nativeObject): ServiceProxyResponse;

	/**
	 * Retrieve a page of group entity information based on the encoded context and specified page offset, bypassing ownership/ACL checks.
	 * 
	 * @param  {string} context The context string returned from the server from a previous call to ReadGroupEntitiesPage or ReadGroupEntitiesPageByOffset.
	 * @param  {long} pageOffset The positive or negative page offset to fetch. Uses the last page retrieved using the context string to determine a starting point.
	 * @returns ServiceProxyResponse
	 */ 
	sysReadGroupEntitiesPageByOffset(context: string, pageOffset: long): ServiceProxyResponse;

	/**
	 * Read an entity in the group, bypassing ownership/ACL checks.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {string} entityId Id of the entity.
	 * @returns ServiceProxyResponse
	 */ 
	sysReadGroupEntity(groupId: string, entityId: string): ServiceProxyResponse;

	/**
	 * Create an entity in the group with no owner. Optional parameters: All except groupId.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {string} entityType Type of the group entity.
	 * @param  {nativeObject} acl Access control list for the group entity.
	 * @param  {nativeObject} data Custom application data.
	 * @returns ServiceProxyResponse
	 */ 
	sysCreateGroupEntity(groupId: string, entityType: string, acl: nativeObject, data: nativeObject): ServiceProxyResponse;

	/**
	 * Update the acl settings for a group entity, bypassing ownership/ACL checks.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {string} entityId The id of the entity to update.
	 * @param  {nativeObject} acl Access control list for the group entity.
	 * @returns ServiceProxyResponse
	 */ 
	sysUpdateGroupEntityAcl(groupId: string, entityId: string, acl: nativeObject): ServiceProxyResponse;

	/**
	 * Update the data for a group entity, bypassing ownership/ACL checks. Optional parameters: data (will clear data if not provided)
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {string} entityId The id of the entity to update.
	 * @param  {long} version Version to verify.
	 * @param  {nativeObject} data Data to apply to group.
	 * @returns ServiceProxyResponse
	 */ 
	sysUpdateGroupEntityData(groupId: string, entityId: string, version: long, data: nativeObject): ServiceProxyResponse;

	/**
	 * Delete an entity in the group, bypassing ownership/ACL checks.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {string} entityId Id of the entity.
	 * @param  {long} version The current version of the group entity (for concurrency checking).
	 * @returns ServiceProxyResponse
	 */ 
	sysDeleteGroupEntity(groupId: string, entityId: string, version: long): ServiceProxyResponse;

	/**
	 * Partial increment of group entity data field items.  Partial set of items incremented as specified. Bypasses ownership/ACL checks.
	 * 
	 * @param  {string} groupId The id of the group.
	 * @param  {string} entityId Id of the entity.
	 * @param  {nativeObject} data Partial data map with incremental values.
	 * @returns ServiceProxyResponse
	 */ 
	sysIncrementGroupEntityData(groupId: string, entityId: string, data: nativeObject): ServiceProxyResponse;
}