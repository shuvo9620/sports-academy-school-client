
import InstructorCard from './InstructorCard';
import useInstructorList from '../../../hooks/useInstructorList';

const Instructors = () => {

    const [instructors] = useInstructorList();

    return (
        <div>
            <h3 className='mt-4 text-3xl text-center font-semibold capitalize'>Instructors</h3>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-6'>
                {
                    instructors.map(instructor => <InstructorCard key={instructor._id} instructor={instructor}>

                    </InstructorCard>)
                }
            </div>
        </div>
    );
};

export default Instructors;