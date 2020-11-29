import React from 'react'

export default (props) => {
  const { posts } = props
  // console.log(posts, 'ini di post component');
  return(
    posts.map(post => (
      <tr key={post.id}>
        <td>{post?.user?.name}</td>
        <td style={{ textAlign: "center" }}>
          <img src={post?.user?.picture} height="80" className="rounded" alt=""/>
        </td>
        <td style={{ textAlign: "center" }} > 
          <img src={post?.thumbnail} className="rounded" height="80" alt=""/>
        </td>
        <td>{post?.caption}</td>
        <td>
          <button className="btn btn-secondary">Like</button>
        </td>
      </tr>
    ))
  )
}