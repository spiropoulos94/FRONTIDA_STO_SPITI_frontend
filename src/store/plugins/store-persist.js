import { encrypt, decrypt } from "@/store/encryption.js";

function WriteToStorage(state) {
  if (state) {
    window.localStorage.setItem("state", encrypt(JSON.stringify(state)));
  }
}

function ReadFromStorage() {
  let currentState = decrypt(window.localStorage.getItem("state"));

  if (currentState && currentState.length) {
    return JSON.parse(decrypt(window.localStorage.getItem("state")));
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
