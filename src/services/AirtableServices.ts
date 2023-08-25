import axios from 'axios';

const airTable = axios.create({
  baseURL: 'https://api.airtable.com/v0',
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_PERSONAL_TOKEN}`,
  },
});

export const getListRecords = async () => {
  const response = await airTable.get(`/appg6SCyTinYnDivA/tblKIXyCMudyEQXml`);
};

export const createRecord = async (recordData = {}) => {
  const config = {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_PERSONAL_TOKEN}`,
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.post(
    `https://api.airtable.com/v0/appg6SCyTinYnDivA/tblKIXyCMudyEQXml`,
    recordData,
    config
  );

  return response;
};
