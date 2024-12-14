    function read(city) {
    let voided = document.querySelector(`.title[data-city="${city}"] .voided`);
    let story = document.querySelector(`.title[data-city="${city}"] .story`); 
    let storyTime = document.querySelector(`.title[data-city="${city}"] .story-time`);

    if (voided.style.display === "none") {
        voided.style.display = "inline";
        story.style.display = "none";
    } else {
        voided.style.display = "none";
        story.style.display = "inline";
    }
}



    document.addEventListener("DOMContentLoaded", function () {
      const collapseElements = document.querySelectorAll(".collapse");
      const references = document.querySelectorAll(".reference");

      collapseElements.forEach((collapseElement) => {
        const city = collapseElement.getAttribute("data-city");
        const savedState = localStorage.getItem(city);

        if (savedState === "open") {
          collapseElement.classList.add("show");
        } else if (savedState === "closed") {
          collapseElement.classList.remove("show");
        }

        const reference = collapseElement.querySelector('.reference');
        if (reference) {
          const referenceCity = reference.getAttribute('data-city');
          const referenceSavedState = localStorage.getItem(referenceCity);
          if (referenceSavedState === "hidden") {
            reference.style.display = "none";
          } else if (referenceSavedState === "visible") {
            reference.style.display = "inline";
          }
        }

        collapseElement.addEventListener("show.bs.collapse", function () {
          localStorage.setItem(city, "open");
          if (reference) {
            localStorage.setItem(referenceCity, "visible");
            reference.style.display = "inline";
          }
        });

        collapseElement.addEventListener("hide.bs.collapse", function () {
          localStorage.setItem(city, "closed");
          if (reference) {
            localStorage.setItem(referenceCity, "hidden");
            reference.style.display = "none";
          }
        });
      });

      references.forEach((reference, index) => {
        const referenceCity = reference.getAttribute('data-city');
        const referenceSavedState = localStorage.getItem(referenceCity);
        if (referenceSavedState !== "hidden") {
          reference.setAttribute('data-footnote', (index + 1));
        } else {
          reference.setAttribute('data-footnote', '');
        }
      });
    });
    
    
    
      /*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2023 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */

(() => {
  'use strict'

  const getStoredTheme = () => localStorage.getItem('theme')
  const setStoredTheme = theme => localStorage.setItem('theme', theme)

  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme()
    if (storedTheme) {
      return storedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const setTheme = theme => {
    if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-bs-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme)
    }
  }

  setTheme(getPreferredTheme())

  const showActiveTheme = (theme, focus = false) => {
    const themeSwitcher = document.querySelector('#bd-theme')

    if (!themeSwitcher) {
      return
    }

    const themeSwitcherText = document.querySelector('#bd-theme-text')
    const activeThemeIcon = document.querySelector('.theme-icon-active use')
    const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)
    const svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('href')

    document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
      element.classList.remove('active')
      element.setAttribute('aria-pressed', 'false')
    })

    btnToActive.classList.add('active')
    btnToActive.setAttribute('aria-pressed', 'true')
    activeThemeIcon.setAttribute('href', svgOfActiveBtn)
    const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`
    themeSwitcher.setAttribute('aria-label', themeSwitcherLabel)

    if (focus) {
      themeSwitcher.focus()
    }
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const storedTheme = getStoredTheme()
    if (storedTheme !== 'light' && storedTheme !== 'dark') {
      setTheme(getPreferredTheme())
    }
  })

  window.addEventListener('DOMContentLoaded', () => {
    showActiveTheme(getPreferredTheme())

    document.querySelectorAll('[data-bs-theme-value]')
      .forEach(toggle => {
        toggle.addEventListener('click', () => {
          const theme = toggle.getAttribute('data-bs-theme-value')
          setStoredTheme(theme)
          setTheme(theme)
          showActiveTheme(theme, true)
        })
      })
  })
})()
  