
$(document).ready(function(){
    /*CSS jquery pantalla inicio sesion*/
    var global1
    var global2
    $("#boton-siguiente").click(function(){
        var a =$("#ingreso-email").val();
        var email
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
            alert (n+"ingrese valores coherentesssssss")
            return n
            }
            global2=n
            /*funcion para validar email y contraseña*/
                function validar_email () {
                var c = global1;
                var claveleo
                var claveyury
                if(c == "leo"){
                    alert("email correcto "+ c)
                    claveleo=123
                }
                else  if(c == "yury"){
                    alert("email correcto "+ c)
                    claveyury=456
                }
                else {
                    alert("email incorrecto")
                }
                var l = global2;
                if(l == claveleo){
                    alert("contraseña correcta "+ l)
                    document.write('Email y contraseña correcta´INGRESAR'.link('https://www.youtube.com/'))
                }
                else if(l == claveyury){
                    alert("contraseña correcta "+ l)
                    document.write('Email y contraseña correcta´INGRESAR'.link('https://www.youtube.com/'))
                }
                else {
                    alert("contraseña incorrecta")
                }
        }
        validar_email ()
    })

    /*CSS jquery pantalla registro*/

    $("#boton-registro").click(function(){
        var h =$("#registro-email").val();
        var correo
        if(h != "" ){
            correo=h
            alert("su correo es " + correo)
        }
        else {
        alert (h+" ingrese valores coherentes")
        }
        return correo
    })

    $("#boton-registro").click(function(){
        var d =$("#registro-contraseña").val();
        var contraseña
        if(d >= 1){
            contraseña=d
            alert("su contraseña es " + contraseña)
        }
        else {
        alert (d+"ingrese valores coherentes")
        }
        return contraseña
    })

});


