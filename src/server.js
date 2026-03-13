import express from 'express';
import eventsRouter from './routes/events.route.js';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/api/v1/events', eventsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});