from serial import *
with Serial(port="COM5", baudrate=9600, timeout=1, writeTimeout=1) as port_serie:
    if port_serie.isOpen():
        while True:
            ligne = port_serie.readline()
            ligne_list = ligne.split("%\t")
            if ligne_list[0] == '':
                ligne_list[0] = 0
                print(str(ligne_list[0]))
            elif (int(ligne_list[0]>0)):
                print("h : "+str(ligne_list[0])+ " --  t : "+str(ligne_list[1])+" -- tension : "+str(ligne_list[2])+" -- resistance : "+str(ligne_list[3]))