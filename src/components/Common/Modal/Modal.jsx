import React, {useEffect, useRef} from 'react'

const Modal = ({
    close = () => {
    },
    closeOnBgClick = true,
    closeOnEscape = true,
    children,
    style = {},
}) => {
    const modalRef = useRef(null)

    useEffect(() => {
        const onKeydown = (event) => {
            if (event.key === 'Escape') {
                close()
            }
        }

        if (closeOnEscape) {
            document.addEventListener('keydown', onKeydown)
        }

        return () => {
            document.removeEventListener('keydown', onKeydown)
        }
    }, [close, closeOnEscape])

    const _bgClick = (event) => {
        if (closeOnBgClick && event.target === modalRef.current) {
            close()
        }
    }

    return (
        <div
            ref={modalRef}
            onClick={_bgClick}
            className="fixed inset-0 z-50 flex items-center p-4"
            style={{
                backgroundColor: `rgba(0, 0, 0, 0.8)`,
                ...style,
            }}
        >
            {children}
        </div>
    )
}

export default Modal