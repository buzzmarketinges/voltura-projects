import { ContactProvider } from "@/context/contact-modal-context";
import { CookieConsent } from "@/components/cookie-consent";

export default function CatalanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div lang="ca">
      {children}
    </div>
  );
}
