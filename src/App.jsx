import "./App.css";

function App() {
  const handelAddUser = (event) => {
    event.preventDefault();

    const form = new FormData(event.target);
    const name = form.get("name");
    const email = form.get("email");

    const user = { name, email };
    console.log(user);

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
          alert("user added successful");
          form.reset();
        }
      });
  };

  return (
    <>
      <h1>simple-curd-server</h1>
      <form onSubmit={handelAddUser}>
        <input type="text" name="name" />
        <br />
        <input type="text" name="email" />
        <br />
        <input type="submit" value="add user" />
      </form>
    </>
  );
}

export default App;
