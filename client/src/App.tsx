import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import NotificationBar from "./components/layout/NotificationBar";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Location from "@/pages/Location";
import Branches from "@/pages/Branches";
import Services from "@/pages/Services";
import Booking from "@/pages/Booking";
import FAQ from "@/pages/FAQ";
import LegalReferences from "@/pages/LegalReferences";
import Contact from "@/pages/Contact";

function Router() {
  return (
    <div className="flex min-h-screen flex-col">
      <NotificationBar />
      <Header />
      <main className="flex-1">
        <Switch>
          <Route path="/CityStarsOffice" component={Home} />
          <Route path="/CityStarsOffice/about" component={About} />
          <Route path="/CityStarsOffice/location" component={Location} />
          <Route path="/CityStarsOffice/branches" component={Branches} />
          <Route path="/CityStarsOffice/services" component={Services} />
          <Route path="/CityStarsOffice/booking" component={Booking} />
          <Route path="/CityStarsOffice/faq" component={FAQ} />
          <Route path="/CityStarsOffice/legal-references" component={LegalReferences} />
          <Route path="/CityStarsOffice/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      
      {/* Floating Booking Button for mobile */}
      <a href="/booking" className="fixed bottom-8 left-8 bg-accent hover:bg-accent-dark text-white p-4 rounded-full shadow-lg transition duration-300 z-40 lg:hidden">
        <i className="fas fa-calendar-alt text-xl"></i>
      </a>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
