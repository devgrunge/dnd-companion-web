import axios from "axios";
const token = "fakeExampleToken";

export default axios.create({
  baseURL: "http://localhost:3333/register",
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
