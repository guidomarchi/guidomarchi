clase publica Persona
    privado String nombre nuevaInstancia String()
    privado Integer nroDni nuevaInstancia Integer()

    metodo publico obtenerNombre()
        retornar: nombre
    fin metodo

    metodo publico escribirNombre()
        nombre = nombreNuevo
    fin metodo

    metodo publico obtenerDni()
        retornar: nroDni
    fin metodo

    metodo publica escribirNroDni()
        nroDni = nroDniNuevo
    fin metodo
fin clase

Interface publica Cotizador
    metodo publico Poliza calcularPoliza(Poliza)
fin Interface

clase publica CotizadorAuto implementa Cotizador
    metodo publico Poliza calcularPoliza(Poliza)
        Float precio = 0
        si ((polizaAutos)Poliza).obtenerAnio < 2010 entonces
            precio=100
        sino
            precio=150
        fin si
        poliza.escribirPrecio(precio)
        retornar: precio
    fin metodo
fin clase

clase publica CotizadorHogar implementa Cotizador
    metodo publico Poliza calcularPoliza(Poliza)
        Float precio = 0
        si ((polizaHogar)Poliza).obtenerMetros >= 150 entonces
            precio=55
        sino
            precio=45
        fin si
        poliza.escribirPrecio(precio)
        retornar: precio
    fin metodo
fin clase

clase publica PolizaABM 
    metodo publico crearPoliza(Poliza poliza)
        BaseDeDatos db nuevaInstancia BaseDeDatos()
        db.guardarEnLaBaseDeDatos(poliza)
    fin metodo

    metodo publico modificarPoliza(Poliza polizaAModificar)
        BaseDeDatos db nuevaInstancia BaseDeDatos()
        polizaAModificar = db.obtenerDeLaBaseDeDatos(poliza.obtenerNroDePoliza())
        polizaAModificar.escribirPersona(poliza.obtenerPersona())
        polizaAModificar.escribirPrecio(poliza.obtenerPrecio())
        db.guardarEnLaBaseDeDatos(polizaAModificar)
    fin metodo

    metodo publico eliminarPoliza(Poliza poliza)
        BaseDeDatos db nuevaInstancia BaseDeDatos()
        db.eliminarDeLaBaseDeDatos(poliza)
    fin metodo
fin clase

Interface publica Poliza
    metodo publico Integer obtenerNroDePoliza()
    metodo publico escribirNroPoliza(Integer)
    metodo publico Persona obtenerPersona()
    metodo publico escribirPersona(Persona)
    metodo publico Float obtenerPrecio()
    metodo publico escribirPrecio(Float)
fin Interface    

clase publico PolizaHogar heredaDe PolizaRamosGenerales
    privado Float metros nuevaInstancia Float()

    metodo publico PolizaHogar()
        tipo = "HOGAR"
    fin metodo

    metodo publico Float obtenerMetros()
        retornar: metros
    fin metodo

    metodo publico escribirMetros(Float metrosNuevo)
        metros= metrosNuevo
    fin metodo

    metodo publico costo()
        costo = 500
    fin metodo
fin clase

clase publico PolizaAuto heredaDe PolizaRamosGenerales
    privado Integer anio nuevaInstancia Integer()

    metodo publico PolizaHogar()
        tipo = "AUTO"
    fin metodo

    metodo publico Integer obtenerAnio()
        retornar: anio
    fin metodo

    metodo publico escribirAnio(Integer anioNuevo)
        anio = anioNuevo
    fin metodo

    metodo publico costo()
        costo = 1000
    fin metodo
fin clase

clase publica abstracta PolizaRamosGenerales implementa Poliza
    privado Integer nroPoliza nuevaInstancia Integer()
    privado Persona datosPersona nuevaInstancia Persona()
    privado Float precio nuevaInstancia Float()
    privado String tipo nuevaInstancia String()
    privado Float costo nuevaInstancia Float()

    metodo publico Integer obtenerNroDePoliza()
        retornar: nroPoliza
    fin metodo

    metodo publico escribirNroPoliza(Integer nroPoliza)
        nroPoliza = nroPolizaNueva
    fin metodo

    metodo publico Persona obtenerPersona()
        retornar = persona
    fin metodo

    metodo publico escribirPersona(Persona persona)
        persona = personaNueva
    fin metodo

    metodo publico Float obtenerPrecio()
        retornar: precio
    fin metodo

    metodo publico escribirPrecio(Float precio)
        precio = precioNuevo
    fin metoodo

    metodo publico abstracto Costo()
fin clase

clase publica ComprarPoliza 
    metodo publico ComprarPoliza(Integer anio, String nombre, String DNI)
        Persona persona = crearPersona(nombre, DNI)
        Poliza polizaAuto nuevaInstancia PolizaAuto()

        BaseDeDatos dbnueva nuevaInstancia BaseDeDatos()
        
        polizaAuto.escribirNroPoliza(db.obtenerNuevoNroPoliza())
        polizaAuto.escribirPersona(persona)
        polizaAuto.escribirAnio(anio)

        Cotizador cotizadorAutos nuevaInstancia CotizadorAutos()
        polizaAuto = cotizarPoliza(polizaAutos, cotizadorAutos)
        guardarPoliza(polizaAutos)
    fin metodo

    metodo publico Poliza cotizarPoliza (Poliza poliza, Cotizador cotizador)
        retornar: cotizador.calcularPrecio(poliza)
    fin metodo

    metodo publico ComprarPoliza(Float metros, String nombre, String DNI)
        Persona persona nuevaInstancia Persona()
        persona = crearPersona(nombre, DNI)
        Poliza polizaHogar nuevaInstancia PolizaHogar()

        BaseDeDatos db nuevaInstancia BaseDeDatos()

        polizaHogar.escribirNroPoliza(db.obtenerNuevoNroPoliza())
        poliza.escribirPersona(persona)
        poliza.escribirNroDni(DNI)
        retornar: persona
    fin metodo

    metodo privado guardarPoliza(Poliza poliza)
        PolizaABM abm nuevaInstancia PolizaABM()
        abm.crearPoliza(poliza)
    fin metodo
fin clase

