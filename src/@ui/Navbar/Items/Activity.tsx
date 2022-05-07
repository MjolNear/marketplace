import React from 'react';
import {Link} from 'react-router-dom';
import {NavbarSingleButton} from "../Common";

const Activity = () => {
    return (
        <NavbarSingleButton>
            <Link to="activity" className="group-hover:text-black">
                Activity
            </Link>
        </NavbarSingleButton>
    );
};

export default Activity;