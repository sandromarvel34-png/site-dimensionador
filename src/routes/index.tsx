import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  Zap, ArrowRight, Play, Table2, RefreshCcw, Search, FileText, Check, X, Cpu, Cable,
  ShieldCheck, Activity, Gauge, ListChecks, History, BookOpen, Wrench, GraduationCap,
  HardHat, Ruler, FolderOpen, Sparkles, Monitor, Info,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { goToCheckout, VIDEO_EMBED_URL, PDF_EXAMPLE_URL, SUPPORT_URL, TERMS_URL, PRIVACY_URL } from "@/lib/site-config";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dimensionador Expert | Dimensionamento de Comandos Elétricos" },
      { name: "description", content: "Dimensione condutores, proteções e componentes de comandos elétricos com mais rapidez e organização utilizando o Dimensionador Expert." },
      { property: "og:title", content: "Dimensionador Expert" },
      { property: "og:description", content: "Uma ferramenta online de apoio ao dimensionamento de comandos elétricos." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SalesPage,
});

/* ---------- peças reutilizáveis ---------- */

function CTA({ children, source, className = "" }: { children: ReactNode; source: string; className?: string }) {
  return (
    <button
      type="button"
      onClick={() => goToCheckout(source)}
      className={`inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-base font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:bg-primary/90 active:translate-y-0 sm:w-auto ${className}`}
    >
      {children} <ArrowRight className="h-4 w-4" />
    </button>
  );
}

/** Espaço para screenshot real do sistema. Passe `src` quando a imagem estiver disponível. */
function Shot({ label, src, ratio = "aspect-[16/10]", className = "" }: { label: string; src?: string; ratio?: string; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-border bg-card shadow-soft ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-border bg-secondary px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-border" /><span className="h-2.5 w-2.5 rounded-full bg-border" /><span className="h-2.5 w-2.5 rounded-full bg-border" />
      </div>
      {src ? (
        <img src={src} alt={label} loading="lazy" className={`w-full object-cover ${ratio}`} />
      ) : (
        <div className={`grid place-items-center bg-[linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] ${ratio}`}>
          <div className="flex flex-col items-center gap-2 rounded-xl bg-card/90 px-5 py-4 text-center">
            <Monitor className="h-6 w-6 text-primary" />
            <span className="text-sm font-medium text-foreground">{label}</span>
            <span className="text-xs text-muted-foreground">Screenshot real do sistema</span>
          </div>
        </div>
      )}
    </div>
  );
}

