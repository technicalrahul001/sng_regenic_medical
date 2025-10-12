export default function NewsEventsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[220px] sm:h-[300px] flex items-center justify-center text-white"
        style={{
          backgroundImage: "url(/hero-news.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative text-3xl sm:text-4xl font-semibold">News</h1>
      </section>

      {/* Top Video Section */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <p className="text-xs opacity-80 mb-2">
          Check Out the exclusive interview from the Okinawa Institute of Science & Technology Innovation department, official Video Published by OIST Innovation
        </p>
        <div className="relative w-full overflow-hidden rounded" style={{ paddingTop: "56.25%" }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/4f4a1213-babe-42b9-979d-d0fc00a63ec0"
            title="OIST Innovation Video"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </section>

      {/* News Article Section */}
      <section className="bg-[#0b0d33] text-white py-10">
        <div className="max-w-5xl mx-auto px-4 grid sm:grid-cols-2 gap-6">
          <figure className="bg-white/5 rounded-md p-3">
            <img
              className="w-full rounded"
              src="https://bc-user-uploads.brandcrowd.com/public/media-Production/d57c710c-28d8-4de3-aa5f-c1e4316232a7/16f3c16a-6f2d-416a-b2ee-b0f332fd5a86_2x"
              alt="image"
            />
            <figcaption className="text-xs mt-2 opacity-90">
              We featured in the Indian Sun, a local Australian newspaper! Click on the image for a link to the article.
            </figcaption>
          </figure>
          <figure className="bg-white/5 rounded-md p-3">
            <img
              className="w-full rounded"
              src="https://bc-user-uploads.brandcrowd.com/public/media-Production/d57c710c-28d8-4de3-aa5f-c1e4316232a7/6472d099-0318-4312-8d12-a1a856267651_2x"
              alt="image"
            />
            <figcaption className="text-xs mt-2 opacity-90">
              We featured in a news article in LedgerLife! Click on the image for a link to the article.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Second Video */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <p className="text-xs opacity-80 mb-2">Check out our interview with Ms. Maria Irene!</p>
        <div className="relative w-full overflow-hidden rounded" style={{ paddingTop: "56.25%" }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/Z3P3ob-ZKHI"
            title="Interview with Maria Irene"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </section>

      {/* Events Section */}
      <section className="bg-[#0b0d33] py-12 text-white text-center">
        <h2 className="text-2xl font-semibold mb-8">Events</h2>

        <div className="bg-gray-600 py-2 mb-6">
          <h3 className="text-lg font-medium">2024</h3>
        </div>

        <div className="max-w-5xl mx-auto px-4 grid sm:grid-cols-3 md:grid-cols-2 gap-6">
          {[
            {
              src: "https://bc-user-uploads.brandcrowd.com/public/media-Production/d57c710c-28d8-4de3-aa5f-c1e4316232a7/8bef2150-0f42-49fe-92c0-3898a90dcc31_2x",
              caption: "Hokkaido Innovation Week",
            },
            {
              src: "https://bc-user-uploads.brandcrowd.com/public/media-Production/d57c710c-28d8-4de3-aa5f-c1e4316232a7/10082881-511c-4cb4-bef6-ccbda168aed6_2x",
              caption: "Tokyo Take-off",
            },
            {
              src: "https://bc-user-uploads.brandcrowd.com/public/media-Production/d57c710c-28d8-4de3-aa5f-c1e4316232a7/1c1247fe-cbbc-430a-8c93-48e844f1567d_2x",
              caption: "Shushi Tech",
            },
            {
              src: "https://bc-user-uploads.brandcrowd.com/public/media-Production/d57c710c-28d8-4de3-aa5f-c1e4316232a7/526a1c46-08d2-4057-bb4a-2c1774c79f54_2x",
              caption: "Galacia Biodays Spain",
            },
            {
              src: "https://bc-user-uploads.brandcrowd.com/public/media-Production/d57c710c-28d8-4de3-aa5f-c1e4316232a7/fb22e876-6f78-46ab-a4af-24edc3759f05_2x",
              caption: "Bio Asia-Taiwan",
            },
            {
              src: "https://bc-user-uploads.brandcrowd.com/public/media-Production/d57c710c-28d8-4de3-aa5f-c1e4316232a7/858bc131-e317-4125-a2cb-ac4b8ffa9332_2x",
              caption: "MOU signed with MLSU public university, Udaipur",
            },
          ].map((item, idx) => (
            <figure key={idx} className="bg-white/5 rounded-md overflow-hidden p-2 h-88">
              <img src={item.src} alt={item.caption} className="w-full rounded-md" style={{height: "80%", marginTop: "3%"}} />
              <figcaption className="text-xs mt-2 text-zinc-300" style={{marginTop:"5%"}}>{item.caption}</figcaption>
            </figure>
          ))}
        </div>

        <p className="text-[10px] mt-10 text-zinc-400">
          © 2024 by SND REGENIC PVT LTD. All Rights Reserved.
        </p>
      </section>
    </div>
  );
}
