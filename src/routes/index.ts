import express from "express";
import transactions from "../controllers/transactionsController";
import swagger from 'swagger-ui-express';
import Yaml from 'yamljs';
const swaggerDocument = Yaml.load('ms-transactions.yaml')
const Routes = express.Router()

const controller = transactions()



Routes.use('/api-docs', swagger.serve);
Routes.get('/api-docs', swagger.setup(swaggerDocument));
Routes.get('/balance', controller.getBalance)

export default Routes