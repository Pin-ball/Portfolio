import type { ComponentProps } from 'react'

const ICON_BUTTON =
  'inline-flex size-9 shrink-0 items-center justify-center rounded-md outline-none transition-all hover:bg-accent hover:text-accent-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 dark:hover:bg-accent/50'

type Labelled = {
  label: string
}

type IconButtonProps = Labelled &
  Omit<ComponentProps<'button'>, 'aria-label' | 'className' | 'type'>

type IconLinkProps = Labelled &
  Omit<ComponentProps<'a'>, 'aria-label' | 'className' | 'href'> & {
    href: string
  }

export function IconButton({ label, ...props }: IconButtonProps) {
  return (
    <button type="button" aria-label={label} title={label} className={ICON_BUTTON} {...props} />
  )
}

export function IconLink({ label, href, ...props }: IconLinkProps) {
  return <a href={href} aria-label={label} title={label} className={ICON_BUTTON} {...props} />
}
