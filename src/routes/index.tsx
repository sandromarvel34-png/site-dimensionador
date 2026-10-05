import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  Zap,
  ArrowRight,
  Play,
  Search,
  FileText,
  Check,
  Cable,
  ShieldCheck,
  ListChecks,
  History,
  Wrench,
  GraduationCap,
  HardHat,
  Ruler,
  Info,
  Monitor,
  Smartphone,
  Download,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  goToCheckout,
  PDF_EXAMPLE_URL,
  SUPPORT_URL,
  TERMS_URL,
  PRIVACY_URL,
} from "@/lib/site-config";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dimensionador Expert | Dimensionamento de Comandos Elétricos" },
      {
        name: "description",
        content:
          "Dimensione condutores, proteções e componentes de comandos elétricos com mais rapidez e organização utilizando o Dimensionador Expert.",
      },
      { property: "og:title", content: "Dimensionador Expert" },
      {
        property: "og:description",
        content: "Uma ferramenta online de apoio ao dimensionamento de comandos elétricos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SalesPage,
});

/* ---------- peças reutilizáveis ---------- */

function CTA({
  children,
  source,
  className = "",
}: {
  children: ReactNode;
  source: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => goToCheckout(source)}
      className={`inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cta px-6 py-4 text-base font-semibold text-cta-foreground shadow-soft transition hover:-translate-y-0.5 hover:bg-cta-hover active:translate-y-0 sm:w-auto ${className}`}
    >
      {children} <ArrowRight className="h-4 w-4" />
    </button>
  );
}

