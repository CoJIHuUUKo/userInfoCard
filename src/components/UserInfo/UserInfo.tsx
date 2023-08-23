import { IUsers } from "../../api/Users";
import "./UserInfo.css";

const UserInfoModal = ({
  avatar,
  firstName,
  lastName,
  age,
  city,
  contacts,
}: IUsers) => {
  return (
    <div className="UserInfoModalRoot">
      <img src={avatar} className="UserInfoModalAvatar"></img>
      <div>
        <h1 className="UserInfoModalMargin">
          {`Имя и Фамилия: ${firstName} ${lastName}`}
        </h1>
        <h2 className="UserInfoModalMargin">{`Возраст: ${age}`}</h2>
        <h2 className="UserInfoModalMargin">{`Город: ${city}`}</h2>
        <h2 className="UserInfoModalMargin">{`Контакты: ${contacts}`}</h2>
      </div>
    </div>
  );
};

export default UserInfoModal;
