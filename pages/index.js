import { getSortedPostsData } from '../lib/posts'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link';
import 'tailwindcss/tailwind.css'
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      {/* Keep the existing code here */}
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* Add this <section> tag below the existing <section> tag */}
      <div className="container mx-auto  px-20">
        <div className="h-64 grid grid-rows-12 grid-flow-col gap-4 ">
          {allPostsData.map(({ id, date, title, desc, img }) => (
            <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 " key={id}>
              <div className="flex justify-center md:justify-end -mt-16">
                <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src={img} />
              </div>
              <div>
                <h2 className="text-gray-800 text-xl font-semibold">
                  <Link href={`/posts/${id}`}>
                    <a>{title}</a>
                  </Link>
                </h2>
                <p className="mt-2 text-gray-600">
                  {desc}
                </p>
              </div>
              <div className="flex justify-end mt-4">
                <a href="#" className="text-xl font-medium text-indigo-500"><Date dateString={date} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}