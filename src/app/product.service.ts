import { Iproduct } from "./models/iproduct";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  private products_array: Iproduct[];

  constructor() {
    this.products_array = [
      {
        ProductId: "1",
        Description:
          'Notebook Basic 15 with 2,80 GHz quad core, 15" LCD, 4 GB DDR3 RAM, 500 GB',
        Name: "Notebook Basic 15",
        ProductPicUrl:
          "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1000.jpg",
        Quantity: 10,
        Price: 956
      },
      {
        ProductId: "2",
        Description:
          'Portable pocket Mouse with retracting cord, 4 GB DDR3 RAM, 500 GB ',
        Name: "Technocom",
        ProductPicUrl:
          "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1138.jpg",
        Quantity: 20,
        Price: 1249
      },
      {
        ProductId: "3",
        Description:
          '720p, DLP Projector max. 8,45 Meter, 2D DLP Projector max. 8,45 Meter',
        Name: "Titanium",
        ProductPicUrl:
          "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-6100.jpg",
        Quantity: 10,
        Price: 1570
      },
      {
        ProductId: "4",
        Description:
          'Print 2400 dpi image quality color documents at speeds of up to 32 ppm ',
        Name: "Alpha Printers",
        ProductPicUrl:
          "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1040.jpg",
        Quantity: 15,
        Price: 1650
      },
      {
        ProductId: "5",
        Description:
          "Digital Organizer with State-of-the-Art Storage Encryption",
        Name: "ITelO Vault",
        ProductPicUrl:
          "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1007.jpg",

        Quantity: 15,
        Price: 299
      },
      {
        ProductId: "6",
        Description:
          'Notebook Professional 15 with 2,80 GHz quad core, 15" Multitouch LCD',
        Name: "Notebook Professional 15",
        ProductPicUrl:
          "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1010.jpg",
        Quantity: 16,
        Price: 1999
      },
      {
        ProductId: "7",
        Description:
          'Wireless DSL Router / Repeater (available in blue, black and silver)',
        Name: "Red Point Stores",
        ProductPicUrl:
          "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1116.jpg",
        Quantity: 17,
        Price: 2299
      },
      {
        ProductId: "8",
        Description:
          "Optical USB, PS/2 Mouse, Color: Blue, 3-button-functionality (incl. Scroll wheel)",
        Name: "Oxynum Mouse",
        ProductPicUrl:
          "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1061.jpg",
        Quantity: 14,
        Price: 459
      },
      {
        ProductId: "9",
        Description:
          "7 inch 1280x800 HD display (216 ppi), Quad-core processor, 16 GB internal",
        Name: "ITelO Vault Net",
        ProductPicUrl:
          "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-9992.jpg",
        Quantity: 14,
        Price: 459
      }
    ];
  }

  getAll_products(): Iproduct[] {
    return this.products_array;
  }

  get_product(id: string): Iproduct {
    // this.products_array[this.getSelectedIndex(id)];
    // console.log(this.getSelectedIndex(id));
    const index=this.getSelectedIndex(id);
    return this.products_array[index];
  }

  private getSelectedIndex(id: string) {
    for (var i = 0; i < this.products_array.length; i++) {
      if (this.products_array[i].ProductId == id) {
        return i;
      }
    }
    return -1;
  }
}
