mqtt-mongo-recorder
===========

This NodeJS application listens to MQTT messages and records them to MongoDB

Example
=======

Clone the repository
```bash
$ npm install
```

Start up the server by editing the config.js first to suit your needs
```bash
$ $EDITOR config.js
$ node server.js
```

Or by using environment variables
```bash
$ MQTT_HOSTNAME="192.168.0.1" node server.js
```

Publish some MQTT messages to try it out (I use mosquitto server for this, but whatever MQTT server should work)
```bash
$ mosquitto_pub -m "bar" -t "foo"
```

Let's see what's in here
```bash
$ mongo
> use mqtt
> db.message.find();
```

Let's see what's in here 
```bash
$ mongo
> use hamza
> db.hamza.find();
```


