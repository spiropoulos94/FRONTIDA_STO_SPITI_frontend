function WriteToStorage(state) {
  if (state) {
    window.sessionStorage.setItem("state", JSON.stringify(state));
  }
}

function ReadFromStorage() {
  let currentState = window.sessionStorage.getItem("state");

  if (currentState && currentState.length) {
    return JSON.parse(window.sessionStorage.getItem("state"));
  }
}

const Persister = (store) => {
  store.subscribe(async (mutation, state) => {
    await WriteToStorage(state);
    let currState = await ReadFromStorage();
    state = currState;
  });
};

export default Persister;
