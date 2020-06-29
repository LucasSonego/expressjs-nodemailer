## Api de envio de emails com ExpressJs e Nodemailer

Esta API possibilita o envio de emails por meio de requisições ajax, um simples `POST` e o corpo da requisição deve conter os seguintes campos:

`subject` `STRING` *Assunto do email,
`text`: `STRING` *Texto do email,
`user_name`: `STRING`  *Identificação do usuário,
`user_email`: `STRING` *Email do usuário, para contato



### .ENV

Para utilizar esta API são necessárias algumas configurações, que estão no .env.

`API_PORT`: Define a porta em que a API estará hospedada.

`SUBJECT`: Quando o email for enviado, seu assunto será composto por o que estiver definido nesta variável de ambiente, seguido pelo assunto que for enviado no corpo da requisição.

`MAIL_RECEIVER`: endereço de email para qual a API enviará os emails.



Configurações do OAuth2:

A variável `MAIL_USER`: deve ser preenchida com o email GMAIL que sera utilizado para enviar os emails.
Serão necessárias as credenciais de acesso a esta conta de email para que a API possa utiliza-lo:

Em https://console.developers.google.com/ clique na aba "**Credenciais**" e depois clique em "**CRIAR CREDENCIAIS**" e selecione "**ID do cliente OAuth2**"

![](https://i.imgur.com/IPr5Gnb.png)



Na tela de criação de ID OAuth selecione "**Aplicativo da Web**", adicione "https://developers.google.com/oauthplayground" na lista de URIs de redirecionamento autorizados, e clique em **CRIAR**

![](https://i.imgur.com/MHURy4O.png)



Após criar você receberá duas chaves, a primeira será colocada na variável de ambiente `CLIENT_ID` e a segunda na variável `CLIENT_SECRET`. 

![](https://i.imgur.com/Tk33mwk.png)



Tendo o ID de cliente e a chave secreta vá para https://developers.google.com/oauthplayground/, clique no botão com uma engrenagem e selecione **Use your own OAuth credentials**, e insira as credenciais obtidas no passo anterior.
Busque pela API https://mail.google.com e clique em "**Authorize APIs**"

![](https://i.imgur.com/QgvpxN0.png)

Você será redirecionado, faça login e clique em **Permitir**.



Após ser redirecionado de volta ao OAuth2 Playground clique no botão com a engrenagem e repita o processo do passo anterior e depois clique em **Exchange authorization code for tokens**, e os campos "Refresh token" e "Access token" serão preenchidos.
(caso você não veja a esta caixa após clicar em  _Exchange authorization code for tokens_, clique em **Step 2**

![](https://i.imgur.com/Pzr4uy9.png)

Defina as variáveis de ambiente `REFRESH_TOKEN` e `ACCESS_TOKEN` com esses valores.