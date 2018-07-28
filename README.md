# Discord-js opensourced bot!

These projects are for users who want to learn the Discord API's but arent experienced enough,
this will help the user understand slowly and or for users who just want a bot to mess around with!

## Getting Started

Download the project by clicking [here](https://github.com/DopeDealers/discord-js-bot)!

### Prerequisites
[Nodejs](https://nodejs.org/dist/v8.11.3/node-v8.11.3-x64.msi)

```
Install node.js and then either restart your pc or close every program
```

### Installing

You will need to install discord.js
i have included an NPM script to do this for you
Simply run 
```
npm run discord
```
in your console!


## Deployment

To deploy this to a VPS or other machine
upfront this may be a bit lengthy but it is worth it!

#### Log into your machine and run these commands within your console
```
sudo apt-get update

sudo apt-get -y dist-upgrade
```
next we need to download node.js!
simply run this in your console

```
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
```

after you will need to install the package
like so
```
sudo apt-get install -y nodejs
```

and thats simply it! log into your machine via SFTP or FTP
create a folder for the bot and upload it to that folder!


## Running the bot

So now that you have installed node.js on your machine or on your PC
you need to locate the location of the bot i.e main.js

go into your console and copy your main.js location

like so

```
C:\Users\tutorial\Bots\Discord.js-Bot
```
once you copy that go into your terminal/console
and run this!

```
cd C:\yourlocation
```

once you do that you can now run the bot!
like so

```
npm run bot

npm run shard
```
run sep if you either want sharding or a normal bot!


now you know everything there is to running a discord.js bot!

## Built With

* [Discord.js](https://discord.js.org/#/) - the main dependency 
* [Atom](https://atom.io/) - Editor
* [node.js](https://nodejs.org/)

## Authors

* **Phil#0004** - *Initial work*


## License

This project is licensed under the GNU GPL v3 license - see the [LICENSE.md](https://github.com/DopeDealers/discord-js-bot/blob/master/LICENSE) file for details

## Acknowledgments

* https://github.com/AnIdiotsGuide - for some of the main code!
