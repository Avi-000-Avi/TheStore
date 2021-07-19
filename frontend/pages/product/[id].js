import SingleProduct from '../../components/SingleProduct';
import { useRouter, withRouter } from "next/router";



export default function SingleProductPage({ query }) {
   const {
      query: { id },
    } = useRouter();

  return <SingleProduct id={id} />;
}