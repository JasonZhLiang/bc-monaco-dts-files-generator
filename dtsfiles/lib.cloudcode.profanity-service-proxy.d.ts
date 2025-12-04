/// <reference no-default-lib="true"/>

interface ProfanityServiceProxy {
	/**
	 * Checks text for profanity.
	 * 
	 * @param  {string} text The text to check.
	 * @param  {string} languages A language code to use as the filter. 'en' Optionally, use a comma to a delimited list of language codes. 'en,fr'
	 * @param  {boolean} flagEmail Should emails be removed? Use false to leave emails visible.
	 * @param  {boolean} flagPhone Should phone numbers be removed? Use false to leave phone numbers visible.
	 * @param  {boolean} flagUrls Should URLs be removed? Use false to leave urls visible.
	 * @returns ServiceProxyResponse
	 */ 
	profanityCheck(text: string, languages: string, flagEmail: boolean, flagPhone: boolean, flagUrls: boolean): ServiceProxyResponse;

	/**
	 * Replaces profanity words with symbol.
	 * 
	 * @param  {string} text The text to check.
	 * @param  {string} replaceSymbol The text to replace individual characters of profanity text with.
	 * @param  {string} languages A language code to use as the filter. 'en' Optionally, use a comma to a delimited list of language codes. 'en,fr'
	 * @param  {boolean} flagEmail Should emails be removed? Use false to leave emails visible.
	 * @param  {boolean} flagPhone Should phone numbers be removed? Use false to leave phone numbers visible.
	 * @param  {boolean} flagUrls Should URLs be removed? Use false to leave urls visible.
	 * @returns ServiceProxyResponse
	 */ 
	profanityReplaceText(text: string, replaceSymbol: string, languages: string, flagEmail: boolean, flagPhone: boolean, flagUrls: boolean): ServiceProxyResponse;

	/**
	 * Checks text for profanity and returns a list of bad words.
	 * 
	 * @param  {string} text The text to check.
	 * @param  {string} languages A language code to use as the filter. 'en' Optionally, use a comma to a delimited list of language codes. 'en,fr'
	 * @param  {boolean} flagEmail Should emails be removed? Use false to leave emails visible.
	 * @param  {boolean} flagPhone Should phone numbers be removed? Use false to leave phone numbers visible.
	 * @param  {boolean} flagUrls Should URLs be removed? Use false to leave urls visible.
	 * @returns ServiceProxyResponse
	 */ 
	profanityIdentifyBadWords(text: string, languages: string, flagEmail: boolean, flagPhone: boolean, flagUrls: boolean): ServiceProxyResponse;
}