import { useEffect, useState } from 'react';

const PopularClasses = () => {

    const [maxItem, setMaxItem] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/payments');
                const data = await response.json();
                const items = data;
                console.log(items)
                let maxItemId = null;
                let maxItem = null;

                items.forEach(item => {
                    if (!maxItemId || item.itemId > maxItemId) {
                        maxItemId = item.itemId;
                        maxItem = item;
                    }
                });

                setMaxItem(maxItem);
            } catch (error) {
                console.error('Error fetching payment data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
                <h2 className="card-title">{ }</h2>
                <p>Email: {maxItem?.sellerEmail}</p>
                <p>Available Seats:{maxItem?.seats}</p>
                <p>Product Price: {maxItem?.price}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default PopularClasses;