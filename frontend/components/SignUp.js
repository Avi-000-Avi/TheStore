import Form from './styles/Form';
import useForm from '../lib/useForm';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import Error from './ErrorMessage' ; 

const SIGNUP_MUTATION = gql`
    mutation SIGNUP_MUTATION($name:String!,$email:String!, $password:String!){
        createUser(data: {
            email:$email,
            name:$name,
            password:$password,
        }){
            id
            email
            name
        }
    }
`;

export default function  SignUp(){
    const {inputs, handleChange , resetForm} = useForm({
        email:'',
        name:'',
        password:''
    })
    const [signup, {data, loading,error}] = useMutation(SIGNUP_MUTATION,{
            variables: inputs,
            //Refetch the current logged in user
            //Using this the navigation changed instantly
            //refetchQueries:[{query:CURRENT_USER_QUERY}]
        });  


    async function handleSubmit(e){
         e.preventDefault(); //Stop the form from submitting
         const res = await signup().catch(console.error);
         console.log(res);
         resetForm();
         //Send the email and password to the graphQL API
    }
   

    //method POST also does't let the url have the input after submit of the input
    return (<Form method="POST" onSubmit={handleSubmit}> 
       
        <Error error={error}/>
        <fieldset>
        <h2>Sign Up  For an Account</h2>
        {data?.createUser && <p>
            Signed Up with {data.createUser.email} - Please go ahead and Sign in!
            </p>}
        <label htmlFor="name">Your Name
        <input type="text" name="name" placeholder="Your Name"  autoComplete="name" value={inputs.name} onChange={handleChange}></input>
        </label>
        <label htmlFor="email">Email
        <input type="email" name="email" placeholder="Your Email Addrress" autoComplete="email" value={inputs.email} onChange={handleChange}></input>
        </label>
        <label htmlFor="password">Password
        <input type="password" name="password" placeholder="Password" autoComplete="password" value={inputs.password} onChange={handleChange}></input>
        </label>
        <button type="submit">Sign Up!</button>
        </fieldset>
    </Form>)
    }