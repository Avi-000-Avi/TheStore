import { useRouter } from "next/router";
import UpdateProduct from "../components/UpdateProduct";

export default function UpdatePage({query}){
    console.log(query);
    const {
        query: { id },
      } = useRouter();
      
    return ( 
      <div>
          <UpdateProduct id ={id}/>
      </div>
        );
 }