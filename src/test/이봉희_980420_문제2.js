//원래 금
let money = 0;

document.getElementById("first").addEventListener("click", function(){
    money += 100;

    if(money > 10000){
        alert("최대 삽입 가능 금액은 10000원 이하입니다.");
        money -= 100;
    }

    console.log(money);
});

document.getElementById("second").addEventListener("click", function(){
    money += 500;

    if(money > 10000){
        alert("최대 삽입 가능 금액은 10000원 이하입니다.");
        money -= 500;
    }
    
    console.log(money);
});

document.getElementById("third").addEventListener("click", function(){
    money += 1000;

    if(money > 10000){
        alert("최대 삽입 가능 금액은 10000원 이하입니다.");
        money -= 1000;
    }

    console.log(money);
});

document.getElementById("resultButton").addEventListener("click", () => {
    let choiceDrinks = [];
    if(money >= 300 && money < 500){
        choiceDrinks.push("비타민음료");
    }else if(money >= 500 && money < 1000){
        choiceDrinks.push("비타민음료")
        choiceDrinks.push("사이다");
    }else if(money >= 1000){
        choiceDrinks.push("비타민음료");
        choiceDrinks.push("사이다");
        choiceDrinks.push("콜라");
    }
    let moneyMessage = `총금액: ${money} \n 선택 가능 음료: ${choiceDrinks.toString()}`
    // document.getElementById("result").innerHTML = moneyMessage;
    document.getElementById("result").innerHTML = moneyMessage;
})