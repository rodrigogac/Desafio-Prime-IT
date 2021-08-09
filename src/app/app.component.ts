import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatCardModule} from '@angular/material/card';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'Desafio Pokemon Rodrigo';
  
  names = [];
  cards = [];
  ids = [];
  tipos = [];
  
  url = 'https://api.pokemontcg.io/v2/cards';

  


  constructor(private http: HttpClient) {
	this.http.get<any>(this.url).toPromise().then(dados => {
		
		console.log(dados.data);
		
		for (let id in dados.data)
			this.cards.push(dados.data[id]['images'].large as never);
		
		for (let id in dados.data)
			this.names.push(dados.data[id]['name'] as never);
		
		for (let id in dados.data)
			this.ids.push(dados.data[id]['id'] as never);
		
		for (let id in dados.data)
			this.tipos.push(dados.data[id]['types'] as never);
	
		
	}); 
  }



  
  
}
