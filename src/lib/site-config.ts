// Configuração central da página de vendas. Altere aqui os links — todos os botões usam estas constantes.
export const CHECKOUT_URL = "https://payfast.greenn.com.br/196443/offer/mkimrj";
export const VIDEO_EMBED_URL: string = ""; // Ex.: "https://www.youtube.com/embed/ID" ou "https://player.vimeo.com/video/ID"
export const PDF_EXAMPLE_URL = ""; // Link do PDF de demonstração real
export const SUPPORT_URL = ""; // Ex.: "https://wa.me/55..." ou "mailto:suporte@..."
export const TERMS_URL = "";
export const PRIVACY_URL = "";

type FbqWindow = Window & { fbq?: (...args: unknown[]) => void };

/** Dispara InitiateCheckout (se houver Meta Pixel global) e abre o checkout. */
export function goToCheckout(source: string) {
  if (typeof window === "undefined") return;
  const w = window as FbqWindow;
  w.fbq?.("track", "InitiateCheckout", {
    value: 37,
    currency: "BRL",
    content_name: "Dimensionador Expert - Acesso Fundador",
    source,
  });
  if (CHECKOUT_URL) {
    window.location.href = CHECKOUT_URL;
  } else {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  }
}
