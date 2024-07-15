import { useState } from "react"

const NewsBoard = () => {

    const [articles,setArticles]=useState([])

  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span> </h2>
    </div>
  )
}

export default NewsBoard
