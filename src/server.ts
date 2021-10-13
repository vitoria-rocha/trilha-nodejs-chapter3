import express from 'express';
import { createCourse } from './routes';

const app = express();

app.get("/", createCourse);

app.listen(8080, () => console.log("server is running: http://localhost:8080"));
