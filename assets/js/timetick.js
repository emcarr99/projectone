var timeDisplay = $('#currentTick'); 

function showTime() {
    var rightNow = dayjs().format("MMM DD, YYYY [ • ] h:mm:ss a");
    timeDisplay.text(rightNow);
}

showTime();
setInterval(showTime, 1000);