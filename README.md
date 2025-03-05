# Localizador de Endereços por CEP

<p>Este projeto oferece a funcionalidade de encontrar endereços usando o CEP, através da integração com a API do ViaCEP. Os endereços encontrados podem ser armazenados localmente e visualizados em uma lista.</p>

##  Visão Geral do Projeto

<p>O <strong>Localizador de CEP</strong> é uma aplicação web que simplifica a busca de endereços a partir de um código postal. Ele se conecta à API pública do ViaCEP para recuperar os dados e permite que os usuários salvem os endereços em seu próprio dispositivo para consultas futuras. A aplicação é desenvolvida com React, TypeScript e outras tecnologias modernas, assegurando uma experiência de usuário ágil e eficaz.</p>

## ️ Tecnologias Empregadas

<ul>
    <li><strong>React</strong>: Biblioteca para a construção de interfaces de usuário interativas.</li>
    <li><strong>TypeScript</strong>: Adiciona verificação de tipos estáticos para aumentar a segurança durante o desenvolvimento.</li>
    <li><strong>Axios</strong>: Cliente HTTP para comunicação com a API ViaCEP.</li>
    <li><strong>TanStack Query</strong>: Ferramenta de gerenciamento de estado assíncrono para requisições à API.</li>
    <li><strong>Tailwind CSS</strong>: Framework CSS para estilização rápida e responsiva.</li>
    <li><strong>LocalStorage</strong>: Armazenamento no navegador para persistência dos endereços pesquisados.</li>
</ul>

## ⚙️ Decisões Arquiteturais

<h3>1️⃣ Utilização do TanStack Query</h3>

<ul>
    <li><strong>Armazenamento em cache de requisições</strong>: Minimiza o número de chamadas à API.</li>
    <li><strong>Atualização automática de dados</strong>: Garante que os dados exibidos estejam sempre atualizados.</li>
    <li><strong>Gestão de estados</strong>: Simplifica o tratamento de estados de carregamento e erros.</li>
</ul>

<h3>2️⃣ Emprego do Axios</h3>

<ul>
    <li><strong>Adaptabilidade</strong>: Configuração mais simples em comparação com o <code>fetch</code> nativo.</li>
    <li><strong>Interceptors</strong>: Facilita o tratamento global de erros e requisições.</li>
</ul>

<h3>3️⃣ Gerenciamento de Endereços Armazenados</h3>

<ul>
    <li><strong>LocalStorage</strong>: Garante que os endereços permaneçam salvos no dispositivo do usuário.</li>
    <li><strong>Atualização em tempo real</strong>: A lista de endereços é atualizada imediatamente após novas adições.</li>
</ul>

##  Configuração e Inicialização

<h3>Pré-requisitos</h3>

<ul>
    <li>Node.js versão 18 ou superior instalado.</li>
    <li>Gerenciador de pacotes npm ou yarn instalado.</li>
</ul>

<h3>Instruções</h3>

<ol>
    <li>Clone o repositório para sua máquina:
        <pre><code>git gh repo clone VandradeF/consulta-cep-main</code></pre>
    </li>
    <li>Instale as dependências do projeto:
        <pre><code>npm install
# ou
yarn install</code></pre>
    </li>
    <li>Inicie o servidor de desenvolvimento:
        <pre><code>npm run dev
# ou
yarn dev</code></pre>
    </li>
    <li>Abra a aplicação no seu navegador:
        <p>Acesse <a href="http://localhost:5173" target="_blank">http://localhost:5173</a>.</p>
    </li>
</ol>
