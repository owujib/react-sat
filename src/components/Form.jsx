import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    email: '',
    course: '',
  };
  render() {
    return (
      <div className="mt-5">
        <form
          className="container"
          onSubmit={(e) => {
            e.preventDefault();

            this.props.addStudent(this.state);

            //clear the value of the for after updating the state
            this.setState({
              name: '',
              email: '',
              course: '',
            });
          }}
        >
          <input
            type="text"
            onChange={(e) => {
              this.setState({
                name: e.target.value,
              });
            }}
            value={this.state.name}
            className="form-control"
            placeholder="enter student name"
          />{' '}
          <br /> <br />
          <input
            type="text"
            onChange={(e) => {
              this.setState({
                email: e.target.value,
              });
            }}
            value={this.state.email}
            className="form-control"
            placeholder="enter student email"
          />{' '}
          <br /> <br />
          <input
            type="text"
            onChange={(e) => {
              this.setState({
                course: e.target.value,
              });
            }}
            value={this.state.course}
            className="form-control"
            placeholder="enter student class"
          />{' '}
          <br /> <br />
          <input
            type="submit"
            className="btn  btn-success"
            value="add student"
          />
        </form>
      </div>
    );
  }
}

export default Form;
