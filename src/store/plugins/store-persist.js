function WriteToStorage(state) {
  if (state) {
    window.localStorage.setItem("state", JSON.stringify(state));
  }
}

function ReadFromStorage() {
  let currentState = window.localStorage.getItem("state");

  if (currentState && currentState.length) {
    return JSON.parse(window.localStorage.getItem("state"));
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
