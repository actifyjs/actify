import { useState, useEffect } from 'react'
import {
  TextField,
  Checkbox,
  Tooltip,
  Button,
  IconButton,
  Avatar
} from 'actify'
import { Trash, Delete, Pencil, Contact } from 'lucide-react'

type User = {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
  checked?: boolean
}

export default () => {
  const [users, setUsers] = useState<User[]>([])

  const fetchUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    setUsers(data)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const [checekAll, setCheckAll] = useState(false)

  const handleCheckAll = (checked: boolean) => {
    setCheckAll(checked)
    setUsers([...users].map((item) => ({ ...item, checked })))
  }

  const handleDelete = (item: User) => {
    const index = users.indexOf(item)
    users.splice(index, 1)
    setUsers([...users])
  }

  const handleItemChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    item: User
  ) => {
    const { checked } = e.target
    const index = users.indexOf(item)
    users[index].checked = checked
    setUsers([...users])
  }

  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="bg-surface rounded-lg p-4 shadow flex flex-col gap-4">
        <TextField variant="outlined" label="search" />
        <div className="flex gap-2 justify-center">
          <Button color="error">
            <Trash />
            Delete All Row
          </Button>
          <Button>
            <Contact />
            Add Contact
          </Button>
        </div>
      </div>
      <div className="bg-surface rounded-xl shadow">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="border-b text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="[&>th]:px-3 [&>th]:py-2">
              <th className="w-10">
                <Tooltip content="全选">
                  <Checkbox
                    defaultChecked={checekAll}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleCheckAll(e.target.checked)
                    }
                  />
                </Tooltip>
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item) => (
              <tr
                key={item.name}
                className="[&>td]:px-3 [&>td]:py-2 bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td>
                  <Checkbox
                    checked={item.checked}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleItemChange(e, item)
                    }
                  />
                </td>
                <th className="flex gap-2 px-3 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <Avatar />
                  <div className="flex flex-col gap-2">
                    <span>{item.name}</span>
                    <p className="text-xs text-outline">
                      {item.address.street}
                    </p>
                  </div>
                </th>
                <td>{item.email}</td>
                <td>{item.address.street}</td>
                <td>{item.phone}</td>
                <td>
                  <IconButton color="error" onClick={() => handleDelete(item)}>
                    <Delete />
                  </IconButton>
                  <IconButton color="primary">
                    <Pencil />
                  </IconButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
