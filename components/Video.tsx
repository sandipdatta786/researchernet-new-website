"use client";
import { useState } from "react";
import Image from "next/image";
import { facts } from "@/content/facts";
import { Play } from "./Icons";
import { track } from "./Analytics";

/** Legacy env var still works; the facts file wins when both are set. */
const ENV_ID = process.env.NEXT_PUBLIC_DEMO_VIDEO_ID || "";
const URL = facts.walkthroughUrl || (ENV_ID ? `https://www.youtube.com/watch?v=${ENV_ID}` : "");

/** Extracts a YouTube id from watch, youtu.be, embed or shorts forms. Returns null for anything else. */
function youTubeId(url: string): string | null {
  const m = url.match(/(?:youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{6,})/);
  return m ? m[1] : null;
}

const DemoLink = () => <a className="accent" href="/contact?topic=demo">Request a live demo</a>;

export function DemoVideo() {
  const [play, setPlay] = useState(false);
  const id = URL ? youTubeId(URL) : null;
  const isMp4 = !id && /\.mp4(\?|$)/i.test(URL);

  // No URL configured yet — keep the request-a-demo route open, nothing else.
  if (!URL) {
    return (
      <div>
        <div className="video">
          <div className="center" style={{ padding: 24 }}>
            <div className="video__play" aria-hidden><i><Play /></i> Product demo</div>
          </div>
        </div>
        <p className="small dim mt-2"><DemoLink />.</p>
      </div>
    );
  }

  if (isMp4) {
    return (
      <div>
        {/* preload="none" and no autoplay: nothing is fetched until the visitor presses play. */}
        <video className="video video--el" controls preload="none" poster={facts.walkthroughPoster} playsInline
          onPlay={() => track("demo_play", { video_id: URL })}>
          <source src={URL} type="video/mp4" />
        </video>
        <p className="small dim mt-2"><DemoLink />.</p>
      </div>
    );
  }

  // YouTube lite embed: a local poster, and no third-party request until the click.
  return (
    <div>
      <div className="video">
        {play ? (
          <iframe src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`} title="ResearcherNet product walkthrough"
            allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
        ) : (
          <button className="video__lite" onClick={() => { setPlay(true); track("demo_play", { video_id: id ?? "" }); }} aria-label="Play the product walkthrough">
            <Image src={facts.walkthroughPoster} alt="" fill sizes="(max-width: 900px) 100vw, 560px" style={{ objectFit: "cover" }} />
            <span className="video__play"><i><Play /></i> Watch the walkthrough</span>
          </button>
        )}
      </div>
      <p className="small dim mt-2"><DemoLink />.</p>
    </div>
  );
}
