import { useEffect, useState } from "react";
const UserList = () => {
    let [user, setUser] = useState([])
    useEffect(() => {
        let fetchdata = async () => {
            let response = await fetch('http://localhost:2000/users');
            let data = await response.json();
            setUser(data);
        }
        fetchdata();
    }, [])
    let remove = (id, name) => {
        setUser(user.filter(x => x.id !== id))
        alert(`${name} has been deleted`)
    }
    return (
        <div className="booklist">
            <h1  style={{textAlign:'center'}}>User List</h1>
            <h2  style={{textAlign:'center'}}>Total number of users: {user.length}</h2>
            {user.map(data => (
                <div className="book_contanier">
                    <div className="bookcard">
                        <h2>Name: {data.name}</h2>
                        <h2>Age: {data.age}</h2>
                        <p>Mail id: {data.email}</p>
                        <p>Phone Number: {data.phonenumber}</p>
                        <button className="btn" onClick={() => remove(data.id, data.name)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default UserList;