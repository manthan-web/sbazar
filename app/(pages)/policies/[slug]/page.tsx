import { sections } from '../lib/section'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'

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
      <ReactMarkdown>{section.content}</ReactMarkdown>
    </>
  )
}