type Pizza = {
name: String
Price: number
}




const menu = [ 
    { name: "margherita", price: 8 },
     {name: "pepperoni", price: 10},
      {name: "Hawaiian", price: 10},
       { name: "veggie", price: 9},
    ]

    const cashInRegister = 100 
    const nextOrderId = 1
const orderQueue = []

function addNewPizza(pizzaObj: Pizza) {
    menu.push(pizzaObj)
}

function placeOrder(pizzaName) {
    const selecedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaname)
    cashInRegister += selectedPizza.price 
    const newOrder = {id: nextOrderId++, pizza: selectedpizza, status: "ordered" }
    orderQueue.push(newOrder)
    return newOrder}
    

    function completeOrder(orderId: number) {
        const order = orderQueue.find(order => order.id === orderId)
        order.status = "completed"
        return order
    }

    addNewPizza({ name: "Chicken Bacon Ranch", price: 12 })
    addNewPizza({ name: "BBQ Chicken", price: 12})
    addNewPizza({ name: "Spicy sausage", price: 11})
    
    placeOrder("Chicken Bacon Ranch")
    completeOrder(1)

    console.log("menu:", menu)
    console.log("cashInRegister:", cashInRegister)
    console.log("orderQueue:", orderQueue)

    function add(a: number, b: number) {
        return a + b;
    }

    print("The sum of the numbers is " + add(4,5))