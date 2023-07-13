// @ts-ignore
import multer from "multer";
import {Request, Response} from "express";
import {DatabaseAccess} from "./db";
const path = require('path');

class GestionImage{
    private storage = multer.diskStorage({destination: function (req, file, cb) {
        cb(null, './uploads/img')},
        filename: function (req, file, cb) {
            const extname = path.extname(file.originalname)
            cb(null, file.fieldname + '-' + Date.now()+ '-' + Math.round(Math.random()*1e9) + extname)
        }
    });

    // private upload = multer({storage: this.storage});
    
    chargementImage(){
        const upload = multer({ storage: this.storage, fileFilter: function(req, file, cb){
            if(file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg'
                || file.mimetype == 'image/gif' ){
                cb(null, true)
            }
            else {
                cb(null, false)
            }}});
            return upload;
    };

    async chargementImageBDD(req: Request,res: Response,db:DatabaseAccess) {
        const files = req.file;
        let fpath = req?.file?.path;
        console.log(req.file);

        const {mail} = req.body;

        if (!files) {
            console.log("failed! no file input");
        } else {
            fpath = fpath?.split('\\').join('/')
            await db.addImage(fpath, {mail}.mail, res);
            res.send("reussi a upload");
        }
    }
}

export default GestionImage;