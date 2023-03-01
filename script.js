window.addEventListener('load', calculateTime)


function calculateTime() {
    let date = new Date();
    let month = date.getMonth();
    let dateofmonth = date.getDate();
    let dayNumber = date.getDay();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let ampm = hour >=12 ? 'PM' : 'AM';
    let monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    let dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

    hour = hour % 12;
    hour = hour?hour:'12';
    hour = hour<10 ? '0'+hour : hour; /*add a zero in the front for single-digit hour */
    minute = minute < 10 ? '0'+minute:minute;

    document.getElementById("month").innerHTML = monthNames[month];
    document.getElementById("dateofmonth").innerHTML = dateofmonth;
    document.getElementById("day").innerHTML = dayNames[dayNumber];
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("ampm").innerHTML = ampm;

    setTimeout(calculateTime, 200); /*keep calling this to get the latest time */
}
