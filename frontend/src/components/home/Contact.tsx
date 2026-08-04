import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

function Contact() {
  return (
    <section className="bg-black text-white py-32">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center">
          <span className="uppercase tracking-[0.35em] text-[#c19b6c] text-xs">
            CONTACT
          </span>

          <h2 className="mt-6 text-5xl font-bold">GET IN TOUCH</h2>

          <p className="mt-6 text-neutral-400 max-w-2xl mx-auto">
            We'd love to hear from you. Whether you're booking a service,
            looking for a partnership, or simply have a question... We're here.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 mt-20">
          {/* LEFT */}

          <div className="space-y-8">
            <div className="flex items-start gap-5">
              <MapPin className="text-[#c19b6c]" size={24} />

              <div>
                <h3 className="font-semibold">Address</h3>

                <p className="text-neutral-400 mt-2">
                  Johannesburg, South Africa
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <Phone className="text-[#c19b6c]" size={24} />

              <div>
                <h3 className="font-semibold">Phone</h3>

                <p className="text-neutral-400 mt-2">+27 12 345 6789</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <Mail className="text-[#c19b6c]" size={24} />

              <div>
                <h3 className="font-semibold">Email</h3>

                <p className="text-neutral-400 mt-2">hello@blaq.co.za</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <Clock className="text-[#c19b6c]" size={24} />

              <div>
                <h3 className="font-semibold">Working Hours</h3>

                <p className="text-neutral-400 mt-2">
                  Monday - Saturday
                  <br />
                  08:00 - 18:00
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-5 outline-none focus:border-[#c19b6c]"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-5 outline-none focus:border-[#c19b6c]"
            />

            <textarea
              rows={6}
              placeholder="Tell us how we can help..."
              className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-5 outline-none focus:border-[#c19b6c]"
            />

            <button className="bg-[#c19b6c] hover:bg-white transition-all duration-300 text-black px-10 py-4 rounded-sm uppercase tracking-[0.2em] font-semibold flex items-center gap-3">
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
