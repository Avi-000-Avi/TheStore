import NProgress from 'nprogress';
import Router from 'next/router';
import Page from '../components/Page';
import '../components/styles/nprogress.css';
import { ApolloProvider } from '@apollo/client';
import withData from '../lib/withData';
import { CartStateProvider } from '../lib/cartState';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps, apollo }) {
  console.log(apollo);

  return (
    <ApolloProvider client={apollo}>
      <CartStateProvider> 
    <Page>
      <Component {...pageProps} />
    </Page>
    </CartStateProvider>
    </ApolloProvider> 
  );
}

//Tell NextJs that it needs to go and fetch all of the queries from all the children components\
//If any of the pages have getIntitialProps  then wait and go and fetch it
MyApp.getInititalProps = async function({Component, ctx}){
  let pageProps = {};
  if(Component.getInititalProps){
    pageProps = await Component.getInititalProps(ctx); 
  }

  pageProps.query = ctx.query;
  return {pageProps};
}

export default withData(MyApp);