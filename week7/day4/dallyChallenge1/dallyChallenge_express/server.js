import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;
app.use(cors());

app.get('/api/hello', (req, res) => {
  
  res.json({ message: 'Hello from express' });

});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});