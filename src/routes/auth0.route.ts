import { Router } from 'express';

import { changeMetadata } from '../controllers/auth0.controller';
import { checkJwt } from '../middlewares/jwt.middleware';
import { checkMetadata} from '../middlewares/metadata.middleware';

const router: Router = Router()

router.patch('/user', checkJwt, checkMetadata, changeMetadata);

export default router;
