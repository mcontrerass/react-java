import Customer from "./Customer";

export async function searchCustomers() {
    let url = process.env.REACT_APP_API + 'customers'
    let response = await fetch(url, {
        "method": 'GET',
        "headers": {
            "Content-Type": 'application/json' 
        }
    })

    return await response.json();
}

export async function removeCustomer(id: string) {
    let customers = await searchCustomers();
    let indice = customers.findIndex((customer: Customer) => customer.id === id);
    customers.splice(indice, 1);
    localStorage['customers'] = JSON.stringify(customers);
}

export async function saveCustomer(customer: Customer) {
    let customers = await searchCustomers();

    if (customer.id) {
        //Editar
        let indice = customers.findIndex((c: Customer) => c.id === customer.id);
        customers[indice] = customer;
    } else {
        //Nuevo
        customer.id = String(Math.round(Math.random() * 100000));
        customers.push(customer);
    }
    localStorage['customers'] = JSON.stringify(customers);
}

export async function searchCustomerById(id: string) {
    let customers = await searchCustomers();
    return customers.find((customer: any) => customer.id === id);
}