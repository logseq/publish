import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="prose prose-lg mx-auto md:max-w-xl lg:max-w-2xl">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
