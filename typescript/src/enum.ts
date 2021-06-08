enum StarbuksGrade{
    WELCOME=0,
    DD=3,
    GREEN=1,
    GOLD=2  //숫자, 인덱스의 초기값 설정해주는게 좋다.
}

enum Hello{
    WELCOME="WELCOME",
    HI="HI"
}

function getDiscount(v:StarbuksGrade):number{
    switch(v){
        case StarbuksGrade.WELCOME:
            return 0;
        case StarbuksGrade.GREEN:
            return 5;
        case StarbuksGrade.GOLD:
            return 10;
    }
}
console.log(getDiscount(StarbuksGrade.GREEN));
console.log(StarbuksGrade.GREEN);   //index of StarbuksGrade
console.log(StarbuksGrade);