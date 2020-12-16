let user= 'admin'    
let password= '1234'
function usuario (user, password) {
    switch (true){
        case user=== 'admin' && password=== '1234' :
            console.log('bienvenido a nuestro sitio');
            break;
        case user=== 'admin' && password=== '2345' : 
            console.log('contraseña incorrecta');
            break;
        case user=== 'nombre' && password=== '1234' :
            console.log('usuario incorrecto');
            break;
        case user=== 'nombre' && password=== '2345' :
            console.log('usuario y contraseña incorrectos');
            break;
        default:
            console.log('debe ingresar los datos requeridos');
            break;
    }
}
console.log(usuario('nombre', '2345'))