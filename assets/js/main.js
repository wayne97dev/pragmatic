/* TEST landing — interactions
   ------------------------------------------------------------------
   Fill these in once the token is live. Empty string = "soon" (no nav).
*/
const LINKS = {
  buy:      "", // e.g. https://app.uniswap.org/swap?chain=base&outputCurrency=0x...
  chart:    "", // e.g. https://dexscreener.com/base/0x...
  contract: "", // e.g. https://basescan.org/address/0x...
  x:        "", // e.g. https://x.com/yourhandle
  docs:     "https://github.com/wayne97dev/pragmatic",
};

// wire up every [data-link] anchor
document.querySelectorAll("[data-link]").forEach((el) => {
  const url = LINKS[el.dataset.link];
  if (url) {
    el.setAttribute("href", url);
    if (/^https?:/.test(url)) { el.target = "_blank"; el.rel = "noopener"; }
  } else {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      el.classList.add("soon");
      const old = el.dataset.old || el.textContent;
      el.dataset.old = old;
      el.textContent = "soon ✦";
      setTimeout(() => { el.textContent = el.dataset.old; el.classList.remove("soon"); }, 1100);
    });
  }
});

// reveal on scroll
const io = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
);
document.querySelectorAll(".reveal").forEach((el, i) => {
  el.style.transitionDelay = `${Math.min(i % 3, 3) * 80}ms`;
  io.observe(el);
});
