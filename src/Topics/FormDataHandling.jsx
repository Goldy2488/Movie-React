import React, { useState } from 'react'

const FormDataHandling = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault()
    alert("your form has been submitted"+name +" "+email+" "+password)
    setEmail("")
    setName("")
    setPassword("")
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          Name : <input type="text" value={name} onChange={(e)=>{
            setName(e.target.value) ;
          }}/>
            <h1>{name}</h1>
        </div>
        <div>
          Email : <input type="email" value={email} onChange={(e)=>{
            setEmail(e.target.value);
          }}/>
          <h1>{email}</h1>
        </div>
        <div>
          Passward : <input type="password" value={password} onChange={(e)=>{
              setPassword(e.target.value);
          }}/>
          <h1>{password}</h1>
        </div>
        <div>
          <button >Submit</button>
        </div>
      </form>
    
    </div>
  )
}

export default FormDataHandling
