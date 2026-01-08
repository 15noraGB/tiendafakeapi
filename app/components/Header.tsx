'use client'

import { useRouter } from 'next/navigation'

interface HeaderProps {
  title: string
  showBack?: boolean
}

export default function Header({ title, showBack = false }: HeaderProps) {
  const router = useRouter()

  return (
    <header className="flex items-center gap-4 px-4 py-4 border-b border-zinc-200 dark:border-zinc-800 text-black dark:text-zinc-50">
      {showBack && (
        <button
          onClick={() => router.back()}
          className="text-xl font-semibold hover:opacity-70"
          aria-label="Volver atrás"
        >
          ←
        </button>
      )}

      <h1 className="text-lg font-medium truncate">
        {title}
      </h1>
    </header>
  )
}
