import {
  Button,
  Icon,
  IconButton,
  Spacer,
  Dialog,
  Switch,
  TextField
} from 'actify'

export default () => {
  const list = [
    {
      name: 'item1',
      image: 'image1.jpg',
      color: 'color1',
      active: true,
      price: 10.0
    },
    {
      name: 'item2',
      image: 'image2.jpg',
      color: 'color2',
      active: false,
      price: 20.0
    },
    {
      name: 'item3',
      image: 'image3.jpg',
      color: 'color3',
      active: true,
      price: 30.0
    },
    {
      name: 'item4',
      image: 'image4.jpg',
      color: 'color4',
      active: false,
      price: 40.0
    },
    {
      name: 'item5',
      image: 'image5.jpg',
      color: 'color5',
      active: true,
      price: 50.0
    },
    {
      name: 'item6',
      image: 'image6.jpg',
      color: 'color6',
      active: false,
      price: 60.0
    },
    {
      name: 'item7',
      image: 'image7.jpg',
      color: 'color7',
      active: true,
      price: 70.0
    },
    {
      name: 'item8',
      image: 'image8.jpg',
      color: 'color8',
      active: false,
      price: 80.0
    },
    {
      name: 'item9',
      image: 'image9.jpg',
      color: 'color9',
      active: true,
      price: 90.0
    },
    {
      name: 'item10',
      image: 'image10.jpg',
      color: 'color10',
      active: false,
      price: 100.0
    }
  ]

  return (
    <div className="py-4 mx-auto w-[calc(100vw-32px)] md:w-[calc(100vw-272px)]">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="border-b text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="[&>th]:px-3 [&>th]:py-2">
              <th>Product name</th>
              <th>image</th>
              <th>color</th>
              <th>active</th>
              <th>price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item) => (
              <tr
                key={item.name}
                className="[&>td]:px-3 [&>td]:py-2 bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <>
                  <th
                    scope="row"
                    className="px-3 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.name}
                  </th>
                  <td>
                    <img
                      className="h-14"
                      src={`https://fakeimg.pl/600x400?text=${item.name}`}
                    />
                  </td>
                  <td>{item.color}</td>
                  <td>
                    <Switch defaultSelected={item.active} />
                  </td>
                  <td>${item.price}</td>
                  <td>
                    <Dialog>
                      <Dialog.Activator>
                        <Button>
                          <Icon name="pencil" />
                          Edit
                        </Button>
                      </Dialog.Activator>
                      <Dialog.Content>
                        <Dialog.Heading>
                          <p>Edit Item</p>
                          <Spacer />
                          <Dialog.Close>
                            <IconButton color="secondary">
                              <Icon name="x" />
                            </IconButton>
                          </Dialog.Close>
                        </Dialog.Heading>
                        <Dialog.Description className="grid grid-cols-2 gap-2">
                          <TextField
                            label="name"
                            variant="outlined"
                            value={item.name}
                          />
                          <TextField
                            label="color"
                            variant="outlined"
                            defaultValue={item.color}
                          />
                          <label className="flex items-center justify-between">
                            <span>active</span>
                            <Switch
                              title="active"
                              defaultSelected={item.active}
                            />
                          </label>
                          <TextField
                            type="number"
                            label="price"
                            variant="outlined"
                            defaultValue={item.price}
                          />
                        </Dialog.Description>
                        <div className="flex items-center gap-2">
                          <Spacer />
                          <Dialog.Close>
                            <Button color="error">Cancel</Button>
                          </Dialog.Close>
                          <Button>Confirm</Button>
                        </div>
                      </Dialog.Content>
                    </Dialog>
                  </td>
                </>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
