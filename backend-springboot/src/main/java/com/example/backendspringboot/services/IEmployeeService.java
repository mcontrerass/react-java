package com.example.backendspringboot.services;

import java.util.List;

import com.example.backendspringboot.entities.Employee;

public interface IEmployeeService {
    List<Employee> getAll();
    Employee getById(Long id);
    void remove(Long id);
    void save(Employee employee);
}
