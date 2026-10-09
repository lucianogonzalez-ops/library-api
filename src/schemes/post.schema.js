const Joi = require('joi');
const createPostSchema = Joi.object({
title: Joi.string().trim().min(3).max(100).required(),
description: Joi.string().trim().max(500).allow(''),
author: Joi.string().trim().email().required().messages({ // NUEVO CAMPO
'string.empty': "El campo 'author' no puede estar vacío.",
'string.email': "El campo 'author' debe contener un correo electrónico válido.",
'any.required': "El campo 'author' es obligatorio."
})
});
module.exports = { createPostSchema };