import Header from "@/components/header";
import Footer from "@/components/footer";

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="bg-gray-50 min-h-[60vh] py-12">
        <div className="container mx-auto px-4 max-w-3xl bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-6 text-slate-800">Terms & Conditions</h1>
          <p className="mb-4 text-gray-700 text-lg">These Terms & Conditions govern your use of Mopzilla Cleaning's services and website. Please update this content with your actual terms and conditions.</p>
          <ul className="list-decimal pl-6 text-gray-700 space-y-2 mb-6">
            <li>By using our services, you agree to these terms.</li>
            <li>All content is for informational purposes and may change without notice.</li>
            <li>We reserve the right to refuse service at our discretion.</li>
            <li>Contact us for any questions regarding these terms.</li>
          </ul>
          <p className="text-gray-500 text-sm">Last updated: June 2024</p>
        </div>
      </main>
      <Footer />
    </>
  );
} 