import React from 'react'

import EmployeeService from '../services/EmployeeService'

class Employee extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: []
        }

        this.addEmployee = this.addEmployee.bind(this)
        this.editEmployee = this.editEmployee.bind(this)
        this.deleteEmployee = this.deleteEmployee.bind(this)
        this.detailEmployee = this.detailEmployee.bind(this)
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

    editEmployee(id) {
        this.props.history.push(`/update-employee/${id}`)
    }

    deleteEmployee(id) {
        EmployeeService.deleteEmployee(id)
            .then(resp => {
                this.setState({
                    employees: this.state.employees.filter(employee => employee.id != id)
                })
            })
    }

    detailEmployee(id) {
        this.props.history.push(`/detail-employee/${id}`)
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
                                    <td>
                                        <button 
                                            className="btn btn-info mx-1" 
                                            onClick={() => this.editEmployee(employee.id)
                                            }>
                                            Update
                                        </button>

                                        <button
                                            className="btn btn-danger mx-1"
                                            onClick={() => this.deleteEmployee(employee.id)
                                            }>
                                            Delete
                                        </button>

                                        <button
                                            className="btn btn-primary mx-1"
                                            onClick={() => this.detailEmployee(employee.id)
                                            }>
                                            Detail
                                        </button>
                                    </td>
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