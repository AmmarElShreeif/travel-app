import Icon from "@/assets/icons";
import images from "./images";

export const socialLinks = [
  {
    id: "1",
    name: "LinkedIn",
    description: "Limited time paid promotion",
    icon: "linkedin",
    link: "https://www.linkedin.com/login",
    color: "#0e76a8",
  },
  {
    id: "2",
    name: "Twitter",
    description: "Limited time paid promotion",
    icon: "twitter",
    color: "#1DA1F2",
  },
  {
    id: "3",
    name: "Instagram",
    description: "Promote your blog for free",
    link: "https://www.instagram.com/3amaar._/",
    icon: "instagram",
    color: "#C13584",
  },
  {
    id: "4",
    name: "GitHub",
    description: "Look Here My Projects",
    link: "https://github.com/ElShreeif",
    icon: "github",
    color: "##24292e",
  },
];

export const settings = [
  {
    title: "My Bookings",
    icon: <Icon name="calendar" />,
  },
  {
    title: "Payments",
    icon: <Icon name="payment" />,
  },
  {
    title: "Profile",
    icon: <Icon name="profile" />,
  },
  {
    title: "Notifications",
    icon: <Icon name="notification" />,
  },
  {
    title: "Security",
    icon: <Icon name="security" />,
  },
  {
    title: "Language",
    icon: <Icon name="settings" />,
  },
  {
    title: "Help Center",
    icon: <Icon name="help" />,
  },
  {
    title: "Invite Friends",
    icon: <Icon name="share" />,
  },
  {
    title: "About Developer",
    icon: <Icon name="developer" />,
    link: "/about/social",
  },
];

export const categoriesData = [
  {
    title: "New York",
    location: "America",
    price: "100",
    rating: 4.8,
    image: images.newyork,
  },
  {
    title: "Swesera",
    location: "in Europe",
    price: "399",
    rating: 4.8,
    category: "Popular",
    image: images.swes,
  },
  {
    title: "spain",
    location: "in Europe",
    price: "200",
    rating: 4.8,
    category: "Popular",
    image: images.montain,
  },
  {
    title: "California",
    location: "America",
    price: "500",
    rating: 4.8,
    category: "Popular",
    image: images.beach,
  },
  {
    title: "Maldeves",
    location: "in Asia",
    price: "100",
    rating: 4.8,
    category: "Popular",
    image: images.maldeves,
  },
  {
    title: "Booking",
    location: "Location 1",
    price: "400",
    rating: 4.8,
    category: "Popular",
    image: images.Aplan,
  },
];

export const sortCategories = ["All", "Popular", "Newest", "Trending"];
