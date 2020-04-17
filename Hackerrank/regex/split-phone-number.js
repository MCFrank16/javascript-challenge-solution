function processData(input) {
    //Enter your code here
    const re = /^(\d{1,})(\s|\-)(\d{3})(\s|\-)(\d+)$/g;
    const CD = input.match(/^(\d{1,})/g);
    const LAC = input.match(/(?<=\s|\-)\d{1,}(?=\-|\s)/g);
    const number = input.match(/(?<=\s|\-)\d{4,}/g);
    
    console.log("CountryCode="+CD[0]+","+"LocalAreaCode="+LAC[0]+","+"Number="+number[0]);
    // return input.test(re);
} 

processData("824-417-6460145493");
processData("148-809-2561957985");
processData("188-547-5864327428");
processData("891-454-9195497623");
processData("648-42-380306686");
processData("1 877 2638277");
processData("91-011-23413627");
