//At it's simplest, the access control returns a yes or no value depending on the users session

import { permissionsList } from "./schemas/fields";
import { ListAccessArgs } from "./types";

// This function also has access to context such as addToCart
export function isSignedIn({session}:ListAccessArgs){
    return !!session;
}

const generatedPermissions = Object.fromEntries(permissionsList.map(
    permission => [
        permission,
        function({session} : ListAccessArgs){
            return !!session?.data.role?.[permission]
        }
    ]
)); 


//[[],[],[],[],[]  ]

//Permission check if someone meets a criteria - yes or no
export const permission = {
    ...generatedPermissions,

    isAwesome({session}:ListAccessArgs){
        return session?.data.name.includes.name.includes('Avinash');
    },
};