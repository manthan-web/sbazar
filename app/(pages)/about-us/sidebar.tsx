"use client"

import { usePathname, useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Section, sections } from './lib/section'

export function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()

  const handleSectionClick = (section: Section) => {
    router.push(`/about-us/${section.slug}`)
  }

  return (
    <ScrollArea className="h-full py-4 md:pl-8 md:pr-6">
      <h2 className="mb-4 px-4 md:flex hidden text-lg font-semibold">About Snext</h2>
      <nav className="space-y-1">
        {sections.map((section) => (
          <Button
            key={section.id}
            variant="ghost"
            className={`w-full justify-start px-4 transition-colors ${
              pathname === `/about-us/${section.slug}`
                ? "bg-[#2C2C2C] text-white hover:bg-[#2C2C2C]/90"
                : "hover:bg-[#2C2C2C]/10"
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