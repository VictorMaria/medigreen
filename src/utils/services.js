import axios from 'axios';

const fetchDrugList = async () => {
  const response = await axios.get(
    'https://www.mocky.io/v2/5c3e15e63500006e003e9795'
  );
  const drugList = response.data.products;
  return drugList;
};

export default fetchDrugList;
