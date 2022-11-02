import React, { useState, useEffect, useCallback } from "react";
import * as authService from "../../services/authService";
import {
  FormLayout,
  Stack,
  Form,
  RadioButton,
  PageActions,
  TextStyle,
  Button,
  ButtonGroup,
  Spinner,
  Toast,
} from "@shopify/polaris";

export default function Collection() {
  //state and handlers

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

  const [isLoading, setIsLoading] = useState(false);

  //toast
  const [active, setActive] = useState({
    isOpen: false,
    msg: "",
    isErr: false,
  });

  const toastMarkup = active.isOpen ? (
    <Toast
      content={active.msg}
      onDismiss={() => setActive({ isOpen: false, msg: "", isErr: false })}
      error={active.isErr ? true : false}
    />
  ) : null;

  const [type, setType] = useState("option1");
  const handleChangeType = useCallback(
    (_checked, newValue) => setType(newValue),
    []
  );
  useEffect(() => {
    getCollectionSettings();
  }, []);

  function getCollectionSettings() {
    setIsLoading(true);

    authService
      .getSettingCollection()
      .then((response) => {
        setIsLoading(false);

        if (response && response.data && response.data.status === "success") {
          if (response.data.data) {
            const { displayType, isEnable } = response.data.data;

            displayType && setType(displayType);
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
  function handleCollectionSettingSave() {
    setIsLoading(true);

    const data = {
      displayType: type,
      isEnable: isFirstButtonActive,
    };

    authService
      .assignSettingCollection(data)
      .then((response) => {
        setIsLoading(false);

        console.log("response assign pro set", response);

        if (response && response.data && response.data.status === "success") {
          setActive({ isOpen: true, msg: "Successfully saved.", isErr: false });
          getCollectionSettings();
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

  const previewOption1 = `<head>
  <style>
      @import url('http://fonts.cdnfonts.com/css/sillii-willinn');

      .grid__item-details {
        background: #F4EEED;
        font-family: serif;
        font-size: 16px;
        width: 278px;
        padding: 10px 18px;
        max-height: 116px;
      }

      .grid {
          display: flex;
          cursor: pointer;
      }

      p.grid-mine-text {
        font-family: Sillii Willinn;
        font-size: 41px;
        transform: rotate(-5deg);
        margin: 0px 0 !important;
        padding: 0 !important;
      }

      .g-text {
        display: flex;
        line-height: 48px;
      }

      .grid-mine-line {
          width: 80px;
          height: 0px;
          margin-top: 35px;
          margin-left: -82px;
          border: 1.16419px solid #1F1E2C;
      }

      .grid-text-2-container {
          font-family: system-ui;
      }

      .grid-size {
          color: #000;
      }

      .grid-size-text {
          color: #77777a;
      }

      .logomark-custom {
          height: fit-content;
          margin: auto 0;
      }

      .grid-text-2 {
          display: flex;
          justify-content: space-between;
      }
  </style>
</head>
<div class="grid">
  <div>
      <img src=${
        type === "option1"
          ? `${window.location.origin}/hook/assets/collection1.png`
          : type == "option2"
          ? `${window.location.origin}/hook/assets/collection2.png`
          : `${window.location.origin}/hook/assets/collection3.png`
      } />
  </div>
  <div class="grid__item-details">
      <div class="g-text">
          <span style="font-size: 40px; margin-right: 15px;">Make it </span>
          <p class="grid-mine-text">Mine</p>
          <p class="grid-mine-line"></p>
      </div>
      <div class="grid-text-2">
          <div class="grid-text-2-container">
              <div class="grid-size">In between sizes?</div>
              <div class="grid-size-text">Get it tailored with Hemster.</div>
          </div>
          <img class="logomark-custom" src='${
            window.location.origin
          }/hook/assets/logomark.png' />
      </div>
  </div>
</div>`;

  return (
    <>
      {" "}
      {isLoading ? (
        <div className="setting-spinner">
          <Spinner accessibilityLabel="Spinner example" size="large" />
        </div>
      ) : (
        <div>
          <br />
          <div className="popup-settings">
            <TextStyle>Collection page status</TextStyle>
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
          <br />
          <Form>
            <FormLayout>
              <div className="type-radio">
                <TextStyle>Type:</TextStyle>
                <br />
                <br />
                <Stack>
                  <RadioButton
                    label="Option 1"
                    checked={type === "option1"}
                    id="option1"
                    name="type"
                    onChange={handleChangeType}
                  />
                  <RadioButton
                    label="Option 2"
                    id="option2"
                    name="type"
                    checked={type === "option2"}
                    onChange={handleChangeType}
                  />
                  <RadioButton
                    label="Option 3"
                    checked={type === "option3"}
                    id="option3"
                    name="type"
                    onChange={handleChangeType}
                  />
                </Stack>
              </div>
            </FormLayout>
            <br />
            <FormLayout>
              <TextStyle>Preview:</TextStyle>

              <div dangerouslySetInnerHTML={{ __html: previewOption1 }}></div>
            </FormLayout>
          </Form>

          <div className="action-btns">
            <PageActions
              primaryAction={{
                content: "Save",
                // disabled: isLoading,
                onAction: handleCollectionSettingSave,
              }}
              secondaryActions={[
                {
                  content: "Cancel",
                  destructive: true,
                  onAction: getCollectionSettings,
                },
              ]}
            />
          </div>
        </div>
      )}
      {toastMarkup}
    </>
  );
}
