import Nav from './Components/Nav'
import {Hero, CustomerReview, Footer,  Popularproduct, Services, SpecialOffer, Subscribe, SuperQuality } from './Sections'
Nav
function App() {
  return (
    <>
    <main className="relative">
      <Nav />
    </main>
    <section className="xl:padding-1 wide-padding-r padding-b">
      <Hero/>
    </section>
    <section className="padding">
    <Popularproduct />
    </section>
    <section className="padding">
    <SuperQuality />
    </section>
    <section className="padding-x py-10">
    <Services />
    </section>
    <section className="padding">
    <SpecialOffer />
    </section>
    <section className="bg-pale-blue padding">
    <CustomerReview />
    </section>
    <section className="sm:py-32 py-16 w-full padding-x">
    <Subscribe />
    </section>
    <section className="padding-x padding-y bg-black pb-8 text-white">
    <Footer />
    </section>


    </>
  )
}

export default App
