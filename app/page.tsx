import Image from "next/image";

import { Navbar } from "@/components/navbar";
import { ArrowUpRightIcon, PlayIcon } from "@/components/icons";
import { Reveal } from "@/components/motion/reveal";
import { SiteEffects } from "@/components/site-effects";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import {
  distances,
  experienceItems,
  gallery,
  registrationUrl,
  siteUrl,
  summitTopics
} from "@/lib/data";

const eventSchema = {
  "@context": "https://schema.org",
  "@type": "SportsEvent",
  name: "2ª Meia Maratona do Marco Zero",
  startDate: "2026-07-26T05:00:00-03:00",
  endDate: "2026-07-26T13:00:00-03:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  description:
    "Evento oficial da 2ª Meia Maratona do Marco Zero, com percursos de 5K, 10K, 21K e o novo Desafio Capibaribe 30KM no Recife.",
  image: [`${siteUrl}/images/og-marco-zero.png`],
  url: siteUrl,
  location: {
    "@type": "Place",
    name: "Marco Zero do Recife",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Recife",
      addressRegion: "PE",
      addressCountry: "BR"
    }
  },
  organizer: {
    "@type": "Organization",
    name: "Meia Maratona do Marco Zero"
  },
  offers: {
    "@type": "Offer",
    url: registrationUrl,
    priceCurrency: "BRL",
    availability: "https://schema.org/InStock"
  }
};

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/12 bg-white/8 px-4 py-2.5 font-display text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md sm:text-sm">
      {children}
    </span>
  );
}

