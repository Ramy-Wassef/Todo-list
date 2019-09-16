import React , {Component} from 'react';

class Add extends Component{

 state = {
     id:'',
     name:'',
     age:''
 }

change = (e) => {
this.setState({
    id: Math.random(),
    [e.target.id]: e.target.value
})
}

submit = (e) => {
    e.preventDefault();
   if(e.target.name.value === '' || e.target.age.value === '' ){
    return false
}
else{
    this.props.additem(this.state);
    this.setState({
        name:'',
        age:''
   
    })
}}

    render(){
        return(
    <div>
        <form onSubmit={this.submit} >
        <input className='btm' type='text' placeholder='Enter Name' id='name' onChange={this.change} value={this.state.name} />
        <input  className='btm' type='number' placeholder='Enter Age' id='age' onChange={this.change} value={this.state.age} />
        <input className='title btn btm' type='submit' value='add' />
        </form>
    </div>
        )
    }
}

export default Add;