import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { CreatePost } from '../store/action/postAction'
export default () => {
  const dispatch = useDispatch()
  const history = useHistory()


  const [inputForm, setInputForm] = useState({
    name: "",
    picture: "",
    caption: "",
    thumbnail: "",
    createdAt: new Date()
  })

  // handleChange = event => {
  //   this.setState({ name: event.target.value });
  // }
  
  const handleOnChange = (e) => {
    // console.log(e.target, '<<< tes isi e');
    const {name, value} = e.target
    console.log(name, '<<<< tes event');
    setInputForm({...inputForm, [name]: value})
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(CreatePost(inputForm))
    history.push('/')
  }

  return(
    <div>
      <form onSubmit={(e) => handleOnSubmit(e)} method="post">
        <div className="form-group">
          <label>Name</label>
          <input
            name="name" 
            type="text" 
            className="form-control"
            value= {inputForm.name} 
            aria-describedby="emailHelp" 
            placeholder="Enter name"
            onChange={(e) => handleOnChange(e)}
            />
        </div>
        <div className="form-group">
          <label>Profile Picture</label>
          <input 
            name="picture"
            type="text" 
            className="form-control"
            value={inputForm.picture} 
            id="exampleInputPassword1" 
            placeholder="Picture"
            onChange={(e) => handleOnChange(e)}
            />
        </div>
        <div className="form-group">
          <label>Thumbnail</label>
          <input 
            name="thumbnail"
            type="text" 
            className="form-control"
            value={inputForm.thumbnail} 
            id="exampleInputPassword1" 
            placeholder="Thumbnail"
            onChange={(e) => handleOnChange(e)}
            />
        </div>
        <div className="form-group">
          <label>Caption</label>
          <input
            name="caption"
            type="text" 
            className="form-control"
            value={inputForm.caption} 
            id="exampleInputPassword1" 
            placeholder="Caption"
            onChange={(e) => handleOnChange(e)}
            />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}