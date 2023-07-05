import React from 'react'

const List = props => (
  <ul>
    {
      props.items.map((items, index) => <li key ={index}>{items}</li>)
    }
  </ul>
);

export default List;
