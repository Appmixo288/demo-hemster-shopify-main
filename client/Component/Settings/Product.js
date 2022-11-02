import React, { useState, useEffect, useCallback } from "react";
import * as authService from "../../services/authService";
import {
  FormLayout,
  Popover,
  ColorPicker,
  TextField,
  Button,
  Stack,
  hsbToHex,
  Form,
  RadioButton,
  PageActions,
  Toast,
  Loading,
  rgbString,
  rgbToHsb,
  hsbToRgb,
  TextStyle,
  Spinner,
  Page,
  Select,
  Card,
} from "@shopify/polaris";

function Product(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

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

  const [fontSize, setFontSize] = useState("16");

  const [iconSize, setIconSize] = useState("26");

  const [popoverActiveIconColor, setPopoverActiveIconColor] = useState(false);

  const [popoverActiveBackgroundColor, popoverActiveSetBackgroundColor] = useState(false);

  const [popoverActiveFontColor, setPopoverActiveFontColor] = useState(false);

  const togglePopoverActiveIconColor = useCallback(
    () =>
      setPopoverActiveIconColor(
        (popoverActiveIconColor) => !popoverActiveIconColor
      ),
    []
  );

  const toggleBackgroundColor = useCallback(
    () =>
      popoverActiveSetBackgroundColor(
        (popoverActiveBackgroundColor) => !popoverActiveBackgroundColor
      ),
    []
  );

  const togglePopoverActiveFontColor = useCallback(
    () =>
      setPopoverActiveFontColor((popoverActiveFontColor) => !popoverActiveFontColor),
    []
  );
  const [IconColor, setIconColor] = useState({
    hue: 0.0,
    brightness: 0.0,
    saturation: 0.0,
  });

  const [BackgroundColor, setBackgroundColor] = useState({
    hue: 0.0,
    brightness: 0.0,
    saturation: 0.0,
  });

  const [FontColor, setFontColor] = useState({
    hue: 0.0,
    brightness: 0.0,
    saturation: 0.0,
  });

  const rgbaColorFontColor = rgbString(hsbToRgb(FontColor));

  const rgbaColorIconColor = rgbString(hsbToRgb(IconColor));

  const rgbaColorBackgroundColor = rgbString(hsbToRgb(BackgroundColor));

  const [selected, setSelected] = useState("");

  const handleSelectChange = useCallback((value) => setSelected(value), []);

  const options = [
    {
      label: 'Times, "Times New Roman", serif',
      value: 'Times, "Times New Roman", serif',
    },
    {
      label: "Helvetica, Arial, sans-serif",
      value: "Helvetica, Arial, sans-serif",
    },
    { label: "serif", value: "serif" },
    { label: "sans-serif", value: "sans-serif" },
    { label: "monospace", value: "monospace" },
    { label: "cursive", value: "cursive" },
    { label: "fantasy", value: "fantasy" },
    { label: "Montserrat, sans-serif", value: "Montserrat, sans-serif" },
  ];

  const handleIconColorChange = (value) => {
    let hexColor = hsbToHex(value);
    setIconColorHexColor(hexColor);
    setIconColor(value);
  };

  const handleBackgroundColorChange = (value) => {
    let hexColor = hsbToHex(value);
    setBackgroundColorHexColor(hexColor);
    setBackgroundColor(value);
  };

  const handleFontColorChange = (value) => {
    let hexColor = hsbToHex(value);
    setFontColorHexColor(hexColor);
    setFontColor(value);
  };

  const [IconColorHexColor, setIconColorHexColor] = useState(
    hsbToHex(IconColor)
  );
  const [BackgroundColorHexColor, setBackgroundColorHexColor] = useState(
    hsbToHex(BackgroundColor)
  );

  const [FontColorHexColor, setFontColorHexColor] = useState(
    hsbToHex(FontColor)
  );

  const handleIconColorHexColorChange = (value) => {
    if (value.charAt(0) === "#" && value.length <= 7) {
      setIconColorHexColor(value);
      if (value.length === 7) {
        let rgbValue = hexToRgb(value);
        let hsba = rgbToHsb(rgbValue);
        setIconColor(hsba);
      }
    }
  };

  const handleBackgroundColorHexColorChange = (value) => {
    if (value.charAt(0) === "#" && value.length <= 7) {
      setBackgroundColorHexColor(value);
      if (value.length === 7) {
        let rgbValue = hexToRgb(value);
        let hsba = rgbToHsb(rgbValue);
        setBackgroundColor(hsba);
      }
    }
  };

  const handleFontColorHexColorChange = (value) => {
    if (value.charAt(0) === "#" && value.length <= 7) {
      setFontColorHexColor(value);
      if (value.length === 7) {
        let rgbValue = hexToRgb(value);
        let hsba = rgbToHsb(rgbValue);
        setFontColor(hsba);
      }
    }
  };

  const hexToRgb = (hex) => {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
      return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
        red: parseInt(result[1], 16),
        green: parseInt(result[2], 16),
        blue: parseInt(result[3], 16),
      }
      : {
        red: 0,
        green: 0,
        blue: 0,
      };
  };

  const activatorIconColor = (
    <div>
      <label>Icon Color</label>

      <div style={{ paddingTop: "3px" }}>
        <Button onClick={togglePopoverActiveIconColor} disclosure>
          <div>
            <Stack spacing="tight">
              <div
                style={{
                  height: "2rem",
                  width: "2rem",
                  borderRadius: "0.3rem",
                  background: rgbaColorIconColor,
                }}
              />
              <span>{IconColorHexColor}</span>
            </Stack>
          </div>
        </Button>
      </div>
    </div>
  );

  const activatorBackgroundColor = (
    <div>
      <label>Background Color</label>

      <div style={{ paddingTop: "3px" }}>
        <Button onClick={toggleBackgroundColor} disclosure>
          <div>
            <Stack spacing="tight">
              <div
                style={{
                  height: "2rem",
                  width: "2rem",
                  borderRadius: "0.3rem",
                  background: rgbaColorBackgroundColor,
                }}
              />
              <span>{BackgroundColorHexColor}</span>
            </Stack>
          </div>
        </Button>
      </div>
    </div>
  );

  const activatorFontColor = (
    <div>
      <label>Font Color</label>

      <div style={{ paddingTop: "3px" }}>
        <Button onClick={togglePopoverActiveFontColor} disclosure>
          <div>
            <Stack spacing="tight">
              <div
                style={{
                  height: "2rem",
                  width: "2rem",
                  borderRadius: "0.3rem",
                  background: rgbaColorFontColor,
                }}
              />
              <span>{FontColorHexColor}</span>
            </Stack>
          </div>
        </Button>
      </div>
    </div>
  );

  useEffect(() => {
    getProductSettings();
  }, []);

  function getProductSettings() {
    setIsLoading(true);

    authService
      .getSettingProduct()
      .then((response) => {
        setIsLoading(false);

        if (response && response.data && response.data.status === "success") {
          if (response.data.data) {

            const {
              pdpFontSize,
              pdpBackgroundColor,
              pdpFontColor,
              pdpIconSize,
              pdpIconColor
            } = response.data.data;

            setFontSize(pdpFontSize ? pdpFontSize.toString() : "18");
            setIconSize(pdpIconSize ? pdpIconSize.toString() : '26');
            handleIconColorHexColorChange(pdpIconColor ? pdpIconColor : "#3A3A3A");
            handleFontColorHexColorChange(pdpFontColor ? pdpFontColor : "#3A3A3A");
            handleBackgroundColorHexColorChange(
              pdpBackgroundColor ? pdpBackgroundColor : '#F4F3EF');

            // const {
            //   IconColor,
            //   fontSize,
            //   FontColor,
            //   fontType,
            //   BackgroundColor,
            //   iconSize,
            // } = response.data.data;

            // // const { displayType } = response.data.data;

            // // displayType && setType(displayType);
            // IconColor && handleIconColorHexColorChange(IconColor);
            // FontColor && handleFontColorHexColorChange(FontColor);
            // fontSize && setFontSize(fontSize.toString());
            // fontType && setSelected(fontType);
            // iconSize && setIconSize(iconSize.toString());
            // BackgroundColor && handleBackgroundColorHexColorChange(BackgroundColor);
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

  function handleProductSettingSave() {
    setIsLoading(true);

    const data = {
      // displayType: type,
      // IconColor: IconColorHexColor,
      // fontSize: parseInt(fontSize),
      // FontColor: FontColorHexColor,
      // fontType: selected,
      // BackgroundColor: BackgroundColorHexColor,
      // iconSize: parseInt(iconSize),
      //new
      pdpFontSize: fontSize ? parseInt(fontSize) : 18,
      pdpBackgroundColor: BackgroundColorHexColor ? BackgroundColorHexColor : '#F4F3EF',
      pdpFontColor: FontColorHexColor ? FontColorHexColor : "#3A3A3A",
      pdpIconSize: iconSize ? parseInt(iconSize) : 26,
      pdpIconColor: IconColorHexColor ? IconColorHexColor : '#3A3A3A'
    };
    authService
      .assignSettingProduct(data)
      .then((response) => {
        setIsLoading(false);

        console.log("response assign pro set", response);

        if (response && response.data && response.data.status === "success") {
          setActive({ isOpen: true, msg: "Successfully saved.", isErr: false });
          getProductSettings();
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


  const previewHTML = `<style>
  .badge-content {
      display: flex;
  }

  span.badge-content-image {
      margin-right: 0.2%;
  }

  .badge-content-text {
      margin: auto 0;
      font-size: ${fontSize}px !important;
      /*18px */
      min-width: fit-content;
      letter-spacing: 0.6px;
      padding: 0 5px;
      color: ${FontColorHexColor} !important
          /*#3A3A3A*/
  }

  .badge-content-svg {
      height: ${iconSize}px !important;
      margin: auto;
  }

  .container-badge {
      cursor: pointer;
      letter-spacing: 0.5px;
      padding: 8px;
      background: ${BackgroundColorHexColor} !important;
      /* #F4F3EF*/
      width: fit-content;
      border-radius: 6px;
      font-family: serif;
      margin : 15px 0;
  }

  .badge-icon {
      fill: ${IconColorHexColor}
          /* #3A3A3A*/
  }

  /* $icon-size : 21 */

  /* popup */
  /** * Overlay * -- only show for tablet and up */
  @media only screen and (min-width: 40em) {
      .h-modal-overlay {
          display: flex;
          align-items: center;
          justify-content: center;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 5;
          background-color: rgba(0, 0, 0, 0.6);
          opacity: 0;
          visibility: hidden;
          backface-visibility: hidden;
          transition: opacity 0.6s cubic-bezier(0.55, 0, 0.1, 1), visibility 0.6s cubic-bezier(0.55, 0, 0.1, 1);
      }

      .h-modal-overlay.h-active {
          opacity: 1;
          visibility: visible;
      }
  }
  .h-modal-overlay {
      height: 100vh;
      z-index: 999;
  }
  /** * h-Modal */
  .h-modal {
      width: 800px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      margin: 0 auto;
      background-color: #fff;
      max-width: 75rem;
      min-height: 20rem;
      padding: 3rem 1rem;
      border-radius: 10px;
      opacity: 0;
      overflow-y: auto;
      visibility: hidden;
      box-shadow: 0 2px 10px rgb(0 0 0 / 10%);
      backface-visibility: hidden;
      transform: scale(1.2);
      transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1);
  }

  .h-modal .close-h-modal {
      position: absolute;
      cursor: pointer;
      top: 5px;
      right: 15px;
      opacity: 0;
      backface-visibility: hidden;
      transition: opacity 0.6s cubic-bezier(0.55, 0, 0.1, 1), transform 0.6s cubic-bezier(0.55, 0, 0.1, 1);
      transition-delay: 0.3s;
  }

  .h-modal .close-h-modal svg {
      width: 1.70em;
      height: 1.70em;
      opacity: 0.3;
  }

  .h-modal .h-modal-content {
      opacity: 0;
      backface-visibility: hidden;
      transition: opacity 0.6s cubic-bezier(0.55, 0, 0.1, 1);
      transition-delay: 0.3s;
  }

  .h-modal.h-active {
      visibility: visible;
      opacity: 1;
      transform: scale(1);
  }

  .h-modal.h-active .h-modal-content {
      opacity: 1;
  }

  .h-modal.h-active .close-h-modal {
      transform: translateY(10px);
      opacity: 1;
  }

  /** * Mobile styling */
  @media only screen and (max-width: 39.9375em) {
      .h-modal-overlay{
          height: 100vh;
      }
      .h-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          -webkit-overflow-scrolling: touch;
          border-radius: 0;
          transform: scale(1.1);
          padding: 0 !important;
      }

      .close-h-modal {
          right: 20px !important;
      }
  }

  
  .h-grid-container {
      display: grid;
      grid-template-columns: auto auto auto;
      padding: 10px;
  }

  .h-grid-item {
      padding: 20px;
      text-align: center;
  }

  .h-modal-content {
      padding: 10px 10px;
  }

  .h-modal-close-button {
      background: #1F1E2C;
      border-radius: 4px;
      color: #fff;
      padding: inherit;
      width: 250px;
      text-align: center;
      margin: 15px auto;
      letter-spacing: 0.2rem;
      cursor: pointer;
  }

  .h-modal-number {
      font-family: Canela;
      font-style: normal;
      font-weight: normal;
      font-size: 40px;
      line-height: 48px;
      text-align: center;
      font-feature-settings: 'pnum'on, 'lnum'on;
      color: #C1ACA4;
  }

  .h-modal-title-container {
      line-height: 22px;
      text-align: center;
      font-feature-settings: 'pnum'on, 'lnum'on;
      color: #525258;
      width: 62%;
      margin: 0 auto;
  }

  .popup-title-text {
      font-family: Sweet Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      margin: 15px 0;
  }
</style>

<div class="container-badge" onclick='document.getElementsByClassName("h-modal-overlay")[0].classList.add("h-active"); 
document.getElementsByClassName("h-modal")[0].classList.add("h-active");'>
  <div class="badge-content">
      <svg 
      className="badge-content-image" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"
          class="badge-content-svg">
          <path fill-rule="evenodd" clip-rule="evenodd" class="badge-icon"
              d="M20.125 10.3918C20.125 15.7005 15.8641 19.9175 10.5 19.9175C5.13593 19.9175 0.875 15.7005 0.875 10.3918C0.875 5.08299 5.13593 0.86598 10.5 0.86598C15.8641 0.86598 20.125 5.08299 20.125 10.3918ZM21 10.3918C21 16.131 16.299 20.7835 10.5 20.7835C4.70101 20.7835 0 16.131 0 10.3918C0 4.65255 4.70101 0 10.5 0C16.299 0 21 4.65255 21 10.3918ZM4.66672 6.92789C4.66672 5.5728 5.63085 4.61861 7.00006 4.61861C8.36926 4.61861 9.33339 5.5728 9.33339 6.92789C9.33339 8.13528 8.59816 8.99448 7.43756 9.19906V11.5846C8.59816 11.7891 9.33339 12.6483 9.33339 13.8557C9.33339 15.2108 8.36926 16.165 7.00006 16.165C5.63085 16.165 4.66672 15.2108 4.66672 13.8557C4.66672 12.6483 5.40196 11.7891 6.56256 11.5846V9.19906C5.40196 8.99448 4.66672 8.13528 4.66672 6.92789ZM11.6667 6.92789C11.6667 5.5728 12.6308 4.61861 14.0001 4.61861C15.3693 4.61861 16.3334 5.5728 16.3334 6.92789C16.3334 8.13528 15.5982 8.99448 14.4376 9.19906V11.5846C15.5982 11.7891 16.3334 12.6483 16.3334 13.8557C16.3334 15.2108 15.3693 16.165 14.0001 16.165C12.6308 16.165 11.6667 15.2108 11.6667 13.8557C11.6667 12.6483 12.402 11.7891 13.5626 11.5846V9.19906C12.402 8.99448 11.6667 8.13528 11.6667 6.92789ZM7.00006 5.34026C6.1141 5.34026 5.39589 6.05106 5.39589 6.92789C5.39589 7.65453 5.88926 8.26736 6.56256 8.45579V7.33624C6.56256 6.87158 6.93924 6.4949 7.4039 6.4949C7.42249 6.4949 7.43756 6.50996 7.43756 6.52855V8.45579C8.11085 8.26736 8.60422 7.65453 8.60422 6.92789C8.60422 6.05106 7.88601 5.34026 7.00006 5.34026ZM14.0001 5.34026C13.1141 5.34026 12.3959 6.05106 12.3959 6.92789C12.3959 7.65453 12.8893 8.26736 13.5626 8.45579V6.52855C13.5626 6.50996 13.5776 6.4949 13.5962 6.4949C14.0609 6.4949 14.4376 6.87158 14.4376 7.33624V8.45579C15.1108 8.26736 15.6042 7.65453 15.6042 6.92789C15.6042 6.05106 14.886 5.34026 14.0001 5.34026ZM6.56256 12.3278C5.88926 12.5162 5.39589 13.1291 5.39589 13.8557C5.39589 14.7325 6.1141 15.4434 7.00006 15.4434C7.88601 15.4434 8.60422 14.7325 8.60422 13.8557C8.60422 13.1291 8.11085 12.5162 7.43756 12.3278V14.2551C7.43756 14.2736 7.42249 14.2887 7.4039 14.2887C6.93924 14.2887 6.56256 13.912 6.56256 13.4474V12.3278ZM13.5626 12.3278C12.8893 12.5162 12.3959 13.1291 12.3959 13.8557C12.3959 14.7325 13.1141 15.4434 14.0001 15.4434C14.886 15.4434 15.6042 14.7325 15.6042 13.8557C15.6042 13.1291 15.1108 12.5162 14.4376 12.3278V13.4474C14.4376 13.912 14.0609 14.2887 13.5962 14.2887C13.5776 14.2887 13.5626 14.2736 13.5626 14.2551V12.3278Z" />
      </svg>
      <div class="badge-content-text">Tailoring included from Hemster</div>
  </div>
</div>

<!-- h-modal -->
<div class="h-modal-overlay">
  <div class="h-modal">

      <a class="close-h-modal">
          <svg viewBox="0 0 20 20" 
          onclick='document.getElementsByClassName("h-modal-overlay")[0].classList.remove("h-active"); document.getElementsByClassName("h-modal")[0].classList.remove("h-active");'>
              <path fill="#000000"
                  d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z">
              </path>
          </svg>
      </a><!-- close h-modal -->

      <div class="h-modal-content">
          <div class="h-modal-title-container">We’ve partnered with Hemster to provide free tailoring on select
              garments to ensure you get the
              perfect fit.</div>
          <div class="h-grid-container">
              <div class="h-grid-item">
                  <div class="h-modal-number">01</div>
                  <div class="popup-title-text">Get your FitKit with your Garments</div>
                  <div>Using Hemster’s self fit system, you can find your fit without leaving the house.</div>
              </div>
              <div class="h-grid-item">
                  <div class="h-modal-number">02</div>
                  <div class="popup-title-text">Book a Virtual Fitting</div>
                  <div>It’s free, easy and online. Our fitters will answer any questions and get you the perfect
                      fit.</div>
              </div>
              <div class="h-grid-item">
                  <div class="h-modal-number">03</div>
                  <div class="popup-title-text">Get them
                      Tailored</div>
                  <div>Free shipping and 24 hour turnaround time included. Our expert tailors will make them fit
                      perfectly.</div>
              </div>

          </div>
          <div class="h-modal-close-button"   onclick='document.getElementsByClassName("h-modal-overlay")[0].classList.remove("h-active"); document.getElementsByClassName("h-modal")[0].classList.remove("h-active");'>CLOSE</div>
      </div><!-- content -->

  </div><!-- h-modal -->
</div><!-- overlay -->`;


  const settingOption1 = (
    <Card sectioned>
      <Form>
        <FormLayout>
          <FormLayout.Group>
            <div>
              <TextField
                label="Font Size"
                onChange={(val) => {
                  setFontSize(val);
                }}
                value={fontSize}
                type="number"
                min={0}
                suffix="px"
              />
            </div>
            <Popover
              active={popoverActiveFontColor}
              activator={activatorFontColor}
              onClose={togglePopoverActiveFontColor}
            >
              <Popover.Section>
                <ColorPicker onChange={handleFontColorChange} color={FontColor} />
              </Popover.Section>
              <Popover.Section>
                <TextField
                  value={FontColorHexColor}
                  label=""
                  type="text"
                  id="FontColorHexColor"
                  onChange={handleFontColorHexColorChange}
                />
              </Popover.Section>
            </Popover>
          </FormLayout.Group>
          <FormLayout.Group>
            <div>
              <TextField
                label="Icon Size"
                onChange={(val) => {
                  setIconSize(val);
                }}
                value={iconSize}
                type="number"
                min={0}
                suffix="px"
              />
            </div>

            <Popover
              active={popoverActiveIconColor}
              activator={activatorIconColor}
              onClose={togglePopoverActiveIconColor}
            >
              <Popover.Section>
                <ColorPicker
                  onChange={handleIconColorChange}
                  color={IconColor}
                />
              </Popover.Section>
              <Popover.Section>
                <TextField
                  value={IconColorHexColor}
                  label=""
                  type="text"
                  id="IconColorHexColor"
                  onChange={handleIconColorHexColorChange}
                />
              </Popover.Section>
            </Popover>
          </FormLayout.Group>

          <FormLayout.Group>
            <Popover
              active={popoverActiveBackgroundColor}
              activator={activatorBackgroundColor}
              onClose={toggleBackgroundColor}
            >
              <Popover.Section>
                <ColorPicker
                  onChange={handleBackgroundColorChange}
                  color={BackgroundColor}
                />
              </Popover.Section>
              <Popover.Section>
                <TextField
                  value={BackgroundColorHexColor}
                  label=""
                  type="text"
                  id="BackgroundColorHexColor"
                  onChange={handleBackgroundColorHexColorChange}
                />
              </Popover.Section>
            </Popover>
          </FormLayout.Group>
        </FormLayout>
      </Form>
    </Card>
  );


  return (
    <div>
      {isLoading ? (
        <div className="setting-spinner">
          <Spinner accessibilityLabel="Spinner example" size="large" />
        </div>
      ) : (
          <>
            {/* start settings */}

            <Form>


              <br />
              {!isEdit ? (
                <div className="edit-style-btn">
                  <Button onClick={() => setIsEdit(true)} outline>
                    Edit Style
                </Button>
                </div>
              ) : (
                  <Page
                    fullWidth
                    title="Edit style"
                    breadcrumbs={[
                      { content: "settings", onAction: () => setIsEdit(false) },
                    ]}
                  >
                    {settingOption1}
                  </Page>
                )}
              <br />
              <Page>
                <Card sectioned>
                  <TextStyle>Preview:</TextStyle>
                  <div dangerouslySetInnerHTML={{ __html: previewHTML }}></div>
                </Card>
              </Page>
              <FormLayout>
                <br />
                {/* <td dangerouslySetInnerHTML={{__html: this.state.actions}} /> */}
              </FormLayout>
            </Form>

            {/* end settings */}

            <div className="action-btns">
              <PageActions
                primaryAction={{
                  content: "Save",
                  // disabled: isLoading,
                  onAction: handleProductSettingSave,
                }}
                secondaryActions={[
                  {
                    content: "Cancel",
                    destructive: true,
                    onAction: getProductSettings,
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

export default Product;
