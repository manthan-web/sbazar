import { sections } from '../lib/section'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return sections.map((section) => ({
    slug: section.slug,
  }))
}

export default function PolicyPage({ params }: { params: { slug: string } }) {
  const section = sections.find((s) => s.slug === params.slug)

  if (!section) {
    notFound()
  }

  return (
    <>
      <h1 className="mb-6 text-3xl font-bold">{section.title}</h1>
      <p>{section.content}</p>
    </>
  )
}