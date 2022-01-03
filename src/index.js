module.exports = function reverse (n) {
    if(n > 0){
        let rn = n.toString().split('').reverse().concat().join('');
        return Number(rn);
    } else {
        let rn = n.toString().split('').slice(1).reverse().concat().join('');
        return Number(rn);
    };   
};
