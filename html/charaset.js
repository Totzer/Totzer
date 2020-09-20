function charaset(){
  var CON = GetFlTms(1,6,3) * 5;//体力
  var HLT = GetFlTms(1,6,3);//生命力
  var SPD = GetFlTms(1,6,2);//速度
  var PWR = GetFlTms(1,6,4);//肉体力
  var MNT = GetFlTms(1,6,3);//精神力
  var MGP = GetFlTms(1,6,3);//魔力
  var MGS = GetFlTms(1,6,3) * 20;//魔法才
  var SKL = GetFlTms(1,6,3) * 8;//努力値
  var INT = GetFlTms(1,6,3);//知性
  var APP = GetFlTms(1,6,3);//容姿
  document.getElementById("con").innerHTML = CON;
  document.getElementById("hlt").innerHTML = HLT;
  document.getElementById("spd").innerHTML = SPD;
  document.getElementById("pwr").innerHTML = PWR;
  document.getElementById("mnt").innerHTML = MNT;
  document.getElementById("mgp").innerHTML = MGP;
  document.getElementById("mgs").innerHTML = MGS;
  document.getElementById("skl").innerHTML = SKL;
  document.getElementById("int").innerHTML = INT;
  document.getElementById("app").innerHTML = APP;
}
//偏る

let Random =new Array(1,6,5,9,3,8,4,1,5,5,6,3,6,5,7,511,6,4,3,1,5,5,4,54,31,6,6,4,1,43,6,32,4,5,65,43,54,31,54,6,6,5,25,0,431,5,5,65,652,0,42,0,548,32,5,0,0,8,5,753,0,543,0,5,7,7,4,0,0,541,41,3,1,1,2,4,3,2,1,1,3,34,97,85,9,9,8,6,0,0,58,8,0,7,6,0,58,0,765,0,3,5,5,0,43,0,54,13,5,0,4,6,54,543,41,0,56,4,4,54,33,5,65,46,54,0,654,0,654,0,54,0,432,54,643,532,66,52,1,5,65,5,565,432,51,65,46,6,52)







var FlTm = 0;
function frametime(){
  FlTm++;
  if(FlTm>2963) FlTm = 1;
  //2963は82番目のソフィー・ジェルマン素数
  //安全数としては49番目
  //ソフィー・ジェルマン素数かつ安全数である整数の中では15番目
}

function GetFlTm(Min,Max){
  Max = Max - Min + 1;
  var Return = Min + FlTm % Max;
  FlTm += Random[(Min+FlTm+Max)%130];
  return Return;
}

function GetFlTms(Min,Max,Count){
  Max = Max - Min + 1;
  var Return = 0;
  for(i=1;i<=Count;i++){
    Return += Min + FlTm % Max;
    FlTm += Random[(Min+FlTm+Max)%130];
  }
  return Return;
}

var Status =new Array(0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15,-16,-17,-18,-19)
var StatusName =new Array(0,"recon","rehlt",3,4,5,"remgp")

var NormalRolls =new Array(0,25,5,20,1,15,10,10,10,10,5,5,5,5,5,5,0,5,1,1,1,1,1,1,1,0,0,0,0)
var NormalRollBases =new Array(0,25,5,20,1,15,10,10,10,10,5,5,5,5,5,5,0,5,1,1,1,1,1,1,1)
var NormalRollNames =new Array(0,"firstsport","othersports","firstmajor","othermajors","firsttool","othertools","persuade","create","operation","heat","chill","optict","nature","plain","spirit",0,"curse","heatx","chillx","optictx","naturex","plainx","spiritx","cursex")

var Skills =new Array(0,"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",16,"p","q","r","s","t","u","v","w",4,"x","y","z")

var WriteBox =new Array(0,"job","firstsportname","firstmajorname","firsttoolname")

var Setted = 0;

