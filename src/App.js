import React , {Component} from 'react';
import './App.css';
import './index.css';
import List from './components/list'
import Add from './components/add';

class App extends Component{

state = {

items:  [
    {id:1 , name: 'Ramy' , age: 27},
    {id:2 , name: 'Hamza' , age: 23},
    {id:3 , name: 'Ahmed' , age: 30}
  ]
}

remove = (i) => {
let items = this.state.items.filter( (im) => {
  return im.id !== i
} )
this.setState({
  items
})
}

additem = (n) => {
let items = this.state.items;
items.push(n);
this.setState({
    items
  })
  }

  render(){
    return(
      <div className='container' >
      <h1>To do list</h1>
      <List items={this.state.items} remove={this.remove} />
      <Add additem={this.additem} />
      </div>
    )
  }
}

export default App;
