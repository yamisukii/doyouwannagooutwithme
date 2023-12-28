var flag = true;
var gif
document.addEventListener(`load`, function (event) {
    gif = document.getElementById("gif").src;
})
document.addEventListener('mousemove', function (event) {
    var button = document.getElementById('noButton');
    var distanceThreshold = 170; // Adjust this threshold as needed
    var distance = calculateDistance(button, event.clientX, event.clientY);

    if (distance < distanceThreshold) {
        // Change to a new gif when the mouse is near the button
        changeGif('https://i0.wp.com/i.pinimg.com/originals/19/04/d1/1904d1081f9a1ebbf21ca40b95dee490.gif');
        flag = false;
    }
    if (!flag && distance > distanceThreshold) {
        // Change back to the old gif when the mouse is away from the button
        changeGif('https://i.pinimg.com/originals/cb/0f/33/cb0f3377971e05f3e5ea7ed771a9c2f8.gif');
        flag = true;
    }
});

function calculateDistance(elem, mouseX, mouseY) {
    var rect = elem.getBoundingClientRect();
    var centerX = rect.left + rect.width / 2;
    var centerY = rect.top + rect.height / 2;

    var distance = Math.sqrt((mouseX - centerX) ** 2 + (mouseY - centerY) ** 2);
    return distance;
}

function moveButton() {
    var button = document.getElementById('noButton');
    // Calculate the maximum position to keep the right edge of the button within the visible area
    var maxX = window.innerWidth - button.offsetWidth;
    var maxY = window.innerHeight - button.offsetHeight;

    // Calculate random positions within the visible area
    var x = Math.random() * maxX;
    var y = Math.random() * maxY;

    button.style.right = `${x}px`;
    button.style.top = `${y}px`;

}

//This Function is just for mobile devices 
function moveAndChangeGif() {
    moveButton();
    if (gif != 'https://i0.wp.com/i.pinimg.com/originals/19/04/d1/1904d1081f9a1ebbf21ca40b95dee490.gif') {
        changeGif('https://i0.wp.com/i.pinimg.com/originals/19/04/d1/1904d1081f9a1ebbf21ca40b95dee490.gif');
        updateGif('https://i0.wp.com/i.pinimg.com/originals/19/04/d1/1904d1081f9a1ebbf21ca40b95dee490.gif');
    }

}
function updateGif(newGifString) {
    gif = newGifString;
}
function changeGif(newGifSrc) {
    var gifImage = document.getElementById("gif");
    gifImage.src = newGifSrc;
}

// Optionally, you can include the following code if you want to redirect to "yes.html" when the button is clicked.
function nextPage() {
    window.location.href = "yes.html";
}

