import { Component, inject, Input, OnInit } from '@angular/core';
import { PedidoService } from '../services/pedido.service';
import { Pedido } from '../models/pedido';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delivery-point',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delivery-point.component.html',
  styleUrl: './delivery-point.component.css'
})
export class DeliveryPointComponent implements OnInit {

  pedidosFinal : Pedido[] = [];
  @Input() index : number = 0;
  pedidoFinal : Pedido = {} as Pedido;
  private pedidoService = inject(PedidoService);

  ngOnInit(): void {
    this.pedidosFinal = this.pedidoService.cargarPedidoListo();

    
  }

  entregarPedido(pedidoFinal : Pedido) {
    this.pedidosFinal = this.pedidosFinal.filter(item => item !== pedidoFinal);
  }

}
