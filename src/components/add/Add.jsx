import React, { useState } from 'react'

const Add = ({addNewMovie}) => {

    const [inputs,setInputs] = useState({
        Title : '' ,
        Description : '' ,
        Rate : '' ,
        Img : '' ,
    })

const handleChange = (e) => {
    setInputs({...inputs,[e.target.name]:e.target.value})
}

const handleAdd = () => {
    addNewMovie(inputs)
}

  return (
    <div className='add'>
        <h1 style={{color:'white'}}>Add New Movie</h1>
        <input placeholder='Title' name='Title' onChange={handleChange}></input>
        <input placeholder='Description' name='Description' onChange={handleChange}></input>
        <input placeholder='Rate' name='Rate' onChange={handleChange}></input>
        <input placeholder='Img' name='Img' onChange={handleChange}></input>
        <br></br>
        <button onClick={handleAdd}>Add New Série</button>
    </div>
  )
}

export default Add