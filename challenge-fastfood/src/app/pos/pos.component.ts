import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { PedidoService } from '../services/pedido.service';
import { Pedido } from '../models/pedido';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { KitchenComponent } from '../kitchen/kitchen.component';

@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [CommonModule, FormsModule, DatePipe, KitchenComponent],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.css'
})
export class PosComponent implements OnInit {

  pedido : Pedido = {} as Pedido;
  today = new Date();
  pendientesCocinar : Pedido[] = [];
  @Output() onIngresarPedido = new EventEmitter<Pedido>();
  private pedidoService = inject(PedidoService);

  ngOnInit(): void {
    this.generarNumero();
    this.pendientesCocinar = this.pedidoService.cargarPendientesCocinar();
  }

  generarNumero() {
    this.pedido.number = this.pedidoService.generarNumeroPedido();
  }

  ingresarPedido(pedido : Pedido) {
    this.onIngresarPedido.emit(pedido);
  }

  save(form: NgForm) {
    if (form.invalid) {
      alert("Form invalido");
    }
    else {
      const nuevoPedido = {
        ...this.pedido
      }
      this.pedidoService.agregarPendientesCocinar(nuevoPedido);
      this.ingresarPedido(nuevoPedido);
      form.reset();
      this.generarNumero();
    }
  }



  

}
