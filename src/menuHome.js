import {
  mdiAccountCircle,
  mdiMonitor,
  mdiHelpCircle,
  mdiLock,
  mdiMenuOpen,
  mdiOpenInNew,
  mdiFormDropdown,
  mdiAlphabetCyrillic,
  mdiAbacus,
  mdiChairSchool
} from '@mdi/js'

export default [
  {
    to: '/',
    icon: mdiMonitor,
    label: 'Dashboard',
    updateMark: 'warning'
  },
  {
    to: '/profile',
    label: 'Profile',
    icon: mdiAccountCircle
  },
  {
    to: '/login',
    label: 'Login',
    icon: mdiLock
  },
  {
    key: 'submenus-1',
    label: 'Equation',
    icon: mdiMenuOpen,
    menuSecondary: [
      {
        to: '/equation/character',
        label: 'Character Equation',
        icon: mdiAlphabetCyrillic
      },
      {
        to: '/equation/type/equation',
        label: 'Type Equation',
        icon: mdiAbacus
      },
      {
        to: '/equation/grade/school',
        label: 'Grade School',
        icon: mdiChairSchool
      },
      {
        label: 'External link',
        href: 'https://github.com/josedanielhernandezosorio',
        icon: mdiOpenInNew,
        target: '_blank'
      },
      {
        label: 'Dropdown',
        icon: mdiFormDropdown,
        menu: [
          {
            label: 'Dropdown item One'
          },
          {
            label: 'Dropdown item Two'
          }
        ]
      }
    ]
  },
  {
    href: 'https://github.com/josedanielhernandezosorio',
    label: 'About',
    icon: mdiHelpCircle
  }
]
