
var panorama, panorama2, viewer, container, infospot;

container = document.querySelector( '.image-container' );
var x = document.querySelector( '#x' );
var y = document.querySelector( '#y' );
var z = document.querySelector( '#z' );



panorama = new PANOLENS.ImagePanorama( 'images/image1.jpeg' );
panorama2 = new PANOLENS.ImagePanorama( 'https://pchen66.github.io/Panolens/examples/asset/textures/equirectangular/sunset.jpg' );

// infospot = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
// infospot.position.set( -100, -500, -5000 );
// infospot.addHoverText( "The Story" );
// infospot.addEventListener( 'click', function(){
//   viewer.setPanorama( panorama2 );
// } );

// var another_infospot = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
// another_infospot.position.set( 100, 500, 5000 );
// another_infospot.addHoverText( "new spot" );
// another_infospot.addEventListener( 'click', function(){
//   viewer.setPanorama( panorama2 );
// } );
var spots = [
  {
    x: 500,
    y: 100,
    z: -1000,
    text: "spot-1",
    scale: 50

  },
  {
    x: 500,
    y: 100,
    z: -5000,
    text: "spot-2",
    scale: 400

  },
  {
    x: 500,
    y: -2000,
    z: 3000,
    text: "spot-3",
    scale: 500
  },
]
for (let i = 0; i < spots.length; i++) {
  const spot = spots[i];
  var another_infospot = new PANOLENS.Infospot( spot.scale, PANOLENS.DataImage.Info );
  another_infospot.position.set( spot.x, spot.y, spot.z );
  another_infospot.addHoverText( spot.text );

panorama.add( another_infospot );

  
}


viewer = new PANOLENS.Viewer( { container: container } );
viewer.add( panorama, panorama2 );

viewer.addUpdateCallback(function(){
  
});