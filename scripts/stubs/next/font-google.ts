const f = (name: string) => (opts: { variable?: string }) => ({ variable: opts.variable ?? "", className: "", style: { fontFamily: name } });
export const Inter = f("Inter");
export const Newsreader = f("Newsreader");
export const JetBrains_Mono = f("JetBrains Mono");
