import { useEffect } from "react";
import { useState } from "react"

const NewsBoard = () => {

    const [articles,setArticles]=useState([]);

useEffect(()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=532f83ed64714612a3f15ce7a75bd414`;
})

  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span> </h2>
    </div>
  )
}

export default NewsBoard
