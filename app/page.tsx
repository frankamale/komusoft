import Footer from "./(guest)/components/Footer";
import { Navbar } from "./(guest)/components/NavBar";

export default function Home() {
  return (
    <div className = "flex flex-col items-center justify-center min-h-screen py-2">
      <Navbar />
   
      <Footer />
    </div>
  );
}
