export class Serie {
  id: number
  name:string;
  channel:string;
  seasons:number;
  constructor( id: number,Name: string, Channel:string, Seasons:number, set: string, link:string, img:string ){
      this.id=id;
      this.name=Name;
      this.channel=Channel;
      this.seasons=Seasons; }

    public series: Array<Serie> = [];
}
