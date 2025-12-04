/// <reference no-default-lib="true"/>

interface PushNotificationServiceProxy {
	/**
	 * Registers the given device token with the server to enable this device to receive push notifications.
	 * 
	 * @param  {string} deviceType The device platform being registered.
	 * @param  {string} deviceToken The platform-dependant device token needed for push notifications.
	 * @returns ServiceProxyResponse
	 */ 
	registerPushNotificationDeviceToken(deviceType: string, deviceToken: string): ServiceProxyResponse;

	/**
	 * Deregisters the given device token from the server to disable this device from receiving push notifications.
	 * 
	 * @param  {string} deviceType The device platform being deregistered.
	 * @param  {string} deviceToken The platform-dependant device token needed for push notifications.
	 * @returns ServiceProxyResponse
	 */ 
	deregisterPushNotificationDeviceToken(deviceType: string, deviceToken: string): ServiceProxyResponse;

	/**
	 * Deregisters all device tokens currently registered to the user.
	 * 
	 * @returns ServiceProxyResponse
	 */ 
	deregisterAllPushNotificationDeviceTokens(): ServiceProxyResponse;

	/**
	 * Sends a non-localized push notification to a target user.
	 * 
	 * @param  {string} toProfileId The profileId of the user to receive the notification.
	 * @param  {string} message The content of the message.
	 * @returns ServiceProxyResponse
	 */ 
	sendSimplePushNotification(toProfileId: string, message: string): ServiceProxyResponse;

	/**
	 * Sends a template based (localizable) push notification to a target user.
	 * 
	 * @param  {string} toProfileId The profileId of the user to receive the notification.
	 * @param  {long} notificationTemplateId Id of the notification template.
	 * @returns ServiceProxyResponse
	 */ 
	sendRichPushNotification(toProfileId: string, notificationTemplateId: long): ServiceProxyResponse;

	/**
	 * Sends a template based (localizable) push notification to a target user.
	 * 
	 * @param  {string} toProfileId The profileId of the user to receive the notification.
	 * @param  {long} notificationTemplateId Id of the notification template.
	 * @param  {nativeObject} substitutions JSON defining the substitution params to use with the template.
	 * @returns ServiceProxyResponse
	 */ 
	sendRichPushNotificationWithParams(toProfileId: string, notificationTemplateId: long, substitutions: nativeObject): ServiceProxyResponse;

	/**
	 * Sends a normalized push notification to a target user.
	 * 
	 * @param  {string} toProfileId The profileId of the user to receive the notification.
	 * @param  {nativeObject} alertContent Body and title of alert.
	 * @param  {nativeObject} customData Optional custom data.
	 * @returns ServiceProxyResponse
	 */ 
	sendNormalizedPushNotification(toProfileId: string, alertContent: nativeObject, customData: nativeObject): ServiceProxyResponse;

	/**
	 * Sends a raw push notification to a target user.
	 * 
	 * @param  {string} toProfileId The profileId of the user to receive the notification.
	 * @param  {nativeObject} fcmContent FCM dependent content.
	 * @param  {nativeObject} iosContent IOS (APNS) dependent content.
	 * @param  {nativeObject} facebookContent Facebook dependent content.
	 * @returns ServiceProxyResponse
	 */ 
	sendRawPushNotification(toProfileId: string, fcmContent: nativeObject, iosContent: nativeObject, facebookContent: nativeObject): ServiceProxyResponse;

	/**
	 * Sends a template based (localizable) push notification to a target group.
	 * 
	 * @param  {string} groupId Target group id.
	 * @param  {long} notificationTemplateId Id of the notification template.
	 * @param  {nativeObject} substitutions JSON defining the substitution params to use with the template.
	 * @returns ServiceProxyResponse
	 */ 
	sendTemplatedPushNotificationToGroup(groupId: string, notificationTemplateId: long, substitutions: nativeObject): ServiceProxyResponse;

	/**
	 * Sends a normalized push notification to a target group.
	 * 
	 * @param  {string} groupId Target group id.
	 * @param  {nativeObject} alertContent Body and title of alert.
	 * @param  {nativeObject} customData Optional custom data.
	 * @returns ServiceProxyResponse
	 */ 
	sendNormalizedPushNotificationToGroup(groupId: string, alertContent: nativeObject, customData: nativeObject): ServiceProxyResponse;

	/**
	 * Sends a raw push notification to a target group.
	 * 
	 * @param  {string} groupId Target group id.
	 * @param  {nativeObject} fcmContent FCM dependent content.
	 * @param  {nativeObject} iosContent IOS (APNS) dependent content.
	 * @param  {nativeObject} facebookContent Facebook dependent content.
	 * @returns ServiceProxyResponse
	 */ 
	sendRawPushNotificationToGroup(groupId: string, fcmContent: nativeObject, iosContent: nativeObject, facebookContent: nativeObject): ServiceProxyResponse;

	/**
	 * Sends a normalized push notification to a list of target profiles.
	 * 
	 * @param  {nativeArray} profileIds Target user list.
	 * @param  {nativeObject} alertContent Body and title of alert.
	 * @param  {nativeObject} customData Optional custom data.
	 * @returns ServiceProxyResponse
	 */ 
	sendNormalizedPushNotificationBatch(profileIds: nativeArray, alertContent: nativeObject, customData: nativeObject): ServiceProxyResponse;

