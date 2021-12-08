export const Pokedex: {[k: string]: ModdedSpeciesData} = {
	tapukoko: {
		inherit: true,
		abilities: {0: "Electric Surge"},
		otherFormes: ["Tapu Koko-Kinolau"],
		formeOrder: ["Tapu Koko", "Tapu Koko-Kinolau"],
	},
	tapukokokinolau: {
		num: 785,
		name: "Tapu Koko-Kinolau",
		baseSpecies: "Tapu Koko",
		forme: "Kinolau",
		types: ["Electric", "Flying"],
		gender: "N",
		baseStats: {hp: 70, atk: 110, def: 75, spa: 90, spd: 75, spe: 150},
		abilities: {0: "Tough Claws"},
		heightm: 1.8,
		weightkg: 20.5,
		color: "Yellow",
		eggGroups: ["Undiscovered"],
		changesFrom: "Tapu Koko",
	},
	tapulele: {
		inherit: true,
		abilities: {0: "Psychic Surge"},
		otherFormes: ["Tapu Lele-Kinolau"],
		formeOrder: ["Tapu Lele", "Tapu Lele-Kinolau"],
	},
	tapulelekinolau: {
		num: 786,
		name: "Tapu Lele-Kinolau",
		baseSpecies: "Tapu Lele",
		forme: "Kinolau",
		types: ["Psychic", "Bug"],
		gender: "N",
		baseStats: {hp: 70, atk: 115, def: 130, spa: 75, spd: 85, spe: 95},
		abilities: {0: "Triage"},
		heightm: 1.2,
		weightkg: 18.6,
		color: "Pink",
		eggGroups: ["Undiscovered"],
		changesFrom: "Tapu Lele",
	},
	tapubulu: {
		inherit: true,
		abilities: {0: "Grassy Surge"},
		otherFormes: ["Tapu Bulu-Kinolau"],
		formeOrder: ["Tapu Bulu", "Tapu Bulu-Kinolau"],
	},
	tapubulukinolau: {
		num: 787,
		name: "Tapu Bulu-Kinolau",
		baseSpecies: "Tapu Bulu",
		forme: "Kinolau",
		types: ["Grass", "Rock"],
		gender: "N",
		baseStats: {hp: 90, atk: 135, def: 70, spa: 85, spd: 95, spe: 95},
		abilities: {0: "Sand Stream"},
		heightm: 1.9,
		weightkg: 45.5,
		color: "Red",
		eggGroups: ["Undiscovered"],
		changesFrom: "Tapu Bulu",
	},
	tapufini: {
		inherit: true,
		abilities: {0: "Misty Surge"},
		otherFormes: ["Tapu Fini-Kinolau"],
		formeOrder: ["Tapu Fini", "Tapu Fini-Kinolau"],
	},
	tapufinikinolau: {
		num: 788,
		name: "Tapu Fini-Kinolau",
		baseSpecies: "Tapu Fini",
		forme: "Kinolau",
		types: ["Water", "Steel"],
		gender: "N",
		baseStats: {hp: 70, atk: 75, def: 105, spa: 105, spd: 140, spe: 75},
		abilities: {0: "Swift Swim"},
		heightm: 1.3,
		weightkg: 21.2,
		color: "Purple",
		eggGroups: ["Undiscovered"],
		changesFrom: "Tapu Fini",
	},
	plubia: {
		num: -1001,
		name: "Plubia",
		types: ["Normal", "Ghost"],
		gender: "N",
		baseStats: {hp: 103, atk: 113, def: 41, spa: 127, spd: 97, spe: 89},
		abilities: {0: "Beast Boost"},
		heightm: 0.4,
		weightkg: 32.0,
		color: "Brown",
		eggGroups: ["Undiscovered"],
	},
	snoxin: {
		num: -1002,
		name: "Snoxin",
		types: ["Ice", "Poison"],
		gender: "N",
		baseStats: {hp: 107, atk: 53, def: 113, spa: 53, spd: 113, spe: 131},
		abilities: {0: "Beast Boost"},
		heightm: 0.1,
		weightkg: 0.7,
		color: "White",
		eggGroups: ["Undiscovered"],
	},
	komodond: {
		num: -1003,
		name: "Komodond",
		types: ["Dragon", "Water"],
		gender: "N",
		baseStats: {hp: 79, atk: 137, def: 109, spa: 131, spd: 103, spe: 11},
		abilities: {0: "Beast Boost"},
		heightm: 3.0,
		weightkg: 78.2,
		color: "Blue",
		eggGroups: ["Undiscovered"],
	},
	anglevolt: {
		num: -1004,
		name: "Anglevolt",
		types: ["Electric", "Water"],
		gender: "N",
		baseStats: {hp: 79, atk: 131, def: 83, spa: 73, spd: 107, spe: 97},
		abilities: {0: "Beast Boost"},
		heightm: 1.3,
		weightkg: 81.3,
		color: "Yellow",
		eggGroups: ["Undiscovered"],
	},
	thundigeist: {
		num: -1005,
		name: "Thundigeist",
		types: ["Electric", "Ghost"],
		gender: "N",
		baseStats: {hp: 73, atk: 83, def: 61, spa: 97, spd: 107, spe: 149},
		abilities: {0: "Beast Boost"},
		heightm: 1.6,
		weightkg: 25.5,
		color: "Yellow",
		eggGroups: ["Undiscovered"],
	},
	forsnaken: {
		num: -1006,
		name: "Forsnaken",
		types: ["Poison", "Normal"],
		gender: "N",
		baseStats: {hp: 137, atk: 109, def: 131, spa: 101, spd: 61, spe: 31},
		abilities: {0: "Beast Boost"},
		heightm: 6.7,
		weightkg: 66.6,
		color: "Black",
		eggGroups: ["Undiscovered"],
	},
	arachsoil: {
		num: -1007,
		name: "Arachsoil",
		types: ["Ground", "Bug"],
		gender: "N",
		baseStats: {hp: 107, atk: 73, def: 97, spa: 109, spd: 113, spe: 71},
		abilities: {0: "Beast Boost"},
		heightm: 8.8,
		weightkg: 88.8,
		color: "Black",
		eggGroups: ["Undiscovered"],
	},
	chindle: {
		num: -1008,
		name: "Chindle",
		types: ["Flying"],
		baseStats: {hp: 65, atk: 80, def: 35, spa: 20, spd: 20, spe: 80},
		abilities: {0: "Guts", H: "Reckless"},
		heightm: 0.4,
		weightkg: 10,
		color: "Red",
		evos: ["Chaldera"],
		eggGroups: ["Flying"],
	},
	chaldera: {
		num: -1009,
		name: "Chaldera",
		types: ["Flying", "Fire"],
		baseStats: {hp: 85, atk: 95, def: 55, spa: 40, spd: 40, spe: 105},
		abilities: {0: "Guts", H: "Reckless"},
		heightm: 0.8,
		weightkg: 18,
		color: "Red",
		prevo: "Chindle",
		evoLevel: 40, // I was looking at the movepool for any hint and I just cannot guess the levels are completely random
		evos: ["Flarenix"],
		eggGroups: ["Flying"],
	},
	flarenix: {
		num: -1010,
		name: "Flarenix",
		types: ["Flying", "Fire"],
		baseStats: {hp: 100, atk: 95, def: 90, spa: 110, spd: 110, spe: 95},
		abilities: {0: "Magic Guard", H: "Wonder Skin"},
		heightm: 2.4,
		weightkg: 48,
		color: "Red",
		prevo: "Chaldera",
		evoLevel: 55, // also a random guess
		eggGroups: ["Flying"],
	},
	firmlio: {
		num: -1011,
		name: "Firmlio",
		types: ["Steel"],
		baseStats: {hp: 45, atk: 80, def: 55, spa: 35, spd: 55, spe: 65},
		abilities: {0: "Sand Force", 1: "Inner Focus", H: "Sheer Force"},
		heightm: 0.5,
		weightkg: 9,
		color: "Grey",
		evos: ["Irotyke"],
		eggGroups: ["Field", "Human-Like"],
	},
	irotyke: {
		num: -1012,
		name: "Irotyke",
		types: ["Steel", "Fighting"],
		baseStats: {hp: 60, atk: 100, def: 75, spa: 45, spd: 70, spe: 85},
		abilities: {0: "Sand Force", 1: "Inner Focus", H: "Sheer Force"},
		heightm: 0.8,
		weightkg: 15.7,
		color: "Grey",
		prevo: "Firmlio",
		evoLevel: 25,
		evos: ["Coyotalloy"],
		eggGroups: ["Field", "Human-Like"],
	},
	coyotalloy: {
		num: -1013,
		name: "Coyotalloy",
		types: ["Steel", "Fighting"],
		baseStats: {hp: 80, atk: 125, def: 95, spa: 50, spd: 80, spe: 115},
		abilities: {0: "Sand Force", 1: "Inner Focus", H: "Sheer Force"},
		heightm: 1.1,
		weightkg: 20,
		color: "Grey",
		prevo: "Irotyke",
		evoLevel: 45,
		eggGroups: ["Field", "Human-Like"],
	},
	tikilohi: {
		num: -1014,
		name: "Tikilohi",
		types: ["Ghost", "Rock"],
		baseStats: {hp: 80, atk: 120, def: 110, spa: 65, spd: 100, spe: 30},
		abilities: {0: "Cursed Body", 1: "Unnerve"},
		heightm: 1.5,
		weightkg: 200,
		color: "Brown",
		eggGroups: ["Mineral"],
	},
	sunkern: {
		inherit: true,
		otherFormes: ["Sunkern-Alola"],
		formeOrder: ["Sunkern", "Sunkern-Alola"],
	},
	sunkernalola: {
		num: 191,
		name: "Sunkern-Alola",
		baseSpecies: "Sunkern",
		forme: "Alola",
		types: ["Ground"],
		baseStats: {hp: 50, atk: 50, def: 50, spa: 50, spd: 50, spe: 50},
		abilities: {0: "Sand Veil", 1: "Dry Skin", H: "Sifting"},
		heightm: 0.3,
		weightkg: 1.8,
		color: "Yellow",
		evos: ["Sanddern"],
		eggGroups: ["Grass"],
	},
	sanddern: {
		num: -1015,
		name: "Sanddern",
		types: ["Ground", "Water"],
		baseStats: {hp: 90, atk: 100, def: 80, spa: 66, spd: 80, spe: 96},
		abilities: {0: "Sand Veil", 1: "Dry Skin", H: "Sifting"},
		heightm: 0.8,
		weightkg: 8.5,
		color: "Yellow",
		prevo: "Sunkern-Alola",
		evoType: "useItem",
		evoItem: "Sun Stone",
		eggGroups: ["Grass"],
	},
	kubfu: {
		num: 891,
		name: "Kubfu",
		types: ["Fighting"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 60, atk: 90, def: 60, spa: 53, spd: 50, spe: 72},
		abilities: {0: "Inner Focus"},
		heightm: 0.6,
		weightkg: 12,
		color: "Gray",
		evos: ["Urshifu", "Urshifu-Rapid-Strike", "Urshifu-Alola", "Urshifu-Rapid-Strike-Alola"],
		eggGroups: ["Undiscovered"],
	},
	urshifu: {
		inherit: true,
		otherFormes: ["Urshifu-Rapid-Strike", "Urshifu-Alola", "Urshifu-Rapid-Strike-Alola"],
		formeOrder: ["Urshifu", "Urshifu-Alola", "Urshifu-Rapid-Strike", "Urshifu-Rapid-Strike-Alola"],
	},
	urshifurapidstrike: {
		inherit: true,
	},
	urshifualola: {
		num: 892,
		name: "Urshifu-Alola",
		baseSpecies: "Urshifu",
		forme: "Alola",
		types: ["Fighting", "Steel"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 100, atk: 130, def: 100, spa: 63, spd: 60, spe: 97},
		abilities: {0: "Zero Gravity"},
		heightm: 1.9,
		weightkg: 105,
		color: "Gray",
		prevo: "Kubfu",
		eggGroups: ["Undiscovered"],
	},
	urshifurapidstrikealola: {
		num: 892,
		name: "Urshifu-Rapid-Strike-Alola",
		baseSpecies: "Urshifu-Rapid-Strike",
		forme: "Alola",
		types: ["Fighting", "Ghost"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 100, atk: 130, def: 100, spa: 63, spd: 60, spe: 97},
		abilities: {0: "Zero Gravity"},
		heightm: 1.9,
		weightkg: 105,
		color: "Gray",
		prevo: "Kubfu",
		eggGroups: ["Undiscovered"],
	},
	tynamo: {
		inherit: true,
		otherFormes: ["Tynamo-Alola"],
		formeOrder: ["Tynamo", "Tynamo-Alola"],
	},
	tynamoalola: {
		num: 602,
		name: "Tynamo-Alola",
		baseSpecies: "Tynamo",
		forme: "Alola",
		types: ["Electric", "Water"],
		baseStats: {hp: 45, atk: 45, def: 40, spa: 45, spd: 40, spe: 60},
		abilities: {0: "Magic Guard"},
		heightm: 0.2,
		weightkg: 0.3,
		color: "White",
		evos: ["Eelektrik-Alola"],
		eggGroups: ["Amorphous"],
	},
	eelektrik: {
		inherit: true,
		otherFormes: ["Eelektrik-Alola"],
		formeOrder: ["Eelektrik", "Eelektrik-Alola"],
	},
	eelektrikalola: {
		num: 603,
		name: "Eelektrik-Alola",
		baseSpecies: "Eelektrik",
		forme: "Alola",
		types: ["Electric", "Water"],
		baseStats: {hp: 80, atk: 65, def: 60, spa: 65, spd: 60, spe: 75},
		abilities: {0: "Magic Guard"},
		heightm: 1.2,
		weightkg: 22,
		color: "Blue",
		prevo: "Tynamo-Alola",
		evos: ["Eelektross-Alola"],
		eggGroups: ["Amorphous"],
	},
	eelektross: {
		inherit: true,
		otherFormes: ["Eelektross-Alola"],
		formeOrder: ["Eelektross", "Eelektross-Alola"],
	},
	eelektrossalola: {
		num: 604,
		name: "Eelektross-Alola",
		baseSpecies: "Eelektross",
		forme: "Alola",
		types: ["Electric", "Water"],
		baseStats: {hp: 100, atk: 85, def: 70, spa: 85, spd: 70, spe: 105},
		abilities: {0: "Magic Guard"},
		heightm: 2.1,
		weightkg: 80.5,
		color: "Blue",
		prevo: "Eelektrik-Alola",
		eggGroups: ["Amorphous"],
	},
	onix: {
		inherit: true,
		otherFormes: ["Onix-Alola"],
		formeOrder: ["Onix", "Onix-Alola"],
	},
	onixalola: {
		num: 95,
		name: "Onix-Alola",
		baseSpecies: "Onix",
		forme: "Alola",
		types: ["Rock", "Ground"],
		baseStats: {hp: 35, atk: 45, def: 130, spa: 30, spd: 45, spe: 90},
		abilities: {0: "Rock Head", 1: "Sturdy", H: "Flash Fire"},
		heightm: 8.8,
		weightkg: 210,
		color: "Gray",
		evos: ["Steelix-Alola"],
		eggGroups: ["Mineral"],
	},
	steelix: {
		inherit: true,
		otherFormes: ["Steelix-Mega", "Steelix-Alola", "Steelix-Alola-Mega"],
		formeOrder: ["Steelix", "Steelix-Mega", "Steelix-Alola", "Steelix-Alola-Mega"],
	},
	steelixalola: {
		num: 208,
		name: "Steelix-Alola",
		baseSpecies: "Steelix",
		forme: "Alola",
		types: ["Fire", "Ground"],
		baseStats: {hp: 75, atk: 85, def: 110, spa: 55, spd: 65, spe: 120},
		abilities: {0: "Rock Head", 1: "Sturdy", H: "Flash Fire"},
		heightm: 9.2,
		weightkg: 400,
		color: "Gray",
		prevo: "Onix-Alola",
		eggGroups: ["Mineral"],
		otherFormes: ["Steelix-Alola-Mega"],
		formeOrder: ["Steelix-Alola", "Steelix-Alola-Mega"],
	},
	steelixalolamega: {
		num: 208,
		name: "Steelix-Alola-Mega",
		baseSpecies: "Steelix-Alola",
		forme: "Mega",
		types: ["Fire", "Ground"],
		baseStats: {hp: 75, atk: 105, def: 155, spa: 75, spd: 110, spe: 90},
		abilities: {0: "Flame Body"},
		heightm: 10.5,
		weightkg: 740,
		color: "Gray",
		eggGroups: ["Mineral"],
		requiredItem: "Steelixite",
	},
	shelmet: {
		inherit: true,
		otherFormes: ["Shelmet-Alola"],
		formeOrder: ["Shelmet", "Shelmet-Alola"],
	},
	shelmetalola: {
		num: 616,
		name: "Shelmet-Alola",
		baseSpecies: "Shelmet",
		forme: "Alola",
		types: ["Bug", "Rock"],
		baseStats: {hp: 30, atk: 35, def: 40, spa: 85, spd: 45, spe: 70},
		abilities: {0: "Joust"},
		heightm: 0.4,
		weightkg: 7.7,
		color: "Red",
		evos: ["Accelgor-Alola"],
		eggGroups: ["Bug"],
	},
	accelgor: {
		inherit: true,
		otherFormes: ["Accelgor-Alola"],
		formeOrder: ["Accelgor", "Accelgor-Alola"],
	},
	accelgoralola: {
		num: 617,
		name: "Accelgor-Alola",
		baseSpecies: "Accelgor",
		forme: "Alola",
		types: ["Bug", "Rock"],
		baseStats: {hp: 80, atk: 70, def: 40, spa: 100, spd: 60, spe: 145},
		abilities: {0: "Hidden Passage"},
		heightm: 0.8,
		weightkg: 25.3,
		color: "Red",
		prevo: "Shelmet-Alola",
		evos: ["Shinobug"],
		eggGroups: ["Bug"],
	},
	shinobug: {
		num: -1016,
		name: "Shinobug",
		types: ["Bug", "Rock"],
		baseStats: {hp: 100, atk: 85, def: 45, spa: 115, spd: 65, spe: 160},
		abilities: {0: "Hidden Passage"},
		heightm: 0.8,
		weightkg: 25.3,
		color: "Red",
		prevo: "Accelgor-Alola",
		eggGroups: ["Bug"],
	},
	falinks: {
		inherit: true,
		otherFormes: ["Falinks-Alola"],
		formeOrder: ["Falinks", "Falinks-Alola"],
	},
	falinksalola: {
		num: 870,
		name: "Falinks-Alola",
		baseSpecies: "Falinks",
		forme: "Alola",
		types: ["Fighting", "Ghost"],
		gender: "N",
		baseStats: {hp: 65, atk: 135, def: 70, spa: 60, spd: 70, spe: 70},
		abilities: {0: "Technician"},
		heightm: 3,
		weightkg: 62,
		color: "Yellow",
		eggGroups: ["Fairy", "Mineral"],
	},
	feebas: {
		inherit: true,
		otherFormes: ["Feebas-Alola"],
		formeOrder: ["Feebas", "Feebas-Alola"],
	},
	feebasalola: {
		num: 349,
		name: "Feebas-Alola",
		baseSpecies: "Feebas",
		forme: "Alola",
		types: ["Poison", "Electric"],
		baseStats: {hp: 20, atk: 15, def: 10, spa: 20, spd: 55, spe: 80},
		abilities: {0: "Plus", 1: "Minus", H: "Adaptability"},
		heightm: 0.6,
		weightkg: 7.4,
		color: "Brown",
		evos: ["Milotic-Alola"],
		eggGroups: ["Water 1", "Dragon"],
	},
	milotic: {
		inherit: true,
		otherFormes: ["Milotic-Alola"],
		formeOrder: ["Milotic", "Milotic-Alola"],
	},
	miloticalola: {
		num: 350,
		name: "Milotic-Alola",
		baseSpecies: "Milotic",
		forme: "Alola",
		types: ["Poison", "Electric"],
		baseStats: {hp: 95, atk: 60, def: 79, spa: 125, spd: 100, spe: 81},
		abilities: {0: "Levitate"},
		heightm: 6.2,
		weightkg: 162,
		color: "Pink",
		prevo: "Feebas-Alola",
		eggGroups: ["Water 1", "Dragon"],
	},
	stethaaina: {
		num: -1017,
		name: "Stethaaina",
		types: ["Water", "Fire"],
		baseStats: {hp: 115, atk: 125, def: 105, spa: 60, spd: 85, spe: 80},
		abilities: {0: "Rough Skin", H: "Steelworker"},
		heightm: 1,
		weightkg: 40,
		color: "red",
		eggGroups: ["Undiscovered"],
	},
};