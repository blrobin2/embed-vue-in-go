# Embed Vue In Go
A small demonstration of how to embed a Vue.js app in Go, giving you a single distributable binary with all of your assets

## Development
* In root folder, run: `go run main.go -port 8081`
* In `frontend` folder, run: `npm run serve`
* Visit `localhost:8080` and begin development

## Production
* In `frontend` folder, run: `npm run build`
* In root folder, run `go build main.go`
* Run `./main`
* Visit `localhost:8080` to see embedded application running

## Prior Art
* [Embedding Vue.js Apps in Go](https://hackandsla.sh/posts/2021-06-18-embed-vuejs-in-go/)

## Further Resources
* [Vue CLI](https://cli.vuejs.org/)
* [How to Build Go Executables for Multiple Platforms on Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-build-go-executables-for-multiple-platforms-on-ubuntu-16-04)