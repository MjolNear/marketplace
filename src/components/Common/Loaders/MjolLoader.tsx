import React, {memo, useMemo} from 'react';


interface TMjolLoaderProps {
    size?: number,
    mt?: number,
    mb?: number
}

const MjolLoader: React.FC<TMjolLoaderProps> = ({
    size = 30,
    mt = 0,
    mb = 0
}) => {

    const style = useMemo(() => ({
        width: size,
        height: size,
    }), [size])

    return (
        <div className="flex items-center justify-center w-full h-full"
             style={{
                 marginTop: mt,
                 marginBottom: mb
             }}>
            <div className="mjol-loader" style={style}/>
        </div>
    )
};

export default memo(MjolLoader);