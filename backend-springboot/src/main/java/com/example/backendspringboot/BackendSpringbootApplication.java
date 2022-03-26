package com.example.backendspringboot;

import com.example.backendspringboot.entities.Customer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackendSpringbootApplication {

	public static void main(String[] args) {


		Customer cliente = new Customer();
		cliente.getNombres();

		SpringApplication.run(BackendSpringbootApplication.class, args);
	}

}