function writedice(Min,Max,Count,Mlt,TRG){
  var L = GetFlTms(Min,Max,Count) * Mlt;
  Status[TRG] = L;
  OutputBaseRoll();
  if(TRG==1) document.getElementById("con").innerHTML = L;
  if(TRG==1) document.getElementById("recon").innerHTML = L;
  if(TRG==1) Status[14] = L;
  if(TRG==2) document.getElementById("hlt").innerHTML = L;
  if(TRG==2) document.getElementById("rehlt").innerHTML = L;
  if(TRG==2) Status[15] = L;
  if(TRG==3) document.getElementById("spd").innerHTML = L;
  if(TRG==4) document.getElementById("pwr").innerHTML = L;
  if(TRG==5) document.getElementById("mnt").innerHTML = L;
  if(TRG==6) document.getElementById("mgp").innerHTML = L;
  if(TRG==6) document.getElementById("remgp").innerHTML = L;
  if(TRG==6) Status[19] = L;
  if(TRG==7) document.getElementById("mgs").innerHTML = L;
  if(TRG==7) NormalRolls[16] = L;
  if(TRG==7) document.getElementById("remgs").innerHTML = L;
  if(TRG==7) document.getElementById("reremgs").innerHTML = L;
  if(TRG==8) Status[8] += 48;
  if(TRG==8) L += 48;
  if(TRG==8) document.getElementById("skl").innerHTML = L;
  if(TRG==8) document.getElementById("reskl").innerHTML = L;
  if(TRG==8) document.getElementById("rereskl").innerHTML = L;
  if(TRG==8) document.getElementById("rerereskl").innerHTML = L;
  if(TRG==8) NormalRolls[0] = Status[8];
  if(TRG==9) document.getElementById("int").innerHTML = L;
  if(TRG==10) document.getElementById("app").innerHTML = L;
}

function OutputBaseRoll(){
  Status[11] = Status[4] * 4;
  Status[12] = Status[10] * 5;
  Status[13] = Status[9] * 5;
  if(Status[11]>=1) document.getElementById("bri").innerHTML = Status[11];
  if(Status[12]>=1) document.getElementById("brii").innerHTML = Status[12];
  if(Status[13]>=1) document.getElementById("briii").innerHTML = Status[13];
  if(Status[11]>=1) NormalRolls[26] = Status[11];
  if(Status[11]>=1) NormalRolls[27] = Status[12];
  if(Status[11]>=1) NormalRolls[28] = Status[13];
}

function writetext(box){
  var L = window.prompt("書き込んで決めてください","KPに分かるように書いてね");
  if(L==null) L = "キャンセルしないで";
  if(L=="") L = "ちゃんと書き込んで";
  document.getElementById(WriteBox[box]).innerHTML = L;
}

function chnr(TRG,Value,Cost=1){
  if(Setted==1) return 0;
  var Result = NormalRolls[TRG] + Value;
  if(Result>=NormalRollBases[TRG]&&Result<=99&&NormalRolls[0]>=Value*Cost&&Status[8]>=NormalRolls[0]-Value*Cost){
    document.getElementById(NormalRollNames[TRG]).innerHTML = Result;
    NormalRolls[TRG] = Result;
    NormalRolls[0] -= Value*Cost;
    document.getElementById("reskl").innerHTML = NormalRolls[0];
    document.getElementById("rereskl").innerHTML = NormalRolls[0];
    document.getElementById("rerereskl").innerHTML = NormalRolls[0];
  }
}

function chmr(TRG,Value,Cost=1){
  if(Setted==1) return 0;
  var Result = NormalRolls[TRG] + Value;
  if(Result>=NormalRollBases[TRG]&&Result<=99&&NormalRolls[16]>=Value*Cost&&Status[7]>=NormalRolls[16]-Value*Cost){
    document.getElementById(NormalRollNames[TRG]).innerHTML = Result;
    NormalRolls[TRG] = Result;
    NormalRolls[16] -= Value*Cost;
    document.getElementById("remgs").innerHTML = NormalRolls[16];
    document.getElementById("reremgs").innerHTML = NormalRolls[16];
  }
}

function chst(TRG,Value=-1,InText=0){
  var Result = Status[TRG+13] + Value;
  if(Value==0&&InText==0) Result = Status[TRG]
  if(Result<=Status[TRG]&&Result>=0){
    document.getElementById(StatusName[TRG]).innerHTML = Result;
    Status[TRG+13] = Result;
  }
}

function healthset(){
  const L = document.form1.damage.value * -1;
  document.form1.damage.value = "";
  chst(2,L,1);
}

function skillroll(Skill){
  var L = GetFlTm(1,100);
  if(L<=NormalRolls[Skill]){
    if(L<=5) L = '<font color="#ffb060">▲' + L + '▲</font>';
    else L = '<font color="#ffb060">' + L + '</font>';
  }
  else{
    if(L>=96) L = '<font color="#b060e0">▼' + L + '▼</font>';
    else L = '<font color="#b060e0">' + L + '</font>';
  }
  document.getElementById(Skills[Skill]).innerHTML = L;
}

function damage(){
  var L = GetFlTms(1,3,4) + Status[5];
  document.getElementById("damage").innerHTML = L;
}

function damagex(){
  var L = GetFlTms(1,10,8) + Status[5] * 4;
  document.getElementById("damagex").innerHTML = L;
}




setInterval("frametime()",1)