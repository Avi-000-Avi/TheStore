import { jsxNamespacedName } from '@babel/types';
import useForm from '../lib/useForm';
import Form from './styles/Form'; 

const CREATE_PRODUCT_MUTATIONS =   gql`
mutation REATE_PRODUCT_MUTATIONS(
    $name: String!
    $description:String!
    $price:Int!
    $image:Upload
){
  createProduct(data:{
    name:$name,
    description:$description,
    price:$price,
    status:"AVAILABLE"
  }) {
    id
    price
    description
  }
}
`;


export default function CreateProduct(){
    const {inputs,handleChange,clearForm,resetForm} =  useForm({
          image:'',
          name:'Nice shorts',
          price:4578,
          description:'Comfy ',
    });

    return (
        <Form onSubmit={(e) => {
            e.preventDefault();
            console.log(inputs);
            }}> 
        <fieldset aria-aria-busy>  
        <label htmlFor="image">Image
        <input required type="file" id="image" name="image" onChange={handleChange}/>
        </label>
        <label htmlFor="name">Name 
        <input type="text" id="name" name="name" placeholder="name" value ={inputs.name} onChange={handleChange}/>
        </label>
        <label htmlFor="price">Price
        <input type="number" id="price" name="price" placeholder="price" value ={inputs.price} onChange={handleChange}/>
        </label>
        <label htmlFor="description">Description
        <textarea type="text" id="description" name="description" placeholder="description" value ={inputs.description} onChange={handleChange}/>
        </label>

        {/*<button type="button" onClick={clearForm}>Clear Form</button>
        <button type="submit" onClick={resetForm}>Reset Form</button>
        */}
        <button type="submit" onClick={resetForm}> + Add Product</button>
        </fieldset>
        </Form>
    )
} 