import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOption = ({PricingPromise}) => {
    const PricingData=use(PricingPromise)
    return (
        <div>
            <h2 className='text-5xl'>Get our Membership</h2>
            <div className='grid md:grid-cols-4 grid-cols-2'>
                {
                    PricingData.map(pricing=> <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
                }
            </div>
            
        </div>
    );
};

export default PricingOption;