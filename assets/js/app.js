/**
 * @source: https://notabug.org/sepbit/flex
 *
 * @licstart  The following is the entire license notice for the
 * JavaScript code in this page.
 *
 * Flex - Calculadora Flex
 * Copyright (C) 2019  SEPBIT
 *
 * The JavaScript code in this page is free software: you can
 * redistribute it and/or modify it under the terms of the GNU
 * General Public License (GNU GPL) as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option)
 * any later version.  The code is distributed WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.
 *
 * As additional permission under GNU GPL version 3 section 7, you
 * may distribute non-source (e.g., minimized or compacted) forms of
 * that code without the copy of the GNU GPL normally required by
 * section 4, provided you include this license notice and a URL
 * through which recipients can access the Corresponding Source.
 *
 * @licend  The above is the entire license notice
 * for the JavaScript code in this page.
 *
 * ECMAScript version 6
 *
 * @author    Vitor Guia <contato@vitor.guia.nom.br>
 * @copyright 2019 SEPBIT
 * @license   GPL-3.0-or-later
 * @see       {@link https://notabug.org/sepbit/flex |Repository of Flex}
 */
/* global $ */

const app = {
  init: function () {
    window.addEventListener('hashchange', this.router)
    window.addEventListener('load', this.router)
    this.toggler()
    this.form()
  },

  router: function () {
    const home = document.getElementById('home')
    const about = document.getElementById('about')
    const librejs = document.getElementById('librejs')
    const privacy = document.getElementById('privacy')

    if (window.location.hash === '#/about') {
      home.style.display = 'none'
      about.style.display = ''
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    } else if (window.location.hash === '#/about/librejs') {
      home.style.display = 'none'
      about.style.display = ''
      librejs.scrollIntoView()
    } else if (window.location.hash === '#/about/privacy') {
      home.style.display = 'none'
      about.style.display = ''
      privacy.scrollIntoView()
    } else {
      home.style.display = ''
      about.style.display = 'none'
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  },

  toggler: function () {
    if (window.innerWidth < 992) {
      $('.navbar-nav a').on('click', function () {
        $('.navbar-toggler').click()
      })
    }
  },

  form: function () {
    const calculator = document.getElementById('calculator')
    calculator.addEventListener('submit', function (e) {
      e.preventDefault()

      $('#loading').modal('toggle')

      const result = document.getElementById('resultMsg')
      const ethanol = document.getElementById('ethanol').value
      const gasoline = document.getElementById('gasoline').value
      const division = Number(ethanol) / Number(gasoline)

      setTimeout(function () {
        if (division <= 0.7) {
          result.innerHTML = '<p>É mais vantajoso abastecer com</p>' +
            '<h1 class="text-primary">Etanol</h1>'
        } else {
          result.innerHTML = '<p>É mais vantajoso abastecer com</p>' +
            '<h1 class="text-primary">Gasolina</h1>'
        }

        $('#loading').modal('toggle')
        $('#resultModal').modal('toggle')
      }, 1000)
    })
  }
}

app.init()
