This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

In order to run the API locally, please follow these instructions:

First run the docker deamon and then run these commands

```bash
docker pull ptsdocker16/interview-test-server
docker run --init -p 5001:5001 -it ptsdocker16/interview-test-server
```

In order to run the front end application

use the suggested node version

```bash
nvm use
```

Install the libraries in the root of the project

```bash
npm i
```

and then run the server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Testing

If you want to run the unit test files

```bash
npm run test
```

If you want to run the e2e test files, run the development server or a production build

```bash
npm run test:e2e
```

# Glossary

- [Forms](aps/docs/forms.md)
- [Server Actions](aps/docs/serverActions.md)
- [Styling](aps/docs/styling.md)
- [Testing](aps/docs/testing.md)
