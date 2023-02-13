import express from 'express';
import path from 'path';
import swaggerUi from 'swagger-ui-express';
import yaml from 'yamljs';

const swaggerFile = yaml.load(path.resolve(__dirname, './swagger.yaml'));
import { routes } from '@src/routes';

const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(routes);

export { app };
