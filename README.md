# ScrapeMyFIPE

Os objetivos desse projeto são:

1. Desenvolver um robô (web crawler) capaz de visitar um website e recolher o preço de um carro tabelado pela FIPE (eu escolhi o Volkswagen Gol 2010).
1. Repetir essa tarefa todos os meses de forma automática (cron job), e, a cada consulta, enviar um e-mail para minha caixa de entrada com o valor atualizado, além de adicionar o novo valor à uma planilha Google.

## Libs utilizadas

* `axios`
* `cron`
* `dayjs`
* `dotenv`
* `nodemailer`
* `puppeteer`
* `typescript`

