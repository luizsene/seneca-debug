module.exports = function MathAPI(options) {

    // plugin initialization
    this.add('init:MathAPI', function (msg, respond) {
    
        console.log("Plugin inicializado");

        this.act('role:web', {
            routes: [{
                prefix: '/api',
                pin: 'role:api,path:*',
                map: {
                    calculate: {GET: true, suffix: '/:operation'}
                }
            }]
        }, respond);
    });


    this.add('role:api,path:calculate', function (msg, respond) {
        // talking to the microservice
        this.act('role:math', {
            cmd: valid_ops[msg.operation],
            left: msg.left,
            right: msg.right
        }, respond);
    });


    // valid operations list
    var valid_ops = {sum: 'sum', product: 'product'};

};