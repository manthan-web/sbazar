"use client"

import { usePathname, useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Section, sections } from './lib/section'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'

export function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const [expandedSections, setExpandedSections] = useState<string[]>([])
  
  // Auto-expand sections based on current path
  useEffect(() => {
    const currentPathParts = pathname.split('/').filter(Boolean);
    if (currentPathParts.length > 1) {
      setExpandedSections(prev => 
        prev.includes(currentPathParts[1]) ? prev : [...prev, currentPathParts[1]]
      );
    }
  }, [pathname]);

  const handleSectionClick = (section: Section, parentSection?: Section) => {
    if (section.subsections && section.subsections.length > 0) {
      setExpandedSections(prev => 
        prev.includes(section.slug) 
          ? prev.filter(s => s !== section.slug)
          : [...prev, section.slug]
      )
    } else {
      if (parentSection) {
        router.push(`/about/${parentSection.slug}/${section.slug}`)
      } else {
        router.push(`/about/${section.slug}`)
      }
    }
  }

  const isActive = (section: Section, parentSection?: Section) => {
    // Only return true for exact path matches, not parent sections
    if (parentSection) {
      return pathname === `/about/${parentSection.slug}/${section.slug}`
    }
    
    // For top-level sections, only match if it's exactly this path (not a subsection)
    // This prevents parent sections from showing as active when a child is selected
    return pathname === `/about/${section.slug}` && !section.subsections;
  }

  const renderSection = (section: Section, level: number = 0, parentSection?: Section) => {
    const hasSubsections = section.subsections && section.subsections.length > 0
    const isExpanded = expandedSections.includes(section.slug)
    const isActiveSection = isActive(section, parentSection)

    return (
      <div key={section.id} className="my-1">
        <Button
          variant="ghost"
          className={`w-full justify-start px-4 py-2 rounded-md text-left ${
            isActiveSection
              ? "bg-[#2C2C2C] text-white font-medium hover:bg-[#2C2C2C]/90"
              : "hover:bg-slate-100 text-slate-800"
          }`}
          onClick={() => handleSectionClick(section, parentSection)}
          style={{ paddingLeft: `${level * 12 + 16}px` }}
        >
          <div className="flex items-center w-full">
            {hasSubsections && (
              <span className="mr-2 flex items-center justify-center w-5 h-5">
                {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </span>
            )}
            <span className={level > 0 ? "text-sm" : ""}>{section.title}</span>
          </div>
        </Button>
        {hasSubsections && isExpanded && section.subsections && (
          <div>
            {section.subsections.map(subsection => renderSection(subsection, level + 1, section))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="border-r border-slate-200 h-full">
      <ScrollArea className="h-full py-4">
        <div className="px-4 pb-4 mb-2 border-b border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900">About Snext</h2>
        </div>
        <nav className="px-2 py-2">
          {sections.map(section => renderSection(section))}
        </nav>
      </ScrollArea>
    </div>
  )
}