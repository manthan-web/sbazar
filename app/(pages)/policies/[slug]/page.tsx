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
      <h1 className="mb-6 text-3xl text-[#BC1E3A] font-bold">{section.title}</h1>
      <ReactMarkdown 
      components={{
        h1: ({node, ...props}) => <h1 className="text-3xl font-bold text-black border-b pb-2 mb-4" {...props} />,
        h2: ({node, ...props}) => <h2 className="text-2xl font-semibold text-black mt-6 mb-4 border-b pb-2" {...props} />,
        h3: ({node, ...props}) => <h3 className="text-xl font-medium text-black mt-4 mb-3" {...props} />,
        p: ({node, ...props}) => <p className="text-gray-700 leading-relaxed mb-4" {...props} />,
        a: ({node, ...props}) => <a className="text-black underline" {...props} />,
        ul: ({node, ...props}) => <ul className="list-disc list-inside pl-4 mb-4" {...props} />,
        ol: ({node, ...props}) => <ol className="list-decimal list-inside pl-4 mb-4" {...props} />,
      }}>{section.content}</ReactMarkdown>
    </>
  )
}