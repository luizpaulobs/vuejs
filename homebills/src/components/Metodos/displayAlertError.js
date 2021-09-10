const displayAlertError = (component, error) => {
    component.error = true;
    component.messageError = error;
}
export {displayAlertError};