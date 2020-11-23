import { Request, Response, NextFunction } from 'express';
import * as yup from 'yup';

import { MetadataBody } from '../controllers/auth0.controller';

const checkMetadata = (req: Request, res: Response, next: NextFunction) => {
  const validationSchema = yup.object<MetadataBody>().shape({
    userId: yup.string().required(),
    metadata: yup.object().required(),
  });

  validationSchema.validate(req.body)
    .then(() => next())
    .catch(() => res.status(400).json({ 
        message: 'Incorrect body request',
    }))
}

const checkNewEmail = (req: Request, res: Response, next: NextFunction) => {
  const validationSchema = yup.object<MetadataBody>().shape({
    userId: yup.string().required(),
    newEmail: yup.string().required(),
  });

  validationSchema.validate(req.body)
    .then(() => next())
    .catch(() => res.status(400).json({ 
        message: 'Incorrect body request',
    }))
}

const checkNewPass = (req: Request, res: Response, next: NextFunction) => {
  const validationSchema = yup.object<MetadataBody>().shape({
    userId: yup.string().required(),
  });

  validationSchema.validate(req.body)
    .then(() => next())
    .catch(() => res.status(400).json({ 
        message: 'Incorrect body request',
    }))
}

export { checkMetadata, checkNewEmail, checkNewPass };