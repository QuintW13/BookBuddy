import { useEffect, useState } from "react"
import axios from `axios`

function AllBooks() {
    const [books, setBooks] = useState([])
    useEffect(()=>{
        const getBooks = async ()=>{
            const response = await axios (`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books`)
            setBooks(response.data)
        }
        getBooks()
    },[])
    

    return (
      <>
      <div>
        {books.map(book=><div>
            <h4>{book.title}</h4>
            <img src={book.coverimage} alt = {book.title}/>
            </div>)}
      </div>
      </>
    )
  }

export default AllBooks