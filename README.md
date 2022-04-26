# Energy Dashboard backend

Backend of Energy Dashboard:

- [Frontend live site](https://energy-report.netlify.app/)
- [Frontend Github](https://github.com/StefanoFrontini/energy-dashboard)

This is a [Strapi application](https://strapi.io/) deployed on Heroku.

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

You can get dummy data here:

- [testPodMonthly](https://gist.github.com/StefanoFrontini/d01b85bf65f4e43eea541d22191302b0)
- [testPodHourly](https://gist.github.com/StefanoFrontini/dae797135cac98c1903eb6855e5d1652)
- [testPdrMonthly](https://gist.github.com/StefanoFrontini/af4ac0ee2c054a68340031d459739d3f)

## Links
- [Live site](https://pilloledienergia-api.herokuapp.com/admin/auth/login)



