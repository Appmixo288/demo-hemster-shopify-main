import React, { useState, useEffect, useCallback } from 'react';
import * as authService from "../../services/authService";
import {
    FormLayout, Popover, ColorPicker, TextField, Button, Stack, hsbToHex, Form, ButtonGroup, PageActions, Toast, Loading,
    rgbString,
    rgbToHsb,
    hsbToRgb,
    TextStyle, Spinner
} from '@shopify/polaris';

function CartPopup(props) {


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
    const [active, setActive] = useState({ isOpen: false, msg: "", isErr: false });

    const toastMarkup = active.isOpen ? (
        <Toast content={active.msg} onDismiss={() => setActive({ isOpen: false, msg: "", isErr: false })} error={active.isErr ? true : false} />
    ) : null;

    const [isOpen, setIsOpen] = useState(false);

    const [HeadingfontSize, setHeadingFontSize] = useState("15");

    const [ContentfontSize, setContentFontSize] = useState("15");

    const [TitlefontSize, setTitleFontSize] = useState("15");

    const [popoverActiveHeadingFontColor, setPopoverActiveHeadingFontColor] = useState(false);

    const [popoverActiveButtonBGColor, setPopoverActiveButtonBGColor] = useState(false);

    const [popoverActiveButtonFontColor, setPopoverActiveButtonFontColor] = useState(false);

    const [popoverActiveContentColor, setPopoverActiveContentColor] = useState(false);

    const [popoverActiveTitleColor, setPopoverActiveTitleColor] = useState(false);

    const togglePopoverActiveHeadingFontColor = useCallback(
        () =>
            setPopoverActiveHeadingFontColor((popoverActiveHeadingFontColor) => !popoverActiveHeadingFontColor),
        []
    );

    const togglePopoverActiveButtonBGColor = useCallback(
        () =>
            setPopoverActiveButtonBGColor((popoverActiveButtonBGColor) => !popoverActiveButtonBGColor),
        []
    );

    const togglePopoverActiveButtonFontColor = useCallback(
        () =>
            setPopoverActiveButtonFontColor((popoverActiveButtonFontColor) => !popoverActiveButtonFontColor),
        []
    );

    const togglePopoverActiveContentColor = useCallback(
        () =>
            setPopoverActiveContentColor((popoverActiveContentColor) => !popoverActiveContentColor),
        []
    );

    const togglePopoverActiveTitleColor = useCallback(
        () =>
            setPopoverActiveTitleColor((popoverActiveTitleColor) => !popoverActiveTitleColor),
        []
    );

    const [HeadingFontColor, setHeadingFontColor] = useState({
        hue: 0.0,
        brightness: 0.0,
        saturation: 0.0,
    });

    const [ContentColor, setContentColor] = useState({
        hue: 0.0,
        brightness: 0.0,
        saturation: 0.0,
    });

    const [TitleColor, setTitleColor] = useState({
        hue: 0.0,
        brightness: 0.0,
        saturation: 0.0,
    });
    const [ButtonBGColor, setButtonBGColor] = useState({
        hue: 0.0,
        brightness: 0.0,
        saturation: 0.0,
    });

    const [ButtonFontColor, setButtonFontColor] = useState({
        hue: 0.0,
        brightness: 0.0,
        saturation: 0.0,
    });

    const rgbaColorButtonFontColor = rgbString(hsbToRgb(ButtonFontColor));

    const rgbaColorButtonBGColor = rgbString(hsbToRgb(ButtonBGColor));

    const rgbaColorFontColor = rgbString(hsbToRgb(HeadingFontColor));

    const rgbaColorContentColor = rgbString(hsbToRgb(ContentColor));

    const rgbaColorTitleColor = rgbString(hsbToRgb(TitleColor));


    const handleHeadingFontColorChange = (value) => {
        let hexColor = hsbToHex(value);
        setHeadingFontColorHexColor(hexColor);
        setHeadingFontColor(value);
    };

    const handleButtonBGColorChange = (value) => {
        let hexColor = hsbToHex(value);
        setButtonBGColorHexColor(hexColor);
        setButtonBGColor(value);
    };
    const handleButtonFontColorChange = (value) => {
        let hexColor = hsbToHex(value);
        setButtonFontColorHexColor(hexColor);
        setButtonFontColor(value);
    };

    const handleContentColorChange = (value) => {
        let hexColor = hsbToHex(value);
        setContentColorHexColor(hexColor);
        setContentColor(value);
    };

    const handleTitleColorChange = (value) => {
        let hexColor = hsbToHex(value);
        setTitleColorHexColor(hexColor);
        setTitleColor(value);
    };


    const [HeadingFontColorHexColor, setHeadingFontColorHexColor] = useState(
        hsbToHex(HeadingFontColor)
    );

    const [ButtonBGColorHexColor, setButtonBGColorHexColor] = useState(
        hsbToHex(ButtonBGColor)
    );
    const [ButtonFontColorHexColor, setButtonFontColorHexColor] = useState(
        hsbToHex(ButtonFontColor)
    );

    const [ContentColorHexColor, setContentColorHexColor] = useState(
        hsbToHex(ContentColor)
    );

    const [TitleColorHexColor, setTitleColorHexColor] = useState(
        hsbToHex(TitleColor)
    );

    const handleHeadingFontColorHexColorChange = (value) => {
        if (value.charAt(0) === "#" && value.length <= 7) {
            setHeadingFontColorHexColor(value);
            if (value.length === 7) {
                let rgbValue = hexToRgb(value);
                let hsba = rgbToHsb(rgbValue);
                setHeadingFontColor(hsba);
            }
        }
    };

    const handleContentColorHexColorChange = (value) => {
        if (value.charAt(0) === "#" && value.length <= 7) {
            setContentColorHexColor(value);
            if (value.length === 7) {
                let rgbValue = hexToRgb(value);
                let hsba = rgbToHsb(rgbValue);
                setContentColor(hsba);
            }
        }
    };

    const handleTitleColorHexColorChange = (value) => {
        if (value.charAt(0) === "#" && value.length <= 7) {
            setTitleColorHexColor(value);
            if (value.length === 7) {
                let rgbValue = hexToRgb(value);
                let hsba = rgbToHsb(rgbValue);
                setTitleColor(hsba);
            }
        }
    };

    const handleButtonBGColorHexColorChange = (value) => {
        if (value.charAt(0) === "#" && value.length <= 7) {
            setButtonBGColorHexColor(value);
            if (value.length === 7) {
                let rgbValue = hexToRgb(value);
                let hsba = rgbToHsb(rgbValue);
                setButtonBGColor(hsba);
            }
        }
    };

    const handleButtonFontColorHexColorChange = (value) => {

        if (value.charAt(0) === "#" && value.length <= 7) {
            setButtonFontColorHexColor(value);
            if (value.length === 7) {
                let rgbValue = hexToRgb(value);
                let hsba = rgbToHsb(rgbValue);
                setButtonFontColor(hsba);
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

    const activatorHeadingFontColor = (
        <div>
            <label>Heading Font Color</label>

            <div style={{ paddingTop: "3px" }}>
                <Button onClick={togglePopoverActiveHeadingFontColor} disclosure>
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
                            <span>{HeadingFontColorHexColor}</span>
                        </Stack>
                    </div>
                </Button>
            </div>
        </div>
    );

    const activatorContentColor = (
        <div>
            <label>Content Font Color</label>

            <div style={{ paddingTop: "3px" }}>
                <Button onClick={togglePopoverActiveContentColor} disclosure>
                    <div>
                        <Stack spacing="tight">
                            <div
                                style={{
                                    height: "2rem",
                                    width: "2rem",
                                    borderRadius: "0.3rem",
                                    background: rgbaColorContentColor,
                                }}
                            />
                            <span>{ContentColorHexColor}</span>
                        </Stack>
                    </div>
                </Button>
            </div>
        </div>
    );

    const activatorTitleColor = (
        <div>
            <label>Title Font Color</label>

            <div style={{ paddingTop: "3px" }}>
                <Button onClick={togglePopoverActiveTitleColor} disclosure>
                    <div>
                        <Stack spacing="tight">
                            <div
                                style={{
                                    height: "2rem",
                                    width: "2rem",
                                    borderRadius: "0.3rem",
                                    background: rgbaColorTitleColor,
                                }}
                            />
                            <span>{TitleColorHexColor}</span>
                        </Stack>
                    </div>
                </Button>
            </div>
        </div>
    );


    const activatorButtonFontColor = (
        <div>
            <label>Button Font Color</label>

            <div style={{ paddingTop: "3px" }}>
                <Button onClick={togglePopoverActiveButtonFontColor} disclosure>
                    <div>
                        <Stack spacing="tight">
                            <div
                                style={{
                                    height: "2rem",
                                    width: "2rem",
                                    borderRadius: "0.3rem",
                                    background: rgbaColorButtonFontColor,
                                }}
                            />
                            <span>{ButtonFontColorHexColor}</span>
                        </Stack>
                    </div>
                </Button>
            </div>
        </div>
    );

    const activatorButtonBGColor = (
        <div>
            <label>Button background Color</label>

            <div style={{ paddingTop: "3px" }}>
                <Button onClick={togglePopoverActiveButtonBGColor} disclosure>
                    <div>
                        <Stack spacing="tight">
                            <div
                                style={{
                                    height: "2rem",
                                    width: "2rem",
                                    borderRadius: "0.3rem",
                                    background: rgbaColorButtonBGColor,
                                }}
                            />
                            <span>{ButtonBGColorHexColor}</span>
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

        authService.getSettingCartPopup().then(response => {

            setIsLoading(false);

            if (response && response.data && response.data.status === "success") {

                if (response.data.data) {
                    const { isEnable } = response.data.data;

                    // const { headingFontColor, headingFontSize, titleFontColor, titleFontSize, contentFontColor, contentFontSize, buttonFontColor, buttonBackgroundColor, isEnable } = response.data.data;

                    // headingFontColor && handleHeadingFontColorHexColorChange(headingFontColor);
                    // headingFontSize && setHeadingFontSize((headingFontSize).toString());
                    // titleFontColor && handleTitleColorHexColorChange(titleFontColor);
                    // titleFontSize && setTitleFontSize((titleFontSize).toString());
                    // contentFontColor && handleContentColorHexColorChange(contentFontColor);
                    // contentFontSize && setContentFontSize((contentFontSize).toString());
                    // buttonFontColor && handleButtonFontColorHexColorChange(buttonFontColor);
                    // buttonBackgroundColor && handleButtonBGColorHexColorChange(buttonBackgroundColor);
                    isEnable ? setIsFirstButtonActive(true) : setIsFirstButtonActive(false);
                }
            }
            else {

                setActive({ isOpen: true, msg: "Get Setting details error !", isErr: true })

            }

        }).catch(err => {
            setIsLoading(false);
            setActive({ isOpen: true, msg: "Get Setting details error !", isErr: true })
            console.log("ERROR: ", err);
        })

    }

    function handleProductSettingSave() {

        setIsLoading(true);

        const data = {
            // "headingFontColor": HeadingFontColorHexColor,
            // "headingFontSize": parseInt(HeadingfontSize),
            // "titleFontColor": TitleColorHexColor,
            // "titleFontSize": parseInt(TitlefontSize),
            // "contentFontColor": ContentColorHexColor,
            // "contentFontSize": ContentfontSize,
            // "buttonFontColor": ButtonFontColorHexColor,
            // "buttonBackgroundColor": ButtonBGColorHexColor,
            "isEnable": isFirstButtonActive
        }

        authService.assignSettingCartPopup(data).then((response) => {

            setIsLoading(false);

            if (response && response.data && response.data.status === "success") {

                setActive({ isOpen: true, msg: "Successfully saved.", isErr: false });
                getProductSettings();

            } else {

                setActive({ isOpen: true, msg: "Something went wrong! Please try again.", isErr: true })

            }

        }).catch(err => {
            setIsLoading(false);
            setActive({ isOpen: true, msg: "Something went wrong! Please try again.", isErr: true })
            console.log("ERROR", err)
        })

    };

    let cartpopUp = `
    <div id="hemster-installation-modal" class="modal">
    <div class="modal-content">
        <div class="header" style="padding: 23px; padding-bottom: 0; height:53px;">
        <span class="close" onclick="document.getElementById('hemster-installation-modal').classList.remove('is_open')">
            <div style="font-size: 18px;font-weight: 600;color: #1F1E2C;">X</div>
        </span>
        </div>
        <div style="color: #1F1E2C; text-align: center; font-family: Montserrat, sans-serif; font-style: normal; font-weight: normal;font-size: 40px;line-height: 48px;font-feature-settings: 'pnum' on, 'lnum' on;">
                Get free tailoring!
        </div>
        <div class="grid" style="padding-top: 44px; margin-left: 0;display:flex">
            <div class="grid__item image" style="width:343px;margin: 0 48px 48px 48px;background: url(https://merchant.hemster.co/faherty/hemster_installation_image.jpg);height: 380px;padding-left: 0;background-size: cover;"></div>
              <div class="grid__item details" style="width:356px; padding: 30px 48px 80px 0;">
              <h2 style="color: #1F1E2C; text-align: start; font-size: 18px;font-weight: bold; font-family: Montserrat, sans-serif;font-style: normal;line-height: 24px;letter-spacing: 0.2em;text-transform: uppercase;font-feature-settings: 'pnum' on, 'lnum' on;"> 
                  Hemster FitKit
                  <br>
                 <span style="color: #B4B4B6; font-style: normal;font-weight: bold;font-size: 14px;line-height: 20px;">Free</span>
                 </h2>
              <p style="margin-top: 15px;margin-bottom:32px;font-family: Montserrat, sans-serif;font-style: normal;font-weight: normal;font-size: 16px;line-height: 24px;font-feature-settings: 'pnum' on, 'lnum' on;color: #1F1E2C;">
                  Tailor your new garments to your perfect fit for free. Simply add a Hemster FitKit to your order and <span style="text-decoration-line: underline;font-weight: bold;cursor:pointer;">book an appointment</span> with one of the Hemster’s fit experts.
                  </p>
              <input type="hidden" name="id" value="31652105355333" />
              <input type="hidden" id="quantity" name="quantity" value="1"/>
                
              <div style="display: flex;justify-content: space-between;">
                    <input type="submit" value="Add to cart" class="btn" style="background: #212E47; width:48%; height:44px;color:#fff;border: none;cursor:pointer;letter-spacing: 2px; font-size: 15px;" />
                    <input type="submit" value="Learn more" class="btn" style="background: #212E47; width:48%; height:44px;color:#fff;border: none;cursor:pointer;letter-spacing: 2px;font-size: 15px;" />
              </div>

              <div style="text-align:center;padding-top:18px;" onclick="document.getElementById('hemster-installation-modal').classList.remove('is_open')">
                    <span style="font-size: 16px;line-height: 24px;text-decoration-line: underline;font-feature-settings: 'pnum' on, 'lnum' on;color: #838386;cursor:pointer;">No, I don’t want free tailoring</span>
              </div>
            </div>
        </div>
      
  </div>

</div>

<style>
/* The Modal (background) */
#hemster-installation-modal.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 99999; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  opacity: 1;
}

#hemster-installation-modal.modal.is_open {
  display: block;
}

/* Modal Content/Box */
#hemster-installation-modal > .modal-content {
  background-color: #FFFFFF;
  margin: 5% auto; /* 15% from the top and centered */
  border-radius: 8px;
  width: 800px; /* Could be more or less, depending on screen size */
}

/* The Close Button */
#hemster-installation-modal .close {
  color: #B4B4B6;
  float: right;
  font-size: 12px;
}

#hemster-installation-modal .close:hover,
#hemster-installation-modal .close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

@media only screen and (max-width: 480px) {
  #hemster-installation-modal .grid__item.image {
    height: 250px !important;
  }
  .grid{
      display:block !important;
  }
}
@media only screen and (max-width: 830px) {
  #hemster-installation-modal > .modal-content {
    width: 80% !important; 
  }
  
  #hemster-installation-modal .grid__item.image {
    width: calc(100% - 96px) !important;
  }
  
  #hemster-installation-modal .grid__item.details {
    padding: 0px 48px 48px 48px !important; 
    width: 100% !important; 
  }

  .grid{
    display:block !important;
  }
}
</style>`

    return (
        <div>
            <br />
            <br />

            {isLoading ?
                <div className="setting-spinner">
                    <Spinner accessibilityLabel="Spinner example" size="large" />
                </div> :
                <>
                    <Form>

                        <FormLayout>

                            {/* <FormLayout.Group>
                                <div>
                                    <TextField label="Heading Font Size" onChange={(val) => { setHeadingFontSize(val) }} value={HeadingfontSize} type="number" min={0} suffix="px" />
                                </div>

                                <Popover
                                    active={popoverActiveHeadingFontColor}
                                    activator={activatorHeadingFontColor}
                                    onClose={togglePopoverActiveHeadingFontColor}>

                                    <Popover.Section>
                                        <ColorPicker
                                            onChange={handleHeadingFontColorChange}
                                            color={HeadingFontColor}
                                        />
                                    </Popover.Section>
                                    <Popover.Section>
                                        <TextField
                                            value={HeadingFontColorHexColor}
                                            label=""
                                            type="text"
                                            id="HeadingFontColorHexColor"
                                            onChange={handleHeadingFontColorHexColorChange}
                                        />
                                    </Popover.Section>
                                </Popover>

                            </FormLayout.Group>


                            <FormLayout.Group>
                                <div>
                                    <TextField label="Title Font Size" onChange={(val) => { setTitleFontSize(val) }} value={TitlefontSize} type="number" min={0} suffix="px" />
                                </div>

                                <Popover
                                    active={popoverActiveTitleColor}
                                    activator={activatorTitleColor}
                                    onClose={togglePopoverActiveTitleColor}>

                                    <Popover.Section>
                                        <ColorPicker
                                            onChange={handleTitleColorChange}
                                            color={TitleColor}
                                        />
                                    </Popover.Section>
                                    <Popover.Section>
                                        <TextField
                                            value={TitleColorHexColor}
                                            label=""
                                            type="text"
                                            id="TitleFontColorHexColor"
                                            onChange={handleTitleColorHexColorChange}
                                        />
                                    </Popover.Section>
                                </Popover>

                            </FormLayout.Group>


                            <FormLayout.Group>
                                <div>
                                    <TextField label="Content Font Size" onChange={(val) => { setContentFontSize(val) }} value={ContentfontSize} type="number" min={0} suffix="px" />
                                </div>

                                <Popover
                                    active={popoverActiveContentColor}
                                    activator={activatorContentColor}
                                    onClose={togglePopoverActiveContentColor}>

                                    <Popover.Section>
                                        <ColorPicker
                                            onChange={handleContentColorChange}
                                            color={ContentColor}
                                        />
                                    </Popover.Section>
                                    <Popover.Section>
                                        <TextField
                                            value={ContentColorHexColor}
                                            label=""
                                            type="text"
                                            id="ContentFontColorHexColor"
                                            onChange={handleContentColorHexColorChange}
                                        />
                                    </Popover.Section>
                                </Popover>

                            </FormLayout.Group>


                            <FormLayout.Group>

                                <Popover
                                    active={popoverActiveButtonBGColor}
                                    activator={activatorButtonBGColor}
                                    onClose={togglePopoverActiveButtonBGColor}>

                                    <Popover.Section>
                                        <ColorPicker
                                            onChange={handleButtonBGColorChange}
                                            color={ButtonBGColor}
                                        />
                                    </Popover.Section>
                                    <Popover.Section>
                                        <TextField
                                            value={ButtonBGColorHexColor}
                                            label=""
                                            type="text"
                                            id="ButtonBGColorHexColor"
                                            onChange={handleButtonBGColorHexColorChange}
                                        />
                                    </Popover.Section>
                                </Popover>

                                <Popover
                                    active={popoverActiveButtonFontColor}
                                    activator={activatorButtonFontColor}
                                    onClose={togglePopoverActiveButtonFontColor}>

                                    <Popover.Section>
                                        <ColorPicker
                                            onChange={handleButtonFontColorChange}
                                            color={ButtonFontColor}
                                        />
                                    </Popover.Section>
                                    <Popover.Section>
                                        <TextField
                                            value={ButtonFontColorHexColor}
                                            label=""
                                            type="text"
                                            id="ButtonFontColorHexColor"
                                            onChange={handleButtonFontColorHexColorChange}
                                        />
                                    </Popover.Section>
                                </Popover>

                            </FormLayout.Group> */}


                            <div className="popup-settings">
                                <TextStyle>Cart PopUp status</TextStyle>
                                <FormLayout.Group>
                                    <ButtonGroup segmented>
                                        <Button pressed={isFirstButtonActive} onClick={handleFirstButtonClick}>
                                            Enable
                                </Button>
                                        <Button pressed={!isFirstButtonActive} onClick={handleSecondButtonClick}>
                                            Disable
                                </Button>
                                    </ButtonGroup>
                                </FormLayout.Group>
                            </div>

                        </FormLayout>
                        <br />
                        <FormLayout>

                            <div>
                                <div style={{ cursor: "pointer", textDecoration: "underline" }}
                                    onClick={() => {

                                        document.getElementById("hemster-installation-modal").classList.add("is_open");

                                    }}>Click here for Preview</div><br />
                            </div>

                            <div dangerouslySetInnerHTML={{ __html: cartpopUp }}></div>

                        </FormLayout>
                    </Form>
                    <div className="action-btns">
                        <PageActions
                            primaryAction={{
                                content: 'Save',
                                onAction: handleProductSettingSave
                            }}
                            secondaryActions={[
                                {
                                    content: 'Cancel',
                                    destructive: true,
                                    onAction: getProductSettings
                                },
                            ]}
                        />
                    </div>
                </>}
            {isLoading && <Loading />}
            {toastMarkup}
        </div>
    );
}

export default CartPopup;

// import React from 'react';

// function CartPopup(props) {
//     return (
//         <div>
//             CartPopup settings.....
//         </div>
//     );
// }

// export default CartPopup;