package com.example.backendspringboot.repository;
import com.example.backendspringboot.entities.Supplier;

import org.springframework.data.repository.CrudRepository;

import org.springframework.stereotype.Repository;

@Repository
public interface SupplierRepository extends CrudRepository<Supplier, Long> {
    
}
