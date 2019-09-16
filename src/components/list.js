import React from 'react';

const List = (props) => {

const {items , remove} = props;
let length = items.length;
const list = length ? (

items.map( (item) => {
return(
    <div key={item.id} >
    <span className='name' >{item.name}</span>
    <span className='age' >{item.age}</span>
    <span className='action icon' onClick={ () => {remove(item.id)} } >&times;</span>
    </div>
)
}
) ) : (
    <p>No items</p>
)


 
return(
<div className='list' >
    <span className='name title'>Name</span>
    <span className='age title' >Age</span>
    <span className='action title' >Action</span>
    {list}
</div>
    )
}

export default List;