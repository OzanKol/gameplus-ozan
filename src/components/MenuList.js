import React from 'react'

const MenuList = () => {
  const MenuItems = [
    {
      menuName: 'Games',
      URL: 'games'
    },
    {
      menuName: 'Membership',
      URL: 'membership'
    },
    {
      menuName: 'Download',
      URL: 'download'
    },
    {
      menuName: 'Blog',
      URL: 'blog'
    },
    {
      menuName: 'Support',
      URL: 'support'
    }
  ]
  return (
        <ul className='menuList'>
        {
            MenuItems.map((item, index) =>
                <li key={index}><a href={item.URL} className='menuList-item'>{item.menuName}</a></li> 
            )
        }
        </ul>
  )
}

export default MenuList