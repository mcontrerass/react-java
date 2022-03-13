package com.example.backendspringboot.services;

import java.util.List;

import com.example.backendspringboot.entities.Customer;
import com.example.backendspringboot.repository.CustomerRepository;

import org.springframework.stereotype.Service;

import org.springframework.beans.factory.annotation.Autowired;

@Service
public class CustomerService implements ICustomerService {

    @Autowired
    private CustomerRepository repository;

    @Override
    public List<Customer> getAll() {
        return(List<Customer>) repository.findAll();
    }  

}
