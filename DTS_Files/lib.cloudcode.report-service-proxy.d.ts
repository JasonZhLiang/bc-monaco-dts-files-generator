/// <reference no-default-lib="true"/>

interface ReportServiceProxy {
	/**
	 * Returns the latest report for the given criteria.
	 * 
	 * @param  {string} subject The report subject.
	 * @param  {string} recurrence The report recurrence.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetLatestReport(subject: string, recurrence: string): {
		data: {
		    reportId: string;
		    createdAt: number;
		    updatedAt: number;
		    expireAtIso: number;
		    subject: string;
		    recurrence: Array<string>;
		    startDate: string;
		    endDate: string;
		    genTitle: {
		        en: string;
		        fr: string;
		    };
		    title: any | null;
		    ownerId: any | null;
		    isFinancial: number;
		    isPublic: number;
		    data: {
		        20241210: Record<string, any>;
		        20250108: Record<string, any>;
		    };
		    appId: string;
		    appName: string;
		};
		status: number;
	};


	/**
	 * Returns the report matching given subject, recurrence and startDate criteria, if it exists.
	 * 
	 * @param  {string} subject The report subject.
	 * @param  {string} recurrence The report recurrence.
	 * @param  {string} startDate The formatted startDate (yyyy-MM-dd).
	 * @returns ServiceProxyResponse
	 */ 
	sysGetReportForStartDate(subject: string, recurrence: string, startDate: string): {
		data: {
		    reportId: string;
		    createdAt: number;
		    updatedAt: number;
		    expireAtIso: number;
		    subject: string;
		    recurrence: Array<string>;
		    startDate: string;
		    endDate: string;
		    genTitle: {
		        en: string;
		        fr: string;
		    };
		    title: any | null;
		    ownerId: any | null;
		    isFinancial: number;
		    isPublic: number;
		    data: {
		        20250114: Record<string, any>;
		        20250110: Record<string, any>;
		        20250108: Record<string, any>;
		    };
		    appId: string;
		    appName: string;
		};
		status: number;
	};


	/**
	 * Returns a list of the metadata for the latest reports for the given report options.
	 * 
	 * @param  {Object} optionsJson The report options to be applied. Must include 'subject'. May include 'recurrence'.
	 * @param  {number} maxReturn The maximum number of results to return. Typically limited to a maximum of 20 results.
	 * @returns ServiceProxyResponse
	 */ 
	sysListLatestReports(optionsJson: Object, maxReturn: number): {
		data: {
		    _serverTime: number;
		    list: Array<{
		        reportId: string;
		        endDate: string;
		        subject: string;
		        appName: string;
		        title: any | null;
		        ownerId: any | null;
		        expireAtIso: number;
		        recurrence: Array<string>;
		        createdAt: number;
		        isFinancial: number;
		        appId: string;
		        isPublic: number;
		        genTitle: Record<string, any>;
		        startDate: string;
		        updatedAt: number;
		    }>;
		};
		status: number;
	};


	/**
	 * Returns the full report for the given reportId, if it exists.
	 * 
	 * @param  {string} reportId The report id uniquely identify the report.
	 * @returns ServiceProxyResponse
	 */ 
	sysGetReport(reportId: string): {
		data: {
		    reportId: string;
		    createdAt: number;
		    updatedAt: number;
		    expireAtIso: number;
		    subject: string;
		    recurrence: Array<string>;
		    startDate: string;
		    endDate: string;
		    genTitle: {
		        en: string;
		        fr: string;
		    };
		    title: any | null;
		    ownerId: any | null;
		    isFinancial: number;
		    isPublic: number;
		    data: {
		        20241210: Record<string, any>;
		        20250108: Record<string, any>;
		    };
		    appId: string;
		    appName: string;
		};
		status: number;
	};

}