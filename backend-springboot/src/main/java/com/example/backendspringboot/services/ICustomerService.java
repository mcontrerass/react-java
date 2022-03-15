package com.example.backendspringboot.services;

import java.util.List;

import com.example.backendspringboot.entities.Customer;

public interface ICustomerService {
    List<Customer> getAll();
    Customer getById(Long id);
    void remove(Long id);
    void save(Customer customer);
}