/** Mockup responsivo: tela real no computador e prévias de acesso e documentação. */
function ProductMockup() {
  return (
    <figure className="mx-auto w-full max-w-4xl">
      <div className="relative isolate aspect-[1.45]">
        <div className="absolute inset-x-[8%] bottom-[4%] h-[28%] rounded-[50%] bg-primary/10 blur-2xl" />
        {/* Computador: screenshot real, inteiro e sem distorção. */}
        <div className="absolute left-[1%] top-[4%] z-10 w-[75%]">
          <div className="rounded-[clamp(8px,1.5vw,18px)] border border-slate-700 bg-slate-900 p-[2%] shadow-2xl">
            <div className="mb-[2%] flex items-center gap-[1.5%] px-[1%] text-[clamp(7px,0.8vw,11px)] font-semibold text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              Dimensionador Expert
            </div>
            <img
              src="/images/dimensionador-resultado-nitido.jpg"
              alt="Dimensionador Expert aberto no computador, com resultado de um dimensionamento real"
              width={1242}
              height={840}
              fetchPriority="high"
              className="block h-auto w-full rounded-[clamp(4px,0.6vw,8px)]"
            />
          </div>
          <div className="mx-auto h-[clamp(18px,3vw,42px)] w-[13%] bg-gradient-to-b from-slate-800 to-slate-500" />
          <div className="mx-auto h-[clamp(6px,0.9vw,12px)] w-[43%] rounded-t-xl rounded-b-md bg-gradient-to-b from-slate-400 to-slate-600 shadow-lg" />
        </div>
        {/* Celular: prévia visual dos mesmos dados exibidos na tela real. */}
        <div className="absolute bottom-[8%] right-[8%] z-30 aspect-[9/18] w-[23%] rounded-[clamp(14px,2.4vw,30px)] border-[clamp(3px,0.6vw,7px)] border-slate-900 bg-white shadow-2xl">
          <div className="absolute left-1/2 top-[2%] h-[3%] w-[35%] -translate-x-1/2 rounded-full bg-slate-900" />
          <div className="flex h-full flex-col overflow-hidden rounded-[clamp(10px,1.8vw,23px)] px-[9%] pb-[10%] pt-[17%]">
            <span className="text-[clamp(7px,0.8vw,11px)] font-bold leading-tight text-slate-900">
              Dimensionador
              <br />
              Expert
            </span>
            <div className="mt-[15%] rounded-lg bg-blue-50 p-[9%]">
              <span className="block text-[clamp(6px,0.6vw,9px)] font-semibold text-blue-700">
                Resultado
              </span>
              <span className="mt-1 block text-[clamp(18px,2.5vw,34px)] font-bold leading-none text-slate-900">
                16 <span className="text-[clamp(8px,0.8vw,12px)]">mm²</span>
              </span>
              <span className="mt-[8%] block text-[clamp(6px,0.6vw,9px)] text-slate-600">
                Condutor recomendado
              </span>
            </div>
            <div className="mt-[10%] rounded-lg bg-slate-900 p-[9%] text-white">
              <span className="block text-[clamp(6px,0.6vw,9px)] text-blue-200">
                Corrente nominal
              </span>
              <span className="mt-1 block text-[clamp(11px,1.3vw,18px)] font-bold">36,6 A</span>
            </div>
            <div className="mt-[10%] flex items-center justify-between text-[clamp(6px,0.7vw,10px)] text-slate-600">
              <span>Queda de tensão</span>
              <strong className="text-blue-700">1,35%</strong>
            </div>
            <div className="mx-auto mt-auto h-1 w-[40%] rounded-full bg-slate-300" />
          </div>
        </div>
        {/* Folha de PDF: representação do formato de entrega, sem dados fictícios de clientes. */}
        <div className="absolute right-[0.5%] top-[1%] z-20 aspect-[210/297] w-[23%] rotate-[6deg] rounded-sm border border-slate-200 bg-white p-[2.5%] shadow-xl">
          <span className="inline-flex rounded bg-blue-700 px-2 py-1 text-[clamp(8px,1vw,14px)] font-bold tracking-wide text-white">
            PDF
          </span>
          <FileText className="mt-[15%] h-[25%] w-[30%] text-blue-700" />
          <span className="mt-[10%] block text-[clamp(7px,0.8vw,11px)] font-bold leading-tight text-slate-900">
            Documentos
            <br />
            do projeto
          </span>
          <div className="mt-[15%] space-y-[8%]" aria-hidden="true">
            <div className="h-1 w-full rounded bg-slate-200" />
            <div className="h-1 w-[80%] rounded bg-slate-200" />
            <div className="h-1 w-full rounded bg-slate-200" />
          </div>
          <Download className="absolute bottom-[8%] right-[10%] h-[10%] w-[15%] text-blue-700" />
        </div>
      </div>
      <figcaption className="mt-3 grid grid-cols-3 gap-2 text-center text-xs font-semibold text-slate-700 sm:text-sm">
        <span className="flex flex-col items-center gap-2">
          <Monitor className="h-5 w-5 text-primary" />
          No computador
        </span>
        <span className="flex flex-col items-center gap-2">
          <Smartphone className="h-5 w-5 text-primary" />
          No celular
        </span>
        <span className="flex flex-col items-center gap-2">
          <Download className="h-5 w-5 text-primary" />
          Baixe em PDF
        </span>
      </figcaption>
    </figure>
  );
}

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`px-5 py-20 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

function Heading({
  eyebrow,
  title,
  text,
  center,
}: {
  eyebrow?: string;
  title: string;
  text?: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h2>
      {text && (
        <div className="mt-4 space-y-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {text}
        </div>
      )}
    </div>
  );
}

function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground">
        <Check className="h-3.5 w-3.5" />
      </span>
      <span className="text-foreground">{children}</span>
    </li>
  );
}

const card =
  "rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-0.5 hover:shadow-soft";
const iconBox = "grid h-11 w-11 place-items-center rounded-xl bg-accent text-accent-foreground";

/* ---------- página ---------- */

function SalesPage() {
  const [showBar, setShowBar] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("topo");
    if (!hero) return;
    const io = new IntersectionObserver(([e]) => setShowBar(e ? !e.isIntersecting : false));
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  const scrollToVideo = () =>
    document.getElementById("video")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen bg-background pb-20 text-foreground md:pb-0">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
          <div className="flex min-w-0 items-center gap-2">
            <div className="flex items-center text-left" style={{ gap: 12 }}>
              <img
                src="/logo-academia-eletricista.png"
                alt="Academia do Eletricista"
                width="61.42"
                height="32"
                style={{ width: 61.42, height: 32, minWidth: 61.42, maxWidth: 61.42 }}
                className="shrink-0 object-contain"
              />
              <div className="leading-tight">
                <span
                  className="block font-bold tracking-tight text-slate-950"
                  style={{ fontSize: 16, lineHeight: "20px" }}
                >
                  Dimensionador Expert
                </span>
                <span
                  className="mt-0.5 block font-semibold uppercase tracking-[0.14em] text-slate-400"
                  style={{ fontSize: 10, lineHeight: "12.5px" }}
                >
                  Comandos elétricos
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={() => goToCheckout("header")}
            className="hidden shrink-0 rounded-lg bg-cta px-4 py-2 text-sm font-semibold text-cta-foreground transition hover:bg-cta-hover sm:inline-flex"
          >
            Liberar meu acesso
          </button>
        </div>
      </header>

      {/* 1 — HERO */}
      <section id="topo" className="relative overflow-hidden px-5 pb-20 pt-14 sm:pt-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_80%_0%,var(--accent),transparent)]" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
          <div className="reveal">
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold tracking-[0.12em] text-primary">
              <Zap className="h-3.5 w-3.5" /> DIMENSIONADOR EXPERT
            </p>
            <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
              Não sabe como dimensionar os cabos e dispositivos para instalar um motor?
            </h1>
            <p className="mt-5 text-xl font-semibold leading-relaxed sm:text-2xl">
              Receba o dimensionamento pronto, sem precisar fazer os cálculos.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Informe os dados do motor e da instalação. O Dimensionador Expert calcula a seção dos
              cabos, dimensiona disjuntores, contatores e relés e indica modelos de WEG, Siemens e
              Schneider para você escolher.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTA source="hero">Quero acessar o Dimensionador Expert</CTA>
              <button
                onClick={scrollToVideo}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-4 font-semibold transition hover:bg-secondary sm:w-auto"
              >
                <Play className="h-4 w-4 text-primary" /> Ver o dimensionamento na prática
              </button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              De <del>R$97,00</del> por <strong className="text-foreground">R$37,00</strong> • 6 meses de acesso • Pagamento único • Sem mensalidade
            </p>
            <p className="mt-6 flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
              <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
              Ferramenta de apoio ao dimensionamento. As condições reais da instalação e os
              requisitos normativos aplicáveis devem sempre ser verificados pelo profissional
              responsável.
            </p>
          </div>
          <div className="relative reveal">
            <ProductMockup />
          </div>
        </div>
      </section>

      {/* 2 — PROBLEMA */}
      <Section className="bg-secondary">
        <Heading
          title="Na hora de instalar o motor, você sabe qual cabo, disjuntor, contator e relé escolher?"
          text="Você identifica o motor, a tensão de alimentação, a chave de partida e a distância da instalação. Mas ainda precisa transformar essas informações no dimensionamento dos cabos e dispositivos."
        />
        <p className="mt-5 text-lg font-semibold">É nessa etapa que surgem as dúvidas:</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className={card}>
            <div className={iconBox}>
              <Cable className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold">Qual bitola de cabo utilizar?</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              É preciso considerar a corrente, as condições de instalação e a queda de tensão.
            </p>
          </div>
          <div className={card}>
            <div className={iconBox}>
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold">Qual disjuntor selecionar?</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              A proteção precisa ser adequada ao circuito e às características da partida.
            </p>
          </div>
          <div className={card}>
            <div className={iconBox}>
              <Wrench className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold">Qual contator e relé escolher?</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              A corrente e o tipo de acionamento influenciam a seleção.
            </p>
          </div>
          <div className={card}>
            <div className={iconBox}>
              <Search className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold">Qual modelo comprar?</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Depois de dimensionar, ainda é necessário encontrar as referências dos fabricantes.
            </p>
          </div>
        </div>
        <p className="mt-10 rounded-2xl border border-primary/20 bg-card p-6 text-center text-xl font-semibold text-foreground sm:text-2xl">
          Com o Dimensionador Expert, você não precisa fazer esses cálculos manualmente.
        </p>
      </Section>

      {/* 3 — SOLUÇÃO */}
      <Section>
        <Heading
          center
          eyebrow="A solução"
          title="Conheça o Dimensionador Expert"
          text="Uma ferramenta online que faz os cálculos, dimensiona os cabos e dispositivos para instalações de motores e indica modelos de WEG, Siemens e Schneider para você escolher."
        />
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            [
              "Informe o motor e as condições da instalação",
              "Preencha os dados do motor ou selecione um modelo do catálogo WEG. Informe a tensão, a chave de partida, a distância e as condições de instalação dos condutores.",
            ],
            [
              "Receba o dimensionamento",
              "A ferramenta calcula as correntes, determina a seção dos cabos, verifica a queda de tensão e dimensiona os dispositivos de proteção e comando conforme os dados informados.",
            ],
            [
              "Escolha entre as indicações dos fabricantes",
              "Veja os modelos indicados de WEG, Siemens e Schneider e escolha qual fabricante utilizar.",
            ],
          ].map(([title, text], i) => (
            <li key={title} className="rounded-2xl border border-border bg-card p-6">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {i + 1}
              </span>
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </ol>
        <p className="mx-auto mt-8 max-w-3xl text-center text-muted-foreground">
          Você recebe os resultados organizados para selecionar os cabos e dispositivos, sem
          precisar fazer os cálculos manualmente.
        </p>
        <div className="mt-6 flex justify-center">
          <button
            onClick={scrollToVideo}
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-4 font-semibold transition hover:bg-secondary"
          >
            <Play className="h-4 w-4 text-primary" />
            Ver o dimensionamento na prática
          </button>
        </div>
      </Section>
      {/* 4 — VÍDEO */}
      <Section id="video" className="bg-secondary">
        <Heading
          center
          eyebrow="Demonstração"
          title="Veja o Dimensionador Expert fazendo o dimensionamento na prática."
          text="Acompanhe o preenchimento dos dados do motor e da instalação e veja como a ferramenta apresenta a seção dos cabos, os dispositivos dimensionados e as indicações dos fabricantes."
        />
        <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-border bg-navy shadow-soft">
          <div className="relative aspect-video">
            {videoLoaded ? (
              <iframe
                src="https://www.youtube-nocookie.com/embed/rMAqEe2uzW8?autoplay=1&playsinline=1&rel=0"
                title="Demonstração do Dimensionador Expert"
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 h-full w-full border-0"
              />
            ) : (
              <button
                type="button"
                onClick={() => setVideoLoaded(true)}
                aria-label="Reproduzir demonstração do Dimensionador Expert"
                className="group absolute inset-0 flex items-center justify-center"
              >
                <img
                  src="https://i.ytimg.com/vi/rMAqEe2uzW8/maxresdefault.jpg"
                  alt="Capa do vídeo de demonstração do Dimensionador Expert"
                  loading="lazy"
                  decoding="async"
                  onError={(event) => {
                    const image = event.currentTarget;
                    if (!image.src.endsWith("/hqdefault.jpg")) {
                      image.src = "https://i.ytimg.com/vi/rMAqEe2uzW8/hqdefault.jpg";
                    }
                  }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <span className="absolute inset-0 bg-slate-950/20 transition group-hover:bg-slate-950/30" />
                <span className="relative flex flex-col items-center gap-4">
                  <span className="grid h-20 w-20 place-items-center rounded-full bg-primary text-primary-foreground shadow-xl transition group-hover:scale-105">
                    <Play className="ml-1 h-8 w-8" />
                  </span>
                  <span className="rounded-full bg-slate-950/80 px-5 py-2 text-sm font-semibold text-white">
                    Assistir à demonstração
                  </span>
                </span>
              </button>
            )}
          </div>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-muted-foreground">
          Dos dados informados aos resultados: veja o que você recebe antes de comprar.
        </p>
        <div className="mt-8 flex justify-center">
          <CTA source="video">Quero acessar por R$37</CTA>
        </div>
      </Section>

      {/* 5 — FUNCIONALIDADES E ENTREGAS */}
      <Section>
        <Heading
          eyebrow="Funcionalidades"
          title="O dimensionamento que você precisa para selecionar os cabos e dispositivos."
          text="Com os dados do motor e da instalação, o Dimensionador Expert entrega os resultados organizados para apoiar a escolha dos materiais."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className={card}>
            <div className={iconBox}>
              <Cable className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold">Seção transversal dos cabos</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Saiba qual bitola utilizar, considerando a corrente, o método de instalação, a
              temperatura, o agrupamento e a queda de tensão.
            </p>
          </div>
          <div className={card}>
            <div className={iconBox}>
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold">Disjuntores de proteção</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Receba o dimensionamento dos disjuntores dos circuitos de força e comando e, quando
              aplicável, do disjuntor-motor.
            </p>
          </div>
          <div className={card}>
            <div className={iconBox}>
              <Wrench className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold">Contatores e relés</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Veja os requisitos dos contatores e relés conforme as características do motor e o
              tipo de partida escolhido.
            </p>
          </div>
          <div className={card}>
            <div className={iconBox}>
              <Search className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold">Indicações dos fabricantes</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Receba indicações de modelos de WEG, Siemens e Schneider para escolher qual fabricante
              utilizar.
            </p>
          </div>
        </div>
        <div className="mt-6 grid gap-5 rounded-2xl border border-primary/20 bg-accent p-6 md:grid-cols-2 sm:p-8">
          <div>
            <FileText className="h-6 w-6 text-primary" />
            <h3 className="mt-3 font-semibold">Documentos para imprimir ou salvar em PDF</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Além dos resultados, você tem acesso à memória de cálculo e pode gerar o memorial
              descritivo e a proposta comercial com a lista de materiais. Imprima os documentos
              diretamente ou escolha “Salvar como PDF” na janela de impressão.
            </p>
          </div>
          <div>
            <History className="h-6 w-6 text-primary" />
            <h3 className="mt-3 font-semibold">Seus dados e projetos salvos</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Retome dimensionamentos e propostas pelo histórico. Cadastre seus dados profissionais
              e sua logomarca uma vez e reutilize nas próximas propostas e memoriais.
            </p>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <CTA source="funcionalidades">Quero dimensionar minha instalação</CTA>
        </div>
      </Section>

      {/* 6 — FABRICANTES */}
      <Section className="bg-secondary">
        <Heading
          eyebrow="Indicações dos fabricantes"
          title="A ferramenta indica os modelos. Você escolhe o fabricante."
          text="Depois de dimensionar os dispositivos, o Dimensionador Expert apresenta indicações de WEG, Siemens e Schneider, organizadas por componente."
        />
        <p className="mt-4 max-w-3xl text-muted-foreground">
          Você vê a referência indicada e as características apresentadas pela ferramenta para
          escolher qual marca utilizar na instalação.
        </p>
        <div className="mt-8 grid grid-cols-3 gap-3 sm:max-w-xl">
          {["WEG", "SIEMENS", "SCHNEIDER"].map((m) => (
            <div
              key={m}
              className="grid h-16 place-items-center rounded-xl border border-border bg-card text-sm font-bold tracking-wide text-foreground sm:text-base"
            >
              {m}
            </div>
          ))}
        </div>
        <p className="mt-6 flex items-start gap-2 text-sm text-muted-foreground">
          <Info className="mt-0.5 h-4 w-4 shrink-0" />
          Antes da compra, confira a configuração final do dispositivo, incluindo tensão da bobina,
          capacidade de interrupção e compatibilidade de montagem, conforme aplicável.
        </p>
      </Section>

      {/* 7 — MEMÓRIA DE CÁLCULO */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <Heading
            eyebrow="Memória de cálculo"
            title="O resultado vem acompanhado dos cálculos."
            text="Você não precisa fazer os cálculos manualmente, mas pode acompanhar como a ferramenta chegou ao dimensionamento."
          />
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            A memória de cálculo apresenta as fórmulas, os valores utilizados e as etapas de cálculo
            da corrente, da capacidade dos condutores e da queda de tensão.
          </p>
          <div className="mt-6 rounded-2xl border border-border bg-secondary p-6">
            <p className="font-semibold">
              Confira os critérios utilizados no seu projeto ou use a explicação para estudar e
              revisar conceitos.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Imprima a memória de cálculo ou salve em PDF pela janela de impressão.
            </p>
          </div>
        </div>
      </Section>

      {/* 8 — DOCUMENTAÇÃO */}
      <Section className="bg-secondary">
        <Heading
          eyebrow="Documentação"
          title="Aproveite o dimensionamento para preparar os documentos do serviço."
          text="Use os dados e resultados do projeto para gerar os documentos, sem começar tudo do zero."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className={card}>
            <div className={iconBox}>
              <ListChecks className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold">Proposta comercial com lista de materiais</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              A ferramenta reúne os condutores e componentes na proposta. Revise as quantidades,
              preencha os preços e acrescente os serviços para apresentar o orçamento ao cliente.
            </p>
          </div>
          <div className={card}>
            <div className={iconBox}>
              <FileText className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold">Memorial descritivo</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Gere um documento técnico com as informações do motor, da instalação e do serviço,
              separado dos valores comerciais.
            </p>
          </div>
          <div className={card}>
            <div className={iconBox}>
              <HardHat className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold">Com sua identidade profissional</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Cadastre seus dados e sua logomarca uma vez e reutilize nas próximas propostas e
              memoriais.
            </p>
          </div>
          <div className={card}>
            <div className={iconBox}>
              <Download className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold">Imprima ou salve em PDF</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Abra a impressão do documento e escolha imprimir ou salvar em PDF. As propostas ficam
              salvas na conta para consultar e editar depois.
            </p>
          </div>
        </div>
        {PDF_EXAMPLE_URL && (
          <a
            href={PDF_EXAMPLE_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 font-semibold transition hover:bg-secondary"
          >
            <FileText className="h-4 w-4 text-primary" />
            Ver exemplo do PDF
          </a>
        )}
      </Section>

      {/* 9 — COMPARAÇÃO */}
      <Section>
        <Heading
          center
          eyebrow="Sem e com"
          title="Do cálculo manual ao dimensionamento organizado."
        />
        <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-border">
          <div className="hidden grid-cols-2 md:grid">
            <h3 className="bg-secondary p-5 font-semibold text-muted-foreground">
              Sem o Dimensionador Expert
            </h3>
            <h3 className="bg-accent p-5 font-semibold text-primary">Com o Dimensionador Expert</h3>
          </div>
          {[
            [
              "Calcular as correntes manualmente.",
              "Receber as correntes calculadas a partir dos dados informados.",
            ],
            [
              "Cruzar tabelas e cálculos para definir a bitola.",
              "Receber a seção dos cabos e a verificação da queda de tensão.",
            ],
            [
              "Dimensionar separadamente disjuntores, contatores e relés.",
              "Receber os requisitos dos dispositivos conforme o motor e a partida.",
            ],
            [
              "Procurar referências nos catálogos dos fabricantes.",
              "Ver as indicações organizadas por WEG, Siemens e Schneider.",
            ],
            [
              "Montar os documentos a partir de anotações.",
              "Aproveitar os dados do projeto na proposta e no memorial.",
            ],
          ].map(([without, withTool]) => (
            <div key={without} className="grid border-t border-border md:grid-cols-2">
              <div className="bg-secondary p-5">
                <span className="mb-2 block text-xs font-semibold text-muted-foreground md:hidden">
                  SEM O DIMENSIONADOR
                </span>
                <p className="text-sm leading-relaxed text-muted-foreground">{without}</p>
              </div>
              <div className="bg-accent p-5">
                <span className="mb-2 block text-xs font-semibold text-primary md:hidden">
                  COM O DIMENSIONADOR EXPERT
                </span>
                <p className="text-sm leading-relaxed">{withTool}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-muted-foreground">
          Você informa os dados da instalação. A ferramenta reúne os cálculos, o dimensionamento e
          as indicações dos dispositivos em um único ambiente.
        </p>
        <div className="mt-6 flex justify-center">
          <CTA source="comparacao">Quero acessar por R$37</CTA>
        </div>
      </Section>

      {/* 10 — PARA QUEM */}
      <Section className="bg-secondary">
        <Heading center title="Para quem é o Dimensionador Expert?" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className={card}>
            <div className={iconBox}>
              <HardHat className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold">Eletricistas e instaladores</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Para quem precisa selecionar os cabos e dispositivos na instalação de motores e
              montagem de painéis de comando, sem fazer cada cálculo manualmente.
            </p>
          </div>
          <div className={card}>
            <div className={iconBox}>
              <Wrench className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold">Técnicos em eletrotécnica e manutenção</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Para apoiar o dimensionamento e a seleção de proteções, contatores e relés conforme o
              motor e a partida.
            </p>
          </div>
          <div className={card}>
            <div className={iconBox}>
              <Ruler className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold">Engenheiros e projetistas</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Para agilizar os cálculos e organizar resultados, referências de componentes e
              documentos do projeto.
            </p>
          </div>
          <div className={card}>
            <div className={iconBox}>
              <GraduationCap className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold">Estudantes da área elétrica</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Para acompanhar o dimensionamento passo a passo e entender as fórmulas e os critérios
              utilizados.
            </p>
          </div>
        </div>
      </Section>

      {/* 11 — ENTREGA E OFERTA */}
      <Section id="oferta">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <Heading title="Tudo isso incluído no seu acesso ao Dimensionador Expert." />
            <ul className="mt-8 space-y-4">
              {[
                "Dimensionamento dos condutores, com verificação da queda de tensão e das condições de instalação.",
                "Dimensionamento dos dispositivos de proteção e comando, conforme o motor e a partida.",
                "Indicações de modelos de WEG, Siemens e Schneider para escolher o fabricante.",
                "Memória de cálculo com fórmulas, valores e etapas.",
                "Proposta comercial com lista de materiais para revisar quantidades, preencher preços e incluir serviços.",
                "Memorial descritivo com as informações técnicas do projeto.",
                "Impressão ou salvamento em PDF dos documentos.",
                "Histórico de dimensionamentos e propostas para retomar seu trabalho.",
                "Dados profissionais e logomarca reutilizáveis nas propostas e memoriais.",
              ].map((t) => (
                <CheckItem key={t}>{t}</CheckItem>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-primary/25 bg-card p-7 shadow-soft sm:p-10">
            <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold tracking-[0.1em] text-accent-foreground">
              CONDIÇÃO DE LANÇAMENTO
            </span>
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">6 meses de acesso por R$37</h2>
            <p className="mt-3 text-muted-foreground">
              Use a ferramenta online pelo computador, tablet ou celular, sem instalar programas.
            </p>
            <div className="mt-8 border-t border-border pt-8">
              <p className="text-sm font-semibold tracking-[0.1em] text-primary">
                6 MESES DE ACESSO
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                De <del>R$97,00</del> por
              </p>
              <p className="mt-2 text-5xl font-bold tracking-tight">
                R$ 37<span className="text-3xl">,00</span>
              </p>
              <p className="mt-3 text-sm font-semibold text-primary">Economize R$60,00</p>
              <p className="mt-4 text-sm text-muted-foreground">
                Pagamento único, sem mensalidade e sem renovação automática.
              </p>
            </div>
            <CTA source="oferta" className="mt-8 sm:w-full">
              Quero acessar por R$37
            </CTA>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Acesso válido por 6 meses a partir da ativação.
            </p>
            <div className="mt-8 border-t border-border pt-6">
              <h3 className="font-semibold">
                Uma condição de lançamento para os primeiros usuários.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                O Dimensionador Expert está formando seu primeiro grupo de usuários. Nesta fase,
                você pode utilizar a ferramenta por 6 meses com um pagamento único de R$37.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Seu uso e suas sugestões ajudarão a orientar as próximas melhorias da aplicação.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Você recebe acesso aos recursos apresentados nesta página durante o período
                contratado, sem mensalidade e sem renovação automática.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 12 — FAQ */}
      <Section className="bg-secondary">
        <Heading center title="Perguntas frequentes" />
        <Accordion type="single" collapsible className="mx-auto mt-10 max-w-3xl">
          {FAQ.map(([q, a], i) => (
            <AccordionItem key={q} value={`q${i}`}>
              <AccordionTrigger className="text-left text-base font-semibold">{q}</AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                {a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      {/* 13 — FECHAMENTO */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-navy px-6 py-14 text-center text-navy-foreground sm:px-12 sm:py-20">
          <h2 className="mx-auto max-w-3xl text-2xl font-bold tracking-tight sm:text-4xl">
            Seu próximo dimensionamento não precisa começar com cálculos à mão.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-navy-foreground/75">
            Informe os dados do motor e da instalação. Receba o dimensionamento dos cabos e
            dispositivos e as indicações dos fabricantes para apoiar sua escolha.
          </p>
          <p className="mt-8 text-lg text-navy-foreground/75">De <del>R$97,00</del> por</p>
          <p className="mt-2 text-2xl font-bold">R$37,00 • 6 meses de acesso</p>
          <p className="mt-3 text-sm text-navy-foreground/75">
            Pagamento único • Sem mensalidade • Sem renovação automática
          </p>
          <div className="mt-8 flex justify-center">
            <CTA source="final">Quero acessar o Dimensionador Expert</CTA>
          </div>
          <p className="mt-4 text-sm text-navy-foreground/70">
            Use online pelo computador, tablet ou celular.
          </p>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="border-t border-border px-5 py-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex items-center text-left" style={{ gap: 12 }}>
                <img
                  src="/logo-academia-eletricista.png"
                  alt="Academia do Eletricista"
                  width="61.42"
                  height="32"
                  style={{ width: 61.42, height: 32, minWidth: 61.42, maxWidth: 61.42 }}
                  className="shrink-0 object-contain"
                />
                <div className="leading-tight">
                  <span
                    className="block font-bold tracking-tight text-slate-950"
                    style={{ fontSize: 16, lineHeight: "20px" }}
                  >
                    Dimensionador Expert
                  </span>
                  <span
                    className="mt-0.5 block font-semibold uppercase tracking-[0.14em] text-slate-400"
                    style={{ fontSize: 10, lineHeight: "12.5px" }}
                  >
                    Comandos elétricos
                  </span>
                </div>
              </div>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">Academia do Eletricista</p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {[
              ["Termos de Uso", TERMS_URL],
              ["Política de Privacidade", PRIVACY_URL],
              ["Suporte", SUPPORT_URL],
            ]
              .filter(([, u]) => u)
              .map(([t, u]) => (
                <a
                  key={t}
                  href={u}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-foreground"
                >
                  {t}
                </a>
              ))}
          </nav>
        </div>
        <div className="mx-auto mt-8 max-w-6xl border-t border-border pt-6 text-xs leading-relaxed text-muted-foreground">
          <p>
            O Dimensionador Expert é uma ferramenta de apoio técnico. Os resultados devem ser
            analisados considerando as características reais da instalação e as normas aplicáveis.
          </p>
          <div className="mt-5 space-y-1 text-center text-sm">
            <p>Copyright © {new Date().getFullYear()}</p>
            <p className="font-bold text-foreground">Academia do Eletricista</p>
            <p>Instituto Brasileiro de Qualificação Profissional Ltda - ME</p>
            <p>CNPJ: 10.984.548/0001-77</p>
          </div>
        </div>
      </footer>

      {/* Barra fixa mobile */}
      <div
        className={`fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 px-4 py-3 backdrop-blur transition-transform md:hidden ${showBar ? "translate-y-0" : "translate-y-full"}`}
      >
        <div className="flex items-center justify-between gap-3">
          <span className="min-w-0 truncate text-sm font-semibold">
            Dimensionador Expert — R$37
          </span>
          <button
            onClick={() => goToCheckout("barra-mobile")}
            className="shrink-0 rounded-lg bg-cta px-4 py-2.5 text-sm font-semibold text-cta-foreground"
          >
            Quero acessar
          </button>
        </div>
      </div>
    </div>
  );
}

const FAQ: [string, string][] = [
  [
    "Preciso saber fazer os cálculos para usar?",
    "Não precisa executar os cálculos manualmente. Você informa os dados do motor e as condições da instalação, e a ferramenta apresenta o dimensionamento. É importante preencher os dados corretamente e conferir a aplicação dos resultados.",
  ],
  [
    "Quais dispositivos a ferramenta dimensiona?",
    "Disjuntores dos circuitos de força e comando, contatores e relés, além do disjuntor-motor quando aplicável. Os dispositivos dependem do motor e da partida selecionada.",
  ],
  [
    "A ferramenta indica modelos dos fabricantes?",
    "Sim. As indicações são organizadas por WEG, Siemens e Schneider para você escolher o fabricante. A configuração final do dispositivo deve ser conferida antes da compra.",
  ],
  [
    "Posso imprimir ou salvar os documentos em PDF?",
    "Sim. Você pode imprimir a memória de cálculo, a proposta comercial e o memorial descritivo. Na janela de impressão, também pode escolher “Salvar como PDF”.",
  ],
  [
    "Preciso preencher meus dados profissionais em cada proposta?",
    "Não. Seus dados profissionais e sua logomarca ficam salvos para reutilização nas próximas propostas e memoriais. Os dados do cliente e do serviço são preenchidos para cada projeto.",
  ],
  [
    "Os dimensionamentos e propostas ficam salvos?",
    "Sim. Você pode acessar o histórico para consultar os dimensionamentos e retomar suas propostas.",
  ],
  [
    "Preciso instalar algum programa?",
    "Não. A ferramenta funciona online pelo navegador, no computador, tablet ou celular. É necessário acesso à internet.",
  ],
  [
    "Quanto custa e por quanto tempo posso usar?",
    "A oferta é de R$37 por 6 meses de acesso, contados a partir da ativação. O pagamento é único, sem mensalidade e sem renovação automática.",
  ],
  [
    "A ferramenta substitui a avaliação do profissional?",
    "Não. Ela apoia o dimensionamento. As condições reais da instalação, a configuração dos dispositivos e a responsabilidade técnica permanecem sob avaliação do profissional.",
  ],
];
