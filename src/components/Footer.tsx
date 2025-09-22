import Link from "next/link";

const FacebookIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
  </svg>
);
const XIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.424.727-.666 1.581-.666 2.477 0 1.61.82 3.027 2.07 3.868-.76-.025-1.475-.232-2.104-.577v.062c0 2.248 1.595 4.123 3.713 4.557-.387.106-.795.163-1.22.163-.298 0-.586-.029-.868-.083.593 1.844 2.313 3.186 4.354 3.223-1.583 1.241-3.583 1.982-5.753 1.982-.374 0-.743-.022-1.107-.065 2.042 1.318 4.473 2.088 7.084 2.088 8.498 0 13.144-7.04 13.144-13.144 0-.201 0-.402-.013-.602.9-.65 1.682-1.473 2.3-2.39z" />
  </svg>
);
const InstagramIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" />
  </svg>
);
const YoutubeIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-white text-primary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-b border-gray-200 py-8">
          {/* Customer Care */}
          <div>
            <h3 className="font-bold text-primary mb-4">Customer Care</h3>
            <div className="mb-4">
              <p className="text-primary opacity-70 text-sm">Phone</p>
              <p className="font-semibold text-primary">+ (234) 814412060</p>
            </div>
            <div className="mb-4">
              <p className="text-primary opacity-70 text-sm">Email</p>
              <p className="font-semibold text-primary">
                Rexosproperties@gmail.com
              </p>
            </div>
            <div>
              <p className="text-primary opacity-70 text-sm">Whatsapp</p>
              <p className="font-semibold text-primary">+ (234) 8144126060</p>
            </div>
          </div>

          {/* Rexosproperties Info */}
          <div>
            <h3 className="font-bold text-primary mb-4">
              Rexosproperties Info
            </h3>
            <ul className="text-primary opacity-70 space-y-2">
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary hover:opacity-100"
                >
                  About Rexosproperties
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-primary hover:opacity-100"
                >
                  Terms and Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-primary hover:opacity-100"
                >
                  FAQ&apos;s
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-bold text-primary mb-4">Follow Us</h3>
            <div className="flex space-x-4 text-primary opacity-70">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-primary hover:opacity-100"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-primary hover:opacity-100"
              >
                <XIcon />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-primary hover:opacity-100"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="hover:text-primary hover:opacity-100"
              >
                <YoutubeIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-primary opacity-70 pt-8 text-sm">
          <p>Rexosproperties © 2025.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
