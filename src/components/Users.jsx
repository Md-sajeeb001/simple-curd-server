import { useLoaderData } from "react-router-dom";

const Users = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h2>{data.length}</h2>
      <div>
        {data.map((user) => (
          <p key={user._id}>
            {user.name} : email: {user.email}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
