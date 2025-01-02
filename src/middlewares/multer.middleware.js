import multer from "multer";

const storage = multer.diskStorage({
    //cb=callback
    destination: function (req, file, cb) {
        cb(null, "./public/temp");
        // cb(null, path.join(__dirname, "..", "public", "temp"));
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

export const upload = multer({ storage });
