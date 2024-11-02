#define echoPin 2
#define trigPin 3
#define SpeedOfSound 0.0343  // in cm-per-microsecond

void setup() {
  pinMode(echoPin, INPUT);
  pinMode(trigPin, OUTPUT);
  digitalWrite(trigPin, LOW);
  Serial.begin(9600);
}

void loop() {
  float echoTime, distance;

  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  echoTime = pulseIn(echoPin, HIGH); 
  distance = (echoTime/2.0) * SpeedOfSound;
  Serial.print("distance in cm: ");
  Serial.println(distance);
  delay(200);
}
