import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Dee’s Estate",
  description: "Discover Your Dream Home in our Real Estate Page! Looking for the perfect property? Look no further! Our comprehensive real estate page offers an extensive range of listings that will meet all your housing needs. Whether you're searching for a cozy apartment, a spacious house, or a luxury villa, we have it all. Browse through our user-friendly interface and explore detailed property descriptions, high-quality images, and virtual tours. Our advanced search filters allow you to narrow down your options based on location, price range, property type, and more. With our reliable and up-to-date information, you can make informed decisions about your future home. Our dedicated team of real estate professionals is ready to assist you throughout the process, answering your questions and providing personalized guidance. Don't miss out on this opportunity! Start your search today and find the home of your dreams on our real estate page. Your perfect property is just a click away!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  );
}

