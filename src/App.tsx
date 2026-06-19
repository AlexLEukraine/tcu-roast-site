import { useEffect, useState } from 'react'
import {
  NAV, STATS, AUDIENCES, MEMBER_LOGOS, MEMBERS_MORE, LEADERSHIP, BOARD,
  TEAM, BENEFITS, EVENTS, JOIN_STEPS, CONTACTS, PHOTOS,
} from './data'
import Logo from './Logo'

function Eyebrow({ temp, children }: { temp: string; children: React.ReactNode }) {
  return (
    <div className="eyebrow flex items-center gap-3">
      <span className="inline-flex h-2 w-2 rounded-full thermal-bg" />
      <span className="text-orange">{temp}°C</span>
      <span className="text-ink-3">/ {children}</span>
    </div>
  )
}

function Nav() {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? 'bg-paper/80 backdrop-blur border-b border-line' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 md:px-8">
        <a href="#top" className="flex items-center gap-2.5 text-ink" aria-label="ТКУ — на початок">
          <Logo className="h-8 w-auto md:h-9" />
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="text-sm font-medium text-ink-2 transition-colors hover:text-ink">
              {n.label}
            </a>
          ))}
          <a href="#vstup" className="rounded-full bg-orange px-4 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5">
            Стати учасником
          </a>
        </nav>
        <button className="lg:hidden text-ink" aria-label="Меню" onClick={() => setOpen((v) => !v)}>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-ink" />
            <span className="block h-0.5 w-6 bg-ink" />
            <span className="block h-0.5 w-6 bg-ink" />
          </div>
        </button>
      </div>
      {open && (
        <div className="border-t border-line bg-paper px-5 py-4 lg:hidden">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} className="block py-2 font-medium text-ink-2">
              {n.label}
            </a>
          ))}
          <a href="#vstup" onClick={() => setOpen(false)} className="mt-2 block rounded-full bg-orange px-4 py-2 text-center font-semibold text-white">
            Стати учасником
          </a>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="grid-bg relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="pointer-events-none absolute -left-40 -top-32 h-[30rem] w-[30rem] rounded-full opacity-[0.12] blur-3xl thermal-bg" />
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 md:grid-cols-2 md:px-8">
        <div>
          <div className="rise eyebrow flex items-center gap-3">
            <span className="inline-flex h-2 w-2 rounded-full thermal-bg" />
            <span className="text-ink-3">ГАРЯЧІ РОЗМОВИ · БЕЗ РЕЗУЛЬТАТІВ</span>
          </div>
          <h1 className="rise mt-6 font-display text-[2.5rem] font-extrabold leading-[1.04] tracking-tight sm:text-5xl md:text-6xl">
            Танці<br />
            <span className="thermal-text">коло</span><br />
            узбіччя
          </h1>
          <p className="rise rise-2 mt-6 max-w-xl text-lg text-ink-2">
            Збираємось разом, щоб гарячо обговорювати проблеми, писати петиції і молитися газу. Один голос — ефективніший! 🙏
          </p>
          <div className="rise rise-3 mt-8 flex flex-wrap items-center gap-3.5">
            <a href="#vstup" className="rounded-full bg-orange px-6 py-3 font-semibold text-white transition-transform hover:-translate-y-0.5">
              Вступи в клуб 🔥
            </a>
            <a href="#misia" className="rounded-full border border-line bg-surface px-6 py-3 font-semibold text-ink transition-colors hover:bg-surface-2">
              Дізнайся правду
            </a>
          </div>
          <div className="rise rise-3 mt-8 flex items-center gap-3 font-mono text-[0.7rem] text-ink-3">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange" />
            ЛЮДИ В ПАНІЦІ · 16 КОТЛІВ · ∞ СКАРГ · 0 РОЗВ’ЯЗАНЬ
          </div>
        </div>

        {/* hero photo: technical frame + scanline + readout */}
        <div className="rise rise-2">
          <div className="relative">
            <span className="crop crop-tl" />
            <span className="crop crop-tr" />
            <span className="crop crop-bl" />
            <span className="crop crop-br" />
            <div className="absolute left-3 top-3 z-10 flex items-center gap-1.5 rounded-md bg-graphite/80 px-2 py-1 font-mono text-[0.6rem] tracking-wider text-white backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500" style={{ background: 'var(--color-red)' }} />
              ФОРУМ_2024 · 14.11 · KYIV
            </div>
            <div className="relative overflow-hidden rounded-2xl card">
              <img src={PHOTOS.hero} alt="Форум виробників теплотехніки" className="aspect-[4/3] w-full object-cover" />
              <div className="scanline pointer-events-none absolute inset-x-0 top-0 h-px bg-amber" style={{ ['--scan-h' as string]: '480px' }} />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-1.5 thermal-bg" />
            <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-2xl border border-line bg-surface/95 px-4 py-3 card backdrop-blur">
              <div className="h-9 w-1.5 rounded-full" style={{ background: 'var(--thermal-v)' }} />
              <div className="font-mono text-xs leading-tight text-ink-3">
                <div className="text-ink"><span className="text-orange">16</span> виробництв</div>
                <div>один голос галузі</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-5 md:px-8">
      <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-line bg-surface card md:grid-cols-4">
        {STATS.map((s, i) => (
          <div key={s.unit} className={`px-6 py-7 ${i > 0 ? 'border-l border-line' : ''} ${i >= 2 ? 'border-t md:border-t-0' : ''}`}>
            <div className="font-display text-4xl font-bold thermal-text">{s.value}</div>
            <div className="mt-2 font-mono text-xs uppercase tracking-wider text-orange">{s.unit}</div>
            <div className="mt-1 text-sm text-ink-3">{s.note}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Mission() {
  return (
    <section id="misia" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
      <Eyebrow temp="24">Місія</Eyebrow>
      <div className="mt-8 grid gap-12 md:grid-cols-12">
        <h2 className="md:col-span-7 font-display text-3xl font-bold leading-tight tracking-tight md:text-5xl">
          Бути гарячою розмовою галузі, де&nbsp;
          <span className="thermal-text">кожна думка</span>&nbsp;ігнорується рівномірно.
        </h2>
        <div className="md:col-span-5 md:pt-2">
          <p className="text-lg text-ink-2">
            Ми змовилися разом, щоб спільно скаржитись на державу, постити про проблеми в соцмережах
            і молитися, що от-от розв'яжеться. Поки що — не розв'яжується, але ми намагаємось! 🔥
          </p>
          <a href="#dlya-kogo" className="mt-6 inline-block font-mono text-sm text-orange hover:underline">
            → хто це потребує
          </a>
        </div>
      </div>
    </section>
  )
}

function Audiences() {
  return (
    <section id="dlya-kogo" className="bg-surface-2 border-y border-line">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <Eyebrow temp="38">Для кого</Eyebrow>
        <h2 className="mt-8 max-w-2xl font-display text-3xl font-bold tracking-tight md:text-4xl">
          Чотири сторони, один спільний інтерес — тепло.
        </h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {AUDIENCES.map((a) => (
            <div key={a.title} className="card card-hover rounded-2xl border border-line bg-surface p-6">
              <div className="font-mono text-sm text-orange">{a.temp}°C</div>
              <div className="mt-4 h-1 w-full rounded-full thermal-bg" />
              <h3 className="mt-5 font-display text-lg font-semibold">{a.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-2">{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Members() {
  return (
    <section id="uchasnyky" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
      <Eyebrow temp="52">Учасники</Eyebrow>
      <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
        <h2 className="max-w-xl font-display text-3xl font-bold tracking-tight md:text-4xl">
          16 виробництв, що формують теплову карту країни.
        </h2>
        <a href="#vstup" className="font-mono text-sm text-orange hover:underline">→ приєднати свій завод</a>
      </div>
      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {MEMBER_LOGOS.map((m) => (
          <div key={m.alt} className="card card-hover flex h-28 items-center justify-center rounded-xl border border-line bg-surface px-6">
            <img src={m.src} alt={m.alt} className="max-h-12 max-w-[80%] object-contain opacity-80 transition-all hover:opacity-100" loading="lazy" />
          </div>
        ))}
        <div className="flex h-28 items-center justify-center rounded-xl border border-dashed border-line bg-surface-2 px-6">
          <span className="font-mono text-sm text-orange">+{MEMBERS_MORE} ще</span>
        </div>
      </div>
    </section>
  )
}

function Avatar({ src, alt, size = 'h-14 w-14' }: { src: string; alt: string; size?: string }) {
  return (
    <div className="ring-thermal shrink-0">
      <div className={`${size} overflow-hidden rounded-full bg-surface-2`}>
        <img src={src} alt={alt} className="h-full w-full scale-110 object-cover object-top" loading="lazy" />
      </div>
    </div>
  )
}

function PersonCard({ name, role, note, photo }: { name: string; role: string; note: string; photo: string }) {
  return (
    <div className="card rounded-2xl border border-line bg-surface p-6">
      <div className="flex items-center gap-4">
        <Avatar src={photo} alt={name} />
        <div>
          <div className="font-display font-semibold leading-tight">{name}</div>
          <div className="font-mono text-xs uppercase tracking-wider text-orange">{role}</div>
        </div>
      </div>
      <p className="mt-4 text-sm text-ink-2">{note}</p>
    </div>
  )
}

function Team() {
  return (
    <section id="komanda" className="bg-surface-2 border-y border-line">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <Eyebrow temp="66">Команда</Eyebrow>
        <h2 className="mt-8 font-display text-3xl font-bold tracking-tight md:text-4xl">Хто веде кластер</h2>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {LEADERSHIP.map((p) => <PersonCard key={p.name} {...p} />)}
        </div>

        <div className="mt-10">
          <div className="grid gap-4 sm:grid-cols-3">
            {BOARD.map((b) => (
              <div key={b.name} className="flex flex-col items-start gap-3.5 rounded-2xl border border-line bg-surface px-5 py-4 card">
                <Avatar src={b.photo} alt={b.name} size="h-12 w-12" />
                <div className="w-full">
                  <div className="font-display text-sm font-semibold">{b.name}</div>
                  <span className="font-mono text-[0.65rem] uppercase tracking-wider text-ink-3">правління</span>
                </div>
              </div>
            ))}
            {TEAM.map((p) => <PersonCard key={p.name} {...p} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

function Benefits() {
  return (
    <section id="rishennia" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
      <Eyebrow temp="78">Рішення</Eyebrow>
      <h2 className="mt-8 max-w-2xl font-display text-3xl font-bold tracking-tight md:text-4xl">
        Що отримує кожен учасник кластера
      </h2>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {BENEFITS.map((b) => (
          <div key={b.n} className="card card-hover rounded-2xl border border-line bg-surface p-7">
            <div className="font-mono text-sm text-orange">{b.n}</div>
            <h3 className="mt-4 font-display text-lg font-semibold">{b.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-2">{b.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Events() {
  return (
    <section id="podii" className="bg-surface-2 border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <Eyebrow temp="88">Події</Eyebrow>
        <h2 className="mt-8 font-display text-3xl font-bold tracking-tight md:text-4xl">Де ми зустрічаємось</h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {EVENTS.map((e) => (
            <a key={e.title} href="#" className="card card-hover group flex items-center gap-5 rounded-2xl border border-line bg-surface p-4">
              <img src={e.img} alt="" className="h-20 w-28 shrink-0 rounded-xl object-cover" loading="lazy" />
              <div className="min-w-0">
                <div className="font-mono text-xs text-orange">{e.date}</div>
                <div className="mt-1 font-display font-semibold leading-tight transition-colors group-hover:text-orange">{e.title}</div>
                <div className="mt-1 text-sm text-ink-3">{e.place}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Join() {
  return (
    <section id="vstup" className="grid-bg-dark relative overflow-hidden bg-graphite text-white">
      <div className="pointer-events-none absolute -right-40 top-0 h-[28rem] w-[28rem] rounded-full opacity-25 blur-3xl thermal-bg" />
      <div className="absolute inset-x-0 top-0 h-1 thermal-bg" />
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="eyebrow flex items-center gap-3">
          <span className="inline-flex h-2 w-2 rounded-full thermal-bg" />
          <span className="text-amber">95°C</span>
          <span className="text-white/50">/ Вступ</span>
        </div>
        <div className="mt-8 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight md:text-5xl">
              Вступи в наш <span className="thermal-text">гарячий клуб</span> скарг 🔥
            </h2>
            <p className="mt-6 max-w-md text-lg text-white/70">
              Всього 6 кроків до розчарування! Плюс: медитація, петиції і любові до державі.
              Ми більше не обіцяємо — просто чесно розповідаємо! 😅
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <a href={`mailto:${CONTACTS.email}`} className="rounded-full bg-orange px-6 py-3 font-semibold text-white transition-transform hover:-translate-y-0.5">
                Скарж нам! 🔥
              </a>
              <a href={`tel:${CONTACTS.phone.replace(/[^+\d]/g, '')}`} className="rounded-full border border-graphite-line px-6 py-3 font-semibold text-white transition-colors hover:bg-graphite-2">
                Позвони й поговори 📞
              </a>
            </div>
          </div>
          <div className="md:col-span-6">
            <ol className="space-y-3">
              {JOIN_STEPS.map((s, i) => (
                <li key={s} className="flex items-center gap-4 rounded-xl border border-graphite-line bg-graphite-2/60 px-5 py-4">
                  <span className="font-mono text-sm text-amber">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-display font-medium">{s}</span>
                  <span className="ml-auto h-2.5 w-2.5 rounded-full" style={{ background: `color-mix(in oklab, var(--color-cold), var(--color-amber) ${(i / (JOIN_STEPS.length - 1)) * 100}%)` }} />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  const footerSections = [
    { title: "Навігація", links: [
      { label: "Про кластер", href: "#misia" },
      { label: "Для кого", href: "#dlya-kogo" },
      { label: "Учасники", href: "#uchasnyky" },
      { label: "Команда", href: "#komanda" },
    ]},
    { title: "Ресурси", links: [
      { label: "Каталог", href: "#" },
      { label: "Новини", href: "#" },
      { label: "Документи", href: "#" },
      { label: "Білі папери", href: "#" },
    ]},
    { title: "Контакти", links: [
      { label: CONTACTS.email, href: `mailto:${CONTACTS.email}` },
      { label: CONTACTS.phone, href: `tel:${CONTACTS.phone.replace(/[^+\d]/g, "")}` },
    ]},
  ]
  return (
    <footer className="bg-graphite text-white border-t border-graphite-line">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-3">
            <Logo className="h-10 w-auto text-white" />
            <p className="mt-5 text-sm text-white/55 leading-relaxed">
              Голос теплоенергетичної індустрії України. Об’єднуємо виробників, науку й державу у єдину спільноту.
            </p>
            <div className="mt-6 flex gap-2.5">
              {CONTACTS.socials.map((s) => (
                <a key={s.label} href={s.href} className="text-white/60 transition-colors hover:text-orange" title={s.label}>
                  <span className="font-mono text-xs uppercase tracking-wider">{s.label.slice(0, 2)}</span>
                </a>
              ))}
            </div>
          </div>
          {footerSections.map((sec) => (
            <div key={sec.title} className="md:col-span-3">
              <div className="eyebrow text-white/40 mb-4">{sec.title}</div>
              <ul className="space-y-2.5">
                {sec.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm text-white/70 transition-colors hover:text-orange">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 border-t border-graphite-line pt-8">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-8">
              <div className="font-mono text-xs uppercase tracking-wider text-white/30 mb-3">Організаційна інформація</div>
              <p className="text-xs text-white/40 leading-relaxed">
                Теплоенергетичний кластер України — громадське об’єднання, ЄДРПОУ [ІД].
                Слід за статутом та чинним законодавством України. Дата заснування: 2019.
                Місцезнаходження: м. Київ.
              </p>
            </div>
            <div className="md:col-span-4">
              <div className="font-mono text-xs uppercase tracking-wider text-white/30 mb-3">Технологія</div>
              <p className="text-xs text-white/40 leading-relaxed">
                Сайт: React + Tailwind.<br />Хостинг: Cloudflare Pages.<br />Ліцензія: CC-BY.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-2 border-t border-graphite-line pt-6 font-mono text-xs text-white/30 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} TCU · tcu.org.ua</span>
          <span className="flex gap-4">
            <a href="#" className="hover:text-orange">Політика</a>
            <a href="#" className="hover:text-orange">Cookies</a>
            <a href="#" className="hover:text-orange">Карта</a>
          </span>
          <span className="flex items-center gap-2">Made with <span style={{ color: "var(--color-red)" }}>●</span> in Ukraine</span>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Mission />
        <Audiences />
        <Members />
        <Team />
        <Benefits />
        <Events />
        <Join />
      </main>
      <Footer />
    </>
  )
}
