# Security notes

## Why this site is inherently hard to attack

This is a **fully static site**: no server code, no database, no login, no
forms, no cookies, no user data collected or stored. The attack surface is
close to the minimum possible for a website:

- **Nothing to steal.** The site stores no data. Every byte it serves is
  already public by design (your name, email, LinkedIn, project text).
- **No injection points.** No forms or query handling → no SQL injection,
  no stored XSS, no CSRF.
- **No third-party code.** Zero external scripts, fonts, trackers, or CDNs.
  A supply-chain compromise of some third party cannot affect this site.
- **No secrets.** No API keys, tokens, or credentials anywhere in the code.

## Hardening applied

1. **Content-Security-Policy** (in every page's `<head>` AND as an HTTP
   header via `vercel.json` / `_headers`): `default-src 'none'` — the
   browser refuses to load *anything* not explicitly allowed, and only
   same-origin CSS/JS/images are allowed. Inline scripts are blocked, so
   even if an attacker somehow injected markup, the script wouldn't run.
2. **frame-ancestors 'none' + X-Frame-Options: DENY** — no site can embed
   yours in an iframe (blocks clickjacking).
3. **X-Content-Type-Options: nosniff** — browser can't misinterpret files
   as executable content.
4. **Strict-Transport-Security** — browsers only ever connect over HTTPS.
5. **Referrer-Policy** — other sites don't learn your visitors' full URLs.
6. **Permissions-Policy** — camera/mic/location/payment APIs disabled.
7. **rel="noopener"** on external links — LinkedIn can't script back
   against your page.
8. **form-action 'none' / base-uri 'none'** — no page can be tricked into
   submitting data anywhere or rewriting its link base.

`vercel.json` is picked up automatically by Vercel; `_headers` covers
Netlify/Cloudflare Pages. GitHub Pages can't set custom headers, but the
in-page `<meta>` CSP still applies there.

## The honest part: what "impossible to hack" really means

No one can promise *impossible* — but for a site like this, the realistic
risks are not the site itself. They are:

| Real risk | Defense |
|---|---|
| Your **GitHub account** gets taken over (attacker pushes a malicious version) | Strong unique password + **enable 2FA on GitHub** |
| Your **Vercel account** gets taken over | Enable 2FA on Vercel; it logs in via GitHub, so GitHub 2FA covers most of it |
| Your **email account** (recovery path for everything) | Strong unique password + 2FA |
| Phishing (fake "Vercel/GitHub" emails asking you to log in) | Never log in from an email link; type the URL yourself |
| Scrapers harvesting your displayed email for spam | Accepted trade-off — the email is public on purpose so recruiters can reach you |

**Action items for you (5 minutes, the highest-value security work):**
1. Turn on 2FA at github.com → Settings → Password and authentication.
2. Turn on 2FA in your Vercel account settings.
3. Make sure your Gmail has 2-step verification on.

Do those three and the weakest link is gone.
