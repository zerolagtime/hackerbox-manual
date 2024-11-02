void setup() {
  pinMode(A0, INPUT);
  Serial.begin(9600);
  Serial.println("Setup Complete");
}

void loop() {
  int analogValue = analogRead(A0);
  float voltage = analogValue * (5.0 / 1023.0);
  Serial.print(voltage);
  Serial.println(" volts");
  delay(250);
}
