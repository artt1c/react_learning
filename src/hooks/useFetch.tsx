import {useEffect, useState} from "react";

export const useFetch = () => {

  const [users, setUsers] = useState<any[]>([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
  }, []);

  return users;
}