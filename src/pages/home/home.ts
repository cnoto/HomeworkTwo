import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  wonders = [
    {
      imgPath: "machuPicchu.jpg",
      title: "Machu Picchu",
      desc: "Here is a picture of Machu Picchu which is located in Peru.",
      favorited: false,
      shared: false,
      liked: false
    },

    {
      imgPath: "petra.jpg",
      title: "Petra",
      desc: "Here is a picture of Petra which is located in Jordan.",
      favorited: false,
      shared: false,
      liked: false
    },

    {
      imgPath: "greatWall.jpg",
      title: "The Great Wall of China",
      desc: "Here is a picture of the Great Wall of China which is located in China.",
      favorited: false,
      shared: false,
      liked: false
    },

    {
      imgPath: "christ.jpg",
      title: "Christ the Redeemer",
      desc: "Here is a picture of Christ the Redeemer which is located in Rio de Janeiro, Brazil.",
      favorited: false,
      shared: false,
      liked: false
    },

    {
      imgPath: "colosseum.jpg",
      title: "The Colosseum",
      desc: "Here is a picture of the colosseum which is located in Rome, Italy.",
      favorited: false,
      shared: false,
      liked: false
    },

    {
      imgPath: "chichenItza.jpg",
      title: "Chichen Itza",
      desc: "Here is a picture of Chichen Itza which is located in Yucatan Peninsula, Mexico.",
      favorited: false,
      shared: false,
      liked: false
    },

    {
      imgPath: "taj.jpg",
      title: "The Taj Majal",
      desc: "Here is a picture of the Taj Majal which is located in Agra, India.",
      favorited: false,
      shared: false,
      liked: false
    },

    {
      imgPath: "pyramid.jpg",
      title: "The Great Pyramid of Giza",
      desc: "Here is a picture of the Great Pyramid of Giza which is located in Egypt. It is the largest of the three pyramids and the oldest of the Seven Wonders of the Ancient World.",
      favorited: false,
      shared: false,
      liked: false
    },

    {
      imgPath: "stonehenge.jpg",
      title: "Stonehenge",
      desc: "Here is a picture of Stonehenge which is an ancient burial ground located in England.",
      favorited: false,
      shared: false,
      liked: false
    },

    {
      imgPath: "hagia.jpg",
      title: "Hagia Sophia",
      desc: "Here is a picture of Hagia Sophia which is located in Istanbul, Turkey.",
      favorited: false,
      shared: false,
      liked: false
    },
  ]

  constructor(public navCtrl: NavController) {

  }

  clickFav(wonder) {
    let index = this.wonders.indexOf(wonder);

    if(index > -1){
      if(wonder.favorited){
        this.wonders[index].favorited = false;
      }else{
        this.wonders[index].favorited = true;
      }
    }
  }

  clickShare(wonder) {
    let index = this.wonders.indexOf(wonder);

    if(index > -1){
      if(wonder.shared){
        this.wonders[index].shared = false;
      }else{
        this.wonders[index].shared = true;
      }
    }
  }

  clickLike(wonder) {
    let index = this.wonders.indexOf(wonder);

    if(index > -1){
      if(wonder.liked){
        this.wonders[index].liked = false;
      }else{
        this.wonders[index].liked = true;
      }
    }
  }

}
