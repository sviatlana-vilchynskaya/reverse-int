module.exports = function reverse(n) {
    if (n < 0) {
        n = Math.abs(n) + "";
        return Number(n.split("").reverse().join(""));
    } else {
        n = n + "";
        return Number(n.split("").reverse().join(""));
    }
};
