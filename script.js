

function calculateTicketPrice() {
    const age = Number(prompt(" Enter your age: "));
    const movieType = (prompt(" Enter movie type (regular or 3D):")).toLowerCase();
    const timeOfDay = (prompt("Enter time of day (matinee or evening):")).toLowerCase();

    let basePrice = 25;
    let discount = 0;

    switch (true) {
        case age <= 10 :
            discount = 5;
            break;
        case age > 10 && age < 65 :
            discount = 15;
            break;
        case age > 65 :
            discount = 10;
            break;
    
        default:
            console.log("თქევნი შეიყვანეთ არასწორი ასაკი");
            break;
    }

    switch (movieType) {
        case "3d" :
            basePrice += 5
            break;

         case "regular":
            break;   
    
        default:
            console.log("თქვენ შეიყვანეთ არასწორი ფილმის ტიპი");
            break;
    }

    switch (timeOfDay) {
        case "evening" :
            basePrice += 5;
            break;
        case "matinee" :
            break;
        default:
            console.log("თქვენ შეიყვანეთ არსწორი დღის დრო");
            break;
    }

   basePrice -= discount

   if( movieType === "3d" && timeOfDay === "evening" ) {
       basePrice = 25;
   }


   switch (true) {
    case basePrice > 30:
        discount *= 0.75
        break;
    case basePrice > 25 && basePrice <= 30:
        discount -= 5
        break;
    default:
        break;
   }
   console.log(`ბილეთის ფასი არის: ${basePrice.toFixed(2)} ლარი.`);

}

calculateTicketPrice();





