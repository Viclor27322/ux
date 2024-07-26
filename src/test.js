/* import { Selector } from 'testcafe';

fixture`Página de Pacientes`.page`http://localhost:3000/Ad/Pacientes`;
test('Agregar un nuevo paciente', async t => {
    await t.click('button[data-testid="btn-agregar-paciente"]');
    await t.expect(Selector('.modal-title').innerText).eql('Agregar nuevo paciente');

    await t
        .typeText('#nombre', 'Nombres')
        .typeText('#apellidoP', 'Apellidos ')
        .typeText('#apellidoM', 'Apellidos')
        .typeText('#correo', 'correo@examples.com')
        .typeText('#telefono', '1234567890')
        .typeText('#fechaNacimiento', '2000-01-01');

    await t.click('button[data-testid="submit"]');
}); */
