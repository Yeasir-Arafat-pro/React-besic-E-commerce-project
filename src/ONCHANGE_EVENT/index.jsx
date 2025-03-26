import React, { useState } from 'react'

export default function ONCHANGE_EVENT() {
  const [changeValue, setValue]  = useState('')
      
      const handleOnchangeEvent = (e) => {
        setValue(e.target.value)
      }
  
    return (
     <div>
      <br />
      <input type="text" onChange={handleOnchangeEvent} />
       <h1>{changeValue}</h1>
     </div>
    )
}


// import React, { Component } from 'react'

// export default class EventHandler extends Component {

//     constructor(props) {
//       super(props)
    
//       this.state = {
//          changeValue: ''
//       }

//     }

//     handleValue = (e) => {
        
//       this.setState({
//         changeValue: e.target.value
//       }, function(){
//       console.log(this.state.changeValue);
//       })


//     }

//   render() {
//     return (
//       <div>
//         <br />
//         <input type="text" onChange={this.handleValue}/>
//         <p>{this.state.changeValue}</p>
//       </div>
//     )
//   }
// }
