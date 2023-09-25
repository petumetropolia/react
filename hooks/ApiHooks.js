const apiUrl = "https://media.mw.metropolia.fi/wbma/media";

const useMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);

  useEffect(() => {
    loadMedia();
  }, []);

  const loadMedia = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();

      const allData = await Promise.all(
        array.map(async (item) => {
          const response = await fetch(url + item.id);
          const json = await response.json();
          return json;
        })
      );

      setMediaArray(allData);
    } catch (e) {
      console.error(e);
    }
  };

  return {mediaArray};
};

export { useMedia };
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

export { useMedia };