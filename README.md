# Reservation system semestral project. Frontend part.
Most of the things are here to complain with formal requirements of NSS semestral project.
#### Deployment: [Vercel](https://reservation-system-five.vercel.app/)


### Společné požadavky:
  - vyber vhodne technologie a jazyka(povinné):
    - Next.js (React + FEBE)
  - readme v gitu s popisem co je hotove a kde se funkcionalita nachazi (povinné)
    - You are here now :)
  - vyuziti spolecne DB (relacni nebo grafova) (povinné)
    - In backend part
  - vyuziti cache (napriklad Hazelcast) (volitelné -2b pokud není)
    - Caching of network calls + caching of FE components + caching in backend part.
  - vyuziti messaging principu (Kafka nebo JMS) (volitelné -2b pokud není)
    - In backend part.
  - aplikace bude zabezpecena pomoci bud basic authorization nebo pomoci OAuth2 (volitelné -2b
    pokud není)
    - Auth0 and SDK for Next.js is used.
  - vyuziti Inteceptors (alespon jedna trida) - napriklad na logovani (prijde request a zapiseme ho do
    logu) (volitelné -2b pokud není)
    - Middleware in Next application 
    - in backend part.
  - vyuziti jedne z technologie: SOAP, REST, graphQL, Java RMI, Corba, XML-RPC (volitelné -2b
    pokud není)
    - REST is here
  - nasazeni na produkcni server napriklad Heroku (povinné)
    - Deployed to VERCEL
  - vyber vhodne architektury (event base, pipe and filter, ...) (povinné)
    - In backedn part.
  - inicializacni postup (jak aplikaci deploynout, kde jsou zakladni data do nove DB typu admin apod)
    (povinné)
    - You are here.
  - vyuziti elasticsearch (volitelné -2b pokud není)
    - In backend part.
  - pouziti alespon 5 design patternu (musi davat smysl :) ) (povinné)
    - State, Promises, Factory method, Chain of responsibility, Adapter, Facade 
  - za kazdeho clena tymu 2 UC (use cases - aby SW nebyl trivialni) (povinné)
    - See in docs.


#### Things used:
- Next.js
- useSWR
- Chakra UI
- React icons
- Auth0

#### Functions:
- Frontend app
- Security Proxy

## Getting Started

You need to have .env.local in order to communicate with auth0.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
## Milestones:

- Add authorization - done
- Finish UI - done
- Integrate Java BE
