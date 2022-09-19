import CardList from "./CardList";
import SearchUser from "./SearchUser";
import { useState, useEffect } from "react";

function App() {
    const [profiles, setProfiles] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

  useEffect(()=>{
    function fetchUsers(){
      fetch('http://localhost:3000/test-data.json')
      .then(res=>res.json())
      .then(data=>{
        setIsLoading(false);
        setProfiles(data);
      });
    }
    fetchUsers();
  },[]);

    const searchUser = username => {
        setProfiles(profiles.filter(user=>user.username.toLowerCase().includes(username.toLowerCase())));
    };
  return (
    <>
    <h1>Github Card List App</h1>
    <div style={{marginBottom: '4px'}}>
    <SearchUser onSearch={searchUser} />
    </div>
    {isLoading ? 'Loading...': <CardList profiles={profiles}/>}
    </>
  );
}

export default App;
