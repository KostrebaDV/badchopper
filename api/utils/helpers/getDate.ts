const normalizeTime = (time) => {
    const isAm = time.toString().length === 1;

    return isAm ? `0${time}` : time;
}

export const getDate = (dateFormat = 'D-M-Y', timeFormat = 'H:M') => {
    const now = new Date();

    const D = now.getDate();
    const M = now.getMonth()+1;
    const Y = now.getFullYear();

    const H = normalizeTime(now.getHours());
    const Min = normalizeTime(now.getMinutes());

    const date = dateFormat
        //@ts-ignore
        .replace('Y', Y)
        //@ts-ignore
        .replace('M', M)
        //@ts-ignore
        .replace('D', D);

    const time = timeFormat
        //@ts-ignore
        .replace('H', H)
        //@ts-ignore
        .replace('M', Min);

    return `${date} ${time}`
}
