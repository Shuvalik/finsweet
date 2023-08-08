export default function (date) {
    const currentDate = new Date(date);
    const addZero = (number)=>number < 10 ? '0' + number: number;
    return `${addZero(currentDate.getDate())}.${addZero(currentDate.getMonth() + 1)}.${currentDate.getFullYear()}`
}