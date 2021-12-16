//find maximum profit to buy stock

const maxProfit = arr => {
    let minBuyPrice = arr[0];
    let maxProfit = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < minBuyPrice) {
            minBuyPrice = arr[i];
        } else if(arr[i] - minBuyPrice > maxProfit) {
            maxProfit = arr[i] - minBuyPrice;
        }
    }
    console.log(minBuyPrice);
    return maxProfit;

}
const arr = [5, 2, 6, 1, 4];
console.log(maxProfit(arr));