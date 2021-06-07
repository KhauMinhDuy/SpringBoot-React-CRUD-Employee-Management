package com.khauminhduy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.khauminhduy.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
