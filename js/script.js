//Build the jail Cell.
var jail = [];
var numberOfPrisoners = document.getElementById("number-of-prisoners").innerHTML;


//Put the prisoners wearing hats in the jail and give them hats, and put them in a line.
for(var i = 0; i < numberOfPrisoners; i++){
	var prisonerhat= Math.round(Math.random());
	jail[i] = prisonerhat;
}

//Assign Colors to the hats.
for(var i = 0; i < numberOfPrisoners; i++){
	if(jail[i]===0){
		jail[i]="RED";
	} else {jail[i]="BLUE"}
}

//Build a place to hold all the prisoners answers.
var prisonerAnswers = [];

//Prisoner #1 is a 50/50 shot at surviving, but he's agreed to answer based on what the guy in front of him is wearing.
var prisonerOneAnswer = jail[1];
prisonerAnswers[0] = prisonerOneAnswer;

//The prisoners have a system to cue each other, this builds a place to hold those cues. No cues needed for prisoners 1 & 2.
var flag = [];
flag[0]= "NO FLAG";
flag[1]= "NO FLAG";


/*Each prisoner listens to the answer of the guy behind him, if the previous prisoner's answer begins with "NOT", that's sets the cue for the next prisoner.
The prisoner behind him is both simultaneously telling the executioner which color his hat is NOT, while telling the prisoner in front what color his hat IS.
If the next prisoner has the same hat as the previous prisoner, the prisoner contextualizes his answer affirmatively. If its different, he negates his own hat color to
both answer correctly and cue the next prisoner.*/

for(var i = 1; i<jail.length-1;i++){ 
	//Checks to see if the previous prisoner has answered by negating. 
	if(flag[i-1] === "FLAG"){
		if(prisonerAnswers[i-1]==="NOT RED"){
			{var prisonerKnowsHisHatIs = "RED";}
		} else{var prisonerKnowsHisHatIs = "BLUE";}
		
		if(jail[i+1] === prisonerKnowsHisHatIs){
			prisonerAnswers[i]= prisonerKnowsHisHatIs;
			flag[i] = "NO FLAG";
			continue;
		} else {prisonerAnswers[i] = "NOT " + jail[i+1];
			flag[i] = "FLAG";
			continue;
			}
	}
	//Check to see if next prisoner's hat matches his own hat, if it does he answers afirmatively.
	if(prisonerAnswers[i-1] == jail[i+1]){
		prisonerAnswers[i] = prisonerAnswers[i-1];
		flag[i]= "NO FLAG";
	}
	//The next prisoner's hat is not the same color as his own, so he answers correctly by telling the executioner what color his hat is NOT, that way
	//the next prisoner knows what color his hat IS.
	else{
		prisonerAnswers[i] = "NOT " + jail[i+1];
		flag[i] = "FLAG";
	}
}

//Logic for the last prisoner
if(flag[jail.length-2] === "FLAG"){
	if(prisonerAnswers[jail.length-2]==="NOT RED"){
			{prisonerAnswers[jail.length-1] = "RED";}
		} else{prisonerAnswers[jail.length-1] = "BLUE";}
} else {prisonerAnswers[jail.length-1] = prisonerAnswers[jail.length-2];}


//Determine the results based on answers and actual hat colors
var results = [];

for(var i = 0; i < jail.length; i++){
		if(jail[i]==="RED" && prisonerAnswers[i]==="NOT BLUE"){
			results[i]= "SURVIVED";
		} 
		else if(jail[i]==="BLUE" && prisonerAnswers[i]==="NOT RED"){
			results[i]= "SURVIVED";
		} 
		else if(jail[i]==="BLUE" && prisonerAnswers[i]==="BLUE"){
		results[i] = "SURVIVED";
		} 
		else if(jail[i]==="RED" && prisonerAnswers[i]==="RED"){
		results[i] = "SURVIVED";
		}
		else {results[i] = "EXECUTED";}
}

//Count the Survivors & Executed
var survivors = 0;

for(var i = 0; i<jail.length; i++){
	if(results[i]==="SURVIVED"){
		survivors++;
	} 
}

var executed = numberOfPrisoners - survivors; 

//Output Survivors & Executed to Screen
document.getElementById("number-of-survivors").innerHTML = survivors;
document.getElementById("number-executed").innerHTML = executed;

//First prisoner 
document.getElementById("prisoner-1").innerHTML = '<td>Prisoner #1</td><td>-</td><td>' + jail[0] + '</td><td>'+ prisonerAnswers[0] + '</td><td>' + results[0]+ '</td>';
;
//Prisoners #2 through the second-to-last prisoner
for(var i = 1; i<jail.length-1; i++){
	document.getElementById("prisoner-"+ (i+1)).innerHTML = '<td>Prisoner #' + (i+1) + '</td><td>' + flag[i-1] + '</td><td>' + jail[i] + '</td><td>' + prisonerAnswers[i] + '</td><td>' + results[i]+ '</td>';
	//document.write(jail[i] + ':' + prisonerAnswers[i] + ":" + "Previous prisoner cued " + flag[i-1] +'<BR>');
}

//Last prisoner doesn't need to negate his answer because there's nobody in front of him, so he can just say his own hat color.
document.getElementById("prisoner-"+ (jail.length)).innerHTML = '<td>Prisoner #'+ jail.length + '</td><td>' + flag[jail.length-2] + '</td><td>' + jail[jail.length-1] + '</td><td>'+ prisonerAnswers[jail.length-1] + '</td><td>' + results[jail.length-1]+ '</td>';

