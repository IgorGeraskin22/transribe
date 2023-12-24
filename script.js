document.addEventListener('DOMContentLoaded', function () {
    var timeCodes = [
        { time: 0, text: 'Hello', id: 'timeCode1' },
        { time: 5, text: 'How are you?', id: 'timeCode2' },
        // Add more time codes as needed
    ];

    var transcriptionContainer = document.getElementById('transcription-container');
    var audioPlayer = document.getElementById('audioPlayer');

    timeCodes.forEach(function (code) {
        var timeCodeElement = document.createElement('span');
        timeCodeElement.id = code.id;
        timeCodeElement.className = 'time-code';
        timeCodeElement.textContent = code.text;

        timeCodeElement.addEventListener('click', function () {
            audioPlayer.currentTime = code.time;
            audioPlayer.play();
        });

        transcriptionContainer.appendChild(timeCodeElement);
    });
});
