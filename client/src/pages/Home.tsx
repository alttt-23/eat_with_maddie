
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  ChefHat,
  Clock3,
  Globe,
  MapPin,
  MessageCircle,
  Minus,
  Phone,
  Plus,
  ShoppingBag,
  Truck,
} from "lucide-react";
import { useMemo, useState } from "react";

type Language = "en" | "fr";
type CategoryId =
  | "breakfast"
  | "starters"
  | "pizzas"
  | "grill"
  | "pasta"
  | "cameroon"
  | "drinks";

type LocalizedText = Record<Language, string>;

type MenuCategory = {
  id: CategoryId;
  title: LocalizedText;
  subtitle: LocalizedText;
  availability?: LocalizedText;
};

type MenuItem = {
  id: string;
  categoryId: CategoryId;
  name: string;
};

type DeliveryZone = {
  id: string;
  fee: number;
  eta: LocalizedText;
  name: LocalizedText;
};

const WHATSAPP_NUMBER = "237679719340";
const PHONE_NUMBER_DISPLAY = "+237 679 719 340";
const PHONE_NUMBER_LINK = "tel:+237679719340";

const menuCategories: MenuCategory[] = [
  {
    id: "breakfast",
    title: { en: "Breakfast Specials", fr: "Specials Petit Dejeuner" },
    subtitle: {
      en: "Morning comfort plates, waffles, sandwiches, and eggs.",
      fr: "Plats du matin, gaufres, sandwiches et oeufs.",
    },
    availability: { en: "7:00 AM - 11:00 AM", fr: "07:00 - 11:00" },
  },
  {
    id: "starters",
    title: { en: "Small Chops & Starters", fr: "Small Chops et Entrees" },
    subtitle: {
      en: "Crispy party bites and appetizers.",
      fr: "Bouchees et entrees croustillantes.",
    },
  },
  {
    id: "pizzas",
    title: { en: "Pizzas (Freshly Baked)", fr: "Pizzas (Fraichement Cuites)" },
    subtitle: {
      en: "Classic favorites and Maddie's house mix.",
      fr: "Classiques et special maison de Maddie.",
    },
  },
  {
    id: "grill",
    title: { en: "BBQ & Grill", fr: "BBQ et Grill" },
    subtitle: {
      en: "Grilled meats, fish, wings, shawarma, and burgers.",
      fr: "Viandes grillees, poisson, wings, shawarma et burgers.",
    },
  },
  {
    id: "pasta",
    title: { en: "Pasta & More", fr: "Pates et Plus" },
    subtitle: {
      en: "Pasta, noodles, rice dishes, and fusion favorites.",
      fr: "Pates, nouilles, riz et favoris fusion.",
    },
  },
  {
    id: "cameroon",
    title: { en: "Cameroonian & African Dishes", fr: "Plats Camerounais et Africains" },
    subtitle: {
      en: "Traditional heritage dishes prepared with home flavor.",
      fr: "Plats traditionnels de terroir prepares maison.",
    },
  },
  {
    id: "drinks",
    title: { en: "Drinks", fr: "Boissons" },
    subtitle: {
      en: "Juices, smoothies, soft drinks, and more.",
      fr: "Jus, smoothies, boissons gazeuses et plus.",
    },
  },
];

