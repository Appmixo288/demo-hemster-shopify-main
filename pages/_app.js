import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import App from "next/app";
import { AppProvider } from "@shopify/polaris";
import { Provider, useAppBridge } from "@shopify/app-bridge-react";
import { authenticatedFetch } from "@shopify/app-bridge-utils";
import "@shopify/polaris/dist/styles.css";
import translations from "@shopify/polaris/locales/en.json";
import { Provider as ReduxProvider } from "react-redux";
import store from "../client/redux/store";
import "../client/Css/FitKit.css";

function MyProvider(props) {
  const app = useAppBridge();

  const client = new ApolloClient({
    fetch: authenticatedFetch(app),
    fetchOptions: {
      credentials: "include",
    },
  });

  const Component = props.Component;

  return (
    <ApolloProvider client={client}>
      <Component {...props} />
    </ApolloProvider>
  );
}

class MyApp extends App {
  componentDidMount() {
    if (typeof window !== undefined) {
      window.host = this.props.host;
      window.shop = this.props.shop;
    }
  }

  render() {
    const { Component, pageProps, host, shop } = this.props;
    return (
      <ReduxProvider store={store}>
        <AppProvider i18n={translations}>
          <Provider
            config={{
              apiKey: API_KEY,
              host,
              forceRedirect: true,
            }}
          >
            <MyProvider Component={Component} {...pageProps} />
          </Provider>
        </AppProvider>
      </ReduxProvider>
    );
  }
}

MyApp.getInitialProps = async ({ ctx }) => {
  return {
    host: ctx.query.host,
    shop: ctx.query.shop,
  };
};
export default MyApp;
