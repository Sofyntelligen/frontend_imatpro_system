import { mdiDelete, mdiPuzzleEditOutline, mdiAbacus } from '@mdi/js'

export const buttonMenuOptions = (id) => [
  [
    {
      id: 1,
      icon: mdiAbacus,
      label: 'Solution',
      to: '/equation/character/' + id
    },
    {
      id: 2,
      icon: mdiPuzzleEditOutline,
      label: 'Edit',
      to: '/equation/character/' + id
    }
  ],
  [
    {
      id: 3,
      icon: mdiDelete,
      label: 'Delete'
    }
  ]
]
