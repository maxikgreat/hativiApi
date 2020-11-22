import { Router } from 'express';

import { changeEmail, changeMetadata } from '../controllers/auth0.controller';
import { checkJwt } from '../middlewares/jwt.middleware';
import { checkMetadata} from '../middlewares/validation.middleware';

const router: Router = Router()

router.patch('/user', checkJwt, checkMetadata, changeMetadata);
router.patch('/user/email', checkJwt, changeEmail);

export default router;
