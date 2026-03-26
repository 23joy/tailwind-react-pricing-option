import { ClockCheck } from 'lucide-react';
import React from 'react';

const PricingFeatures = ({feature}) => {
    
    return (
       <p className='flex mt-5'><ClockCheck className='mr-3'></ClockCheck>{feature}</p>
    );
};

export default PricingFeatures;