# agile-osjs-sample

This project contains folders with AGILE-OSJS applications. To place them in your OSJS installation, you should do the following:

Ensure that you have a folder mapped to the agile-osjs container like this in your docker-compose file
```
  agile-osjs:
    container_name: agile-osjs
    image: agileiot/agile-osjs-$AGILE_ARCH: v0.3.0
    depends_on:
      - agile-core
    environment:
      - AGILE_HOST=$AGILE_HOST
    ports:
      - 8000:8000/tcp
    restart: always
    volumes:
      - /etc/hostname:/etc/hostname
      - $DATA/osjs-apps/:/opt/osjs-apps/
```

Also you need  v0.3.0 of agile-osjs or greater to be able to load dynamically osjs applications. 

Applications are only loaded during the initialization of the container, i.e. first boot, or when the AGILE_HOST environment variable has changed. 
So, if you have issues loading the app, just regenerate the container.
Now, checkout the agile-osjs sample and put it where your $DATA configuration in the docker-compose env or agile.config points to. (depending on whether you are using docker-compose or the agile-cli). The following example shows how to place the osjs-application in the right position, assuming your $DATA variable pints to ~/.agile/:

```
mkdir  ~/.agile/osjs-apps/
git clone https://github.com/Agile-IoT/agile-osjs-sample ~/.agile/osjs-apps/
```

Then remove the agile-osjs container and create it again. Afterwards you should have your app in the menu of OSJS.

