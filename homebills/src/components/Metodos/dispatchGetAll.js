import {
    displayAlertError
} from "./displayAlertError";
const dispatchGetAll = async (component, actionType, page) => {
    try {
        await component.$store.dispatch({
            type: actionType,
            page
        })
    } catch (error){
        displayAlertError(component, error);
    }
}

export {
    dispatchGetAll
};