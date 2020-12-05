import { Router } from 'express';

import {changeEmail, changeMetadata, changePass, getBloggers} from '../controllers/auth0.controller';
import { checkJwt } from '../middlewares/jwt.middleware';
import { checkMetadata, checkNewEmail, checkNewPass } from '../middlewares/validation.middleware';

const router: Router = Router()

router.patch('/user', checkJwt, checkMetadata, changeMetadata);
router.patch('/user/email', checkJwt, checkNewEmail, changeEmail);
router.post('/user/password', checkJwt, checkNewPass, changePass);
router.get('/bloggers', checkJwt, getBloggers);

export default router;
