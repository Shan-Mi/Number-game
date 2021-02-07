import axios from "axios";

const URL = "http://numbersapi.com/";

export const getOneMath = (num: number) => axios.get(`${URL}${num}/math`);
export const getOneTrivia = (num: number) => axios.get(`${URL}${num}`);
export const getOneDate = (month: number, date: number) =>
  axios.get(`${URL}${month}/${date}/date`);

export const getRandom = (type: string) => axios.get(`${URL}type`);
