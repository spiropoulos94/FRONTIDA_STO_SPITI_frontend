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
    checkToken(response) {
      if (response.code === 401 || response.message === "unauthorized") {
        this.$store.commit("signOut");
      }
    },
    async login(formData) {
      let { Email, Password } = formData;

      let res = await fetch(`${this.url}/login`, {
        headers: this.headers,
        method: "POST",
        // mode: "cors",
        // cache: "no-cache",
        // credentials: "same-origin",
        // redirect: "follow", // manual, *follow, error
        // referrerPolicy: "no-referrer", // no-referrer
        body: JSON.stringify({ Email: Email, Password: Password }),
      });

      let data = await res.json();
      this.checkToken(data);
      return data;
    },
    async adminCreateuser(formData) {
      const { Name, Surname, AFM, AMKA, Role_id } = formData;
      let Profession = {
        Role_id,
      };
      this.headers["Authorization"] = "Bearer " + this.api_token;
      let res = await fetch(`${this.url}/users/admin-create`, {
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
      this.checkToken(data);
      return data;
    },

    async createReport(formData) {
      // const {User_id, Patient_id, Profession, } = formData

      let finalReportFormData = {};

      finalReportFormData["User_id"] = formData.User_id;

      console.log({ formData });
      this.headers["Authorization"] = "Bearer " + this.api_token;
    },

    async completeSignUp(formData) {
      let { ID: User_id, Email, Password } = formData;
      let res = await fetch(`${this.url}/complete-signup`, {
        headers: this.headers,
        method: "POST",
        // mode: "cors",
        cache: "no-cache",
        // credentials: "include",
        // redirect: "follow", // manual, *follow, error
        // referrerPolicy: "no-referrer", // no-referrer
        body: JSON.stringify({ User_id, Email, Password }),
      });

      let data = await res.json();
      this.checkToken(data);
      return data;
    },

    async getUser(userID) {
      this.headers["Authorization"] = "Bearer " + this.api_token;
      let res = await fetch(`${this.url}/users/${userID}`, {
        headers: this.headers,
      });
      let data = await res.json();
      this.checkToken(data);
      console.log("data apo to getUser request", { data });
      return data;
    },
    async getUserHash(userID) {
      this.headers["Authorization"] = "Bearer " + this.api_token;
      let res = await fetch(`${this.url}/users/hash/${userID}`, {
        headers: this.headers,
      });
      let data = await res.json();
      this.checkToken(data);
      return data;
    },
    async listUsers() {
      this.headers["Authorization"] = "Bearer " + this.api_token;
      let res = await fetch(`${this.url}/users/`, {
        headers: this.headers,
      });
      let data = await res.json();
      this.checkToken(data);
      return data;
    },
  },
};

export default api;
