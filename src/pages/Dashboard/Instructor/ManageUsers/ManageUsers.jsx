import { useQuery } from '@tanstack/react-query';
import { MdAdminPanelSettings } from 'react-icons/md'
import { GiTeacher } from 'react-icons/gi'
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
const ManageUsers = () => {

    const [axiosSecure] = useAxiosSecure();

    const token = localStorage.getItem('access-token');
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })


    const handleUpdateRole = async (role, user) => {
        try {
            const response = await fetch(`http://localhost:5000/users/${user._id}/role`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${token}`

                },
                body: JSON.stringify({ role })
            });
            const data = await response.json();
            refetch();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h3 className="text-center text-3xl font-bold mb-6">Manage users</h3>
            <div className='w-100 bg-slate-500 text-white rounded'>
                <div className="overflow-x-auto">
                    <table className="table">

                        <thead>
                            <tr className='text-white'>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Admin</th>
                                <th>Instructor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {user.role !== 'admin' ? (<button onClick={() => handleUpdateRole('admin', user)} ><MdAdminPanelSettings></MdAdminPanelSettings></button>) : (
                                            'admin'
                                        )}
                                    </td>
                                    <td>
                                        {user.role !== 'instructor' ? (<button onClick={() => handleUpdateRole('instructor', user)} ><GiTeacher></GiTeacher></button>) : (
                                            'instructor'
                                        )}
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageUsers;