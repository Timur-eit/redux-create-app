// eslint-disable-next-line import/no-anonymous-default-export
export default values => {
  const warnings = {}
  if (values.age < 19) {
    warnings.age = 'Hmm, you seem a bit young...'
  }
  return warnings
}