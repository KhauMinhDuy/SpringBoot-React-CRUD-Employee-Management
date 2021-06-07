package com.khauminhduy.controller;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.khauminhduy.model.Employee;
import com.khauminhduy.service.EmployeeService;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
@RequestMapping(value = "/api/v1/employee")
public class EmployeeController {

	@Autowired
	private EmployeeService employeeService;
	
	@GetMapping
	public List<Employee> getLists() {
		return employeeService.lists();
	}
	
	@GetMapping("{id}")
	public ResponseEntity<Employee> getEmployee(@PathVariable Long id) {
		Employee employee = employeeService.get(id);
		return ResponseEntity.ok(employee);
	}
	
	@PostMapping
	public Employee createEmployee(@RequestBody Employee employee) {
		return employeeService.create(employee);
	}
	
	@PutMapping("{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable Long id,@RequestBody Employee employee) {
		Employee existsEmployee = employeeService.get(id);
		BeanUtils.copyProperties(employee, existsEmployee, "id");
		employeeService.update(existsEmployee);
		return ResponseEntity.ok(existsEmployee);
	}
	
	@DeleteMapping("{id}")
	public void deleteEmployee(@PathVariable Long id) {
		employeeService.delete(id);
	}
	
	
}
