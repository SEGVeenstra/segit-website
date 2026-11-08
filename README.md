# segit-website

Website van SEGIT (https://www.segit.nl), gebouwd met [Astro](https://astro.build) en gehost op GitHub Pages.

## Content aanpassen

Alle teksten staan als Markdown in `src/content/`:

| Wat | Waar |
| --- | --- |
| App-pagina's | `src/content/apps/*.md` (bovenaan de metadata: titel, korte tekst, afbeelding, App Store-link) |
| Privacy- en voorwaardenpagina's | `src/content/legal/*.md` |
| Homepage-teksten | `src/pages/index.astro` |
| Contactgegevens, KvK/BTW, social links, Web3Forms-sleutel | `src/config.ts` |

**Nieuwe app toevoegen:** kopieer een bestaand `.md`-bestand in `src/content/apps/`, pas het aan, zet de afbeelding in `src/assets/apps/`. De pagina en de kaart op de homepage verschijnen vanzelf.

Wijziging committen en pushen naar `main` → de site wordt automatisch opnieuw gepubliceerd.

## Lokaal draaien

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # bouwt naar dist/
```

## Contactformulier (Web3Forms)

1. Maak een gratis toegangssleutel op https://web3forms.com voor `contact@segit.nl`.
2. Zet die in `src/config.ts` bij `web3formsKey`. (De sleutel is bedoeld om publiek te zijn.)

## Hosting op GitHub Pages

1. Repository → Settings → Pages → Source: **GitHub Actions**.
2. Custom domain: `www.segit.nl` (het bestand `public/CNAME` doet dit ook).
3. DNS bij Namecheap: `CNAME` van `www` naar `<gebruikersnaam>.github.io`, en voor de kale domeinnaam `segit.nl` vier `A`-records naar de GitHub Pages-IP's (185.199.108.153, .109.153, .110.153, .111.153).
4. Zet bij Settings → Pages **Enforce HTTPS** aan zodra het certificaat klaar is.
