/// <reference no-default-lib="true"/>

interface GroupServiceProxy {
	/**
	 * Find and join an open group in the pool of groups in multiple group types provided as input arguments.
	 * 
	 * @param  {NativeArray} groupTypes The name of the associated group types.
	 * @param  {String} autoJoinStrategy Selection strategy to employ when there are multiple matches.
	 * @param  {NativeObject} where Query parameters (optional.)
	 * @returns ServiceProxyResponse
	 */ 
	autoJoinGroupMulti(groupTypes: Array<any>, autoJoinStrategy: string, where: Object): ServiceProxyResponse;

	/**
	 * Retrieve a page of group summary information based on the specified context.
	 * 
	 * @param  {NativeObject} context The JSON context for the page request.
	 * @returns ServiceProxyResponse
	 */ 
	listGroupsPage(context: Object): ServiceProxyResponse;

	/**
	 * Retrieve a page of group summary information based on the encoded context and specified page offset.
	 * 
	 * @param  {String} context The context string returned from the server from a previous call to ListGroupsPage or ListGroupsPageByOffset.
	 * @param  {Long} pageOffset The positive or negative page offset to fetch. Uses the last page retrieved using the context string to determine a starting point.
	 * @returns ServiceProxyResponse
	 */ 
	listGroupsPageByOffset(context: string, pageOffset: number): {
    status: number;
    data: 
    {
        results: 
        {
            moreBefore: number;
            count: number;
            items: Array<
            {
                groupType: string;
                groupId: string;
                isOpenGroup: number;
                requestingPendingMemberCount: number;
                invitedPendingMemberCount: number;
                ownerId: string;
                name: string;
                memberCount: number;
            }>;
            page: number;
            moreAfter: number;
        };
        context: string;
    };
};

	/**
	 * Retrieve group summary information about the groups in which the specified user is a member.
	 * 
	 * @param  {String} profileId The id of a user to search for.
	 * @returns ServiceProxyResponse
	 */ 
	listGroupsWithMember(profileId: string): {
    status: number;
    data: 
    {
        groups: Array<
        {
            groupType: string;
            groupId: string;
            isOpenGroup: number;
            requestingPendingMemberCount: number;
            invitedPendingMemberCount: number;
            ownerId: string;
            name: string;
            memberCount: number;
        }>;
    };
};

	/**
	 * Retrieve group information about the groups in which the current user is a member.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	getMyGroups(): {
    status: number;
    data: 
    {
        requested: Array<any>;
        invited: Array<any>;
        groups: Array<
        {
            groupType: string;
            groupId: string;
            isOpenGroup: number;
            requestingPendingMemberCount: number;
            invitedPendingMemberCount: number;
            ownerId: string;
            name: string;
            memberCount: number;
        }>;
    };
};

	/**
	 * Gets a list of up to maxReturn randomly selected groups from the server based on the where condition.
	 * 
	 * @param  {NativeObject} where A mongo style query string.
	 * @param  {Long} maxReturn The max count of groups to randomly select.
	 * @returns ServiceProxyResponse
	 */ 
	getRandomGroupsMatching(where: Object, maxReturn: number): {
    data: 
    {
        count: number;
        groups: Array<
        {
            gameId: string;
            groupId: string;
            ownerId: string;
            name: string;
            groupType: string;
            createdAt: number;
            updatedAt: number;
            members: 
            {
                77ce888920b74d01b248e0beb747f1b4: 
                {
                    role: string;
                    attributes: 
                    {
                    };
                };
            };
            pendingMembers: 
            {
            };
            version: number;
            data: 
            {
            };
            summaryData: 
            {
            };
            isOpenGroup: number;
            defaultMemberAttributes: 
            {
            };
            memberCount: number;
            invitedPendingMemberCount: number;
            requestingPendingMemberCount: number;
            acl: 
            {
                member: number;
                other: number;
            };
        }>;
    };
    status: number;
};

	/**
	 * Retrieve information about the group.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @returns ServiceProxyResponse
	 */ 
	readGroup(groupId: string): {
    data: 
    {
        gameId: string;
        groupId: string;
        ownerId: string;
        name: string;
        groupType: string;
        createdAt: number;
        updatedAt: number;
        members: 
        {
            8bd564a73f914a98a4b343cd7d266133: 
            {
                role: string;
                attributes: 
                {
                };
            };
            790874655ca541a19d4685ad23bc6efd: 
            {
                role: string;
                attributes: 
                {
                };
            };
        };
        pendingMembers: 
        {
        };
        version: number;
        data: 
        {
            indexedId: string;
        };
        summaryData: 
        {
        };
        isOpenGroup: number;
        defaultMemberAttributes: 
        {
        };
        memberCount: number;
        invitedPendingMemberCount: number;
        requestingPendingMemberCount: number;
        acl: 
        {
            member: number;
            other: number;
        };
    };
    status: number;
};

