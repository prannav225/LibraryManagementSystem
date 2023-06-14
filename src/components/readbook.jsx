import { useState, useEffect  } from "react";
import { useParams } from "react-router-dom";
import '../styles/readbook.css'

const ReadBook = () => {
    let [books, setbook] = useState([])
    let params = useParams()
    useEffect(() => {
        let fetchdata = async () => {
            let response = await fetch(`http://localhost:2000/books/${params.id}`)
            let data = await response.json()
            setbook(data);
        }
        fetchdata();
    })
    return (
        <div className="readbook">
                <h1  style={{textAlign:'center'}}>Read Book</h1>
            <div id="contanier" className="read_contanier">
                <h2>{books.title}</h2>
                <h3>Short Description:</h3>
                <p> {books.shortDescription}</p>
                <h3>Long Description:</h3>
                <p> {books.longDescription}</p>

            </div>
        </div>
    );
}

export default ReadBook;