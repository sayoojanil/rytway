import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = ["Portfolios", "Services", "About", "Steps", "Why Us", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const getLinkProps = (link: string) => {
    if (link === "Portfolios") {
      return { to: "/portfolios" };
    }
    let href = "";
    if (link === "Services") href = "#services";
    else if (link === "About") href = "#about";
    else if (link === "Steps") href = "#process";
    else if (link === "Why Us") href = "#why-us";
    else if (link === "Contact") href = "#contact";
    // jkj
    if (isHomePage) {
      return { href };
    }
    return { to: `/${href}` };
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-background/10 backdrop-blur-md border-b border-border/50"
    >
      <Link to="/" className="flex items-center -my-4"> {/* Negative margin to offset larger logo */}
        <img 
          src="/assets/logo.png" 
          alt="Technodea logo" 
          className="h-20 w-36 object-contain" 
        />
      </Link>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => {
          const linkProps = getLinkProps(link);
          const Component = isHomePage ? 'a' : Link;
          return (
            <Component
              key={link}
              {...linkProps}
              className="font-body text-sm text-muted-foreground hover:text-green-400 transition-colors duration-300"
            >
              {link}
            </Component>
          );
        })}
      </div>

      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-foreground"
        aria-label="Toggle menu"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-background border-b border-border p-6 flex flex-col gap-4 md:hidden"
        >
          {navLinks.map((link) => {
            const linkProps = getLinkProps(link);
            const Component = isHomePage ? 'a' : Link;
            return (
              <Component
                key={link}
                {...linkProps}
                onClick={() => setOpen(false)}
                className="font-body text-muted-foreground hover:text-primary transition-colors"
              >
                {link}
              </Component>
            );
          })}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;