import { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import UserCard from "../UserCard/UserCard";
import usersStore from "../../store/users-store";
import ModalLayout from "../ModalLayout/ModalLayout";
import UserInfo from "../UserInfo/UserInfo";
import Button from "../Button/Button";
import FormInfoUser, { IFormValues } from "../FormInfoUser/FormInfoUser";
import type { IUsers } from "../../api/Users";
import "../MainPage/MainPage.css";

const MainPage = observer(() => {
  const { createUserAction, getUsersAction, users } = usersStore;

  const [modalActiveInfo, setModalActiveInfo] = useState(false);
  const [modalActiveForm, setModalActiveForm] = useState(false);

  const [selectedUser, setSelectedUser] = useState<IUsers | null>(null);

  useEffect(() => {
    getUsersAction();
  }, []);

  const changeUser = useCallback(
    (id: number) => {
      const val = users.find((item) => item.id === id);
      setSelectedUser(val as IUsers);
      setModalActiveInfo(true);
    },
    [users]
  );

  const onCreateFormSubmit = async (values: IFormValues) => {
    try {
      await createUserAction(values);
      alert("Success!");
      setModalActiveForm(false);
    } catch (error) {
      alert("Error!");
    }
  };

  return (
    <div className="mainPage">
      <div className="mainPageBody">
        <div className="MainPageButton">
          <Button onClick={() => setModalActiveForm(true)}>
            Добавить пользователя
          </Button>
        </div>
        {users.map((userCard) => (
          <UserCard {...userCard} onInfoClick={changeUser} key={userCard.id} />
        ))}
      </div>
      <div>
        <ModalLayout active={modalActiveInfo} setActive={setModalActiveInfo}>
          {selectedUser && <UserInfo {...selectedUser} />}
        </ModalLayout>
        <ModalLayout active={modalActiveForm} setActive={setModalActiveForm}>
          <FormInfoUser onSubmit={onCreateFormSubmit} />
        </ModalLayout>
      </div>
    </div>
  );
});

export default MainPage;
