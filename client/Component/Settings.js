import React, { useEffect, useState } from "react";
import {
  TextStyle,
  Card,
  SettingToggle,
  Page,
  Spinner,
  Tabs,
  Frame,
} from "@shopify/polaris";
import * as authService from "../services/authService";
import Product from "./Settings/Product";
import Thankyou from "./Settings/Thankyou";
import CartPopup from "./Settings/CartPopup";
import Collection from "./Settings/Collection";
import Announcement from "./Settings/Announcement";
import AccountDetails from "./Settings/AccountDetails";

function Settings(props) {
  const [active, setActive] = useState(true);

  const [isLoadingApp, setIsLoadingApp] = useState(false);

  const contentStatus = active ? "Disable" : "Enable";
  const textStatus = active ? "enabled" : "disabled";

  function handleToggle() {
    setIsLoadingApp(true);

    var data = {
      isAppEnable: !active,
    };

    authService
      .enableApp(data)
      .then((response) => {
        if (response.data.status === "success") {
          setActive(!active);
          getAppStatus();
        }
        setIsLoadingApp(false);
      })
      .catch((error) => {
        setIsLoadingApp(false);
        console.log("Error", error);
      });
  }

  useEffect(() => {
    getAppStatus();
  }, []);

  const [selected, setSelected] = useState(0);

  const tabs = [
    {
      id: "productPage",
      content: "Product page",
    },
    {
      id: "thankyou",
      content: "Thank you page",
    },
    {
      id: "cartPopUp",
      content: "Cart page Pop-up",
    },
    {
      id: "collection",
      content: "Collection page",
    },
    {
      id: "account_details",
      content: "PDP account details",
    },
    {
      id: "announcementBar",
      content: "Announcement bar",
    },
  ];

  function getAppStatus() {
    setIsLoadingApp(true);

    authService
      .getAppStatus()
      .then((response) => {
        setIsLoadingApp(false);

        if (
          response &&
          response.data &&
          response.data.data &&
          response.data.data.shopStatus
        ) {
          let { isAppEnable } = response.data.data.shopStatus;
          isAppEnable ? setActive(true) : setActive(false);
        } else {
          setActive(false);
        }
      })
      .catch((err) => {
        setIsLoadingApp(false);
        console.log("ERROR: ", err);
      });
  }

  return (
    <Page title="Settings">
      <SettingToggle
        action={{
          content: contentStatus,
          onAction: handleToggle,
        }}
        enabled={active}
      >
        <div className="enable-setting">
          This app is{" "}
          <TextStyle variation="strong">
            {isLoadingApp ? (
              <Spinner size="small" color="teal" />
            ) : (
              textStatus + "."
            )}
          </TextStyle>
        </div>
      </SettingToggle>
      <Card sectioned title="Display Settings">
        <Tabs tabs={tabs} selected={selected} onSelect={setSelected}>
          {selected === 0 && <Product />}
          {selected === 1 && <Thankyou />}
          {selected === 2 && <CartPopup />}
          {selected === 3 && <Collection />}
          {selected === 4 && <AccountDetails />}
          {selected === 5 && <Announcement />}
        </Tabs>
      </Card>
    </Page>
  );
}

export default Settings;
