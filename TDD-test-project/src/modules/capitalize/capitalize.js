function capitalize(word) {
  if (typeof word === 'string' || word instanceof String) {
    return word.toUpperCase();
  }
  return null;
}
export { capitalize };
