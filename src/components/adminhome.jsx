import { Route, Routes } from "react-router-dom";
import AddBook from "./addbook";
import AddUser from "./adduser";
import Admindashboard from "./admindashboard";
import AdminNavbar from "./adminnavbar";
import BookList from './booklist'
import ReadBook from "./readbook";
import UserList from "./userlist";
import Error from "./error";

const Adminhome = () => {
    return (
        <div className="page">
            <AdminNavbar />
            <Routes>
                <Route path="/" element={<Admindashboard />} />
                <Route path="/booklist" element={<BookList />} />
                <Route path="/userlist" element={<UserList />} />
                <Route path="/booklist/:id" element={<ReadBook />} />
                {/*Route parameters used in the above path */}
                <Route path="/addbook" element={<AddBook />} />
                <Route path="/adduser" element={<AddUser />} />
                <Route path='*' element={<Error />} />


            </Routes>
        </div>
    );
}

export default Adminhome;