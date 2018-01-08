var cashMinFlow = require('./services/cashMinFlow');
var cashminflowService = new cashMinFlow();
module.exports  = function(router){
    
    router.get('/', function (req, res){
        res.render('index',{});
    });


    router.get('/get', function (req, res) {
        
        var obj = [
            {0:1000,1:1000,2:2000},
            {0:0,1:0,2:5000},
            {0:0,1:0,2:0}
        ];
        
        var amounts = cashminflowService.getAmount(obj);
        cashminflowService.minimumCashFlow(amounts);
    })

    router.post('/post', function (req, res) {

        var obj = req.body.obj;
        var amounts = cashminflowService.getAmount(obj);
        cashminflowService.minimumCashFlow(req, res, amounts);

    });
}