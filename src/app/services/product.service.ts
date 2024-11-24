import { Injectable } from '@angular/core';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    { id: 1, name: 'CORSAIR iCUE Link LX120-R RGB 120mm PWM ', description: 'Reverse Fans , Triple Fan Kit , Low-Noise, CORSAIR Magnetic Dome Bearing, Dual Light Loops, CORSAIR QuikTurn Screws, Zero RPM Mode, White.', price: 750, imageUrl: 'assets/img/Tekk1.jpg' },
    { id: 2, name: 'Crucial Pro DDR5 RAM 32GB Kit (2x16GB) 6400MHz AMD Ryzen 9000 8000 & 7000 Series CPUs', description: 'CL38, Overclocking Desktop Gaming Memory, Intel XMP 3.0 & AMD Expo Compatible – White CP2K16G64C38U5W.', price: 3099, imageUrl: 'assets/img/Tekk2.jpg' },
    { id: 3, name: 'NZXT N7 B650E - AMD B650 Chipset - Supports ', description: 'ATX Gaming Motherboard - Integrated Rear I/O Shield - DDR5 - Wi-Fi 6E - Black.', price: 6399, imageUrl: 'assets/img/Tekk3.jpg' },
    { id: 4, name: 'DarkFlash ATX Mid-Tower PC Case, Pre-Install 4 PWM ARGB Fans Computer Case', description: 'Full View Dual Tempered Glass Gaming PC Case, Type C Port, Supports up to 360mm Water Cooling Radiator, Black(DS900.', price: 2999, imageUrl: 'assets/img/Tekk4.jpg' },
    { id: 5, name: 'Z-Edge 32 inch Curved Gaming Monitor', description: '16:9 QHD 2K 2560x1440 165/144Hz 1ms Frameless LED Gaming Monitor, AMD Freesync Premium Display Port HDMI.', price: 12999, imageUrl: 'assets/img/Tekk5.jpg' }
  ];

  getProducts(): Product[] {
    return this.products;
  }
}
