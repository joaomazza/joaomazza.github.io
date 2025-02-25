# Portfólio - João Mazza

Este repositório contém o código-fonte do meu **portfólio pessoal**, apresentando minhas experiências, projetos e habilidades como **Tech Lead & Full Stack Developer**. Aqui você encontra:

- Uma **página estática** em HTML/CSS (com uso do Bootstrap 5).
- Seções de **Hero**, **Sobre**, **Stack**, **Projetos**, **Experiências** e **Educação**.
- Animações e efeitos visuais inspirados em designs modernos.

---

## Visão Geral

- **Layout**: Baseado em **Bootstrap 5**, aproveitando o grid system para responsividade.
- **Tema Escuro**: Fundo predominante em preto (#000), com cores pontuais para destaques.
- **Animações**: Partículas flutuantes no Hero, inspiradas em sites como **DW3**.
- **Badges e Ícones**: Uso de [Shields.io](https://shields.io) para exibir as tecnologias dominadas.

---

## Stack (Principais Tecnologias)

Abaixo, a seção de stack que aparece no HTML do portfólio, separada por tópicos:

```html
<section id="stack" class="py-4">
  <div class="container">
    <h2 class="text-center mb-3">Minha Stack</h2>
    <p class="text-center mb-4" style="font-size:0.95rem;">
      Tecnologias e ferramentas que utilizo em meus projetos,
      separadas por tópicos para melhor visualização.
    </p>

    <div class="row g-3">
      <!-- LINGUAGENS -->
      <div class="col-12 col-md-6 col-lg-4">
        <h5 class="mb-2">Linguagens</h5>
        <div class="d-flex flex-wrap align-items-center gap-2">
          <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white" alt="Java" />
          <img src="https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=.net&logoColor=white" alt=".NET" />
          <img src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" alt="PHP" />
          <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
          <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
          <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
          <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000" alt="JavaScript" />
        </div>
      </div>

      <!-- FRAMEWORKS -->
      <div class="col-12 col-md-6 col-lg-4">
        <h5 class="mb-2">Frameworks</h5>
        <div class="d-flex flex-wrap align-items-center gap-2">
          <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular" />
          <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
          <img src="https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white" alt="Spring Boot" />
          <img src="https://img.shields.io/badge/Yii2-777BB4?style=for-the-badge&logo=php&logoColor=white" alt="Yii2" />
          <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
          <img src="https://img.shields.io/badge/Flask-000?style=for-the-badge&logo=flask&logoColor=white" alt="Flask" />
          <img src="https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white" alt="Laravel" />
          <img src="https://img.shields.io/badge/.NET_Core-512BD4?style=for-the-badge&logo=.net&logoColor=white" alt=".NET Core" />
        </div>
      </div>

      <!-- DEVOPS -->
      <div class="col-12 col-md-6 col-lg-4">
        <h5 class="mb-2">DevOps</h5>
        <div class="d-flex flex-wrap align-items-center gap-2">
          <img src="https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white" alt="Jenkins" />
          <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
          <img src="https://img.shields.io/badge/SonarQube-4E9BCD?style=for-the-badge&logo=sonarqube&logoColor=white" alt="SonarQube" />
          <img src="https://img.shields.io/badge/CI%2FCD_Pipelines-00457C?style=for-the-badge&logo=githubactions&logoColor=white" alt="CI/CD Pipelines" />
          <img src="https://img.shields.io/badge/Terraform-7B42BC?style=for-the-badge&logo=terraform&logoColor=white" alt="Terraform" />
        </div>
      </div>

      <!-- BASE DE DADOS -->
      <div class="col-12 col-md-6 col-lg-4">
        <h5 class="mb-2">Base de Dados</h5>
        <div class="d-flex flex-wrap align-items-center gap-2">
          <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
          <img src="https://img.shields.io/badge/MySQL-0000?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
          <img src="https://img.shields.io/badge/SQL%20Server-CC2927?style=for-the-badge&logo=microsoft-sql-server&logoColor=white" alt="SQL Server" />
          <img src="https://img.shields.io/badge/Hadoop-66CCFF?style=for-the-badge&logo=apachehadoop&logoColor=000" alt="Hadoop" />
        </div>
      </div>

      <!-- INFRAESTRUTURA -->
      <div class="col-12 col-md-6 col-lg-4">
        <h5 class="mb-2">Infraestrutura</h5>
        <div class="d-flex flex-wrap align-items-center gap-2">
          <img src="https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white" alt="AWS" />
          <img src="https://img.shields.io/badge/Azure-0078D4?style=for-the-badge&logo=microsoft-azure&logoColor=white" alt="Azure" />
          <img src="https://img.shields.io/badge/GCP-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white" alt="Google Cloud" />
          <img src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux" />
        </div>
      </div>
    </div>
  </div>
</section>
