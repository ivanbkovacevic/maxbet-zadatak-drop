import style from "./UserItem.module.scss";
export type UserProps = {
  name: string;
  email: string;
};

const UserItem = ({ name, email }: UserProps) => {
  return (
    <div className={style.wrapper}>
      <span>{name}</span>
      <span>{email}</span>
    </div>
  );
};

export default UserItem;
