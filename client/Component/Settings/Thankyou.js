import React, { useState, useEffect, useCallback } from 'react';
import * as authService from "../../services/authService";
import {
    FormLayout, Popover, ColorPicker, TextField, Button, Stack, hsbToHex, Form, RadioButton, PageActions, Toast, Loading, Spinner,
    rgbString,
    rgbToHsb,
    hsbToRgb,
    TextStyle
} from '@shopify/polaris';

function ThankYou(props) {

    //add background color-----------------------------------------

    const [isLoading, setIsLoading] = useState(false);

    //toast 
    const [active, setActive] = useState({ isOpen: false, msg: "", isErr: false });

    const toastMarkup = active.isOpen ? (
        <Toast content={active.msg} onDismiss={() => setActive({ isOpen: false, msg: "", isErr: false })} error={active.isErr ? true : false} />
    ) : null;

    const [type, setType] = useState('option1');

    const handleChangeType = useCallback(
        (_checked, newValue) => setType(newValue),
        [],
    );

    const [redirectURL, setRedirectURL] = useState("");

    const [HeadingfontSize, setHeadingFontSize] = useState("15");

    const [ContentfontSize, setContentFontSize] = useState("15");

    const [popoverActiveHeadingFontColor, setPopoverActiveHeadingFontColor] = useState(false);

    const [popoverActiveButtonBGColor, setPopoverActiveButtonBGColor] = useState(false);

    const [popoverActiveButtonFontColor, setPopoverActiveButtonFontColor] = useState(false);

    const [popoverActiveContentColor, setPopoverActiveContentColor] = useState(false);

    const [popoverActiveBGColor, setPopoverActiveBGColor] = useState(false);

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

    const togglePopoverActiveBGColor = useCallback(
        () =>
            setPopoverActiveBGColor((popoverActiveBGColor) => !popoverActiveBGColor),
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

    const [BGColor, setBGColor] = useState({
        hue: 0.0,
        brightness: 0.0,
        saturation: 0.0,
    });

    const rgbaColorButtonFontColor = rgbString(hsbToRgb(ButtonFontColor));

    const rgbaColorButtonBGColor = rgbString(hsbToRgb(ButtonBGColor));

    const rgbaColorFontColor = rgbString(hsbToRgb(HeadingFontColor));

    const rgbaColorContentColor = rgbString(hsbToRgb(ContentColor));

    const rgbaColorBGColor = rgbString(hsbToRgb(BGColor));


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


    const handleBGColorChange = (value) => {
        let hexColor = hsbToHex(value);
        setBGColorHexColor(hexColor);
        setBGColor(value);
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

    const [BGColorHexColor, setBGColorHexColor] = useState(
        hsbToHex(BGColor)
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

    const handleBGColorHexColorChange = (value) => {

        if (value.charAt(0) === "#" && value.length <= 7) {
            setBGColorHexColor(value);
            if (value.length === 7) {
                let rgbValue = hexToRgb(value);
                let hsba = rgbToHsb(rgbValue);
                setBGColor(hsba);
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

    const activatorBGColor = (
        <div>
            <label>Background Color</label>
            <div style={{ paddingTop: "3px" }}>
                <Button onClick={togglePopoverActiveBGColor} disclosure>
                    <div>
                        <Stack spacing="tight">
                            <div
                                style={{
                                    height: "2rem",
                                    width: "2rem",
                                    borderRadius: "0.3rem",
                                    background: rgbaColorBGColor,
                                }}
                            />
                            <span>{BGColorHexColor}</span>
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

        authService.getSettingThankYou().then(response => {

            setIsLoading(false);

            if (response && response.data && response.data.status === "success") {

                if (response.data.data) {

                    // const { displayType, headingFontColor, headingFontSize, contentFontColor, contentFontSize, buttonFontColor, buttonBackgroundColor, backgroundColor } = response.data.data;
                    const { displayType, redirectURL } = response.data.data;

                    displayType && setType(displayType);
                    redirectURL && setRedirectURL(redirectURL);
                    // headingFontColor && handleHeadingFontColorHexColorChange(headingFontColor);
                    // headingFontSize && setHeadingFontSize((headingFontSize).toString());
                    // contentFontColor && handleContentColorHexColorChange(contentFontColor);
                    // contentFontSize && setContentFontSize((contentFontSize).toString());
                    // buttonFontColor && handleButtonFontColorHexColorChange(buttonFontColor);
                    // buttonBackgroundColor && handleButtonBGColorHexColorChange(buttonBackgroundColor);
                    // backgroundColor && handleBGColorHexColorChange(backgroundColor);
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
            displayType: type,
            redirectURL,
            // "headingFontColor": HeadingFontColorHexColor,
            // "headingFontSize": parseInt(HeadingfontSize),
            // "contentFontColor": ContentColorHexColor,
            // "contentFontSize": parseInt(ContentfontSize),
            // "buttonFontColor": ButtonFontColorHexColor,
            // "buttonBackgroundColor": ButtonBGColorHexColor,
            // "backgroundColor": BGColorHexColor
        }

        authService.assignSettingThankYou(data).then((response) => {

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

    // const previewOption1 = `<img src="https://merchant.hemster.co/faherty/checkout_banner.png"/>`;

    // const previewOption2 = `<img src="https://merchant.hemster.co/faherty/checkout_banner_b.png"/>`


    const previewOption1 = `<div style="width: 60%;height: 216px;background: #F4EEED;border-radius: 4px;font-family: Montserrat, sans-serif;font-feature-settings: 'pnum' on, 'lnum' on;font-size: 16px;">
        <div>
            <div
                style="position:relative;top: 20px;cursor: pointer;font-weight: 600;line-height: 24px;color: #1F1E2C;text-align: center;">

                <img src="${window.location.origin}/hook/assets/thankyou_page.gif" style="height: 60px;/* margin-right: 3px; */">
                <div>
                    <div
                        style="font-family: Canela;font-style: normal;font-weight: normal;font-size: 30px;line-height: 30px;align-items: center;font-feature-settings: 'pnum' on, 'lnum' on;">
                        Claim your free tailoring</div>
                    <div
                        style="font-family: 'Circular-Loom';font-style: normal;font-weight: normal;font-size: 14px;align-items: center;font-feature-settings: 'pnum' on, 'lnum' on;color: #525258;">
                        Find your perfect fit today with Hemster.</div>
                </div>
                <input type="submit" value="GET STARTED" class="btn"
                    style="background: #212E47;height:44px;color:#fff;border: none;cursor:pointer;padding: 2px 13px;top: 11px;font-size: 11px;letter-spacing: 2px;margin: 5px;max-width: fit-content;">
            </div>
        </div>
    </div>`

    const previewOption2 = `<style>
        .ty-main{
            width: 60%;height: 104px;background: #F4EEED;border-radius: 4px;font-family: Montserrat, sans-serif;font-feature-settings: 'pnum' on, 'lnum' on;font-size: 16px;
        }
        .ty-inner{
            position:relative;left: 9px;display: flex;top: 22px;cursor: pointer;font-weight: 600;line-height: 24px;color: #1F1E2C;
        }
        .ty-image{
            height: 60px;margin-right: 3px;
        }
        .ty-image-inner{
            position: absolute;left: 70px;top: 0px;
        }
        .ty-text{
            font-family: Canela;font-style: normal;font-weight: normal;font-size: 22.5px;line-height: 32px;display: flex;align-items: center;font-feature-settings: 'pnum' on, 'lnum' on;
        }
        .ty-text-sub{
        font-family: 'Circular-Loom';font-style: normal;font-weight: normal;font-size: 14px;display: flex;align-items: center;font-feature-settings: 'pnum' on, 'lnum' on;color: #525258;
        }
        .ty-button{
            background: #212E47;height:44px;color:#fff;border: none;cursor:pointer;position: absolute;right: 24px;padding: 2px 13px;top: 11px;font-size: 11px;letter-spacing: 2px;
        }
        @media only screen and (max-width: 768px) {
            .ty-main {
                height: 221px;
                text-align:center;  
            }
            .ty-text{
                display: block;
            }
            .ty-text-sub{
                display: block;
            }
            .ty-inner {
                display: block;
                position: relative;
                left: unset;
            }
            .ty-image-inner{
                position: unset;
                width: fit-content;
                margin: auto;
            }
            .ty-button {
                position: unset;
                margin-top: 10px;
                padding: 2px 13px;
                max-width: fit-content;
            }
        }
        </style>
        <div class="ty-main">
        <div>
            <div
                class="ty-inner">
                <img class="ty-image" src="${window.location.origin}/hook/assets/thankyou_page.gif" >
                <div class="ty-image-inner">
                    <div class="ty-text">
                        Don’t forget!
                    </div>
                    <div class="ty-text-sub">
                        Book your free fitting with Hemster today.</div>
                </div>
                <input type="submit" value="GET STARTED" class="btn ty-button">
            </div>
        </div>
    </div>`

    return (
        <div>
            <br />
            <br />

            {isLoading ?
                <div className="setting-spinner">
                    <Spinner accessibilityLabel="Spinner example" size="large" />
                </div> :
                <>
                    {/* <Form>
                        <FormLayout>

                            <FormLayout.Group>
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

                            </FormLayout.Group>

                            <FormLayout.Group>
                                <Popover
                                    active={popoverActiveBGColor}
                                    activator={activatorBGColor}
                                    onClose={togglePopoverActiveBGColor}>

                                    <Popover.Section>
                                        <ColorPicker
                                            onChange={handleBGColorChange}
                                            color={BGColor}
                                        />
                                    </Popover.Section>
                                    <Popover.Section>
                                        <TextField
                                            value={BGColorHexColor}
                                            label=""
                                            type="text"
                                            id="BGColorHexColor"
                                            onChange={handleBGColorHexColorChange}
                                        />
                                    </Popover.Section>
                                </Popover>

                            </FormLayout.Group>

                            <FormLayout.Group>
                                <div className="type-radio">
                                    <TextStyle>Type</TextStyle><br /><br />
                                    <Stack>
                                        <RadioButton
                                            label="Option 1"
                                            checked={type === 'option1'}
                                            id="option1"
                                            name="type"
                                            onChange={handleChangeType}
                                        />
                                        <RadioButton
                                            label="Option 2"
                                            id="option2"
                                            name="type"
                                            checked={type === 'option2'}
                                            onChange={handleChangeType}
                                        />
                                        <RadioButton
                                            label="Option 3"
                                            id="option3"
                                            name="type"
                                            checked={type === 'option3'}
                                            onChange={handleChangeType}
                                        />
                                        <RadioButton
                                            label="Option 4"
                                            id="option4"
                                            name="type"
                                            checked={type === 'option4'}
                                            onChange={handleChangeType}
                                        />
                                    </Stack>
                                </div>
                            </FormLayout.Group>

                        </FormLayout>
                    </Form> */}

                    <Form>
                        <FormLayout>

                            <FormLayout>
                                <div className="ty-url">
                                    <TextField
                                        value={redirectURL}
                                        label="Redirect URL:"
                                        type="text"
                                        id="url"
                                        onChange={(val) => setRedirectURL(val)}
                                    />
                                </div>

                            </FormLayout>

                            <div className="type-radio">
                                <TextStyle>Type:</TextStyle><br /><br />
                                <Stack>
                                    <RadioButton
                                        label="Option 1"
                                        checked={type === 'option1'}
                                        id="option1"
                                        name="type"
                                        onChange={handleChangeType}
                                    />
                                    <RadioButton
                                        label="Option 2"
                                        id="option2"
                                        name="type"
                                        checked={type === 'option2'}
                                        onChange={handleChangeType}
                                    />
                                </Stack>
                            </div>
                        </FormLayout>


                        <br />
                        <FormLayout>
                            {/* <TextStyle>Preview:</TextStyle> */}
                            <TextStyle>Preview:</TextStyle>

                            {type === "option1" && <div dangerouslySetInnerHTML={{ __html: previewOption1 }}></div>}
                            {type === "option2" && <div dangerouslySetInnerHTML={{ __html: previewOption2 }}></div>}

                            {/* <td dangerouslySetInnerHTML={{__html: this.state.actions}} /> */}

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

                </>
            }{isLoading && <Loading />}
            {toastMarkup}
        </div>
    );
}

export default ThankYou;