import React, { useEffect, useState } from "react";
import api from "../services/api";
import Propertycard from "../components/Propertycard";

function Home() {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await api.get("/api/properties");
                setProperties(response.data);
            } catch (err) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchProperties();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="h-12 w-12 rounded-full border-4 border-gray-300 border-t-black animate-spin"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center mt-20 text-red-500 text-2xl">
                Failed to load properties.
            </div>
        );
    }

 return (
  <div className="min-h-screen bg-slate-100">

    {/* Navbar */}

    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

        <h1 className="text-2xl md:text-3xl font-bold">
          Alpha<span className="text-cyan-600">Props</span>
        </h1>

        <div className="hidden md:flex items-center gap-8 text-gray-700">

          <p className="cursor-pointer hover:text-cyan-600 transition">
            Properties
          </p>

          <p className="cursor-pointer hover:text-cyan-600 transition">
            About
          </p>

          <p className="cursor-pointer hover:text-cyan-600 transition">
            Invest
          </p>

          <button className="bg-gradient-to-r from-blue-700 to-cyan-500 text-white px-5 py-3 rounded-xl">
            Contact
          </button>

        </div>

      </div>

    </header>

    {/* Hero */}

    <section className="pt-32 lg:pt-40 pb-20 lg:pb-28 px-6 lg:px-10">

      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-14 items-center">

        <div>

          <div className="inline-flex items-center gap-2 bg-cyan-100 text-blue-700 px-5 py-2 rounded-full text-sm font-medium mb-6">
            Now Accepting New Investors
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">

            Invest in

            <span className="text-blue-700">
              {" "}Premium Real Estate
            </span>

            <br />

            with Confidence

          </h1>

          <p className="text-gray-600 text-lg leading-8 mb-10 max-w-xl">

            Access curated, high-yield property investments with transparent returns and long-term growth opportunities.

          </p>

          <div className="flex flex-wrap gap-4">

            <button className="bg-blue-700 text-white px-7 py-4 rounded-xl hover:bg-blue-800 transition">
              Explore Properties
            </button>

            <button className="border border-gray-300 px-7 py-4 rounded-xl hover:bg-white transition">
              Learn More
            </button>

          </div>

        </div>

        <div className="relative">

          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9"
            alt="Property"
            className="w-full h-[350px] md:h-[450px] lg:h-[550px] rounded-3xl object-cover shadow-2xl"
          />

          <div className="absolute top-5 right-5 bg-white p-5 rounded-2xl shadow-lg hidden md:block">

            <p className="text-2xl font-bold text-blue-700">
              7.2%
            </p>

            <p className="text-gray-500 text-sm">
              Annual Yield
            </p>

          </div>

          <div className="absolute bottom-5 left-5 bg-white p-5 rounded-2xl shadow-lg hidden md:block">

            <p className="text-2xl font-bold text-green-600">
              100%
            </p>

            <p className="text-gray-500 text-sm">
              Secured
            </p>

          </div>

        </div>

      </div>

    </section>

    {/* Trusted */}

    <section className="bg-white border-y border-gray-200 py-8">

      <div className="max-w-[1400px] mx-auto px-6 flex flex-wrap justify-center gap-8 text-gray-400 font-semibold">

        <p>Forbes</p>
        <p>Bloomberg</p>
        <p>Reuters</p>
        <p>CNBC</p>
        <p>WSJ</p>

      </div>

    </section>

    {/* Properties */}

    <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24">

      <div className="text-center mb-14">

        <p className="text-cyan-600 font-semibold mb-3">
          CURATED PORTFOLIO
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Discover Premium Properties
        </h2>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Handpicked real estate investments with verified yields and transparent performance.
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

        {properties.map((property) => (
          <Propertycard
            key={property.id}
            image={property.image}
            name={property.name}
            location={property.location}
            price={property.price}
            annual_yield={property.annual_yield}
          />
        ))}

      </div>

    </section>

    {/* Why Us */}

    <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24">

      <div className="text-center mb-16">

        <p className="text-cyan-600 font-semibold mb-3">
          OUR ADVANTAGES
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Why Investors Choose Us
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto">
          Secure, transparent and profitable investment opportunities.
        </p>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div className="bg-white p-8 rounded-3xl shadow hover:shadow-xl transition">
          <div className="text-4xl mb-5">📈</div>

          <h3 className="text-2xl font-bold mb-4">
            Diversified Portfolio
          </h3>

          <p className="text-gray-600">
            Invest across multiple property markets and reduce risk.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow hover:shadow-xl transition">
          <div className="text-4xl mb-5">🔒</div>

          <h3 className="text-2xl font-bold mb-4">
            Bank-Level Security
          </h3>

          <p className="text-gray-600">
            Enterprise-grade protection for your investments.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow hover:shadow-xl transition">
          <div className="text-4xl mb-5">💰</div>

          <h3 className="text-2xl font-bold mb-4">
            Passive Income
          </h3>

          <p className="text-gray-600">
            Earn annual returns through premium real estate assets.
          </p>
        </div>

      </div>

    </section>

    {/* CTA */}

    <section className="max-w-[1400px] mx-auto px-6 lg:px-10 pb-24">

      <div className="bg-gradient-to-r from-blue-800 to-cyan-600 rounded-3xl text-white text-center py-16 px-8">

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Grow Your Wealth?
        </h2>

        <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-10">
          Join thousands of investors building their future through real estate.
        </p>

        <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition">
          Create Free Account
        </button>

      </div>

    </section>

    {/* Footer */}

    <footer className="bg-gray-900 text-white">

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-14 flex flex-col lg:flex-row justify-between gap-10">

        <div>

          <h2 className="text-3xl font-bold mb-4">
            AlphaProps
          </h2>

          <p className="text-gray-400 max-w-md">
            Democratizing real estate investment through technology and transparency.
          </p>

        </div>

        <div className="flex flex-wrap gap-8 text-gray-300">

          <p className="cursor-pointer hover:text-white">
            Portfolio
          </p>

          <p className="cursor-pointer hover:text-white">
            About
          </p>

          <p className="cursor-pointer hover:text-white">
            Invest
          </p>

          <p className="cursor-pointer hover:text-white">
            Legal
          </p>

        </div>

      </div>

    </footer>

  </div>
);

}

export default Home;