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
// Adicione estas funções ao seu script.js

function changeTheme(themeName) {
    // Se o tema não for o padrão e o usuário NÃO for premium
    if (themeName !== 'default' && !isPremium) {
        alert("❌ Este tema é exclusivo para assinantes Premium!");
        return;
    }

    // Remove temas anteriores
    document.body.classList.remove('theme-gold', 'theme-cyber');

    // Aplica o novo tema (se não for o default)
    if (themeName !== 'default') {
        document.body.classList.add('theme-' + themeName);
    }
    
    console.log("Tema aplicado: " + themeName);
}
