import { useRouter } from "next/router";
import Pagination from "../../components/Pagination";
import Products from "../../components/Products";

export default function productPage(){
    const {query } = useRouter();
    const page = parseInt(query.page);

    return (
        <div>
            <Pagination page={page || 1}/> 
        <Products/>
        <Pagination page={page || 1}/>
        </div>
    );
    //Here query.page || 1 means if we are on the homepage or the products page and the  query is not passed that means page 1
}