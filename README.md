# Vite + React + TypeScript + microCMS

This repository is experimenting with a combined implementation of Vite, React, TypeScript, and microCMS.

## Requirements

- [Volta](https://volta.sh/)

Node.js is required to run this application. Please install Volta to automatically use the suitable Node.js version.

- [microCMS](https://microcms.io/)

This application uses microCMS. The following API must be created.

endpoint: `greeting`  
type: `object`
| fieldId | kind | required |
| ---- | ---- | ---- |
| message | text | true |

endpoint: `news`  
type: `list`
| fieldId | kind | required |
| ---- | ---- | ---- |
| date | date | true |
| title | text | true |

## Recommended

- [Visual Studio Code](https://code.visualstudio.com/)

The recommended extensions for Visual Studio Code are listed in [.vscode/extensions.json](.vscode/extensions.json).

## Environment Variables

Environment variables are used in the `createClient` function. For more details, please refer to the [microCMS JavaScript SDK README](https://github.com/microcmsio/microcms-js-sdk?tab=readme-ov-file#how-to-use).

```
VITE_MICROCMS_SERVICE_DOMAIN="YOUR_DOMAIN"
VITE_MICROCMS_API_KEY="YOUR_API_KEY"
```

## Getting Started

- Clone repository.

```
git clone https://github.com/kwn1125/vite-react-typescript-microcms-experiment.git <project_directory>
```

- Install dependencies by referencing the package-lock.json.

```
cd <project_directory>
npm ci
```

- Update the empty value and rename `.env.sample` to `.env.development`.
- Launch the application.

```
npm run dev
```
