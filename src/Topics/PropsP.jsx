import React from 'react'

// directly pass props 
// const PropsP = (props) => {
//   return (
//     <div>
//       <h1>hii i am {props.name}</h1>
//     </div>
//   )
// }

// export default PropsP

// disturering the props
const PropsP = ({name,work}) => {
    return (
      <div>
        <h1>hii i am {name} and i work as {work}</h1>
      </div>
    )
  }
  
  export default PropsP
