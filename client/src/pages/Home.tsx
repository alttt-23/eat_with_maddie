import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";

/**
 * Eat With Maddie - Home Page
 * Design: Warm Rustic Elegance
 * Color Palette: Deep Burgundy (#8B3A3A), Warm Cream (#F5F1E8), Burnt Orange (#D2691E)
 * Typography: Playfair Display (headings), Lato (body)
 * Layout: Asymmetric, organic sections with generous whitespace
 */

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const menuItems = [
    {
      name: "Okongobong",
      description: "Yam and fried plantain (dodo) - A traditional Cameroonian favorite",
      price: "2500 frs",
      image:
        "https://private-us-east-1.manuscdn.com/sessionFile/zoVQTpT75G1jzImRjOHJIg/sandbox/e1b7H1suFwXIRNpNGaA8GW-img-2_1771855433000_na1fn_b2tvbmdvYm9uZy1kaXNo.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvem9WUVRwVDc1RzFqekltUmpPSEpJZy9zYW5kYm94L2UxYjdIMXN1RndYSVJOcE5HYUA4R1ctaW1nLTJfMTc3MTg1NTQzMzAwMF9uYTFmbl9iMnR2Ym1kdlltOXVaeTFrYVhOby5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=le19X7IMhQoy9k1dwx8XI~OgSMWjkOU3Ji~YAB5LyCpagWdcSMOHzM6NchGo7dbkX5hGvFAR7c63wq2Jt8E2-9Wwc0~R8nnJ-iFbMyLm03xGPxwTnjaxiG9oSZyvu8c4Ic0ciutesjTS63jp~427K0ZOoSdf0f7hhwOKIfbxes7zU3VjxobenfofePgZH~lCxrGN88JJX0gGS09jKZ9au9EH5piCt1rAvfAiqFU8l6mS1HmLulrej8YqIkYuaKrRdYK6ot0AvhPpZMX4I06S1QtGFoeHuTH8UIJHCB9CauBRQb0CZdJbeZhW-ntDZh~6gSvbEZY1z7bWceOnLZbNCg__",
      category: "main",
    },
    {
      name: "Poulet DG",
      description: "Tender chicken in creamy sauce - A beloved Cameroonian classic",
      price: "2500 frs",
      image:
        "https://private-us-east-1.manuscdn.com/sessionFile/zoVQTpT75G1jzImRjOHJIg/sandbox/e1b7H1suFwXIRNpNGaA8GW-img-3_1771855434000_na1fn_cG91bGV0LWRnLWRpc2g.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvem9WUVRwVDc1RzFqekltUmpPSEpJZy9zYW5kYm94L2UxYjdIMXN1RndYSVJOcE5HYUA4R1ctaW1nLTNfMTc3MTg1NTQzNDAwMF9uYTFmbl9jRzkxYkdWMExXUm5MV1JwYzJnLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ubkVmkduPg8TdSotnsfKVtzi-~9ZPUcgGmqqFZdHc52X6rGRmTk1iiIoOsgmhKKqhr5-6GmLCjJOmtuGDCIqsjpcXONKO2hTF67Dj~nVEhRgnZXeWNql3~HVzAzHRMR-ljLj01sMowoMX-VrI93otQrb2kGIGtIBuB3BV4tqYs82EAPUf2dOccOyVRqQa3em4OO5obylYs3SOWquHPaTzDDzEN-owWS3HQBnsE0Pc7nUMHddCz0IT~Y6NvSlXDWQe2ehrW6wg4x-Rtdf82JUtnugReis6VXzNISaycb2r5UpWtr8jakFyEYJEGtM3hOENwEYTu3S0UhaImsgclkUDA__",
      category: "main",
    },
    {
      name: "Hot Pot",
      description: "Spicy and savory - Perfect for those who love heat",
      price: "2500 frs",
      category: "main",
    },
    {
      name: "Beeftek",
      description: "Seasoned beef with dodo or rice - Hearty and satisfying",
      price: "2500 frs",
      category: "main",
    },
    {
      name: "Pork/Gizzard Sauce",
      description: "Rich sauce with tender meat, served with rice or dodo",
      price: "2500 frs",
      category: "main",
    },
    {
      name: "Stir Fry Rice",
      description: "Fragrant rice with vegetables and your choice of protein",
      price: "2500 frs",
      category: "rice",
    },
    {
      name: "Stir Fry Pasta",
      description: "Al dente pasta with fresh vegetables and savory sauce",
      price: "2500 frs",
      category: "rice",
    },
    {
      name: "Spicy Pork/Chicken",
      description: "Fiery and flavorful - served with dodo or tape",
      price: "2500 frs",
      category: "spicy",
    },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-[#D9D4C8]">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#8B3A3A] flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <h1 className="text-2xl font-bold text-[#8B3A3A]">Eat With Maddie</h1>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="tel:+237675719340"
              className="flex items-center gap-2 text-[#8B3A3A] hover:text-[#D2691E] transition-colors"
            >
              <Phone size={20} />
              <span className="hidden sm:inline">+237 675 719 340</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://private-us-east-1.manuscdn.com/sessionFile/zoVQTpT75G1jzImRjOHJIg/sandbox/e1b7H1suFwXIRNpNGaA8GW-img-1_1771855437000_na1fn_aGVyby1iYWNrZ3JvdW5k.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvem9WUVRwVDc1RzFqekltUmpPSEpJZy9zYW5kYm94L2UxYjdIMXN1RndYSVJOcE5HYUA4R1ctaW1nLTFfMTc3MTg1NTQzNzAwMF9uYTFmbl9hR1Z5YnkxaVlXTnJaM0p2ZFc1ay5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ao22bschljTcNP0mE9xk~FluM67R-AoJda14dCKTl18Iehp~7gMNBVX66naKI5DCn4bZuGq9HYogMd07VAWBQ2nkgX4zuAwdxK9lvZqeVA3t~3szBOOg-f9VSJNn5Cygeiy3ISw1IuECR~QYv1pZimSa2jMGLkdj1anON0DGRz~D2cgyJ~J7o6KApiNuFJx9iyH~s0PIBP6ncB39TI7qzG~ZLGfCuKnUBfhK6ALaZNomXmDTdh3iI5~WDi9WkgHyJ7iSBjmmTkYUhYpv156OYRng8MLxuy~8T~-QsGuzxapTY09-5CsgO6Cp1t6WtZ-i6280GzQx-fN08q9PRX9SpA__')",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              Eat With Maddie
            </h2>
            <p className="text-xl md:text-2xl text-white/90 drop-shadow-md mb-8">
              Your preferred online food delivery service
            </p>
            <Button
              size="lg"
              className="bg-[#8B3A3A] hover:bg-[#6B2A2A] text-white text-lg px-8 py-6"
            >
              Order Now
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold text-[#8B3A3A] mb-6">
              Fresh, Homemade Flavors
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At Eat With Maddie, we believe that great food brings people together. Every dish is
              prepared with care and passion, using the finest ingredients to deliver authentic
              Cameroonian cuisine right to your doorstep. From traditional favorites to modern
              twists, our menu celebrates the rich flavors of our heritage.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#D2691E]/20 flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-[#D2691E]" size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#8B3A3A] mb-2">Quick Delivery</h3>
                <p className="text-gray-600">Fast and reliable service to your location</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#D2691E]/20 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-[#D2691E]" size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#8B3A3A] mb-2">Douala-Based</h3>
                <p className="text-gray-600">Serving the Douala community with pride</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#D2691E]/20 flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-[#D2691E]" size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#8B3A3A] mb-2">Easy Ordering</h3>
                <p className="text-gray-600">Simple and convenient ordering process</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 md:py-24 bg-[#F5F1E8]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[#8B3A3A] mb-4 text-center">
            Today's Menu
          </h2>
          <p className="text-center text-gray-700 mb-12 text-lg">
            All items priced at 2500 frs - Affordable quality food for everyone
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === "all"
                  ? "bg-[#8B3A3A] text-white"
                  : "bg-white text-[#8B3A3A] border border-[#8B3A3A] hover:bg-[#F5F1E8]"
              }`}
            >
              All Items
            </button>
            <button
              onClick={() => setSelectedCategory("main")}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === "main"
                  ? "bg-[#8B3A3A] text-white"
                  : "bg-white text-[#8B3A3A] border border-[#8B3A3A] hover:bg-[#F5F1E8]"
              }`}
            >
              Main Dishes
            </button>
            <button
              onClick={() => setSelectedCategory("rice")}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === "rice"
                  ? "bg-[#8B3A3A] text-white"
                  : "bg-white text-[#8B3A3A] border border-[#8B3A3A] hover:bg-[#F5F1E8]"
              }`}
            >
              Rice & Pasta
            </button>
            <button
              onClick={() => setSelectedCategory("spicy")}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === "spicy"
                  ? "bg-[#8B3A3A] text-white"
                  : "bg-white text-[#8B3A3A] border border-[#8B3A3A] hover:bg-[#F5F1E8]"
              }`}
            >
              Spicy Specials
            </button>
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                {item.image && (
                  <div className="h-48 overflow-hidden bg-gray-200">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#8B3A3A] mb-2">{item.name}</h3>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-[#D2691E]">{item.price}</span>
                    <Button className="bg-[#8B3A3A] hover:bg-[#6B2A2A] text-white">
                      Add to Order
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Delivery Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[#8B3A3A] mb-12 text-center">
            Pricing & Delivery
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto">
            <div className="bg-[#F5F1E8] p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#8B3A3A] mb-6">Delivery Options</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#D2691E] font-bold mt-1">•</span>
                  <span>
                    <strong>Take Away:</strong> 300 frs
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D2691E] font-bold mt-1">•</span>
                  <span>
                    <strong>Delivery:</strong> From 500 frs
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D2691E] font-bold mt-1">•</span>
                  <span className="text-sm italic">
                    Payment required before delivery
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-[#F5F1E8] p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#8B3A3A] mb-6">Beverages</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#D2691E] font-bold mt-1">•</span>
                  <span>Bottled Water</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D2691E] font-bold mt-1">•</span>
                  <span>Soft Beverages</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D2691E] font-bold mt-1">•</span>
                  <span>Alcoholic Beverages</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-[#8B3A3A] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Order?</h2>
          <p className="text-xl mb-8 text-white/90">
            Contact us today and enjoy delicious homemade Cameroonian cuisine
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-12">
            <div>
              <Phone className="mx-auto mb-4" size={40} />
              <p className="text-lg font-semibold mb-2">Call Us</p>
              <a href="tel:+237675719340" className="text-[#FFD700] hover:underline">
                +237 675 719 340
              </a>
            </div>
            <div>
              <MapPin className="mx-auto mb-4" size={40} />
              <p className="text-lg font-semibold mb-2">Location</p>
              <p className="text-white/90">Douala, Cameroon</p>
            </div>
            <div>
              <Clock className="mx-auto mb-4" size={40} />
              <p className="text-lg font-semibold mb-2">Hours</p>
              <p className="text-white/90">Daily Service</p>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-white text-[#8B3A3A] hover:bg-[#F5F1E8] text-lg px-8 py-6 font-bold"
          >
            Order Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3A3A3A] text-white/80 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">
            &copy; 2026 Eat With Maddie. All rights reserved.
          </p>
          <p className="text-sm">
            Your preferred online food delivery service in Douala, Cameroon
          </p>
        </div>
      </footer>
    </div>
  );
}
