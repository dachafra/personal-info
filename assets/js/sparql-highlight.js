// SPARQL Language Support for highlight.js
function registerSPARQL(hljs) {
    hljs.registerLanguage('sparql', () => {
        return {
            case_insensitive: true,
            keywords: {
                keyword: 'PREFIX BASE SELECT CONSTRUCT DESCRIBE ASK WHERE FILTER OPTIONAL UNION GRAPH SERVICE BIND AS DISTINCT REDUCED FROM NAMED ORDER BY ASC DESC LIMIT OFFSET VALUES GROUP BY HAVING' +
                        ' INSERT DELETE WITH DATA INTO USING NAMED CLEAR DROP CREATE SILENT LOAD TO DEFAULT ALL MINIMIZE MAXIMIZE EXISTS NOT IN MINUS',
                operator: 'a is',
                built_in: 'isIRI isURI isBLANK isLITERAL str lang datatype BOUND sameTerm COUNT SUM MIN MAX AVG SAMPLE GROUP_CONCAT SEPARATOR'
            },
            contains: [
                {
                    // Variables starting with ?
                    className: 'variable',
                    begin: /\?[a-zA-Z][a-zA-Z0-9_]*/
                },
                {
                    // URIs between < >
                    className: 'uri',
                    begin: /<[^>]+>/
                },
                {
                    // PREFIX keyword and prefix name
                    className: 'prefix',
                    begin: /PREFIX\s+[a-zA-Z0-9_-]+:/,
                    relevance: 10
                },
                {
                    // Functions and aggregates
                    className: 'function',
                    begin: /(?:COUNT|SUM|MIN|MAX|AVG|SAMPLE|GROUP_CONCAT|SEPARATOR|STRLEN|SUBSTR|UCASE|LCASE|STRSTARTS|STRENDS|CONTAINS|ENCODE_FOR_URI|CONCAT|str|lang|datatype|BOUND|sameTerm|isIRI|isURI|isBLANK|isLITERAL)\s*\(/,
                    end: /\)/,
                    returnBegin: true
                },
                {
                    // Comments
                    className: 'comment',
                    begin: /#/,
                    end: /$/
                },
                {
                    // String literals
                    className: 'string',
                    begin: /"/,
                    end: /"/,
                    contains: [{ begin: /\\./ }]
                },
                {
                    // Single quote string literals
                    className: 'string',
                    begin: /'/,
                    end: /'/,
                    contains: [{ begin: /\\./ }]
                },
                {
                    // Numbers
                    className: 'number',
                    begin: /[+-]?\d+(\.\d+)?([eE][+-]?\d+)?/
                },
                {
                    // Operators
                    className: 'operator',
                    begin: /&&|\|\||=|!=|<|>|<=|>=|\+|-|\*|\/|!|\^/
                }
            ]
        };
    });
}