// anything after a double slash is a comment
// comments are not run in the program
// a comment documents what the program is doing as a
//           note to others or even you in the future
/* anything inside a pair of slash-stars is a comment */

void setup() {
  Serial.begin(9600);
}

void loop() {
  int i;

  i=0;
  if (i<1) {
    Serial.println("Yes, zero is less than one.");
  }

  if (i>1) {
    Serial.println("No!  This line should never be reached.");
  } else {
    Serial.println("Yes, zero is not greater than one.");    
  }

  Serial.println("Let's count to five using a for loop...");
  for (i=1; i < 6; i++) {
    Serial.println(i);
  }

  i=1;
  Serial.println("Let's count to five using a while loop...");
  while (i <= 5) {
    Serial.println(i);
    i++;
  }
  
  Serial.println("Let's get stuck in an infinite loop...");
  while (true);  // true is always true
}
