import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

// 画面共通部品

export type NextPageCustom<P = Record<string, unknown>> = NextPage<
  Record<string, unknown> & P,
  Record<string, unknown> & P
> & {
  enableAuth?: boolean
  enableSideMenu?: boolean | string
}

export type AppPropsCustom<P = Record<string, null | undefined>> = AppProps<P> & {
  Component: NextPageCustom<P>
}

export const cnjoin = (...className: (string | undefined)[]) => className.join(' ')
