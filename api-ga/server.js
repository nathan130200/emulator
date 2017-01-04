const express     = require('express');
const app         = express();
const bodyParser  = require('body-parser');
const morgan      = require('morgan');
const mongoose    = require('mongoose');
const randomid    = require('./app/lib/randomid');

const jwt         = require('jsonwebtoken'); // used to create, sign, and verify tokens;
const config      = require('./config'); // get our config file;
const User        = require('./app/models/user'); // get our mongoose model;
const Profile     = require('./app/models/profile');
const Friends     = require('./app/models/friends');
const Missions    = require('./app/models/missions');
const GameRoom    = require('./app/models/gameroom');

// Fix mongodb connect.
mongoose.Promise = global.Promise;
mongoose.connect(config.database); 

// MongoDB save data routes

let profileid = randomid(6);
let username = process.argv[2];
let nickname = process.argv[2];
let password = process.argv[4];
let experience = process.argv[5];

// CRIAR UM NOVO USUÁRIO

let newUserGamer = new User({
    userid: randomid(5),
    profileid: profileid,
    username: username,
    nickname: nickname,
    affiliateid: 'CYT000000000',
    password: password,
    email: 'admin@warface.com',
    lang: 'pt-br'
});
  
newUserGamer.save(function(err) {
	console.log('User added.');
});

let profileadd = new Profile({
  profileid: profileid, // profileid user
  username: username,
  nickname: nickname,
  gender: 'male',
  height: '1',
  head: 'default_head_4',
  current_class: '0',
  experience: experience,
//[old]experience: '264400'
  pvp_rating_points: '0',
  banner_badge: '4294967295',
  banner_mark: '4294967295',
  banner_stripe: '4294967295',
  game_money: '24000',
  cry_money: '13000',
  crown_money: '13000',
  items: [{
    id: '1', 
    name: 'mk01', 
    attached_to: '0',
    config: 'dm=0;material=default;pocket_index=32768', 
    slot: '1', 
    equipped: '8', 
    default: '1', 
    permanent: '0', 
    expired_confirmed: '0', 
    buy_time_utc: '0', 
    expiration_time_utc: '0', 
    seconds_left: '0'
  }]
});

profileadd.save(function(err) {
	console.log(profileadd);
});

// CRIAR NOVA MISSAO DE COOP


let newMissionGame =  new Missions({
  
  mission_key: '27b68559-cfbe-4efd-ba09-f4240279fb99',
  no_teams: '1',
  name: '@na_mission_path01_1',
  setting: 'africa/africa_base',
  mode: 'pve',
  mode_name: '@PvE_game_mode_desc',
  mode_icon: 'pve_icon',
  description: '@mission_desc_africa_path',
  image: 'mapImgAfrica_training',
  difficulty: 'easy',
  type: 'trainingmission',
  time_of_day: '9:06',
    
  objectives: {
    factor: '1',
    obj: [{
      id: '0',
      type: 'primary'
    },{
      id: '5',
      type: 'secondary'
    },{
      id: '16',
      type: 'secondary'
    }]
  },

  crownrewardsthresholds: {
    totalperformance: {
      bronze: '48665',
      silver: '77875',
      gold: '122510'
    },
    time: {
      bronze: '4192831',
      silver: '4193402',
      gold: '4193543'
    }
  },
    
  crownrewards: {
    bronze: '2',
    silver: '4',
    gold: '6'
  }

});

newMissionGame.save(function(err) {
	console.log('Added new mission.');
});

// survival/snow_fortress_base
let snowMissionSurvival02 = new Missions({
	mission_key: '1b3fcd0c-d624-41ae-b539-17564b921e70',
	no_teams: '1',
	name: '@snow_mission_survival_02',
	setting: 'survival/snow_fortress_base',
	mode: 'pve',
	mode_name: '@PvE_game_mode_desc',
	mode_icon: 'pve_icon',
	description: '@snow_survival_mission_desc_02',
	image: 'mapImgSurvivalSnow2',
	difficulty: 'survival',
	type: 'campaignsection2',
	time_of_day: '14:20',
	objectives:{
		factor: '1',
		obj: [
			{
				id: '0',
				type: 'primary'
			}
		]
	}
});

snowMissionSurvival02.save(function(err){
	console.log('Missão: "survival/snow_fortress_base" adicionado!');
});


// zombie/zombie_base
let zombieBase = new Missions({
	mission_key: 'd3f6d949-60d5-4ef5-ae26-f4fce1421630',
	no_teams: '1',
	name: '@ct_mission_zombie',
	setting: 'zombie/zombie_base',
	mode: 'pve',
	mode_name: '@PvE_game_mode_desc',
	mode_icon: 'pve_icon',
	description: '@zombie_mission_desc',
	image: 'mapImgZSD1j_h',
	difficulty: 'hard',
	type: 'zombiehard',
	time_of_day: '9:06',
	objectives: {
		factor: '1',
		obj:[
			{ id: '0', type: 'primary' }
		]
	}
}).save(function(err){
	console.log('Missão: "zombie/zombie_base" adicionado!');
});