	/**
	 * Create a group. Optional parameters: all except name and groupType.
	 * 
	 * @param  {String} name A name for the group.
	 * @param  {String} groupType The type of group.
	 * @param  {Boolean} isOpenGroup true if group is open; false if closed.
	 * @param  {NativeObject} acl The group's access control list. A null ACL implies default.
	 * @param  {NativeObject} ownerAttributes Attributes for the group owner (current user.)
	 * @param  {NativeObject} defaultMemberAttributes Default attributes for group members.
	 * @param  {NativeObject} data Custom application data.
	 * @returns ServiceProxyResponse
	 */ 
	createGroup(name: string, groupType: string, isOpenGroup: boolean, acl: Object, ownerAttributes: Object, defaultMemberAttributes: Object, data: Object): {
    status: number;
    data: 
    {
        gameId: string;
        groupId: string;
        ownerId: string;
        name: string;
        groupType: string;
        createdAt: number;
        updatedAt: number;
        members: 
        {
            ee8cad2616f24ef890453aab84ce6362: 
            {
                role: string;
                attributes: 
                {
                };
            };
        };
        pendingMembers: 
        {
        };
        version: number;
        data: 
        {
        };
        isOpenGroup: number;
        defaultMemberAttributes: 
        {
        };
        memberCount: number;
        invitedPendingMemberCount: number;
        requestingPendingMemberCount: number;
        acl: 
        {
            member: number;
            other: number;
        };
    };
};

	/**
	 * Create a group. Optional parameters: all except name and groupType.
	 * 
	 * @param  {String} name A name for the group.
	 * @param  {String} groupType The type of group.
	 * @param  {Boolean} isOpenGroup true if group is open; false if closed.
	 * @param  {NativeObject} acl The group's access control list. A null ACL implies default.
	 * @param  {NativeObject} ownerAttributes Attributes for the group owner (current user.)
	 * @param  {NativeObject} defaultMemberAttributes Default attributes for group members.
	 * @param  {NativeObject} data Custom application data.
	 * @param  {NativeObject} summaryData Public summary data for the group that is viewable even by non-members.
	 * @returns ServiceProxyResponse
	 */ 
	createGroup(name: string, groupType: string, isOpenGroup: boolean, acl: Object, ownerAttributes: Object, defaultMemberAttributes: Object, data: Object, summaryData: Object): {
    data: 
    {
        gameId: string;
        groupId: string;
        ownerId: string;
        name: string;
        groupType: string;
        createdAt: number;
        updatedAt: number;
        members: 
        {
            77ce888920b74d01b248e0beb747f1b4: 
            {
                role: string;
                attributes: 
                {
                };
            };
        };
        pendingMembers: 
        {
        };
        version: number;
        summaryData: 
        {
        };
        isOpenGroup: number;
        defaultMemberAttributes: 
        {
        };
        memberCount: number;
        invitedPendingMemberCount: number;
        requestingPendingMemberCount: number;
        acl: 
        {
            member: number;
            other: number;
        };
    };
    status: number;
};

	/**
	 * Update a group's name.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {String} name A name to apply to the group.
	 * @returns ServiceProxyResponse
	 */ 
	updateGroupName(groupId: string, name: string): {
    status: number;
    data: any | null;
};

	/**
	 * Retrieve the group data.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @returns ServiceProxyResponse
	 */ 
	readGroupData(groupId: string): {
    status: number;
    data: 
    {
        data: 
        {
            testInc: number;
        };
    };
};

	/**
	 * Update a group's data.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {Long} version Version to verify.
	 * @param  {NativeObject} data Data to apply to group.
	 * @returns ServiceProxyResponse
	 */ 
	updateGroupData(groupId: string, version: number, data: Object): {
    data: 
    {
        gameId: string;
        groupId: string;
        ownerId: string;
        name: string;
        groupType: string;
        createdAt: number;
        updatedAt: number;
        members: 
        {
            79ab573d459e42ceac65c2fe8e81a3ae: 
            {
                role: string;
                attributes: 
                {
                    groupatt: string;
                };
            };
            3290282537a143e289b747e849b1ec4b: 
            {
                role: string;
                attributes: 
                {
                };
            };
            ec52d98835154032a8fdacc48e985792: 
            {
                role: string;
                attributes: 
                {
                };
            };
            cd0356bdab7f4fd7bc589422cd3a2a59: 
            {
                role: string;
                attributes: 
                {
                };
            };
            8f9f8269ad3e4e3dbc2a3dd31afb0b17: 
            {
                role: string;
                attributes: 
                {
                };
            };
            8bd564a73f914a98a4b343cd7d266133: 
            {
                role: string;
                attributes: 
                {
                };
            };
            336f36beda114457bda6ccecd47b63e3: 
            {
                role: string;
                attributes: 
                {
                };
            };
            1e8c17bfede94976b147b44bd2da6817: 
            {
                role: string;
                attributes: 
                {
                };
            };
        };
        pendingMembers: 
        {
        };
        version: number;
        summaryData: 
        {
        };
        isOpenGroup: number;
        defaultMemberAttributes: 
        {
        };
        memberCount: number;
        invitedPendingMemberCount: number;
        requestingPendingMemberCount: number;
        acl: 
        {
            member: number;
            other: number;
        };
    };
    status: number;
};

	/**
	 * Update a group's summary data.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {Long} version Version to verify.
	 * @param  {NativeObject} summaryData Public summary data for the group that is viewable even by non-members.
	 * @returns ServiceProxyResponse
	 */ 
	updateGroupSummaryData(groupId: string, version: number, summaryData: Object): {
    data: 
    {
        gameId: string;
        groupId: string;
        ownerId: string;
        name: string;
        groupType: string;
        createdAt: number;
        updatedAt: number;
        members: 
        {
            77ce888920b74d01b248e0beb747f1b4: 
            {
                role: string;
                attributes: 
                {
                };
            };
        };
        pendingMembers: 
        {
        };
        version: number;
        summaryData: 
        {
            new: string;
        };
        isOpenGroup: number;
        defaultMemberAttributes: 
        {
        };
        memberCount: number;
        invitedPendingMemberCount: number;
        requestingPendingMemberCount: number;
        acl: 
        {
            member: number;
            other: number;
        };
    };
    status: number;
};

