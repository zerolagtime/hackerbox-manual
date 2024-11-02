#define NOTE_D7  2349
#define NOTE_E7  2637
#define NOTE_C7  2093
#define NOTE_C6  1047
#define NOTE_G6  1568

#define noteDuration 800
#define notePause 900

#define buzzerPin 8

void setup() {
  
}

void loop() {
  tone(buzzerPin, NOTE_D7, noteDuration);
  delay(notePause);
  noTone(buzzerPin);

  tone(buzzerPin, NOTE_E7, noteDuration);
  delay(notePause);
  noTone(buzzerPin);

  tone(buzzerPin, NOTE_C7, noteDuration);
  delay(notePause);
  noTone(buzzerPin);

  tone(buzzerPin, NOTE_C6, noteDuration);
  delay(notePause);
  noTone(buzzerPin);

  tone(buzzerPin, NOTE_G6, noteDuration);
  delay(notePause);
  noTone(buzzerPin);
     
  delay(4000); //wait 4 seconds = 4,000 ms
}
