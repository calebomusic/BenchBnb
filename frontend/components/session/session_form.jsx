import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {username: '', password: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateForm = this.updateForm.bind(this);
  };

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  updateForm(property){
    return (e) => this.setState({[property]: e.target.value})
  }

  render(){
    return(
      <div><ul>{this.props.errors.responseText}</ul><form onSubmit={this.handleSubmit}>
      Username:
      <input value={this.state.username} onChange={this.updateForm('username')}></input>
      Password:
      <input value={this.state.password} type='password' onChange={this.updateForm('password')}></input>
      <input type='submit' value={this.props.formType}></input>
    </form></div>)
  }
}

export default SessionForm;
