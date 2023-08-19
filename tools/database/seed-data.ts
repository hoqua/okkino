const HOME_BLOCKS = ['left', 'right']

export const HOME_BLOCK_IMAGES = [
  {
    id: HOME_BLOCKS[0],
    title: 'left',
    url: `https://uploadthing.com/f/91a31264-e263-46fc-82c2-be3d3b49602f_left.png`,
    bgColor: '#e2e2e0',
    order: 0,
    key: 'left'
  },
  {
    id: HOME_BLOCKS[1],
    title: 'right',
    url: `https://uploadthing.com/f/e2103b6e-b6fe-42a7-a561-1c1b9155a551_right.png`,
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
