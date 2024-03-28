function sumDigPow(a, b) {
    let resArr = [];
    for(let i = a; i <= b; i++){
        
        let num = String(i).split('')
        .reduce((acc,val,ind) => {
            
            acc += Math.pow(Number(val),(ind+1))
            return acc;
        },0);
        if(num == i){
            resArr.push(i);
        }
    }
    return resArr;
}

console.log(sumDigPow(50,150));