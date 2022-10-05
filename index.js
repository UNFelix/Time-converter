function secondsToDhms(seconds) {
    seconds = Number(seconds);
    const w = Math.floor(seconds / 604800);
    const d = Math.floor(seconds % 604800 / 86400);
    const h = Math.floor(seconds % 86400 / 3600);
    const m = Math.floor(seconds % 3600 / 60);
    const s = Math.floor(seconds % 60);
    
    let wDisplay = w > 0 ? w + (w == 1 ? " week, " : " weeks, ") : "";
    let dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
    let hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    let mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    let sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return wDisplay + dDisplay + hDisplay + mDisplay + sDisplay;
    }
    
    console.log(secondsToDhms(684801));