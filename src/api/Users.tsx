import axios from "axios";
import { IFormValues } from "../components/FormInfoUser/FormInfoUser";

export interface IUsers {
  id: number;
  avatar: string;
  firstName: string;
  lastName: string;
  age: number;
  city: string;
  contacts: string | number;
}

export const createUser = async (values: IFormValues) =>
  await axios.post("http://localhost:3000/users", values);

export const getUsers = async () =>
  (await axios.get<IUsers[]>("http://localhost:3000/users")).data;
