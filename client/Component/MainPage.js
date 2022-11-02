import { useEffect, useState } from "react";
import { AppProvider, Frame, Tabs } from '@shopify/polaris';
import * as authService from "../services/authService";
import en from '@shopify/polaris/locales/en.json';
import Products from '../Component/Products/ProductIndex';
import Settings from '../Component/Settings';
import Support from '../Component/Support';
import '@shopify/polaris/dist/styles.css';
import { Spinner } from '@shopify/polaris';

function MainPage() {

  const [selected, setSelected] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isErr, setIsErr] = useState(false);

  useEffect(() => {

    if (window.location.hostname !== "localhost") {

      authService.getAppCharge().then((res) => {

        if (res.data && res.data.confirmationUrl) {

          window.top.location.href = res.data.confirmationUrl;

        } else if (res.data.app_charge) {
          setIsLoading(false)
        }

      }).catch(err => {

        setIsLoading(false);
        setIsErr(true);
        console.log("ERROR: ", err);

      })

    } else {
      setIsLoading(false);
    }
  }, []);

  const tabs = [
    {
      id: 'products',
      content: 'Products',
    },
    {
      id: 'settings',
      content: 'Settings',
    },
    {
      id: 'support',
      content: 'Support',
    },
  ];
  console.log("isErr", isErr);


  return (
    <AppProvider i18n={en}>
      <Frame>
        {isLoading ?
          (<div className="spinner">
            <Spinner />
          </div>) :
          (!isErr ?
            <>
              <Tabs tabs={tabs} selected={selected} onSelect={setSelected} >
                {selected === 0 && <Products />}
                {selected === 1 && <Settings />}
                {selected === 2 && <Support />}
              </Tabs>
            </> :
            <div className="spinner">Something went wrong with billing! please try again.</div>)
        }
      </Frame>
    </AppProvider>
  );

}

export default MainPage;
