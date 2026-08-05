import { useNavigate } from "react-router";
import PageHeader from "../../../components/common/PageHeader";
import JourneyProgress from "../../../components/common/JourneyProgress";

function PaymentComingSoon() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <PageHeader
        title="Payment Experience"
        subtitle="Secure online payments are coming soon."
        backLabel="Back to Review"
        backTo="/customer/review"
      />
      <JourneyProgress current="payment" />
      <div className="max-w-4xl mx-auto px-8 py-12">
        <div className="bg-[#111] border border-neutral-800 rounded-3xl p-12 text-center">
          {/* Icon */}

          <div className="text-7xl mb-8">💳</div>

          <h2 className="text-4xl font-bold">Secure Payments Coming Soon</h2>

          <p className="text-[#c19b6c] text-xl mt-4">
            We're building a premium payment experience.
          </p>

          <p className="text-neutral-400 mt-8 leading-8 max-w-2xl mx-auto">
            Soon you'll be able to complete your booking securely using
            industry-leading payment solutions. Your experience has already been
            prepared and will soon be ready for instant confirmation.
          </p>

          {/* Features */}

          <div className="grid md:grid-cols-2 gap-5 mt-12 text-left">
            <div className="bg-[#090909] border border-neutral-800 rounded-2xl p-5">
              ✔ Debit & Credit Cards
            </div>

            <div className="bg-[#090909] border border-neutral-800 rounded-2xl p-5">
              ✔ Instant EFT
            </div>

            <div className="bg-[#090909] border border-neutral-800 rounded-2xl p-5">
              ✔ Apple Pay
            </div>

            <div className="bg-[#090909] border border-neutral-800 rounded-2xl p-5">
              ✔ Google Pay
            </div>

            <div className="bg-[#090909] border border-neutral-800 rounded-2xl p-5">
              ✔ PayFast Integration
            </div>

            <div className="bg-[#090909] border border-neutral-800 rounded-2xl p-5">
              ✔ Instant Booking Confirmation
            </div>

            <div className="bg-[#090909] border border-neutral-800 rounded-2xl p-5">
              ✔ Email Receipt
            </div>

            <div className="bg-[#090909] border border-neutral-800 rounded-2xl p-5">
              ✔ QR Code Check-In
            </div>
          </div>

          {/* Info */}

          <div className="mt-12 bg-[#090909] border border-neutral-800 rounded-2xl p-8">
            <p className="text-neutral-300 leading-7">
              Thank you for helping us build the future of premium beauty,
              wellness and lifestyle experiences. Payment integration is the
              final step before launch.
            </p>
          </div>

          {/* Buttons */}

          <div className="flex justify-center gap-5 mt-10">
            <button
              onClick={() => navigate("/customer/review")}
              className="px-8 py-4 border border-neutral-700 rounded-xl hover:border-[#c19b6c] transition-all duration-300"
            >
              ← Back to Review
            </button>

            <button
              disabled
              className="bg-neutral-800 text-neutral-500 px-8 py-4 rounded-xl font-bold cursor-not-allowed"
            >
              Payment Coming Soon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentComingSoon;
