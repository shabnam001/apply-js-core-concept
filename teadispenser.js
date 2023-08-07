function teaDispenser(money){
    if(money % 5 != 0){
        console.log('please give me an amount of taka that is divident by 5');
        return;
    }
    var giveCupOfTea = money / 5;
    console.log('take you tea:', giveCupOfTea);
}
teaDispenser(50);
teaDispenser(101);