	/**
	 * Delete a group.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {Long} version The current group version.
	 * @returns ServiceProxyResponse
	 */ 
	deleteGroup(groupId: string, version: number): {
    status: number;
    data: any | null;
};

	/**
	 * Partial increment of group data field items.  Partial set of items incremented as specified.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {NativeObject} data Partial data map with incremental values.
	 * @returns ServiceProxyResponse
	 */ 
	incrementGroupData(groupId: string, data: Object): {
    status: number;
    data: any | null;
};

	/**
	 * Read all members in the group.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @returns ServiceProxyResponse
	 */ 
	readGroupMembers(groupId: string): {
    status: number;
    data: 
    {
        ee8cad2616f24ef890453aab84ce6362: 
        {
            role: string;
            attributes: 
            {
            };
            playerName: string;
            emailAddress: string;
            pic: string;
            summaryFriendData: 
            {
                xp: number;
                attributeName: string;
            };
        };
        295c510f507f4bcf80e1ebc73708ec3c: 
        {
            role: string;
            attributes: 
            {
            };
            playerName: string;
            emailAddress: string;
            pic: any | null;
        };
    };
};

	/**
	 * Add a member to the group. Optional parameters: attributes.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {String} profileId The profile id of the member being added.
	 * @param  {String} role Role of the member being added.
	 * @param  {NativeObject} attributes Attributes of the member being added.
	 * @returns ServiceProxyResponse
	 */ 
	addGroupMember(groupId: string, profileId: string, role: string, attributes: Object): {
    status: number;
    data: any | null;
};

	/**
	 * Update a member in the group. Optional parameters: role OR attributes.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {String} profileId The profile id of the member being updated.
	 * @param  {String} role Role of the member being updated.
	 * @param  {NativeObject} attributes Attributes of the member being updated.
	 * @returns ServiceProxyResponse
	 */ 
	updateGroupMember(groupId: string, profileId: string, role: string, attributes: Object): {
    status: number;
    data: any | null;
};

	/**
	 * Remove a member from the group.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {String} profileId The profile id of the user being removed.
	 * @returns ServiceProxyResponse
	 */ 
	removeGroupMember(groupId: string, profileId: string): {
    status: number;
    data: any | null;
};

	/**
	 * Remove a member from the group, bypassing group ownership/ACL checks.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {String} profileId The profile id of the user being removed from the group.
	 * @returns ServiceProxyResponse
	 */ 
	sysRemoveGroupMember(groupId: string, profileId: string): {
    status: number;
    data: any | null;
};

	/**
	 * Invite a member to the group. Optional parameters: attributes.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {String} profileId Profile id of the member being added.
	 * @param  {String} role Role of the member being added.
	 * @param  {NativeObject} attributes Attributes of the member being added.
	 * @returns ServiceProxyResponse
	 */ 
	inviteGroupMember(groupId: string, profileId: string, role: string, attributes: Object): {
    status: number;
    data: any | null;
};

	/**
	 * Cancel the invitation to a pending group member.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {String} profileId Profile id of user whose invitation is being deleted.
	 * @returns ServiceProxyResponse
	 */ 
	cancelGroupInvitation(groupId: string, profileId: string): {
    status: number;
    data: any | null;
};

	/**
	 * Approve a request to join the group.  Role and/or attributes can optionally be overridden.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {String} profileId Profile id of the member being added.
	 * @param  {String} role Role of the member being added.
	 * @param  {NativeObject} attributes Attributes of the member being added.
	 * @returns ServiceProxyResponse
	 */ 
	approveGroupJoinRequest(groupId: string, profileId: string, role: string, attributes: Object): {
    status: number;
    data: any | null;
};

	/**
	 * Reject a request to join the group.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {String} profileId Profile id of the user being rejected.
	 * @returns ServiceProxyResponse
	 */ 
	rejectGroupJoinRequest(groupId: string, profileId: string): {
    status: number;
    data: any | null;
};

	/**
	 * Accept an invitation to become a member of the group.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @returns ServiceProxyResponse
	 */ 
	acceptGroupInvitation(groupId: string): {
    status: number;
    data: any | null;
};

	/**
	 * Reject an invitation to become a member of the group.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @returns ServiceProxyResponse
	 */ 
	rejectGroupInvitation(groupId: string): {
    status: number;
    data: any | null;
};

	/**
	 * Join an open group or request membership in a closed group.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @returns ServiceProxyResponse
	 */ 
	joinGroup(groupId: string): {
    status: number;
    data: any | null;
};

	/**
	 * Find and join an open group (with available room) matching the input arguments.
	 * 
	 * @param  {String} groupType The name of the associated group type.
	 * @param  {String} autoJoinStrategy Selection strategy to employ when there are multiple matches.
	 * @param  {NativeObject} where Query parameters (optional.)
	 * @returns ServiceProxyResponse
	 */ 
	autoJoinGroup(groupType: string, autoJoinStrategy: string, where: Object): {
    status: number;
    data: 
    {
        gameId: string;
        groupId: string;
        ownerId: string;
        name: string;
        groupType: string;
        createdAt: number;
        updatedAt: number;
        members: 
        {
            ee8cad2616f24ef890453aab84ce6362: 
            {
                role: string;
                attributes: 
                {
                };
            };
            295c510f507f4bcf80e1ebc73708ec3c: 
            {
                role: string;
                attributes: 
                {
                };
            };
        };
        pendingMembers: 
        {
        };
        version: number;
        data: 
        {
        };
        isOpenGroup: number;
        defaultMemberAttributes: 
        {
        };
        memberCount: number;
        invitedPendingMemberCount: number;
        requestingPendingMemberCount: number;
        acl: 
        {
            member: number;
            other: number;
        };
    };
};

