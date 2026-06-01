# TEST — landing page

Marketing site for **TEST**, a loyalty-weighted, self-deepening Uniswap v4 liquidity engine on Base.
*Holding is providing liquidity.*

Static, dependency-free (HTML + CSS + vanilla JS). No build step.

## Local preview

```bash
python3 -m http.server 8080   # then open http://localhost:8080
```

## Structure

```
index.html            # the page
assets/css/style.css  # theme + animations (refracted-light / spectrum)
assets/js/main.js     # scroll reveal + the LINKS map
favicon.svg
```

## Going live

1. **Fill in the links** — edit the `LINKS` object at the top of `assets/js/main.js`
   (`buy`, `chart`, `contract`, `x`). Empty = shows "soon".
2. Drop the real **contract address** into the hero (`index.html`, the `.contract` block).
3. **Host it** — GitHub Pages: repo *Settings → Pages → Deploy from branch → `main` / root*.
   Lands at `https://wayne97dev.github.io/pragmatic/`.

## Note

Token name/ticker "TEST" is a placeholder — find-and-replace once the real name is chosen.
Contracts live in the separate `ethtechprism` repo. Nothing here is financial advice.
