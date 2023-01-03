# Energy Dashboard backend

Backend of Energy Dashboard:

- [Frontend live site](https://energy-report.netlify.app/)
- [Frontend Github](https://github.com/StefanoFrontini/energy-dashboard)

This is a [Strapi application](https://strapi.io/) deployed with Docker on a Ubuntu instance of the Oracle Cloud Infrastructure.

I created 3 collection types:

- Azienda (italian name for company)
- Pod (energy meter)
- Pdr (gas meter)

One Azienda can have many Pods and Pdrs (one-to-many relationship)

There are also 3 collection types with dummy data:
- testAzienda
- testPod
- testPdr

Dummy data are used for unauthenticated users.

## Setup

- Sign up a [free Heroku Account](https://signup.heroku.com/)
- Create a new project
- Install the Heroku Postgres addon
- Retrieve database credentials

```bash
# Clone the following repository
$ git clone https://github.com/StefanoFrontini/pilloledienergia-api

# Create a .env file on the root of the project and copy your database credentials
DATABASE_HOST=XXX
DATABASE_PORT=XXX
DATABASE_NAME=XXX
DATABASE_USERNAME=XXX
DATABASE_PASSWORD=XXX
DATABASE_URI=XXX
JWT_SECRET=XXX
API_TOKEN_SALT=XXX
APP_KEYS=XXX
ADMIN_JWT_SECRET=XXX

# Go into the repository
$ cd pilloledienergia-api

# Install dependencies
$ npm install

# Run the backend
$ npm run develop
```

## Links

You can get dummy data here:

- [testPodMonthly](https://gist.github.com/StefanoFrontini/d01b85bf65f4e43eea541d22191302b0)
- [testPodHourly](https://gist.github.com/StefanoFrontini/dae797135cac98c1903eb6855e5d1652)
- [testPdrMonthly](https://gist.github.com/StefanoFrontini/af4ac0ee2c054a68340031d459739d3f)



