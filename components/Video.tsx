"use client";
import { useState } from "react";
import Image from "next/image";
import { Play } from "./Icons";
import { track } from "./Analytics";

/** ResearcherNet Platform Demo. An env var still overrides it if set. */
const ID = process.env.NEXT_PUBLIC_DEMO_VIDEO_ID || "2N99vK-nv38";

/** Click-to-play YouTube embed: no third-party requests until the visitor asks for the video. */
export function DemoVideo() {
  const [play, setPlay] = useState(false);
  return (
    <div>
      <div className="video">
        {play ? (
          <iframe src={`https://www.youtube-nocookie.com/embed/${ID}?autoplay=1&rel=0`} title="ResearcherNet platform demo" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
        ) : (
          <button className="video__lite" onClick={() => { setPlay(true); track("demo_play", { video_id: ID }); }} aria-label="Play the ResearcherNet platform demo">
            <Image src={`https://i.ytimg.com/vi/${ID}/maxresdefault.jpg`} alt="" fill sizes="(max-width: 900px) 100vw, 560px" style={{ objectFit: "cover" }} />
            <span className="video__play"><i><Play /></i> Watch the platform demo</span>
          </button>
        )}
      </div>
      <p className="small dim mt-2"><a className="accent" href="/contact?topic=demo">Request a live demo</a>.</p>
    </div>
  );
}
