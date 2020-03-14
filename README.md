# Lambda Serverless AWS - Node.Js 10

Essa uma lambda que captura uma imagem no S3 e converte-a para um tamanho menor utilizando eventos.

## Descrição

Para a criação dessa função foi utilizado o framework [Serverless](https://serverless.com/).

### Instalação:
```
npm i serverless -g
```

### Template utilizado
```
serverless create --template aws-nodejs --path nodeless
```

### Criar KEY
- Acesse o [IAM](https://console.aws.amazon.com/iam/home?region=sa-east-1#/home)
- Crie um novo usuário com acesso programático
- Em permissões clique em Anexar Permissões Existentes e selecione AdministratorAccess
- Por fim salve a chave de acesso e a chave secreta

### Configurar credenciais da AWS
```
serverless config credentials -o --provider aws --key=SUA_KEY -- secret SUA_SECRET
```

### Fazer deploy da função para o S3
```
serverless deploy -v
```

### Disparar função
```
serverless invoke -f handle -l
```

### Remover função da AWS
```
serverless remove
```

## Links
[Tutorial Youtube](https://www.youtube.com/watch?v=jiP45rEOEbA)