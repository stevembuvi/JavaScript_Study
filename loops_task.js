//Create a new HTML file and attempt the question below:
//Using the link HERE , copy the array of JSON objects containing countries with their populations. Display in an object showing how many countries have population between 0 - 50m, 51m - 100m, > 100m as the keys
//e.g 
	//pops = { “0-50m” : 216, “51-100m” : 16, ” >100m” : 13 }

	let pops={"0-50m",0, "51-100m" 0, ">100m":0}

	for (let i=0; i=countries.length; i++){
		let population_count=countries[i].population_count
		if population_count>0 && population_count<=50_000_000){
			pops["0-50m"]++
		else if(population_count>50_000_000 && population_count <= 100_000_000){
			pops["51-100m"]++
		}else{
			pops[">100m"]
		}
		}
	}