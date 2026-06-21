# PROJECT.md
## Projeto: Plataforma de Cotação Inteligente

---

## Objetivo

Construir uma prova de conceito capaz de demonstrar como Inteligência Artificial pode analisar dados, comparar alternativas e recomendar a melhor opção disponível.

> O objetivo principal não é o domínio escolhido para demonstração.
> O objetivo principal é validar o conceito de recomendação inteligente sobre qualquer base de dados.

---

## Escopo Inicial

Domínio de demonstração: **Veículos usados**

Exemplo: Usuário deseja encontrar o melhor Jeep Compass disponível considerando:
- Preço
- Quilometragem
- Ano
- Versão
- Histórico
- Custo-benefício

A plataforma deverá analisar as opções disponíveis e recomendar as melhores alternativas.

---

## Objetivos da Demonstração

Demonstrar:
- Busca de informações
- Consolidação de dados
- Aplicação de regras
- Análise assistida por IA
- Classificação automática
- Recomendação explicável

---

## Perfis de Usuário

### Usuário Final
Deseja receber recomendações. Exemplos:
- Qual a melhor opção?
- Qual possui menor risco?
- Qual oferece melhor custo-benefício?

### Gestor
Deseja compreender critérios utilizados pela recomendação. Necessita de:
- Transparência
- Justificativas
- Rastreabilidade

---

## Fluxo Principal

1. Usuário informa critérios _(Marca, Modelo, Ano mínimo, Preço máximo)_
2. Sistema consulta múltiplas fontes
3. Dados são normalizados em estrutura única
4. Motor de regras executa análise objetiva _(preço, quilometragem, idade, distância da FIPE)_
5. IA executa análise qualitativa _(qualidade da descrição, sinais de conservação, riscos, completude)_
6. Sistema gera score final
7. Usuário recebe ranking das melhores opções

---

## Funcionalidades

| Funcionalidade | Descrição |
|---|---|
| Pesquisa | Definição de critérios pelo usuário |
| Ranking | Ordenação por score |
| Recomendação | Identificação da melhor alternativa |
| Justificativas | Explicação da recomendação |
| Comparação | Análise lado a lado |
| Favoritos | Salvar oportunidades relevantes |
| Histórico | Registrar pesquisas realizadas |

---

## Motor de Pontuação

### Critérios Objetivos — Peso: 70%
- Preço
- Quilometragem
- Ano
- Distância da média
- Aderência aos critérios

### Critérios IA — Peso: 30%
- Qualidade das informações
- Sinais positivos
- Sinais de risco
- Confiabilidade percebida

---

## Inteligência Artificial

Responsabilidades:
- Interpretar descrições textuais
- Identificar riscos e oportunidades
- Gerar justificativas
- Atribuir score qualitativo

Formato de retorno esperado: **JSON estruturado**

---

## Arquitetura Proposta

### Backend
- Tecnologia: ASP.NET Core
- Padrão: Clean Architecture + REST API
- Responsabilidades: regras de negócio, integração, armazenamento, análise

### Frontend (atual)
- Tecnologia: Next.js
- Objetivo: landing page de demonstração com experiência executiva

### Mobile (Futuro)
- Tecnologia: Flutter

---

## Requisitos Não Funcionais

- Escalável
- Modular
- Observável
- Testável
- Independente de domínio
- Fácil substituição do provedor de IA

---

## Roadmap

| Fase | Entrega | Objetivo |
|---|---|---|
| 1 | Landing page conceitual | Vender a visão |
| 2 | Demonstração interativa | Mostrar o conceito funcionando |
| 3 | Integração com fontes reais | Validar com dados reais |
| 4 | Motor genérico de recomendação | Aplicação em múltiplos domínios |

---

## Critério de Sucesso

A prova de conceito será considerada bem-sucedida quando os usuários compreenderem que:
- A IA não substitui os dados — ela potencializa os dados
- A IA reduz esforço analítico
- A IA gera recomendações justificadas
- A solução pode ser aplicada a qualquer processo baseado em comparação e decisão
