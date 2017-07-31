#include <UnoWiFiDevEd.h>
#include <pt.h>
#define PT_DELAY(pt, ms, ts)\
  ts = millis();\
  PT_WAIT_WHILE(pt, millis()-ts < (ms));
// PROTO THREAD  
struct pt pt_rgbDetect;

#define CONNECTOR "rest"
#define SERVER_ADDR "158.108.165.223"
char readAddr[] = "/data/AssassinZEED/";

//start color
#define s0 6
#define s1 5
#define s2 10
#define s3 9
#define out 11
#define LED 3
int redOG,greenOG,blueOG,error;
String color,catHead,catTail,catSuit;
//end color

CiaoData data;

void setup() {
  Serial.begin(9600);
  Ciao.begin();
  //start color
  PT_INIT(&pt_rgbDetect);
  pinMode(s0, OUTPUT);  
  pinMode(s1, OUTPUT);  
  pinMode(s2, OUTPUT);  
  pinMode(s3, OUTPUT);  
  pinMode(out, INPUT);   
  digitalWrite(s0, HIGH);  
  digitalWrite(s1, LOW);
  analogWrite(LED, 225);
  //end color
}

void loop(){
  rgbDetect(&pt_rgbDetect);
}

PT_THREAD(rgbDetect(struct pt*pt)){
  static uint32_t ts;
  PT_BEGIN(pt);
  while(1){
    if (error >= 8)
      error = 0;
    scanColor();
    catHead = checkColor();
//    Serial.print("Try......Cat's color: ");
//    Serial.println(catHead);
    PT_DELAY(pt, 1000, ts);
    while(error < 8 && (catHead == "white" || catHead == "black" /*|| catHead == "gray" || catHead == "orange"*/)){
      scanColor();
      catSuit = checkColor();
//      Serial.print("Try......Cat's suit: ");
//      Serial.println(catSuit);
      PT_DELAY(pt, 1000, ts);
      while(error < 8 && (catSuit == "red" || catSuit == "green" || catSuit == "blue")){
        scanColor();
        catTail = checkColor();
//        Serial.print("Try......Cat's tail: ");
//        Serial.println(catTail);
        PT_DELAY(pt, 1000, ts);
        while(error < 8 && catHead == catTail){
//          Serial.print(">>>>>>>>True Cat!!!");
//          Serial.print("\tCat's color: ");
//          Serial.print(catTail);
//          Serial.print("\tCat's suit: ");
//          Serial.println(catSuit);
          sentData("cat",catTail+"-"+catSuit);
          error = 8;
          PT_DELAY(pt, 1000, ts);
        }
        error++;
        PT_DELAY(pt, 1000, ts);
      }
      error++;
      PT_DELAY(pt, 1000, ts);
    }
    PT_DELAY(pt, 1000, ts);
  }
  PT_END(pt);
}

void scanColor(){    
  digitalWrite(s2, LOW);  
  digitalWrite(s3, LOW);  
  redOG = 255 - pulseIn(out, digitalRead(out) == HIGH ? LOW : HIGH);
  digitalWrite(s3, HIGH);  
  blueOG = 255 - pulseIn(out, digitalRead(out) == HIGH ? LOW : HIGH);  
  digitalWrite(s2, HIGH);  
  greenOG = 255 - pulseIn(out, digitalRead(out) == HIGH ? LOW : HIGH);
  if (redOG < 0)
    redOG = 0;
  if (greenOG < 0)
    greenOG = 0;
  if (blueOG < 0)
    blueOG = 0;
  Serial.print("R: ");  
  Serial.print(redOG);  
  Serial.print(" G: ");  
  Serial.print(greenOG);
  Serial.print(" B: ");  
  Serial.println(blueOG);
}

String checkColor(){
  if (redOG <= 50 && greenOG <= 50 && blueOG <= 50)
    return "black";
  else if (redOG >= 210 && greenOG >= 210 && blueOG >= 210)
    return "white";
  /*else {
    float Max = max(max(redOG,greenOG),blueOG);
    float Min = min(min(redOG,greenOG),blueOG);
    float Middle = min(max(redOG,greenOG),blueOG);
    Serial.println(Max);
    Serial.println(Middle);
    Serial.println(Min);
    if (Max-Min <= 50 && Middle <= Max-25 && Middle >= Min+25)
      return "gray";
    else {
      float redH = redOG/255;
      float greenH = greenOG/255;
      float blueH = blueOG/255;
      int rawHue;
      if (Max = redOG)
        rawHue = int((greenH - blueH)/(Max - Min))%6;
      else if (Max = greenOG)
        rawHue = int((blueH - redH)/(Max - Min))+2;
      else if (Max = blueOG)
        rawHue = int((redH - greenH)/(Max - Min))+4;
     int colorHue = 60*rawHue;
      Serial.println(colorHue);
      if ((blueOG > redOG && blueOG > greenOG) && (colorHue <= 240 && colorHue >= 221))
        return "blue";
      else if ((redOG > blueOG && redOG > greenOG) && ((colorHue <= 10 && colorHue >= 0)||(colorHue <= 359 && colorHue >= 355)))
        return "red";
      else if ((greenOG > blueOG && greenOG > blueOG) && (colorHue <= 140 && colorHue >= 81))
        return "green";
      //else if (colorHue <= 40 && colorHue >= 11)
      //  return "orange";
      else
        return "other";
    }
  }*/
  else if (redOG > blueOG && redOG > greenOG && redOG < 210)
    return "red";
  else if (greenOG > blueOG && greenOG > redOG && greenOG < 210)
    return "green";
  else if (blueOG > greenOG && blueOG > redOG && blueOG < 210)
    return "blue";
  else
    return "other";
}

bool sentData(String _name, String value){
  int x=1;
  while(true){
    data = Ciao.write(CONNECTOR, SERVER_ADDR, readAddr+_name+"/set/"+value);
//    Serial.println(data.get(2));
    if (!data.isEmpty())
      return true;
    else
      delay(2000);
    if (x>5)
      return false;
    x++;
  }
}
