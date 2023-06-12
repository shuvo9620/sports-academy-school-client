
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import ClassesCard from './ClassesCard';

const Classes = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [] } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/instructor/classes')
        return res.data;
    })
    return (
        <div>
            <h3 className='text-3xl text-center mt-6 font-bold uppercase'>Classes</h3>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-10'>
                {
                    classes.map(classList => <ClassesCard key={classList._id} classList={classList}>

                    </ClassesCard>)
                }
            </div>
        </div>
    );
};

export default Classes;