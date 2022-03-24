import React, {memo, useMemo} from 'react';


interface TMjolLoaderProps {
    size?: number
}

const MjolLoader: React.FC<TMjolLoaderProps> = ({size = 30}) => {

    const style = useMemo(() => ({
        width: size,
        height: size
    }), [size])

    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="mjol-loader" style={style}/>
        </div>
    )
};

export default memo(MjolLoader);