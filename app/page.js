import Adoption from "@/comps/Adoption";
import Footer from "@/comps/Footer";
import Hero from "@/comps/Hero";
import Newsletter from "@/comps/Newsletter";
import Pets from "@/comps/Pet";
import Services from "@/comps/Services";


export default function Home() {
  return (
   <main>
<Hero/>
<Pets/>
<Services/>
<Adoption/>
<Newsletter/>
<Footer/>
   </main>
  )
}
