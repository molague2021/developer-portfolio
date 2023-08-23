import axios from 'axios';

const airTable = axios.create({
  baseURL: 'https://api.airtable.com/v0',
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_PERSONAL_TOKEN}`,
  },
});

export const getListRecords = async () => {
  const response = await airTable.get(`/appg6SCyTinYnDivA/tblKIXyCMudyEQXml`);
  console.log(response);
};

export const createRecord = async (recordData = {}) => {
  const config = {
    headers: {
      Authorization: `Bearer patpiQoinPhLy9rPX.fbed4f59349e9823715b392aa6a92b44d79629a7444c40022aa034267f61a1c7`,
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.post(
    `https://api.airtable.com/v0/appg6SCyTinYnDivA/tblKIXyCMudyEQXml`,
    recordData,
    config
  );

  return response.data;
};
