import { memo } from "react";
import Button from "../Button/Button";
import "../UserCard/UserCard.css";

export interface IUserCard {
  id: number;
  avatar: string;
  firstName: string;
  lastName: string;
  onInfoClick: (id: number) => void;
}

const UserCard = memo(
  ({ id, avatar, firstName, lastName, onInfoClick }: IUserCard) => {
    return (
      <div className="UserCardRoot">
        <div className="UserCardContainerAvatar">
          <img src={avatar} alt="avatar" className="UserCardAvatar" />
          <span className="UserCardName">
            {firstName} {lastName}
          </span>
        </div>
        <div className="UserCardContainerButton">
          <Button onClick={() => onInfoClick(id)} className="UserCardButton">
            Подробная информация
          </Button>
        </div>
      </div>
    );
  }
);

export default UserCard;
