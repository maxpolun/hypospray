"use strict"

var services = {}

function service(args){
    services[args.name] = {
        factory: args.factory,
        inject: args.inject
    }
}

function injectService(servicename) {
    var service = services[servicename]
    var resolvedDeps = []
    for(var i = 0; i< service.inject.length; i++){
        resolvedDeps.push(injectService(service.inject[i]))
    }
    return service.factory.apply(null, resolvedDeps)
}

if(typeof window === 'undefined') {
    //only needed on node
    exports.service = service
    exports.injectService = injectService
}