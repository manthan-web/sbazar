"use client"

import { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Sidebar } from './sidebar'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function PoliciesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    if (pathname === '/policies') {
      router.push('/policies/privacy-policy')
    }
  }, [pathname, router])

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Mobile Sidebar Toggle */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="fixed z-50 md:hidden 
              top-4 left-4 
              bg-white shadow-md 
              border border-gray-200 
              hover:bg-gray-100"
            aria-label="Toggle Sidebar"
          >
            <Menu className="h-6 w-6 text-gray-700" />
          </Button>
        </SheetTrigger>
        <SheetContent 
          side="left" 
          className="w-[280px] sm:w-[300px] 
            pt-16 # Add top padding to avoid overlapping with top bar
            bg-white/95 backdrop-blur-sm"
        >
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b px-4 py-2">
              <h2 className="text-lg font-semibold">Snext Policies</h2>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  aria-label="Close Sidebar"
                  className="hover:bg-red-50"
                >
                  <X className="h-6 w-6 text-gray-600" />
                </Button>
              </SheetTrigger>
            </div>
            <Sidebar />
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <aside className="hidden w-64 flex-shrink-0 border-r md:block">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-4 pt-16 md:p-12 md:pt-12">
        {children}
      </main>
    </div>
  )
}