const menuLibrary: Record<CategoryId, string[]> = {
  breakfast: [
    "English Breakfast Plate (eggs, sausages, baked beans, toast, grilled tomato, hash browns or bacon)",
    "Club Sandwich",
    "Pancakes or Waffles Stack",
    "Omelette Varieties (cheese, mushroom, veggie, or chicken)",
    "Frittata",
  ],
  starters: [
    "Mini Samosas",
    "Spring Rolls",
    "Chicken Wings (spicy, honey-glazed, BBQ)",
    "Beef Kebabs",
    "Puff-Puff with Pepper Sauce",
    "Shrimp Rolls",
    "Corn Dogs",
    "Crispy Butterfly Fried Prawns",
  ],
  pizzas: [
    "Classic Margherita",
    "Pepperoni Feast",
    "BBQ Chicken Pizza",
    "Maddie's Special Pizza",
    "Garlic Bread",
    "Braided Bread",
  ],
  grill: [
    "BBQ Chicken (half or full)",
    "Grilled Catfish with Baked Potatoes",
    "Beef Steak with Peppercorn Sauce",
    "Pork Ribs (smoky BBQ glaze)",
    "Beef Burger",
    "Chicken or Beef Shawarma",
    "Chicken Cordon Bleu",
    "KFC Style Chicken",
    "Buffalo Chicken Wings",
    "Pork Kebabs",
  ],
  pasta: [
    "Spaghetti Bolognese",
    "Fettuccine Alfredo (creamy chicken)",
    "Lasagne",
    "Stir-Fry Noodles (chicken, beef, or shrimp)",
    "Singaporean Noodles",
    "Chow Mein Noodles",
    "Egg Fried Rice",
    "Special Chinese Fried Rice",
    "Chicken Biryani",
    "Jerk Chicken",
  ],
  cameroon: [
    "Eru and Water Fufu or Garri",
    "Ndole and Plantains or Bobolo",
    "Koki Beans and Plantains",
    "Jollof Rice",
    "Fried Rice",
    "Native Jollof (Mbonga Rice)",
    "Hot Pot",
    "Poulet DG",
    "Spicy Pork, Chicken, or Turkey (dodo or tape)",
    "Pork Sauce with Rice or Dodo",
    "Snail Sauce with Rice or Dodo",
    "Pepper Soup (goat, fish, chicken, catfish, cow leg, organ meat)",
    "Achu and Yellow Soup",
    "Egusi Soup and Garri or Fufu",
    "Ogbono Soup and Garri or Fufu",
    "Assorted Okra Soup and Garri or Fufu",
    "Mbongo Chobi and Plantains",
    "Kondre",
    "Mbongo Beef Stew and Rice",
    "Soya",
    "Pile Plantains and Vegetable Sauce",
    "Ekwang (Ekpang Nkukwo)",
    "Kwacoco and Canda Sauce",
    "Groundnut Soup and Rice",
    "Stewed Beans and Ripe Plantains or Rice",
    "Ndole and Bobolo, Dodo, or Rice",
    "Turning Coco",
    "Turning Planti",
    "Egusi Pudding and Plantain or Bobolo",
    "Pile Pomme and Pear",
    "Garden Egg Sauce and Plantain or Cassava",
  ],
  drinks: [
    "Fresh Juice (orange, pineapple, watermelon)",
    "Smoothies (banana, mango, strawberry)",
    "Soft Drinks and Bottled Water",
    "Alcoholic Beverages",
    "Folere Drink",
  ],
};

const menuItems: MenuItem[] = (Object.keys(menuLibrary) as CategoryId[]).flatMap((categoryId) =>
  menuLibrary[categoryId].map((name, index) => ({
    id: `${categoryId}-${index + 1}`,
    categoryId,
    name,
  })),
);

const deliveryZones: DeliveryZone[] = [
  {
    id: "akwa",
    fee: 500,
    eta: { en: "20-30 min", fr: "20-30 min" },
    name: { en: "Akwa / Bonanjo", fr: "Akwa / Bonanjo" },
  },
  {
    id: "bonamoussadi",
    fee: 800,
    eta: { en: "30-45 min", fr: "30-45 min" },
    name: { en: "Bonamoussadi", fr: "Bonamoussadi" },
  },
  {
    id: "logbessou",
    fee: 1200,
    eta: { en: "40-60 min", fr: "40-60 min" },
    name: { en: "Logbessou / PK", fr: "Logbessou / PK" },
  },
];

const testimonials = [
  {
    name: "Aurelie",
    quote: {
      en: "Her African plates taste homemade every single time. Delivery is reliable.",
      fr: "Ses plats africains ont toujours le vrai gout maison. Livraison fiable.",
    },
  },
  {
    name: "Cedric",
    quote: {
      en: "The menu range is huge, and WhatsApp ordering is fast.",
      fr: "La carte est tres large et commander via WhatsApp est rapide.",
    },
  },
  {
    name: "Nadine",
    quote: {
      en: "From breakfast to grill, quality stays consistent.",
      fr: "Du petit dejeuner au grill, la qualite reste constante.",
    },
  },
];

