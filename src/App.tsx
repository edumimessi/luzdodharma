import { useEffect, useMemo, useState } from "react";
import {
  ALL_DAYS,
  MONTH_DAYS,
  MONTH_NAMES,
  MONTHS,
} from "./devotional-data";
import { TEACHINGS } from "./teachings-data";

const STORAGE_KEY = "caminho-e-sentido-lidos";
const THEME_KEY = "caminho-e-sentido-tema";

function todayIndex() {
  const now = new Date();
  const found = ALL_DAYS.findIndex(
    (item) => item.month === now.getMonth() && item.day === now.getDate(),
  );
  return found < 0 ? 0 : found;
}

function FlowerMark() {
  return (
    <span className="flower-mark" aria-hidden="true">
      <i />
      <i />
      <i />
      <i />
      <b />
    </span>
  );
}

function Teachings() {
  const [open, setOpen] = useState(TEACHINGS[0].id);

  return (
    <section className="teachings" id="ensinamentos">
      <div className="teachings-heading">
        <p className="kicker dark-kicker">Fundamentos</p>
        <h2>Os ensinamentos do Dharma</h2>
        <p className="teachings-lead">
          O que o Buda ensinou, como a tradição o transmitiu e em que as
          grandes escolas se distinguem. Uma introdução, não um tratado.
        </p>
      </div>

      <div className="teachings-list">
        {TEACHINGS.map((teaching) => {
          const isOpen = open === teaching.id;
          return (
            <article
              key={teaching.id}
              className={`teaching-card ${isOpen ? "open" : ""}`}
            >
              <button
                className="teaching-summary"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? "" : teaching.id)}
              >
                <span className="teaching-titles">
                  <span className="teaching-pali">{teaching.pali}</span>
                  <strong>{teaching.name}</strong>
                  <span className="teaching-subtitle">{teaching.subtitle}</span>
                </span>
                <span className="teaching-chevron" aria-hidden="true">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {isOpen && (
                <div className="teaching-body">
                  <p className="teaching-lede">{teaching.summary}</p>

                  {teaching.blocks.map((block) => (
                    <div className="teaching-block" key={block.heading}>
                      <h3>{block.heading}</h3>
                      {block.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                      {block.items && (
                        <dl className="teaching-terms">
                          {block.items.map((item) => (
                            <div key={item.term}>
                              <dt>{item.term}</dt>
                              <dd>{item.text}</dd>
                            </div>
                          ))}
                        </dl>
                      )}
                    </div>
                  ))}

                  {teaching.note && (
                    <p className="teaching-note">
                      <strong>Nota editorial:</strong> {teaching.note}
                    </p>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </div>

      <p className="teachings-foot">
        Introdução de caráter educativo. As escolas budistas divergem em pontos
        relevantes, e nenhuma página substitui o estudo com professores
        qualificados nem a prática em comunidade.
      </p>
    </section>
  );
}

export default function Home() {
  const [selected, setSelected] = useState(0);
  const [read, setRead] = useState<Set<number>>(new Set());
  const [dark, setDark] = useState(false);
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [view, setView] = useState<"devocional" | "ensinamentos">("devocional");

  const entry = ALL_DAYS[selected];
  const monthStart = useMemo(
    () => ALL_DAYS.findIndex((day) => day.month === entry.month),
    [entry.month],
  );

  useEffect(() => {
    setMounted(true);
    setSelected(todayIndex());
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      setRead(new Set(Array.isArray(stored) ? stored : []));
      const storedTheme = localStorage.getItem(THEME_KEY);
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDark(storedTheme ? storedTheme === "dark" : systemDark);
    } catch {
      setRead(new Set());
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem(THEME_KEY, dark ? "dark" : "light");
  }, [dark, mounted]);

  function choose(index: number, scroll = true) {
    const safe = Math.max(0, Math.min(ALL_DAYS.length - 1, index));
    setSelected(safe);
    if (scroll) {
      requestAnimationFrame(() =>
        document
          .getElementById("leitura")
          ?.scrollIntoView({ behavior: "smooth", block: "start" }),
      );
    }
  }

  function chooseMonth(month: number) {
    const index = ALL_DAYS.findIndex((day) => day.month === month);
    choose(index, false);
    requestAnimationFrame(() =>
      document
        .getElementById("calendario")
        ?.scrollIntoView({ behavior: "smooth", block: "start" }),
    );
  }

  function toggleRead() {
    setRead((current) => {
      const next = new Set(current);
      if (next.has(selected)) next.delete(selected);
      else next.add(selected);
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));
      return next;
    });
  }

  async function share() {
    const title = `${entry.day} de ${entry.monthName} — ${entry.lens.title}`;
    const text = `${title}\n\n${entry.theme.anchor}\n\nLuz do Dharma — Dr. Eduardo D'Angelo Mimessi`;
    try {
      if (navigator.share) {
        await navigator.share({ title, text, url: window.location.href });
      } else {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2200);
      }
    } catch {
      // O cancelamento do compartilhamento não exige mensagem de erro.
    }
  }

  const previous = ALL_DAYS[selected - 1];
  const next = ALL_DAYS[selected + 1];
  const progress = Math.round((read.size / ALL_DAYS.length) * 100);

  return (
    <>
      <a className="skip-link" href="#leitura">
        Ir para a meditação
      </a>

      <header className="topbar">
        <div className="topbar-inner">
          <button className="brand" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <FlowerMark />
            <span>
              <strong>Luz do Dharma</strong>
              <small>Devocional budista diário</small>
            </span>
          </button>
          <div className="top-actions">
            <button
              className="text-button"
              onClick={() => {
                setView("devocional");
                choose(todayIndex());
              }}
            >
              Ler hoje
            </button>
            <button
              className="round-button"
              onClick={() => setDark((value) => !value)}
              aria-label="Alternar tema claro e escuro"
              title="Alternar tema"
            >
              ◐
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="hero-content">
            <p className="kicker">366 encontros com a sabedoria budista</p>
            <h1>
              Luz do <em>Dharma</em>
            </h1>
            <p className="hero-copy">
              Uma jornada diária de presença, sabedoria e compaixão para
              compreender a mente, acolher a vida e caminhar com maior liberdade.
            </p>
            <div className="hero-credits">
              <span>Dr. Eduardo D&apos;Angelo Mimessi</span>
              <i />
              <span>Instituto Logos Editorial</span>
            </div>
            <button
              className="hero-button"
              onClick={() => {
                setView("devocional");
                choose(todayIndex());
              }}
            >
              Iniciar a meditação de hoje <span>→</span>
            </button>
          </div>
          <div className="hero-mantra" aria-hidden="true">
            <span>presença</span>
            <span>compaixão</span>
            <span>liberdade</span>
          </div>
        </section>

        <div className="view-switch" role="group" aria-label="Seções do site">
          <button
            aria-pressed={view === "devocional"}
            onClick={() => setView("devocional")}
          >
            Devocional diário
          </button>
          <button
            aria-pressed={view === "ensinamentos"}
            onClick={() => {
              setView("ensinamentos");
              requestAnimationFrame(() =>
                document
                  .getElementById("ensinamentos")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" }),
              );
            }}
          >
            Ensinamentos
          </button>
        </div>

        {view === "ensinamentos" && <Teachings />}

        {view === "devocional" && (
        <>
        <nav className="month-nav" aria-label="Meses do devocional">
          <div className="month-nav-inner">
            {MONTH_NAMES.map((month, index) => (
              <button
                key={month}
                aria-current={entry.month === index ? "true" : undefined}
                onClick={() => chooseMonth(index)}
              >
                {month.slice(0, 3)}
              </button>
            ))}
          </div>
        </nav>

        <section className="calendar-section" id="calendario">
          <div className="calendar-heading">
            <div>
              <p className="kicker dark-kicker">
                {entry.theme.pali} · {entry.theme.name}
              </p>
              <h2>{entry.theme.subtitle}</h2>
            </div>
            <div className="progress-card" aria-label={`${progress}% do devocional concluído`}>
              <span>{read.size} de 366 leituras</span>
              <div>
                <i style={{ width: `${progress}%` }} />
              </div>
            </div>
          </div>

          <div className="day-grid" aria-label={`Dias de ${entry.monthName}`}>
            {Array.from({ length: MONTH_DAYS[entry.month] }, (_, offset) => {
              const index = monthStart + offset;
              const isSelected = index === selected;
              return (
                <button
                  key={index}
                  className={`${isSelected ? "selected" : ""} ${read.has(index) ? "read" : ""}`}
                  aria-current={isSelected ? "date" : undefined}
                  aria-label={`${offset + 1} de ${entry.monthName}${read.has(index) ? ", lido" : ""}`}
                  onClick={() => choose(index)}
                >
                  <span>{offset + 1}</span>
                  {read.has(index) && <i aria-hidden="true" />}
                </button>
              );
            })}
          </div>
        </section>

        <article className="reader" id="leitura">
          <aside className="reader-aside">
            <span className="day-number">{String(entry.day).padStart(2, "0")}</span>
            <i className="vertical-rule" />
            <span className="aside-label">
              {entry.monthName}
              <br />
              {entry.theme.pali}
            </span>
          </aside>

          <div className="reader-content">
            <div className="reader-meta">
              <span>Meditação {selected + 1} de 366</span>
              <span>{entry.theme.name}</span>
            </div>
            <h2>{entry.lens.title}</h2>

            <section className="inspiration">
              <span>Inspiração</span>
              <blockquote>“{entry.theme.anchor}”</blockquote>
            </section>

            <section className="reflection">
              <p className="section-label">Reflexão</p>
              <p>{entry.theme.reflection}</p>
              <p>{entry.lens.focus}</p>
            </section>

            <section className="practice-card">
              <div className="card-icon" aria-hidden="true">
                路
              </div>
              <div>
                <span>Para viver hoje</span>
                <p>{entry.theme.practice}</p>
                <p>{entry.lens.practice}</p>
              </div>
            </section>

            <section className="guided-card">
              <div className="guided-heading">
                <div>
                  <span>Prática contemplativa</span>
                  <h3>Três movimentos de presença</h3>
                </div>
                <small>3–5 minutos</small>
              </div>
              <ol>
                {entry.meditation.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </section>

            <section className="question-card">
              <span>Pergunta para o diário</span>
              <p>{entry.lens.question}</p>
            </section>

            <section className="aspiration">
              <span>Aspiração do dia</span>
              <p>{entry.theme.aspiration}</p>
            </section>

            <div className="reader-actions">
              <button className={read.has(selected) ? "completed" : ""} onClick={toggleRead}>
                {read.has(selected) ? "✓ Meditação concluída" : "Marcar como concluída"}
              </button>
              <button onClick={share}>{copied ? "Texto copiado" : "Compartilhar reflexão"}</button>
            </div>
          </div>
        </article>

        <div className="pager">
          <button disabled={!previous} onClick={() => choose(selected - 1)}>
            <span>← Dia anterior</span>
            <strong>{previous?.lens.title || "Início do caminho"}</strong>
          </button>
          <button disabled={!next} onClick={() => choose(selected + 1)}>
            <span>Próximo dia →</span>
            <strong>{next?.lens.title || "Caminho percorrido"}</strong>
          </button>
        </div>
        </>
        )}

        <section className="book-section">
          <div className="book-mark">
            <FlowerMark />
            <span>LOGOS</span>
          </div>
          <div>
            <p className="kicker dark-kicker">A obra de origem</p>
            <h2>Sabedoria budista para a vida cotidiana</h2>
            <h3>Um percurso de presença, compaixão e despertar</h3>
            <p>
              Este devocional foi concebido a partir do volume dedicado à
              tradição budista escrito pelo Dr. Eduardo D&apos;Angelo Mimessi.
              Seus ensinamentos foram reorganizados em um percurso anual de
              atenção plena, impermanência, compaixão, ética, equanimidade e
              libertação interior.
            </p>
            <p className="book-note">
              O conteúdo respeita a diversidade das escolas budistas e possui
              finalidade espiritual, reflexiva e educativa. As práticas não
              substituem avaliação ou tratamento em saúde.
            </p>
          </div>
        </section>

        <section className="principles">
          <div className="principles-heading">
            <p className="kicker">Um caminho para cada dia</p>
            <h2>Três movimentos que sustentam a jornada</h2>
          </div>
          <div className="principles-grid">
            <article>
              <span>01</span>
              <h3>Observar</h3>
              <p>Reconhecer a experiência presente sem julgamento automático.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Acolher</h3>
              <p>Responder ao sofrimento com lucidez, compaixão e respeito.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Escolher</h3>
              <p>Transformar consciência em uma atitude concreta e significativa.</p>
            </article>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <strong>Luz do Dharma</strong>
          <span>Devocional budista diário</span>
        </div>
        <p>
          Dr. Eduardo D&apos;Angelo Mimessi · 366 meditações
          <br />
          Inspirado no volume do autor dedicado à tradição budista
        </p>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Voltar ao início ↑
        </button>
      </footer>
    </>
  );
}
