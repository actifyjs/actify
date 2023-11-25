import { useState } from 'react'
import { TextField, Checkbox, Button, IconButton, Icon, Avatar } from 'actify'

export default () => {
  const [list, setList] = useState([
    {
      name: 'Emma Adams',
      position: 'Web Developer',
      email: 'adams@mail.com',
      location: 'Boston, USA',
      phone: '+91 (070) 123-4567'
    },
    {
      name: 'Olivia Allen',
      position: 'Web Designer',
      email: 'allen@mail.com',
      location: 'Sydney, Australia',
      phone: '+91 (125) 450-1500'
    },
    {
      name: 'Isabella Anderson',
      position: 'UX/UI Designer',
      email: 'anderson@mail.com',
      location: 'Miami, USA',
      phone: '+91 (100) 154-1254'
    },
    {
      name: 'Amelia Armstrong',
      position: 'Ethical Hacker',
      email: 'armstrong@mail.com',
      location: 'Tokyo, Japan',
      phone: '+91 (154) 199- 1540'
    },
    {
      name: 'Emily Atkinson',
      position: 'Web developer',
      email: 'atkinson@mail.com',
      location: 'Edinburgh, UK',
      phone: '+91 (900) 150- 1500'
    },
    {
      name: 'Sofia Bailey',
      position: 'UX/UI Designer',
      email: 'bailey@mail.com',
      location: 'New York, USA',
      phone: '+91 (001) 160- 1845'
    },
    {
      name: 'Victoria Sharma',
      position: 'Project Manager',
      email: 'sharma@mail.com',
      location: 'Miami, USA',
      phone: '+91 (110) 180- 1600'
    },
    {
      name: 'Penelope Baker',
      position: 'Web Developer',
      email: 'baker@mail.com',
      location: 'Edinburgh, UK',
      phone: '+91 (405) 483- 4512'
    }
  ])
  const [checekAll, setCheckAll] = useState(false)

  const handleCheckAll = (checked) => {
    setCheckAll(checked)
    setList([...list].map((item) => ({ ...item, checked })))
  }

  const handleDelete = (item) => {
    const index = list.indexOf(item)
    list.splice(index, 1)
    setList([...list])
  }

  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="bg-surface rounded-lg p-4 shadow flex flex-col gap-4">
        <TextField variant="outlined" label="search" />
        <div className="flex gap-2 justify-center">
          <Button color="error">
            <Icon name="trash" />
            Delete All Row
          </Button>
          <Button>
            <Icon name="contact" />
            Add Contact
          </Button>
        </div>
      </div>
      <div className="bg-surface rounded-xl shadow">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="border-b text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="[&>th]:px-3 [&>th]:py-2">
              <th className="w-10">
                <Checkbox
                  defaultChecked={checekAll}
                  onChange={handleCheckAll}
                />
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Location</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item) => (
              <tr
                key={item.name}
                className="[&>td]:px-3 [&>td]:py-2 bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td>
                  <Checkbox checked={item.checked} />
                </td>
                <th className="flex gap-2 px-3 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <Avatar />
                  <div className="flex flex-col gap-2">
                    <span>{item.name}</span>
                    <p className="text-xs text-outline">{item.position}</p>
                  </div>
                </th>
                <td>{item.email}</td>
                <td>{item.location}</td>
                <td>{item.phone}</td>
                <td>
                  <IconButton color="error" onClick={() => handleDelete(item)}>
                    <Icon name="delete" />
                  </IconButton>
                  <IconButton color="primary">
                    <Icon name="pencil" />
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
