/// <reference no-default-lib="true"/>

interface PushNotificationServiceProxy {
	/**
	 * Registers the given device token with the server to enable this device to receive push notifications.
	 * 
	 * @param  {String} deviceType The device platform being registered.
	 * @param  {String} deviceToken The platform-dependant device token needed for push notifications.
	 * @returns ServiceProxyResponse
	 */ 
	registerPushNotificationDeviceToken(deviceType: string, deviceToken: string): {
    status: number;
    data: any | null;
};

	/**
	 * Deregisters the given device token from the server to disable this device from receiving push notifications.
	 * 
	 * @param  {String} deviceType The device platform being deregistered.
	 * @param  {String} deviceToken The platform-dependant device token needed for push notifications.
	 * @returns ServiceProxyResponse
	 */ 
	deregisterPushNotificationDeviceToken(deviceType: string, deviceToken: string): {
    status: number;
    data: any | null;
};

	/**
	 * Deregisters all device tokens currently registered to the user.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	deregisterAllPushNotificationDeviceTokens(): {
    status: number;
    data: any | null;
};

	/**
	 * Sends a non-localized push notification to a target user.
	 * 
	 * @param  {String} toProfileId The profileId of the user to receive the notification.
	 * @param  {String} message The content of the message.
	 * @returns ServiceProxyResponse
	 */ 
	sendSimplePushNotification(toProfileId: string, message: string): {
    status: number;
    data: any | null;
};

	/**
	 * Sends a template based (localizable) push notification to a target user.
	 * 
	 * @param  {String} toProfileId The profileId of the user to receive the notification.
	 * @param  {Long} notificationTemplateId Id of the notification template.
	 * @returns ServiceProxyResponse
	 */ 
	sendRichPushNotification(toProfileId: string, notificationTemplateId: number): {
    status: number;
    data: any | null;
};

	/**
	 * Sends a template based (localizable) push notification to a target user.
	 * 
	 * @param  {String} toProfileId The profileId of the user to receive the notification.
	 * @param  {Long} notificationTemplateId Id of the notification template.
	 * @param  {NativeObject} substitutions JSON defining the substitution params to use with the template.
	 * @returns ServiceProxyResponse
	 */ 
	sendRichPushNotificationWithParams(toProfileId: string, notificationTemplateId: number, substitutions: Object): {
    status: number;
    data: any | null;
};

	/**
	 * Sends a normalized push notification to a target user.
	 * 
	 * @param  {String} toProfileId The profileId of the user to receive the notification.
	 * @param  {NativeObject} alertContent Body and title of alert.
	 * @param  {NativeObject} customData Optional custom data.
	 * @returns ServiceProxyResponse
	 */ 
	sendNormalizedPushNotification(toProfileId: string, alertContent: Object, customData: Object): {
    status: number;
    data: any | null;
};

	/**
	 * Sends a raw push notification to a target user.
	 * 
	 * @param  {String} toProfileId The profileId of the user to receive the notification.
	 * @param  {NativeObject} fcmContent FCM dependent content.
	 * @param  {NativeObject} iosContent IOS (APNS) dependent content.
	 * @param  {NativeObject} facebookContent Facebook dependent content.
	 * @returns ServiceProxyResponse
	 */ 
	sendRawPushNotification(toProfileId: string, fcmContent: Object, iosContent: Object, facebookContent: Object): ServiceProxyResponse;

	/**
	 * Sends a template based (localizable) push notification to a target group.
	 * 
	 * @param  {String} groupId Target group id.
	 * @param  {Long} notificationTemplateId Id of the notification template.
	 * @param  {NativeObject} substitutions JSON defining the substitution params to use with the template.
	 * @returns ServiceProxyResponse
	 */ 
	sendTemplatedPushNotificationToGroup(groupId: string, notificationTemplateId: number, substitutions: Object): {
    status: number;
    data: any | null;
};

	/**
	 * Sends a normalized push notification to a target group.
	 * 
	 * @param  {String} groupId Target group id.
	 * @param  {NativeObject} alertContent Body and title of alert.
	 * @param  {NativeObject} customData Optional custom data.
	 * @returns ServiceProxyResponse
	 */ 
	sendNormalizedPushNotificationToGroup(groupId: string, alertContent: Object, customData: Object): {
    status: number;
    data: any | null;
};

	/**
	 * Sends a raw push notification to a target group.
	 * 
	 * @param  {String} groupId Target group id.
	 * @param  {NativeObject} fcmContent FCM dependent content.
	 * @param  {NativeObject} iosContent IOS (APNS) dependent content.
	 * @param  {NativeObject} facebookContent Facebook dependent content.
	 * @returns ServiceProxyResponse
	 */ 
	sendRawPushNotificationToGroup(groupId: string, fcmContent: Object, iosContent: Object, facebookContent: Object): ServiceProxyResponse;

	/**
	 * Sends a normalized push notification to a list of target profiles.
	 * 
	 * @param  {NativeArray} profileIds Target user list.
	 * @param  {NativeObject} alertContent Body and title of alert.
	 * @param  {NativeObject} customData Optional custom data.
	 * @returns ServiceProxyResponse
	 */ 
	sendNormalizedPushNotificationBatch(profileIds: Array<any>, alertContent: Object, customData: Object): {
    status: number;
    data: any | null;
};

	/**
	 * Sends a raw push notification to a list of target profiles.
	 * 
	 * @param  {NativeArray} profileIds Target user list.
	 * @param  {NativeObject} fcmContent FCM dependent content.
	 * @param  {NativeObject} iosContent IOS (APNS) dependent content.
	 * @param  {NativeObject} facebookContent Facebook dependent content.
	 * @returns ServiceProxyResponse
	 */ 
	sendRawPushNotificationBatch(profileIds: Array<any>, fcmContent: Object, iosContent: Object, facebookContent: Object): ServiceProxyResponse;

	/**
	 * Schedules a rich notification.
	 * 
	 * @param  {String} profileId Identifies the user to send the notification to.
	 * @param  {Long} notificationTemplateId Id of the notification template.
	 * @param  {NativeObject} substitutions JSON defining the substitution params to use with the template.
	 * @param  {Long} minutesFromNow Minutes in the future to send notification.
	 * @returns ServiceProxyResponse
	 */ 
	scheduleRichPushNotificationMinutes(profileId: string, notificationTemplateId: number, substitutions: Object, minutesFromNow: number): ServiceProxyResponse;

	/**
	 * Schedules a rich notification.
	 * 
	 * @param  {String} profileId Identifies the user to send the notification to.
	 * @param  {Long} notificationTemplateId Id of the notification template.
	 * @param  {NativeObject} substitutions JSON defining the substitution params to use with the template.
	 * @param  {Date} startDateUTC Optional base date for local time calculation.
	 * @returns ServiceProxyResponse
	 */ 
	scheduleRichPushNotificationUTC(profileId: string, notificationTemplateId: number, substitutions: Object, startDateUTC: Date): ServiceProxyResponse;

	/**
	 * Schedules a normalized notification.
	 * 
	 * @param  {String} profileId Identifies the user to send the notification to.
	 * @param  {NativeObject} alertContent Body and title of alert.
	 * @param  {NativeObject} customData Optional custom data.
	 * @param  {Long} minutesFromNow Minutes in the future to send notification.
	 * @returns ServiceProxyResponse
	 */ 
	scheduleNormalizedPushNotificationMinutes(profileId: string, alertContent: Object, customData: Object, minutesFromNow: number): ServiceProxyResponse;

	/**
	 * Schedules a normalized notification.
	 * 
	 * @param  {String} profileId Identifies the user to send the notification to.
	 * @param  {NativeObject} alertContent Body and title of alert.
	 * @param  {NativeObject} customData Optional custom data.
	 * @param  {Date} startDateUTC Time to send notification (UTC)
	 * @returns ServiceProxyResponse
	 */ 
	scheduleNormalizedPushNotificationUTC(profileId: string, alertContent: Object, customData: Object, startDateUTC: Date): ServiceProxyResponse;

	/**
	 * Schedules a raw notification.
	 * 
	 * @param  {String} profileId Identifies the user to send the notification to.
	 * @param  {NativeObject} fcmContent FCM dependent content.
	 * @param  {NativeObject} iosContent IOS (APNS) dependent content.
	 * @param  {NativeObject} facebookContent Facebook dependent content.
	 * @param  {Date} startDateUTC Optional base date for local time calculation.
	 * @returns ServiceProxyResponse
	 */ 
	scheduleRawPushNotificationUTC(profileId: string, fcmContent: Object, iosContent: Object, facebookContent: Object, startDateUTC: Date): ServiceProxyResponse;

	/**
	 * Schedules a raw notification.
	 * 
	 * @param  {String} profileId Identifies the user to send the notification to.
	 * @param  {NativeObject} fcmContent FCM dependent content.
	 * @param  {NativeObject} iosContent IOS (APNS) dependent content.
	 * @param  {NativeObject} facebookContent Facebook dependent content.
	 * @param  {Long} minutesFromNow Minutes in the future to send notification.
	 * @returns ServiceProxyResponse
	 */ 
	scheduleRawPushNotificationMinutes(profileId: string, fcmContent: Object, iosContent: Object, facebookContent: Object, minutesFromNow: number): ServiceProxyResponse;

	/**
	 * Returns an array of the notification templates defined, with the message text for the specified language code. If the localization for that language doesn't exist, the app's default language is used.
	 * 
	 * @param  {String} languageCode The language code (lowercase) to be used for returning the default message text.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetNotificationTemplates(languageCode: string): {
    data: 
    {
        pushTemplates: Array<
        {
            notificationTemplateId: number;
            name: string;
            defaultMessage: string;
            updatedAt: number;
        }>;
    };
    status: number;
};

	/**
	 * Sends a push to users based on custom collection query and the profileIdField storing the user's brainCloud profile Id.
	 * 
	 * @param  {String} customEntityType Entity type identifying the applicable custom collection.
	 * @param  {NativeObject} customQueryJson JSON query to be applied to the custom collection.
	 * @param  {String} profileIdField Name of field in custom collection that contains the user's brainCloud profile Id. For owned custom collections, this would be 'ownerId', but for unowned custom collections this would be something like 'data.bcProfileId'.
	 * @param  {NativeObject} contentJson JSON containing applicable 'fcmContent', 'iosContent' and/or 'facebookContent'. At least one is required.
	 * @returns ServiceProxyResponse
	 */ 
	sendRawPushToCustomQuery(customEntityType: string, customQueryJson: Object, profileIdField: string, contentJson: Object): ServiceProxyResponse;

}