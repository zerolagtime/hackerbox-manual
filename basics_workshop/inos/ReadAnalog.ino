void setup() {
  pinMode(A0, INPUT);
  Serial.begin(9600);
  Serial.println("Setup Complete");
}

void loop() {
  int analogValue = analogRead(A0);
  Serial.println(analogValue);
  delay(250);
}
