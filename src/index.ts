export function IsNullOrEmpty(str: string): boolean {
    return str === null || str.trim().length === 0;
}

export function IsNumber(num: number): boolean {
    return !isNaN(Number(num));
}