package com.example.backendspringboot.repository;
import com.example.backendspringboot.entities.Customer;

import org.springframework.data.repository.CrudRepository;

import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends CrudRepository<Customer, Long> {
    
}
