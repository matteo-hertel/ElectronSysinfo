function Model() {



    this.getUsedMemory = function() {
        return parseInt(self.totalMemory - self.os.freemem());
    };

    this.getFreeMemory = function() {
        return parseInt(self.os.freemem());
    };

    this.getTotalMemory = function() {
        return parseInt(self.totalMemory);
    };

    this.getUsedPercentage = function() {
        return parseFloat((100 * self.getUsedMemory()) / self.getTotalMemory(), 2).toFixed(2);
    };

}
