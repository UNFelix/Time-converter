function secondsToDhms(seconds) {
    seconds = Number(seconds);
    
    const y = Math.floor(seconds / 31536025.92);
    const month = Math.floor(seconds % 31536025.92 / 2628001.152);
    const w = Math.floor(seconds % 2628001.152 / 604800);
    const d = Math.floor(seconds % 604800 / 86400);
    const h = Math.floor(seconds % 86400 / 3600);
    const m = Math.floor(seconds % 3600 / 60);
    const s = Math.floor(seconds % 60);
    
    let yDisplay = y > 0 ? y + (y == 1 ? " year, " : " years, ") : "";
    let monthDisplay = month > 0 ? month + (month == 1 ? " month, " : " months, ") : "";
    let wDisplay = w > 0 ? w + (w == 1 ? " week, " : " weeks, ") : "";
    let dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
    let hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    let mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    let sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return yDisplay + monthDisplay + wDisplay + dDisplay + hDisplay + mDisplay + sDisplay;
    }
    
    console.log(secondsToDhms(21448911));