import 'dotenv/config';
import {createAuth} from '@keystone-next/auth';
import { config, createSchema } from '@keystone-next/keystone/schema';
import { withItemData,statelessSessions } from '@keystone-next/keystone/session';
import {User} from './schemas/User';
import {Product} from './schemas/Products';
import {ProductImage} from './schemas/ProductImage';
import { insertSeedData } from './seed-data';
import { sendPasswordResetEmail } from './lib/mail';



const databaseURL = process.env.DATABASE_URL || 'mongodb://localhost/keystone-thestore';


const {withAuth} =createAuth({
   listKey:'User',
   identityField:'email',
   secretField:'password',
   initFirstItem:{
       fields:['name','email','password'],
       //TODO: Add in initial roles here
   }, 
   passwordResetLink:{
       async sendToken(args){
           //Send the email
           await sendPasswordResetEmail(args.token,args.identity);
       }
   }
});

//Sessions Configs
//We are going to be logging in to the keystone backend so inorder to do that in order to 
//Authenticate the users on the frontend

//HOw long does the user stays logged in
const sessionConfig ={ 
    maxAge: 60* 60 * 24 * 360,
    secret: process.env.COOKIE_SECRET,
};

 export default withAuth(
     config({
         //@ts-ignore
    server:{
        cors:{
            origin:[process.env.FRONTEND_URL],
            credentials:true,
        },
    },
    db:{
        adapter:'mongoose',
        url: databaseURL,
        async onConnect(keystone){
            console.log("Connected to Database!");
            if(process.argv.includes('--seed-data'))//Run the insertSeedData function only if this argument is provided
            {
                await insertSeedData(keystone);
            }
        }, 
    },
    lists: createSchema({
        //Schema items go in here
        User,
        Product,
        ProductImage,
    }),
    ui: {
        // Show the UI only for poeple who pass this test
        isAccessAllowed: ({ session }) =>
          // console.log(session);
          !!session?.data,
      },
    //TODO: Add session values here
    session: withItemData(statelessSessions(sessionConfig), {
        // GraphQL Query
        User: 'id name email',
      }),
    })
 );


