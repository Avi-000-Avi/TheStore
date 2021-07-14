import NProgress from 'nprogress';
import Router from 'next/router';
import Page from '../components/Page';
import '../components/styles/nprogress.css';
import { ApolloProvider } from '@apollo/client';
import withData from '../lib/withData';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps, apollo }) {
  console.log(apollo);

  return (
    <ApolloProvider client={apollo}>
    <Page>
      <Component {...pageProps} />
    </Page>
    </ApolloProvider>
  );
}

MyApp.getInititalProps = async function({Component, ctx}){
  let pageProps = {};
  if(Component.getInititalProps){
    pageProps = await Component.getInititalProps(ctx); 
  }

  pageProps.query = ctx.query;
  return {pageProps};
}

export default withData(MyApp);