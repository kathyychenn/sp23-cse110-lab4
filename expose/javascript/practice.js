/*function sumValues(num1,num2,add){
    if(add) {
        const result = 0;
        result = num1 + num2;
        console.log('values added: ' + result);
    } else return;
    console.log('final result: ', result);
}

sumValues(10,10,true);*/

function discountPrices(prices, discount){
    const discounted = [];
    const length = prices.length;
    //let finalPrice = 0;

    for(let i = 0; i < length; i++){
        const discountedPrice = prices[i] *(1 - discount);
        //finalPrice = Math.round(discountedPrice * 100)/100;
        discounted.push(discountedPrice);
    }
    //console.log(i);
    //console.log(length);
    //console.log(discountedPrice);
    //console.log(finalPrice);
    return discounted;
}
console.log(discountPrices([100,200,300],0.5));
