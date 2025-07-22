import Header from "@/components/header";
import Footer from "@/components/footer";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-gray-50 min-h-[60vh] py-12">
        <div className="container mx-auto px-4 max-w-3xl bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-6 text-slate-800">Privacy Policy</h1>
          <p className="mb-4 text-gray-700 text-lg">This Privacy Policy explains how Mopzilla Cleaning collects, uses, and protects your information. Please update this content with your actual privacy policy details.</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li>We respect your privacy and are committed to protecting your personal data.</li>
            <li>Information you provide is used only for service delivery and communication.</li>
            <li>We do not sell or share your data with third parties except as required by law.</li>
            <li>For questions, contact us at <a href="mailto:info@mopzilla.cleaning" className="text-teal-600 underline">info@mopzilla.cleaning</a>.</li>
          </ul>
          <p className="text-gray-500 text-sm">Last updated: June 2024</p>
        </div>
      </main>
      <Footer />
    </>
  );
} 