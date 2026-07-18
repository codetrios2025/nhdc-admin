import {
  FaHome,
  FaHospital,
  FaUserMd,
  FaStethoscope,
  FaBlog,
  FaVideo,
  FaImages,
  FaQuoteLeft,
  FaQuestionCircle,
  FaCalendarCheck,
  FaEnvelope,
  FaUsers,
  FaUserShield,
  FaPhotoVideo,
  FaSearch,
  FaChartBar,
  FaCog,
} from "react-icons/fa";

const sidebarMenu = [
  {
    title: "Dashboard",
    icon: FaHome,
    path: "/dashboard",
  },

  {
    title: "Website CMS",
    icon: FaHospital,
    children: [
      {
        title: "Homepage",
        path: "/cms/homepage",
      },
      {
        title: "About Us",
        path: "/cms/about",
      },
      {
        title: "Header",
        path: "/cms/header",
      },
      {
        title: "Footer",
        path: "/cms/footer",
      },
      {
        title: "Contact",
        path: "/cms/contact",
      },
    ],
  },
  {
    title: "Departments",
    icon: FaHospital,
    path: "/departments",
  },
  {
    title: "Doctors",
    icon: FaUserMd,
    path: "/doctors",
  },

  {
    title: "Services",
    icon: FaStethoscope,
    path: "/services",
  },

  {
    title: "Health Tips",
    icon: FaBlog,
    path: "/blogs",
  },

  {
    title: "Videos",
    icon: FaVideo,
    path: "/videos",
  },

  {
    title: "Gallery",
    icon: FaImages,
    path: "/gallery",
  },

  {
    title: "Testimonials",
    icon: FaQuoteLeft,
    path: "/testimonials",
  },

  {
    title: "FAQs",
    icon: FaQuestionCircle,
    path: "/faqs",
  },

  {
    title: "Appointments",
    icon: FaCalendarCheck,
    path: "/appointments",
  },

  {
    title: "Contact Inquiry",
    icon: FaEnvelope,
    path: "/contacts",
  },

  {
    title: "Users",
    icon: FaUsers,
    path: "/users",
  },

  {
    title: "Roles & Permissions",
    icon: FaUserShield,
    path: "/roles",
  },

  {
    title: "Media Library",
    icon: FaPhotoVideo,
    path: "/media",
  },

  {
    title: "SEO",
    icon: FaSearch,
    path: "/seo",
  },

  {
    title: "Reports",
    icon: FaChartBar,
    path: "/reports",
  },

  {
    title: "Settings",
    icon: FaCog,
    path: "/settings",
  },
];

export default sidebarMenu;
