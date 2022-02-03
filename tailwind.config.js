module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        fontFamily: {
            'archivo': ['Archivo']
        },
        fontSize: {
            'tiny-1': '.4rem',
            'tiny-2': '.5rem',
            'tiny-3': '.6rem',
            'tiny-3.5': '.64rem',
            'tiny-4': '.68rem',
            'tiny-5': '.71rem',

            'xs': ['0.75rem', {
                'line-height': '1rem'
            }],
            'xs-2': ['0.81rem', {
                'line-height': '1rem'
            }],
            'xs-3': ['0.875', {
                'line-height': '1rem'
            }],
            'sm': ['0.875rem', {
                'line-height': '1.25rem'
            }],
            'md': ['1rem', {
                'line-height': '1.5rem'
            }],
            'lg': ['1.125rem', {
                'line-height': '1.75rem'
            }],
            'xl': ['1.25rem', {
                'line-height': '1.75rem'
            }],
            '2xl': ['1.5rem', {
                'line-height': '2rem'
            }],
            '3xl': ['1.875rem', {
                'line-height': '2.25rem'
            }],
            '4xl': ['2.25rem', {
                'line-height': '2.5rem'
            }],
            '5xl': ['3rem', {
                'line-height': '1'
            }],
            '6xl': ['3.75rem', {
                'line-height': '1'
            }],
            '7xl': ['4.6rem', {
                'line-height': '1'
            }],
            '8xl': ['6rem', {
                'line-height': '1'
            }],
            '9xl': ['8rem', {
                'line-height': '1'
            }]
        },

        boxShadow: {
            "mjol-base-purple": "0px 6px 6px 4px  rgba(0,   19,  224, 0.2)",
            "mjol-base-purple-lg": "0px 7px 9px 6px  rgba(0,   19,  224, 0.2)",
            "mjol-base-purple-xl": "0px 9px 11px 8px rgba(0,   19,  224, 0.2)",
            "mjol-blue-button": "0px 0px 4px 2px  rgba(120, 192, 233, 0.3)",
            "mjol-base-blue": "0px 5px 7px 4px  rgba(120, 192, 233, 0.3)",
            "mjol-base-blue-lg": "0px 7px 9px 6px  rgba(120, 192, 233, 0.3)",
            "mjol-base-blue-drop-xl": "0px 15px 14px 0px rgba(120, 192, 233, 0.3)",

            "mjol-blue-all-md": "0px 0px 6px 6px rgba(120, 192, 233, 0.5)",
            "mjol-blue-all-xs": "0px 0px 3px 3px rgba(120, 192, 233, 0.3)",

            "mjol-medium-blue-all-xs": "0px 0px 3px 3px rgba(120, 192, 233, 0.5)",

            "mjol-dark-blue-xs": "0px 0px 3px 3px rgba(67, 145, 255, 0.8)",
            "mjol-dark-blue-md": "0px 0px 6px 6px rgba(67, 145, 255, 0.8)",

            "mjol-gray-xs": "0px 0px 3px 3px rgba(0, 0, 0, 0.1)"
        },

        screens: {
            'xxs': '310px',
            'xs': '500px',
            'sm': '660px',
            'md': '768px',
            'lg': '990px',
            'xl': '1320px',
            '2xl': '1536px',
        },

        extend: {
            outline: {
                0: ['0 solid white', '0']
            },
            zIndex: {
                '-10': '-10'
            },

            transitionTimingFunction: {
                'border-timing': 'cubic-bezier(.445,.05,.55,.95)'
            },

            aspectRatio: {
                'square': '1 / 1',
            },

            // Sizes
            width: {
                '84': '21rem',
                '88': '22rem',
                '92': '23rem',
            },

            maxHeight: {
                'md': '28rem',
                'lg': '32rem',
                'xl': '36rem',
                '2xl': '42rem',
                '3xl': '48rem',
            },

            // Grid
            gridTemplateColumns: {
                '1-300px': 'repeat(1, 300px)',
                '2-300px': 'repeat(2, 300px)',
                '3-300px': 'repeat(3, 300px)',
                '4-300px': 'repeat(4, 300px)',
                '5-300px': 'repeat(5, 300px)'
            },

            // Colors
            colors: {
                mjol: {
                    black: 'rgb(0, 0, 0)',
                    white: '#f4f7fc',
                    gray: {
                        border: 'rgb(229,231,235)'
                    },
                    purple: {
                        base: '#7e22ce',
                        dark: '#251552',
                        'dark-t': '#25155299'
                    },
                    blue: {
                        opensea: 'rgb(59, 129, 219)',
                        'opensea-dark': 'rgb(46,104,177)',
                        shadow: 'rgb(224, 240, 250)',
                        button: 'rgb(0, 152, 201)',
                        light: 'rgb(120, 192, 233)',
                        base: '#4391ff',
                    },

                    'light-blue': '#48B3EF',
                    'dark-blue': '#135D86',

                    green: {
                        light: '#1EFF7F',
                        middle: '#1effab',
                        base: '#2dfd87'
                    },
                    cyan: {
                        base: "#18b3cc"
                    }
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio')
    ],
}