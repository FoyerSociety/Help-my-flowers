import eel
import random

eel.init("static/")


class Data():
    __hum_sensor, __lum_sensor = 0, 0

    def __init__(self):
        """
            Simulation des données par l'Arduino pour 
                le mode de developpement sans capteur
                                                    """


    @property
    def getHum(self):
        self.__change_value(hum=True)
        return self.__hum_sensor


    @property
    def getLum(self):
        self.__change_value(lum=True)
        return self.__lum_sensor


    def __change_value(self, hum=False, lum=False):
        if lum: self.__lum_sensor = random.randint(40, 80)
        if hum: self.__hum_sensor = random.randint(40, 80)


eel.start(mode="electron", port=1107)
a = 'sdsds \' sdjsld'