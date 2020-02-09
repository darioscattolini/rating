const STARS = {
    stars: Array.from(document.querySelector("#rating").children),

    hover() {
        let starIndex = STARS.stars.indexOf(this);
        for (let i = 0; i <= starIndex; i++) {
            STARS.stars[i].classList.add("fas");
            STARS.stars[i].classList.remove("far");
        }
    },

    mouseOut() {
        let starIndex = STARS.stars.indexOf(this);
        for (let i = 0; i <= starIndex; i++) {
            STARS.stars[i].classList.add("far");
            STARS.stars[i].classList.remove("fas");
        }
    },

    setHoverEffect() {
        for (let star of this.stars) {
            star.addEventListener("mouseover", this.hover);
            star.addEventListener("mouseout", this.mouseOut);
        }
    },

    unsetHoverEffect() {
        for (let star of this.stars) {
            star.removeEventListener("mouseover", this.hover);
            star.removeEventListener("mouseout", this.mouseOut);
        }
    },

    setClickEffect() {
        let stars = this.stars;
        for (let star of stars) {
            star.addEventListener("click", (event) => {
                event.stopPropagation();
                let starIndex = stars.indexOf(star);
                for (let i = 0; i <= starIndex; i++) {
                    stars[i].classList.add("fas");
                    stars[i].classList.remove("far");
                }
                for (let i = starIndex + 1; i < stars.length; i++) {
                    stars[i].classList.add("far");
                    stars[i].classList.remove("fas");
                }
                this.unsetHoverEffect();
            });
        }
        window.addEventListener("click", () => {
            for (let star of stars) {
                star.classList.add("far");
                star.classList.remove("fas");
            }
            this.setHoverEffect();
        });
    }
};

STARS.setHoverEffect();
STARS.setClickEffect();