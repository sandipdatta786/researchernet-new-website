/**
 * Illustrative product surfaces rendered in CSS/SVG — no screenshots required, crisp at any size,
 * and honest: every element shown corresponds to a live capability.
 */

function Bar({ label }: { label: string }) {
  return (
    <div className="mock__bar"><i /><i /><i /><span>{label}</span></div>
  );
}

export function SearchMock() {
  return (
    <div className="mock float" aria-hidden>
      <Bar label="app.researchernet.com · discover" />
      <div className="mock__body">
        <div className="mock__search">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
          <span>graph neural networks for low-resource Bengali speech</span><i className="cursor" />
        </div>
        <div className="mock__row"><div><b>Cross-lingual GNN priors for low-resource ASR</b><small>Interspeech · 2025 · 3 authors · cited by 41</small></div><span className="mock__tag mock__tag--hot">gap: Bengali</span></div>
        <div className="mock__row"><div><b>Phonetic graph embeddings for Indic languages</b><small>ICASSP · 2024 · IIT Kharagpur</small></div><span className="mock__tag">summary ready</span></div>
        <div className="mock__row"><div><b>Self-supervised speech models under data scarcity</b><small>TASLP · 2024 · ISI Kolkata</small></div><span className="mock__tag">chat with paper</span></div>
        <div className="mock__split">
          <div className="mock__panel">
            <h5>Suggested collaborators</h5>
            <div className="mock__people"><span className="avatar">SC</span><div><b style={{ fontSize: 12 }}>Prof. S. Chatterjee</b><br /><small>ETCE, Jadavpur University · 0.91</small></div></div>
            <div className="mock__people" style={{ marginTop: 8 }}><span className="avatar avatar--muted">RM</span><div><b style={{ fontSize: 12 }}>Dr. R. Mukherjee</b><br /><small>CSE, IIT Kharagpur · 0.87</small></div></div>
          </div>
          <div className="mock__panel">
            <h5>Research gap analysis</h5>
            <small>Bengali low-resource ASR</small><div className="bar" style={{ margin: "6px 0 10px" }}><i style={{ width: "22%" }} /></div>
            <small>Graph priors in ASR</small><div className="bar" style={{ margin: "6px 0 10px" }}><i style={{ width: "64%" }} /></div>
            <small>Indic self-supervision</small><div className="bar" style={{ margin: "6px 0 0" }}><i style={{ width: "48%" }} /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MatchMock() {
  return (
    <div className="mock" aria-hidden>
      <Bar label="app.researchernet.com · collaborators" />
      <div className="mock__body">
        <div className="mock__split" style={{ gridTemplateColumns: "1.2fr 1fr" }}>
          <div className="mock__panel" style={{ padding: 0, overflow: "hidden" }}>
            <KnowledgeGraph />
          </div>
          <div className="stack" style={{ gap: 8 }}>
            {[
              ["SC", "Prof. S. Chatterjee", "ETCE, JU", "0.91"],
              ["RM", "Dr. R. Mukherjee", "CSE, IIT KGP", "0.87"],
              ["AD", "Dr. A. Das", "Stats, ISI Kolkata", "0.82"],
              ["TM", "T. Moyo", "HIT, Harare", "0.79"],
            ].map(([i, n, a, s]) => (
              <div key={n} className="mock__row" style={{ padding: "8px 10px" }}>
                <div className="mock__people"><span className={`avatar ${i === "SC" ? "" : "avatar--muted"}`}>{i}</span><div><b>{n}</b><small>{a}</small></div></div>
                <span className="mock__tag mock__tag--hot">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function KnowledgeGraph() {
  const nodes = [
    [90, 70, true], [40, 40, false], [150, 30, false], [30, 110, false], [140, 120, true], [190, 80, false], [100, 150, false], [200, 150, false], [60, 160, false],
  ] as const;
  const edges = [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [4, 6], [4, 7], [3, 8], [2, 5], [6, 8]] as const;
  return (
    <svg className="graph" viewBox="0 0 230 190" role="img" aria-label="Research knowledge graph">
      {edges.map(([a, b], i) => (
        <line key={i} className={nodes[a][2] && nodes[b][2] ? "e e--hot" : "e"} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} />
      ))}
      {nodes.map(([x, y, hot], i) => (
        <circle key={i} className={hot ? "n n--hot" : "n"} cx={x} cy={y} r={hot ? 7 : 4.5} />
      ))}
      <text x="98" y="66">you</text>
      <text x="148" y="116">match</text>
      <text x="8" y="182">publications · expertise · projects</text>
    </svg>
  );
}

export function LatexMock() {
  return (
    <div className="mock" aria-hidden>
      <Bar label="app.researchernet.com · projects / low-resource-asr / main.tex" />
      <div className="mock__body">
        <div className="mock__split">
          <div className="mock__panel">
            <h5>main.tex · 3 editing</h5>
            <div className="mock__code">{`\\`}<span className="k">section</span>{`{Method}\n`}<span className="c">{`% Priya is editing here`}</span>{`\nWe propose a graph prior over\nphonetic units `}<span className="s">{`\\cite{chatterjee2025}`}</span>{`\nthat regularises the acoustic\nencoder under data scarcity.\n\n`}{`\\`}<span className="k">begin</span>{`{equation}\n  \\mathcal{L} = \\mathcal{L}_{ctc} + \\lambda\\,\\mathcal{L}_{g}\n`}{`\\`}<span className="k">end</span>{`{equation}`}</div>
          </div>
          <div className="stack" style={{ gap: 10 }}>
            <div className="mock__panel">
              <h5>Collaborators</h5>
              <div className="mock__people"><span className="avatar">PS</span><span className="avatar avatar--muted">RM</span><span className="avatar avatar--muted">SC</span><small style={{ marginLeft: 6 }}>live · v14</small></div>
            </div>
            <div className="mock__panel">
              <h5>Version history</h5>
              <small>v14 · 2 min ago · Priya S.</small><br /><small>v13 · 1 h ago · R. Mukherjee</small><br /><small>v12 · yesterday · export .docx</small>
            </div>
            <div className="mock__panel">
              <h5>Publication navigator</h5>
              <small>Interspeech 2027 · deadline Mar 2027</small><div className="bar" style={{ margin: "6px 0 8px" }}><i style={{ width: "88%" }} /></div>
              <small>IEEE TASLP · rolling</small><div className="bar" style={{ marginTop: 6 }}><i style={{ width: "74%" }} /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FundingMock() {
  return (
    <div className="mock" aria-hidden>
      <Bar label="app.researchernet.com · funding & impact" />
      <div className="mock__body">
        <div className="mock__row"><div><b>ANRF · Prime Minister Early Career Research Grant</b><small>matched to profile · deadline in 41 days</small></div><span className="mock__tag mock__tag--hot">92% match</span></div>
        <div className="mock__row"><div><b>DBT · Bio-CARe (low-resource language health data)</b><small>matched to project · deadline in 63 days</small></div><span className="mock__tag">78% match</span></div>
        <div className="mock__split">
          <div className="mock__panel">
            <h5>Commercialisation readiness</h5>
            <small>Prototype maturity</small><div className="bar" style={{ margin: "6px 0 10px" }}><i style={{ width: "70%" }} /></div>
            <small>IP position</small><div className="bar" style={{ margin: "6px 0 10px" }}><i style={{ width: "55%" }} /></div>
            <small>Industry interest · 3 enquiries</small><div className="bar" style={{ marginTop: 6 }}><i style={{ width: "40%" }} /></div>
          </div>
          <div className="mock__panel">
            <h5>SDG impact mapping</h5>
            <div className="badge-row"><span className="mock__tag mock__tag--hot">SDG 4</span><span className="mock__tag mock__tag--hot">SDG 9</span><span className="mock__tag">SDG 10</span><span className="mock__tag">SDG 17</span></div>
            <small style={{ display: "block", marginTop: 10 }}>Quality education · Industry, innovation & infrastructure</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TechMock() {
  const layers = [
    ["Ingestion", "papers · theses · reports → tokens"],
    ["Semantic synthesiser", "LLM → abstract · findings · tags · embeddings (≤5 s/doc)"],
    ["Knowledge graph", "publications · researchers · domains · projects · impact"],
    ["Adaptive pruning + re-embedding", "temporal decay · feedback · hybrid LLM–GNN"],
    ["Orchestration engine", "collaborators · milestones · risk · SDG alignment"],
    ["Multi-LLM router", "GPT · Claude · Llama-class · substitutable"],
  ];
  return (
    <div className="mock" aria-hidden>
      <Bar label="architecture · IN 202531120470" />
      <div className="mock__body" style={{ gap: 8 }}>
        {layers.map(([t, s], i) => (
          <div key={t} className="mock__row" style={{ gridTemplateColumns: "auto 1fr auto" }}>
            <span className="mock__tag mock__tag--hot">L{i + 1}</span>
            <div><b>{t}</b><small>{s}</small></div>
            <span className="mock__tag">{i === 0 ? "in" : i === layers.length - 1 ? "out" : "↓"}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SecurityMock() {
  return (
    <div className="mock" aria-hidden>
      <Bar label="app.researchernet.com · lab space settings" />
      <div className="mock__body">
        {[
          ["Encryption at rest & in transit", "AES-256 · TLS 1.3", "on"],
          ["Role-based access", "owner · editor · reviewer · viewer", "on"],
          ["End-to-end encryption", "optional per workspace", "optional"],
          ["Model training on this workspace", "public models", "never"],
          ["Deployment", "cloud · on-premise", "choice"],
        ].map(([t, s, v]) => (
          <div key={t} className="mock__row"><div><b>{t}</b><small>{s}</small></div><span className={`mock__tag ${v === "on" || v === "never" ? "mock__tag--hot" : ""}`}>{v}</span></div>
        ))}
      </div>
    </div>
  );
}

export function RoadmapMock() {
  return (
    <div className="mock" aria-hidden>
      <Bar label="roadmap · honest by design" />
      <div className="mock__body">
        {[
          ["Collaborator matching", "live"], ["Chat with Paper", "live"], ["Collaborative LaTeX", "live"], ["Grant alerts", "live"],
          ["Research Ledger", "in development"], ["Plagiarism & AI-content detection", "in development"], ["Hypothesis generator", "in development"],
        ].map(([t, s]) => (
          <div key={t} className="mock__row"><b>{t}</b><span className={`mock__tag ${s === "live" ? "mock__tag--hot" : ""}`}>{s}</span></div>
        ))}
      </div>
    </div>
  );
}

export function ConferenceMock() {
  const rows: [string, string, string][] = [
    ["Conference site", "template · branding · custom domain", "in development"],
    ["Call for papers", "tracks · abstracts · deadlines", "in development"],
    ["Double-blind review", "anonymised at the storage layer", "in development"],
    ["Reviewer matching", "expertise ↔ paper, conflict-aware", "in development"],
    ["Registration", "tickets · promo codes · invoices", "in development"],
    ["Event day", "check-in · badges · meals · volunteers", "in development"],
  ];
  return (
    <div className="mock" aria-hidden>
      <Bar label="conference manager · in development" />
      <div className="mock__body">
        {rows.map(([t, s2, tag]) => (
          <div key={t} className="mock__row"><div><b>{t}</b><small>{s2}</small></div><span className="mock__tag">{tag}</span></div>
        ))}
      </div>
    </div>
  );
}

export const mocks = { search: SearchMock, match: MatchMock, latex: LatexMock, funding: FundingMock, tech: TechMock, security: SecurityMock, roadmap: RoadmapMock, conference: ConferenceMock } as const;
