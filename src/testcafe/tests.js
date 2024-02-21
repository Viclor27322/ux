import { Selector } from 'testcafe';

fixture('Logins')
    .page('https://cirupied-eight.vercel.app/');

    test('Iniciar sesión con credenciales válidas', async t => {
        // Ingresa el correo electrónico y la contraseña
        await t
            .typeText('input[name="correo"]', 'correo@example.com')
            .typeText('input[name="pass"]', 'contraseña123');
    
        // Envía el formulario
        await t.click('button[type="submit"]');
    
        // Espera a que la página de destino después del inicio de sesión cargue o realiza alguna validación específica
        // Puedes usar Selectors para encontrar elementos en la página y realizar verificaciones
        await t.expect(Selector('.dashboard').exists).ok(); // Por ejemplo, verifica si el elemento con la clase 'dashboard' existe en la página de destino
});