"use client"

import { usePathname, useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { sections, Section } from './lib/section'

export function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()

  const handleSectionClick = (section: Section) => {
    router.push(`/policies/${section.slug}`)
  }

  return (
    <ScrollArea className="h-full py-4 md:pl-8 md:pr-6">
      <h2 className="mb-4 px-4 md:flex hidden text-lg font-semibold">Snext Policies</h2>
      <nav className="space-y-1">
        {sections.map((section) => (
          <Button
            key={section.id}
            variant="ghost"
            className={`w-full justify-start px-4 transition-colors ${
              pathname === `/policies/${section.slug}`
                ? "bg-[#BC1E3A] text-white hover:bg-[#BC1E3A]/90"
                : "hover:bg-[#BC1E3A]/10"
            }`}
            onClick={() => handleSectionClick(section)}
          >
            {section.title}
          </Button>
        ))}
      </nav>
    </ScrollArea>
  )
}