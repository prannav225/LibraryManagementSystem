import { useEffect, useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom'
import '../styles/booklist.css'

const BookList = () => {
    let [book, setbook] = useState([])
    useEffect(() => {
        let fetchdata = async () => {
            let response = await fetch('http://localhost:2000/books')
            let data = await response.json();
            setbook(data);
        }
        fetchdata();
    }, [book]) //reloades every time when the operation performed on books

    //to delete a book permanentaly from a server

    let remove = (id, title) => {
        fetch(`http://localhost:2000/books/${id}`, {
            method: 'DELETE'
        })
        alert(`${title} will be deleted permanentaly`)

    }

    let navigate = useNavigate()
    let read = (id) => {
       if (location.pathname =='/admin/booklist') {
        navigate(`/admin/booklist/${id}`)
       } else {
            navigate(`/user/booklist/${id}`)

       }
    }
    let location = useLocation()

    return (
        <div className="booklist">
            <h1  style={{textAlign:'center'}}>Book List</h1>
            <h2  style={{textAlign:'center'}}>Total number of books: {book.length}</h2>
            {book.map(data => (
                <div className="book_contanier" id='contanier'>
                    <img src={data.thumbnailUrl} alt="" />
                    <div className="bookcard">
                        <h2>{data.title}</h2>
                        <h4>{data.authors}</h4>
                        <p>Pages: {data.pageCount}</p>
                        <p>{data.categories}</p>
                        <div style={{display:'flex'}}>
                        <button className="btn" id="readbtn" onClick={() => read(data.id)}>Read more</button>
                        {location.pathname == '/admin/booklist' && <button onClick={() => remove(data.id, data.title)} className='btn'>Delete</button>}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BookList;