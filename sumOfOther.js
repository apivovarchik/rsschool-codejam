function sumOfOther() {
    let arr = arguments[0];
    let result = arr.reduce(function(sum, current) {
        return sum + current;        
    });
    let resArr = arr.map(function(item) {
        return result - item;        
    });
    return resArr;
}