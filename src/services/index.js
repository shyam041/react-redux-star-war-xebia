import baseURL from "./ApiConfig/swapi";

const userServices = { login, logout, search };

function login(username, password) {
  return fetch(`${baseURL}people/?search=${username}`)
    .then(handleResponse)
    .then((userData) => {
      if (userData[0]["birth_year"] === password) {
        //store user details local storage to keep user logged in between page refreshes
        localStorage.setItem("user", JSON.stringify(username));
        return username;
      }
      return Promise.reject("Wrong username or password");
    });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("user");
}

function search(query) {
  return fetch(`${baseURL}planets/?search=${query}`)
    .then(handleResponse)
    .then((response) => {
      //console.log(response);
      return response;
    });
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        window.location.reload(true);
      }
      const error = (data && data.message) || response.statusText;
      console.log(error);
      return Promise.reject(error);
    }
    return data["results"];
  });
}

export default userServices;
