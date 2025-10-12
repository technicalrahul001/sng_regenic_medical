export default function ProductsServicesPage() {
  return (
    <div>
      {/* Our Products Section */}
<section className="relative w-full">
  {/* Heading Over Background Image */}
  <div className="relative w-full h-[260px] flex items-center justify-center">
    <img
      src="https://bc-user-uploads.brandcrowd.com/public/media-Production/d57c710c-28d8-4de3-aa5f-c1e4316232a7/d8dca140-fea6-472b-a782-2b5ad35a2294_2x"
      alt=""
      className="absolute inset-0 w-full h-full object-cover z-0"
      style={{ top: 0, left: 0, height: '260px' }}
    />
    <h2 className="relative z-10 text-white text-3xl font-bold text-center">Our Products</h2>
  </div>

  {/* Product Cards on Solid Navy Background */}
  <div className="w-full py-12 px-2" style={{ background: "#0b0d33" }}>
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12" style={{color: 'white'}}>
      {/* Product 1 */}
      <div className="flex flex-col items-center">
        <img
          src="https://bc-user-uploads.brandcrowd.com/public/media-Production/d57c710c-28d8-4de3-aa5f-c1e4316232a7/cab90937-74af-4717-9ea5-b84da2ec8026_2x"
          alt=" For more details please contact with us..!"
          className="rounded-md object-cover mb-4 w-full max-w-[350px] h-[140px]"
        />
        <h3 className="text-white font-semibold text-lg mb-2 text-center">Hybrid Fabrication Technology</h3>
        <p className="text-gray-200 text-xs md:text-sm text-center">
          Our Hybrid Fabrication Technology combines 3D-bioprinting and 3D-electrospinning to offer precision and versatility in tissue engineering. The 3D-bioprinting system features high-precision motors and customizable nozzles (14G to 22G) to create intricate tissue structures with a resolution of 0.02 μm half-pitch. Using biocompatible and biodegradable bio-inks, researchers can design tissue models that support cell growth and differentiation. The 3D-electrospinning system utilizes proprietary nanogrid technology to produce nanofiber scaffolds with controlled fiber alignment, porosity, and geometry. By converting CAD designs into G-code, users can print highly customized scaffolds with micron-level precision, using a variety of biomaterials. Together, these technologies enable the fabrication of multi-layered tissue constructs, enhancing regenerative therapies, drug testing, and personalized regenerative devices.
        </p>
      </div>
      {/* Product 2 */}
      <div className="flex flex-col items-center">
        <img
          src="https://bc-user-uploads.brandcrowd.com/public/media-Production/d57c710c-28d8-4de3-aa5f-c1e4316232a7/b561fb54-237e-49c0-aac7-e99edb474a4d"
          alt="For more details please contact with us..!"
          className="rounded-md object-cover mb-4 w-full max-w-[350px] h-[140px]"
          
        />
        <h3 className="text-white font-semibold text-lg mb-2 text-center">Biomaterials for Neural Tissue Engineering Test</h3>
        <p className="text-gray-200 text-xs md:text-sm text-center">
          We offer a range of advanced biomaterials specifically designed to support neural tissue engineering. Our portfolio includes two key types of biomaterials: electrospinning materials and bio-inks. The electrospinning materials are formulated to produce nanofiber-based 3D scaffolds that mimic the natural extracellular matrix, offering an ideal environment for neural cell adhesion, growth, and differentiation. Alongside these, we provide a proprietary bio-ink for 3D printing that is both biocompatible and conductive, specifically formulated to promote the growth and maintenance of neural cells. This bio-ink can be mixed with various cell types, such as neural stem cells or neurons, enabling the fabrication of complex tissue constructs with a controlled cellular density and architecture. The bio-ink degrades naturally over time, leaving behind a mature tissue that integrates seamlessly into the body.
        </p>
      </div>
    </div>
  </div>
</section>
{/* Place directly below the Products section */}
<div className="w-full flex justify-center py-8" style={{ background: "#fff" }}>
  {/* Embedded YouTube video */}
  <iframe
    id="ytplayer"
    className="rounded-md shadow-lg"
    width="640"
    height="360"
    src="https://www.youtube.com/embed/EDc5n2OHAPE?autoplay=0&mute=1"
    title="Demo Printing with 3D-Bioprinter"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>
{/* Our Services Header Bar */}
<div className="w-full py-16 text-center" style={{ background: "#899c9b" }}>
  <h2 className="text-white text-3xl font-semibold">Our Services</h2>
</div>

{/* Services Cards on Dark Blue */}
<div className="w-full py-12" style={{ background: "#0b0d33" }}>
  <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
    {/* Service 1 */}
    <div className="flex flex-col items-center">
      <img
        src="https://bc-user-uploads.brandcrowd.com/public/media-Production/d57c710c-28d8-4de3-aa5f-c1e4316232a7/73766e57-46b8-445c-9db8-ec4b0db80de6_2x"
        alt="Customized 3D Scaffolds & Soft Tissues"
        className="rounded-md object-cover mb-4 w-full max-w-[340px] h-[140px]"
        style={{ aspectRatio: "2 / 1" }}
      />
      <h3 className="text-white font-bold text-lg mb-2 text-center">Customized 3D Scaffolds & Soft Tissues</h3>
      <p className="text-gray-100 text-sm text-center">
        By leveraging our deep knowledge in neural tissue architecture and the properties of various biomaterials, we are able to provide clients with customized 3D scaffolds and soft tissues specifically tailored to their unique R&D, drug testing, and biomedical research needs. Utilizing our hybrid fabrication technology, intricate nanogrid designs, and biocompatible, biodegradable bio-inks, we create realistic, multi-layered neural tissue models that closely replicate the complex architecture of the nervous system. By providing a more physiologically relevant 3D environment, our customized scaffolds and soft tissue enable researchers to conduct more accurate studies, improve drug testing reliability, and significantly advance the development of innovative novel therapies.
      </p>
    </div>
    {/* Service 2 */}
    <div className="flex flex-col items-center">
      <img
        src="https://bc-user-uploads.brandcrowd.com/public/media-Production/d57c710c-28d8-4de3-aa5f-c1e4316232a7/f839bbd0-cbff-4145-9a52-e29999c6a5cc"
        alt="Comprehensive Training Program"
        className="rounded-md object-cover mb-4 w-full max-w-[340px] h-[140px]"
        style={{ aspectRatio: "2 / 1" }}
      />
      <h3 className="text-white font-bold text-lg mb-2 text-center">Comprehensive Training Program</h3>
      <p className="text-gray-100 text-sm text-center">
        Our comprehensive training programs in 3D bioprinting, electrospinning, and biomaterial engineering empower researchers and professionals with hands-on experience in cutting-edge biomedical applications. Participants learn how to operate 3D bioprinters, prepare customized bio-inks, design and fabricate nanofiber scaffolds using electrospinning, and synthesize biomaterials tailored for neural tissue engineering. The training covers essential skills such as equipment setup, material characterization, and cell-biomaterial interactions. Adapted to the specific needs of scientists, researchers, and industry professionals, our programs provide both theoretical knowledge and practical expertise, facilitating advancements in tissue engineering, regenerative medicine, and drug testing.
      </p>
    </div>
  </div>
</div>


    </div>
  );
}


