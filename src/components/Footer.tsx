import { Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/share/1DJB9BRJVs/",
      ariaLabel: "Visit our Facebook page"
    },
    // {
    //   name: "LinkedIn",
    //   icon: Linkedin,
    //   url: "https://www.linkedin.com/in/yourusername",
    //   ariaLabel: "Visit our LinkedIn profile"
    // },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/ryt.way_?igsh=MWhzbXh6dWZ1dXBkMQ==",
      ariaLabel: "Visit our Instagram profile"
    },
  ];

  const footerLinks = [
    {
      heading: "Company",
      links: [
        { name: "About Us", url: "#about" },
        
        { name: "Why Us", url: "#why-us" },
        // { name: "Portfolio", url: "#our-works" },
      ]
    },
    // {
    //   heading: "Resources",
    //   links: [
    //     { name: "Blog", url: "/blog" },
    //     { name: "Help Center", url: "/help" },
    //     { name: "Contact", url: "/contact" },
    //   ]
    // },
    // {
    //   heading: "Legal",
    //   links: [
    //     { name: "Privacy Policy", url: "/privacy" },
    //     { name: "Terms of Service", url: "/terms" },
    //     { name: "Cookie Policy", url: "/cookies" },
    //   ]
    // }
  ];

  return (
    <footer className="bg-background border-t border-border" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <img 
              src="/assets/logo.png" 
              alt="RYTWAY" 
              className="h-8 w-auto mb-4"
              loading="lazy"
            />
            <p className="font-body text-sm text-muted-foreground max-w-md">
              Empowering your journey with innovative solutions and exceptional service.
            </p>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section) => (
            <div key={section.heading}>
              <h3 className="font-semibold text-sm uppercase tracking-wider text-foreground mb-4">
                {section.heading}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      className="font-body text-sm text-muted-foreground hover:text-green-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Copyright */}
            <p className="font-body text-xs text-muted-foreground order-2 md:order-1">
              © {currentYear} RYTWAY. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4 order-1 md:order-2">
              <span className="text-xs text-muted-foreground hidden sm:inline">
                Follow us:
              </span>
              <div className="flex gap-3" role="list" aria-label="Social media links">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.ariaLabel}
                      className="p-2 rounded-full bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-green-400 hover:scale-110 transition-all duration-200"
                      role="listitem"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;