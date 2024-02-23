import { Selector } from 'testcafe';

fixture('Logins')
    .page('https://cirupied-eight.vercel.app/Login');

test('Iniciar sesión con credenciales válidas', async t => {
    // Espera a que el formulario de inicio de sesión esté presente en la página
    await t.expect(Selector('.form').exists).ok();

    // Ingresa el correo electrónico y la contraseña
    await t
        .typeText('#email', 'correo@example.com')
        .typeText('#pass', 'contraseña123'); // Actualiza el selector según el atributo id de tu campo de entrada de contraseña

    // Envía el formulario
    await t.click('button[type="submit"]');
});
