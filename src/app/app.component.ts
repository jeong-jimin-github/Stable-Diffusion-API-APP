import { Component } from '@angular/core';
import { IonicModule, ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Filesystem, Directory } from '@capacitor/filesystem';

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
  image: any; //base64
  width: any;
  height: any;
  step: any;
  toast: any;
  generateRandomString = () => {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < 10; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  async saveimg() {
      const base64Data = this.image;
      const filename = this.generateRandomString() + ".jpeg";
      const save = await Filesystem.writeFile({
        path: filename,
        data: base64Data,
        directory: Directory.Documents,
        recursive: true
      });
      this.alert("저장 완료", "생성된 이미지가 저장되었습니다.");
    };

  reset(){
    this.prompt = "";
    this.img = "assets/img.png";
  }
  async alert(title:string, msg: string) {
    const alert = await this.alertController.create({
      header: title,
      message: msg,
      buttons: ['확인'],
    })
    await alert.present();
  }
  async areyouokalert() {
    const alert = await this.alertController.create({
      header: "정말로 리셋하시겠습니까?",
      message: "작성한 프롬프트와 이미지가 사라집니다.",
      buttons: [  
        {  
          text: '아니오',  
          handler: data => {  
            console.log('취소됨');  
          }  
        },  
        {  
          text: '네',  
          handler: data => {  
            this.reset();
          }  
        }  
      ],
    })
    await alert.present();
  }
  async openToast() {  
    this.toast = await this.toastCtrl.create({  
      message: '이미지를 생성중입니다...' 
    });  
    this.toast.present();
  }  
  getimg() {
    this.openToast();
    const data = JSON.stringify({
      "prompt": "masterpiece, best quality, " + this.prompt,
      "sampler_name": "DPM++ 2M Karras",
      "width": this.width,
      "height": this.height,
      "steps": this.step,
      "negative_prompt": "bad-hands-5, EasyNegative, ng_deepnegative_v1_75t, verybadimagenegative_v1.3, monochrome, jpeg artifacts, text, watermark, signature, worst quality, low quality, lowres, (interlocked fingers, fused fingers, badly draw hands:1.5),",
      });

    fetch("http://115.138.164.135:7860/sdapi/v1/txt2img", {
      method: "POST",
      body: data,
      headers: { "Content-Type": "application/json; charset=utf-8" },
    })
      .then((response) => response.json())
      .then((data) => {
        this.image = data.images[0];
        this.img = 'data:image/jpeg;base64,' + this.image;
        this.toast.dismiss();
        this.saveimg();
        });
    }

  onValueChange(event: Event): void {
    console.log(event.target);
    const value = (event.target as any).value;
    this.prompt = value;
  } 

  onValueChangewd(event: Event): void {
    console.log(event.target);
    const value = (event.target as any).value;
    this.width = value;
  } 
  
  onValueChangehi(event: Event): void {
    console.log(event.target);
    const value = (event.target as any).value;
    this.height = value;
  } 

  onValueChangest(event: Event): void {
    console.log(event.target);
    const value = (event.target as any).value;
    this.step = value;
  } 

  constructor(private alertController: AlertController, public toastCtrl: ToastController) {
    this.img = "assets/img.png";
    this.prompt = "";
    this.width = 512;
    this.height = 512;
    this.step = 10;
  }
}