<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1Srv-RTPEVw3K7BZPvnlvzrhErP150baI

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

# 🧘‍♀️ Yoga AI Guide: The AI-Native Wellness App

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73C92?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Google AI](https://img.shields.io/badge/Powered_by-Google_AI-4285F4?style=for-the-badge&logo=google&logoColor=white)

**Yoga AI Guide** es una plataforma web inteligente diseñada para personalizar tu bienestar. Detecta tus necesidades (edad, nivel de energía, dolencias) y te recomienda las mejores rutinas de yoga mediante un asistente virtual.

---

## 🤖 Arquitectura de Desarrollo "AI-First"

Este proyecto destaca por su metodología de construcción. No fue codificado de manera tradicional, sino **Creado** a través de un flujo avanzado de herramientas de IA de Google:

### 1. 🧠 Estructuración (NotebookLM)
El proyecto nació de un prompt. Utilicé **NotebookLM** como "experto de dominio" para investigar, y estructurar la información sobre yoga, creando una base de conocimiento sólida y confiable.

### 2. 🎨 Prototipado Visual (Google Stitch)
La base de conocimiento se transformó en interfaz visual utilizando **Stitch**. Mediante iteraciones de prompts de diseño, definí la UX/UI, la paleta de colores y la estructura de componentes.

### 3. ⚙️ Generación de Código (Google AI Studio)
Los modelos Gemini en **AI Studio** convirtieron el prototipo visual en código de producción (React + TypeScript + Tailwind), generando la lógica del asistente y la reactividad de la aplicación.

### 4. 🛠️ Integración y Despliegue (Google Antigravity + MCP)
La integración final ocurrió en **Google Antigravity (IDX)**:
* **Integración MCP:** Uso del *Model Context Protocol* para interconectar herramientas y mantener el contexto del proyecto.
* **Planning Mode:** Activación del modo de planificación para arquitecturar una **Landing Page de alto impacto** con animaciones fluidas antes del lanzamiento de la app principal.

---

## ✨ Características Principales

* **Asistente de Yoga Inteligente:** Chatbot capaz de entender lenguaje natural (ej: *"tengo dolor de espalda"*, *"soy mayor de 60 años"*).
* **Recomendaciones Contextuales:** Tarjetas de video personalizadas basadas en la conversación.
* **Landing Page Cinemática:** Animaciones de entrada y diseño responsivo moderno.
* **Modo Claro/Oscuro:** Adaptable a las preferencias del sistema.
* **Arquitectura Escalable:** Basada en componentes reutilizables y TypeScript estricto.

---

## 🛠️ Stack Tecnológico

* **Frontend:** React 18, TypeScript, Vite.
* **Estilos:** Tailwind CSS (con animaciones personalizadas).
* **Iconos:** Google Fonts & Material Symbols.
* **Despliegue:** GitHub Pages.

---

## 🚀 Instalación y Uso Local

Si deseas correr este proyecto en tu máquina:

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/polidorl/yoga-ai-app.git](https://github.com/polidorl/yoga-ai-app.git)
    ```

2.  **Instalar dependencias:**
    ```bash
    cd yoga-ai-app
    npm install
    ```

3.  **Iniciar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

---

## 👩‍💻 Autora

**Lisbeth Polidor**
*Licenciada en Fisica & Desarrolladora Web*

Desarrollado con ❤️ y mucha IA desde Caracas, Venezuela.