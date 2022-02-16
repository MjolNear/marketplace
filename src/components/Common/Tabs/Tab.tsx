import React, {MouseEventHandler} from 'react';
import classNames from "../../../utils/css-utils";

interface PropTypes {
    selected: boolean,
    text: string,
    onClick: MouseEventHandler
}

const Tab: React.FC<PropTypes> = ({selected, text, onClick}) => {
    return (
        <button className={classNames(
            'py-2 px-5 text-sm font-semibold text-white rounded-lg font-archivo',
            selected
                ? 'bg-mjol-light-blue'
                : 'text-blue-100 hover:bg-white hover:text-white hover:bg-opacity-20'
        )}
                onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Tab;