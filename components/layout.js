import Footer from "./footer";
import Navbar from "./navbar";
import Link from "next/link";
import Card from "./card";


// This is our base page layout - See it is used in pages_app.js
export default function Layout({ children }) {
  return (
    <div>
      <h1>Nobel Prizes</h1>
      <button>Filter </button>
      <button>Sort </button>
      <main className="container">
        <Card />
        {children}
      </main>
      <Footer />
    </div>
  )
}