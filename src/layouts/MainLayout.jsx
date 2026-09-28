
import { Outlet } from 'react-router';

import Navbar from '../components/shired/navbar/Navbar';
import AllBooks from '../pages/book/AllBooks';

const MainLayout = () => {
    return (
        <div>
          <Navbar></Navbar>
            <Outlet></Outlet>
            <AllBooks></AllBooks>
            
        </div>
    );
};

export default MainLayout;