# Proyecto de Blackjack en Vite con JavaScript Vanilla

Este es un proyecto de ejemplo que implementa el juego de Blackjack utilizando Vite y JavaScript Vanilla. En este README, vamos a explicar las reglas básicas del juego y cómo está estructurado el proyecto.

## 🎮 Reglas del Juego

El Blackjack es un juego de cartas en el que el objetivo es sumar 21 puntos, o acercarse lo más posible a esa cifra, sin pasarse. Aquí están las reglas principales:

### Objetivo del Juego
El objetivo es obtener una mano de cartas cuya suma de puntos sea lo más cercana posible a 21, pero sin superar dicho valor.

### Valores de las Cartas
- Las cartas numéricas (2-10) tienen el valor de su número.
- Las cartas J, Q y K valen 10 puntos cada una.
- El As (A) puede valer 1 u 11, dependiendo de cuál valor beneficie más al jugador sin pasarse de 21.

### Desarrollo del Juego
1. El jugador y el crupier (la casa) reciben dos cartas cada uno. Sin embargo, una de las cartas del crupier se mantiene boca abierta, mientras que todas las cartas del jugador se reparten boca arriba.
2. El jugador puede "pedir" más cartas (hit) para acercarse a 21, o "quedarse" con su puntuación actual (stand).
3. Si el jugador supera 21 puntos, pierde automáticamente (se pasa).
4. Luego de que el jugador se planta, el crupier revela su carta boca abierta.
5. El crupier debe seguir ciertas reglas preestablecidas: debe "pedir" carta si su total es menor o igual a 16, y debe "quedarse" si es igual o mayor a 17.
6. Si el crupier se pasa de 21, el jugador gana. Si no, se comparan las puntuaciones y el que tenga una puntuación más alta sin pasarse gana.

## 🕹️ Cómo Jugar

1. Clona este repositorio en tu máquina local.
2. Abre una terminal y navega hasta el directorio del proyecto.
3. Ejecuta `npm install` para instalar las dependencias.
4. Ejecuta `npm run dev` para iniciar el servidor de desarrollo.
5. Abre tu navegador y ve a la dirección proporcionada por Vite (por lo general, http://localhost:3000).

## 🎉 Contribuciones
¡Las contribuciones son bienvenidas! Si tienes alguna idea para mejorar este proyecto de Blackjack, siéntete libre de crear un pull request. Asegúrate de seguir las mejores prácticas de desarrollo y mantener el código limpio y legible.


---

Diviértete jugando al Blackjack y explorando el código fuente. Si tienes alguna pregunta o sugerencia, no dudes en abrir un issue en este repositorio. ¡Disfruta! 🃏🎉
