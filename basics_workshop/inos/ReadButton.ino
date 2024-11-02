#define buttonPin 2

void setup() {
  pinMode(buttonPin, INPUT);
  Serial.begin(9600);
  Serial.println("Setup Complete");
}

void loop() {
  if (digitalRead(buttonPin))
    Serial.println("Button Pressed");
  else
    Serial.println("Button Not Pressed");
  delay(2000);
}
