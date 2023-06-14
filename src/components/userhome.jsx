import {Routes,Route} from 'react-router-dom';
import UserDashboard from './userDashboard';
import UserNavbar from './userNavbar';
import BookList from './booklist';
import ReadBook from "./readbook";
import Error from './error';
const UserHome = () => {
    return ( 
        <div className="userhome">
            <UserNavbar/>
            <Routes>
                <Route path='/' element={<UserDashboard />}/>
                <Route path='/booklist' element={<BookList />}/>
                <Route path="/booklist/:id" element={<ReadBook />} />
                <Route path='*' element={<Error />}/>
            </Routes>
        </div>
     );
}
 
export default UserHome;