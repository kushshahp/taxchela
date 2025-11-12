# Running the Wix Project on Render

Render is a managed hosting platform that can build and run containerized web services. Because this repository is tied to a Wix site and relies on the Wix Local Editor runtime, it cannot be deployed as-is on Render in the same way that a traditional React/Node application can. The Wix CLI spins up services that are tightly coupled with the Wix infrastructure (authentication with your Wix account, syncing with the Wix site, and the Local Editor UI). Those services expect an interactive browser session and are not designed for headless cloud execution.

## Why the Wix CLI Does Not Work on Render

- `wix dev` launches the Wix Local Editor, which opens a browser-based editor bound to your local machine. This workflow assumes the process can open a browser session and bind to `localhost`, which is not possible inside Render's sandbox.
- The CLI authenticates against your Wix account using a local OAuth flow. Render does not expose the interactive prompts required for this login and therefore the command cannot finish successfully in CI/CD or hosted environments.
- Published Wix sites are hosted on Wix's infrastructure. Publishing from this repo requires running `wix publish`, which communicates directly with Wix servers and does not produce a standalone build artifact that a third-party host such as Render can serve.

## Recommended Workflow

1. **Develop locally** using `npm install` followed by `npm run dev` (which executes `wix dev`). This keeps the Local Editor running on your machine where you can interact with it.
2. **Publish through Wix** once you are satisfied with your changes. Commit and push the code, then run `wix publish` locally or publish through the Wix Editor. Wix will handle building and hosting the site on their platform.
3. **Use Render for auxiliary services only.** If you need additional backend services (for example, a custom API) you can create a separate Node/Express project that deploys to Render. You can then call that service from your Wix site via HTTP.

## Advanced Option: Proxying to a Render Service

If you absolutely must expose a preview through Render, the only supported pattern is to host a lightweight proxy that forwards requests to your locally running Local Editor. This requires keeping your local machine online with a secure tunnel (such as Cloudflare Tunnel or ngrok) pointed at `wix dev`. Render would simply reverse proxy to that tunnel URL. This approach is fragile and should only be used temporarily for demos.

## Summary

Render is not a replacement for Wix hosting. Use the Wix CLI locally for development and Wix's publishing pipeline for deployment. Render can complement your Wix site by hosting external services, but it cannot run the Wix Local Editor or host the site itself.
