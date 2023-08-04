import React from 'react'
import { MenuNavBarItem } from '../layouts/interfaces'
import NavBarItem from './NavBarItem'

type Props = {
  menu: MenuNavBarItem[]
}

export default function NavBarMenuList({ menu }: Props) {
  return (
    <>
      {menu.map((item, index) => (
        <NavBarItem key={index} item={item} />
      ))}
    </>
  )
}
