import { Selector } from 'testcafe';

fixture('Flujo de Trabajo de Pacientes')
    .page('http://localhost:3000/Login'); // Ajusta la URL según la dirección de tu aplicación

test('Iniciar sesión con credenciales válidas ', async t => {
    // Espera a que el formulario de inicio de sesión esté presente en la página
    await t.expect(Selector('.form').exists).ok();

    // Ingresa el correo electrónico y la contraseña y envía el formulario
    await t
        .typeText('#correo', '20210704@uthh.edu.mx') // Cambia el correo electrónico por uno válido
        .typeText('#pass', 'victor') // Cambia la contraseña por una válida
        .click('button[type="submit"]');

});

