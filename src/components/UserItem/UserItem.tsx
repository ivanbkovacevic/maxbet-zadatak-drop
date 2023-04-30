import style from "./UserItem.module.scss";
export type UserProps = {
  name: string;
  email: string;
  id:number;
};

const UserItem = ({ name, email, id }: UserProps) => {
  return (
    <div className={style.wrapper}>
      <span>id:{id}</span>
      <span>{name}</span>
      <span>{email}</span>
    </div>
  );
};

export default UserItem;
