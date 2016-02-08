/* jshint esnext : true */

module.exports = function() {

    return `
Your system has  {{getTotalMemoryFriendly("GB")}} GB of RAM, the current used RAM is {{percentageMemory}}%
<div id="chartOutput"></div>
`;

};
