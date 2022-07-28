import React, { useEffect, useState } from 'react'
import "../App.css";
import { db } from '../firebase';

const ShowData = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(()=> {
    const getPostFromFirebase = [];

    const dataList = db
    .collection("information")
    .onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
      getPostFromFirebase.push({
        ...doc.data(),
        key: doc.id,
      });
      setPosts(getPostFromFirebase);
      setLoading(false);
    });
  });
  return () => dataList
  }, [])

if(loading){
  return <h1>loading firebase data...</h1>
}

  return (
    <div className="container">
      <h1>{posts.length}</h1>
      <h1>data:</h1>
      {posts.length >0 ?(
        posts.map((post) => <div key={post.key}>
          <lable className="NamePost">{post.name}</lable>
          <lable>{post.number}</lable>
          <lable>{post.classroom}</lable>
          <lable>{post.message}</lable>
            </div>
          )):
        ( <h1> no data</h1>)
      }
    </div>
  )
}

export default ShowData