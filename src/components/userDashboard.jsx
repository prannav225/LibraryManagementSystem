import '../styles/userdashboard.css'
import { useState, useEffect } from "react"
const UserDashboard = () => {
    let [dashboard, setDashboard] = useState([])
    useEffect(() => {
        let fetchdata = async () => {
            let response = await fetch('http://localhost:2000/dashboard')
            let data = await response.json();
            setDashboard(data);
        }
        fetchdata();
    }, [])
    return (
        <div className="userDashboard">
            <h1  style={{textAlign:'center'}}>Welcome to Our Library Management System</h1>
            {dashboard.map(data => (
                <div id="contanier" className="dashboard_contanier">
                    <h1>{data.heading}</h1>
                    <p>{data.description}</p>
                </div>
            ))}
        </div>

    );
}

export default UserDashboard;