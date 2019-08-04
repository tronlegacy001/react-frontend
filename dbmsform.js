import React from 'react';
import ReactDom from 'react-dom';
import './practise.css';
import* as serviceworker from './serviceWorker';
class acciform extends React.Component 
{
    constructor(props) {
        super(props);
        this.state = { value1: '', value2: '',value3: '',value4: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        if (event.target.name === "location") {
            this.setState({ value1: event.target.value })
        }
        else if (event.target.name === "no") {
            this.setState({ value2: event.target.value })
        }
        else if (event.target.name === "time") {
            this.setState({ value3: event.target.value })
        }
        else if (event.target.name === "cause") {
            this.setState({ value4: event.target.value })
        }
    }

    handleSubmit(event) {
        // alert('A detailas submitted: ' + this.state.value1 + " " + this.state.value2);
         if (this.state.value1 === '' || this.state.value2 === '' || this.state.value3=='' ||this.state.value4=='')
             event.preventDefault();
             alert('form not completed');
     }







    render(props)

{
    return(
        <div id='reg'>
       <div id='w'> <form>
        location<input type='text' placeholder='location' name='location' value={this.state.value1}  onChange={this.handleChange}/><br></br>
        number of casualities<input type='number' placeholder='number' name='no' value={this.state.value2}  onChange={this.handleChange}/><br></br>
        time of accident<input type='time' placeholder='time' name='time'  value={this.state.value3}  onChange={this.handleChange}/><br></br>
        cause<input type='text' placeholder='cause' name='cause' value={this.state.value14}  onChange={this.handleChange}/><br></br>
        <input type='submit' value='submit'/>
        </form></div></div>
    )
}
}
export default acciform