/* jshint esnext : true */

module.exports = function() {

    return `
<p>Your system has  {{getTotalMemoryFriendly("GB")}} GB of available RAM</p>
<p>Current RAM usage: {{percentageMemory}}%</p>
<div id="chartOutput"></div>
`;

};
