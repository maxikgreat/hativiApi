import { Router } from 'express';

import { getUser } from '../controllers/auth0.controller';
// import { checkToken } from './../middlewares/token.middleware';

const router: Router = Router()

router.get('/users', getUser);

export default router;
