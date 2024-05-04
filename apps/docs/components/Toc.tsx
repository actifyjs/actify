'use client'
import { tv } from 'tailwind-variants'
import { useMounted } from '@/hooks/use-mounted'
import { TableOfContents } from '@/utils/toc.util'
import { useEffect, useMemo, useState } from 'react'

const tocAnchorStyles = tv({
  base: ['flex', 'items-center', 'gap-2', 'no-underline'],
  variants: {
    active: {
      false: 'hover:text-outline',
      true: 'font-medium text-primary'
    }
  }
})

interface TocProps {
  toc: TableOfContents
}

export function Toc({ toc }: TocProps) {
  const itemIds = useMemo(
    () =>
      toc?.items
        ? toc.items
            .flatMap((item) => [item.url, item?.items?.map((item) => item.url)])
            .flat()
            .filter(Boolean)
            .map((id) => id?.split('#')[1])
        : [],
    [toc]
  ) as string[]
  const activeHeading = useActiveItem(itemIds)
  const mounted = useMounted()

  if (!toc?.items || !mounted) {
    return null
  }

  return (
    <div className="translate-x-full lg:translate-x-0 transition-transform fixed pl-4 right-0 h-[calc(100%-14rem)] space-y-2 w-[16rem] overflow-auto">
      <Tree tree={toc} activeItem={activeHeading} />
    </div>
  )
}

function useActiveItem(itemIds: string[]) {
  const [activeId, setActiveId] = useState<string | undefined | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: `0% 0% -80% 0%` }
    )

    itemIds?.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      itemIds?.forEach((id) => {
        const element = document.getElementById(id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [itemIds])

  return activeId
}

interface TreeProps {
  tree: TableOfContents
  level?: number
  activeItem?: string | null
}

function Tree({ tree, level = 1, activeItem }: TreeProps) {
  return tree?.items?.length && level < 3 ? (
    <ul className="m-0 list-none text-sm">
      {tree.items.map((item, index) => {
        return (
          <li key={index} className="pt-3">
            <a
              href={item.url}
              className={tocAnchorStyles({
                active: item.url === `#${activeItem}`
              })}
            >
              {level == 2 && (
                <span className="block w-1 h-1 rounded-full bg-gray-300" />
              )}{' '}
              {item.title}
            </a>
            {item.items?.length ? (
              <Tree tree={item} level={level + 1} activeItem={activeItem} />
            ) : null}
          </li>
        )
      })}
    </ul>
  ) : null
}
