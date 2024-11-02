void setup() {
  Serial.begin(9600);
  Serial.println("Setup Complete");
}

void loop() {
  Serial.println("intialize an array of five integers:");
  Serial.println("int myArray[5] = {3, 4, 5, 6, 7}");
  int myArray[5] = {3, 4, 5, 6, 7};

  for (int c=0; c<5; c++){
    Serial.print("element ");
    Serial.print(c);
    Serial.print(" of myArray is ");
    Serial.println(myArray[c]);
  }
  
  Serial.println("The first element is index 0");
  Serial.println("The last element is index 4");
  Serial.println("There is no index 5");

  Serial.println(); //skip a line
  Serial.println("An array of characters is a string of text"); 
  Serial.println("char myString[]=\"my pet is a cat\"");
  char myString[]="my pet is a cat";
  Serial.println(myString);
  Serial.println("change element 12 from c to r");
  myString[12]='r';
  Serial.println(myString);

  while(1);  //just wait forever
}
