import { useState } from "react";


function SearchUser(props) {

    let [username, setUsername] = useState('');

    let handleSubmit = e => {
        e.preventDefault();
        props.onSearch(username)
    };

  return (
    <form onSubmit={handleSubmit}>
        <input type='text' value={username} onChange={e=>setUsername(e.target.value)} placeholder='Search by username'/>
        <button style={{borderRadius:'5px'}}>Search</button>
    </form>
  );
}

export default SearchUser