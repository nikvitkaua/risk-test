"use strict";

document.addEventListener("DOMContentLoaded", () => {
    createSnowflakes();
});

// Snowflakes animation
function createSnowflakes() {
    const snowflakeContainer = document.createElement("div");
    snowflakeContainer.className = "snowflakes-container";
    document.body.appendChild(snowflakeContainer);

    const snowflakeCount = 50;

    function createSnowflake() {
        const snowflake = document.createElement("div");
        snowflake.className = "snowflake";

        const size = Math.random() * 8 + 4;
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;

        const left = Math.random() * 100;
        snowflake.style.left = `${left}%`;

        const delay = Math.random() * 5;
        snowflake.style.animationDelay = `${delay}s`;

        const duration = Math.random() * 7 + 8;
        snowflake.style.animationDuration = `${duration}s`;

        const drift = (Math.random() - 0.5) * 100;
        snowflake.style.setProperty("--drift", `${drift}px`);

        const opacity = Math.random() * 0.5 + 0.4;
        snowflake.style.opacity = opacity;

        snowflakeContainer.appendChild(snowflake);

        setTimeout(() => {
            if (snowflake.parentNode) {
                snowflake.remove();
            }
        }, (duration + delay) * 1000);
    }

    for (let i = 0; i < snowflakeCount; i++) {
        createSnowflake();
    }

    setInterval(() => {
        const currentSnowflakes =
            snowflakeContainer.querySelectorAll(".snowflake").length;
        if (currentSnowflakes < snowflakeCount) {
            createSnowflake();
        }
    }, 1000);
}


