import { useTheme } from 'next-themes'
import React, { ChangeEvent } from 'react'

import { GlobeAltIcon } from './Icons'
import { MenuContentType } from './SideMenu'

/**
 * サイドメニュー
 */
export const Menu: MenuContentType = ({ select, closeMenu }) => {
  const { theme, setTheme } = useTheme()

  const changeTheme = (e: ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value)
  }

  return (
    <>
      <ul className='mt-4 space-y-2 font-medium'>
        <li // ユーザー情報
        >
          user
        </li>

        <li // 言語・テーマ選択
          className='flex text-xs'
        >
          <div className='flex items-center px-2 py-1 font-medium text-gray-900 dark:text-white'>
            <GlobeAltIcon className='h-4 text-gray-500 dark:text-gray-400' />
            <span className='ml-2'>言語</span>
          </div>

          <div className='flex items-center px-1 py-1 font-medium text-gray-900 dark:text-white'>
            <span className='ml-2'>テーマ</span>
          </div>
          <select
            id='theme'
            className='block w-fit rounded-lg border border-gray-300 bg-gray-50 px-1 py-0.5 text-gray-900
                focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700
                dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
            value={theme}
            onChange={changeTheme}
          >
            <option value='system'>OS</option>
            <option value='light'>Light</option>
            <option value='dark'>Dark</option>
          </select>
        </li>
      </ul>
    </>
  )
}
