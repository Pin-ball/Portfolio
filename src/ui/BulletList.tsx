import clsx from 'clsx'

type BulletListProps = {
  items: string[]
  className?: string
}

export function BulletList({ items, className }: BulletListProps) {
  return (
    <ul className={clsx('space-y-1', className)}>
      {items.map((item) => (
        <li key={item} className="flex text-sm">
          •<span className="text-muted-foreground ml-2">{item}</span>
        </li>
      ))}
    </ul>
  )
}
