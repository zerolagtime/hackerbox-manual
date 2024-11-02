#define RED_LED_PIN    6
#define GREEN_LED_PIN  5
#define BLUE_LED_PIN   3

void setup() {
  pinMode(RED_LED_PIN, OUTPUT);
  pinMode(GREEN_LED_PIN, OUTPUT);
  pinMode(BLUE_LED_PIN, OUTPUT);
}

void loop() {
  RGB_LED(255, 0, 0);     // Red
  RGB_LED(0, 255, 0);     // Green
  RGB_LED(0, 0, 255);     // Blue
  RGB_LED(255, 255, 125); // Purple
  RGB_LED(0, 255, 255);   // Cyan
  RGB_LED(255, 0, 255);   // Magenta
  RGB_LED(255, 255, 0);   // Yellow
  RGB_LED(255, 255, 255); // White
}

void RGB_LED(int red_LED_value, int green_LED_value, int blue_LED_value)
{
  analogWrite(RED_LED_PIN, red_LED_value);
  analogWrite(GREEN_LED_PIN, green_LED_value);
  analogWrite(BLUE_LED_PIN, blue_LED_value);
  delay(2000);
}
