//state lifting
//child to parent data passing (bottom to top)
//passing method as props
import React from 'react'


export default function Child(props) {

    const data = 'from child comphonent'

    props.onChildData(data)

  return (
    <div>
        i am child data
    </div>
  )
}