	/**
	 * Sends a raw push notification to a list of target profiles.
	 * 
	 * @param  {nativeArray} profileIds Target user list.
	 * @param  {nativeObject} fcmContent FCM dependent content.
	 * @param  {nativeObject} iosContent IOS (APNS) dependent content.
	 * @param  {nativeObject} facebookContent Facebook dependent content.
	 * @returns ServiceProxyResponse
	 */ 
	sendRawPushNotificationBatch(profileIds: nativeArray, fcmContent: nativeObject, iosContent: nativeObject, facebookContent: nativeObject): ServiceProxyResponse;

	/**
	 * Schedules a rich notification.
	 * 
	 * @param  {string} profileId Identifies the user to send the notification to.
	 * @param  {long} notificationTemplateId Id of the notification template.
	 * @param  {nativeObject} substitutions JSON defining the substitution params to use with the template.
	 * @param  {long} minutesFromNow Minutes in the future to send notification.
	 * @returns ServiceProxyResponse
	 */ 
	scheduleRichPushNotificationMinutes(profileId: string, notificationTemplateId: long, substitutions: nativeObject, minutesFromNow: long): ServiceProxyResponse;

	/**
	 * Schedules a rich notification.
	 * 
	 * @param  {string} profileId Identifies the user to send the notification to.
	 * @param  {long} notificationTemplateId Id of the notification template.
	 * @param  {nativeObject} substitutions JSON defining the substitution params to use with the template.
	 * @param  {date} startDateUTC Optional base date for local time calculation.
	 * @returns ServiceProxyResponse
	 */ 
	scheduleRichPushNotificationUTC(profileId: string, notificationTemplateId: long, substitutions: nativeObject, startDateUTC: date): ServiceProxyResponse;

	/**
	 * Schedules a normalized notification.
	 * 
	 * @param  {string} profileId Identifies the user to send the notification to.
	 * @param  {nativeObject} alertContent Body and title of alert.
	 * @param  {nativeObject} customData Optional custom data.
	 * @param  {long} minutesFromNow Minutes in the future to send notification.
	 * @returns ServiceProxyResponse
	 */ 
	scheduleNormalizedPushNotificationMinutes(profileId: string, alertContent: nativeObject, customData: nativeObject, minutesFromNow: long): ServiceProxyResponse;

	/**
	 * Schedules a normalized notification.
	 * 
	 * @param  {string} profileId Identifies the user to send the notification to.
	 * @param  {nativeObject} alertContent Body and title of alert.
	 * @param  {nativeObject} customData Optional custom data.
	 * @param  {date} startDateUTC Time to send notification (UTC)
	 * @returns ServiceProxyResponse
	 */ 
	scheduleNormalizedPushNotificationUTC(profileId: string, alertContent: nativeObject, customData: nativeObject, startDateUTC: date): ServiceProxyResponse;

	/**
	 * Schedules a raw notification.
	 * 
	 * @param  {string} profileId Identifies the user to send the notification to.
	 * @param  {nativeObject} fcmContent FCM dependent content.
	 * @param  {nativeObject} iosContent IOS (APNS) dependent content.
	 * @param  {nativeObject} facebookContent Facebook dependent content.
	 * @param  {date} startDateUTC Optional base date for local time calculation.
	 * @returns ServiceProxyResponse
	 */ 
	scheduleRawPushNotificationUTC(profileId: string, fcmContent: nativeObject, iosContent: nativeObject, facebookContent: nativeObject, startDateUTC: date): ServiceProxyResponse;

	/**
	 * Schedules a raw notification.
	 * 
	 * @param  {string} profileId Identifies the user to send the notification to.
	 * @param  {nativeObject} fcmContent FCM dependent content.
	 * @param  {nativeObject} iosContent IOS (APNS) dependent content.
	 * @param  {nativeObject} facebookContent Facebook dependent content.
	 * @param  {long} minutesFromNow Minutes in the future to send notification.
	 * @returns ServiceProxyResponse
	 */ 
	scheduleRawPushNotificationMinutes(profileId: string, fcmContent: nativeObject, iosContent: nativeObject, facebookContent: nativeObject, minutesFromNow: long): ServiceProxyResponse;

	/**
	 * Returns an array of the notification templates defined, with the message text for the specified language code. If the localization for that language doesn't exist, the app's default language is used.
	 * 
	 * @param  {string} languageCode The language code (lowercase) to be used for returning the default message text.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetNotificationTemplates(languageCode: string): ServiceProxyResponse;

	/**
	 * Sends a push to users based on custom collection query and the profileIdField storing the user's brainCloud profile Id.
	 * 
	 * @param  {string} customEntityType Entity type identifying the applicable custom collection.
	 * @param  {nativeObject} customQueryJson JSON query to be applied to the custom collection.
	 * @param  {string} profileIdField Name of field in custom collection that contains the user's brainCloud profile Id. For owned custom collections, this would be 'ownerId', but for unowned custom collections this would be something like 'data.bcProfileId'.
	 * @param  {nativeObject} contentJson JSON containing applicable 'fcmContent', 'iosContent' and/or 'facebookContent'. At least one is required.
	 * @returns ServiceProxyResponse
	 */ 
	sendRawPushToCustomQuery(customEntityType: string, customQueryJson: nativeObject, profileIdField: string, contentJson: nativeObject): ServiceProxyResponse;
}