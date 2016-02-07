/* jshint esnext : true */

module.exports = function(){

return `
Your system has  {{getTotalMemory("GB")}} GB of Ram
<hr />
Test Binding
<input type="text" v-model="totalMemory" />
`;

};
