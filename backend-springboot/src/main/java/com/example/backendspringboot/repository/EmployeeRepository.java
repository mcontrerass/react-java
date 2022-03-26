package com.example.backendspringboot.repository;
import com.example.backendspringboot.entities.Employee;

import org.springframework.data.repository.CrudRepository;

import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends CrudRepository<Employee, Long> {
    
}
