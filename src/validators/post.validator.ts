import Joi from "joi";

export const postValidator = Joi.object({
  title: Joi.string().required().min(5).messages({
    'string.empty': `title cannot be an empty field`,
    'string.min': `title too short`,
  }),
  body: Joi.string().required().messages({
    'string.empty': `body cannot be an empty field`,
  }),
  userId: Joi.number().required().min(1).max(10).messages({
    'any.empty': `user ID cannot be an empty field`,
    'number.min': `user ID cannot be less 1`,
    'number.max': `user ID too big`,
  }),
});