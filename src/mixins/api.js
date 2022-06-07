const api = {
  data() {
    return {
      url: "http://localhost:8080",
      headers: {
        Accept: "application/json",
      },
    };
  },
  methods: {
    async login(formData) {
      let { email, password } = formData;
      console.log("trying to login!");
      console.log(`${this.url}/login`, email, password);

      let res = await fetch(`${this.url}/login`, {
        headers: this.headers,
        method: "POST",
        // mode: "cors",
        // cache: "no-cache",
        // credentials: "same-origin",
        // redirect: "follow", // manual, *follow, error
        // referrerPolicy: "no-referrer", // no-referrer
        body: JSON.stringify({ Email: email, Password: password }),
      });

      let data = await res.json();

      console.log({ res, data });
    },
  },
};

export default api;
