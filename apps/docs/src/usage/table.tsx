import { Table } from 'actify'

export default () => {
  const headers = [
    {
      text: 'Name',
      value: 'name'
    },
    {
      text: 'Job',
      value: 'job'
    },
    {
      text: 'Employed',
      value: 'date'
    }
  ]

  const items = [
    {
      name: 'John Michael',
      job: 'Manager',
      date: '23/04/18'
    },
    {
      name: 'Alexa Liras',
      job: 'Developer',
      date: '23/04/18'
    },
    {
      name: 'Laurent Perrier',
      job: 'Executive',
      date: '19/09/17'
    },
    {
      name: 'Michael Levi',
      job: 'Developer',
      date: '24/12/08'
    },
    {
      name: 'Richard Gran',
      job: 'Manager',
      date: '04/10/21'
    }
  ]

  return <Table headers={headers} items={items} actions></Table>
}
