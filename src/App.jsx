import './App.css'

function App() {

  const handelAddUser = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);
    form.reset()
    
    fetch('http://localhost:5000/users',{
      method: "POST",
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }

  return (
    <>
      <h1>SIMPLE CURD</h1>

      <form onSubmit={handelAddUser}>
        <input type="text" name="name" id='' />
        <br></br>
        <input type="email" name="email" id='' />
        <br />
        <input type="submit" value="Add user" />
      </form>

    </>
  )
}

export default App
