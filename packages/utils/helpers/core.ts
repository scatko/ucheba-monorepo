import MobileDetect from 'mobile-detect'

export const mobileDetect = (ctx: object): string => {
  /* eslint-disable-next-line @typescript-eslint/ban-ts-ignore */
  // @ts-ignore
  const headers = ctx && ctx.req && ctx.req.headers
  const detected = headers
    ? new MobileDetect(headers['user-agent'] as string)
    : new MobileDetect(navigator.userAgent)

  return detected.mobile()
}

export const isMobile = (ctx: object): boolean => {
  return Boolean(mobileDetect(ctx))
}

export const compose = (...args): Function => {
  const fns = [].slice.call(args)

  return fns.reduce(
    (a, b) => {
      return (): Function => {
        return a(b.apply(0, args))
      }
    },
    arg => {
      return arg
    }
  )
}
