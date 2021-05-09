import EmployeeCard from "../EmployeeCard";
import React, { Component } from "react";
import SortForm from "../sortForm/index";
import SearchForm from "../SearchForm";
import API from "../../utils/API";
import "./style.css";

class Directory extends Component {

  state = {
    employeeSort: [],
    employees: [],
    search: "",
    sorted: false,
    value: ""
  };

  componentDidMount() {
    API.getEmployees()
      .then((res) =>
        this.setState({
          employees: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  }

  sortEmployees = () => {
    let { employees, search } = this.state;
    let employeeSort = employees.filter(sorted => {
      return (
        sorted.name.first.toLowerCase().includes(search.toLowerCase()) ||
        sorted.name.last.toLowerCase().includes(search.toLowerCase()) ||
        sorted.email.toLowerCase().includes(search.toLowerCase()) ||
        sorted.location.city.toLowerCase().includes(search.toLowerCase())
      )
    })
    this.setState({ employeeSort: employeeSort })
  }

  initSort = event => {
    this.setState({ search: event.target.value }, () => {
      this.sortEmployees();
      this.setState({ sorted: true });
    });
  };

  handleChange = (event) => {
    this.setState({
          value: event.target.value
        });
    let { employees } = this.state;

    if (event.target.value === "a-z") {
    const employeeSort = [...employees].sort(function (a, b) {
              if (a.name.first < b.name.first) { return -1; }
              if (a.name.first > b.name.first) { return 1; }
              return 0;
    });
    this.setState({ employeeSort: employeeSort })
    this.setState({ sorted: true });
  }

  if (event.target.value === "z-a") {
    const employeeSort = [...employees].sort(function (a, b) {
              if (a.name.first < b.name.first) { return 1; }
              if (a.name.first > b.name.first) { return -1; }
              return 0;
    });
    this.setState({ employeeSort: employeeSort })
    this.setState({ sorted: true });
  }

    }

  render = () => {

    return (
      <div>
        <SortForm value={this.state.value} onChange={this.handleChange} />
        <SearchForm name="search" startSort={this.initSort} label="Search" />
        <div className="row">
     
          {!this.state.sorted ? this.state.employees.map(employee => (

            < EmployeeCard
              key={employee.id.value}
              name={employee.name.first + " " + employee.name.last}
              phone={employee.phone}
              email={employee.email}
              location={employee.location.city}
              picture={employee.picture.large}
            />

          ))
            : this.state.employeeSort.map(employee => (

              <EmployeeCard
                key={employee.id.value}
                name={employee.name.first + " " + employee.name.last}
                phone={employee.phone}
                email={employee.email}
                location={employee.location.city}
                picture={employee.picture.large}
              />

            ))};
      </div >
      </div>
    )

  }

}
export default Directory;