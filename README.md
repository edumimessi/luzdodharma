# Luz do Dharma

Devocional budista diário com 366 meditações, criado por **Dr. Eduardo D'Angelo Mimessi**.

O site reúne reflexões, práticas contemplativas, perguntas para registro pessoal e aspirações diárias organizadas em doze temas:

1. atenção plena;
2. impermanência;
3. compreensão do sofrimento;
4. desapego e liberdade;
5. compaixão;
6. amor benevolente;
7. não-eu;
8. equanimidade;
9. ética consciente;
10. esforço consciente;
11. generosidade e serviço;
12. libertação.

## Editar as meditações

Os textos ficam em:

`src/devotional-data.ts`

Cada mês possui tema, inspiração, reflexão, prática e aspiração. Os enfoques diários ficam na constante `LENSES`.

## Alterar o visual

As cores, tipografia e estilos ficam em:

`src/styles.css`

## Executar no computador

```bash
npm install
npm run dev
```

## Publicação

O fluxo em `.github/workflows/pages.yml` constrói e publica automaticamente o site no GitHub Pages após cada alteração enviada para a branch `main`.

Domínio principal:

`https://luzdodharma.com.br`

O endereço `www.luzdodharma.com.br` também poderá ser direcionado para o domínio principal.
