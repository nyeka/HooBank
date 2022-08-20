import React from "react";
import About from "./components/About/About";
import Card from "./components/Card/Card";
import Client from "./components/Clients/Client";
import Deals from "./components/Deals/Deals";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Service from "./components/Services/Service";
import Testimoni from "./components/Testimonials/Testimoni";

export default function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Card />
      <Client />
      <Deals />
      <Testimoni />
      <Service />
      <Footer />
    </div>
  );
}
