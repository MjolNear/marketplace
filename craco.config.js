module.exports = {
    // eslint: {
    //     enable: false
    // },
    // node: {
    //     Buffer: true
    // },
    style: {
        postcssOptions: {
            plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
            ],
        },
    },
}