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
		        20241210: {
		            _id: string;
		            crn00: number;
		            crn01: number;
		            crn02: number;
		            crn03: number;
		            crn04: number;
		            crn05: number;
		            crn06: number;
		            crn07: number;
		            crn14: number;
		            crn21: number;
		            crn28: number;
		            crn30: number;
		            rrn00: number;
		            rrn01: number;
		            rrn02: number;
		            rrn03: number;
		            rrn04: number;
		            rrn05: number;
		            rrn06: number;
		            rrn07: number;
		            rrn14: number;
		            rrn21: number;
		            rrn28: number;
		            rrn30: number;
		            rrd00: number;
		            rrd01: number;
		            rrd02: number;
		            rrd03: number;
		            rrd04: number;
		            rrd05: number;
		            rrd06: number;
		            rrd07: number;
		            rrd14: number;
		            rrd21: number;
		            rrd28: number;
		            rrd30: number;
		            crd00: any | null;
		            crd01: any | null;
		            crd02: any | null;
		            crd03: any | null;
		            crd04: any | null;
		            crd05: any | null;
		            crd06: any | null;
		            crd07: any | null;
		            crd14: any | null;
		            crd21: any | null;
		            crd28: any | null;
		            crd30: any | null;
		        };
		        20250108: {
		            _id: string;
		            crn00: number;
		            crn01: number;
		            crn02: number;
		            crn03: number;
		            crn04: number;
		            crn05: number;
		            crn06: number;
		            crn07: number;
		            crn14: number;
		            crn21: number;
		            crn28: number;
		            crn30: number;
		            rrn00: number;
		            rrn01: number;
		            rrn02: number;
		            rrn03: number;
		            rrn04: number;
		            rrn05: number;
		            rrn06: number;
		            rrn07: number;
		            rrn14: number;
		            rrn21: number;
		            rrn28: number;
		            rrn30: number;
		            rrd00: number;
		            rrd01: number;
		            rrd02: number;
		            rrd03: number;
		            rrd04: number;
		            rrd05: number;
		            rrd06: number;
		            rrd07: number;
		            rrd14: number;
		            rrd21: number;
		            rrd28: number;
		            rrd30: number;
		            crd00: number;
		            crd01: number;
		            crd02: number;
		            crd03: number;
		            crd04: number;
		            crd05: number;
		            crd06: number;
		            crd07: number;
		            crd14: number;
		            crd21: number;
		            crd28: number;
		            crd30: number;
		        };
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
		        20250114: {
		            _id: string;
		            crn00: number;
		            crn01: number;
		            crn02: number;
		            crn03: number;
		            crn04: number;
		            crn05: number;
		            crn06: number;
		            crn07: number;
		            crn14: number;
		            crn21: number;
		            crn28: number;
		            crn30: number;
		            rrn00: number;
		            rrn01: number;
		            rrn02: number;
		            rrn03: number;
		            rrn04: number;
		            rrn05: number;
		            rrn06: number;
		            rrn07: number;
		            rrn14: number;
		            rrn21: number;
		            rrn28: number;
		            rrn30: number;
		            rrd00: number;
		            rrd01: number;
		            rrd02: number;
		            rrd03: number;
		            rrd04: number;
		            rrd05: number;
		            rrd06: number;
		            rrd07: number;
		            rrd14: number;
		            rrd21: number;
		            rrd28: number;
		            rrd30: number;
		            crd00: number;
		            crd01: number;
		            crd02: number;
		            crd03: number;
		            crd04: number;
		            crd05: number;
		            crd06: number;
		            crd07: number;
		            crd14: number;
		            crd21: number;
		            crd28: number;
		            crd30: number;
		        };
		        20250110: {
		            _id: string;
		            crn00: number;
		            crn01: number;
		            crn02: number;
		            crn03: number;
		            crn04: number;
		            crn05: number;
		            crn06: number;
		            crn07: number;
		            crn14: number;
		            crn21: number;
		            crn28: number;
		            crn30: number;
		            rrn00: number;
		            rrn01: number;
		            rrn02: number;
		            rrn03: number;
		            rrn04: number;
		            rrn05: number;
		            rrn06: number;
		            rrn07: number;
		            rrn14: number;
		            rrn21: number;
		            rrn28: number;
		            rrn30: number;
		            rrd00: number;
		            rrd01: number;
		            rrd02: number;
		            rrd03: number;
		            rrd04: number;
		            rrd05: number;
		            rrd06: number;
		            rrd07: number;
		            rrd14: number;
		            rrd21: number;
		            rrd28: number;
		            rrd30: number;
		            crd00: number;
		            crd01: number;
		            crd02: number;
		            crd03: number;
		            crd04: number;
		            crd05: number;
		            crd06: number;
		            crd07: number;
		            crd14: number;
		            crd21: number;
		            crd28: number;
		            crd30: number;
		        };
		        20250108: {
		            _id: string;
		            crn00: number;
		            crn01: number;
		            crn02: number;
		            crn03: number;
		            crn04: number;
		            crn05: number;
		            crn06: number;
		            crn07: number;
		            crn14: number;
		            crn21: number;
		            crn28: number;
		            crn30: number;
		            rrn00: number;
		            rrn01: number;
		            rrn02: number;
		            rrn03: number;
		            rrn04: number;
		            rrn05: number;
		            rrn06: number;
		            rrn07: number;
		            rrn14: number;
		            rrn21: number;
		            rrn28: number;
		            rrn30: number;
		            rrd00: number;
		            rrd01: number;
		            rrd02: number;
		            rrd03: number;
		            rrd04: number;
		            rrd05: number;
		            rrd06: number;
		            rrd07: number;
		            rrd14: number;
		            rrd21: number;
		            rrd28: number;
		            rrd30: number;
		            crd00: number;
		            crd01: number;
		            crd02: number;
		            crd03: number;
		            crd04: number;
		            crd05: number;
		            crd06: number;
		            crd07: number;
		            crd14: number;
		            crd21: number;
		            crd28: number;
		            crd30: number;
		        };
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
		        genTitle: {
		            en: string;
		            fr: string;
		        };
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
		        20241210: {
		            _id: string;
		            crn00: number;
		            crn01: number;
		            crn02: number;
		            crn03: number;
		            crn04: number;
		            crn05: number;
		            crn06: number;
		            crn07: number;
		            crn14: number;
		            crn21: number;
		            crn28: number;
		            crn30: number;
		            rrn00: number;
		            rrn01: number;
		            rrn02: number;
		            rrn03: number;
		            rrn04: number;
		            rrn05: number;
		            rrn06: number;
		            rrn07: number;
		            rrn14: number;
		            rrn21: number;
		            rrn28: number;
		            rrn30: number;
		            rrd00: number;
		            rrd01: number;
		            rrd02: number;
		            rrd03: number;
		            rrd04: number;
		            rrd05: number;
		            rrd06: number;
		            rrd07: number;
		            rrd14: number;
		            rrd21: number;
		            rrd28: number;
		            rrd30: number;
		            crd00: any | null;
		            crd01: any | null;
		            crd02: any | null;
		            crd03: any | null;
		            crd04: any | null;
		            crd05: any | null;
		            crd06: any | null;
		            crd07: any | null;
		            crd14: any | null;
		            crd21: any | null;
		            crd28: any | null;
		            crd30: any | null;
		        };
		        20250108: {
		            _id: string;
		            crn00: number;
		            crn01: number;
		            crn02: number;
		            crn03: number;
		            crn04: number;
		            crn05: number;
		            crn06: number;
		            crn07: number;
		            crn14: number;
		            crn21: number;
		            crn28: number;
		            crn30: number;
		            rrn00: number;
		            rrn01: number;
		            rrn02: number;
		            rrn03: number;
		            rrn04: number;
		            rrn05: number;
		            rrn06: number;
		            rrn07: number;
		            rrn14: number;
		            rrn21: number;
		            rrn28: number;
		            rrn30: number;
		            rrd00: number;
		            rrd01: number;
		            rrd02: number;
		            rrd03: number;
		            rrd04: number;
		            rrd05: number;
		            rrd06: number;
		            rrd07: number;
		            rrd14: number;
		            rrd21: number;
		            rrd28: number;
		            rrd30: number;
		            crd00: number;
		            crd01: number;
		            crd02: number;
		            crd03: number;
		            crd04: number;
		            crd05: number;
		            crd06: number;
		            crd07: number;
		            crd14: number;
		            crd21: number;
		            crd28: number;
		            crd30: number;
		        };
		    };
		    appId: string;
		    appName: string;
		};
		status: number;
	};

}