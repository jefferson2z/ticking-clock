const hand = document.querySelector
const secondHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector(".min-hand");
const hoursHand = document.querySelector(".hour-hand");

function setDate() {
    const date = new Date();
    const sec = date.getSeconds();
    const min = date.getMinutes();
    const hour = date.getHours();

    const secDegrees = ( sec / 60 ) * 360 + 90;
    const minDegrees = ( min / 60 ) * 360 + 90;
    const hourDegrees = ( hour / 12 ) * 360 + 90;

    if ( sec == 59 ) {
        secondHand.style.transition = 'all 0s';
    } else if ( sec == 1) {
        secondHand.style.transition = 'all 0.05s';
    }

    if ( min == 59 ) {
        minutesHand.style.transition = 'all 0s';
    } else if ( min == 1) {
        minutesHand.style.transition = 'all 0.05s';
    }

    if ( hour == 59 ) {
        hoursHand.style.transition = 'all 0s';
    } else if ( hour == 1) {
        hoursHand.style.transition = 'all 0.05s';
    }

    secondHand.style.transform = `rotate(${secDegrees}deg)`;
    minutesHand.style.transform = `rotate(${minDegrees}deg)`;
    hoursHand.style.transform = `rotate(${hourDegrees}deg)`;

    console.log(hourDegrees);
}

setInterval(setDate,1000);
