import { WebAuth } from 'auth0-js';

const auth0 = new WebAuth({
  domain: 'dev-lpi33by0.auth0.com',
  clientID: 'f1iKVpGr8eXs8g5fLLLREh1Xs6qUN3eV',
  redirectUri: 'http://localhost:7890/callback',
  responseType: 'token id_token',
  scope: 'openid profile'
});

export const login = () => {
  auth0.authorize();
};

export const handleAuth = () => {
  return new Promise((resolve, reject) => {
    auth0.parseHash((error, results) => {
      if(results && results.accessToken && results.id) {
        auth0.client.userInfo(results.accessToken, (err, profile) => {
          if(err) return reject('Could not get profile');
          resolve({
            username: profile.name,
            token: results.accessToken,
            image: profile.picture
          });
        });
      } else {
        reject('Could not login');
      }

    });
  });
};
