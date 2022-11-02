import React, { useEffect, useState } from 'react';
import { Button, Card, Icon, Page, Banner } from '@shopify/polaris';
import FitkitProduct from './FitkitProduct';
import AddProducts from './AddProducts';
import { useSelector, useDispatch } from 'react-redux';
import * as AllAction from '../../redux/action/index';
import { MobileChevronMajor } from '@shopify/polaris-icons';
import * as authService from "../../services/authService";

function UpsellIndex(props) {

    const dispatch = useDispatch();

    const [active, setActive] = useState(true);

    useEffect(() => {
        getAppStatus();
    }, []);

    const page_info = useSelector(state => state.allReducer.page_info);

    function handlePage(page) {
        dispatch(AllAction.pageInfoAction(page));
    }

    function getAppStatus() {

        authService.getAppStatus().then((response) => {

            if (response && response.data && response.data.data && response.data.data.shopStatus) {

                let { isAppEnable } = response.data.data.shopStatus;
                isAppEnable ? setActive(true) : setActive(false);

            } else {
                setActive(false);
            }

        }).catch(err => {

            console.log("ERROR: ", err);

        });

    }

    return (
        <Page>

            {active === false && <>
                <Banner
                    title="Current app status is disabled."
                    status="critical">
                    <p>
                        To enable it go to app settings, Click on Enable button.
                    </p>
                </Banner>
                <br />
            </>
            }

            {/* <div className="am-add-product">
                {page_info && page_info.name === "fitkit" ?
                    <Button onClick={() => handlePage("addproducts")} primary> Create FitKit</Button> :
                    <Button onClick={() => handlePage("fitkit")} primary>

                        <span className="back-icon">
                            <Icon source={MobileChevronMajor} />
                            <span>FitKit Products</span>
                        </span>

                    </Button>}
            </div>

            <div>
                {page_info && page_info.name === "fitkit" ? <FitkitProduct /> : <AddProducts />}

            </div> */}
            <div>
                <AddProducts />
            </div>
        </Page>
    );
}

export default UpsellIndex;