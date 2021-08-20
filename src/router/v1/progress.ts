// import express and use router method
const routerProgress = require("express").Router();
import progressController from '../../controllers/Progress'
import middleware from '../../middlewares/Auth'
// router setup
routerProgress.get("/", progressController.read);
routerProgress.post("/", progressController.create);
routerProgress.put("/", progressController.update);
routerProgress.delete("/", middleware.authCheck, progressController.delete)
// export router object
module.exports = routerProgress;