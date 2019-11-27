import axios from "axios";

export function login({ commit }, user) {
  return new Promise((resolve, reject) => {
    commit("auth_request");
    axios({
      url: "http://192.168.2.52:8080/api/v1/users/login",
      data: user,
      method: "POST"
    })
      .then(resp => {
        const token = resp.data.data.tokens.token;
        const user = resp.data.data.user;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        axios.defaults.headers.common["Authorization"] = token;
        commit("auth_success", {
          token,
          user
        });
        resolve(resp);
      })
      .catch(err => {
        commit("auth_error");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        reject(err);
      });
  });
}

export function register({ commit }, user) {
  return new Promise((resolve, reject) => {
    commit("auth_request");
    axios({
      url: "http://192.168.2.52:8080/api/v1/users/new",
      data: user,
      method: "POST"
    })
      .then(resp => {
        console.log(resp);
        // const token = resp.data.data.tokens.token;
        // const user = resp.data.data.user;
        // localStorage.setItem("token", token);
        // localStorage.setItem("user", JSON.stringify(user));
        // axios.defaults.headers.common["Authorization"] = token;
        // commit("auth_success", {
        //   token,
        //   user
        // });
        resolve(resp);
      })
      .catch(err => {
        commit("auth_error");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        reject(err);
      });
  });
}

export function logout({ commit }) {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  commit("logout");
}
