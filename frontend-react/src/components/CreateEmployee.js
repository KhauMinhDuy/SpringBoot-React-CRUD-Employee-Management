import React from "react";
import EmployeeService from "../services/EmployeeService";

class FormCreateEmployee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
    };
    this.changeFirstNamehandler = this.changeFirstNamehandler.bind(this);
    this.changeLastNamehandler = this.changeLastNamehandler.bind(this);
    this.changeEmailhandler = this.changeEmailhandler.bind(this);
    this.saveEmployee = this.saveEmployee.bind(this);
  }

  changeFirstNamehandler(event) {
    this.setState({
      firstName: event.target.value,
    });
  }

  changeLastNamehandler(event) {
    this.setState({
      lastName: event.target.value,
    });
  }

  changeEmailhandler(event) {
    this.setState({
      email: event.target.value,
    });
  }

  saveEmployee(e) {
    e.preventDefault();
    const employee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
    };

    EmployeeService.createEmployee(employee)
      .then((resp) => {
        this.props.history.push("/employees");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  cancel() {
    this.props.history.push("/employees");
  }
  render() {
    return (
      <>
        <div className="row">
          <div className=" col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Add Employee</h3>
            <div className="card-body">
              <form action="">
                <div className="form-group">
                  <label>First Name: </label>
                  <input
                    type="text"
                    placeholder="FirstName"
                    required
                    className="form-control"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.changeFirstNamehandler}
                  />
                </div>
                <div className="form-group">
                  <label>Last Name: </label>
                  <input
                    type="text"
                    placeholder="LastName"
                    required
                    className="form-control"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.changeLastNamehandler}
                  />
                </div>

                <div className="form-group">
                  <label>Email: </label>
                  <input
                    type="text"
                    placeholder="Email"
                    required
                    className="form-control"
                    name="email"
                    value={this.state.email}
                    onChange={this.changeEmailhandler}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={this.saveEmployee}
                >
                  Save
                </button>
                <button
                  className="btn btn-danger ml-1"
                  onClick={this.cancel.bind(this)}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default FormCreateEmployee;
