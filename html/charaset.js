function charaset(){
  var CON = GetFlTms(1,6,3) * 5;//�̗�
  var HLT = GetFlTms(1,6,3);//������
  var SPD = GetFlTms(1,6,2);//���x
  var PWR = GetFlTms(1,6,4);//���̗�
  var MNT = GetFlTms(1,6,3);//���_��
  var MGP = GetFlTms(1,6,3);//����
  var MGS = GetFlTms(1,6,3) * 20;//���@��
  var SKL = GetFlTms(1,6,3) * 8;//�w�͒l
  var INT = GetFlTms(1,6,3);//�m��
  var APP = GetFlTms(1,6,3);//�e�p
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
//�΂�

let Random =new Array(1,6,5,9,3,8,4,1,5,5,6,3,6,5,7,511,6,4,3,1,5,5,4,54,31,6,6,4,1,43,6,32,4,5,65,43,54,31,54,6,6,5,25,0,431,5,5,65,652,0,42,0,548,32,5,0,0,8,5,753,0,543,0,5,7,7,4,0,0,541,41,3,1,1,2,4,3,2,1,1,3,34,97,85,9,9,8,6,0,0,58,8,0,7,6,0,58,0,765,0,3,5,5,0,43,0,54,13,5,0,4,6,54,543,41,0,56,4,4,54,33,5,65,46,54,0,654,0,654,0,54,0,432,54,643,532,66,52,1,5,65,5,565,432,51,65,46,6,52)







var FlTm = 0;
function frametime(){
  FlTm++;
  if(FlTm>2963) FlTm = 1;
  //2963��82�Ԗڂ̃\�t�B�[�E�W�F���}���f��
  //���S���Ƃ��Ă�49�Ԗ�
  //�\�t�B�[�E�W�F���}���f�������S���ł��鐮���̒��ł�15�Ԗ�
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

var Status =new Array(0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13)
var NormalRolls =new Array(0,25,5,20,1,15,10,10,10,10,-10)
var NormalRollBases =new Array(0,25,5,20,1,15,10,10,10,10,-10)
var NormalRollNames =new Array(0,"firstsport","othersports","firstmajor","othermajors","firsttool","othertools","persuade","create","operation",-10)
var WriteBox =new Array(0,"job","firstsportname","firstmajorname","firsttoolname")
function writedice(Min,Max,Count,Mlt,TRG){
  var L = GetFlTms(Min,Max,Count) * Mlt;
  Status[TRG] = L;
  OutputBaseRoll();
  if(TRG==1) document.getElementById("con").innerHTML = L;
  if(TRG==2) document.getElementById("hlt").innerHTML = L;
  if(TRG==3) document.getElementById("spd").innerHTML = L;
  if(TRG==4) document.getElementById("pwr").innerHTML = L;
  if(TRG==5) document.getElementById("mnt").innerHTML = L;
  if(TRG==6) document.getElementById("mgp").innerHTML = L;
  if(TRG==7) document.getElementById("mgs").innerHTML = L;
  if(TRG==8) Status[8] += 48;
  if(TRG==8) L += 48;
  if(TRG==8) document.getElementById("skl").innerHTML = L;
  if(TRG==8) document.getElementById("reskl").innerHTML = L;
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
}

function writetext(box){
  var L = window.prompt("��������Ō��߂Ă�������","KP�ɕ�����悤�ɏ����Ă�");
  document.getElementById(WriteBox[box]).innerHTML = L;
}

function chnr(TRG,Value){
  var Result = NormalRolls[TRG] + Value;
  if(Result>=NormalRollBases[TRG]&Result<=99&NormalRolls[0]>=Value){
    document.getElementById(NormalRollNames[TRG]).innerHTML = Result;
    NormalRolls[TRG] = Result;
    NormalRolls[0] -= Value;
    document.getElementById("reskl").innerHTML = NormalRolls[0];
  }
}


setInterval("frametime()",1)