import React from 'react'

import EmployeeService from '../services/EmployeeService'

class Employee extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: []
        }

        this.addEmployee = this.addEmployee.bind(this)
    }

    componentDidMount() {
        EmployeeService.getEmployees().then(resp => {
            this.setState({ employees: resp.data })
        }).catch(err => {
            this.setState({ employees: [] })
        })
    }

    addEmployee() {
        this.props.history.push('/new-employee')
    }

    render() {
        return (
            <div>
                <div className="text-center" >Employee List</div>
                <div className="row">
                    <button className="btn btn-primary mx-auto my-2" onClick={this.addEmployee}>Add Employee</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Action </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.employees.map(employee => 
                                <tr key={employee.id}>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.email}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Employee