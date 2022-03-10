import React, { Component } from 'react'

// export default class Button extends Component {
//   render() {
//     return (
//       <button onClick={action}>{title}</button>
//     )
//   }
// }
export default function Button(props) {
  let { action, classname, title } = props;
  return <button className={classname} type="button" onClick={action}>{title}<i></i></button>
          
}