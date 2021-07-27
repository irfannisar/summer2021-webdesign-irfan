$(document).ready(function() {
    $("#submit").click();(function () {
        var loanAmount = $("#loan-amount").val();
        var apr = $("#apr").val();

        loanAmount = parseFloat(loanAmount);
        apr = parseFloat(apr);


        var interestprice = loanAmount * ((apr / 100) / 12);

        interestprice = interestprice.toFixed(2);

        var resultText = "You will owe an extra $" + interestprice + "after 1 month.<br /> "(montheley compounding intresest)";

        $("#result-value").html(resultText);
        console.log(interestprice);
    });
});