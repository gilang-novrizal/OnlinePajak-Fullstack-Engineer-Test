const taxScheme =[
    {
    maxIncome: 50000000,
    rate: 0.05
    },
    {
    maxIncome: 250000000,
    rate: 0.15
    },
    {
    maxIncome: 500000000,
    rate: 0.25
    },
    {
    maxIncome: Infinity,
    rate: 0.05
    },
]

const taxRelief = {
    TK0: 54000000,
    K0: 58500000,
    K1: 63000000,
    K2: 67500000,
    K3: 72000000
}

const calculateTax = (monthlySalary, relief)=>{
    const annualIncome = monthlySalary * 12
    const taxableIncome = annualIncome - taxRelief[relief]

    if(taxableIncome <= 0){
        return 0
    }

    let annualTax = 0
    let annualTaxedIncome = 0

    for (let i = 0; i< taxScheme.length; i++) {
        let calc = 0;
        const check = taxableIncome - annualTaxedIncome;

        if (check >= taxScheme[i].maxIncome) {
            calc = taxScheme[i].maxIncome - annualTaxedIncome;
            annualTaxedIncome += calc;
            annualTax += calc * taxScheme[i].rate;
        } else {  
            annualTaxedIncome += check
            annualTax += check * taxScheme[i].rate;

            break;
        }

    }
    return annualTax
}
module.exports = calculateTax