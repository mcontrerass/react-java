package com.example.backendspringboot.services;

import java.util.List;

import com.example.backendspringboot.entities.Supplier;

public interface ISupplierService {
    List<Supplier> getAll();
    Supplier getById(Long id);
    void remove(Long id);
    void save(Supplier supplier);
}
