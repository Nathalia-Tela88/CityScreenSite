// Single source of truth for the site's routes. Navbar3 and Footer3 both read
// from here so the sitemap only has to be maintained in one place.

export const productLinks = [
  { label: "All products", href: "/products" },
  { label: "Professional", href: "/professional" },
  { label: "Commercial", href: "/commercial" },
  { label: "Rental", href: "/rental" },
  { label: "DOOH", href: "/dooh" },
];

export const mainNav = [
  { label: "Products", href: "/products", children: productLinks },
  { label: "Project gallery", href: "/project-gallery" },
  { label: "Warranty & service", href: "/warranty-service" },
  { label: "Resources", href: "/resources" },
  { label: "About us", href: "/about-us" },
  { label: "FAQ", href: "/faq" },
];

export const footerColumns = [
  [
    { label: "Home", href: "/" },
    { label: "All products", href: "/products" },
    { label: "Professional", href: "/professional" },
    { label: "Commercial", href: "/commercial" },
    { label: "Rental", href: "/rental" },
    { label: "DOOH", href: "/dooh" },
  ],
  [
    { label: "Project gallery", href: "/project-gallery" },
    { label: "Warranty & service", href: "/warranty-service" },
    { label: "Resources", href: "/resources" },
    { label: "About us", href: "/about-us" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact us", href: "/contact-us" },
  ],
];

export const ctaHref = "/contact-us";
export const ctaLabel = "Request a quote";

export const company = {
  name: "CityScreen",
  address: "Av. do Rio Douro 33, 2910-567 Setúbal",
  phone: "265 123 456",
  phoneHref: "tel:+351265123456",
  email: "info@cityscreen.pt",
};
