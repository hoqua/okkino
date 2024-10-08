const HOME_BLOCKS = ['left', 'right']

export const HOME_BLOCK_IMAGES = [
  {
    id: HOME_BLOCKS[0],
    title: 'left',
    url: `https://utfs.io/f/277d96fc-96a6-4c23-a2c8-955c253943be-1z407.jpg`,
    bgColor: '#e2e2e0',
    order: 0,
    key: 'left'
  },
  {
    id: HOME_BLOCKS[1],
    title: 'right',
    url: `https://utfs.io/f/9c4982fe-4933-4a6a-84a9-996b712455a1-1sls7w.jpg`,
    bgColor: '#e2e0df',
    order: 1,
    key: 'right'
  }
]

export const HOME_BLOCK_DATA = HOME_BLOCKS.map((block) => {
  return {
    id: block,
    navigationPath: 'shop/all',
    image: {
      connect: { id: block }
    }
  }
})
