import axios from "axios";

const URL = "http://numbersapi.com/";

export const getOneMath = async (num: number): Promise<any> => {
  try {
    const { data } = await axios.get(`${URL}${num}/math`);
    return data;
  } catch (e) {
    console.log(e);
  }
};
export const getOneTrivia = async (num: number) => {
  const { data } = await axios.get(`${URL}${num}`);
  return data;
};
export const getOneDate = async (month: number, date: number) => {
  const { data } = await axios.get(`${URL}${month}/${date}/date`);
  return data;
};

export const getRandom = async (type: string) => {
  const { data } = await axios.get(`${URL}type`);
  return data;
};
