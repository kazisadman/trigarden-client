import React from 'react';

const AddToCartBtn = ({text}) => {
    return (
        <div className='bg-primary text-white p-2 rounded-lg text-center z-20 cursor-pointer'>
            {text}
        </div>
    );
};

export default AddToCartBtn;