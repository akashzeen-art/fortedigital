import Nav from "@/components/Nav";

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-background pt-20">

        {/* Hero */}
        <section className="px-6 md:px-16 lg:px-32 py-20 border-b border-[#d0d0d0]">
          <span className="text-2xl md:text-4xl font-semibold text-[#5a6a85]">Contact Us</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-[#111] mt-4 max-w-5xl leading-tight">
            Let&apos;s Build Something Great Together.
          </h1>
          <p className="text-[#444444] text-base md:text-lg mt-6 max-w-2xl leading-relaxed">
            Reach out to us for business enquiries, partnerships, or general questions. We&apos;d love to hear from you.
          </p>
        </section>

        {/* Contact Info */}
        <section className="px-6 md:px-16 lg:px-32 py-16">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#5a6a85] font-medium mb-2">General Questions</p>
                <a href="mailto:info@fortedigital.com" className="text-lg font-medium text-[#111] hover:underline">info@fortedigital.com</a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-[#5a6a85] font-medium mb-2">Business Enquiries</p>
                <a href="mailto:business@fortedigital.com" className="text-lg font-medium text-[#111] hover:underline">business@fortedigital.com</a>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#5a6a85] font-medium mb-2">Address</p>
                <p className="text-base text-[#444444] leading-relaxed">
                  417, 4th Floor, Tower A<br />
                  Spaze I Tech Park, Sohna Road<br />
                  Gurugram, Haryana - 122018
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-[#5a6a85] font-medium mb-3">Socials</p>
                <div className="flex flex-col gap-2">
                  <a href="https://x.com/Forte_llp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#444] hover:text-black transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="black"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    Twitter
                  </a>
                  <a href="https://www.linkedin.com/company/130913930" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#444] hover:text-black transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#0077B5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    LinkedIn
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61590491500206" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#444] hover:text-black transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
