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

function AccountDetails(props) {
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

  //////////////////////////////////////////////////
  const toastMarkup = active.isOpen ? (
    <Toast
      content={active.msg}
      onDismiss={() => setActive({ isOpen: false, msg: "", isErr: false })}
      error={active.isErr ? true : false}
    />
  ) : null;

  useEffect(() => {
    getADSettings();
  }, []);

  function getADSettings() {
    setIsLoading(true);

    authService
      .getSettingADS()
      .then((response) => {
        setIsLoading(false);

        if (response && response.data && response.data.status === "success") {
          if (response.data.data) {
            const { isEnable } = response.data.data;
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
    };

    authService
      .assignSettingADS(data)
      .then((response) => {
        setIsLoading(false);

        if (response && response.data && response.data.status === "success") {
          setActive({ isOpen: true, msg: "Successfully saved.", isErr: false });
          getADSettings();
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

  let account_details = `<style>
  .container-acc {
      text-align: left;
      width: fit-content;
      background: #F4EEED;
      border-radius: 4px;
      font-family: Montserrat, sans-serif;
      font-size: 16px;
      padding: 22px 20px;
      margin: 10px 0px;
      cursor: pointer;
  }

  .acc-text-1 {
      font-weight: 600;
      color: #1F1E2C;
  }

  .acc-text-image {
      display: flex;
      justify-content: space-between;
      margin-top: 5px;
  }

  .acc-text-2 {
      position: relative;
      top: 9px;
      color: #C1ACA4;
      text-decoration: underline;
      cursor: pointer;
  }

  .acc-iamge-2 {
      position: relative;
      top: 6px;
  }
</style>

<div class="container-acc" >
  <div class="acc-text-1">
      Fit issue? Get free virtual tailoring
  </div>
  <div class="acc-text-image">
      <span class="acc-text-2">Book fitting</span>
      <img src="https://merchant.hemster.co/faherty/hemsterlogo.png" class="acc-iamge-2">
  </div>
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
                <TextStyle>PDP Account Details</TextStyle>
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
              </div>
            </FormLayout>
            <br />
            <FormLayout>
              <div>Preview:</div>
              {
                <div
                  dangerouslySetInnerHTML={{ __html: account_details }}
                ></div>
              }
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
                  onAction: getADSettings,
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

export default AccountDetails;
