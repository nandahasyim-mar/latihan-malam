import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import Post from '../components/Post'
import { FetchPost } from '../store/action/postAction'


export default () => {
  const dispatch = useDispatch()
  const {posts} = useSelector((state) => state)
  console.log(posts, '<<< test selector');

  useEffect(() => {
    dispatch(FetchPost())
  }, [])

  return(
    <div className="container">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Nama</th>
            <th scope="col">Foto Profile</th>
            <th scope="col">Thumbnail</th>
            <th scope="col">Caption</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <Post posts={posts} />
        </tbody>
      </table>
    </div>
  )
}