function SectionHeading({
  eyebrow,
  title,
  copy,
  light = false
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <Reveal>
        <p className={`font-display text-sm uppercase tracking-[0.34em] ${light ? "text-gold" : "text-electric"}`}>
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className={`mt-5 font-display text-[2.25rem] font-bold uppercase leading-[0.95] tracking-hero sm:text-5xl lg:text-6xl ${light ? "text-white" : "text-midnight"}`}>
          {title}
        </h2>
      </Reveal>
      {copy ? (
        <Reveal delay={0.1}>
          <p className={`mt-6 max-w-2xl text-lg leading-8 ${light ? "text-white/72" : "text-midnight/72"}`}>
            {copy}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <SiteEffects />
      <main id="conteudo" className="overflow-x-clip">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />

        <section id="top" aria-labelledby="hero-title" className="relative isolate min-h-screen overflow-hidden">
          <div className="absolute inset-0 bg-[#020711]" />
          <div className="absolute inset-0 bg-mesh-blue opacity-90" data-parallax data-depth="-35" />
          <div className="absolute inset-0 bg-[url('/images/background-04.png')] bg-cover bg-center opacity-20 mix-blend-screen" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,9,18,0.18)_0%,rgba(5,9,18,0.6)_38%,rgba(5,9,18,0.94)_100%)]" />
          <div className="absolute -left-28 top-24 h-72 w-72 rounded-full bg-gold/18 blur-3xl" data-parallax data-depth="38" />
          <div className="absolute right-[-8rem] top-16 h-[28rem] w-[28rem] rounded-full bg-electric/26 blur-3xl" data-parallax data-depth="62" />
          <div className="absolute bottom-10 left-1/2 h-[14rem] w-[14rem] -translate-x-1/2 rounded-full border border-white/10" />
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-[linear-gradient(180deg,transparent_0%,rgba(5,9,18,0.95)_100%)]" />

          <div className="relative mx-auto grid min-h-screen max-w-7xl gap-8 px-4 pb-8 pt-18 sm:px-6 md:pb-12 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pt-20">
            <div className="flex flex-col justify-start pt-3 pb-2 lg:pt-6 lg:pb-6">
              <Reveal>
                <div className="inline-flex w-fit items-center gap-3 rounded-full border border-white/12 bg-white/8 px-4 py-2 backdrop-blur-md">
                  <span className="h-2.5 w-2.5 rounded-full bg-gold" aria-hidden="true" />
                  <span className="font-display text-[0.72rem] uppercase tracking-[0.34em] text-white/78 sm:text-xs">
                    Recife recebe a edição 2026
                  </span>
                </div>
              </Reveal>
              <Reveal delay={0.04}>
                <p className="mt-6 font-display text-[0.78rem] uppercase tracking-[0.34em] text-gold">
                  Evento oficial de rua, cultura e performance
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 id="hero-title" className="mt-4 max-w-5xl font-display text-[3rem] font-bold uppercase leading-[0.88] tracking-hero text-white sm:text-[4.15rem] md:text-[4.9rem] lg:text-[6.1rem]">
                  2ª Meia Maratona do Marco Zero
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-5 max-w-2xl text-[0.98rem] leading-7 text-white/80 sm:text-[1.02rem]">
                  Recife recebe a segunda edição de uma das corridas mais esperadas do ano, agora com um novo capítulo de resistência, atmosfera urbana e identidade nacional.
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <div className="inline-flex w-fit items-center rounded-[1.45rem] bg-gold px-5 py-3 text-midnight shadow-[0_24px_60px_rgba(245,180,0,0.2)]">
                    <span className="font-display text-sm uppercase tracking-[0.24em] text-midnight/75">26 de julho de 2026</span>
                  </div>
                  <p className="max-w-md text-sm uppercase tracking-[0.26em] text-white/48">
                    5K • 10K • 21K • 30K no coração do Recife
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-6 flex flex-wrap gap-2.5" aria-label="Distâncias em destaque">
                  {['5K', '10K', '21K', '30K'].map((distance) => (
                    <Pill key={distance}>{distance}</Pill>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href={registrationUrl} target="_blank" rel="noreferrer" className="group inline-flex items-center justify-center rounded-full bg-gold px-6 py-3.5 font-display text-sm font-bold uppercase tracking-[0.16em] text-midnight transition duration-300 hover:-translate-y-1 hover:bg-[#ffd05d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-midnight">
                    Inscreva-se agora
                    <ArrowUpRightIcon className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <a href="#desafio" className="inline-flex items-center justify-center rounded-full border border-white/18 bg-white/6 px-6 py-3.5 font-display text-sm font-bold uppercase tracking-[0.16em] text-white transition duration-300 hover:border-white/30 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-midnight">
                    Explorar evento
                  </a>
                </div>
              </Reveal>

            </div>

            <Reveal className="relative flex items-start pt-2 lg:justify-end lg:pt-6" delay={0.1} y={36}>
              <div className="relative w-full max-w-[31rem]">
                <div className="absolute -left-2 top-6 z-20 rounded-[1.25rem] border border-white/12 bg-midnight/80 px-4 py-3.5 backdrop-blur-xl sm:-left-6 sm:px-5">
                  <p className="font-display text-[0.68rem] uppercase tracking-[0.28em] text-white/50">Energia de prova grande</p>
                  <p className="mt-2 max-w-[11rem] font-display text-[1.15rem] font-semibold uppercase leading-tight text-white">Um evento com imagem, ritmo e presença nacional</p>
                </div>
                <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.06] p-3 shadow-glow backdrop-blur-xl">
                  <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.18),transparent_35%,transparent_72%,rgba(245,180,0,0.08))]" />
                  <div className="relative overflow-hidden rounded-[1.65rem] border border-white/10">
                    <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(2,7,17,0.2)_32%,rgba(2,7,17,0.88)_100%)]" />
                    <div className="absolute inset-0 z-10 bg-[linear-gradient(135deg,rgba(0,91,255,0.34),transparent_35%,transparent_62%,rgba(245,180,0,0.16))]" />
                    <Image src="/images/placeholder-black.svg" alt="Atletas e público na energia da Meia Maratona do Marco Zero" width={900} height={1200} className="h-[24rem] w-full object-cover object-center opacity-72 sm:h-[28rem] lg:h-[31rem]" priority />
                    <div className="absolute inset-x-0 bottom-0 z-20 p-4 sm:p-6">
                      <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
                        <div>
                          <p className="font-display text-[0.72rem] uppercase tracking-[0.3em] text-gold">Atmosfera oficial</p>
                          <p className="mt-2 max-w-sm font-display text-[1.7rem] font-semibold uppercase leading-tight text-white sm:text-[1.85rem]">Recife em movimento com DNA urbano e esportivo</p>
                        </div>
                        <div className="hidden rounded-[1.15rem] border border-white/12 bg-white/8 px-4 py-3 backdrop-blur">
                          <p className="font-display text-[0.68rem] uppercase tracking-[0.26em] text-white/52">Destaque 2026</p>
                          <p className="mt-2 font-display text-[2.5rem] font-bold uppercase leading-none text-gold">30KM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              <Stagger className="mt-10 grid gap-3 sm:grid-cols-3">
                  {[["Edição", "02"], ["Cidade", "Recife"], ["Destaque", "30KM"]].map(([label, value]) => (
                    <StaggerItem key={label}>
                      <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.06] px-4 py-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur">
                        <p className="font-display text-[0.66rem] uppercase tracking-[0.24em] text-white/50">{label}</p>
                        <p className="mt-2.5 font-display text-[1.8rem] font-semibold uppercase text-white sm:text-[2.2rem]">{value}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>

              </div>
            </Reveal>
          </div>
        </section>
        <section className="border-y border-white/8 bg-white/[0.03] py-4">
          <div className="overflow-hidden whitespace-nowrap">
            <div className="flex w-[220%] animate-marquee gap-10 font-display text-sm uppercase tracking-[0.36em] text-white/58">
              {Array.from({ length: 2 }).map((_, index) => (
                <div key={index} className="flex min-w-max gap-10 pr-10">
                  <span>2ª Meia Maratona do Marco Zero</span>
                  <span>26 de julho de 2026</span>
                  <span>Recife</span>
                  <span>5K</span>
                  <span>10K</span>
                  <span>21K</span>
                  <span>30K</span>
                  <span>MZ Summit</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="desafio" aria-labelledby="desafio-title" className="relative overflow-hidden py-24 sm:py-28">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#051120_0%,#08162b_100%)]" />
          <div className="absolute inset-0 bg-[url('/images/background-03.png')] bg-cover bg-center opacity-10" />
          <div className="absolute left-0 top-0 h-full w-full bg-grid-fade bg-[size:54px_54px] opacity-[0.05]" />
          <div className="absolute right-[-8rem] top-8 h-[26rem] w-[26rem] rounded-full bg-electric/16 blur-3xl" data-parallax data-depth="54" />

          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div className="max-w-xl">
              <Reveal><p className="font-display text-sm uppercase tracking-[0.34em] text-gold">Um novo desafio surge</p></Reveal>
              <Reveal delay={0.05}><h2 id="desafio-title" className="mt-5 font-display text-[2.8rem] font-bold uppercase leading-[0.9] tracking-hero text-white sm:text-6xl lg:text-7xl">Desafio Capibaribe 30KM</h2></Reveal>
              <Reveal delay={0.1}><p className="mt-5 font-display text-2xl uppercase tracking-[0.08em] text-gold">Mais distância. Mais resistência. Mais história.</p></Reveal>
              <Reveal delay={0.15}><p className="mt-4 text-lg text-white/80">30 KM no coração do Recife</p></Reveal>
              <Reveal delay={0.2}><p className="mt-6 max-w-xl text-base leading-8 text-white/72">Depois de uma estreia marcante, a Meia Maratona do Marco Zero volta ainda maior e apresenta um novo nível de superação para atletas que buscam resistência, performance e uma experiência ainda mais intensa no coração da cidade.</p></Reveal>
            </div>
            <div className="relative overflow-hidden rounded-[2.1rem] border border-white/10 bg-white/[0.04] p-5 shadow-glow backdrop-blur" data-highlight>
              <div className="absolute right-5 top-5 rounded-full border border-gold/25 bg-gold/10 px-4 py-2 font-display text-[0.68rem] uppercase tracking-[0.24em] text-gold">Novo desafio 2026</div>
              <div className="grid gap-5 xl:grid-cols-[1fr_17rem]">
                <div className="relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-midnight/78 p-6">
                  <div className="absolute -right-8 -top-10 h-32 w-32 rounded-full border border-white/10" />
                  <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(135deg,rgba(245,180,0,0.09),transparent_35%,rgba(0,91,255,0.08)_100%)]" />
                  <p className="relative font-display text-[5rem] font-bold uppercase leading-none text-gold sm:text-[6.8rem]">30KM</p>
                  <p className="relative mt-4 max-w-md text-white/76">Bloco visual com presença de campanha para receber a marca do Desafio Capibaribe, com textura, hierarquia e assinatura mais forte.</p>
                  <div className="relative mt-8 flex flex-wrap gap-3">{["Resistência", "Recife", "Performance"].map((item) => (<span key={item} className="rounded-full border border-white/10 bg-white/6 px-4 py-2 font-display text-[0.66rem] uppercase tracking-[0.2em] text-white/72">{item}</span>))}</div>
                </div>
                <div className="rounded-[1.7rem] border border-dashed border-white/18 bg-gradient-to-b from-white/10 to-transparent p-6">
                  <p className="font-display text-sm uppercase tracking-[0.3em] text-white/55">Área da marca</p>
                  <div className="mt-6 flex h-[14rem] items-center justify-center rounded-[1.4rem] border border-white/10 bg-white/4 text-center font-display text-lg uppercase tracking-[0.18em] text-white/42">Logotipo<br />Desafio Capibaribe</div>
                </div>
              </div>
              <Stagger className="mt-5 grid gap-4 md:grid-cols-3">{["Rota longa em clima de grande prova", "Narrativa visual forte e urbana", "Espaço ideal para campanha de performance"].map((item) => (<StaggerItem key={item}><div className="rounded-[1.3rem] border border-white/10 bg-white/6 p-5"><p className="font-display text-sm uppercase tracking-[0.22em] text-white/78">{item}</p></div></StaggerItem>))}</Stagger>
            </div>
          </div>
        </section>

        <section id="sobre" aria-labelledby="sobre-title" className="bg-white py-24 text-midnight sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:px-8">
            <div className="max-w-xl">
              <Reveal><p className="font-display text-sm uppercase tracking-[0.34em] text-electric">Sobre o evento</p></Reveal>
              <Reveal delay={0.05}><h2 id="sobre-title" className="mt-5 font-display text-4xl font-bold uppercase leading-[0.96] tracking-hero sm:text-5xl">Depois de uma estreia marcante, o evento volta ainda maior</h2></Reveal>
              <Reveal delay={0.1}><p className="mt-6 text-lg leading-8 text-midnight/78">A Meia Maratona do Marco Zero se consolida como um dos principais eventos de corrida de rua do Nordeste, conectando performance, cultura e experiência urbana em um dos cenários mais simbólicos do Brasil.</p></Reveal>
              <Reveal delay={0.15}><p className="mt-4 text-lg leading-8 text-midnight/70">Mais do que uma prova, o evento propõe uma vivência completa entre esporte, cidade, identidade e superação.</p></Reveal>
            </div>
            <Stagger className="grid gap-4 sm:grid-cols-[1.2fr_0.8fr]">
              <StaggerItem className="sm:row-span-2">
                <div className="relative h-full overflow-hidden rounded-[2rem] bg-midnight">
                  <Image src={gallery[0].src} alt={gallery[0].alt} width={1200} height={1200} className="h-full min-h-[28rem] w-full object-cover opacity-84" />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/38 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="font-display text-[0.72rem] uppercase tracking-[0.28em] text-gold">Galeria oficial</p>
                    <p className="mt-2 max-w-md text-lg">{gallery[0].caption}</p>
                  </div>
                </div>
              </StaggerItem>
              {gallery.slice(1).map((item) => (
                <StaggerItem key={item.src}><div className="relative overflow-hidden rounded-[1.7rem] bg-[#dce7ff]"><Image src={item.src} alt={item.alt} width={900} height={900} className="h-[13.5rem] w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-midnight/58 to-transparent" /><p className="absolute inset-x-0 bottom-0 p-5 text-sm text-white">{item.caption}</p></div></StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <section id="distancias" aria-labelledby="distancias-title" className="relative overflow-hidden py-24 sm:py-28">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#081326_0%,#0a1221_100%)]" />
          <div className="absolute left-0 top-0 h-full w-full bg-grid-fade bg-[size:48px_48px] opacity-[0.06]" />
          <div className="absolute inset-y-0 right-0 w-1/2 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.03))]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Distâncias" title="Escolha o seu desafio" copy="Quatro formas de entrar na narrativa da prova, com o 30KM ocupando o centro da campanha desta edição." light />
            <Stagger className="mt-12 grid gap-5 lg:grid-cols-4">
              {distances.map((item) => (
                <StaggerItem key={item.label} className="h-full">
                  <article className={`group flex h-full flex-col rounded-[2rem] border border-white/10 p-6 transition duration-300 hover:-translate-y-2 hover:border-white/20 ${item.accent} ${item.label === "30K" ? "lg:-mt-6 lg:mb-6" : ""}`}>
                    <span className={`font-display text-6xl font-bold uppercase leading-none ${item.label === "30K" ? "text-midnight" : "text-gold"}`}>{item.label}</span>
                    <h3 className={`mt-6 font-display text-2xl font-semibold uppercase ${item.label === "30K" ? "text-midnight" : "text-white"}`}>{item.title}</h3>
                    <p className={`mt-4 text-base leading-7 ${item.label === "30K" ? "text-midnight/82" : "text-white/74"}`}>{item.description}</p>
                    <div className={`mt-auto pt-8 font-display text-xs uppercase tracking-[0.24em] ${item.label === "30K" ? "text-midnight/58" : "text-white/45"}`}>Pronto para regulamento, tempo de corte e CTA</div>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <section aria-labelledby="experiencia-title" className="bg-white py-24 text-midnight sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Experiência do evento" title="Mais do que uma corrida, uma experiência completa" copy="A Meia Maratona do Marco Zero vai além da linha de chegada. É sobre correr em um cenário icônico, sentir a energia das ruas, viver Recife em movimento e fazer parte de uma experiência que une esporte, cultura e memória." />
            <Stagger className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {experienceItems.map((item, index) => (
                <StaggerItem key={item}>
                  <article className={`rounded-[1.8rem] border p-6 shadow-card ${index % 2 === 0 ? "border-electric/12 bg-[#f3f7ff]" : "border-midnight/12 bg-white"}`}>
                    <div className="flex items-center justify-between">
                      <span className="font-display text-sm uppercase tracking-[0.28em] text-electric">0{index + 1}</span>
                      <span className="h-3 w-3 rounded-full bg-gold" aria-hidden="true" />
                    </div>
                    <h3 className="mt-8 font-display text-2xl font-semibold uppercase">{item}</h3>
                    <p className="mt-4 text-midnight/68">Estrutura pronta para detalhar serviços, operação e diferenciais da prova com linguagem institucional, leitura forte e foco em conversão.</p>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <section aria-labelledby="aftermovie-title" className="relative overflow-hidden py-24 sm:py-28">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#061221_0%,#0b1930_100%)]" />
          <div className="absolute inset-0 bg-[url('/images/background-03.png')] bg-cover bg-center opacity-10" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Aftermovie" title="Reviva a energia da primeira edição" copy="Assista ao aftermovie e sinta a atmosfera de uma prova que já nasceu marcante." light />
            <Reveal delay={0.15} className="mt-12">
              <div className="group relative overflow-hidden rounded-[2.1rem] border border-white/10 bg-white/6 p-3 shadow-glow backdrop-blur">
                <div className="relative overflow-hidden rounded-[1.6rem]">
                  <Image src="/images/placeholder-black.svg" alt="Thumbnail do aftermovie da primeira edição da Meia Maratona do Marco Zero" width={1600} height={900} className="h-[24rem] w-full object-cover opacity-70 transition duration-500 group-hover:scale-[1.03] sm:h-[32rem]" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,15,26,0.1),rgba(10,15,26,0.82))]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button type="button" aria-label="Em breve, reproduzir aftermovie" className="inline-flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-gold text-midnight shadow-[0_20px_60px_rgba(245,180,0,0.32)] transition duration-300 group-hover:scale-105">
                      <PlayIcon className="ml-1 h-8 w-8" />
                    </button>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-6 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="font-display text-xs uppercase tracking-[0.28em] text-gold">Área pronta para vídeo oficial</p>
                      <p className="mt-2 max-w-xl text-lg text-white">Substitua por embed de YouTube, Vimeo ou player proprietário quando o aftermovie final estiver publicado.</p>
                    </div>
                    <div className="font-display text-sm uppercase tracking-[0.22em] text-white/68">teaser da 1ª edição</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="percurso" aria-labelledby="percurso-title" className="bg-white py-24 text-midnight sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Percurso" title="Um percurso que conecta esporte e cidade" copy="Em breve, todos os detalhes do percurso oficial da 2ª Meia Maratona do Marco Zero." />
            <Reveal delay={0.15} className="mt-12">
              <div className="relative overflow-hidden rounded-[2rem] border border-[#d6e1ff] bg-[#f7faff] p-8">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,91,255,.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,91,255,.08)_1px,transparent_1px)] bg-[size:42px_42px]" />
                <div className="absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-electric/15" />
                <div className="absolute left-[18%] top-[30%] h-24 w-24 rounded-full bg-electric/12 blur-xl" />
                <div className="absolute right-[18%] top-[55%] h-24 w-24 rounded-full bg-gold/18 blur-xl" />
                <div className="relative grid gap-8 lg:grid-cols-[1fr_0.62fr]">
                  <div className="rounded-[1.6rem] border border-electric/10 bg-white/90 p-6">
                    <div className="mb-6 inline-flex rounded-full bg-electric px-4 py-2 font-display text-xs uppercase tracking-[0.22em] text-white">Percurso completo em breve</div>
                    <p className="max-w-2xl text-lg leading-8 text-midnight/72">O bloco já nasce elegante mesmo sem o mapa final: textura, grid, linhas e pontos de destaque criam uma expectativa visual forte para receber o percurso oficial, altimetria e postos de apoio depois.</p>
                  </div>
                  <div className="rounded-[1.6rem] border border-electric/10 bg-midnight p-6 text-white">
                    <p className="font-display text-sm uppercase tracking-[0.3em] text-gold">Selo</p>
                    <p className="mt-4 font-display text-3xl font-semibold uppercase">Em breve</p>
                    <p className="mt-4 text-white/68">Preparado para receber teaser de rota, distâncias por ponte e pontos icônicos do Recife.</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="summit" aria-labelledby="summit-title" className="relative overflow-hidden py-24 sm:py-28">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#09111d_0%,#111f35_100%)]" />
          <div className="absolute right-[-6rem] top-0 h-[24rem] w-[24rem] rounded-full bg-gold/18 blur-3xl" data-parallax data-depth="50" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Muito além da prova" title="MZ Summit" copy="Encontros que conectam corrida, empreendedorismo, saúde e cultura." light />
            <Reveal delay={0.15}><p className="mt-6 max-w-3xl text-lg leading-8 text-white/72">Durante os dois dias que antecedem a prova, o MZ Summit reúne nomes relevantes para discutir temas que vão além da corrida, promovendo conexões, aprendizado e reflexões sobre performance, mercado, bem-estar e transformação.</p></Reveal>
            <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <Reveal><div className="rounded-[2rem] border border-white/10 bg-white/6 p-6 backdrop-blur"><p className="font-display text-sm uppercase tracking-[0.28em] text-gold">Área da marca do summit</p><div className="mt-6 flex min-h-[18rem] items-center justify-center rounded-[1.6rem] border border-dashed border-white/18 bg-gradient-to-b from-white/10 to-transparent text-center font-display text-3xl font-semibold uppercase tracking-[0.12em] text-white/42">MZ Summit</div></div></Reveal>
              <Stagger className="grid gap-4 sm:grid-cols-2">{summitTopics.map((topic) => (<StaggerItem key={topic}><article className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur"><p className="font-display text-xs uppercase tracking-[0.24em] text-gold">Tema</p><h3 className="mt-3 font-display text-2xl font-semibold uppercase text-white">{topic}</h3></article></StaggerItem>))}</Stagger>
            </div>
          </div>
        </section>

        <section aria-labelledby="posicionamento-title" className="bg-white py-24 text-midnight sm:py-28">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <Reveal><p className="font-display text-sm uppercase tracking-[0.34em] text-electric">Posicionamento</p></Reveal>
            <Reveal delay={0.05}><h2 id="posicionamento-title" className="mt-5 font-display text-4xl font-bold uppercase leading-[0.96] tracking-hero sm:text-5xl lg:text-6xl">A corrida que coloca Recife no mapa das grandes provas do Brasil</h2></Reveal>
            <Reveal delay={0.1}><p className="mt-6 text-lg leading-8 text-midnight/72">Com identidade forte, cenário icônico e uma proposta que une esporte, cidade e experiência, a Meia Maratona do Marco Zero reforça seu lugar entre os eventos mais promissores do calendário nacional de corrida de rua.</p></Reveal>
          </div>
        </section>

        <section aria-labelledby="cta-title" className="relative overflow-hidden bg-electric py-24 sm:py-28">
          <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(255,255,255,.14),transparent_32%,rgba(10,15,26,.28)_100%)]" />
          <div className="absolute inset-y-0 left-0 w-full bg-[url('/images/background-04.png')] bg-cover bg-center opacity-10" />
          <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <Reveal><p className="font-display text-sm uppercase tracking-[0.34em] text-white/74">Chamada oficial</p></Reveal>
            <Reveal delay={0.05}><h2 id="cta-title" className="mt-5 font-display text-4xl font-bold uppercase tracking-hero text-white sm:text-5xl lg:text-6xl">Faça parte da segunda edição de um evento que já nasceu grande</h2></Reveal>
            <Reveal delay={0.1}><p className="mt-6 text-lg leading-8 text-white/80">Prepare-se para viver Recife de um jeito único, enfrentar novos desafios e correr em uma prova que conecta performance, cultura e história.</p></Reveal>
            <Reveal delay={0.15}><a href={registrationUrl} target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center rounded-full bg-gold px-7 py-4 font-display text-sm font-bold uppercase tracking-[0.16em] text-midnight transition duration-300 hover:-translate-y-1 hover:bg-[#ffd05d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-electric">Inscreva-se agora</a></Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#070d18]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_auto_auto] lg:px-8">
          <div>
            <p className="font-display text-2xl font-bold uppercase tracking-[0.06em] text-white">Meia Maratona do Marco Zero</p>
            <p className="mt-4 max-w-md text-white/60">Evento esportivo oficial com identidade urbana, premium e pronto para campanhas, patrocinadores, vídeo e expansão de conteúdo institucional.</p>
          </div>
          <div>
            <p className="font-display text-sm uppercase tracking-[0.28em] text-gold">Links rápidos</p>
            <div className="mt-4 flex flex-col gap-3 text-white/72">
              <a href="#sobre" className="transition hover:text-white">Sobre o evento</a>
              <a href="#distancias" className="transition hover:text-white">Distâncias</a>
              <a href="#summit" className="transition hover:text-white">MZ Summit</a>
            </div>
          </div>
          <div>
            <p className="font-display text-sm uppercase tracking-[0.28em] text-gold">Redes e inscrição</p>
            <div className="mt-4 flex flex-col gap-3 text-white/72">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="transition hover:text-white">Instagram</a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="transition hover:text-white">YouTube</a>
              <a href={registrationUrl} target="_blank" rel="noreferrer" className="transition hover:text-white">Inscreva-se agora</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/8 px-4 py-5 text-center text-sm text-white/44 sm:px-6 lg:px-8">© 2026 Meia Maratona do Marco Zero. Todos os direitos reservados.</div>
      </footer>
    </>
  );
}
