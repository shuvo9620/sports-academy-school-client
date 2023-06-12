import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';
import useAllUsers from '../hooks/useAllUsers';
import useAuth from '../hooks/useAuth';

const Dashboard = () => {

    const [userRole, setUserRole] = useState([]);
    const [isUsers] = useAllUsers();
    const { user, loading } = useAuth();

    useEffect(() => {
        if (!loading && isUsers && isUsers.length > 0) {
            const loggedInUserRole = isUsers.find(u => u.email === user?.email)?.role;
            setUserRole(loggedInUserRole ? [loggedInUserRole] : []);
        }
    }, [loading, isUsers, user]);

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();



    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-neutral drawer-button lg:hidden">Open dashboard</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-slate-600 rounded text-white">
                        {isAdmin ? (
                            <>
                                <kbd className="kbd kbd-lg bg-rose-500">Role: {userRole[0]}</kbd>
                                <li><Link to="/dashboard/manageClasses">Manage Classes</Link></li>
                                <li><Link to="/dashboard/manageUsers">Manage Users</Link></li>
                                <li><Link to="/">Home Page</Link></li>


                            </>
                        ) : (
                            <>
                                {isInstructor ? (
                                    <>
                                        <kbd className="kbd kbd-lg bg-rose-500">Role:{userRole[0]}</kbd>
                                        <li><Link to="/dashboard/addClasses">Add Class</Link></li>
                                        <li><Link to="/dashboard/myClasses">My Class</Link></li>
                                        <li><Link to="/">Home</Link></li>

                                    </>
                                ) : (
                                    <>
                                        <kbd className="kbd kbd-lg bg-rose-500">Role:{userRole[0]}</kbd>
                                        <li><Link to="/dashboard/selectedClasses">Selected Class</Link></li>
                                        <li><Link to="/">Home</Link></li>

                                    </>
                                )}
                            </>
                        )}


                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;



