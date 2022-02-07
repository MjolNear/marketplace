import React from 'react';

interface PropTypes {
    size?: number
}

const MobileFilter: React.FC<PropTypes> = ({size = 40}) => {
    return (
        <div className="xs:hidden fixed bottom-[20px] z-10 w-full flex items-center justify-center px-[40px]">
            <div className="py-2 bg-blue-500 text-white rounded-2xl text-2xl font-black text-center w-full">Filter</div>
        </div>
    );
};

export default MobileFilter;