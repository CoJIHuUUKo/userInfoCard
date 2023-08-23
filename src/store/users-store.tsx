import { makeAutoObservable, runInAction } from "mobx";
import { IUsers, createUser, getUsers } from "../api/Users";
import { IFormValues } from "../components/FormInfoUser/FormInfoUser";

class UsersStore {
  users: IUsers[] = [];
  isLoading = false;
  isCreateLoading = false;
  constructor() {
    makeAutoObservable(this);
  }

  createUserAction = async (values: IFormValues) => {
    try {
      this.isCreateLoading = true;
      await createUser(values);
      runInAction(() => {
        this.isCreateLoading = false;
      });
    } catch (error) {
      this.isCreateLoading = false;
      throw error;
    }
  };

  getUsersAction = async () => {
    try {
      this.isLoading = true;
      const responce = await getUsers();
      runInAction(() => {
        this.users = responce;
        this.isLoading = false;
      });
    } catch (error) {
      this.isLoading = false;
    }
  };
}

export default new UsersStore();
