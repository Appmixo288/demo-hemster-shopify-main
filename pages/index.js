import React from "react";
import { Frame } from "@shopify/polaris";
import dynamic from "next/dynamic";
import { Spinner } from "@shopify/polaris";
const DynamicMainPage = dynamic(() => import("../client/Component/MainPage"), {
  ssr: false,
  loading: () => (
    <div className="spinner">
      <Spinner />
    </div>
  ),
});
const Index = () => (
  <div>
    <Frame>
      <DynamicMainPage />
    </Frame>
  </div>
);

export default Index;
