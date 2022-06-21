/*
    Per una nota App di food delivery, ci viene richiesto di 
    implementare alcune funzionalità per la gestione del carrello.
*/


//prodotti attualmente presenti nel carrello dell'utente
const productsInCart = [
    {id: 324234, category:0, quantity:1, title: 'Margherita', description: "Pomodoro, mozzarella e basilico", ingredients: ['pomodoro','mozzarella','basilico'], price: 6.5},
    {id: 098394, category:0, quantity:1, title: 'Calzone Classico', description: "Ripieno di Pomodoro, mozzarella e prosciutto cotto",ingredients: ['pomodoro','mozzarella','prosciutto cotto'], price: 7.0},
    {id: 432432, category:4, quantity:1, title: 'Coca Cola Zero (33CL)', description: "", price: 3.0},
    {id: 564564, category:0, quantity:1, title: 'Salamino', description: "Pomodoro, mozzarella e salamino piccante", ingredients: ['pomodoro','mozzarella','salamino'], price: 7.5},
        {id: 564564, category:0, quantity:1, title: 'Salamino', description: "Mozzarella, salsiccia, patate al forno", ingredients: ['mozzarella','salsiccia','patate al forno'], price: 7.5},
    {id: 333445, category:4, quantity:1, title: 'Acqua Naturale (1L)', description: "", price: 2},
    {id: 656765, category:3, quantity:3, title: 'Cheesecake Cioccolato', description: "Dolce a base di formaggio fresco e topping al cioccolato", price: 5},
]

//array statico di oggetti che contiene tutte le categorie presenti nell'app
const categories = [
    {id:0, name: "pizze"},
    {id:1, name: "panini"},
    {id:2, name: "sushi"},
    {id:3, name: "dessert"},
    {id:4, name: "bevande"},
]; 

//FUNZIONI DA IMPLEMENTARE:

/* 
    ---------------------------------------
    getTotalAmount: restituisce il prezzo finale che l'utente dovrà pagare al checkout
    ---------------------------------------
*/

const getTotalAmount = () => productsInCart.reduce ((summedPrice, product) => summedPrice + (product.price * product.quantity), 0);

console.log(getTotalAmount());


/* 
    ---------------------------------------
    getCategoryCode: prende come parametro il nome di una categoria e ne restituisce l'id
    ---------------------------------------
*/

const getCategoryCode  = (categoryName) => categories.find((category) => category.name === categoryName)?.id;

console.log(getCategoryCode("pizzee"));

console.log(getCategoryCode("panini"));


/*
    ---------------------------------------
    getCategoryCount: prende come parametro il nome di una categoria e restituisce il numero di prodotti presenti per questa
    ---------------------------------------
*/

const getCategoryCount = (categoryName) => productsInCart.filter((item)=> item.category=== categoryName).length;

console.log("Numbers of category items", getCategoryCount(getCategoryCode("bevande")));

/*
    ---------------------------------------
    removeFromCart: prende l'id di un prodotto e ne rimuove una unità dal carrello. Se quantity diventa 0, rimuove il prodotto dall'array
    ---------------------------------------
*/

function removeFromCart (id) {
for (let i = 0; i < productsInCart.length; i++) {
if (productsInCart[i].id === id) {
	productsInCart.splice(i, 1) }
  return productsInCart;
  }
 }
  
console.log(removeFromCart(324234));


/*
    ---------------------------------------
    printCart: stampa su console tutti i prodotti divisi per categoria. 

    formato richiesto:
        *** PIZZA ***
        - 1 x Margherita (Pomodoro, mozzarella e basilico) | 6.5€
        - 1 x Calzone classico (Ripieno di Pomodoro, mozzarella e prosciutto cotto) | 7€

        *** BEVANDE ***
        - 1 x Coca Cola Zero (33CL) | 3€

        *** TOTALE ***
        16.5€
    ---------------------------------------
*/

const printCart = ()=>{
    let pizze = productsInCart.filter(product => product.category === 0);
    let bevande = productsInCart.filter(product => product.category === 4);
    let dessert = productsInCart.filter(product => product.category === 3);
    let sum = 0;
    productsInCart.forEach(product => sum += product.price)
    console.log("***PIZZE***")
    pizze.map(obj=>{
     console.log(`${obj.quantity} x ${obj.title}(${obj.ingredients}) | ${obj.price}€`)
    })
    console.log("***BEVANDE***")
    bevande.map(obj=>{
     console.log(`${obj.quantity} x ${obj.title} | ${obj.price}€`)
    })
    console.log("***DESSERT***")
    dessert.map(obj=>{
     console.log(`${obj.quantity} x ${obj.title} | ${obj.price}€`)
    })
    console.log("***TOTALE***")
    console.log(`${sum}€`)
    }
    printCart()


/*
    ---------------------------------------
    getPizzeBianche: Restituisce tutte le pizze bianche presenti nel carrello (pizze senza pomodoro)
    ---------------------------------------

*/


const getPizzeBianche = () => productsInCart.filter((item) => item.category === 0 && !item.ingredients.includes("pomodoro"));

console.log(getPizzeBianche());
