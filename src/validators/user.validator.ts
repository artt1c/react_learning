import Joi from "joi";

export const userValidator = Joi.object({
  username: Joi.string()
    .required()
    .pattern(/\w{3,7}/)
    .messages({
      "sting.pattern.base": "pattern is failed",
      'any.required': 'field is required',
      'string.empty': `username cannot be an empty field`,
    }),
  password: Joi.string().min(3).max(6).messages({
    'string.min': `password too short`,
    'string.max': `password too long`,
  }),
  age: Joi.number().min(1).max(120).messages({
    'number.min': `too yong`,
    'number.max': `too old`,
  }),
});