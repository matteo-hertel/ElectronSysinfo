/* jshint esnext : true */

module.exports = function() {

    return `
    <div class="panel panel-primary">
        <div class="panel-heading" @click="toggleview">
            <h3 class="panel-title"><slot name="heading"></slot></h3>
        </div>
        <div class="panel-body" v-show="!show" slot="body"><slot name="body"></slot></div>
    </div>
`;

};
