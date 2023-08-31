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
    mdiApplicationVariableOutline,
} from '@mdi/js'

import type {MenuAsideItemPremium} from '../../interfaces'

const DefinitionAside: MenuAsideItemPremium[] = [
    {
        href: '/',
        icon: mdiMonitor,
        label: 'Dashboard',
    },
    {
        href: '/equation/character',
        icon: mdiApplicationVariableOutline,
        label: 'Latex',
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
                href: '/error',
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
        href: '/error',
        label: 'About',
        icon: mdiHelpCircle,
    },
]

export default DefinitionAside
