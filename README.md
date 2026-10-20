# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Deploy to shared hosting

The GitHub Actions workflow in `.github/workflows/deploy_to_host.yml` builds the app and deploys `dist/` to the hosting account whenever code is pushed to `main`. It can also be started manually from the Actions tab.

Add these repository secrets under **Settings → Secrets and variables → Actions**:

- `FTP_SERVER`: the FTP/FTPS hostname, without a protocol prefix.
- `FTP_USERNAME`: the hosting account's FTP username.
- `FTP_PASSWORD`: the hosting account's FTP password.
- `FTP_SERVER_DIR`: the target directory on the host, including a trailing slash (for example, `/public_html/`).

The workflow uses explicit FTPS to encrypt the connection. If the host does not support FTPS, change `protocol: ftps` in the workflow to `protocol: ftp`; plain FTP does not encrypt credentials or data.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
