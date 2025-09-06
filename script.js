function playSound() {
    var sound = document.getElementById("clickSound");
    sound.currentTime = 0;
    sound.volume = 0.7;
    sound.play();

    sound.onended = function() {
        window.location.href = "game.html";
    }
    
}

