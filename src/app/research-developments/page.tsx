import Neuroscience from "../../app/assets/neuroscience.jpeg"
import AiForResearch from "../../app/assets/aiForResearch.jpeg"
import BioInformatics from "../../app/assets/bioInformatic.jpeg"
import RegenerativeMedicine from "../../app/assets/regenrativeMedicine.jpeg"
import ShreeRameshwaran from "../../app/collaborators/shreeRameshwaram.png"
import Mohanlal from "../../app/collaborators/mohanlal.jpeg"
import Tsm from "../../app/collaborators/Tsm.png"
export default function ResearchDevelopmentsPage() {
  const works = [
    {
      src: "https://bc-user-uploads.brandcrowd.com/public/media-Production/d57c710c-28d8-4de3-aa5f-c1e4316232a7/f5c07045-8141-4a76-a9c8-a05910407f05_2x",
      caption: "3D-Neural Tissue Culture"
    },
    {
      src: "https://images.unsplash.com/photo-1643780668909-580822430155?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjQzOTV8MHwxfHNlYXJjaHw4fHwzRC1iaW98ZW58MHx8fHwxNzI2MzEzMDA3fDA&ixlib=rb-4.0.3&q=80&w=1080",
      caption: "3D-Bioprinting & Scaffolding"
    },
    {
      // src: "https://bc-user-uploads.brandcrowd.com/public/media-Production/d57c710c-28d8-4de3-aa5f-c1e4316232a7/b561fb54-237e-49c0-aac7-e99edb474a4d",
      src: Neuroscience.src,
      caption: "Neuroscience"
    }
  ];

  const publications = [
    { text: 'Agrawal, Lokesh, Menouer Saidani, Laurent Guillaud, and Marco Terenzio. 2021. “Development of 3D Culture Scaffolds for Directional Neuronal Growth Using 2-Photon Lithography.” Materials Science & Engineering. C, Biomimetic Materials, Sensors and Systems 131 (December): 112502–2. [https://doi.org/10.1016/j.msec.2021.112502](https://doi.org/10.1016/j.msec.2021.112502).' },
    { text: 'Agrawal, Lokesh, Sunil Kumar Vimal, Paolo Barzaghi, Takashi Shiga, and Marco Terenzio. 2022. “Biodegradable and Electrically Conductive Melanin-Poly (3-Hydroxybutyrate) 3D Fibrous Scaffolds for Neural Tissue Engineering Applications.” Macromolecular Bioscience, September, 2200315. [https://doi.org/10.1002/mabi.202200315](https://doi.org/10.1002/mabi.202200315).' },
    { text: 'Pathak, Nishit, Sunil Kumar Vimal, Ishi Tandon, Lokesh Agrawal, Cao Hongyi, and Sanjib Bhattacharyya. 2022. “Neurodegenerative Disorders of Alzheimer, Parkinsonism, Amyotrophic Lateral Sclerosis and Multiple Sclerosis: An Early Diagnostic Approach for Precision Treatment.” Metabolic Brain Disease 37 (1): 67–104. [https://doi.org/10.1007/s11011-021-08000-w](https://doi.org/10.1007/s11011-021-08000-w).' },
    { text: 'Sunil Kumar Vimal, Hongyi Cao, Amit Dubey, Lokesh Agrawal, Nishit Pathak, Hua Zuo, Deepak Kumar, and Sanjib Bhattacharyya. 2022. “In Vivoandin Silicoinvestigations of the Pegylated Gold Nanoparticle Treatment of Amyotrophic Lateral Sclerosis in Mice.” New Journal of Chemistry 46 (25): 12252–64. [https://doi.org/10.1039/d2nj00452f](https://doi.org/10.1039/d2nj00452f).' },
    { text: 'Agrawal, Lokesh, Mustafa Korkutata, Sunil Kumar Vimal, Manoj Kumar Yadav, Sanjib Bhattacharyya, and Takashi Shiga. 2020. “Therapeutic Potential of Serotonin 4 Receptor for Chronic Depression and Its Associated Comorbidity in the Gut.” Neuropharmacology 166: 107969. [https://doi.org/10.1016/j.neuropharm.2020.107969](https://doi.org/10.1016/j.neuropharm.2020.107969).' },
    { text: 'Maria Fransiska Emily, Lokesh Agrawal, P. Barzaghi, Miki Otsuki, and Marco Terenzio. 2022. “Use of Microfluidics Chambers to Image Axonal Transport in Adult Sensory Neurons.” Methods in Molecular Biology, January, 271–88. [https://doi.org/10.1007/978-1-0716-1990-2_14](https://doi.org/10.1007/978-1-0716-1990-2_14).' }
  ];

  const ongoing = [
    {
      // src: "https://bc-user-uploads.brandcrowd.com/public/media-Production/d57c710c-28d8-4de3-aa5f-c1e4316232a7/0f82d726-5e9a-4c0b-a224-11b8cec86fbd",
      src: AiForResearch.src,
      caption: "AI for Research & Healthcare",
      alter: "For more details Please contact us..."
    },
    {
      // src: "https://bc-user-uploads.brandcrowd.com/public/media-Production/d57c710c-28d8-4de3-aa5f-c1e4316232a7/c0d5a809-9067-4ec6-b6ea-ca4d0e669310",
      src: BioInformatics.src,
      caption: "Bioinformatics & Machine Learning",
      alter: "For more details Please contact us..."
    },
    {
      // src: "https://bc-user-uploads.brandcrowd.com/public/media-Production/d57c710c-28d8-4de3-aa5f-c1e4316232a7/c0d5a809-9067-4ec6-b6ea-ca4d0e669310",
      src: RegenerativeMedicine.src,
      caption: "regenrative medicine and implants",
      alter: "For more details Please contact us..."
    }
  ];

  // Four collaborator logos as provided
  const collaborators = [
    { src: "https://bc-user-uploads.brandcrowd.com/public/media-Production/d57c710c-28d8-4de3-aa5f-c1e4316232a7/fa98c2e1-56e0-4da7-b0a2-d6afb5de7609_2x", alt: "Collaborator 1" },
    { src: "https://bc-user-uploads.brandcrowd.com/public/media-Production/d57c710c-28d8-4de3-aa5f-c1e4316232a7/2b61b2f0-7c52-42ec-855d-33884b850866_2x", alt: "Collaborator 2" },
    { src: "https://bc-user-uploads.brandcrowd.com/public/media-Production/d57c710c-28d8-4de3-aa5f-c1e4316232a7/c7c374a2-de85-40e4-927f-7f6e0b57f0b7_2x", alt: "Collaborator 3" },
    {src: ShreeRameshwaran.src, alt: "Collaborator 3"},
    {src: Mohanlal.src, alt: "Collaborator 4"},
    {src: Tsm.src, alt: "Collaborator 5"},
    // { src: "https://bc-user-uploads.brandcrowd.com/public/media-Production/d57c710c-28d8-4de3-aa5f-c1e4316232a7/50fe7902-1111-4ac4-9857-ad35b194dcd1_2x", alt: "Collaborator 4" },
  ];


  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative h-[240px] sm:h-[120px] flex items-center justify-center text-white"
        style={{ backgroundImage: "url(/hero-research.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative text-3xl sm:text-4xl font-semibold">Research</h1>
      </section>
{/* <section className="bg-gray-500 text-white py-10 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Ongoing Developments</h2>
      </section> */}
      {/* IMAGE CARDS SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold mb-10" style={{color: "grey"}}>Check out our published works!</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, i) => (
            <div key={i} className="rounded-2xl overflow-hidden bg-[#0b0d33] text-white">
              <div style={{ aspectRatio: "1/1", borderRadius: "50%",padding:"10px", }}
                className="flex items-center justify-center bg-white/10">
                <img src={work.src} alt={"Loading..."}
                  style={{ aspectRatio: "1/1", borderRadius: "50%" }}
                  className="tw-rounded-md tw-object-cover tw-max-h-full tw-max-w-full tw-w-full" />
              </div>
              <p className="px-6 py-4 text-sm opacity-90 text-center">{work.caption}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BLOG/PUBLICATIONS SECTION */}
      <section className="bg-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="text-gray-900 text-xs sm:text-sm space-y-2">
            {publications.map((pub, idx) => (
              <li key={idx} className="font-normal">{pub.text}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ONGOING DEVELOPMENTS SECTION */}
      <section className="bg-gray-500 text-white py-10 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Ongoing Developments</h2>
      </section>
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {ongoing.map((item, i) => (
      <div key={i} className="overflow-hidden bg-[#0b0d33] rounded-2xl flex flex-col">
        <div style={{ aspectRatio: "1 / 1", borderRadius: "50%", width: "12rem", height: "12rem" }} className="flex items-center justify-center mx-auto bg-white/10">
  <img
    src={item.src}
    alt="Loading..."
    style={{ aspectRatio: "1 / 1", borderRadius: "50%", width: "11.5rem", height: "11.5rem" }}
    className="tw-rounded-md tw-object-cover"
  />
</div>
        <p className="px-4 py-2 text-xs sm:text-sm text-center text-white opacity-90">{item.caption}</p>
      </div>
    ))}
  </div>
  <div className="pt-4">
    <p className="text-xs text-center text-black max-w-2xl mx-auto">
      We are pioneering the use of biomaterials, stem cells, and blood-derived proteins to develop novel regenerative therapies for conditions affecting blood, skin, muscle, bone, and neural tissues. Our approach has the potential to expand into immunotherapy for patients in critical need. In parallel, we are leveraging the power of artificial intelligence and machine learning to enhance the precision and efficiency of our bioprinting and electrospinning systems. Through advanced algorithms and predictive modeling, we aim to enable personalized treatment strategies that ensure targeted and effective interventions. By integrating AI/ML with our next-generation bioprinting technologies and biomaterials, we are driving a new era of precision healthcare—committed to transforming the future of medicine and biomedical research.
    </p>
  </div>
</section>



      {/* OUR COLLABORATORS SECTION */}
      <section className="bg-gray-500 text-white py-10 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Our Collaborators</h2>
      </section>
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="flex flex-wrap gap-x-12 gap-y-12 justify-center">
            {collaborators.map((collab, idx) => (
              <img key={idx} src={collab.src} alt={collab.alt} className="object-contain" style={{ height: idx < 2 ? 80 : 82, aspectRatio: 2, maxWidth: '250px', minWidth: '120px' }} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
