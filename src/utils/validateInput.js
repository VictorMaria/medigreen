const stringPattern = /^[a-zA-Z0-9 ]+$/;
const integerPattern = /^[0-9]+$/;
const decimalPattern = /^[0-9]+\.[0-9]+$/;

const validateInput = (nameEntered, priceEntered) => {
  if (!nameEntered.match(stringPattern)) {
    return false;
  } else if (
    !priceEntered.match(decimalPattern) &&
    !priceEntered.match(integerPattern)
  ) {
    return false;
  } else {
    return true;
  }
};

export default validateInput;
