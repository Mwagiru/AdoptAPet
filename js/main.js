/*document.getElementById("name");
let btn = document.getElementById("btn");*/
let randomFacts = 
["The SMELL center of a dog's brain is 40 times larger tahn yours.",
"Dogs' ears are pretty impressive",
"Dogs' sense of taste is much less developed",
"Just like fingerprints, no two dog noses are the same",
"Dogs dream like people",
"Dogs are as smart as a two-year old baby",
"Dogs only mate twice a year",
"Tail wagging has its own language",
"Puppies are born blind and deaf",
"Dogs have a sixth sense",
"Dogs only have swweat glands in their paws",
"Your dog's feet might smell like corn",
"Dog Breath is a ctually UNHEALTHY",
"It's not abnormal for dogs to eat feces",
"Dogs pooping has a pattern",
"Dogs get jealous",
"Dogs don't get so touchy-feely",
"Dogs aren't actually color-blind",
"Dogs hating mailmen is nothing personal",
"Your dog responds to your tone",
"A dog's yawn is not quite the same as a human's yawn",
"Dogs don't actually have it out for cats",
"Dogs heat up more quickly than humans",
"Sticking your hand out isn't the best way to introduce yourself to a new dog",
"'DOG YEARS' vary a lot based on breed",
"Trying to be 'DOMINANT' over your dog is not the best approach",
"Dogs sniff butts to learn about each other",
"Petting dogs can lower your blood pressure",
"Dogs have three eyelids",
"A Bloodhound's sense of smell can be used in court",
"A Beatles song has a frequency only dogs can hear",
"Dogs have a sense of time",
"Obesity is their number one health problem",
"Three dogs survived the Titanic",
"The oldest dog lived to be 29"
];
const changeFact = () =>{
    let randFact=Math.floor(Math.random()*(randomFacts.length));
    document.getElementById("display").innerHTML=randomFacts[randFact]
}
//btn.addEventListener('click',changeFact);