function _validatePositiveNumber(num: number) {
  return num > 0;
}

export function validateNumberField(num: number) {
  return !_validatePositiveNumber(num) && 'Is not positive number';
}