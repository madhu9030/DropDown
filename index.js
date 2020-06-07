// rock paper scissors
function runGame(userSelection) {
		console.log("User Selected: ", userSelection.id)
		const robot = robotSelection()
		console.log("robot selected", robot)
		winner(userSelection.id, robot)
}

function robotSelection() {
		const selectedOption = ["Rock", "Paper", "Scissor"]
		return selectedOption[Math.floor(Math.random() * 3)];
}

function winner(humanChoice, robotChoice) {
		let winnerText = '';
		switch(humanChoice) {
				case "Rock":
						if(humanChoice === robotChoice) {
								winnerText = "Tie";
						} else if(robotChoice === "Paper") {
								winnerText = "You Lose";
						} else {
								winnerText = "You Won"
						}
				break;
				case "Paper":
						if(humanChoice === robotChoice) {
								winnerText = "Tie";
						} else if(robotChoice === "Scissor") {
								winnerText = "You Lose";
						} else {
								winnerText = "You Won"
						}
				break;
				case "Scissor":
						if(humanChoice === robotChoice) {
								winnerText = "Tie";
						} else if(robotChoice === "Rock") {
								winnerText = "You Lose";
						} else {
								winnerText = "You Won"
						} 
		}
		document.getElementById("last-selected") 
			&& document.querySelectorAll("#last-selected", "#confetti").forEach((item)=> {item.remove()})
		const userSelected = document.createElement("IMG")
		userSelected.setAttribute("id", "last-selected");
		userSelected.setAttribute("class", "user-selected");

		const myChoice = document.getElementById("user");
		myChoice.appendChild(userSelected).setAttribute("src", `./images/${humanChoice}.png`);

		const roboSelected = document.createElement("IMG")
		roboSelected.setAttribute("id", "last-selected");
		roboSelected.setAttribute("class", "user-selected");
		const roboChoice = document.getElementById("robot");
		roboChoice.appendChild(roboSelected).setAttribute("src", `./images/${robotChoice}.png`);
		document.getElementById("winnertext").style.fontSize = "40px";
		if(winnerText === "Tie") {
				document.getElementById("winnertext").style.color = "orange";
				document.getElementById("confetti").setAttribute("src", "./images/giphy3.gif");
		} else if(winnerText === "You Won") {
				document.getElementById("winnertext").style.color = "green";
				document.getElementById("confetti").setAttribute("src", "./images/giphy1.gif");
		}else {
				document.getElementById("winnertext").style.color = "red";
				document.getElementById("confetti").setAttribute("src", "./images/giphy2.gif");
		}
		return document.getElementById("winnertext").innerHTML = winnerText;
}

// for (let index = 1; index <= 100; index++) {
// 	console.log(index === 30 ? 30 : index);
// 	if(index===30) {
// 		break;
// 	}
// }
// var totalEven= 0;
// var totalOdd = 0;
// for(i=1;i<=100; i++) {
// 	if(i%2 === 0) {
// 		totalEven++;
// 		console.log(i + " even ")
// 	}else {
// 		totalOdd++	
// 		console.log(i + " odd ")
// 	}
// 	if(i === 100) {
// 		console.log("total odd numbers " + totalOdd, "total even numbers " + totalEven)
// 	}
// }

// var star= "";
//  for(var i=1; i <= 7; i++) {
// 	console.log(star += "*");	
// }

// for (var limit = 1; limit <= 20; limit++) {
// 		var a = false;
// 		for (var i = 2; i <= limit; i++) {
// 				if (limit%i===0 && i!==limit) {
// 					a = true;
// 				}
// 		}
// 		if (a === false) {
// 				console.log(limit);
// 		}
// 	}

// 	var arr = ["one", "two", "three", "four", "five"];
// 	var obj = {"one" : 1, two: 2, three: 3};
// 	obj.five=5;
// 	// console.log(arr[(arr.length/2)-1])
// 	console.log(obj["five"])

	// Switch
// var friuts ="grapes";
// switch(friuts) {
// 	case "mango":
// 	console.log(friuts + " out of stock");
// 	break;
// 	default:
// 	console.log("we dont have stocks");
// 	break;
// 	case "apple":
// 	console.log(friuts + " out of stock");
// 	break;
// 	case "grapes":
// 	console.log(friuts + " out of stock");
// 	break;
// 	case "salt":
// 	console.log(friuts + " out of stock");
// 	break;
// 	case "guava":
// 	console.log(friuts + " out of stock");
// }

// var star= "";
//  for(var i=1; i <= 7; i++) {
// 	console.log(star += "*");	
// }

// Print rain
// var rain = ["R","A","I","N"]
// let val = ""
// for (let index = 0; index < rain.length; index++) {
// 		console.log(val + rain[index])
// 		val += " " + val
// }


// var stocks = ["apple", "microsoft", "google", "apple", "netflix", "fb", "google"];

// var createStocksObj = {};
// for (let i = 0; i < stocks.length; i++) {
// 	if(createStocksObj[stocks[i]]) {
// 		createStocksObj[stocks[i]] = createStocksObj[stocks[i]] + 1;
// 	} else {
// 		createStocksObj[stocks[i]] = 1;
// 	}
	
