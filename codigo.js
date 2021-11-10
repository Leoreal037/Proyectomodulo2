
$(document).ready(function(){
    /*CSS jquery pantalla inicio sesion*/
    var global1
    var global2
    var global3
    var global4
    $("#boton-siguiente").click(function(){
        var a =$("#ingreso-email").val();

        if(a != ""){
            email=a
        }
        else {
        alert (a+" ingrese valores coherentes");
        return a
        }
        global1=a
    })

    $("#boton-siguiente").click(function(){
            var n =$("#ingreso-contraseña").val();
            var contraseña
            if(n >= 1){
                contraseña=n
            }
            else {
            alert (n+"ingrese valores coherentes")
            return n
            }
            global2=n
            /*funcion para validar email y contraseña 
            Usuario 1 (leo@gmai clave 123) y el segundo usuario (yury@gmail clave 456)*/
                function validar_email () {
                var c = global1;
                var claveleo
                var claveyury
                if(c == "leo@gmail"){
                    alert("email correcto "+ c)
                    claveleo=123
                }
                else  if(c == "yury@gmail"){
                    alert("email correcto "+ c)
                    claveyury=456
                }
                else {
                    alert("email no registrado")
                }
                var l = global2;
                if(l == claveleo){
                    alert("contraseña correcta "+ l)
                    //document.write('Email y contraseña correcta´INGRESAR'.link('file:///c:/Users/USER/OneDrive%20-%20WOLTA%20Centro%20de%20An%C3%A1lisis%20El%C3%A9ctrico%20S.A.S/Escritorio/Personal/Curso%20programacion%20colsubsidio/Modulo%202/Proyecto%20noviembre/resort.html'))
                    $("#pantalla-inicio-sesion").hide()
                    $("#pantalla-bienvenida").show()
                }
                else if(l == claveyury){
                    alert("contraseña correcta "+ l)
                    //document.write('Email y contraseña correcta´INGRESAR'.link('file:///c:/Users/USER/OneDrive%20-%20WOLTA%20Centro%20de%20An%C3%A1lisis%20El%C3%A9ctrico%20S.A.S/Escritorio/Personal/Curso%20programacion%20colsubsidio/Modulo%202/Proyecto%20noviembre/resort.html'));
                    /*muestra pantalla de bienvenida*/
                        /*$("#boton-siguiente").click(function(){*/
                            $("#pantalla-inicio-sesion").hide()
                            $("#pantalla-bienvenida").show()
                       /* })*/
                }
                else {
                    alert("contraseña incorrecta")
                }
        }
        validar_email ()
        

    })
        /*funcion para el boton crear cuenta*/
        $("#boton-crear-cuenta").click(function(){
            $("#pantalla-registro").show()
            $("#pantalla-inicio-sesion").hide()
            
        })

        /*CSS jquery pantalla registro*/

    $("#boton-registrar").click(function(){
        var h =$("#registro-email").val();
        var correo
        if(h != "" ){
            correo=h
            alert("su correo es " + correo)
        }
        else {
        alert (h+" ingrese valores coherentes")
        return correo
        }
        global3 = correo
    })

    $("#boton-registrar").click(function(){
        var d =$("#registro-contraseña").val();
        var contraseña
        if(d >= 1){
            contraseña=d
            alert("su contraseña es " + contraseña)
        }
        else {
        alert (d+"ingrese valores coherentes");
        return contraseña
        }
        global4 = contraseña

             /*funcion para validar llenado de espacios de email y contraseña*/
     function validar_registro (){
        if (global3!="" && global4 !=""){
            alert("registro exitoso ")
            $("#pantalla-ingreso-datos").show()
            $("#pantalla-registro").hide()
        } 
     }
     validar_registro ()
    })
    /*CSS jquery pantalla formulario ingreso de datos*/
        /*mover los datos de los input a variables*/
    $("#boton-cargar").click(function(){
        var nombre =$("#nombre").val();
        var email =$("#email").val();
        var direccion =$("#direccion").val();
        var ciudad =$("#ciudad").val();
        var celular =$("#celular").val();
        var telefono =$("#telefono").val();
        var mensaje =$("#mensaje").val();
        $("#pantalla-ingreso-datos").hide()
        $("#pantalla-datos-ingresados").show()
        $('.results').html("Los datos ingresados son  " + nombre+email+direccion+ciudad+celular+telefono+mensaje);
        alert(nombre+email+direccion+ciudad+celular+telefono+mensaje)
    })

    /*Mostrar ocultar en jquery
        $("#div").hide();
        $("#div").show()*/

});
