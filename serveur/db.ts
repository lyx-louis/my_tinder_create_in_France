// @ts-ignore
import mongoose, {Document, Model, model, Schema} from "mongoose";
import GestionLogin from "./gestionLogin"
import {Response} from "express"

export interface User extends Document {
    mail: string,
    prenom: string,
    MDP: {
        motDePasse: string,
        key: string,
    },
    description: string,
    image: Array<string>,
    position: {
        longitude: number,
        latitude: number,
    },
    sexe: string,
    interet: string,
    like: Array<object>,
    match: Array<object>,
    age: number,
    orientation: Array<string>,
    passion: Array<string>,
}

export interface Chatroom extends Document {
    firstUser: string,
    secondUser: string,
    messages: Array<object>,
}

const loginGestion: GestionLogin = new GestionLogin();

export class DatabaseAccess {

    private urlmongo = `mongodb+srv://Damien:EZi1eNGarEvEnzVo@test.bnuu4.mongodb.net/Tindeirb?retryWrites=true&w=majority`;

    private UserSchema: Schema = new Schema(
        {
            mail: {type: String, required: true},
            prenom: {type: String, required: false},
            MDP: {
                motDePasse: {type: String, required: true},
                key: {type: String, required: true},
            },
            description: {type: String, required: false},
            image: {type: Array, required: false},
            position: {
                longitude: {type: Number, required: false},
                latitude: {type: Number, required: false},
            },
            sexe: {type: String, required: false},
            interet: {type: String, required: false},
            like: {type: Array, required: false},
            match: {type:Array, required: false},
            age: {type: Number, required: false},
            orientation:[{type:String,required:false},],
            passion:[{type:String,required:false},],
        },
    );

    private userModel: Model<User> = model<User>('User', this.UserSchema);

    private chatroomSchema: Schema = new Schema(
        {
            firstUser: {type: String, required: false},
            secondUser: {type: String, required: false},
            messages: {type: Array, required: false},

        },
    );

    //private chatroomModel: Model<Chatroom> = model<User>('User', this.chatroomSchema);

    async verifUser(userRecu: any, res: Response): Promise<any> {
        const user: User | null = await this.searchUserByMail(userRecu);
        if (user === null) {
            res.sendStatus(220);
        } else {
            const sel = {
                sel: user.MDP.key,
            };
            res.status(410).json(sel);
        }
    };

    async FindUserByMail(userRecu: User, res: Response) {
        const user: User | null = await this.searchUserByMail(userRecu.mail);
        if (user === null) {
            res.redirect("/login")
        } else {
            const path = user.image;
            const i = path.length;
            const name = user.prenom;
            const mdp = user.MDP;
            res.render("prof", {Paths: path, NumberOfPhoto: i, MyName: name}) // etc...
        }
    };

    openDb() {
        mongoose.connect(this.urlmongo);
        const db: mongoose.Connection = mongoose.connection;
        db.on('error', console.error.bind(console, 'Erreur lors de la connexion'));
        db.once('open', () => {
            console.log("Connexion à la base de donnée réussi");
        });
    };

    async addUser(user: { mail: string; motDePasse: string; sel: string; position:{longitude:number,latitude:number}}): Promise<any> {
        const userData: User = new this.userModel({
            mail: user.mail,
            MDP: {
                motDePasse: user.motDePasse,
                key: user.sel,
            },
            position: user.position,
        });
        await userData.save();
    };

    async addImage(path: string|undefined, userRecu: User, res:Response): Promise<any> {
       const user = await this.searchUserByMail(userRecu);
        if(user === null){
           console.log('no this user');

            res.redirect('/login');
        } else {
            console.log(user.mail);
            console.log(user);
            console.log(path);
            if (user.image == undefined) {
                user.image = [];
                user.image.push(path);
            } else {
                user.image.push(path);
            }

            console.log(user.image);
            await user.save();
        }
    };

    // async addImage(path: string|undefined, email:any,res: Response): Promise<any> {
    //     // const user: User | null = await this.searchMail(email);
    //     const user = await this.searchMail(email);
    //      if(user === null){
    //         console.log('no this user');
    //          res.redirect('/login');
    //      }
    //      else{

    //          if (user.image == undefined){
    //              user.image = [];
    //              user.image.push(path);
    //          }else{
    //              user.image.push(path);
    //          }
 
    //          console.log(user.image);
    //          await user.save();
    //      }
    //      //userRecu.update({mail:userRecu.email},image.post())
 
 
 
    //  }


    async searchUserByMail(userRecu: any): Promise<any> {
        return this.userModel.findOne({'mail': userRecu.mail}, '');
    };

    async recupUserByMail(userRecu: any): Promise<any> {
        return this.userModel.findOne({'mail': userRecu.mail}, '-MDP');
    }


    connexionUser(userRecu: any, res: Response) {
        this.userModel.findOne({'mail': userRecu.mail, 'MDP.motDePasse': userRecu.motDePasse}, ''
            , (err: any, user: any) => {
                if(user !== null){
                    this.addPosition(user, userRecu);
                }
                loginGestion.loginValide(user, res);
            });
    };

    recupUsersCards(user:any): Promise<Array<User>> {
        return this.userModel.find({'sexe':user.interet,'mail':{$ne: user.mail}}, 'mail image prenom description age').exec();
    };

    addPosition(user: any, userRecu: any) {
            user.position = userRecu.position;
            user.save();
    };

    addLike(user:any,userLike:any) {
        user.like.push(userLike._id);
        user.save();
    }

    async verifMatch(user: any, userLike: any) {
        const userLiker = await this.userModel.findOne({"_id": userLike._id}).exec();
        if (userLiker) {
            if (userLiker.like.indexOf(user._id) != -1) {
                await this.userModel.updateOne({'_id': userLiker._id}, {$push: {match: user._id}}).exec();
                await this.userModel.updateOne({'mail': user.mail}, {$push: {match: userLike._id}}).exec();
            }
        }
    }
}