	/**
	 * Leave a group in which the user is a member.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @returns ServiceProxyResponse
	 */ 
	leaveGroup(groupId: string): {
    status: number;
    data: any | null;
};

	/**
	 * Leave a group in which the user is a member. If member is OWNER, a new owner is automatically selected: most recently active ADMIN; otherwise, most recently active MEMBER; otherwise, group is deleted.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @returns ServiceProxyResponse
	 */ 
	leaveGroupAuto(groupId: string): {
    status: number;
    data: 
    {
    };
};

	/**
	 * Set a group's access conditions.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {NativeObject} acl The group's access control list. A null ACL implies default.
	 * @returns ServiceProxyResponse
	 */ 
	updateGroupAcl(groupId: string, acl: Object): {
    data: 
    {
        gameId: string;
        groupId: string;
        ownerId: string;
        name: string;
        groupType: string;
        createdAt: number;
        updatedAt: number;
        members: 
        {
            8bd564a73f914a98a4b343cd7d266133: 
            {
                role: string;
                attributes: 
                {
                };
            };
            a50a9aae65fc4171b3f9c0054b7e2d6b: 
            {
                role: string;
                attributes: 
                {
                };
            };
            07ba7ab235054342b91f6500fa8f5585: 
            {
                role: string;
                attributes: 
                {
                };
            };
        };
        pendingMembers: 
        {
        };
        version: number;
        summaryData: 
        {
        };
        isOpenGroup: number;
        defaultMemberAttributes: 
        {
        };
        memberCount: number;
        invitedPendingMemberCount: number;
        requestingPendingMemberCount: number;
        acl: 
        {
            member: number;
            other: number;
        };
        groupFileTree: 
        {
            tree: Array<
            {
                treeId: string;
                children: Array<
                {
                    treeId: string;
                    children: any | null;
                    name: string;
                    acl: 
                    {
                        member: number;
                        other: number;
                    };
                    type: string;
                    ownerId: any | null;
                    desc: string;
                }>;
                name: string;
                acl: 
                {
                    member: number;
                    other: number;
                };
                type: string;
                ownerId: any | null;
                desc: string;
            }>;
            acl: 
            {
                member: number;
                other: number;
            };
            version: number;
        };
    };
    status: number;
};

	/**
	 * Change Group Type
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {String} groupType The group type.
	 * @returns ServiceProxyResponse
	 */ 
	sysChangeGroupType(groupId: string, groupType: string): {
    data: any | null;
    status: number;
};

	/**
	 * Set whether a group is open (true) or closed (false).
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {Boolean} isOpenGroup true if group is open; false if closed.
	 * @returns ServiceProxyResponse
	 */ 
	setGroupOpen(groupId: string, isOpenGroup: boolean): {
    status: number;
    data: any | null;
};

	/**
	 * Retrieve a page of group entity information based on the specified context.
	 * 
	 * @param  {NativeObject} context The JSON context for the page request.
	 * @returns ServiceProxyResponse
	 */ 
	readGroupEntitiesPage(context: Object): {
    status: number;
    data: 
    {
        _serverTime: number;
        results: 
        {
            moreBefore: number;
            count: number;
            items: Array<
            {
                gameId: string;
                groupId: string;
                entityId: string;
                ownerId: any | null;
                entityType: string;
                createdAt: number;
                updatedAt: number;
                version: number;
                data: 
                {
                };
                acl: 
                {
                    member: number;
                    other: number;
                };
            }>;
            page: number;
            moreAfter: number;
        };
        context: string;
    };
};

	/**
	 * Retrieve a page of group entity information based on the encoded context and specified page offset.
	 * 
	 * @param  {String} context The context string returned from the server from a previous call to ReadGroupEntitiesPage or ReadGroupEntitiesPageByOffset.
	 * @param  {Long} pageOffset The positive or negative page offset to fetch. Uses the last page retrieved using the context string to determine a starting point.
	 * @returns ServiceProxyResponse
	 */ 
	readGroupEntitiesPageByOffset(context: string, pageOffset: number): {
    status: number;
    data: 
    {
        _serverTime: number;
        results: 
        {
            moreBefore: number;
            count: number;
            items: Array<
            {
                gameId: string;
                groupId: string;
                entityId: string;
                ownerId: any | null;
                entityType: string;
                createdAt: number;
                updatedAt: number;
                version: number;
                data: 
                {
                    third: number;
                };
                acl: 
                {
                    member: number;
                    other: number;
                };
            }>;
            page: number;
            moreAfter: number;
        };
        context: string;
    };
};

	/**
	 * Read an entity in the group.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {String} entityId Id of the entity.
	 * @returns ServiceProxyResponse
	 */ 
	readGroupEntity(groupId: string, entityId: string): {
    status: number;
    data: 
    {
        gameId: string;
        groupId: string;
        entityId: string;
        ownerId: any | null;
        entityType: string;
        createdAt: number;
        updatedAt: number;
        version: number;
        data: 
        {
        };
        acl: 
        {
            member: number;
            other: number;
        };
        _serverTime: number;
    };
};

