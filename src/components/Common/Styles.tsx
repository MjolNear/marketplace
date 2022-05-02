export enum Rounded {
    LG = 'rounded-lg',
    XL = 'rounded-xl',
    XL2 = 'rounded-2xl',
    XL3 = 'rounded-3xl'
}


export type Style = Rounded

export const combineStyles = (...styles: Style[]) => styles.join(' ')
