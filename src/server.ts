import express from 'express';
import { categoriesRoutes } from './routes/categories.routes';
import { specificationsRoutes } from './routes/specification.router';

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationsRoutes);

app.listen(8080, () => console.log("server is running: http://localhost:8080"));
