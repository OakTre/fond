import gsap from "gsap";

export default function ticker() {
  const elements = Array.from(document.querySelectorAll(".js-ticker"));

  elements.forEach((element) => {
    const mainTrack = element.querySelector(".js-ticker-track");
    const innerTrack = element.querySelector(".js-ticker-inner-track");
    if (!innerTrack || !mainTrack) return;
    const items = Array.from(innerTrack.children);
    const REPEAT_COUNT = 4;

    for (let i = 0; i < REPEAT_COUNT; i++) {
      items.forEach((item) => {
        innerTrack.appendChild(item.cloneNode(true));
      });
    }

    mainTrack.appendChild(innerTrack.cloneNode(true));
    mainTrack.appendChild(innerTrack.cloneNode(true));

    const innerTracks = Array.from(
      document.querySelectorAll(".js-ticker-inner-track")
    );

    function setTickerAnimation(item) {
      gsap.to(item, {
        ease: "none",
        xPercent: -100,
        duration: 100,
        repeat: -1,
      });
    }

    innerTracks.forEach((innerTrack) => {
      setTickerAnimation(innerTrack);
    });
  });
}
