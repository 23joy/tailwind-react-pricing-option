import React from 'react';
import PricingFeatures from './PricingFeatures';

const PricingCard = ({pricing}) => {
    // console.log(pricing);
    const {planName,price,description,features,Popular}=pricing
    return (
        <div className=' flex flex-col border bg-orange-400 m-3 p-2 rounded-2xl '>
            <div>
                <h1 className='text-4xl'>{planName}</h1>
                <p>{price}</p>
            </div>
            {Popular && <span className='bg-blue-800 rounded-xl'>Most Popular</span>}
            
            <div className='bg-amber-800 p-5 rounded-2xl flex-1'>
                 <h3>{description}</h3>
                {
                    features.map((feature,id)=> <PricingFeatures key={id} feature={feature}></PricingFeatures>)
                }
            </div>
            <button className='btn  rounded-xl w-full mt-2'>Subscribe</button>
    
        </div>
    );
};

export default PricingCard;