"use client";
import { useState } from "react";
import { Play } from "./Icons";
import { track } from "./Analytics";

const ID = process.env.NEXT_PUBLIC_DEMO_VIDEO_ID;

/** Click-to-play YouTube embed: no third-party requests until the visitor asks for the video. */
export function DemoVideo() {
  const [play, setPlay] = useState(false);
  if (!ID) {
    return (
      <div className="video">
        <div className="center" style={{ padding: 24 }}>
          <div className="video__play" aria-hidden><i><Play /></i> Product demo</div>
          <p className="small dim mt-2">Two-minute walkthrough — coming to this page shortly. <a className="accent" href="/contact?topic=demo">Request a live demo</a>.</p>
        </div>
      </div>
    );
  }
  return (
    <div className="video">
      {play ? (
        <iframe src={`https://www.youtube-nocookie.com/embed/${ID}?autoplay=1&rel=0`} title="ResearcherNet product demo" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
      ) : (
        <button className="video__play" onClick={() => { setPlay(true); track("demo_play", { video_id: ID }); }} aria-label="Play product demo">
          <i><Play /></i> Watch the two-minute demo
        </button>
      )}
    </div>
  );
}
