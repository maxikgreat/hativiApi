import { categories } from './../types/insta';
import { Request, Response, NextFunction } from 'express';
import * as yup from 'yup';

import { MetadataBody } from '../controllers/auth0.controller';

export const checkMetadata = (req: Request, res: Response, next: NextFunction) => {
  const validationSchema = yup.object<MetadataBody>().shape({
    userId: yup.string().required(),
    user: yup.object().required(),
    category: yup.string().oneOf(categories),
    price: yup.object().shape({
      story: yup.number().required(),
      post: yup.number().required()
    }),
    desc: yup.string().required(),
    contactEmail: yup.string().required(),
    messengers: yup.object().shape({
      whatsApp: yup.string().required(),
      facebook: yup.string().required(),
    })
  });

  validationSchema.validate(req.body)
    .then(() => next())
    .catch(() => res.status(400).json({ 
      message: 'Incorrect body request',
    }))
}