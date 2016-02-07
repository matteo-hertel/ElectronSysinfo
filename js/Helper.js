module.exports = {
    convertTo : function(size, type){
        switch (type) {
            case "KB":
                return parseInt(size) / 1024;

            case "MB":
                return parseInt(size) / 1024 / 1024;

            case "GB":
                return parseInt(size) / 1024 / 1024 / 1024;

            default:
                return size;

        }
    }
};
