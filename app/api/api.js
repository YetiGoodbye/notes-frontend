import doRequest from "./xhr";

const fetchLogon = () => doRequest(
  BASE + API_PATH + LOGON_STATE_PATH,
  HTTP_GET
);

const urlencode = (obj) => ( Object.keys(obj)
  .map( key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}` )
  .join('&')
);

  

const fetchData = () => doRequest.then (
  json => normalizeData(json),
  error => console.log(error)
);

const normalizeData = () => {

};


const sendLogin = (login, password) => {
  
  const requestBody = urlencode({login, password});

  const requestHeaders = {
    'Content-Type': 'application/x-www-form-urlencoded'
  };

  return doRequest(
    BASE + API_PATH + LOGIN_PATH,
    HTTP_POST,
    requestBody,
    requestHeaders
  );
};


const sendLogout = () =>  doRequest(
  BASE + API_PATH + LOGOUT_PATH,
  HTTP_GET
);


const retrieveLogonLoggedIn = (json) => !!json.user;
const retrieveLogonName = (json) => json.user ? json.user.name : null;

const fetchNote = (id) => doRequest(
  BASE + API_PATH + NOTES_PATH + '/' + id,
  HTTP_GET
)

const fetchIndexNote = () => doRequest(
  BASE + API_PATH + NOTES_PATH,
  HTTP_GET
);

export {
  fetchLogon,
  sendLogin,
  sendLogout,
  retrieveLogonName,
  retrieveLogonLoggedIn,
  fetchNote,
  fetchIndexNote,
};