const copy = {
  en: {
    brandTag: "Where flavor meets soul",
    aboutTitle: "About Us",
    heroTitle: "Eat With Maddie",
    heroSubtitle: "Burgundy kitchen energy, full menu variety, and fast order confirmation on WhatsApp.",
    orderNow: "Order on WhatsApp",
    callNow: "Call now",
    menuTitle: "Full Menu",
    menuSubtitle: "Everything is categorized so customers can find meals quickly without noise.",
    allCategories: "All Categories",
    addToOrder: "Add",
    menuCount: "items",
    deliveryTitle: "Delivery Zones in Douala",
    deliverySubtitle: "Pick your zone so Maddie gets the right dispatch info immediately.",
    orderFormTitle: "Finalize Your Order",
    orderFormSubtitle: "Select dishes, add your details, then send one complete WhatsApp order.",
    nameLabel: "Your name",
    phoneLabel: "Phone number",
    addressLabel: "Delivery address",
    noteLabel: "Special instruction",
    notePlaceholder: "Spice level, no onions, gate code, event quantity...",
    summaryTitle: "Selected Items",
    summaryHint: "Food prices are confirmed on daily menu updates.",
    emptyCart: "No dishes selected yet.",
    selectedCount: "Selected dishes",
    deliveryFee: "Delivery fee",
    sendOrder: "Send Full Order on WhatsApp",
    eta: "ETA",
    socialLine: "Instagram: @madii_dove | Snapchat: maddiebelle1493",
    testimonialsTitle: "Customer Trust",
    testimonialsSubtitle: "Consistency and variety drive repeat orders.",
    footerLine: "© Eat With Maddie, Douala Cameroon",
    location: "Douala, Cameroon",
  },
  fr: {
    brandTag: "La ou la saveur rencontre l'ame",
    aboutTitle: "A propos de nous",
    heroTitle: "Eat With Maddie",
    heroSubtitle: "Style bordeaux, menu complet, et confirmation rapide via WhatsApp.",
    orderNow: "Commander sur WhatsApp",
    callNow: "Appeler maintenant",
    menuTitle: "Menu Complet",
    menuSubtitle: "Tout est classe par categorie pour une navigation rapide et propre.",
    allCategories: "Toutes les categories",
    addToOrder: "Ajouter",
    menuCount: "articles",
    deliveryTitle: "Zones de Livraison a Douala",
    deliverySubtitle: "Choisissez votre zone pour une expedition plus precise.",
    orderFormTitle: "Finaliser la Commande",
    orderFormSubtitle: "Selectionnez vos plats, ajoutez vos infos, puis envoyez la commande WhatsApp.",
    nameLabel: "Votre nom",
    phoneLabel: "Numero de telephone",
    addressLabel: "Adresse de livraison",
    noteLabel: "Instruction speciale",
    notePlaceholder: "Niveau de piment, sans oignons, code du portail, quantite evenement...",
    summaryTitle: "Articles Selectionnes",
    summaryHint: "Les prix des plats sont confirmes via le menu du jour.",
    emptyCart: "Aucun plat selectionne pour l'instant.",
    selectedCount: "Plats selectionnes",
    deliveryFee: "Frais de livraison",
    sendOrder: "Envoyer la Commande Complete sur WhatsApp",
    eta: "Delai",
    socialLine: "Instagram: @madii_dove | Snapchat: maddiebelle1493",
    testimonialsTitle: "Confiance Client",
    testimonialsSubtitle: "La constance et la variete creent les commandes repetees.",
    footerLine: "© Eat With Maddie, Douala Cameroun",
    location: "Douala, Cameroun",
  },
};

