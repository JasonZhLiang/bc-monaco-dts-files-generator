/// <reference no-default-lib="true"/>

interface ProfanityServiceProxy {
	/**
	 * Checks text for profanity.
	 * 
	 * @param  {String} text The text to check.
	 * @param  {String} languages A language code to use as the filter. 'en' Optionally, use a comma to a delimited list of language codes. 'en,fr'
	 * @param  {Boolean} flagEmail Should emails be removed? Use false to leave emails visible.
	 * @param  {Boolean} flagPhone Should phone numbers be removed? Use false to leave phone numbers visible.
	 * @param  {Boolean} flagUrls Should URLs be removed? Use false to leave urls visible.
	 * @returns ServiceProxyResponse
	 */ 
	profanityCheck(text: string, languages: string, flagEmail: boolean, flagPhone: boolean, flagUrls: boolean): {
    status: number;
    data: 
    {
        foundCount: string;
    };
};

	/**
	 * Replaces profanity words with symbol.
	 * 
	 * @param  {String} text The text to check.
	 * @param  {String} replaceSymbol The text to replace individual characters of profanity text with.
	 * @param  {String} languages A language code to use as the filter. 'en' Optionally, use a comma to a delimited list of language codes. 'en,fr'
	 * @param  {Boolean} flagEmail Should emails be removed? Use false to leave emails visible.
	 * @param  {Boolean} flagPhone Should phone numbers be removed? Use false to leave phone numbers visible.
	 * @param  {Boolean} flagUrls Should URLs be removed? Use false to leave urls visible.
	 * @returns ServiceProxyResponse
	 */ 
	profanityReplaceText(text: string, replaceSymbol: string, languages: string, flagEmail: boolean, flagPhone: boolean, flagUrls: boolean): {
    data: 
    {
        foundCount: string;
        replacedString: string;
    };
    status: number;
};

	/**
	 * Checks text for profanity and returns a list of bad words.
	 * 
	 * @param  {String} text The text to check.
	 * @param  {String} languages A language code to use as the filter. 'en' Optionally, use a comma to a delimited list of language codes. 'en,fr'
	 * @param  {Boolean} flagEmail Should emails be removed? Use false to leave emails visible.
	 * @param  {Boolean} flagPhone Should phone numbers be removed? Use false to leave phone numbers visible.
	 * @param  {Boolean} flagUrls Should URLs be removed? Use false to leave urls visible.
	 * @returns ServiceProxyResponse
	 */ 
	profanityIdentifyBadWords(text: string, languages: string, flagEmail: boolean, flagPhone: boolean, flagUrls: boolean): {
    status: number;
    data: 
    {
        foundCount: string;
        foundList: Array<string>;
    };
};
}