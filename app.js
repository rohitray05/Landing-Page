let d = new Date()
let prevDate = d - 1000*60*60*24*2
let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(prevDate)
let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(prevDate)
let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(prevDate)

document.getElementById("date").innerHTML = `${da} ${mo}, ${ye}`;
document.getElementById("date1").innerHTML = `${da} ${mo}, ${ye}`;

