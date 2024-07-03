const express = require('express');
const path = require('path');
const app = express();

// Define o caminho para o vídeo
app.use('/videos', express.static(path.join(__dirname, 'videos')));

app.get('/', (req, res) => {
  res.send('Servidor de vídeo está funcionando. Acesse /videos/nome_do_seu_video.mp4');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});


