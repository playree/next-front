import { Menu } from '@/components/Menu'
import { SideMenu } from '@/components/SideMenu'
import { AppPropsCustom } from '@/helpers/client'
import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }: AppPropsCustom) {
  let element = <Component {...pageProps} />
  if (Component.enableSideMenu) {
    // サイドメニューを表示するページ
    element = (
      <SideMenu menu={Menu} select={Component.enableSideMenu}>
        {element}
      </SideMenu>
    )
  }
  return <ThemeProvider attribute='class'>{element}</ThemeProvider>
}