function Section({ id, children, className = "" }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`px-5 py-20 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

function Heading({ eyebrow, title, text, center }: { eyebrow?: string; title: string; text?: ReactNode; center?: boolean }) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-primary">{eyebrow}</p>}
      <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h2>
      {text && <div className="mt-4 space-y-3 text-base leading-relaxed text-muted-foreground sm:text-lg">{text}</div>}
    </div>
  );
}

function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground"><Check className="h-3.5 w-3.5" /></span>
      <span className="text-foreground">{children}</span>
    </li>
  );
}

const card = "rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-0.5 hover:shadow-soft";
const iconBox = "grid h-11 w-11 place-items-center rounded-xl bg-accent text-accent-foreground";

/* ---------- página ---------- */

function SalesPage() {
  const [showBar, setShowBar] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("topo");
    if (!hero) return;
    const io = new IntersectionObserver(([e]) => setShowBar(!e?.isIntersecting));
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  const scrollToVideo = () => document.getElementById("video")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen bg-background pb-20 text-foreground md:pb-0">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
          <div className="flex min-w-0 items-center gap-2">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground"><Zap className="h-4 w-4" /></span>
            <span className="truncate font-semibold">Dimensionador Expert</span>
          </div>
          <button onClick={() => goToCheckout("header")} className="hidden shrink-0 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 sm:inline-flex">
            Liberar meu acesso
          </button>
        </div>
      </header>

      {/* 1 — HERO */}
      <section id="topo" className="relative overflow-hidden px-5 pb-20 pt-14 sm:pt-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_80%_0%,var(--accent),transparent)]" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div className="reveal">
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold tracking-[0.12em] text-primary">
              <Zap className="h-3.5 w-3.5" /> DIMENSIONADOR EXPERT
            </p>
            <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
              Dimensione comandos elétricos com mais rapidez e profissionalismo.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Calcule condutores, proteções e componentes, consulte opções de fabricantes e gere a documentação do seu dimensionamento em poucos minutos.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTA source="hero">Quero acessar o Dimensionador Expert</CTA>
              <button onClick={scrollToVideo} className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-4 font-semibold transition hover:bg-secondary sm:w-auto">
                <Play className="h-4 w-4 text-primary" /> Ver como funciona
              </button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">6 meses de acesso • Pagamento único de R$37 • Sem mensalidade</p>
            <p className="mt-6 flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
              <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
              Ferramenta de apoio ao dimensionamento. As condições reais da instalação e os requisitos normativos aplicáveis devem sempre ser verificados pelo profissional responsável.
            </p>
          </div>
          <div className="relative reveal">
            <Shot label="Painel do Dimensionador Expert" />
            <div className="absolute -bottom-8 -left-4 hidden w-40 sm:block">
              <Shot label="Resultado (celular)" ratio="aspect-[9/16]" />
            </div>
            <div className="absolute -right-3 -top-6 hidden w-44 md:block">
              <Shot label="PDF gerado" ratio="aspect-[3/4]" />
            </div>
          </div>
        </div>
      </section>

      {/* 2 — PROBLEMA */}
      <Section className="bg-secondary">
        <Heading
          title="Quanto tempo você perde conferindo tabelas, cálculos e componentes?"
          text={<>
            <p>Dimensionar um comando elétrico envolve muito mais do que descobrir a corrente do motor.</p>
            <p>É preciso analisar dados da carga, instalação, condutor, proteção, queda de tensão, dispositivo de comando e compatibilidade dos componentes.</p>
            <p>E quando essas informações ficam espalhadas entre tabelas, catálogos, calculadoras e anotações, o trabalho se torna mais lento e sujeito a retrabalho.</p>
          </>}
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [Table2, "Consultando tabelas e catálogos"],
            [RefreshCcw, "Refazendo cálculos"],
            [Search, "Procurando componentes compatíveis"],
            [FileText, "Montando documentação manualmente"],
          ].map(([I, t]) => {
            const Icon = I as typeof Table2;
            return (
              <div key={t as string} className={card}>
                <div className={iconBox}><Icon className="h-5 w-5" /></div>
                <p className="mt-4 font-semibold">{t as string}</p>
              </div>
            );
          })}
        </div>
        <p className="mt-12 rounded-2xl border border-primary/20 bg-card p-6 text-center text-xl font-semibold text-foreground sm:text-2xl">
          O Dimensionador Expert reúne esse processo em <span className="text-primary">um único ambiente.</span>
        </p>
      </Section>

      {/* 3 — SOLUÇÃO */}
      <Section>
        <Heading center eyebrow="A solução" title="Conheça o Dimensionador Expert"
          text="Uma ferramenta desenvolvida para auxiliar profissionais e estudantes da área elétrica a realizar dimensionamentos de forma mais rápida, organizada e padronizada." />
        <ol className="mt-12 grid gap-4 md:grid-cols-5">
          {["Informe os dados", "Execute o dimensionamento", "Analise os resultados", "Consulte os componentes", "Gere sua documentação"].map((s, i) => (
            <li key={s} className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">{i + 1}</span>
                <span className="font-semibold">{s}</span>
              </div>
              <Shot label={s} ratio="aspect-[4/3]" />
            </li>
          ))}
        </ol>
      </Section>

      {/* 4 — VÍDEO */}
      <Section id="video" className="bg-secondary">
        <Heading center eyebrow="Demonstração" title="Veja o Dimensionador Expert funcionando"
          text="Antes de comprar, veja um dimensionamento sendo realizado do início ao fim." />
        <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-border bg-navy shadow-soft">
          <div className="relative aspect-video">
            {playing && VIDEO_EMBED_URL ? (
              <iframe src={`${VIDEO_EMBED_URL}${VIDEO_EMBED_URL.includes("?") ? "&" : "?"}autoplay=1`} title="Vídeo demonstrativo do Dimensionador Expert" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen className="absolute inset-0 h-full w-full" />
            ) : (
              <button onClick={() => setPlaying(true)} disabled={!VIDEO_EMBED_URL} className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-navy-foreground disabled:cursor-default">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-primary text-primary-foreground shadow-soft transition hover:scale-105"><Play className="ml-1 h-8 w-8" /></span>
                <span className="px-4 text-center text-sm font-semibold tracking-[0.12em]">VÍDEO DEMONSTRATIVO DO DIMENSIONADOR EXPERT</span>
              </button>
            )}
          </div>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-muted-foreground">No vídeo você verá desde o preenchimento dos dados até a geração dos resultados e documentação.</p>
        <div className="mt-8 flex justify-center"><CTA source="video">Quero acessar por R$37</CTA></div>
      </Section>

      {/* 5 — FUNCIONALIDADES */}
      <Section>
        <Heading eyebrow="Funcionalidades" title="Do dado do motor ao resultado final" />
        <div className="mt-10 grid items-start gap-10 lg:grid-cols-2">
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              [Cpu, "Dados do motor"], [Activity, "Corrente nominal"], [Gauge, "Corrente de projeto"],
              [Cable, "Dimensionamento de condutores"], [Ruler, "Verificação de queda de tensão"], [ShieldCheck, "Dispositivos de proteção"],
              [Zap, "Contatores"], [Wrench, "Relés"], [Search, "Componentes compatíveis"],
              [BookOpen, "Memória de cálculo"], [History, "Histórico de dimensionamentos"], [FileText, "Geração de documentação"],
            ].map(([I, t]) => {
              const Icon = I as typeof Zap;
              return (
                <div key={t as string} className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 transition hover:border-primary/40">
                  <Icon className="h-4 w-4 shrink-0 text-primary" /><span className="text-sm font-medium">{t as string}</span>
                </div>
              );
            })}
          </div>
          <Shot label="Formulário de dados do motor" />
        </div>
      </Section>

      {/* 6 — RESULTADO */}
      <Section className="bg-secondary">
        <Heading center eyebrow="Resultado" title="Não receba apenas um número. Veja como o dimensionamento foi construído." />
        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Shot label="Tela de resultado do dimensionamento" />
          <div>
            <div className="flex flex-wrap gap-2">
              {["Condutor recomendado", "Corrente nominal", "Corrente de projeto", "Proteção", "Contator", "Relé", "Queda de tensão", "Critérios utilizados"].map((t) => (
                <span key={t} className="rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium">{t}</span>
              ))}
            </div>
            <p className="mt-6 text-lg font-semibold">O objetivo não é esconder o cálculo.</p>
            <p className="mt-2 text-muted-foreground">O Dimensionador Expert apresenta os resultados de forma organizada para que você possa consultar os critérios considerados no dimensionamento.</p>
            <div className="mt-8"><CTA source="resultado">Quero dimensionar meus projetos</CTA></div>
          </div>
        </div>
      </Section>

      {/* 7 — FABRICANTES */}
      <Section>
        <Heading eyebrow="Componentes" title="Encontre componentes compatíveis sem ficar procurando catálogo por catálogo"
          text="A partir das características do dimensionamento, o sistema apresenta opções de componentes compatíveis disponíveis no catálogo interno da ferramenta." />
        <div className="mt-8 grid grid-cols-3 gap-3 sm:max-w-xl">
          {["WEG", "SIEMENS", "SCHNEIDER"].map((m) => (
            <div key={m} className="grid h-16 place-items-center rounded-xl border border-border bg-card text-sm font-bold tracking-wide text-foreground sm:text-base">{m}</div>
          ))}
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <Shot label="Card de componente — WEG" ratio="aspect-[4/3]" />
          <Shot label="Card de componente — Siemens" ratio="aspect-[4/3]" />
          <Shot label="Card de componente — Schneider" ratio="aspect-[4/3]" />
        </div>
        <p className="mt-6 flex items-start gap-2 text-sm text-muted-foreground"><Info className="mt-0.5 h-4 w-4 shrink-0" />As referências devem ser verificadas pelo profissional antes da especificação final e aquisição.</p>
      </Section>

      {/* 8 — MEMÓRIA DE CÁLCULO */}
      <Section className="bg-secondary">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Shot label="Memória de cálculo passo a passo" className="order-2 lg:order-1" />
          <div className="order-1 lg:order-2">
            <Heading eyebrow="Memória de cálculo" title="Quer entender o resultado? Veja o cálculo."
              text="Além do resultado, o Dimensionador Expert permite consultar como determinados valores foram obtidos, tornando a ferramenta útil também para:" />
            <ul className="mt-6 space-y-3">
              {["Estudantes", "Técnicos", "Profissionais em formação", "Revisão de conceitos", "Conferência de dimensionamentos"].map((t) => <CheckItem key={t}>{t}</CheckItem>)}
            </ul>
          </div>
        </div>
      </Section>

      {/* 9 — PDF */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Heading eyebrow="Documentação" title="Transforme o dimensionamento em documentação profissional"
              text="Depois do dimensionamento, organize as informações do projeto e gere documentação para consulta, arquivo ou apresentação profissional." />
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {["Dados do projeto", "Informações da carga", "Resultados", "Componentes", "Critérios utilizados", "Informações profissionais"].map((t) => <CheckItem key={t}>{t}</CheckItem>)}
            </ul>
            {PDF_EXAMPLE_URL && (
              <a href={PDF_EXAMPLE_URL} target="_blank" rel="noreferrer" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 font-semibold transition hover:bg-secondary sm:w-auto">
                <FileText className="h-4 w-4 text-primary" /> Ver exemplo do PDF
              </a>
            )}
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl bg-accent" />
            <Shot label="Folha A4 — PDF gerado pelo sistema" ratio="aspect-[210/297]" className="relative" />
          </div>
        </div>
      </Section>

      {/* 10 — BENEFÍCIO */}
      <section className="bg-navy px-5 py-20 text-navy-foreground sm:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mx-auto max-w-3xl text-center text-2xl font-bold tracking-tight sm:text-4xl">Menos tempo procurando. Mais tempo executando.</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              [Zap, "Agilidade", "Centralize informações que normalmente estariam espalhadas entre cálculos, tabelas e catálogos."],
              [FolderOpen, "Organização", "Mantenha os dimensionamentos e resultados reunidos em um único ambiente."],
              [Sparkles, "Profissionalismo", "Gere resultados e documentação com apresentação mais organizada."],
            ].map(([I, t, d]) => {
              const Icon = I as typeof Zap;
              return (
                <div key={t as string} className="rounded-2xl border border-navy-foreground/15 bg-navy-foreground/5 p-7">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground"><Icon className="h-5 w-5" /></span>
                  <h3 className="mt-5 text-lg font-semibold">{t as string}</h3>
                  <p className="mt-2 leading-relaxed text-navy-foreground/75">{d as string}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11 — PARA QUEM */}
      <Section>
        <Heading center title="Para quem é o Dimensionador Expert?" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [HardHat, "Eletricistas", "Que desejam agilizar dimensionamentos e consultas durante projetos e serviços."],
            [Wrench, "Técnicos em eletrotécnica", "Que trabalham com motores, comandos, instalações e projetos elétricos."],
            [Ruler, "Engenheiros e projetistas", "Como ferramenta complementar de apoio a cálculos e especificações."],
            [GraduationCap, "Estudantes", "Para acompanhar cálculos e compreender melhor o processo de dimensionamento."],
          ].map(([I, t, d]) => {
            const Icon = I as typeof Zap;
            return (
              <div key={t as string} className={card}>
                <div className={iconBox}><Icon className="h-5 w-5" /></div>
                <h3 className="mt-4 font-semibold">{t as string}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d as string}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* 12 + 13 — O QUE RECEBE + OFERTA */}
      <Section id="oferta" className="bg-secondary">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <Heading title="Ao liberar seu acesso, você recebe:" />
            <ul className="mt-8 space-y-4">
              {[
                "6 meses de acesso ao Dimensionador Expert", "Uso da plataforma online", "Dimensionamentos durante o período contratado",
                "Histórico de projetos", "Memória dos cálculos disponíveis no sistema", "Consulta aos componentes disponíveis na ferramenta",
                "Geração de documentação", "Atualizações disponibilizadas durante o período de acesso",
              ].map((t) => <CheckItem key={t}>{t}</CheckItem>)}
            </ul>
          </div>
          <div className="rounded-3xl border border-primary/25 bg-card p-7 shadow-soft sm:p-10">
            <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold tracking-[0.1em] text-accent-foreground">CONDIÇÃO DE LANÇAMENTO</span>
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">Acesso Fundador</h2>
            <p className="mt-3 text-muted-foreground">Estamos formando o primeiro grupo de usuários do Dimensionador Expert. Por isso, neste momento você pode liberar 6 meses de acesso através de um único pagamento.</p>
            <div className="mt-8 border-t border-border pt-8">
              <p className="text-sm font-semibold tracking-[0.1em] text-primary">6 MESES DE ACESSO</p>
              <p className="mt-2 text-5xl font-bold tracking-tight">R$ 37<span className="text-3xl">,00</span></p>
              <ul className="mt-4 space-y-1 text-sm text-muted-foreground">
                <li>Pagamento único.</li><li>Sem mensalidade.</li><li>Sem renovação automática durante os 6 meses contratados.</li>
              </ul>
            </div>
            <CTA source="oferta" className="mt-8 sm:w-full">Liberar meu acesso agora</CTA>
            <p className="mt-3 text-center text-xs text-muted-foreground">Acesso válido por 6 meses a partir da ativação.</p>
          </div>
        </div>
      </Section>

      {/* 14 — COMPARAÇÃO */}
      <Section>
        <Heading center title="Quanto vale economizar tempo em cada novo dimensionamento?"
          text={<><p>Você não está comprando apenas acesso a uma calculadora.</p><p>Está utilizando uma ferramenta criada para reunir etapas do processo de dimensionamento, consulta e documentação em um único ambiente.</p></>} />
        <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-secondary p-7">
            <h3 className="font-semibold text-muted-foreground">Sem Dimensionador</h3>
            <ul className="mt-5 space-y-3">
              {["Consultas separadas", "Cálculos em diferentes ferramentas", "Busca manual em catálogos", "Documentação montada manualmente"].map((t) => (
                <li key={t} className="flex items-center gap-3 text-muted-foreground"><X className="h-4 w-4 shrink-0" />{t}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-primary/30 bg-card p-7 shadow-soft">
            <h3 className="font-semibold text-primary">Com Dimensionador Expert</h3>
            <ul className="mt-5 space-y-3">
              {["Fluxo centralizado", "Resultados organizados", "Componentes reunidos", "Documentação integrada"].map((t) => <CheckItem key={t}>{t}</CheckItem>)}
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-border bg-card p-6 text-center">
          <p className="font-semibold">6 meses de acesso • R$37 pagamento único</p>
          <p className="mt-1 text-sm text-muted-foreground">Equivalente a aproximadamente R$0,21 por dia durante 180 dias.</p>
          <div className="mt-5 flex justify-center"><CTA source="comparacao">Quero acessar por R$37</CTA></div>
        </div>
      </Section>

      {/* 15 — FASE INICIAL */}
      <Section className="bg-secondary">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Heading eyebrow="Grupo fundador" title="Por que o acesso está sendo oferecido por R$37?"
            text={<>
              <p>O Dimensionador Expert está iniciando uma nova fase.</p>
              <p>Queremos colocar a plataforma nas mãos dos primeiros usuários, acompanhar sua utilização e utilizar o feedback recebido para continuar aprimorando o produto.</p>
              <p>Por isso, estamos disponibilizando esta condição inicial de acesso por 6 meses.</p>
            </>} />
          <div className="space-y-3">
            {[[Check, "Você utiliza uma ferramenta funcional."], [ListChecks, "Nós aprendemos com o uso real."], [Sparkles, "O produto continua evoluindo."]].map(([I, t], i) => {
              const Icon = I as typeof Zap;
              return (
                <div key={i} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
                  <span className={iconBox}><Icon className="h-5 w-5" /></span>
                  <span className="font-semibold">{t as string}</span>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* 16 — FAQ */}
      <Section>
        <Heading center title="Perguntas frequentes" />
        <Accordion type="single" collapsible className="mx-auto mt-10 max-w-3xl">
          {FAQ.map(([q, a], i) => (
            <AccordionItem key={q} value={`q${i}`}>
              <AccordionTrigger className="text-left text-base font-semibold">{q}</AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      {/* 17 — CTA FINAL */}
      <section className="px-5 pb-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-navy px-6 py-14 text-center text-navy-foreground sm:px-12 sm:py-20">
          <h2 className="mx-auto max-w-3xl text-2xl font-bold tracking-tight sm:text-4xl">Seu próximo dimensionamento pode começar em poucos minutos.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-navy-foreground/75">Centralize cálculos, componentes e documentação em uma única ferramenta.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-2 text-sm">
            {["Dimensionador Expert", "6 meses de acesso", "R$37", "Pagamento único"].map((t) => (
              <span key={t} className="rounded-full border border-navy-foreground/20 px-3 py-1.5">{t}</span>
            ))}
          </div>
          <div className="mt-8 flex justify-center"><CTA source="final">Quero acessar o Dimensionador Expert</CTA></div>
          <p className="mt-4 text-sm text-navy-foreground/70">Sem mensalidade • Sem renovação automática</p>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="border-t border-border px-5 py-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground"><Zap className="h-4 w-4" /></span>
              <span className="font-semibold">Dimensionador Expert</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">Academia do Eletricista</p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {[["Termos de Uso", TERMS_URL], ["Política de Privacidade", PRIVACY_URL], ["Suporte", SUPPORT_URL]].filter(([, u]) => u).map(([t, u]) => (
              <a key={t} href={u} target="_blank" rel="noreferrer" className="hover:text-foreground">{t}</a>
            ))}
          </nav>
        </div>
        <div className="mx-auto mt-8 max-w-6xl border-t border-border pt-6 text-xs leading-relaxed text-muted-foreground">
          <p>O Dimensionador Expert é uma ferramenta de apoio técnico. Os resultados devem ser analisados considerando as características reais da instalação e as normas aplicáveis.</p>
          <p className="mt-2">© {new Date().getFullYear()} Dimensionador Expert — Academia do Eletricista. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* Barra fixa mobile */}
      <div className={`fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 px-4 py-3 backdrop-blur transition-transform md:hidden ${showBar ? "translate-y-0" : "translate-y-full"}`}>
        <div className="flex items-center justify-between gap-3">
          <span className="min-w-0 truncate text-sm font-semibold">Dimensionador Expert — R$37</span>
          <button onClick={() => goToCheckout("barra-mobile")} className="shrink-0 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground">Quero acessar</button>
        </div>
      </div>
    </div>
  );
}

const FAQ: [string, string][] = [
  ["O que é o Dimensionador Expert?", "É uma ferramenta online de apoio ao dimensionamento de comandos elétricos, reunindo cálculos, resultados, componentes e documentação em um único ambiente."],
  ["Por quanto tempo terei acesso?", "6 meses a partir da ativação do acesso."],
  ["Vou pagar mensalidade?", "Não. Nesta oferta inicial o pagamento é único: R$37 pelos 6 meses de acesso."],
  ["Haverá cobrança automática depois dos 6 meses?", "Não nesta oferta. Ao final do período, você poderá receber uma nova opção de acesso caso queira continuar utilizando a ferramenta."],
  ["Preciso instalar algum programa?", "Não. O Dimensionador Expert funciona online através do navegador."],
  ["Posso usar no celular?", "Sim. A interface é responsiva e compatível com computadores, tablets e smartphones."],
  ["A ferramenta substitui um profissional habilitado?", "Não. O Dimensionador Expert é uma ferramenta de apoio ao dimensionamento. As condições reais da instalação, requisitos normativos e responsabilidade técnica devem ser avaliados pelo profissional responsável."],
  ["Quais fabricantes aparecem no sistema?", "Atualmente o sistema trabalha com referências disponíveis de fabricantes como WEG, Siemens e Schneider."],
  ["Posso gerar documentação?", "Sim. O Dimensionador Expert possui recursos para organizar os resultados e gerar documentação relacionada ao dimensionamento."],
  ["O produto continuará recebendo melhorias?", "Durante esta fase inicial, o produto poderá receber melhorias e atualizações. Usuários com acesso ativo terão acesso às funcionalidades liberadas dentro do período contratado, conforme disponibilidade."],
];
