fetch("https://swapi.co/api/people")
    .then(response => {
        return response.json();
    })
    .then(data => {
        const peopleArray = data.results;
        peopleArray.forEach(function(person) {
            console.log(`Name: ${person.name}`);
            console.log(`Height: ${person.height}`);
            console.log(`Hair color: ${person.hair_color}`);
            console.log("-------")
        });

        const display = function(){
            peopleArray.map((person, index) => {
                let nameNode = document.createElement("p");
                let nameText = document.createTextNode(person[index].name);
                nameNode.appendChild(nameText);
    
                let cluster = document.getElementById("people-display");
                cluster.appendChild(nameNode);
            });
        };

        display(); 
    });
      
      