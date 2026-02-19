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
    
    if (isHomePage) {
      return { href };
    }
    return { to: `/${href}` };
  };

  // Animation variants for the menu button
  const menuVariants = {
    closed: {
      rotate: 0,
      transition: { duration: 0.3 }
    },
    open: {
      rotate: 90,
      transition: { duration: 0.3 }
    }
  };

  // Animation variants for the mobile menu
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        staggerChildren: 0.07,
        delayChildren: 0.1
      }
    }
  };

  // Animation variants for menu items
  const menuItemVariants = {
    closed: {
      opacity: 0,
      x: -20,
      transition: { duration: 0.2 }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-background/10 backdrop-blur-md border-b border-border/50"
    >
      <Link to="/" className="flex items-center -my-4">
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

      {/* Animated mobile toggle */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="md:hidden text-foreground bg-background/10 backdrop-blur-md p-2 rounded-lg border border-border/50 hover:bg-background/20 transition-colors duration-300"
        aria-label="Toggle menu"
        variants={menuVariants}
        animate={open ? "open" : "closed"}
        whileTap={{ scale: 0.95 }}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </motion.button>

      {/* Animated mobile menu with transparent backdrop */}
      <motion.div
        initial="closed"
        animate={open ? "open" : "closed"}
        variants={mobileMenuVariants}
        className="absolute top-full left-0 right-0 bg-background/10 backdrop-blur-md border-b border-border/50 p-6 flex flex-col gap-4 md:hidden"
      >
        {navLinks.map((link) => {
          const linkProps = getLinkProps(link);
          const Component = isHomePage ? 'a' : Link;
          return (
            <motion.div
              key={link}
              variants={menuItemVariants}
            >
              <Component
                {...linkProps}
                onClick={() => setOpen(false)}
                className="font-body text-muted-foreground hover:text-green-400 transition-colors duration-300 block py-2"
              >
                {link}
              </Component>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;