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
  address: "120 Adelaide Street West, Suite 2500, Toronto, Ontario M5H 1T1",
  phone: "1 800 555 3488",
  phoneHref: "tel:+18005553488",
  email: "info@cityscreen.ca",
};
