package com.khauminhduy.service;

import java.util.List;

import com.khauminhduy.model.Employee;

public interface EmployeeService {

	List<Employee> lists();
	
	Employee get(Long id);
	
	Employee create(Employee employee);
	
	Employee update(Employee employee);
	
	void delete(Long id);
}
