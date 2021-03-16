export const getPercentageHeight = (max: number, num: number): string => {
    return Math.ceil(num * 100 / max) + '%'
}

export const getNumberWithSpaces = (x: number) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
