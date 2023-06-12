
import { useForm } from 'react-hook-form';

const UpdateMyClasses = (props) => {
    console.log(props)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { handleUpdateClasses, onHide } = props;

    const { _id, className, email, price, seats } = props?.item || {};
    console.log(typeof (seats))
    return (
        <div {...props} className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="bg-white rounded-lg w-3/4 p-6">
                <h2 className="text-2xl font-bold mb-4 text-center">Update Class</h2>
                <div className="flex justify-end items-center mb-4">
                    <button className="btn btn-circle btn-outline" onClick={onHide}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
                <form onSubmit={handleSubmit(handleUpdateClasses)}>
                    {/* Form fields here */}
                    <div className="mb-3">
                        <label className="form-label">Class Name:</label>
                        <input type="text" className="form-input w-3/4 px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:ring focus:border-blue-300" {...register('className', { required: true })} defaultValue={className} />
                        {errors.className && <span className="text-danger">class name is required</span>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email:</label>
                        <input type="text" className="form-input w-3/4 px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:ring focus:border-blue-300" {...register('email', { required: true })} defaultValue={email} />
                        {errors.email && <span className="text-danger">email is required</span>}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Price:</label>
                        <input type="number" className="form-input w-3/4 px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:ring focus:border-blue-300" {...register('price', { required: true })} defaultValue={price} />
                        {errors.price && <span className="text-danger">price is required</span>}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Seats:</label>
                        <input type="text" className="form-input w-3/4 px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:ring focus:border-blue-300" {...register('seats', { required: true })} defaultValue={seats} />
                        {errors.seats && <span className="text-danger">seat is required</span>}
                    </div>
                    <input type="text" className="form-control hidden md:hidden lg:hidden" {...register('_id', { required: true })} value={_id} />
                    <button type="submit" className="btn btn-neutral  w-1/4 mx-auto">Update</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateMyClasses;
