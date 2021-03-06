import React from 'react';
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import {grayGradient} from "../../utils/css-utils";

interface PropTypes {
    width?: number,
    height?: number,
    footerDescription?: string
    footerLink?: string
    footerLinkName?: string
    mainDescription?: string
}

/**
 * Returns empty card list animated component
 */
const EmptyCardList = React.memo<PropTypes>(({
    width = 160,
    height = 220,
    footerDescription = "Browse something for you on our",
    footerLink = "/nfts",
    footerLinkName = "market",
    mainDescription = "No items found."
}) => {
    return (
        <div className="w-full flex flex-col justify-center items-center gap-10 mt-10">
            <div className="inline-flex items-end gap-4">
                <motion.div className="rounded-lg shadow-mjol-gray-xs"
                            style={{
                                width,
                                height,
                                background: grayGradient("left")
                            }}
                            initial={{
                                rotate: -3,
                            }}
                            animate={{
                                rotate: -10,
                            }}
                            transition={{
                                repeatType: "reverse",
                                duration: 1,
                                repeat: Infinity,
                            }}
                />
                <motion.div
                    className="rounded-lg shadow-mjol-gray-xs"
                    style={{
                        width: width * 0.7,
                        height: height * 0.7,
                        background: grayGradient("right")
                    }}
                    initial={{
                        rotate: 6,
                    }}
                    animate={{
                        rotate: 20,
                    }}
                    transition={{
                        repeatType: "reverse",
                        duration: 1,
                        repeat: Infinity
                    }}
                >
                </motion.div>
            </div>

            {/* Footer */}
            <div className="text-sm font-archivo items-center text-center space-y-2 px-1">
                <div className="text-black text-xl font-archivo font-extrabold">
                    {mainDescription}
                </div>
                <div className="text-md flex flex-row flex-wrap gap-1 justify-center">
                    <div className="text-gray-700">
                        {footerDescription}
                    </div>
                    <Link to={footerLink} className="text-blue-500 font-extrabold hover:text-blue-600">
                        {footerLinkName}
                    </Link>
                </div>
            </div>
        </div>
    );
});

export default EmptyCardList;