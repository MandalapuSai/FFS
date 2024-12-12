import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import styles

export default function Rsp() {
    const [date, setDate] = useState(new Date());
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedPrices, setSelectedPrices] = useState([]);

    const DateWisePrice = [
        {
            date: '9',
            prices: [
                { id: 1, price: '120', name: 'MS' },
                { id: 2, price: '140', name: 'HSD' },
                { id: 3, price: '160', name: 'SPEED' },
            ],
        },
        {
            date: '10',
            prices: [
                { id: 1, price: '110', name: 'MS' },
                { id: 2, price: '130', name: 'HSD' },
                { id: 3, price: '190', name: 'SPEED' },
            ],
        },
        {
            date: '11',
            prices: [
                { id: 1, price: '90', name: 'MS' },
                { id: 2, price: '70', name: 'HSD' },
                { id: 3, price: '40', name: 'SPEED' },
            ],
        },
        {
            date: '12',
            prices: [
                { id: 1, price: '91', name: 'MS' },
                { id: 2, price: '71', name: 'HSD' },
                { id: 3, price: '41', name: 'SPEED' },
            ],
        },
    ];

    const getDateString = date => {
        return date.getDate().toString();
    };

    useEffect(() => {
        const todayString = getDateString(new Date());
        const initialPriceData = DateWisePrice.find(entry => entry.date === todayString);
        if (initialPriceData) {
            setSelectedPrices(initialPriceData.prices);
        }
    }, []);

    const handleDateChange = newDate => {
        setDate(newDate);
        const dateString = getDateString(newDate);
        console.log('Selected Date:', dateString);

        const priceData = DateWisePrice.find(entry => entry.date === dateString);
        if (priceData) {
            setSelectedPrices(priceData.prices);
        } else {
            const todayString = getDateString(new Date());
            const defaultPriceData = DateWisePrice.find(entry => entry.date === todayString);
            if (defaultPriceData) {
                setSelectedPrices(defaultPriceData.prices);
            }
        }
        setShowCalendar(false);
    };

    return (
        <div style={{ backgroundColor: '#f9f3f3', height: '400px' }}>
            <div className='text-center'>
                <br />
                <button
                    style={{ border: 'none', backgroundColor: 'blue', padding: '6px 5px', color: 'white' }}
                    onClick={() => setShowCalendar(!showCalendar)}
                >
                    {showCalendar ? 'Hide Calendar' : 'Show Calendar'}
                </button>
                <div className='mt-2 mb-2'>
                    <b style={{ border: '1px solid gray', padding: '4px', backgroundColor: '#c9dded', cursor: 'pointer' }}>
                        Date : <span style={{ color: 'blue' }}>{date.toDateString()}</span>
                    </b>
                </div>
            </div>

            <div className='row'>
                <div className='col-md-4'></div>
                <div className='col-md-4'>
                    {showCalendar && (
                        <Calendar
                            onChange={handleDateChange}
                            value={date}
                        />
                    )}
                </div>
                <div className='col-md-4'></div>
            </div>

            <div className='row mt-5'>
                <div className='col-md-2'></div>
                <div className='col-md-8'>
                    <div className='row d-flex flex-wrap'>
                        <div className='col-md-1'></div>
                        <div className='col-md-3 col-5'>
                            <div className='txthead'>MS</div>
                            <div className='txthead'>HSD</div>
                            <div className='txthead'>SPEED</div>
                        </div>
                        <div className='col-md-3 col-5'>
                            {selectedPrices.length > 0 ? (
                                selectedPrices.map(item => (
                                    <div key={item.id} className='txttext'>
                                         ₹ {item.price}/-
                                    </div>
                                ))
                            ) : (
                                <div className='txttext'>No data available</div>
                            )}
                        </div>
                        <div className='col-md-1'></div>
                    </div>
                </div>
                <div className='col-md-2'></div>
            </div>
        </div>
    );
}
