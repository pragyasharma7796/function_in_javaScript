function calculateTax(income){
    if(income<=250000){  //₹ 0 - ₹ 2,50,000*
        //nil
        return 0; 
    }else if(income>250000 && income<=500000){  //₹ 2,50,001 - ₹ 5,00,000
        //5%
        return 5*income/100;
    }else if(income>500000 && income<=750000){ //₹ 5,00,001 - ₹ 7,50,000
        //₹ 12,500 + 10% of total income exceeding ₹5,00,000
        return 12500+10*(income-500000)/100;
    }else if(income>750000 && income<=1000000){  //₹ 7,50,001 - ₹ 10,00,000
        //₹ 37,500 + 15% of total income exceeding ₹7,50,000
        return  37500 + 15*(income-750000)/100                        
    }else if(income>1000000 && income<=1250000){          //₹ 10,00,001 - ₹ 12,50,000
        //₹ 75,000 + 20% of total income exceeding ₹ 10,00,000
        return 75000 + 20*(income - 1000000)/100;
    }else if(income>1250000 && income<=1500000){  //₹ 12,50,001 - ₹ 15,00,000	
         //₹ 1,25,000 + 25% of total income exceeding ₹ 12,50,000
        return 125000+25*(income-1250000)/100;
    }else{  //Above ₹ 15,00,000
        //₹ 1,87,500 + 30% of total income exceeding ₹ 15,00,000
        return 187500+30*(income-1500000)/100
    }
}

let incomeTax = calculateTax(600000)  
console.log(incomeTax);

console.log(calculateTax(700000));
console.log(calculateTax(800000));
console.log(calculateTax(1000000));