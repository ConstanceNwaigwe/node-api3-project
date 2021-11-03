const { param } = require("../server");

function logger(req, res, next) {
  // DO YOUR MAGIC
  console.log(req.method, req.url);
  next();
}

function validateUserId(req, res, next) {
  // DO YOUR MAGIC
  const id = param.id;
  if(req.id == id){
    res.send(req.user);
  } else{
    res.status(404).json({ message: "missing required name field" });
  }
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
  if(!req.name || !req.name == ""){
    res.status(400).json({ message: "missing required name field" });
    next();
  } else{
    console.log('File sent successfully');
  }
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
  if(!req.text || !req.text == ""){
    res.status(400).json({ message: "missing required text field" });
    next();
  } else{
    console.log('File sent successfully');
  }
}

// do not forget to expose these functions to other modules
