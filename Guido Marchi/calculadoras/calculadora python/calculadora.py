
a = 0
b = 0


def pedirValores():
    global a
    global b
    a = float(input('ingrese el primer valor: '))
    b = float(input('ingrese el segundo valor: '))

def sumar(a,b):
    resultado = a + b
    print(f'el resultado es: {resultado}')

def restar(a,b):
    resultado = a - b
    print(f'el resultado es: {resultado}')

def multiplicar(a,b):
    resultado = a * b
    print(f'el resultado es: {resultado}')

def dividir(a,b):
    resultado = a / b
    print(f'el resultado es: {resultado}')

def pedirOpcion():
    opcion = int(input('ingrese 1 si quiere sumar, ingrese 2 si quiere restar, ingrese 3 si quiere multiplicar, ingrese 4 si quiere dividir: '))
    if opcion == 1:
        pedirValores()
        sumar(a,b)
    if opcion == 2:
        pedirValores()
        restar(a,b)
    if opcion == 3:
        pedirValores()
        multiplicar(a,b)
    if opcion == 4:
        pedirValores()
        dividir(a,b)
    if opcion < 1 or opcion > 4:
        print('opcin incorrecta')
        pedirOpcion()

pedirOpcion()


