import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'route-1',
  template: `
  <div class="container">
  <p>
    <span>Esta vista tiene más contenido abajo.</span>
    <span>Si se scrollea al final de la página y se navega puede verse como la configuración del Router hace que el scroll vuelva arriba automaticamente</span>
  </p>
  <span> Texto al final 1</span>
</div>
  `,

  styles: [
    `
  .container {
    display: flex;
    flex-direction: column;
    height: 1400px;
    justify-content: space-between;
  }
  `,
  ],
})
export class Route1Component {}