	/**
	 * Create an entity in the group. Optional parameters: All except groupId. If entity is owned by a specific member, a member ACL is required.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {String} entityType Type of the group entity.
	 * @param  {Boolean} isOwnedByGroupMember true if entity is owned by a member; false if owned by the entire group.
	 * @param  {NativeObject} acl Access control list for the group entity.
	 * @param  {NativeObject} data Custom application data.
	 * @returns ServiceProxyResponse
	 */ 
	createGroupEntity(groupId: string, entityType: string, isOwnedByGroupMember: boolean, acl: Object, data: Object): {
    status: number;
    data: 
    {
        gameId: string;
        groupId: string;
        entityId: string;
        ownerId: any | null;
        entityType: string;
        createdAt: number;
        updatedAt: number;
        version: number;
        data: 
        {
        };
        acl: 
        {
            member: number;
            other: number;
        };
    };
};

	/**
	 * Update the acl settings for a group entity, enforcing ownership.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {String} entityId The id of the entity to update.
	 * @param  {NativeObject} acl Access control list for the group entity.
	 * @returns ServiceProxyResponse
	 */ 
	updateGroupEntityAcl(groupId: string, entityId: string, acl: Object): {
    data: 
    {
        createdAt: number;
        entityType: string;
        groupId: string;
        entityId: string;
        acl: 
        {
            member: number;
            other: number;
        };
        ownerId: any | null;
        version: number;
        updatedAt: number;
    };
    status: number;
};

	/**
	 * Update the data for a group entity . Optional parameters: data (will clear data if not provided)
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {String} entityId The id of the entity to update.
	 * @param  {Long} version Version to verify.
	 * @param  {NativeObject} data Data to apply to group.
	 * @returns ServiceProxyResponse
	 */ 
	updateGroupEntityData(groupId: string, entityId: string, version: number, data: Object): {
    status: number;
    data: any | null;
};

	/**
	 * Delete an entity in the group.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {String} entityId Id of the entity.
	 * @param  {Long} version The current version of the group entity (for concurrency checking).
	 * @returns ServiceProxyResponse
	 */ 
	deleteGroupEntity(groupId: string, entityId: string, version: number): {
    status: number;
    data: any | null;
};

	/**
	 * Partial increment of group entity data field items.  Partial set of items incremented as specified.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {String} entityId Id of the entity.
	 * @param  {NativeObject} data Partial data map with incremental values.
	 * @returns ServiceProxyResponse
	 */ 
	incrementGroupEntityData(groupId: string, entityId: string, data: Object): {
    status: number;
    data: any | null;
};

	/**
	 * Retrieve a page of group summary information based on the specified context, bypassing ownership/ACL checks.
	 * 
	 * @param  {NativeObject} context The JSON context for the page request.
	 * @returns ServiceProxyResponse
	 */ 
	sysListGroupsPage(context: Object): {
    status: number;
    data: 
    {
        results: 
        {
            moreBefore: number;
            count: number;
            items: Array<
            {
                groupType: string;
                groupId: string;
                isOpenGroup: number;
                requestingPendingMemberCount: number;
                invitedPendingMemberCount: number;
                ownerId: string;
                name: string;
                memberCount: number;
            }>;
            page: number;
            moreAfter: number;
        };
        context: string;
    };
};

	/**
	 * Retrieve a page of group summary information based on the encoded context and specified page offset, bypassing ownership/ACL checks.
	 * 
	 * @param  {String} context The context string returned from the server from a previous call to ListGroupsPage or ListGroupsPageByOffset.
	 * @param  {Long} pageOffset The positive or negative page offset to fetch. Uses the last page retrieved using the context string to determine a starting point.
	 * @returns ServiceProxyResponse
	 */ 
	sysListGroupsPageByOffset(context: string, pageOffset: number): {
    status: number;
    data: 
    {
        results: 
        {
            moreBefore: number;
            count: number;
            items: Array<
            {
                groupType: string;
                groupId: string;
                isOpenGroup: number;
                requestingPendingMemberCount: number;
                invitedPendingMemberCount: number;
                ownerId: string;
                name: string;
                memberCount: number;
            }>;
            page: number;
            moreAfter: number;
        };
        context: string;
    };
};

	/**
	 * Retrieve information about the group, bypassing ownership/ACL checks.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @returns ServiceProxyResponse
	 */ 
	sysReadGroup(groupId: string): {
    status: number;
    data: 
    {
        gameId: string;
        groupId: string;
        ownerId: string;
        name: string;
        groupType: string;
        createdAt: number;
        updatedAt: number;
        members: 
        {
            b67b2d731e8c42e99be59c1879a48555: 
            {
                role: string;
                attributes: 
                {
                };
            };
        };
        pendingMembers: 
        {
        };
        version: number;
        data: 
        {
        };
        isOpenGroup: number;
        defaultMemberAttributes: 
        {
        };
        memberCount: number;
        invitedPendingMemberCount: number;
        requestingPendingMemberCount: number;
        acl: 
        {
            other: number;
            member: number;
        };
    };
};

