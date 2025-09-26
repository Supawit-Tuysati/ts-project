import { useEffect, useState } from "react";
import { fetchUsers, createUser } from "../services/api";
import type { User } from "../services/api";

function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState("");

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  const handleAdd = async () => {
    if (!name.trim()) return;
    const newUser = await createUser(name);
    setUsers([...users, newUser]);
    setName("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>👩‍💻 Users</h1>

      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
