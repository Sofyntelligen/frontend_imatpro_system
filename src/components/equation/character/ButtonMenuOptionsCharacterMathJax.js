import { mdiDelete, mdiPuzzleEditOutline } from '@mdi/js'

export const buttonMenuOptions = (id) => [
  [
    {
      id: 1,
      icon: mdiPuzzleEditOutline,
      label: 'Edit',
      to: '/equation/character/update/' + id
    }
  ],
  [
    {
      id: 2,
      icon: mdiDelete,
      label: 'Delete',
      to: id
    }
  ]
]
