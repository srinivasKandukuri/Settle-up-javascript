
var minimumCashFlow = function () { };

minimumCashFlow.prototype.getMinPerson = function (amount) {
    var minPerson = 0;
    for (var i = 1; i < amount.length; i++) {
        if (amount[i] < amount[minPerson]) {
            minPerson = i;
        }
    }

    return minPerson;
}

minimumCashFlow.prototype.getMaxPerson = function (amount) {
    var maxPerson = 0;
    for (var i = 1; i < amount.length; i++) {
        if (amount[i] > amount[maxPerson]) {
            maxPerson = i;
        }
    }
    return maxPerson;
}

minimumCashFlow.prototype.minimumCashFlow = function (req, res, amount, results = []) {
    var service = this;
    var maximumCreditPerson = service.getMaxPerson(amount);
    var maximumDebitPerson = service.getMinPerson(amount);

    if (amount[maximumCreditPerson] == 0 && amount[maximumDebitPerson] == 0) {
        res.send({
            status:"ok",
            result:results
        })
        return;
    }

    var min = Math.min(-amount[maximumDebitPerson], amount[maximumCreditPerson]);
    console.log(min);


    amount[maximumCreditPerson] -= min;
    amount[maximumDebitPerson] += min;


    console.log("Person(" + maximumDebitPerson + ") pays " +
        min + " to Person(" + maximumCreditPerson + ")");
    var payableObj = {
        "creditPerson(PayablePerson)":maximumCreditPerson,
        "debitPerson(ToWho)":maximumDebitPerson,
        "amount":min
    }
        results.push(payableObj);
    
    service.minimumCashFlow(req, res, amount, results);
}


minimumCashFlow.prototype.getAmount = function (obj) {
    var amount = Array.apply(null, Array(obj.length)).map(Number.prototype.valueOf, 0);
    for (var i = 0; i < obj.length; i++) {
        for (var j = 0; j < obj.length; j++) {
            
            console.log("incoming amount " + "[" + [j] + "]" + "[" + [i] + "]" + obj[j][i]);
            console.log("outgoing amount " + "[" + [i] + "]" + "[" + [j] + "]" + obj[i][j]);
            console.log(amount[i]);
            
            amount[i] += obj[j][i] - obj[i][j];
            
            console.log("total amt " + amount[i]);
        }
    }

    return amount;
}

module.exports = minimumCashFlow;