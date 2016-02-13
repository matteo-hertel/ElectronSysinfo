Utils = {
    round: function(num) {
        return Math.round(num * 100) / 100;
    },
    convertTo: function(size, type) {
        switch (type) {
            case "KB":
                return Utils.round(parseInt(size) / 1024);

            case "MB":
                return Utils.round(parseInt(size) / 1024 / 1024);

            case "GB":
                return Utils.round(parseInt(size) / 1024 / 1024 / 1024);

            default:
                return size;

        }
    }
};


module.exports = Utils;
