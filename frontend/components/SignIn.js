import Form from './styles/Form';
import useForm from '../lib/useForm';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';
import Error from './ErrorMessage' ; 


const SIGNIN_MUTATION = gql`
    mutation SIGNIN_MUTATION($email:String!, $password:String!){
        authenticateUserWithPassword(email: $email, password:$password)
        {
            ... on UserAuthenticationWithPasswordSuccess {
            item { 
                id
                email
                name
                }
            }
            ... on UserAuthenticationWithPasswordFailure {
                code
                message
            }
        }
    }
`;

export default function  SignIn(){
    const {inputs, handleChange , resetForm} = useForm({
        email:'',
        password:''
    })
    const [signin, {data, loading}] = useMutation(SIGNIN_MUTATION,{
            variables: inputs,
            //Refetch the current logged in user
            //Using this the navigation changed instantly
            refetchQueries:[{query:CURRENT_USER_QUERY}]
        });  


    async function handleSubmit(e){
         e.preventDefault(); //Stop the form from submitting
         const res = await signin();
         console.log(res);
         resetForm();
         //Send the email and password to the graphQL API
    }
    const error = data?.authenticateUserWithPassword.__typename == 
    'UserAuthenticationWithPasswordFailure'
    ? data?.authenticateUserWithPassword
    :undefined;
    //error = response  which is data?.authenticateUserWithPassword but only when __typename == 'UserAuthenticationWithPasswordFailure' then we return 
    //data?.authenticateUserWithPassword which is the error

    //The password is submitted over the network to your server in clear text but then what happens is the server hashes it compares it to what it has in file for its own hash
    //COncern - We are sending our password in clear text  and 
    // ANd than that's why we use HTTPS    

    // WHat HTTPS does is makes the packets encrypted
    //Client 
    //--
    //packets go through 
    //your   wifi router isp  or government
    //--
    //Server


    //method POST also does't let the url have the input after submit of the input
    return (<Form onSubmit={handleSubmit}> 
        <h2>Sign Into Your Account</h2>
        <Error error={data?.authenticateUserWithPassword}/>
        <fieldset>
        <label htmlFor="email">Email
        <input type="email" name="email" placeholder="Your Email Addrress" autoComplete="email" value={inputs.email} onChange={handleChange}></input>
        </label>
        <label htmlFor="password">Password
        <input type="password" name="password" placeholder="Password" autoComplete="password" value={inputs.password} onChange={handleChange}></input>
        </label>
        <button type="submit">Sign In!</button>
        </fieldset>
    </Form>)
    }