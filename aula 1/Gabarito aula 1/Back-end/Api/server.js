import app from "./app.js"; // Isso importa o app com os endpoints baseados nos mocks

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor está rodando em http://localhost:${PORT}`);
});