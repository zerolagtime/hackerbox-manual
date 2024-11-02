// Read Temperature Sensor TMP36GT9Z on Pin A0

void setup() {
  pinMode(A0, INPUT);
  Serial.begin(9600);
}

void loop() {
  int   analogValue = analogRead(A0);

  float volts = analogValue * (5.0 / 1023.0);
  float millivolts = volts * 1000;
  float tempC = (millivolts - 500) / 10;
  float tempF = (tempC * 1.8) + 32;

  Serial.print(tempC);
  Serial.print(" \xC2\xB0"); // degree symbol
  Serial.print("C  ");

  Serial.print(tempF);
  Serial.print(" \xC2\xB0"); // degree symbol
  Serial.println("F");
  
  delay(1500);
}
