export default function Article({ children }) {
  return (
    <article className="prose prose-lg mx-auto md:max-w-xl lg:max-w-2xl">
      {children}
    </article>
  )
}
