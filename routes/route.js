const users = require("../controllers/user-controller")
const multer  = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads")
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage })

module.exports = (router) => {
    router.post("/admin/add-users", upload.single('file'), users.addUsers);
    router.post("/admin/send-email", users.sendEmail);
    router.post("/admin/unsubscribe-user", users.unsubscribeUser);
    router.get("/admin", users.checksite);
}