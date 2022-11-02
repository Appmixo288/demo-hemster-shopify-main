import { FAILED, PAGE_INFO } from "../action";

const INITIAL_STATE = {
    error_msg: {},
    page_info: { name: "fitkit" }
};

const handleReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case PAGE_INFO:
            {
                console.log("action.data---", action.data);
                return Object.assign({}, state, { page_info: { name: action.data } });
            }
        case FAILED:
            {
                return Object.assign({}, state, { error_msg: action.data.error_msg });
            }

        default:
            return state;
    }
}
export default handleReducer;    