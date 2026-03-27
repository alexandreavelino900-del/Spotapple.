// Simulação de banco de dados de músicas
const playlist = [
    {
        title: "Sinfonia Digital",
        fileFree: "music1_96k.aac",
        filePremium: "music1_24bit_96khz.flac"
    }
];

let isPremium = false;
let currentTrackIndex = 0;

function updatePlayer() {
    const track = playlist[currentTrackIndex];
    const qualityText = document.getElementById('quality-display');
    const titleText = document.getElementById('track-title');

    titleText.innerText = track.title;

    if (isPremium) {
        qualityText.innerText = "Qualidade: FLAC 24-bit / 96kHz (Lossless)";
        console.log("Carregando arquivo: " + track.filePremium);
    } else {
        qualityText.innerText = "Qualidade: AAC 96kbps (Limitada)";
        console.log("Carregando arquivo: " + track.fileFree);
    }
}

function setPlan(plan) {
    isPremium = (plan === 'premium');
    alert("Plano alterado para: " + plan.toUpperCase());
    updatePlayer();
}

// Iniciar o player
updatePlayer();