// }

// console.log(createStocksObj);

// var items = ["apple", "nike", "apple", "nike", "fidel", "ms", "google", "ms"];
// 	var obj = {};

// 	for(var i = 0; i < items.length; i++){
// 		if(obj[items[i]]){
// 			obj[items[i]] = obj[items[i]] + 1;
// 		}else{
// 			obj[items[i]] = 1;
// 		}
// 	}
// 	console.log(obj);

// var items = ["apple", "nike", "micro"];
// var items1 = ["netflix","disney"];
// var newItem = [];
// for (let i = 0; i < items.length; i++) {
// 	newItem[i+items1.length] = items[i]
// 		if(i < items1.length) {
// 			newItem[i] = items1[i]		
// 	}
// }
// console.log(newItem);

// var items = ["apple", "nike", "micro", "netflix", "disney"];
// var items1 = ["nike","disney","netflix"];
// const newArray = []
// for (let i = 0; i < items1.length; i++) {
// 	for (let j = 0; j < items.length; j++) {
// 		if(items1[i] === items[j]) {
// 			newArray[0] = items1[i];
// 		}
// 	}
// 	if(newArray.length == 1) break;
// }
// var finalResult = newArray[0];
// console.log(finalResult);

// var array1 = ["chicken", "lamb", "pork", "beef"];
// var array2 = ["c", "a", "e", "i"];
// let count = 0;
// for (let i = 0; i < array2.length; i++) {
// 	for (let j = 0; j < array1.length; j++) {
// 		const item = array1[j];
// 		for (let k = 0; k < item.length; k++) {
// 			if(array2[i] === item[k]) {
// 				count++;
// 			} else {
// 			}
// 		}
// 	}
// 	console.log("Total " + array2[i]+"'s" + " found " + count)
// }

// (function(){
// 	console.log("hello")
// })()

const colors = ["blue", "black", "green", "orange", "lightblue", "pink", "grey"];
const selectEl = document.getElementById("filter");
colors.map((color)=> {
	const optionEle = document.createElement("OPTION");
	const appendToSelectEl = selectEl.appendChild(optionEle);
	appendToSelectEl.setAttribute('id', color);
	appendToSelectEl.innerHTML= color;
})

const selectedBank = ()=> {
	const color = selectEl.value;
	document.getElementById("change").style.backgroundColor = color;
}

const banks = ["bank of Baroda", "bank of India", "Bank of swift", 
"Chase bank", "fremont bank", "State bank of India", "citi bank", "bank of japan", "bank of andhra"];
const inputEl = document.getElementById("input-search");
inputEl.addEventListener('focus', function(){

});
const filterList = (el)=> {
	let fliteredValues = [];
	const oldList = document.getElementById("filter-list");

	if(el.value === '' && oldList) {
		oldList.innerHTML = '';
		oldList.remove();
		inputEl.classList.remove('focused')
	}

	el.value !== '' ? banks.filter((bank)=>{
		if(bank.toLowerCase().startsWith(el.value.toLowerCase())) {
			fliteredValues.push(bank)
			return fliteredValues;
		} else {
			oldList ? oldList.innerHTML = '' : '';
			inputEl.classList.remove('focused');
		}
	}) : '';

	let createUlEl;
	if(fliteredValues.length > 0) {

		const oldList = document.getElementById("filter-list");
		oldList ? oldList.innerHTML = '' : '';
		oldList || (inputEl.focus() && el.value !== '') 
			? document.getElementById("filter-list").style.display = "block" : ''
		if(!document.getElementById('filter-list')) {
			createUlEl = document.createElement("UL")
			inputEl.insertAdjacentElement("afterend", createUlEl);
			createUlEl.setAttribute('id', 'filter-list');
			createUlEl.setAttribute('class', 'filter-list fade-in');
			inputEl.classList.add('focused');
			document.getElementById("filter-list").style.display = "block";
		};
		fliteredValues.map((bank)=> {
			const list  = document.getElementById("filter-list");
			inputEl.classList.add('focused');
			const UlEle = document.getElementById("filter-list")
			const optionEle = document.createElement("LI");
			const appendToUlEl = UlEle.appendChild(optionEle);
			appendToUlEl.setAttribute('id', bank);

			optionEle.addEventListener('click', function(event) {
				let targetElement = event.target || event.srcElement;
				inputEl.value = targetElement.innerHTML;
				let selectBank = []
				list.childNodes.forEach((node)=> {
					if(inputEl.value.toLowerCase() === node.innerHTML.toLowerCase()){
						list.innerHTML = ''
						selectBank.push(node);
						UlEle.appendChild(selectBank[0]);				}
				})
				list.style.display = "none";
        	});
			appendToUlEl.setAttribute('class', 'fade-in')
			appendToUlEl.innerHTML= bank;
	})
	}
}

// const clickMe = ()=> {
// 	console.log("function")
// }