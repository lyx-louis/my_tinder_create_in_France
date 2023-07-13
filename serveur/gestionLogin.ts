import {Response} from "express"
import {sign,verify} from "jsonwebtoken";

class GestionLogin {

    private jwtKey: string = "gjRJVGJIJZ54548468rhdetg'gezgijge:;;khojirzirjgrpogfazapogjp45454";

    loginValide(user:{mail:string;motDePasse:string}, res: Response) {
        if (user !== null) {
            const jwt: string = this.creationJWT(user);
            const data = {token: jwt};
            res.status(210).json(data);
        }
        else {
            res.sendStatus(500);
        }
    };

    creationJWT(user:{mail:string; motDePasse:string}):string{
        const mail:string = user.mail
        const jwtExpirySeconds:number = 3600;
        return sign({mail: mail}, this.jwtKey, {
            algorithm: "HS512",
            expiresIn: jwtExpirySeconds,
        });
    }

    verifJWT(token:string, res:Response):any|number{
        let decoder = null;
        try{
            decoder = verify(token,this.jwtKey);
        }
        catch (err){
            res.sendStatus(404);
            return null;
        }
        return decoder;
    }
}

export default GestionLogin;