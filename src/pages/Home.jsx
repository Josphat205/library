import React, {useEffect} from 'react'
import axios from 'axios'
import ComplexNavbar from '../components/ComplexNavbar'
import BookCard from '../components/BookCard'
const Home = () => {
  const [books, setBooks] = React.useState([])
  const fetchBooks = async () => {
    const res = await axios.get('https://book-service-kn2l.onrender.com/books')
    setBooks(res.data)
  }
  useEffect(() => {
    fetchBooks()
  }, [])
  return (
    <div>
      <ComplexNavbar />
      <div className='flex md:flex-row flex-col flex-wrap gap-4 mt-10 w-full'>
       {books.map((book) => (
        <BookCard key={book._id} book={book} />
       )
       )}
      </div>
    </div>
  )
}

export default Home
