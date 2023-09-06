import { create } from "apisauce";

export const api = create({
    baseURL: "https://api.mybetfunds.com/api/",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });