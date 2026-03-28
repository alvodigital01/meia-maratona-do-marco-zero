"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function SiteEffects() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((element) => {
        const depth = Number(element.dataset.depth ?? 24);

        gsap.fromTo(
          element,
          { y: 0 },
          {
            y: depth,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          }
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-highlight]").forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0.45, scale: 0.96 },
          {
            opacity: 1,
            scale: 1,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 75%"
            }
          }
        );
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return <div ref={rootRef} className="contents" />;
}
