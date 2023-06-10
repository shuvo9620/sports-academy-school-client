import { Link, Outlet } from "react-router-dom";
import useAdmin from "../hooks/UseAdmin";
import useInstructor from "../hooks/useInstructor";


const Dashboard = () => {

    // TODO: load data from server to have dynamic admin
    // const [isAdmin] = useAdmin();
    // const {isInstructor} = useInstructor();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        {isAdmin ? (
                            <>
                                <li><Link to="/dashboard/manageClass">Manage Classes</Link></li>
                                <li><Link to="/dashboard/manageUsers">Manage Users</Link></li>
                                <li><Link to="/">Go Home</Link></li>

                            </>
                        ) : (
                            <>
                                {isInstructor ? (
                                    <>
                                        <li><Link to="/dashboard/addClasses">Add Class</Link></li>
                                        <li><Link to="/dashboard/myClasses">My Class</Link></li>
                                        <li><Link to="/">Go Home</Link></li>

                                    </>
                                ) : (
                                    <>
                                        <li><Link to="/dashboard/userHome">Dashboard Home</Link></li>
                                        <li><Link to="/">Go Home</Link></li>

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