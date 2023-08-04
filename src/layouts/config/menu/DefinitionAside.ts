import {
  mdiAccountCircle,
  mdiMonitor,
  mdiLock,
  mdiAlertCircle,
  mdiSquareEditOutline,
  mdiTable,
  mdiTelevisionGuide,
  mdiPalette,
  mdiCardAccountDetailsOutline,
  mdiFormDropdown,
  mdiMenuOpen,
  mdiOpenInNew,
  mdiViewQuilt,
  mdiHelpCircle,
  mdiBarcode,
} from '@mdi/js'

import type { MenuAsideItemPremium } from '../../interfaces'

const DefinitionAside: MenuAsideItemPremium[] = [
  {
    href: '/',
    icon: mdiMonitor,
    label: 'Dashboard',
  },
  {
    href: '/equation/profile',
    label: 'Profile',
    icon: mdiAccountCircle,
    updateMark: 'info',
  },
  {
    href: '/login',
    label: 'Login',
    icon: mdiLock,
  },
  {
    // Key should be unique for each submenus object
    // It is required for open/close logic
    key: 'submenus-1',
    label: 'Sub',
    icon: mdiMenuOpen,
    menuSecondary: [
      {
        href: '/',
        label: 'Sample Link',
        icon: mdiCardAccountDetailsOutline,
      },
      {
        label: 'External link',
        href: 'http://localhost:3000/mathematical/error',
        icon: mdiOpenInNew,
        target: '_blank',
      },
      {
        label: 'Dropdown',
        icon: mdiFormDropdown,
        menu: [
          {
            label: 'Dropdown item One',
          },
          {
            label: 'Dropdown item Two',
          },
        ],
      },
    ],
  },
  {
    href: 'http://localhost:3000/mathematical/error',
    label: 'About',
    icon: mdiHelpCircle,
  },
]

export default DefinitionAside
