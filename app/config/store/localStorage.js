const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
}

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {}
}

export {
  loadState,
  saveState,
};
