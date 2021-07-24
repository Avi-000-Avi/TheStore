import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';
 
//no need to name the mutation as it has no arguments
//endSession is the mutation in the keystone backend
const SIGN_OUT_MUTATION = gql`
    mutation {
        endSession
    }
`;

export default function  SignOut(){
    const [signout] = useMutation(SIGN_OUT_MUTATION,{
        refetchQueries:[{query:CURRENT_USER_QUERY}],
    });

    return <button type="button" onClick={signout}>Sign Out</button>
    }
