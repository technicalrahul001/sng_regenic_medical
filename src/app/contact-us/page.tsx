'use client';

import { useState } from 'react';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    subject: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    console.log('Submitting form data:', formData);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Response status:', response.status);
      const responseData = await response.json();
      console.log('Response data:', responseData);

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          subject: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Band with form */}
      <section className="bg-[#0b0d33] text-white py-10 sm:py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-center text-xl sm:text-2xl font-semibold">Contact Us</h2>
          <p className="mt-2 text-center text-xs sm:text-sm opacity-90">
            Want a Demo, more info on our products, or ready to collaborate? Let&apos;s make it happen!
          </p>
          
          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md text-center">
              Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md text-center">
              Sorry, there was an error sending your message. Please try again or contact us directly.
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="h-11 rounded-md px-3 bg-white text-black placeholder-gray-500 border border-white/60 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="First name*" 
            />
            <input 
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="h-11 rounded-md px-3 bg-white text-black placeholder-gray-500 border border-white/60 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="Last name*" 
            />
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="h-11 rounded-md px-3 bg-white text-black border border-white/60 shadow-sm md:col-span-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="" disabled>Select Subject*</option>
              <option>Hybrid Fabrication Technology</option>
              <option>Biomaterials for Neural Tissue Engineering</option>
              <option>Customized 3D Scaffolds & Soft Tissues</option>
              <option>Comprehensive Training Program</option>
            </select>
            <input 
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="h-11 rounded-md px-3 bg-white text-black placeholder-gray-500 border border-white/60 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="Email address*" 
            />
            <input 
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="h-11 rounded-md px-3 bg-white text-black placeholder-gray-500 border border-white/60 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="Phone number" 
            />
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="rounded-md px-3 py-2 bg-white text-black placeholder-gray-500 border border-white/60 shadow-sm md:col-span-2 h-28 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="Message*" 
            />
            <div className="md:col-span-2 flex justify-center">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-gray-500 hover:bg-gray-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-8 py-2 rounded-md transition-colors duration-200"
              >
                {isSubmitting ? 'Sending...' : 'Send'}
              </button>
            </div>
          </form>
        </div>
      </section>
      {/* Map embed */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative w-full overflow-hidden rounded border border-black/[.08] dark:border-white/[.145]" style={{paddingTop:"56.25%"}}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.google.com/maps?q=26.8351271,75.8286425&z=15&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
      {/* Social follow band */}
      <section className="bg-[#0b0d33] text-white py-8">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h3 className="font-semibold">Follow us on</h3>
    <div className="mt-4 flex items-center justify-center gap-4 opacity-90 text-sm">

      {/* Facebook */}
      <a
        href="https://www.facebook.com/profile.php?id=61556220041881"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="flex items-center justify-center w-9 h-9 rounded-full bg-white text-[#030033] hover:opacity-80 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5">
          <path d="M6.2965 3.7118v1.9264H5V8h1.2965v7H8.96V8h1.7883s.1669-1.134.2517-2.3702H8.9704V4.0184c0-.2408.2909-.56.5779-.56H11V1H9.0265c-2.7952 0-2.73 2.359-2.73 2.7118Z" />
        </svg>
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/snd_regenic_okinawa?igsh=MWVmY2YycnNmdG12OA%3D%3D&utm_source=qr"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="flex items-center justify-center w-9 h-9 rounded-full bg-white text-[#030033] hover:opacity-80 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5">
          <path fillRule="evenodd" clipRule="evenodd" d="M7.7163 2c-1.6296 0-1.8336.0072-2.4732.036-.4978.01-.9904.104-1.4568.2784a2.9448 2.9448 0 0 0-1.0632.6924A2.9448 2.9448 0 0 0 2.0307 4.07a4.4126 4.4126 0 0 0-.2784 1.4568c-.0288.6396-.036.8436-.036 2.4732s.0072 1.8336.036 2.4732c.01.4978.104.9904.2784 1.4568a2.945 2.945 0 0 0 .6924 1.0632 2.945 2.945 0 0 0 1.0632.6924c.4664.1743.959.2685 1.4568.2784.6396.0288.84.036 2.4732.036s1.8336-.0072 2.4732-.036a4.4124 4.4124 0 0 0 1.4568-.2784 3.0688 3.0688 0 0 0 1.7556-1.7556 4.4124 4.4124 0 0 0 .2784-1.4568c.0288-.6396.036-.84.036-2.4732s-.0072-1.8336-.036-2.4732a4.4123 4.4123 0 0 0-.2784-1.4568 2.945 2.945 0 0 0-.6924-1.0632 2.945 2.945 0 0 0-1.0632-.6924 4.4126 4.4126 0 0 0-1.4568-.2784C9.5499 2.0072 9.3459 2 7.7163 2Zm0 2.9184a3.0816 3.0816 0 1 0 0 6.1632 3.0816 3.0816 0 0 0 0-6.1632Zm0 5.082A2.0004 2.0004 0 1 1 9.7167 8a2.0016 2.0016 0 0 1-2.0004 2.0004Zm3.9228-5.2032a.72.72 0 1 1-1.44 0 .72.72 0 0 1 1.44 0Z" />
        </svg>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/snd-regenic-biomed-175470324/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="flex items-center justify-center w-9 h-9 rounded-full bg-white text-[#030033] hover:opacity-80 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5">
          <path fillRule="evenodd" clipRule="evenodd" d="M3.5995 5.2546a1.5042 1.5042 0 0 1-.607-.1163A1.5295 1.5295 0 0 1 2.48 4.787a1.6324 1.6324 0 0 1-.354-.5306A1.6596 1.6596 0 0 1 2 3.6273a1.6635 1.6635 0 0 1 .1257-.6275 1.6365 1.6365 0 0 1 .3524-.53 1.5994 1.5994 0 0 1 .525-.3513 1.574 1.574 0 0 1 .6168-.1184 1.4882 1.4882 0 0 1 .6102.125c.1927.0843.3662.2085.5094.3648.1504.1464.2692.3234.3485.5195.0794.1962.1176.407.1122.6192a1.6598 1.6598 0 0 1-.1259.6289 1.6328 1.6328 0 0 1-.354.5306 1.5194 1.5194 0 0 1-.4942.3438 1.4943 1.4943 0 0 1-.5858.1227h-.0408ZM4.4 13.9999H2.8004a.608.608 0 0 1-.4202-.1835.633.633 0 0 1-.1798-.4287V6.2714a.6059.6059 0 0 1 .0391-.2321.5968.5968 0 0 1 .1244-.1985.583.583 0 0 1 .19-.1337.5732.5732 0 0 1 .226-.048H4.4a.6073.6073 0 0 1 .4205.1832.632.632 0 0 1 .1795.429v7.1384a.6288.6288 0 0 1-.186.4157.6044.6044 0 0 1-.414.1745Zm7.1997 0h2.0003a.4256.4256 0 0 0 .2743-.1269.442.442 0 0 0 .1253-.2796V8.3456a2.8818 2.8818 0 0 0-.1975-1.1067 2.8373 2.8373 0 0 0-.6041-.9408 2.772 2.772 0 0 0-.9156-.6265A2.7254 2.7254 0 0 0 11.2 5.4584h-.42a2.6585 2.6585 0 0 0-1.0926.2323 2.7067 2.7067 0 0 0-.9077.6627v-.2852a.4423.4423 0 0 0-.1252-.2796.4258.4258 0 0 0-.2744-.127H6.3798a.4062.4062 0 0 0-.2706.1122.422.422 0 0 0-.129.2674v7.5914a.4036.4036 0 0 0 .1284.2645.3878.3878 0 0 0 .2712.1028h2.1995a.3893.3893 0 0 0 .2716-.1027.4049.4049 0 0 0 .1292-.2646V9.2443c0-.671.48-1.2 1.0991-1.2a1.1582 1.1582 0 0 1 .454.0876c.1441.0595.2753.1475.386.259.2004.1824.2808.4665.2808.8338v4.3687a.4408.4408 0 0 0 .1249.2799.425.425 0 0 0 .2747.1266Z"/>
        </svg>
      </a>

      {/* Google Maps / Location */}
      <a
        href="https://maps.app.goo.gl/j2dNwkES5BLrnbfo7?g_st=com.google.maps.preview.copy"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Location"
        className="flex items-center justify-center w-9 h-9 rounded-full bg-white text-[#030033] hover:opacity-80 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5">
          <path d="M7.89957 1C7.02533 1.00504 6.16817 1.24257 5.41603 1.6882C4.66388 2.13384 4.04383 2.77154 3.61947 3.5359C3.19512 4.30025 2.98174 5.16373 3.00122 6.03777C3.02071 6.9118 3.27237 7.76492 3.73037 8.5096L7.61957 14.8068C7.65626 14.8662 7.70759 14.9151 7.76863 14.9489C7.82967 14.9828 7.89838 15.0003 7.96817 15C8.03894 15.0001 8.10852 14.9818 8.17012 14.947C8.23172 14.9122 8.28321 14.8619 8.31957 14.8012L12.108 8.4438C12.5514 7.69778 12.7899 6.84787 12.7993 5.98007C12.8088 5.11227 12.5888 4.25738 12.1617 3.50191C11.7346 2.74643 11.1155 2.11719 10.367 1.67785C9.61861 1.23851 8.76741 1.00468 7.89957 1V1ZM7.89957 7.5674C7.57347 7.56934 7.25414 7.4744 6.98208 7.29461C6.71001 7.11482 6.49746 6.85829 6.37139 6.55754C6.24531 6.2568 6.21139 5.92539 6.27392 5.60533C6.33645 5.28528 6.49261 4.99101 6.72261 4.75983C6.95261 4.52865 7.24608 4.37098 7.56581 4.30681C7.88553 4.24265 8.21712 4.27488 8.5185 4.39941C8.81989 4.52394 9.07751 4.73517 9.25868 5.00632C9.43986 5.27746 9.53644 5.5963 9.53617 5.9224C9.53654 6.35734 9.3645 6.7747 9.05774 7.08303C8.75098 7.39137 8.3345 7.56555 7.89957 7.5674Z" />
        </svg>
      </a>

    </div>
  </div>
</section>

    </div>
  );
}


