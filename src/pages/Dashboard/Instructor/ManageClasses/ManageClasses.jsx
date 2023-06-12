import { useState } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FcCancel } from 'react-icons/fc';
import { IoMdDoneAll } from 'react-icons/io';
import { BiMailSend } from 'react-icons/bi';

const ManageClasses = () => {

    const [feedBack, setFeedback] = useState('');
    const [clickedStatus, setClickedStatus] = useState(null);
    const [itemId, setItemId] = useState();

    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/classes')
        console.log(res.data)
        return res.data;
    })

    const token = localStorage.getItem('access-token');
    const handleUpdateStatus = async (status, id) => {
        setClickedStatus(status);
        try {
            const response = await fetch(`http://localhost:5000/instructors/${id}/status`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${token}`
                },
                body: JSON.stringify({ status })
            })
            const data = await response.json();
            refetch();
        } catch (error) {
            console.log(error)
        }
    }
    const handleFeedBack = async (id) => {

        try {
            const response = await fetch(`http://localhost:5000/instructors/${id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${token}`
                },
                body: JSON.stringify({ feedBack })
            })
            const data = await response.json();
            console.log(data)
            alert('Feedback send successfully');
            refetch();
        } catch (error) {
            console.log(error)
        }
    }

    const handleOpenModal = (id) => {
        setItemId(id);
        window.my_modal_4.showModal();
    };

    return (
        <>
            <h2 className="text-center text-3xl font-bold mb-6">Users Classes</h2>
            <div className='w-100 bg-slate-500 text-white'>
                <div className="overflow-x-auto">
                    <table className="table">

                        <thead>
                            <tr className='text-white'>
                                <th>#</th>
                                <th>Class Name</th>
                                <th>Picture</th>
                                <th>Email</th>
                                <th>Seats</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Approved</th>
                                <th>Denied</th>
                                <th>Feedback</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                classes.map((item, index) => <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td>{item.className}</td>
                                    <td> <img className='w-10 h-10 rounded-sm' src={item.image} alt="class image" /> </td>
                                    <td>{item.email}</td>
                                    <td>{item.seats}</td>
                                    <td>{item.price}</td>
                                    <td>{item.status}</td>

                                    <td>
                                        {item.status !== 'approved' ? (
                                            <button
                                                onClick={() => handleUpdateStatus('approved', item._id)}
                                                disabled={clickedStatus !== null}
                                            >
                                                <IoMdDoneAll />
                                            </button>
                                        ) : (
                                            'approved'
                                        )}
                                    </td>
                                    <td>
                                        {item.status !== 'denied' ? (
                                            <button
                                                onClick={() => handleUpdateStatus('denied', item._id)}
                                                disabled={clickedStatus !== null}
                                            >
                                                <FcCancel />
                                            </button>
                                        ) : (
                                            'denied'
                                        )}
                                    </td>

                                    <td>{item.status !== 'approved' ? <button className="btn" onClick={() => handleOpenModal(item._id)}>Feedback</button> : ('')}
                                    </td>


                                </tr>)

                            }

                        </tbody>
                    </table>
                </div>
            </div>
            <dialog id="my_modal_4" className="modal">
                <form method="dialog" className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">
                        <input type="textarea"
                            onChange={(e) => setFeedback(e.target.value)}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" /><BiMailSend className="text-5xl" onClick={() => handleFeedBack(itemId)}></BiMailSend>
                    </p>
                    <div className="modal-action">
                        <button className="btn">Close</button>
                    </div>
                </form>
            </dialog>
        </>
    );
};

export default ManageClasses;