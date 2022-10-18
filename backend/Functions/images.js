const multer = require("multer");

// Create required functions to store images proprely
const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, './uploads/')
  },
  filename: function(req, file, cb){
    cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
  }
})
const fileFilter = (req, file, cb) => {
  if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg'){
    cb(null, true);
  }else{
    cb(new Error("Wrong uploaded file only (jpeg, png, and jpg) are allowed"), false)
  }
}

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

module.exports = upload;