 void function Cylinder(radius: number, height: number){
     const Volume = Math.PI * (radius * radius) * height;
     const SurfaceArea = 2 * Math.PI * radius * height + 2 * Math.PI * (radius * radius);
     return [Volume, SurfaceArea]
}
  console.log(`Volume`,`SurfaceArea`)
