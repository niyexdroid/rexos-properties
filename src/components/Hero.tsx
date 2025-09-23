// Icon Components
const NewApartmentIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="6"
      y="10"
      width="28"
      height="24"
      rx="2"
      fill="white"
      stroke="white"
      strokeWidth="1"
    />
    <rect x="10" y="14" width="4" height="4" fill="#1A3763" />
    <rect x="16" y="14" width="4" height="4" fill="#1A3763" />
    <rect x="22" y="14" width="4" height="4" fill="#1A3763" />
    <rect x="28" y="14" width="4" height="4" fill="#1A3763" />
    <rect x="10" y="20" width="4" height="4" fill="#1A3763" />
    <rect x="16" y="20" width="4" height="4" fill="#1A3763" />
    <rect x="22" y="20" width="4" height="4" fill="#1A3763" />
    <rect x="28" y="20" width="4" height="4" fill="#1A3763" />
    <rect x="10" y="26" width="4" height="4" fill="#1A3763" />
    <rect x="16" y="26" width="4" height="4" fill="#1A3763" />
    <rect x="22" y="26" width="4" height="4" fill="#1A3763" />
    <rect x="28" y="26" width="4" height="4" fill="#1A3763" />
    <circle cx="12" cy="6" r="2" fill="white" />
    <path d="M10 6h4" stroke="white" strokeWidth="1" />
    <path d="M12 4v4" stroke="white" strokeWidth="1" />
  </svg>
);

const LandIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6 30h28v2H6v-2z" fill="white" />
    <path
      d="M8 30v-6l4-4 6 2 8-6 6 4v10"
      fill="white"
      stroke="white"
      strokeWidth="1"
    />
    <circle cx="12" cy="18" r="1.5" fill="#1A3763" />
    <circle cx="20" cy="15" r="1.5" fill="#1A3763" />
    <circle cx="28" cy="12" r="1.5" fill="#1A3763" />
    <path d="M6 32h28" stroke="white" strokeWidth="2" />
  </svg>
);

const BusinessPlaceIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="8" y="12" width="24" height="20" rx="2" fill="white" />
    <rect x="12" y="16" width="3" height="3" fill="#1A3763" />
    <rect x="17" y="16" width="3" height="3" fill="#1A3763" />
    <rect x="22" y="16" width="3" height="3" fill="#1A3763" />
    <rect x="27" y="16" width="3" height="3" fill="#1A3763" />
    <rect x="12" y="21" width="3" height="3" fill="#1A3763" />
    <rect x="17" y="21" width="3" height="3" fill="#1A3763" />
    <rect x="22" y="21" width="3" height="3" fill="#1A3763" />
    <rect x="27" y="21" width="3" height="3" fill="#1A3763" />
    <rect x="17" y="26" width="6" height="6" fill="#1A3763" />
    <path
      d="M16 8l4-2 4 2v4H16V8z"
      fill="white"
      stroke="white"
      strokeWidth="1"
    />
    <path d="M18 9h4M18 10h4" stroke="#1A3763" strokeWidth="0.5" />
  </svg>
);

const WarehouseIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 32h28v-16L20 8 6 16v16z"
      fill="white"
      stroke="white"
      strokeWidth="1"
    />
    <rect x="10" y="20" width="6" height="12" fill="#1A3763" />
    <rect x="24" y="20" width="6" height="12" fill="#1A3763" />
    <rect x="18" y="24" width="4" height="8" fill="#1A3763" />
    <path
      d="M4 18l16-8 16 8"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <rect x="8" y="18" width="2" height="2" fill="#1A3763" />
    <rect x="12" y="18" width="2" height="2" fill="#1A3763" />
    <rect x="26" y="18" width="2" height="2" fill="#1A3763" />
    <rect x="30" y="18" width="2" height="2" fill="#1A3763" />
  </svg>
);

const Hero = () => {
  return (
    <div className="relative text-white h-screen flex flex-col justify-center items-center hero-background">
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl font-extra-bold mb-4">
          Welcome To Rexos properties
        </h1>
        <p className="text-lg mb-8 max-w-2xl mx-auto font-medium">
          Experience unparalleled luxury living in Lagos. Our team of skilled
          architects, builders, realtors, and interior designers has created
          something extraordinary just for you.
        </p>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 flex items-center space-x-2">
            <div className="relative">
              <select
                title="Property Status"
                className="bg-white text-[#1A3763] rounded-md py-3 px-4 appearance-none"
              >
                <option>Buy</option>
                <option>Rent</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <input
              type="text"
              placeholder="Search Rexos Properties"
              className="bg-transparent text-white placeholder-white/60 placeholder-italic flex-grow p-3 outline-none"
            />
            <button
              title="Search"
              className="bg-white/30 p-3 rounded-md hover:bg-white/50"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="bg-[#1A3763] rounded-lg p-6 mb-2 inline-block">
              <NewApartmentIcon />
            </div>
            <p>New Apartment</p>
          </div>
          <div>
            <div className="bg-[#1A3763] rounded-lg p-6 mb-2 inline-block">
              <LandIcon />
            </div>
            <p>Land</p>
          </div>
          <div>
            <div className="bg-[#1A3763] rounded-lg p-6 mb-2 inline-block">
              <BusinessPlaceIcon />
            </div>
            <p>Business Place</p>
          </div>
          <div>
            <div className="bg-[#1A3763] rounded-lg p-6 mb-2 inline-block">
              <WarehouseIcon />
            </div>
            <p>Warehouse & Factory</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
