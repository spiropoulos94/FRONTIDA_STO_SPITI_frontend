const api = {
  data() {
    return {
      url: "http://localhost:8080",
      headers: {
        Accept: "application/json",
      },
    };
  },
  computed: {
    api_token() {
      return this.$store.state.user_data.token;
    },
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

      return data;
    },
    async adminCreateuser(formData) {
      console.log(formData);
      const { Name, Surname, AFM, AMKA, Role_id } = formData;
      let Profession = {
        Role_id,
      };
      this.headers["Authorization"] = "Bearer " + this.api_token;
      console.log({ headers: this.headers });
      let res = await fetch(`${this.url}/user/admin-create`, {
        headers: this.headers,
        method: "POST",
        // mode: "cors",
        cache: "no-cache",
        // credentials: "include",
        // redirect: "follow", // manual, *follow, error
        // referrerPolicy: "no-referrer", // no-referrer
        body: JSON.stringify({ Name, Surname, AFM, AMKA, Profession }),
      });

      let data = await res.json();
      console.log({ data });

      return data;
    },
  },
};

export default api;
