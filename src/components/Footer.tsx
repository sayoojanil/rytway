const Footer = () => {
  return (
    <footer className="border-t border-border px-6 md:px-12 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-heading font-bold text-sm tracking-wider text-foreground">
          RYT<span className="text-primary">WAY</span>
        </span>
        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} RYTWAY. All rights reserved.
        </p>
        <div className="flex gap-6">
          {["Instagram", "LinkedIn", "Twitter"].map((s) => (
            <a
              key={s}
              href="#"
              className="font-body text-xs text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
