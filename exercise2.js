function StoreModule() {
  class Product {
    id;
    name;
    itemInStock;
    constructor(id, name, itemInStock) {
      this.id = id;
      this.name = name;
      this.itemInStock = itemInStock;
    }
  }
  class Customer {
    id;
    name;
    adress;
    constructor(id, name, adress) {
      this.id = id;
      this.name = name;
      this.adress = adress;
    }
  }

  class Order {
    customer;
    product;
    constructor(customer, product) {
      this.product = product;
      this.customer = customer;
    }
  }

  class Store {
    products;
    customers;
    orders;

    interval;

    constructor(products, customers, orders) {
      this.products = products;
      this.customers = customers;
      this.orders = orders;
    }

    addOrder(product, customer) {
      state.orders.push(new Order(customer, product));
    }

    printOrders() {
      console.log(state.orders);
    }

    save() {
      const store = {
        products: this.products,
        customers: this.customers,
        orders: this.orders,
      };
      console.log(store);
    }

    load(state) {
      this.state = state;
    }

    notify() {
      const outOfStockProducts = this.products.filter((product) => !product.itemInStock);
      this.interval = setInterval(() => {
        console.log(outOfStockProducts);
      }, 1000 * 10);
    }

    clearNotifications() {
      if (this.interval) {
        clearInterval(this.interval);
      }
    }
  }

  const initialState = {
    products: [new Product(1, "banana", true), new Product(2, "mango", false)],
    customers: [new Customer(1, "yuda", "America"), new Customer(2, "suzi", "Osfia")],
    orders: [],
  };

  let state = new Store(initialState.products, initialState.Customer, initialState.orders);

  return {
    store: Store,
  };
}
