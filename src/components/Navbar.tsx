import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = ["Home", "Services", "About", "Steps", "Why Us",];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const getLinkProps = (link: string) => {
    if (link === "Portfolios") {
      return { to: "/portfolios" };
    }
    let href = "";
    if (link === "") href = "#";
    //  else if (link === "Our Works") href = "#our-works";
    else if (link === "Services") href = "#services";
    else if (link === "About") href = "#about";
    else if (link === "Steps") href = "#process";
    else if (link === "Why Us") href = "#why-us";
    else if (link === "Contact") href = "#contact";
    
    if (isHomePage) {
      return { href };
    }
    return { to: `/${href}` };
  };

  // Handle WhatsApp contact click
  const handleContactClick = () => {
    const phoneNumber = "1234567890"; // Replace with your actual WhatsApp number
    const message = encodeURIComponent("Hi! I'm interested in your services. Can we discuss further?");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
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
      transition: { duration: 0.3, ease: "easeInOut" },
      transitionEnd: {
        display: "none"
      }
    },
    open: {
      display: "flex",
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

  // Underline animation variants
  const underlineVariants = {
    initial: { scaleX: 0 },
    hover: { 
      scaleX: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    tap: { 
      scaleX: 1,
      transition: { duration: 0.15 }
    }
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-black/10 backdrop-blur-md"
    >
      <Link to="/" className="flex items-center -my-4">
        <img 
          src="/assets/logo.png" 
          alt="Technodea logo" 
          className="h-20 w-36 object-contain" 
        />
      </Link>

      {/* Desktop links with animated underline */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => {
          const linkProps = getLinkProps(link);
          const Component = isHomePage ? 'a' : Link;
          return (
            <motion.div
              key={link}
              className="relative"
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              <Component
                {...linkProps}
                className="font-body text-sm font-bold text-white/80 hover:text-green-400 transition-colors duration-300 relative py-2"
              >
               
                {link}
              </Component>
              <motion.div
                variants={underlineVariants}
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-400 origin-left"
                style={{ scaleX: 0 }}
              />
            </motion.div>
          );
        })}
        <motion.button 
          onClick={handleContactClick}
          className="border border-green-400 text-white px-6 py-2.5 rounded-full hover:bg-green-400 transition-colors duration-200 font-medium shadow-sm hover:shadow"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact
        </motion.button>
      </div>

      {/* Animated mobile toggle */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="md:hidden text-white p-2 rounded-lg transition-colors duration-300"
        aria-label="Toggle menu"
        variants={menuVariants}
        animate={open ? "open" : "closed"}
        whileTap={{ scale: 0.95 }}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </motion.button>

      {/* Animated mobile menu with animated underline */}
      <motion.div
        initial="closed"
        animate={open ? "open" : "closed"}
        variants={mobileMenuVariants}
        className="absolute top-full left-0 right-0 
          bg-black/60 backdrop-blur-md
          border-b border-white/10
          shadow-lg shadow-black/20
          p-6 flex flex-col gap-4 md:hidden"
      >
        {navLinks.map((link) => {
          const linkProps = getLinkProps(link);
          const Component = isHomePage ? 'a' : Link;
          return (
            <motion.div
              key={link}
              variants={menuItemVariants}
              className="relative w-fit"
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              <Component
                {...linkProps}
                onClick={() => setOpen(false)}
                className="font-body text-white/80 hover:text-green-400 transition-colors duration-300 block py-2 text-base relative"
              >
                {link}
              </Component>
              <motion.div
                variants={underlineVariants}
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-400 origin-left"
                style={{ scaleX: 0 }}
              />
            </motion.div>
          );
        })}
        {/* Contact button in mobile menu */}
        <motion.button
          variants={menuItemVariants}
          onClick={() => {
            handleContactClick();
            setOpen(false);
          }}
          className="border border-green-400 text-white px-6 py-2.5 rounded-full hover:bg-green-400 transition-colors duration-200 font-medium shadow-sm hover:shadow w-fit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact
        </motion.button>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;