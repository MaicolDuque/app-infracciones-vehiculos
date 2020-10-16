const app = require('./src/app');
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server runnig: http://localhost:${PORT}`)
})