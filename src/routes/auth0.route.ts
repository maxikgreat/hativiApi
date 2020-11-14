import { Router } from 'express';

import { changeMetadata } from '../controllers/auth0.controller';

const router: Router = Router()

router.patch('/user', changeMetadata);

export default router;
