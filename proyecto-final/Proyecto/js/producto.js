$(document).ready(function()
{
    $("#electrodomestico").mlens(
    {
        imgSrc: $("#electrodomestico").attr("data-big"),   // path of the hi-res version of the image
        lensShape: "circle",                // shape of the lens (circle/square)
        lensSize: 180,                  // size of the lens (in px)
        borderSize: 4,                  // size of the lens border (in px)
        borderColor: "#fff",                // color of the lens border (#hex)
        borderRadius: 0,                // border radius (optional, only if the shape is square)
        imgOverlay: $("#electrodomestico").attr("data-overlay"), // path of the overlay image (optional)
        overlayAdapt: true // true if the overlay image has to adapt to the lens size (true/false)
    });
});