const categoryToneClasses: Record<CategoryId, string> = {
  breakfast: "from-[#f4bd2f] to-[#ffe7a9] border-[#e8b128]",
  starters: "from-[#2f120f] to-[#7a1712] border-[#f0a81e]",
  pizzas: "from-[#5c0808] to-[#d46f1f] border-[#f0a81e]",
  grill: "from-[#4b0508] to-[#8f1010] border-[#f0a81e]",
  pasta: "from-[#f2d9b0] to-[#f2a348] border-[#c95e18]",
  cameroon: "from-[#4a0000] to-[#8b0909] border-[#d9b36e]",
  drinks: "from-[#f9cf1b] to-[#f4aa18] border-[#f0d66a]",
};

function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [activeCategory, setActiveCategory] = useState<CategoryId | "all">("all");
  const [allOpenValues, setAllOpenValues] = useState<string[]>([]);
  const [singleOpenValue, setSingleOpenValue] = useState<string>("");
  const [selectedZoneId, setSelectedZoneId] = useState(deliveryZones[0].id);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [cart, setCart] = useState<Record<string, number>>({});

  const t = copy[language];

  const selectedZone = useMemo(
    () => deliveryZones.find((zone) => zone.id === selectedZoneId) ?? deliveryZones[0],
    [selectedZoneId],
  );

  const categoriesToRender = useMemo(
    () =>
      activeCategory === "all"
        ? menuCategories
        : menuCategories.filter((category) => category.id === activeCategory),
    [activeCategory],
  );

  const cartRows = useMemo(
    () =>
      menuItems
        .map((item) => ({ ...item, quantity: cart[item.id] ?? 0 }))
        .filter((item) => item.quantity > 0),
    [cart],
  );

  const selectedDishCount = useMemo(
    () => cartRows.reduce((sum, item) => sum + item.quantity, 0),
    [cartRows],
  );

  const formatFcfa = (value: number) => `${new Intl.NumberFormat("fr-FR").format(value)} FCFA`;

  const updateItemQuantity = (itemId: string, delta: number) => {
    setCart((current) => {
      const nextValue = Math.max(0, (current[itemId] ?? 0) + delta);
      if (nextValue === 0) {
        const { [itemId]: _, ...rest } = current;
        return rest;
      }
      return { ...current, [itemId]: nextValue };
    });
  };

  const getWhatsAppMessage = () => {
    const lineItems = cartRows.map((item) => `- ${item.quantity} x ${item.name}`);
    const unknown = language === "fr" ? "Non renseigne" : "Not provided";

    return [
      language === "fr" ? "Nouvelle commande - Eat With Maddie" : "New Order - Eat With Maddie",
      "",
      language === "fr" ? "Plats selectionnes:" : "Selected dishes:",
      ...(lineItems.length > 0 ? lineItems : ["-"]),
      "",
      `${t.selectedCount}: ${selectedDishCount}`,
      `${t.deliveryFee}: ${formatFcfa(selectedZone.fee)}`,
      `${language === "fr" ? "Zone" : "Zone"}: ${selectedZone.name[language]} (${t.eta}: ${selectedZone.eta[language]})`,
      language === "fr" ? "Prix plats: confirms via menu du jour." : "Dish prices: confirmed via daily menu.",
      "",
      `${t.nameLabel}: ${name.trim() || unknown}`,
      `${t.phoneLabel}: ${phone.trim() || unknown}`,
      `${t.addressLabel}: ${address.trim() || unknown}`,
      `${t.noteLabel}: ${notes.trim() || "-"}`,
    ].join("\n");
  };

  const sendOrderOnWhatsApp = () => {
    if (selectedDishCount === 0) return;
    const text = encodeURIComponent(getWhatsAppMessage());
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-[var(--surface-0)] text-foreground">
      <nav className="sticky top-0 z-50 border-b border-[var(--surface-line)] bg-[var(--surface-0)]/95 backdrop-blur">
        <div className="container flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-full border border-white/50 bg-[linear-gradient(135deg,#7b0606,#b21717)] text-white shadow-md">
              <ChefHat size={18} />
            </div>
            <div>
              <p className="font-semibold leading-none text-[var(--brand-900)]">Eat With Maddie</p>
              <p className="text-xs text-[var(--ink-muted)]">{t.brandTag}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PHONE_NUMBER_LINK}
              className="hidden items-center gap-2 rounded-full border border-[var(--surface-line)] px-3 py-2 text-sm font-medium text-[var(--brand-800)] sm:flex"
            >
              <Phone size={15} />
              {PHONE_NUMBER_DISPLAY}
            </a>
            <div className="inline-flex rounded-full border border-[var(--surface-line)] p-1">
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                  language === "en"
                    ? "bg-[var(--brand-700)] text-white"
                    : "text-[var(--ink-muted)] hover:text-[var(--brand-800)]"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage("fr")}
                className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                  language === "fr"
                    ? "bg-[var(--brand-700)] text-white"
                    : "text-[var(--ink-muted)] hover:text-[var(--brand-800)]"
                }`}
              >
                FR
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <section className="relative overflow-hidden border-b border-[var(--surface-line)] bg-[linear-gradient(120deg,#5f0b0d_0%,#8e1015_48%,#3a0405_100%)] text-white">
          <div className="container relative py-14 md:py-20">
            <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
              <div>
                <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/90">
                  <Globe size={15} />
                  {language === "fr" ? "Version francaise active" : "English version active"}
                </p>
                <h1 className="text-balance text-5xl font-semibold leading-tight text-white md:text-7xl">{t.heroTitle}</h1>
                <p className="mt-4 max-w-xl text-base text-white/85 md:text-lg">{t.heroSubtitle}</p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Button
                    type="button"
                    onClick={sendOrderOnWhatsApp}
                    className="rounded-full bg-[#f5b12d] px-6 py-6 text-base font-semibold text-[#4c0d0d] hover:bg-[#ffc95b]"
                  >
                    <MessageCircle className="mr-2" size={18} />
                    {t.orderNow}
                  </Button>
                  <a href={PHONE_NUMBER_LINK}>
                    <Button
                      type="button"
                      variant="outline"
                      className="rounded-full border-white/35 bg-transparent px-6 py-6 text-base text-white hover:bg-white/10"
                    >
                      <Phone className="mr-2" size={18} />
                      {t.callNow}
                    </Button>
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-white/20 bg-black/15 p-6 backdrop-blur-sm md:p-7">
                <h2 className="text-3xl text-white md:text-4xl">{t.aboutTitle}</h2>
                <div className="mt-4 space-y-3 text-sm text-white/90 md:text-base">
                  <p className="flex items-center gap-2"><MapPin size={15} /> Douala, Cameroon</p>
                  <p className="flex items-center gap-2"><Clock3 size={15} /> {language === "fr" ? "Petit dejeuner: 07:00 - 11:00" : "Breakfast: 7:00 AM - 11:00 AM"}</p>
                  <p className="flex items-center gap-2"><Phone size={15} /> {PHONE_NUMBER_DISPLAY}</p>
                  <p>{t.socialLine}</p>
                </div>
                <p className="mt-5 rounded-xl border border-white/20 bg-white/10 p-3 text-xs text-white/90 md:text-sm">
                  {language === "fr"
                    ? "Confirmez la commande et Maddie recoit instantanement votre panier complet sur WhatsApp."
                    : "Confirm and Maddie gets your full basket instantly on WhatsApp."}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[var(--surface-line)] bg-[var(--surface-0)] py-14 md:py-20">
          <div className="container">
            <h2 className="text-center text-4xl text-[var(--brand-900)] md:text-5xl">{t.menuTitle}</h2>
            <p className="mx-auto mt-3 max-w-3xl text-center text-[var(--ink-muted)]">{t.menuSubtitle}</p>

            <div className="mt-7 flex flex-wrap justify-center gap-2">
              <button
                type="button"
                onClick={() => {
                  setActiveCategory("all");
                  setAllOpenValues([]);
                  setSingleOpenValue("");
                }}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  activeCategory === "all"
                    ? "bg-[var(--brand-700)] text-white"
                    : "border border-[var(--surface-line)] bg-white text-[var(--ink-muted)] hover:text-[var(--brand-900)]"
                }`}
              >
                {t.allCategories}
              </button>

              {menuCategories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => {
                    setActiveCategory(category.id);
                    setSingleOpenValue(category.id);
                    setAllOpenValues([]);
                  }}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    activeCategory === category.id
                      ? "bg-[var(--brand-700)] text-white"
                      : "border border-[var(--surface-line)] bg-white text-[var(--ink-muted)] hover:text-[var(--brand-900)]"
                  }`}
                >
                  {category.title[language]}
                </button>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-[var(--surface-line)] bg-white p-4 md:p-6">
              {activeCategory === "all" && (
                <Accordion
                  type="multiple"
                  value={allOpenValues}
                  onValueChange={setAllOpenValues}
                  className="w-full"
                >
                  {categoriesToRender.map((category) => {
                    const items = menuItems.filter((item) => item.categoryId === category.id);

                    return (
                      <AccordionItem key={category.id} value={category.id} className="mb-3 rounded-xl border border-[var(--surface-line)] px-4">
                        <AccordionTrigger className="hover:no-underline">
                          <div className="flex flex-wrap items-center gap-2 pr-4">
                            <span className={`rounded-full border px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r ${categoryToneClasses[category.id]}`}>
                              {category.title[language]}
                            </span>
                            <span className="text-xs text-[var(--ink-muted)]">
                              {items.length} {t.menuCount}
                            </span>
                            {category.availability && (
                              <span className="rounded-full border border-[var(--brand-200)] bg-[var(--surface-1)] px-2 py-1 text-xs text-[var(--brand-800)]">
                                {category.availability[language]}
                              </span>
                            )}
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="mb-3 text-sm text-[var(--ink-muted)]">{category.subtitle[language]}</p>
                          <div className="grid gap-3 md:grid-cols-2">
                            {items.map((item) => {
                              const qty = cart[item.id] ?? 0;
                              return (
                                <article
                                  key={item.id}
                                  className="flex items-start justify-between gap-3 rounded-xl border border-[var(--surface-line)] bg-[var(--surface-0)] p-3"
                                >
                                  <p className="text-sm leading-relaxed text-[var(--brand-900)]">{item.name}</p>
                                  <div className="flex shrink-0 items-center gap-1 rounded-full border border-[var(--surface-line)] bg-white p-1">
                                    <button
                                      type="button"
                                      onClick={() => updateItemQuantity(item.id, -1)}
                                      className="rounded-full p-1 text-[var(--ink-muted)] hover:bg-[var(--surface-1)]"
                                      aria-label="Decrease quantity"
                                    >
                                      <Minus size={14} />
                                    </button>
                                    <span className="w-6 text-center text-sm font-semibold text-[var(--brand-900)]">{qty}</span>
                                    <button
                                      type="button"
                                      onClick={() => updateItemQuantity(item.id, 1)}
                                      className="rounded-full p-1 text-[var(--ink-muted)] hover:bg-[var(--surface-1)]"
                                      aria-label="Increase quantity"
                                    >
                                      <Plus size={14} />
                                    </button>
                                  </div>
                                </article>
                              );
                            })}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              )}

              {activeCategory !== "all" && (
                <Accordion
                  type="single"
                  collapsible
                  value={singleOpenValue}
                  onValueChange={setSingleOpenValue}
                  className="w-full"
                >
                  {categoriesToRender.map((category) => {
                    const items = menuItems.filter((item) => item.categoryId === category.id);

                    return (
                      <AccordionItem key={category.id} value={category.id} className="mb-3 rounded-xl border border-[var(--surface-line)] px-4">
                        <AccordionTrigger className="hover:no-underline">
                          <div className="flex flex-wrap items-center gap-2 pr-4">
                            <span className={`rounded-full border px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r ${categoryToneClasses[category.id]}`}>
                              {category.title[language]}
                            </span>
                            <span className="text-xs text-[var(--ink-muted)]">
                              {items.length} {t.menuCount}
                            </span>
                            {category.availability && (
                              <span className="rounded-full border border-[var(--brand-200)] bg-[var(--surface-1)] px-2 py-1 text-xs text-[var(--brand-800)]">
                                {category.availability[language]}
                              </span>
                            )}
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="mb-3 text-sm text-[var(--ink-muted)]">{category.subtitle[language]}</p>
                          <div className="grid gap-3 md:grid-cols-2">
                            {items.map((item) => {
                              const qty = cart[item.id] ?? 0;
                              return (
                                <article
                                  key={item.id}
                                  className="flex items-start justify-between gap-3 rounded-xl border border-[var(--surface-line)] bg-[var(--surface-0)] p-3"
                                >
                                  <p className="text-sm leading-relaxed text-[var(--brand-900)]">{item.name}</p>
                                  <div className="flex shrink-0 items-center gap-1 rounded-full border border-[var(--surface-line)] bg-white p-1">
                                    <button
                                      type="button"
                                      onClick={() => updateItemQuantity(item.id, -1)}
                                      className="rounded-full p-1 text-[var(--ink-muted)] hover:bg-[var(--surface-1)]"
                                      aria-label="Decrease quantity"
                                    >
                                      <Minus size={14} />
                                    </button>
                                    <span className="w-6 text-center text-sm font-semibold text-[var(--brand-900)]">{qty}</span>
                                    <button
                                      type="button"
                                      onClick={() => updateItemQuantity(item.id, 1)}
                                      className="rounded-full p-1 text-[var(--ink-muted)] hover:bg-[var(--surface-1)]"
                                      aria-label="Increase quantity"
                                    >
                                      <Plus size={14} />
                                    </button>
                                  </div>
                                </article>
                              );
                            })}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              )}
            </div>
          </div>
        </section>

        <section className="border-b border-[var(--surface-line)] bg-[var(--surface-1)] py-14 md:py-20">
          <div className="container">
            <h2 className="text-center text-4xl text-[var(--brand-900)] md:text-5xl">{t.deliveryTitle}</h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-[var(--ink-muted)]">{t.deliverySubtitle}</p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {deliveryZones.map((zone) => (
                <button
                  key={zone.id}
                  type="button"
                  onClick={() => setSelectedZoneId(zone.id)}
                  className={`rounded-2xl border p-5 text-left transition-colors ${
                    zone.id === selectedZoneId
                      ? "border-[var(--brand-700)] bg-[var(--surface-0)]"
                      : "border-[var(--surface-line)] bg-white hover:border-[var(--brand-300)]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-[var(--brand-900)]">{zone.name[language]}</h3>
                    <Truck size={16} className="text-[var(--accent-700)]" />
                  </div>
                  <p className="mt-2 text-sm text-[var(--ink-muted)]">{t.deliveryFee}: {formatFcfa(zone.fee)}</p>
                  <p className="mt-1 text-sm text-[var(--ink-muted)]">{t.eta}: {zone.eta[language]}</p>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-[var(--surface-line)] bg-[var(--surface-0)] py-14 md:py-20">
          <div className="container grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-2xl border border-[var(--surface-line)] bg-white p-6 md:p-8">
              <h2 className="text-3xl text-[var(--brand-900)] md:text-4xl">{t.orderFormTitle}</h2>
              <p className="mt-2 text-[var(--ink-muted)]">{t.orderFormSubtitle}</p>

              <div className="mt-6 space-y-4">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-[var(--brand-900)]">{t.nameLabel}</span>
                  <input
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="w-full rounded-xl border border-[var(--surface-line)] px-4 py-3 text-sm outline-none ring-offset-2 transition focus:border-[var(--brand-500)] focus:ring-2 focus:ring-[var(--brand-200)]"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-[var(--brand-900)]">{t.phoneLabel}</span>
                  <input
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    className="w-full rounded-xl border border-[var(--surface-line)] px-4 py-3 text-sm outline-none ring-offset-2 transition focus:border-[var(--brand-500)] focus:ring-2 focus:ring-[var(--brand-200)]"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-[var(--brand-900)]">{t.addressLabel}</span>
                  <input
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                    className="w-full rounded-xl border border-[var(--surface-line)] px-4 py-3 text-sm outline-none ring-offset-2 transition focus:border-[var(--brand-500)] focus:ring-2 focus:ring-[var(--brand-200)]"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-[var(--brand-900)]">{t.noteLabel}</span>
                  <textarea
                    value={notes}
                    onChange={(event) => setNotes(event.target.value)}
                    placeholder={t.notePlaceholder}
                    rows={4}
                    className="w-full rounded-xl border border-[var(--surface-line)] px-4 py-3 text-sm outline-none ring-offset-2 transition focus:border-[var(--brand-500)] focus:ring-2 focus:ring-[var(--brand-200)]"
                  />
                </label>
              </div>
            </div>
            <aside className="rounded-2xl border border-[var(--surface-line)] bg-[var(--surface-1)] p-6 md:p-8 lg:sticky lg:top-24 lg:h-fit">
              <h3 className="text-2xl text-[var(--brand-900)]">{t.summaryTitle}</h3>
              <div className="mt-5 space-y-3">
                {cartRows.length === 0 ? (
                  <p className="rounded-xl border border-dashed border-[var(--surface-line)] bg-white p-4 text-sm text-[var(--ink-muted)]">
                    {t.emptyCart}
                  </p>
                ) : (
                  cartRows.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between rounded-xl border border-[var(--surface-line)] bg-white px-4 py-3"
                    >
                      <p className="text-sm text-[var(--brand-900)]">{item.quantity} x {item.name}</p>
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={() => updateItemQuantity(item.id, -1)}
                          className="rounded-full p-1 text-[var(--ink-muted)] hover:bg-[var(--surface-1)]"
                        >
                          <Minus size={14} />
                        </button>
                        <button
                          type="button"
                          onClick={() => updateItemQuantity(item.id, 1)}
                          className="rounded-full p-1 text-[var(--ink-muted)] hover:bg-[var(--surface-1)]"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="mt-6 space-y-2 text-sm text-[var(--ink-muted)]">
                <div className="flex items-center justify-between rounded-xl border border-[var(--surface-line)] bg-white px-4 py-3">
                  <span className="inline-flex items-center gap-2"><ShoppingBag size={14} /> {t.selectedCount}</span>
                  <span className="font-semibold text-[var(--brand-900)]">{selectedDishCount}</span>
                </div>
                <div className="flex justify-between rounded-xl border border-[var(--surface-line)] bg-white px-4 py-3">
                  <span>{t.deliveryFee}</span>
                  <span className="font-semibold text-[var(--brand-900)]">{formatFcfa(selectedZone.fee)}</span>
                </div>
              </div>

              <p className="mt-4 text-xs text-[var(--ink-muted)]">{t.summaryHint}</p>

              <Button
                type="button"
                onClick={sendOrderOnWhatsApp}
                disabled={selectedDishCount === 0}
                className="mt-6 w-full rounded-full bg-[var(--brand-700)] py-6 text-base text-white hover:bg-[var(--brand-900)] disabled:cursor-not-allowed disabled:opacity-40"
              >
                <MessageCircle className="mr-2" size={18} />
                {t.sendOrder}
              </Button>
            </aside>
          </div>
        </section>

        <section className="bg-[var(--surface-1)] py-14 md:py-20">
          <div className="container">
            <h2 className="text-center text-4xl text-[var(--brand-900)] md:text-5xl">{t.testimonialsTitle}</h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-[var(--ink-muted)]">{t.testimonialsSubtitle}</p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {testimonials.map((entry) => (
                <article key={entry.name} className="rounded-2xl border border-[var(--surface-line)] bg-white p-5">
                  <p className="text-sm text-[var(--ink-muted)]">"{entry.quote[language]}"</p>
                  <p className="mt-4 text-sm font-semibold text-[var(--brand-900)]">- {entry.name}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--surface-line)] bg-[var(--surface-0)] py-10">
        <div className="container flex flex-col items-center justify-between gap-3 text-center text-sm text-[var(--ink-muted)] md:flex-row md:text-left">
          <p>{t.footerLine}</p>
          <p className="inline-flex items-center gap-2">
            <MapPin size={14} />
            {t.location}
          </p>
          <a className="inline-flex items-center gap-2 hover:text-[var(--brand-900)]" href={PHONE_NUMBER_LINK}>
            <Phone size={14} />
            {PHONE_NUMBER_DISPLAY}
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
