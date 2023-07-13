// @ts-ignore
import express, {Express, Request, Response} from 'express'
import {DatabaseAccess, User} from './db';
// @ts-ignore
import multer from 'multer';

import GestionLogin from "./gestionLogin";
import GestionImage from "./GestionImage";

const app: Express = express();
app.use(express.json());

const port: number = 3000;
const loginGestion = new GestionLogin();
const gestionImage = new GestionImage();
const db = new DatabaseAccess();

db.openDb();

app.post("/account/newUser", async (req: Request, res: Response) => {
    await db.addUser(req.body);
    const jwt: string = loginGestion.creationJWT(req.body);
    const data = {token: jwt};
    res.status(250).json(data);
})

app.post("/account/login", async (req: Request, res: Response) => {
    if (req.body.token !== undefined) {
        const decoder = loginGestion.verifJWT(req.body.token,res);
        if(decoder){
            const user = await db.searchUserByMail(decoder);
            db.addPosition(user,req.body)
            res.sendStatus(230);
        }
    } else {
        if (req.body.motDePasse === undefined) {
            await db.verifUser(req.body, res);
        } else {
            db.connexionUser(req.body, res);
        }
    }
});

app.post("/user/recupUsersCards", async (req: Request, res: Response) => {
    const dataJWT = loginGestion.verifJWT(req.body.token,res);
    if(dataJWT){
        const user = await db.recupUserByMail(dataJWT);
        const userList = await db.recupUsersCards(user);
        const data = JSON.stringify(userList);
        res.status(200).json(data);
    }
})

app.post("/user/addLike",async (req: Request, res: Response) => {
    const dataJWT = loginGestion.verifJWT(req.body.token,res);
    if(dataJWT){
        const user = await db.recupUserByMail(dataJWT);
        db.addLike(user,req.body.userLike);
        await db.verifMatch(user, req.body.userLike);
        res.sendStatus(200);
    }
})

app.post("/user/addPrenom",async(req:Request,res:Response) => {
    const dataJWT = loginGestion.verifJWT(req.body.token,res);
    if(dataJWT){
        const user = await db.recupUserByMail(dataJWT);
        user.prenom = req.body.prenom;
        await user.save();
        res.sendStatus(200);
    }
})

app.post("/user/addAge",async(req: Request, res:Response) => {
    const dataJWT = loginGestion.verifJWT(req.body.token,res);
    if(dataJWT){
        const user = await db.recupUserByMail(dataJWT);
        user.age = req.body.age;
        await user.save();
        res.sendStatus(200);
    }
})

app.post("/user/addSexe",async(req: Request, res:Response) => {
    const dataJWT = loginGestion.verifJWT(req.body.token,res);
    if(dataJWT){
        const user = await db.recupUserByMail(dataJWT);
        user.sexe = req.body.sexe;
        await user.save();
        res.sendStatus(200);
    }
})

app.post("/user/addOrientation",async(req: Request, res:Response) => {
    const dataJWT = loginGestion.verifJWT(req.body.token,res);
    if(dataJWT){
        const user = await db.recupUserByMail(dataJWT);
        user.orientation = req.body.orientation;
        await user.save();
        res.sendStatus(200);
    }
})

app.post("/user/addGenre",async(req: Request, res:Response) => {
    const dataJWT = loginGestion.verifJWT(req.body.token,res);
    if(dataJWT){
        const user = await db.recupUserByMail(dataJWT);
        user.interet = req.body.genre;
        await user.save();
        res.sendStatus(200);
    }
})

app.post("/user/addPassion",async(req: Request, res:Response) => {
    const dataJWT = loginGestion.verifJWT(req.body.token,res);
    if(dataJWT){
        const user = await db.recupUserByMail(dataJWT);
        user.passion = req.body.passion;
        await user.save();
        res.sendStatus(200);
    }
})

app.post("/user/addImage",async(req: Request, res:Response) => {
    const dataJWT = loginGestion.verifJWT(req.body.token,res);
    if(dataJWT){
        const user = await db.recupUserByMail(dataJWT);
        user.image = req.body.image;
        await user.save();
        res.sendStatus(200);
    }
})


app.post("/user/recupUser", async (req: Request, res: Response) => {
    const dataJWT = loginGestion.verifJWT(req.body.token,res);
    if(dataJWT){
        const user = await db.recupUserByMail(dataJWT);
        const data = JSON.stringify(user);
        res.status(200).json(data);
    }
})

app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});
