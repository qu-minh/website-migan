export class ServiceModel {
  name: string;
  desc: string;
  detail: string;
  image: string;

  constructor({
    name,
    desc,
    detail,
    image,
  }: {
    name: string;
    desc: string;
    detail: string;
    image: string;
  }) {
    this.name = name;
    this.desc = desc;
    this.detail = detail;
    this.image = image;
  }
}