	/**
	 * Create a group owned by the specified owner. Optional parameters: all except name, groupType and ownerId.
	 * 
	 * @param  {String} name A name for the group.
	 * @param  {String} groupType The type of group.
	 * @param  {Boolean} isOpenGroup true if group is open; false if closed.
	 * @param  {NativeObject} acl The group's access control list. A null ACL implies default.
	 * @param  {String} ownerId Profile ID of user to be owner of group.
	 * @param  {NativeObject} ownerAttributes Attributes for the group owner. Optional.
	 * @param  {NativeObject} defaultMemberAttributes Default attributes for group members. Optional.
	 * @param  {NativeObject} data Custom application data. Optional.
	 * @param  {NativeObject} summaryData Public summary data for the group that is viewable even by non-members. Optional.
	 * @returns ServiceProxyResponse
	 */ 
	sysCreateGroup(name: string, groupType: string, isOpenGroup: boolean, acl: Object, ownerId: string, ownerAttributes: Object, defaultMemberAttributes: Object, data: Object, summaryData: Object): {
    data: 
    {
        gameId: string;
        groupId: string;
        ownerId: string;
        name: string;
        groupType: string;
        createdAt: number;
        updatedAt: number;
        members: 
        {
            7f06ee4dbc4048eaaa27d3b73059491b: 
            {
                role: string;
                attributes: 
                {
                };
            };
        };
        pendingMembers: 
        {
        };
        version: number;
        summaryData: 
        {
        };
        isOpenGroup: number;
        defaultMemberAttributes: 
        {
        };
        memberCount: number;
        invitedPendingMemberCount: number;
        requestingPendingMemberCount: number;
        acl: 
        {
            member: number;
            other: number;
        };
    };
    status: number;
};

	/**
	 * Gets a list of up to maxReturn randomly selected groups from the server based on the where condition, bypassing ownership/ACL checks.
	 * 
	 * @param  {NativeObject} where A mongo style query string.
	 * @param  {Long} maxReturn The max count of groups to randomly select.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetRandomGroupsMatching(where: Object, maxReturn: number): {
    data: 
    {
        count: number;
        groups: Array<
        {
            gameId: string;
            groupId: string;
            ownerId: string;
            name: string;
            groupType: string;
            createdAt: number;
            updatedAt: number;
            members: 
            {
                10b6d6fa0aa643b0a7b348aff2d13312: 
                {
                    role: string;
                    attributes: 
                    {
                    };
                };
                7f06ee4dbc4048eaaa27d3b73059491b: 
                {
                    role: string;
                    attributes: 
                    {
                    };
                };
            };
            pendingMembers: 
            {
                10b6d6fa0aa643b0a7b348aff2d13312: 
                {
                    role: string;
                    attributes: 
                    {
                    };
                    pendingReason: string;
                };
            };
            version: number;
            data: 
            {
            };
            summaryData: 
            {
            };
            isOpenGroup: number;
            defaultMemberAttributes: 
            {
            };
            memberCount: number;
            invitedPendingMemberCount: number;
            requestingPendingMemberCount: number;
            acl: 
            {
                member: number;
                other: number;
            };
        }>;
    };
    status: number;
};

	/**
	 * Update a group's name, bypassing ownership/ACL checks.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {String} name A name to apply to the group.
	 * @returns ServiceProxyResponse
	 */ 
	sysUpdateGroupName(groupId: string, name: string): {
    status: number;
    data: any | null;
};

	/**
	 * Retrieve the group data, bypassing ownership/ACL checks.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @returns ServiceProxyResponse
	 */ 
	sysReadGroupData(groupId: string): {
    status: number;
    data: 
    {
        data: 
        {
            testInc: number;
        };
    };
};

	/**
	 * Update a group's data, bypassing ownership/ACL checks.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {Long} version Version to verify.
	 * @param  {NativeObject} data Data to apply to group.
	 * @returns ServiceProxyResponse
	 */ 
	sysUpdateGroupData(groupId: string, version: number, data: Object): {
    data: 
    {
        gameId: string;
        groupId: string;
        ownerId: string;
        name: string;
        groupType: string;
        createdAt: number;
        updatedAt: number;
        members: 
        {
            79ab573d459e42ceac65c2fe8e81a3ae: 
            {
                role: string;
                attributes: 
                {
                    groupatt: string;
                };
            };
            3290282537a143e289b747e849b1ec4b: 
            {
                role: string;
                attributes: 
                {
                };
            };
            ec52d98835154032a8fdacc48e985792: 
            {
                role: string;
                attributes: 
                {
                };
            };
            cd0356bdab7f4fd7bc589422cd3a2a59: 
            {
                role: string;
                attributes: 
                {
                };
            };
            8f9f8269ad3e4e3dbc2a3dd31afb0b17: 
            {
                role: string;
                attributes: 
                {
                };
            };
            8bd564a73f914a98a4b343cd7d266133: 
            {
                role: string;
                attributes: 
                {
                };
            };
            336f36beda114457bda6ccecd47b63e3: 
            {
                role: string;
                attributes: 
                {
                };
            };
            1e8c17bfede94976b147b44bd2da6817: 
            {
                role: string;
                attributes: 
                {
                };
            };
        };
        pendingMembers: 
        {
        };
        version: number;
        summaryData: 
        {
        };
        isOpenGroup: number;
        defaultMemberAttributes: 
        {
        };
        memberCount: number;
        invitedPendingMemberCount: number;
        requestingPendingMemberCount: number;
        acl: 
        {
            member: number;
            other: number;
        };
    };
    status: number;
};

