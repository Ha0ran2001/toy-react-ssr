import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from '../redux/users/users.actions'

const UserList = () => {

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [])

  return (
    <div>
      <div>User page</div>
      <Link to="/">To Home page</Link>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.first_name}</li>
        ))}
      </ul>
    </div>
  )
}

UserList.getInitialData = async (store) => {
  return await store.dispatch(fetchUsers());
}

export default UserList;