import Header from '@/components/Header/Header'
import Layout from '@/components/Layout/Layout'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
        <Header/>
        <Layout>
            <div className='flex flex-col items-center justify-center mt-20'>
                <h2 className='text-2xl font-bold'>Not Found</h2>
                <Link 
                    className='text-amber-800'
                    href="/">
                    Return Home
                </Link>
            </div>
        </Layout>

    </div>
  )
}