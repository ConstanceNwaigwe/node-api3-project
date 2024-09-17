const { param } = require("../server");
const Users = require('../users/users-model')

function logger(req, res, next) {
  // DO YOUR MAGIC
  console.log(new Date().toLocaleString,req.method, req.originalUrl);
  next();
}

function validateUserId(req, res, next) {
  // DO YOUR MAGIC
  try {
    const user = await Users.getById(req.param.id);
    if(!user){
      res.status(404).json({
        message: "not found"
      })
    } else{
      req.user = user;
    }
  }
  catch (err){
    res.status(500).json({
      message: "500 error"
    })
  }
  if(!req.name || !req.name == ""){
    res.status(400).json({ message: "missing required name field" });
    next();
  } else{
    console.log('File sent successfully');
  }
}

async function validateUser(req, res, next) {
  // DO YOUR MAGIC
  const { name } = req.body;
  if(!name){
    res.status(400).json({
      message: "user not found"
    })
  } else{
    req.name = name.trim();
    next();
  }
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
  const { text } = req.body;
  if(!text){
    res.status(400).json({
      message: "user not found"
    })
  } else{
    req.text = text.trim();
    next()
  }
}

// do not forget to expose these functions to other modules
module.exports = { logger, validateUserId, validateUser, validatePost };
