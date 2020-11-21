import { Router } from 'express';

import { checkUser } from '../controllers/insta.controller';
import { checkJwt } from '../middlewares/jwt.middleware';

const router: Router = Router();

router.post('/check', checkJwt, checkUser);

export default router;