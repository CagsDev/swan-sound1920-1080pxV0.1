const audioPlayers = document.querySelectorAll('audio');

audioPlayers.forEach((player) => {
    player.addEventListener('play', function() {
        audioPlayers.forEach((audio) => {
            if (audio !== player) {
                audio.pause();
                audio.currentTime = 0;
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("mdc-2001");
    
    audioPlayer.style.backgroundColor = "#31304D";
    audioPlayer.style.color = "#00FF00"; 

    const styleButtons = () => {
        const buttons = audioPlayer.parentElement.querySelectorAll("button");
        buttons.forEach(button => {
            button.style.backgroundColor = "#00FF00";
            button.style.border = "none";
            button.style.color = "#31304D";
            button.style.borderRadius = "5px"; 
            button.style.padding = "5px 10px";
        });
    };

    setTimeout(styleButtons, 100);
});

document.addEventListener("DOMContentLoaded", function () {
    const audioPlayers = document.querySelectorAll('audio');
    let currentAudioIndex = 0;

    audioPlayers.forEach((audio, index) => {
        audio.addEventListener('ended', () => {
            currentAudioIndex = (index + 1) % audioPlayers.length; 
            const nextAudio = audioPlayers[currentAudioIndex];
            nextAudio.play(); 
        });
    });

    audioPlayers.forEach((player) => {
        player.addEventListener('play', function () {
            audioPlayers.forEach((audio) => {
                if (audio !== player) {
                    audio.pause();
                    audio.currentTime = 0;
                }
            });
        });
    });
});

if (currentAudioIndex < audioPlayers.length) {
    const nextAudio = audioPlayers[currentAudioIndex];
    nextAudio.play();
}

function toggleMenu() {
    const menu = document.querySelector(".menu-items");
    menu.classList.toggle("open");
  }
  

  function searchFunction() {
    let searchValue = document.getElementById("searchInput").value.toLowerCase();

    let content = document.getElementById("content");
    if (!content) {
        console.error("id='content' öğesi bulunamadı.");
        return;
    }

    let elements = content.querySelectorAll("*"); 

    for (let element of elements) {
        element.innerHTML = element.innerHTML.replace(/<span class="highlight">|<\/span>/g, '');
    }

    let found = false;
    for (let element of elements) {
        let text = element.innerHTML.toLowerCase();
        if (text.includes(searchValue)) {
            let highlightedText = element.innerHTML.replace(new RegExp(searchValue, 'gi'), (match) => {
                return `<span class="highlight">${match}</span>`;
            });
            element.innerHTML = highlightedText;

            if (!found) {
                element.querySelector(".highlight").scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
                found = true;
            }
        }
    }

    if (!found) {
        alert("Aranan kelime bulunamadı.");
    }
}