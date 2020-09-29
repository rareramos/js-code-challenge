// Problem 2
// Task: Implement a datasource connector to abstract away data retrieval and manipulation from the `ViewControllers`.  
// Your solution shall use only [Vanilla JavaScript](http://vanilla-js.com).  

class Datasource {
    getPrices() {
       return fetch('https://static.ngnrs.io/test/prices')
            .then(res => res.json())
            .then(result => result.data.prices.map((el) => {
                return {
                    ...el,
                    mid(){
                        return (el.sell + el.buy) / 2
                    },
                    quote(){
                        return el.pair.slice(3)
                    }

                }
            }))
        }
}

let ds = new Datasource();
ds.getPrices()
.then(prices => {
prices.forEach(price => {
console.log(`Mid price for ${ price.pair } is ${ price.mid() } ${ price.quote() }.`);
});
}).catch(error => {
console.err(error);
});

