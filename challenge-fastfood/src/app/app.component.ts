import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PosComponent } from "./pos/pos.component";
import { DeliveryPointComponent } from "./delivery-point/delivery-point.component";
import { KitchenComponent } from "./kitchen/kitchen.component";
import { Pedido } from './models/pedido';
import { PedidoService } from './services/pedido.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PosComponent, DeliveryPointComponent, KitchenComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  //private pedidoService = inject(PedidoService);
  title = 'challenge-fastfood';

  pedidos : Pedido[] = [];
  pedidosFinal : Pedido[] = [];

  ingresarPedido(event : Pedido) {
    this.pedidos.push(event);
  }

  quitarPedido(event : Pedido) {
    this.pedidos = this.pedidos.filter(item => item !== event);

  }
}
