import React from 'react';

const Links = ({route}) => {
    return (
        <li className='lg:mr-10 hover:bg-amber-800 px-4'>
            <a href="{route.path}">{route.name}</a>
        </li>
    );
};

export default Links;