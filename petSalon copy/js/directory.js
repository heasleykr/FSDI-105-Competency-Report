// Function to add a registered pet, update youngest/oldest pets, & update salon profit
function display(petA){
    // Variable Declaration
    var text = "";
    var displayImg = "";
    const dogIcon ='<i class="fas fa-dog"></i>';
    const catIcon ='<i class="fas fa-cat"></i>';
    const birdIcon ='<i class="fas fa-crow"></i>';
    const heart = '<i class="fas fa-heart"></i>';

        //Grab correct image icon on HTML for type of pet 
        if(petA.type === "Dog" || petA.type === "dog"){
            displayImg = dogIcon;
        }
        else if(petA.type === "Cat" || petA.type === "cat"){
            displayImg = catIcon;
        }
        else if(petA.type === "Bird" || petA.type === "bird"){
            displayImg = birdIcon;
        }
        else{
            displayImg = heart;
        }

        //Update current oldest/youngest pet & salon profit
        oldest();
        youngest();
        totalProfit();
        animals();

        // create table row & add pet to current roster
        text+=` 
            <tr id = "${petA.id}">
                <td>${petA.name} </td>
                <td>${displayImg}</td>
                <td>${petA.age} </td>
                <td>${petA.type} </td>
                <td>${petA.breed} </td>
                <td>${petA.gender} </td>
                <td>${petA.service.getType()}</td>
                <td>${petA.ownerName} </td>
                <td>${petA.contactPhone} </td>
                <td>$${petA.service.getPrice()}</td>
                <td><button class="btn btn-danger" onclick="deletePet(${petA.id});"> Delete </button></td>
            </tr>
            `;
        
        //print to console & add to table
        console.log(text);
        $('#petTrial').append(text);
}



// Function to display the oldest pet to console 
function oldest(){

    //Return 0 is pet array is empty
    if(salon.pets.length === 0){
        $('#old').text("Oldest Pet: " + 0);
    }
    else{
        // store the first pet's age
        var oldest = salon.pets[0].age;
        var petOld = salon.pets[0].name;

            // loop through all the pets in the salon
            for(let i = 1; i < salon.pets.length; i++){

                // if the age is smaller than comparison, update
                if(oldest < salon.pets[i].age){
                    oldest = salon.pets[i].age;
                    petOld = salon.pets[i].name;
                }
            }
            // Print oldest pet in the salon
            console.log("The oldest pet in the salon is " + petOld + ".");

            $('#old').text("Oldest Pet: " + petOld);
    }
}

// Function to display the youngest pet to the console
function youngest(){

    //Return 0 is pet array is empty
    if(salon.pets.length === 0){
        $('#young').text("Youngest Pet: " + 0);
    }
    else{
        // store the first pet's age
        var youngest = salon.pets[0].age;
        var petYoung = salon.pets[0].name;

            // loop through all the pets in the salon
            for(let i = 1; i < salon.pets.length; i++){

                // if the age is larger than comparison, update
                if(oldest > salon.pets[i].age){
                    youngest = salon.pets[i].age;
                    petYoung = salon.pets[i].name;
                }
            }
            // Print youngest pet in the salon
            console.log("The youngest pet in the salon is " + petYoung + ".");

            $('#young').text("Youngest Pet: " + petYoung);
    }
}

//function to add total salon profit & count and return value
function totalProfit(){
    
    //Return 0 is pet array is empty
    if(salon.pets.length === 0){
        $('#countTotal').text("Total Number of Furry Guests: " + 0);
        $('#profitTotal').text(" Current Salon Profit: $" + 0.00);
    }
    else{
        // store the first pet's profit
        var add = salon.pets[0].service.getPrice();
        var total = salon.pets[0].service.getPrice();

            // loop through all the pets in the salon
            for(let i = 1; i < salon.pets.length; i++){

                // Covert to numbers and add all the prices
                    add = salon.pets[i].service.getPrice();
                    total = Number(total) + Number(add);
                
            }
            // Print Total Amount to console
            console.log("The total profit for the Fashion Salon is $" + total + ".");

            $('#countTotal').text("Total Number of Furry Guests: " + salon.pets.length);
            $('#profitTotal').text(" Current Salon Profit: $" + total);
    }
}

// Function to display how many of each type of pet there is
function animals(){
    
    var dog = 0;
    var cat = 0;
    var bird = 0;
    var other = 0;

    //loop through pet array 
    for(var i = 0; i < salon.pets.length; i++){

        if(salon.pets[i].type.toLowerCase() === "dog"){
            //Add count to 'dogs'
            dog++;
        }
        else if(salon.pets[i].type.toLowerCase() === "cat"){
            //Add count to 'cats'
            cat++;
        }
        else if(salon.pets[i].type.toLowerCase() === "dird"){
            //Add count to 'birds'
            bird++;
        }
        else{
            //Add count to 'other' pets
            other++
        }
        // return animalCount;
        $('#totalDog').text("Dog Guests: " + dog);
        $('#totalCat').text("Cat Guests: " + cat);
        $('#totalBird').text("Bird Guests: " + bird);
        $('#totalOther').text("Other Animal Guests: " + other);
    }
}