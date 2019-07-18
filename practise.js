import React from 'react';
import ReactDom from 'react-dom';
import './practise.css'; 
import* as serviceworker from './serviceWorker';
class prac extends React.Component
{
    constructor(props)
    {super(props);
        this.state ={value1:'',value2:'',value3:'',value4:'',value5:'',value6:'',value7:'',value8:'',value9:'',value10:'',value11:'',value12:''};
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
       
    }
    
    handleSubmit(event)
    {
        if (this.state.value1 === '' || this.state.value2 === ''|| this.state.value3 === ''|| this.state.value4 === ''|| this.state.value5 === ''|| this.state.value6 === ''|| this.state.value7 === ''|| this.state.value8 === '' ||this.state.value9 ===''||this.state.value9 ==='')
        {alert('one of the details  is left blank');
        event.preventDefault();}
        else if(isNaN(parseInt(this.state.value4))&&this.state.value4.length===10)
        {

        }
        else if(isNaN(parseInt(this.state.value6)))
        {

        }
        else if(isNaN(parseInt(this.state.value12))&&this.state.value12.length===6)
        {

        }
        else{
            alert('your form has been filled successfully');
        }
    }
    handleChange(event) {
        if (event.target.name === "fname") {
            this.setState({ value1: event.target.value })
        }
        else if (event.target.name === "lname") {
            this.setState({ value2: event.target.value })
        }
        else if (event.target.name === "dob") {
            this.setState({ value3: event.target.value })
        }
        else if (event.target.name === "phone") {
            this.setState({ value4: event.target.value })
        }
        else if (event.target.name === "email") {
            this.setState({ value5: event.target.value })
        }
        else if (event.target.name === "licid") {
            this.setState({ value6: event.target.value })
        }
        else if (event.target.name === "loc") {
            this.setState({ value7: event.target.value })
        }
        else if (event.target.name === "hno") {
            this.setState({ value8: event.target.value })
        }
        else if (event.target.name === "street") {
            this.setState({ value9: event.target.value })
        }
        else if (event.target.name === "Area") {
            this.setState({ value10: event.target.value })
        }
        else if (event.target.name === "PO") {
            this.setState({ value11: event.target.value })
        }
        else if (event.target.name === "pin") {
            this.setState({ value12: event.target.value })
        }
    }

    render()
    {
        return(
           <div id='reg'>
            <h1 id='start'>Traffic Management System</h1>
            <marquee id='marq'>Welcome to xxx</marquee>
            <form onSubmit={this.handleSubmit} name='regform' method='POST'>
             First name<input type='text' value={this.state.value1} placeholder='Enter first name' name='fname' onChange={this.handleChange}/><br></br>
             Last name<input type='text' value={this.state.value2} placeholder='Enter last name' name='lname' onChange={this.handleChange}/><br></br>
             Date of Birth<input type='date'value={this.state.value3} name='dob' onChange={this.handleChange}/><br></br>
             Phone<input type='text' value={this.state.value4} placeholder="10 digits" name='phone' onChange={this.handleChange}/><br></br>
             Email<input type='email' value={this.state.value5} placeholder='Enter Email address eg:-abc@xyz.com'name='email' onChange={this.handleChange}/><br></br>
             License ID<input type='text' value={this.state.value6} placeholder='Enter valid ID' name='licid'  onChange={this.handleChange}/><br></br>
             License Issued On<input type='date' name='loc'value={this.state.value7}  onChange={this.handleChange}/><br></br>
             House No<input type='text'value={this.state.value8} placeholder='house number' name='hno'  onChange={this.handleChange}/><br></br>
             Street/Apt<input type='text' value={this.state.value9} placeholder='street' name='street'  onChange={this.handleChange}/><br></br>
             Area<input type='text' value={this.state.value10} placeholder='Area name' name='Area'  onChange={this.handleChange}/><br></br>
             NearestPO<input type='text' value={this.state.value11} placeholer='PO location' name='PO'  onChange={this.handleChange}/><br></br>
             Pincode<input type='text' value={this.state.value12} placeholder='pin number' name='pin'  onChange={this.handleChange}/><br></br>
             Enter password<input type='password' value={this.state.value13} placeholder='Enter pasword' name='pass1' onChange={this.handleChange}/><br></br>
             Re-Enter password<input type='password' value={this.state.value14} placeholder='Re-Enter pasword' name='pass2' onChange={this.handleChange}/><br></br>
            <input type='submit' value='submit' />
             </form>
            
            
            </div>
        )
    }
}
export default prac