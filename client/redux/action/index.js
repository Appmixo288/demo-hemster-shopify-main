// import * as authService from "../../services/authService";
export const PAGE_INFO = "PAGE_INFO";
export const FAILED = "FAILED";

export const pageInfoAction = (name) => {

    return (dispatch) => {

        dispatch({
            type: PAGE_INFO,
            data: name
        });

    }
};