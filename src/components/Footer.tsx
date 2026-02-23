const Footer = () => {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-body text-sm text-muted-foreground">
          © {new Date().getFullYear()} Rakibul Islam Akash. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a
            href="https://github.com/AxisAkash"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/rakibul-islam-akash-2a0054347"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
