import PageLayout from "../src/components/layout/PageLayout/PageLayout";
import {getAllCategories} from "../src/database/categories";
import CustomCarousel from "../src/components/Carousel/Carousel";
import ClientsSlider from "../src/components/ClientsSlider/ClientsSlider";
import Categories from "../src/components/Categories/Categories";
import {getAllClients} from "../src/database/clients";
import FeaturedProducts from "../src/components/FeaturedProducts/FeaturedProducts";
import FeaturedRating from "../src/components/FeaturedRating/FeaturedRating";
import WhyChooseUs from "../src/components/WhyChooseUs/WhyChooseUs";
import Footer from "../src/components/Footer/Footer";
import {getFeaturedProducts} from "../src/database/products";

export default function Home({ categories, clients, featuredProducts }: any) {

  return (
    <PageLayout categories={categories}>
      <CustomCarousel/>
      <ClientsSlider clients={clients}/>
      <Categories categories={categories}/>
      <FeaturedProducts featuredProducts={featuredProducts}/>
      <FeaturedRating/>
      <WhyChooseUs/>
    </PageLayout>
  )
}

export const getServerSideProps = async () => {
  const { data: categories } =  await getAllCategories();
  const { data: clients } = await getAllClients();
  const { data: featuredProducts } = await getFeaturedProducts();

    return {
        props: {
          categories,
          clients,
          featuredProducts
        }
    }
}
