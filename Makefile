PHONY:clean test testOriginalVim testNeoVim build tslint release buildcontainer testincontainer

MOCHA=./node_modules/mocha/bin/mocha
TSC=./node_modules/typescript/bin/tsc
TSLINT=./node_modules/tslint/bin/tslint

build: node_modules
	$(TSC)

tslint: build
	$(TSLINT) src/**/**.ts

release:
	vsce package
	vsce publish
	
install:node_modules

node_modules:
	npm install
	
clean:
	rm -rf out
	rm -f *.vsix
