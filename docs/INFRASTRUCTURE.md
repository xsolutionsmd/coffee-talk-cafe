# Coffee Talk Cafe infrastructure

The accepted four-page static application uses three independent Oracle stacks.
Production is `main` at https://coffeetalk.xsolutionsmd.com; Derek's preview is
`derek-dev` at https://d-coffeetalk.xsolutionsmd.com; Abdul's is `abdul-dev` at
https://a-coffeetalk.xsolutionsmd.com. All three demonstrations retain noindex.
The public source repository is https://github.com/xsolutionsmd/coffee-talk-cafe.

Each environment has its own GHCR package, immutable release manifest, Compose
project, service alias, updater lock/state, paused-until-ready timer and retention
registration. See [the deployment procedure](ORACLE_DEPLOYMENT.md) and
[the machine-readable contract](../deploy/oracle-contract.json). No application
host ports, state volume, credential or custom ordering backend is required.

The first direct production release is adopted in place. Installation changes only
root-owned updater/templates/units; its running Compose and release.env remain
until an anonymously pullable, checked managed release exists. The updater checks
an isolated candidate before replacement and retains the previous Compose/image
configuration for recovery. Do not clear transaction/recovery markers blindly.

`deploy/oracle*.caddy` are this company's canonical route fragments. Installed
gateway changes require the existing `/var/lock/xsolutions-gateway.lock`, a fresh
read inside that lock, compare-and-swap, validation and graceful reload. Production's
existing block is reused. Preserve sibling routes, gateway identity and certificate
volumes; never apply an old complete gateway snapshot from this repository.

Main requires a PR and strict `Check deployable app` / `Check application container`
checks. Production's GitHub environment accepts only main; each preview accepts
only its matching branch. PRs never publish. Actual workflow/live receipts are
returned to the coordinator separately from pipeline acceptance and visual review.

The server retention policy protects the current image and two previous successful
sets with a 24-hour observation grace period. It never removes volumes or unrelated
images. This stateless site does not need a database backup; configuration recovery
on the same disk does not provide full server-loss recovery. No reboot or production
fault-injection claim is made by infrastructure setup.
