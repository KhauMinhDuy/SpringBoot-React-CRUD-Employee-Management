package com.khauminhduy.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.khauminhduy.exception.ResourceNotFoundException;
import com.khauminhduy.model.Employee;
import com.khauminhduy.repository.EmployeeRepository;
import com.khauminhduy.service.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	private EmployeeRepository employeeRepository;

	@Override
	public List<Employee> lists() {
		return employeeRepository.findAll();
	}

	@Override
	public Employee get(Long id) {
		return employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee Not Found"));
	}

	@Override
	public Employee create(Employee employee) {
		return employeeRepository.save(employee);
	}

	@Override
	public Employee update(Employee employee) {
		return employeeRepository.save(employee);
	}

	@Override
	public void delete(Long id) {
		employeeRepository.deleteById(id);
	}

}
