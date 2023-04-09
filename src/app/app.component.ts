import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule],
})

export class AppComponent {
  img: any;
  prompt: any;
  reset(){
    this.prompt = "";
    this.img = "assets/img.jpg";
  }
  async alert(msg: string) {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: msg,
      buttons: ['OK'],
    })
    await alert.present();
  }
  getimg() {
    const data = JSON.stringify({
      "prompt": "masterpiece, best quality, " + this.prompt,
      "sampler_name": "DPM++ 2M Karras",
      "width": 512,
      "height": 512,
      "steps": 20,
      "negative_prompt": "lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts,signature, watermark, username, blurry, artist name, bad_prompt",
      });

    fetch("https://com.kuuhaku.ga/sdapi/v1/txt2img", {
      method: "POST",
      body: data,
      headers: { "Content-Type": "application/json; charset=utf-8" },
    })
      .then((response) => response.json())
      .then((data) => {
        const image = data.images[0];
        this.img = 'data:image/jpeg;base64,' + image;
        });
    }

  onValueChange(event: Event): void {
    console.log(event.target);
    const value = (event.target as any).value;
    this.prompt = value;
  }

  constructor(private alertController: AlertController) {
    this.img = "assets/img.jpg";
    this.prompt = "";
  }
}