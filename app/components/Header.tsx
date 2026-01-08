'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface HeaderProps {
  title: string
  showBack?: boolean
}

export default function Header({ title, showBack = false }: HeaderProps) {
  const router = useRouter()

  return (
    <header className="flex items-center justify-between gap-4 px-4 py-4 border-b border-zinc-200 dark:border-zinc-800 text-black dark:text-zinc-50">
      
      <div className="flex items-center gap-4">
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
      </div>

      {/* 🔗 Enlace a registro */}
      <Link
        href="/register"
        className="text-sm font-medium text-blue-600 hover:underline"
      >
        Registrarse
      </Link>
    </header>
  )
}
