////////////////////////////////////////////////////////////
//
// Measure direction of current flow between pins A1 and A2 
//
// (Requires two 1K voltage sensing resistors)
//
////////////////////////////////////////////////////////////

#define A1_R A0  //Pin A0 controls the 1K resistor on A1
#define A2_R A3  //Pin A3 controls the 1K resistor on A2

void setup() {
  Serial.begin(9600);
}

void loop() {

  float V1TO2, V2TO1;

  // FIRST: measure the voltage between A1 to A2
  // Connect A2 to GND through the 1K resistor at A3
  pinMode(A2, INPUT);
  pinMode(A2_R, OUTPUT);   
  digitalWrite(A2_R, 0);
  // Connect A1 directly to 5V
  pinMode(A1_R, INPUT); 
  pinMode(A1, OUTPUT); 
  digitalWrite(A1, 1);
  // Read voltage at A2 
  delay(100);
  V1TO2 = 5-5*((float)analogRead(A2)/1023);
  Serial.print("Voltage difference between A1 and A2: ");
  Serial.print(V1TO2);
  if (V1TO2 < 3)
    Serial.println(" - current is flowing from A1 to A2");
  else 
    Serial.println(" - current is not flowing from A1 to A2");
    
  delay(3000);

  // SECOND: measure the voltage between A2 to A1
  // Connect A2 directly to 5V
  pinMode(A2_R, INPUT); 
  pinMode(A2, OUTPUT); 
  digitalWrite(A2, 1);
  // Connect A1 to GND through the 1K resistor at A0
  pinMode(A1, INPUT);
  pinMode(A1_R, OUTPUT);   
  digitalWrite(A1_R, 0);
  // Read voltage at A1
  delay(100);
  V2TO1 = 5-5*((float)analogRead(A1)/1023);
  Serial.print("Voltage difference between A2 and A1: ");
  Serial.print(V2TO1);
  if (V2TO1 < 3)
    Serial.println(" - current is flowing from A2 to A1");
  else 
    Serial.println(" - current is not flowing from A2 to A1");

  delay(3000);
}
