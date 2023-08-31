import type {MenuAsideItem} from '../layouts/interfaces'
import {MenuAsideItemPremium} from '../layouts/interfaces'
import AsideMenuItem from './AsideMenuItem'

type Props = {
    menu: MenuAsideItem[]
    isDropdownList?: boolean
    isCompact?: boolean
    activeSecondaryMenuKey?: string
    className?: string
    onMenuClick?: (item: MenuAsideItemPremium) => void
}

const AsideMenuList = ({
                           isDropdownList,
                           isCompact,
                           menu,
                           activeSecondaryMenuKey,
                           className,
                           onMenuClick,
                       }: Props) => {
    return (
        <ul className={className}>
            {menu.map((item) => (
                <AsideMenuItem
                    key={item.label}
                    item={item}
                    isDropdownList={isDropdownList}
                    isCompact={isCompact}
                    activeSecondaryMenuKey={activeSecondaryMenuKey}
                    onMenuClick={onMenuClick}
                />
            ))}
        </ul>
    )
}

export default AsideMenuList
