import axios from 'axios'

export const FetchPost = () => {
  return(dispatch) => {
    axios.get("http://localhost:3005/posts")
    .then(({data}) => {
      // console.log(data, '<<<< test data axios');
      dispatch({
        type: "FETCH_POSTS",
        payload: data
      })
    })
    .catch(console.log) 
  }
}

export const CreatePost = (newPost) => {
  return(dispatch, getState) => {
    // console.log(newPost, 'tes data di createPost');
    axios.post("http://localhost:3005/posts", {
      user: {
        name: newPost.name,
        picture: newPost.picture
      },
      caption: newPost.caption,
      thumbnail: newPost.thumbnail,
      createdAt: newPost.createdAt
    } )
    .then(res => {
      console.log(res.data, 'test create axios');
      const postLama = getState().posts
      const postBaru = postLama.concat(res.data.data)
      console.log(postBaru);
      dispatch({
        type: "FETCH_POSTS",
        payload: postBaru

      })
    })
    .catch(console.log)
  }
}