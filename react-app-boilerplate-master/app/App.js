import React, { Component } from 'react';
import {render} from 'react-dom';
import KanbanBoard from './KanbanBoard';

let cardsList = [
  {
    id: 1,
    title: "Read the Book",
    description: "I should read the whole book",
    status: "in-progress",
    tasks: [] 
  },
  {
    id: 2,
    title: "Write some code",
    description: "Code along with the samples in the book",
    status: "todo",
    tasks: [
      {
        id: 1,
        name: "ContactList Example",
        done: true
      },
      {
        id: 2,
        name: "Kanban Example",
        done: false
      },
      {
        id: 3,
        name: "My own experiments",
        done: false
      }
    ] 
  },
];

// //Parent Component
// class GroceryList extends Component {
//   render(){
//     return (
//       <ul>
//         <ListItem quantity="1" name="Bread" />
//         {/* <ListItem quantity="1">Bread</ListItem> */}
//         <ListItem quantity="6" name="Eggs" />
//         {/* <ListItem quantity="6">Eggs</ListItem> */}
//         <ListItem quantity="2" name="Milk" />
//         {/* <ListItem quantity="2">Milk</ListItem> */}
//       </ul>
//     );
//   }
// }
// //Child Component
// class ListItem extends Component {
//   render(){
//     return (
//       <li>
//         {this.props.quantity} x {this.props.name}
//         {/* {this.props.quantity} x {this.props.children} */}
//       </li>
//     );
//   }
// }

render(<KanbanBoard cards={cardsList} />, document.getElementById('root'));
