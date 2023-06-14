import { Link } from "react-router-dom";
const UserNavbar = () => {
    return ( 
        <div className="page">
        <div className="navbar">
            <Link to={'/user/'} style={{textDecoration:0}}><h3>User Portal</h3></Link>
            <div className="nav_links">
                <li><Link to="/user/"> Dashboard</Link></li>
                <li><Link to="/user/booklist">Book List</Link></li>
                <li><Link to="/">Logout</Link></li>
            </div>
        </div>
    </div>
     );
}
 
export default UserNavbar;