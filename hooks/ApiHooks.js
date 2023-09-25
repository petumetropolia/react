import { useState, useEffect } from "react";
import { apiUrl } from "../utils/app-config";
import { doFetch } from "../utils/functions";

const useMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);

  const loadMedia = async () => {
    try {
      const json = await doFetch(apiUrl + 'media');
      //console.log(json)
      const mediaFiles = await Promise.all(
        json.map(async (item) => {
          const fileData = await doFetch(apiUrl + 'media/' + item.file_id);
          //console.log('filedata', fileData);
          return fileData;
        }),
      );
      setMediaArray(mediaFiles);
    } catch (error) {
      console.error('loadMedia failed', error);
    }
  };

  useEffect(() => {
    loadMedia();
  }, []);
  return { mediaArray };
};

const useAuthentication = () => {

  const postLogin = async (user) => {
    try {
      console.log('uuseri', user, apiUrl + "login");
      return await doFetch(apiUrl + "login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(user)


      });
    } catch (e) {
      console.error('postLogin error: ', e);

    }

  };
  return { postLogin };
};

const useUser = () => {

  const getUserByToken = async (token) => {

    const options = {
      method: 'GET',
      headers: { 'x-access-token': token },
    };

    return await doFetch(apiUrl + 'users/user', options);
  };

  const postUser = async (userData) => {
    console.log("userData: ", userData);
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    };

    return await doFetch(apiUrl + 'users', options);
  };

  const checkUserName = async (username) => {
    try{
      const response = await doFetch(apiUrl + 'users/username/' + username);
      return response.available;
    }catch{
      throw new Error('checkUserName Error', error.message)
    }
  };

  return { getUserByToken, postUser, checkUserName };
};

const useTag = () => {
  const getFilesByTag = async (tag) => {
    try {
      return await doFetch(apiUrl + 'tags/' + tag);
    } catch (error) {
      throw new Error('getFilesByTag error: ', error.message);
    }
  };
  return {getFilesByTag};
};

export { useMedia, useAuthentication, useUser, useTag };