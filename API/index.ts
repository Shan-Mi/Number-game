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
  try {
    const { data } = await axios.get(`${URL}${num}`);
    return data;
  } catch (e) {
    console.error(e);
  }
};
export const getOneDate = async (month: number, date: number) => {
  try {
    const { data } = await axios.get(`${URL}${month}/${date}/date`);
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const getRandom = async (type: string) => {
  try {
    const { data } = await axios.get(`${URL}type`);
    return data;
  } catch (e) {
    console.error(e);
  }
};
