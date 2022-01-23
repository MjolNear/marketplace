export default function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}


export const grayGradient = (direction: "left" | "right") => {
    return `linear-gradient(to ${direction}, rgb(229, 232, 235), rgba(255, 255, 255, 0))`
}