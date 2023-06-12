
const InstructorCard = ({ instructor }) => {

    const { photoURL, name, email } = instructor;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={photoURL} alt="instructor image" /></figure>
            <div className="card-body">
                <p>Instructor Name: {name}</p>
                <p>Instructor Email: {email}</p>
            </div>
        </div>
    );
};

export default InstructorCard;