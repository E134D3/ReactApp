import styles from "./Profile.module.css";

const Profile = (props) => {
  let user = props.function();
  console.log(user);
  return (
    <div className="row">
      <div className="col-sm-4">
        <img className="img-fluid" src={user.avatar} alt="" />
      </div>
      <div className="col-sm-8">
        <h1 className={styles.about}>
          {user.name} {user.lastname}
        </h1>
        <h2 style={{ backgroundColor: "lightblue" }}>{user.about}</h2>
        <h3>E-mail: {user.email}</h3>
        <p className={styles.id}>Id: {user.id}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex saepe
          illum quidem culpa nihil temporibus. Est ab quam repellat illo
          dignissimos? Voluptatibus numquam cupiditate provident sequi. Harum
          obcaecati dolorem nam.
        </p>
      </div>
    </div>
  );
};


export default Profile;