# App
GymPass style app.

## RFs
- [X] Deve ser possível se cadastrar;
- [ ] Deve ser possível se autenticar;
- [ ] Deve ser possível obter o perfil de um usuário logado;
- [ ] Deve ser possível obter o número de check-ins realizado pelo usuário;
- [ ] Deve ser possível o usuário obter seu histórico de check-ins;
- [ ] Deve ser possível o usuário buscar academias próximas;
- [ ] Deve ser possível o usuário buscar academias pelo nome;
- [ ] Deve ser possível o usuário realizar check-in em uma academia;
- [ ] Deve ser possível validar o check-in de um usuário;
- [ ] Deve ser possível cadastrar um academia;

## RNs
- [X] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [ ] O usuário não pode fazer 2 check-ins no mesmo dia;
- [ ] O usuário não pode fazer check-in se não estiver peto (100m) da academia;
- [ ] O check-in só pode ser validade até 20 minutos após ser validado;
- [ ] O check-in só pode ser validado por administradores;
- [ ] A academia so pode ser cadastrado por administradores;

## RNFs
- [X] A senha do usuário precisa estar criptografada;
- [ ] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [ ] Todas lista de dados precisam estar paginadas com 20 itens por página;
- [ ] O usuário deve ser identificado por JWT (JSON Web Token);