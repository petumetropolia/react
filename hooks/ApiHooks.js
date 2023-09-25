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
