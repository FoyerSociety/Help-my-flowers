#include <DHT.h>
#include <DHT_U.h>

#define DHTPIN 2
#define DHTTYPE DHT11

int capteur_lum = 5;

DHT dht(DHTPIN, DHTTYPE);
void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);

  dht.begin();

}

void loop() {
  // put your main code here, to run repeatedly:
  delay(1000);
  float h = dht.readHumidity();
  float t = dht.readTemperature();
  float f = dht.readTemperature(true);

  if(isnan(h) || isnan(t) || isnan(f)){
    Serial.println("Echec de lecture !");
    return;
  }

  float hi = dht.computeHeatIndex(f,h);

  //Serial.print("Humidite: ");
  Serial.print(h);
  Serial.print("%\t");
  //Serial.print("Temperature : ");
  Serial.print(t);
  Serial.print("%\t");

  /*analog_lum = analogRead(capteur_lum);
  Serial.print("Valeur luminosité = ");
  Serial.print(analog_lum);
  Serial.print("%\t");*/
  int rawValue = analogRead(capteur_lum);
  float voltage = rawValue * (5.0/1023)*1000;
  float resistance = 10000 * (voltage/(5000.0-voltage));

  Serial.print(voltage);
  Serial.print("%\t");
  Serial.print(resistance);
  Serial.println("%\t");
}