	/**
	 * Update a group's summary data, bypassing ownership/ACL checks.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {Long} version Version to verify.
	 * @param  {NativeObject} summaryData Public summary data for the group that is viewable even by non-members.
	 * @returns ServiceProxyResponse
	 */ 
	sysUpdateGroupSummaryData(groupId: string, version: number, summaryData: Object): {
    data: 
    {
        gameId: string;
        groupId: string;
        ownerId: string;
        name: string;
        groupType: string;
        createdAt: number;
        updatedAt: number;
        members: 
        {
            77ce888920b74d01b248e0beb747f1b4: 
            {
                role: string;
                attributes: 
                {
                };
            };
        };
        pendingMembers: 
        {
        };
        version: number;
        summaryData: 
        {
            new: string;
        };
        isOpenGroup: number;
        defaultMemberAttributes: 
        {
        };
        memberCount: number;
        invitedPendingMemberCount: number;
        requestingPendingMemberCount: number;
        acl: 
        {
            member: number;
            other: number;
        };
    };
    status: number;
};

	/**
	 * Delete a group, bypassing ownership/ACL checks.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {Long} version The current group version.
	 * @returns ServiceProxyResponse
	 */ 
	sysDeleteGroup(groupId: string, version: number): {
    status: number;
    data: any | null;
};

	/**
	 * Partial increment of group data field items.  Partial set of items incremented as specified. Bypasses ownership/ACL checks.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {NativeObject} data Partial data map with incremental values.
	 * @returns ServiceProxyResponse
	 */ 
	sysIncrementGroupData(groupId: string, data: Object): {
    status: number;
    data: any | null;
};

	/**
	 * Read all members in the group, bypassing ownership/ACL checks.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @returns ServiceProxyResponse
	 */ 
	sysReadGroupMembers(groupId: string): {
    status: number;
    data: 
    {
        ee8cad2616f24ef890453aab84ce6362: 
        {
            role: string;
            attributes: 
            {
            };
            playerName: string;
            emailAddress: string;
            pic: string;
            summaryFriendData: 
            {
                xp: number;
                attributeName: string;
            };
        };
        295c510f507f4bcf80e1ebc73708ec3c: 
        {
            role: string;
            attributes: 
            {
            };
            playerName: string;
            emailAddress: string;
            pic: any | null;
        };
    };
};

	/**
	 * Add a user as a member to the group, bypassing ownership/ACL checks. Optional parameters: role OR attributes.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {String} profileId The profile id of the member being added.
	 * @param  {String} role Role of the user being added as a member.
	 * @param  {NativeObject} attributes Attributes of the member being added.
	 * @returns ServiceProxyResponse
	 */ 
	sysAddGroupMember(groupId: string, profileId: string, role: string, attributes: Object): {
    status: number;
    data: any | null;
};

	/**
	 * Update a member in the group, bypassing ownership/ACL checks. Must provide role, but attributes optional.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {String} profileId The profile id of the member being updated.
	 * @param  {String} role Role of the member being updated.
	 * @param  {NativeObject} attributes Attributes of the member being updated.
	 * @returns ServiceProxyResponse
	 */ 
	sysUpdateGroupMember(groupId: string, profileId: string, role: string, attributes: Object): {
    status: number;
    data: any | null;
};

	/**
	 * Verifies if user is a group member and returns information about group member, bypassing ownership/ACL checks.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {String} profileId The profile id of the user to be checked.
	 * @returns ServiceProxyResponse
	 */ 
	sysIsGroupMember(groupId: string, profileId: string): {
    data: 
    {
        isGroupMember: number;
        role: string;
        attributes: 
        {
        };
    };
    status: number;
};

	/**
	 * Set a group's access conditions, bypassing ownership/ACL checks.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {NativeObject} acl The group's access control list. A null ACL implies default.
	 * @returns ServiceProxyResponse
	 */ 
	sysUpdateGroupAcl(groupId: string, acl: Object): {
    data: 
    {
        gameId: string;
        groupId: string;
        ownerId: string;
        name: string;
        groupType: string;
        createdAt: number;
        updatedAt: number;
        members: 
        {
            8bd564a73f914a98a4b343cd7d266133: 
            {
                role: string;
                attributes: 
                {
                };
            };
            a50a9aae65fc4171b3f9c0054b7e2d6b: 
            {
                role: string;
                attributes: 
                {
                };
            };
            07ba7ab235054342b91f6500fa8f5585: 
            {
                role: string;
                attributes: 
                {
                };
            };
        };
        pendingMembers: 
        {
        };
        version: number;
        summaryData: 
        {
        };
        isOpenGroup: number;
        defaultMemberAttributes: 
        {
        };
        memberCount: number;
        invitedPendingMemberCount: number;
        requestingPendingMemberCount: number;
        acl: 
        {
            member: number;
            other: number;
        };
        groupFileTree: 
        {
            tree: Array<
            {
                treeId: string;
                children: Array<
                {
                    treeId: string;
                    children: any | null;
                    name: string;
                    acl: 
                    {
                        member: number;
                        other: number;
                    };
                    type: string;
                    ownerId: any | null;
                    desc: string;
                }>;
                name: string;
                acl: 
                {
                    member: number;
                    other: number;
                };
                type: string;
                ownerId: any | null;
                desc: string;
            }>;
            acl: 
            {
                member: number;
                other: number;
            };
            version: number;
        };
    };
    status: number;
};

