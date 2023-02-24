import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'

const Users = () => {
  const [users, setUsers] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)
  const handleGetUsers = useCallback(async () => {
    try {
      const result = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      )
      setUsers(result.data.map((user: any) => user.name))
    } catch {
      setError('Error fetching users')
    }
  }, [])

  useEffect(() => {
    handleGetUsers()
  }, [handleGetUsers])

  return (
    <div>
      <h1>Users</h1>
      {error && <p>{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  )
}

export default Users
