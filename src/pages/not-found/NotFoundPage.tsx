import React from 'react';

const NotFoundPage = React.memo(() => {
    return (
        <img className="max-w-screen-2xl mx-auto"
             src="https://cdn.dribbble.com/users/745025/screenshots/6723888/gif_404.gif"
             alt="not found"
        />
    );
});

export default NotFoundPage;