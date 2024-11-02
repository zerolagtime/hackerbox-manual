#define LEDpin 3

void setup() {
  pinMode(LEDpin, INPUT);
}

void loop() {
  analogWrite(LEDpin, 250);  // bright
  delay(1000);
  analogWrite(LEDpin, 150);  // dim
  delay(1000);
  analogWrite(LEDpin, 50);   // dimmer
  delay(1000);
}
