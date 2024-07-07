const { body, validationResult } = require('express-validator');

const validateUserRegister = [
    body('firstname').notEmpty().withMessage('you need a firstname  to register').withMessage('Please enter a valid email'),
    body('lastname').withMessage('you need a lastname to register'),
    body('username').notEmpty().withMessage('you need an email adress to register').isEmail().withMessage('Please enter a valid email'),
    body('password').isLength({min:4}).withMessage('please enter a password with at least 6 caracters'),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    }
  ];

  const validateUserLogin =[
    body('username').notEmpty().withMessage('you should provide a username'),
    body('password').notEmpty().withMessage('you should provide a password'),
    (req,res,next)=>{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({errors : errors.array()})
        }
        next();
    }
  ]

  module.exports ={validateUserRegister,validateUserLogin}
  