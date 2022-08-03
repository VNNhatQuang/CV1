var date = document.getElementById('date');

setInterval(function() {
    var day = new Date().getDay();
    if (day == 0) day = "Chủ nhật";
    if (day == 1) day = "Thứ hai";
    if (day == 2) day = "Thứ ba";
    if (day == 3) day = "Thứ tư";
    if (day == 4) day = "Thứ năm";
    if (day == 5) day = "Thứ sáu";
    if (day == 6) day = "Thứ bảy";

    var d = new Date().getDate();
    var m = new Date().getMonth() + 1;
    var y = new Date().getFullYear();

    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    var seconds = new Date().getSeconds();

    console.log(`${day}, ${d}/${m}/${y} | ${hours}:${minutes}:${seconds}`);

    date.innerText = `${day}, ${d}/${m}/${y} | ${hours}:${minutes}:${seconds}`;
}, 300)