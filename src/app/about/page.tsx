import CtoImage from "../../../ctoImage.jpeg";
import Ishrat from "../../app/assets/ishratIntern.jpeg";
import Anderson from "../../app/assets/andersonIntern.jpeg";
import Irfan from "../../app/assets/irfhanIntern.jpeg";
import Rahul from "../../app/assets/rahul.jpeg";
import Vishal from "../../app/assets/Vishal.jpeg"
import SunilKumar from "../../app/assets/sunilKumar.jpeg";
import Satyanarayan from "../../app/assets//satyanarayan.jpeg";
import Sandeep from "../../app/assets/sandeep.jpeg"

const employeeTestData = [
  {
    name: "Ishrat Jahan",
    role: "Master's in Pharmacology Intern employee ",
    image: Ishrat.src,
  },
  {
    name: "Irfan Ahmed",
    role: "B.Tech in electronics Intern",
    image: Irfan.src, // Add image src if available
  },
  {
    name: "Anderson",
    role: "Master’s in Biomedical engineering CYCU, Taiwan",
    image: Anderson.src, // Add image src if available
  },
];

export default function AboutPage() {
  return (
    <div>
    <div style={{display: "flex", flexDirection: "column", gap: "15px"}}>
      {/* From blueprint to tissue banner */}
      <section className="relative h-[320px] sm:h-[380px] flex items-center justify-center text-white" style={{backgroundImage:"url('https://bc-user-uploads.brandcrowd.com/public/media-Production/d57c710c-28d8-4de3-aa5f-c1e4316232a7/cab90937-74af-4717-9ea5-b84da2ec8026_2x')", backgroundSize:"cover", backgroundPosition:"center"}}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <p className="text-xl sm:text-2xl font-semibold">
            &quot;From Blueprint to Tissue — Where Research Inspires Innovation in Regenerative Medicine&quot;
          </p>
        </div>
      </section>
      {/* Our Mission band with background image */}
      <section className="relative py-10 sm:py-12 text-white" style={{backgroundImage:"url('https://bc-user-uploads.brandcrowd.com/public/media-Production/d57c710c-28d8-4de3-aa5f-c1e4316232a7/f5c07045-8141-4a76-a9c8-a05910407f05')", backgroundSize:"cover", backgroundPosition:"center",}}>
        <div className="absolute inset-0 bg-[#0b0d33]/85" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-sm sm:text-base opacity-95">
              At SND Regenics, we develop advanced technologies in personalized and regenerative medicine to treat complex conditions like nerve and spinal cord injuries. Our innovations in stem cells, biomaterials, and 3D bioprinting extend to blood, skin, bone, muscle, and immune disorders, transforming healthcare through patient-centric, next-generation solutions.
            </p>
          </div>
        </div>
      </section>
      {/* Our Story band */}
      <section className="bg-gray-500/80 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Our Story</h2>
          <p className="mx-auto max-w-4xl text-sm sm:text-base opacity-95">
            Our founder and CEO, Dr. Lokesh Agrawal, witnessed the profound suffering and financial hardships faced by a close family friend with a spinal cord injury. The emotional toll on the patient and their family left a deep impact on him. While exploring potential solutions, he quickly realized that neural cells are incredibly specialized with a limited ability to regenerate. Additionally, he found that current research methods fell short due to the lack of advanced technology and suitable biomaterials necessary to create 3D neural tissues in the lab for effective treatment. This revelation inspired him to develop innovative bioprinting technology and specialized biomaterials, leading to the founding of SND Regenic Pvt. Ltd.
          </p>
        </div>
      </section>
      </div>
      {/* Video section just before Our Team */}
      
      <section className="max-w-4xl mx-auto px-4 py-10">
        <p className="text-xs opacity-80 mb-2" style={{color: "grey"}}>
          Check Out the exclusive interview from the Okinawa Institute of Science & Technology Innovation department, official Video Published by OIST Innovation
        </p>
        <div className="relative w-full overflow-hidden rounded" style={{ paddingTop: "56.25%" }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/3M0Z_rfXWuc"
            title="OIST Innovation Video"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </section>
      <section className="bg-[#0b0d33] text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl sm:text-3xl font-semibold mb-10">Team Japan</h2>
          <div className="flex flex-wrap lg:flex-nowrap justify-center gap-x-6 gap-y-10">
            {/* Member 1 */}
            <div className="flex flex-col items-center w-72 lg:w-1/4">
              <img
                src="https://bc-user-uploads.brandcrowd.com/public/media-Production/d57c710c-28d8-4de3-aa5f-c1e4316232a7/3d8f23ae-0297-4309-bb14-bba4c3b059d0_2x"
                alt="Dr. Lokesh Agrawal (PhD)"
                className="w-56 h-56 rounded-full object-cover mb-4 border-4 border-white"
              />
              <h3 className="font-bold text-base text-center">CEO &amp; Founder Dr. Lokesh Agrawal (PhD)</h3>
              <p className="text-xs text-center opacity-90 mt-0.5">
                PhD. Neuroscience from University of Tsukuba. Expert of tissue engineering, stem cells &amp; biomaterials. More than 5 years experience of R&amp;D and business development.
              </p>
            </div>

            {/* Member 2 */}
            <div className="flex flex-col items-center w-72 lg:w-1/4">
              <img
                src="https://bc-user-uploads.brandcrowd.com/public/media-Production/d57c710c-28d8-4de3-aa5f-c1e4316232a7/98d83016-aba3-4112-a26e-8ce89f92e4a6_2x"
                alt="Mohd Yaqub Khan"
                className="w-56 h-56 rounded-full object-cover mb-4 border-4 border-white"
              />
              <h3 className="font-bold text-base text-center">CRO &amp; Co-Founder Mohd Yaqub Khan</h3>
              <p className="text-xs text-center opacity-90 mt-0.5">
                R&amp;D Scientist with more than 5 years of expertise in animal trials, GMP production, and drug trials.
              </p>
            </div>
            

            {/* Member 3 */}
            <div className="flex flex-col items-center w-72 lg:w-1/4">
              <img
                src="https://bc-user-uploads.brandcrowd.com/public/media-Production/d57c710c-28d8-4de3-aa5f-c1e4316232a7/836d986d-3310-44df-b596-725a0480e285_2x"
                alt="Naoto Takahashi"
                className="w-56 h-56 rounded-full object-cover mb-4 border-4 border-white"
              />
              <h3 className="font-bold text-base text-center">CAO &amp; Director Naoto Takahashi</h3>
              <p className="text-xs text-center opacity-90 mt-0.5">
                Naoto Takahashi is a Japanese Citizen and a senior business executive having experience in sales, administration and finance management
              </p>
            </div>

            {/* Member 4 */}
            <div className="flex flex-col items-center w-full max-w-xs sm:w-72">
              <img
                src="https://bc-user-uploads.brandcrowd.com/public/media-Production/d57c710c-28d8-4de3-aa5f-c1e4316232a7/eb55155b-c4ae-484d-83e4-e5a9946369bd_2x"
                alt="Prof. Randeep Rakwal"
                className="w-56 h-56 rounded-full object-cover mb-4 border-4 border-white"
              />
              <h3 className="font-bold text-base text-center">Mentor &amp; Advisor Prof. Randeep Rakwal</h3>
              <p className="text-xs text-center opacity-90 mt-0.5">
                Senior professor at University of Tsukuba, visionary leader, with entrepreneurship and social impact projects.
              </p>
            </div>
            {/* Member 5 */}
            {/* <div className="flex flex-col items-center w-full max-w-xs sm:w-72">
              <img
                src={Vishal.src}
                alt="Dr. Vishal Gangadhar Warke (M.B.B.S.)"
                className="w-56 h-56 rounded-full object-cover mb-4 border-4 border-white"
              />
              <h3 className="font-bold text-base text-center">Co-founder and Mentor Dr. Vishal Warke(MBBS)</h3>
              <p className="text-xs text-center opacity-90 mt-0.5">
                Other affiliations: Director R&D Cell Biology, HiMedia Labs Pvt Ltd, Mumbai, India
              </p>
            </div> */}
          </div>
          


          <h2 className="text-center text-2xl sm:text-3xl font-semibold mb-10 mt-15">Team India</h2>
          <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 justify-items-center">

        {/* Member 1 */}
        <div className="flex flex-col items-center w-full max-w-xs">
          <img
            src="https://bc-user-uploads.brandcrowd.com/public/media-Production/d57c710c-28d8-4de3-aa5f-c1e4316232a7/3d8f23ae-0297-4309-bb14-bba4c3b059d0_2x"
            alt="Dr. Lokesh Agrawal (PhD)"
            className="w-56 h-56 rounded-full object-cover mb-4 border-4 border-white"
          />
          <h3 className="font-bold text-base text-center">
            CEO & Founder Dr. Lokesh Agrawal (PhD)
          </h3>
          <p className="text-xs text-center opacity-90 mt-0.5">
            PhD. Neuroscience from University of Tsukuba. Expert of tissue engineering, 
            stem cells & biomaterials. More than 5 years experience of R&D and business development.
          </p>
        </div>

        {/* Member 2 */}
        <div className="flex flex-col items-center w-full max-w-xs">
          <img
            src={SunilKumar.src}
            alt="Dr. Sunil Kumar Vimal (CRO India)"
            className="w-56 h-56 rounded-full object-cover mb-4 border-4 border-white"
          />
          <h3 className="font-bold text-base text-center">Dr. Sunil Kumar Vimal (CRO India)</h3>
          <p className="text-xs text-center opacity-90 mt-0.5">
            Ph.D. In neuroscience and expert of Neural Tissue Engineering. 
            More than 15 years research experience.
          </p>
        </div>

        {/* Member 3 */}
        <div className="flex flex-col items-center w-full max-w-xs">
          <img
            src={Satyanarayan.src}
            alt="Shree Satyanarayan Gupta (CAO India)"
            className="w-56 h-56 rounded-full object-cover mb-4 border-4 border-white"
          />
          <h3 className="font-bold text-base text-center">
            Shree Satyanarayan Gupta (CAO of India)
          </h3>
          <p className="text-xs text-center opacity-90 mt-0.5">
            30 years experience in public sector for accounting, auditing,
            financial reporting and management.
          </p>
        </div>

        {/* Member 4 */}
        <div className="flex flex-col items-center w-full max-w-xs">
          <img
            src={Vishal.src}
            alt="Dr. Vishal Gangadhar Warke"
            className="w-56 h-56 rounded-full object-cover mb-4 border-4 border-white"
          />
          <h3 className="font-bold text-base text-center">
            Mentor Dr. Vishal Warke (MBBS)
          </h3>
          <p className="text-xs text-center opacity-90 mt-0.5">
            Director R&D Cell Biology, HiMedia Labs Pvt Ltd, Mumbai, India
          </p>
        </div>

        {/* Member 5 – Center Row (start at column 2 on large screens) */}
        <div className="flex flex-col items-center w-full max-w-xs lg:col-start-2">
          <img
            src={Rahul.src}
            alt="Dr. Rahul Gangadhar Warke"
            className="w-56 h-56 rounded-full object-cover mb-4 border-4 border-white"
          />
          <h3 className="font-bold text-base text-center">
            Mentor Dr. Rahul Warke (PhD)
          </h3>
          <p className="text-xs text-center opacity-90 mt-0.5">
            Director R&D Micro-Biology, HiMedia Labs Pvt Ltd, Mumbai, India
          </p>
        </div>

        {/* Member 6 */}
        <div className="flex flex-col items-center w-full max-w-xs">
          <img
            src={Sandeep.src}
            alt="Dr. Sandip Patil"
            className="w-56 h-56 rounded-full object-cover mb-4 border-4 border-white"
          />
          <h3 className="font-bold text-base text-center">
            Mentor Dr. Sandip Patil
          </h3>
          <p className="text-xs text-center opacity-90 mt-0.5">
            Director (2010-Present), E-Spin Nanotech Pvt. Ltd., IIT Kanpur
          </p>
        </div>
      </div>

           </div>
      </section>


      <div style={{backgroundColor: "red",marginTop:"2%"}}>
      <section className="bg-[#0b0d33] text-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl sm:text-3xl font-semibold mb-10">interns/employees</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {employeeTestData?.map((item,i)=> (
              <div key={i} className="text-center">
                
                <div className="w-48 h-48 mx-auto rounded-full bg-white/10" >
                <img src={item.image} alt={item.name} className="w-48 h-48 mx-auto rounded-full object-cover mt-4" />
                </div>
                
                <h3 className="mt-4 font-medium">{item.name}</h3>
                <p className="text-xs opacity-80">{item.role}</p>
                
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>
      
    </div>
  );
}