	/**
	 * Set whether a group is open (true) or closed (false), bypassing ownership/ACL checks.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {Boolean} isOpenGroup true if group is open; false if closed.
	 * @returns ServiceProxyResponse
	 */ 
	sysSetGroupOpen(groupId: string, isOpenGroup: boolean): {
    status: number;
    data: any | null;
};

	/**
	 * Retrieve a page of group entity information based on the specified context, bypassing ownership/ACL checks.
	 * 
	 * @param  {NativeObject} context The JSON context for the page request.
	 * @returns ServiceProxyResponse
	 */ 
	sysReadGroupEntitiesPage(context: Object): {
    status: number;
    data: 
    {
        _serverTime: number;
        results: 
        {
            moreBefore: number;
            count: number;
            items: Array<
            {
                gameId: string;
                groupId: string;
                entityId: string;
                ownerId: any | null;
                entityType: string;
                createdAt: number;
                updatedAt: number;
                version: number;
                data: 
                {
                };
                acl: 
                {
                    member: number;
                    other: number;
                };
            }>;
            page: number;
            moreAfter: number;
        };
        context: string;
    };
};

	/**
	 * Retrieve a page of group entity information based on the encoded context and specified page offset, bypassing ownership/ACL checks.
	 * 
	 * @param  {String} context The context string returned from the server from a previous call to ReadGroupEntitiesPage or ReadGroupEntitiesPageByOffset.
	 * @param  {Long} pageOffset The positive or negative page offset to fetch. Uses the last page retrieved using the context string to determine a starting point.
	 * @returns ServiceProxyResponse
	 */ 
	sysReadGroupEntitiesPageByOffset(context: string, pageOffset: number): {
    status: number;
    data: 
    {
        _serverTime: number;
        results: 
        {
            moreBefore: number;
            count: number;
            items: Array<
            {
                gameId: string;
                groupId: string;
                entityId: string;
                ownerId: any | null;
                entityType: string;
                createdAt: number;
                updatedAt: number;
                version: number;
                data: 
                {
                    third: number;
                };
                acl: 
                {
                    member: number;
                    other: number;
                };
            }>;
            page: number;
            moreAfter: number;
        };
        context: string;
    };
};

	/**
	 * Read an entity in the group, bypassing ownership/ACL checks.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {String} entityId Id of the entity.
	 * @returns ServiceProxyResponse
	 */ 
	sysReadGroupEntity(groupId: string, entityId: string): {
    status: number;
    data: 
    {
        gameId: string;
        groupId: string;
        entityId: string;
        ownerId: any | null;
        entityType: string;
        createdAt: number;
        updatedAt: number;
        version: number;
        data: 
        {
        };
        acl: 
        {
            member: number;
            other: number;
        };
        _serverTime: number;
    };
};

	/**
	 * Create an entity in the group with no owner. Optional parameters: All except groupId.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {String} entityType Type of the group entity.
	 * @param  {NativeObject} acl Access control list for the group entity.
	 * @param  {NativeObject} data Custom application data.
	 * @returns ServiceProxyResponse
	 */ 
	sysCreateGroupEntity(groupId: string, entityType: string, acl: Object, data: Object): {
    status: number;
    data: 
    {
        gameId: string;
        groupId: string;
        entityId: string;
        ownerId: any | null;
        entityType: string;
        createdAt: number;
        updatedAt: number;
        version: number;
        data: 
        {
        };
        acl: 
        {
            member: number;
            other: number;
        };
    };
};

	/**
	 * Update the acl settings for a group entity, bypassing ownership/ACL checks.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {String} entityId The id of the entity to update.
	 * @param  {NativeObject} acl Access control list for the group entity.
	 * @returns ServiceProxyResponse
	 */ 
	sysUpdateGroupEntityAcl(groupId: string, entityId: string, acl: Object): {
    data: 
    {
        createdAt: number;
        entityType: string;
        groupId: string;
        entityId: string;
        acl: 
        {
            member: number;
            other: number;
        };
        ownerId: any | null;
        version: number;
        updatedAt: number;
    };
    status: number;
};

	/**
	 * Update the data for a group entity, bypassing ownership/ACL checks. Optional parameters: data (will clear data if not provided)
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {String} entityId The id of the entity to update.
	 * @param  {Long} version Version to verify.
	 * @param  {NativeObject} data Data to apply to group.
	 * @returns ServiceProxyResponse
	 */ 
	sysUpdateGroupEntityData(groupId: string, entityId: string, version: number, data: Object): {
    status: number;
    data: any | null;
};

	/**
	 * Delete an entity in the group, bypassing ownership/ACL checks.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {String} entityId Id of the entity.
	 * @param  {Long} version The current version of the group entity (for concurrency checking).
	 * @returns ServiceProxyResponse
	 */ 
	sysDeleteGroupEntity(groupId: string, entityId: string, version: number): {
    status: number;
    data: any | null;
};

	/**
	 * Partial increment of group entity data field items.  Partial set of items incremented as specified. Bypasses ownership/ACL checks.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @param  {String} entityId Id of the entity.
	 * @param  {NativeObject} data Partial data map with incremental values.
	 * @returns ServiceProxyResponse
	 */ 
	sysIncrementGroupEntityData(groupId: string, entityId: string, data: Object): {
    status: number;
    data: any | null;
};

	/**
	 * Delete a request to join the group.
	 * 
	 * @param  {String} groupId The id of the group.
	 * @returns ServiceProxyResponse
	 */ 
	deleteGroupJoinRequest(groupId: string): {
    status: number;
    data: any | null;
};
}