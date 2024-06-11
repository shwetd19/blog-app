import "../style/style.css";
import Footer from "@/components/footer/Footer";
import webLogo from '../../public/images/webLogo.png'
import Navbar from "@/components/header/navbar/Navbar";
import ActiveIcon from "@/components/activeIcon/ActiveIcon";

export const metadata = {
  title: {
    default: 'Home Page | ShwetDev',
    template: '%s | ShwetDev'
  }
}

const RootLayout = ({ children, }: Readonly<{ children: React.ReactNode; }>) => {
  return (
    <html lang="en">
      <link rel="icon" type="image/png" href={webLogo.src} />
      <body>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
        <ActiveIcon />
      </body>
    </html>
  );
}

export default RootLayout