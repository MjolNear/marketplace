export default function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}


export const grayGradient = (direction: "left" | "right") => {
    return `linear-gradient(to ${direction}, rgb(229, 232, 235), rgba(255, 255, 255, 0))`
}

export const gridRepeat = (times: number, size: number) => {
    return new Array(times).fill(`${size}px`).join('_')
}

export type ObjectFit =
    "contain" | "cover" | "fill" | "none" | "scale-down" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset"


export type TextAlignment =
    "left" | "center" | "right"

export type TextSize =
    "tiny-1"
    | "tiny-2"
    | "tiny-3"
    | "tiny-3.5"
    | "tiny-4"
    | "tiny-5"
    | "xs"
    | "xs-2"
    | "xs-3"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "9xl"


export type FontWeight = "black" | "extrabold" | "bold" | "semibold" | "medium" | "thin" | "light" | "extralight"