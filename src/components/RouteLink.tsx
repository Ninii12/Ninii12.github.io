import type { AnchorHTMLAttributes, MouseEvent } from 'react'
import { navigate } from '../lib/router'

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
}

export function Link({ href, onClick, ...props }: LinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event)

    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      href.startsWith('http://') ||
      href.startsWith('https://') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:')
    ) {
      return
    }

    event.preventDefault()
    navigate(href)
  }

  return <a href={href} onClick={handleClick} {...props} />
}
