import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Pyrolysis Plant", href: "/pyrolysis" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { label: "LinkedIn", href: "#", Icon: FaLinkedin },
  { label: "Twitter", href: "#", Icon: FaXTwitter },
  { label: "Instagram", href: "#", Icon: FaInstagram },
  { label: "Facebook", href: "#", Icon: FaFacebook },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#14171A] text-[#E7E5E1]">
      {/* signature top rule: a single measured stroke, like a weld seam */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#D97B29] via-[#D97B29]/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_0.9fr_1fr_0.9fr]">
          {/* Left: big logo + identity */}
          <div className="flex flex-col gap-5">
            <Image
              src="/favicon.svg"
              alt="Akaash Industries"
              width={20}
              height={20}
              priority
              className="h-auto w-[120px]"
            />
            <div>
              <p className="text-lg font-semibold tracking-tight text-white">
                Akaash Industries
              </p>
              <p className="mt-1 text-sm text-[#9C9A94]">Make new the most</p>
            </div>

            <div className="mt-2">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#D97B29]">
                Connect with us
              </p>
              <div className="mt-3 flex items-center gap-3">
                {socials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[#E7E5E1] transition-colors hover:border-[#D97B29] hover:text-[#D97B29] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D97B29]"
                  >
                    <Icon className="h-4 w-4" strokeWidth={1.75} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#D97B29]">
              Quick Links
            </p>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#C7C5C0] transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#D97B29]">
              Contact Us
            </p>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="mailto:info@akaashindustries.com"
                  className="group flex items-start gap-3"
                >
                  <Mail
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#D97B29]"
                    strokeWidth={1.75}
                  />
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-[#9C9A94]">
                      Email Us
                    </span>
                    <span className="text-sm text-[#C7C5C0] group-hover:text-white">
                      info@akaashindustries.com
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a href="tel:+919849197608" className="group flex items-start gap-3">
                  <Phone
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#D97B29]"
                    strokeWidth={1.75}
                  />
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-[#9C9A94]">
                      Call Us
                    </span>
                    <span className="text-sm text-[#C7C5C0] group-hover:text-white">
                      +91 9849197608
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#D97B29]">
              Location
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#D97B29]"
                  strokeWidth={1.75}
                />
                <span className="text-sm text-[#C7C5C0]">
                  Hyderabad, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-[#8B8981] sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Akaash Industries. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#C7C5C0]">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#C7C5C0]">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}