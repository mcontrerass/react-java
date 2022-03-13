package com.example.backendspringboot.controllers;

import java.util.List;

import com.example.backendspringboot.entities.Customer;
import com.example.backendspringboot.services.ICustomerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CustomerController {

    @Autowired
    private ICustomerService service;
    
    @GetMapping("/api/customers")
    public List<Customer> getAll() {
        return service.getAll();
    }
}
