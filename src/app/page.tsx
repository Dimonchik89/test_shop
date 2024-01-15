import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ProductList from '@/components/Product/ProductList';
import Filter from '@/components/Filter/Filter';
import Pagination from '@/components/Pagination/Pagination';

export default function Home() {

  return (
      <main className="flex flex-col min-h-screen">
        <div className="flex-1">
          <Header />
          <Filter />
          <ProductList/>
          <Pagination/>
        </div>
        <Footer/>
      </main>
  )
}
