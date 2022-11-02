import React, { useState, useEffect, useCallback } from "react";
import * as authService from "../../services/authService";
import {
  FormLayout,
  Button,
  Form,
  ButtonGroup,
  PageActions,
  Toast,
  Loading,
  TextStyle,
  Spinner,
  Select,
  Popover,
  OptionList,
} from "@shopify/polaris";

function Announcement(props) {
  const [isLoading, setIsLoading] = useState(false);

  //Button enable/disable-------------------------------------
  const [isFirstButtonActive, setIsFirstButtonActive] = useState(false);

  const handleFirstButtonClick = useCallback(() => {
    if (isFirstButtonActive) return;
    setIsFirstButtonActive(true);
  }, [isFirstButtonActive]);

  const handleSecondButtonClick = useCallback(() => {
    if (!isFirstButtonActive) return;
    setIsFirstButtonActive(false);
  }, [isFirstButtonActive]);

  //toast
  const [active, setActive] = useState({
    isOpen: false,
    msg: "",
    isErr: false,
  });

  ////////////////////page selection/////////////////

  const [selected, setSelected] = useState([]);
  const [popoverActive, setPopoverActive] = useState(false);
  console.log(selected);
  const togglePopoverActive = useCallback(
    () => setPopoverActive((popoverActive) => !popoverActive),
    []
  );

  const activator = (
    <Button onClick={togglePopoverActive} disclosure>
      Select Page
    </Button>
  );

  //////////////////////////////////////////////////
  const toastMarkup = active.isOpen ? (
    <Toast
      content={active.msg}
      onDismiss={() => setActive({ isOpen: false, msg: "", isErr: false })}
      error={active.isErr ? true : false}
    />
  ) : null;

  // const [selected, setSelected] = useState("");

  // const handleSelectChange = useCallback((value) => setSelected(value), []);

  const options = [
    { label: "Home page", value: "home_page" },
    { label: "Product page", value: "product_page" },
    { label: "Collection page", value: "collection_page" },
    { label: "Collection list", value: "collection_list" },
    { label: "Cart", value: "cart_page" },
    { label: "Checkout", value: "checkout_page" },
  ];
  useEffect(() => {
    getABSettings();
  }, []);

  function getABSettings() {
    setIsLoading(true);

    authService
      .getSettingAB()
      .then((response) => {
        setIsLoading(false);

        if (response && response.data && response.data.status === "success") {
          if (response.data.data) {
            const { isEnable, selected_page } = response.data.data;
            selected_page && setSelected(selected_page);

            isEnable
              ? setIsFirstButtonActive(true)
              : setIsFirstButtonActive(false);
          }
        } else {
          setActive({
            isOpen: true,
            msg: "Get Setting details error !",
            isErr: true,
          });
        }
      })
      .catch((err) => {
        setIsLoading(false);
        setActive({
          isOpen: true,
          msg: "Get Setting details error !",
          isErr: true,
        });
        console.log("ERROR: ", err);
      });
  }

  function handleABSettingSave() {
    setIsLoading(true);

    const data = {
      isEnable: isFirstButtonActive,
      selected_page: selected,
    };

    authService
      .assignSettingAB(data)
      .then((response) => {
        setIsLoading(false);

        if (response && response.data && response.data.status === "success") {
          setActive({ isOpen: true, msg: "Successfully saved.", isErr: false });
          getABSettings();
        } else {
          setActive({
            isOpen: true,
            msg: "Something went wrong! Please try again.",
            isErr: true,
          });
        }
      })
      .catch((err) => {
        setIsLoading(false);
        setActive({
          isOpen: true,
          msg: "Something went wrong! Please try again.",
          isErr: true,
        });
        console.log("ERROR", err);
      });
  }

  let cartpopUp = `<style>
    .he-container {
        width: 100%;
        background: #212E47;
        color: #fff;
        padding: 5px 0;
        display: flex;
        justify-content: space-between;
    }
    .he-text-container {
        display: flex;
        margin: 0 auto;
        padding-top: 2px;
    }
    .he-text {
        margin-right: 7px;
        font-size: 14px;
        letter-spacing: 3px;
        font-family: system-ui;
        line-height: 20px;
        text-transform: uppercase;
    }
    .he-lm-button {
        background: #F4EEED;
        border-radius: 6px;
        color: #000;
        padding: 3px 10px;
        cursor: pointer;
        margin-right: 20px;
        font-weight: 600;
        letter-spacing: 2px;
        font-family: system-ui;
        vertical-align: top;
        font-size: 14px;
    }

    </style>
    
    <div class="he-container">
        <div class="he-text-container">
            <div class="he-text">Get Free tailoring through our partnership with</div>
            <span><img src="${window.location.origin}/hook/assets/union.png" /></span>
        </div>
        <div class="he-lm-button">LEARN MORE</div>
    </div>`;

  return (
    <div>
      {isLoading ? (
        <div className="setting-spinner">
          <Spinner accessibilityLabel="Spinner example" size="large" />
        </div>
      ) : (
        <>
          <Form>
            <FormLayout>
              <div className="popup-settings">
                <br />
                <TextStyle>Announcement bar status</TextStyle>
                <FormLayout.Group>
                  <ButtonGroup segmented>
                    <Button
                      pressed={isFirstButtonActive}
                      onClick={handleFirstButtonClick}
                    >
                      Enable
                    </Button>
                    <Button
                      pressed={!isFirstButtonActive}
                      onClick={handleSecondButtonClick}
                    >
                      Disable
                    </Button>
                  </ButtonGroup>
                </FormLayout.Group>

                <FormLayout.Group>
                  {/* <Select
                    label="Page"
                    options={options}
                    onChange={handleSelectChange}
                    value={selected}
                    placeholder="Select page"
                  />
                  <div></div> */}
                  <Popover
                    active={popoverActive}
                    activator={activator}
                    onClose={togglePopoverActive}
                  >
                    <OptionList
                      onChange={setSelected}
                      options={options}
                      selected={selected}
                      allowMultiple
                    />
                  </Popover>
                </FormLayout.Group>
              </div>
            </FormLayout>
            <br />
            <FormLayout>
              <div>Preview:</div>
              {<div dangerouslySetInnerHTML={{ __html: cartpopUp }}></div>}
            </FormLayout>
          </Form>
          <div className="action-btns">
            <PageActions
              primaryAction={{
                content: "Save",
                onAction: handleABSettingSave,
              }}
              secondaryActions={[
                {
                  content: "Cancel",
                  destructive: true,
                  onAction: getABSettings,
                },
              ]}
            />
          </div>
        </>
      )}
      {isLoading && <Loading />}
      {toastMarkup}
    </div>
  );
}

export default Announcement;
