import RequestReset from '../components/RequestReset';
import Reset from '../components/Reset';
import { useRouter, withRouter } from "next/router";


export default function ResetPage({ query }) {
  const {
    query: { token },
  } = useRouter();


  if (!token) {
    return (
      <div>
        <p>Sorry you must supply a token</p>
        <RequestReset />
      </div>
    );
  }
  return (
    <div>
      <p>RESET YOUR PASSWORD</p>
      <Reset token={token} />
    </div>
  );
}