// Dong- On order submission, user's localStorage is sent as an object on post request to the server.
$(() => {
  $('#checkout').on('submit', (e) => {
    e.preventDefault()
    let $cart = JSON.stringify(getCart())
    console.log($cart);
    $.post({
      url: '/users/order',
      data: {
        'cart': $cart
      },
      success:(data) => {
        // Dong - Takes the url from the data response from post request and renders user/:orderID
        window.location.replace(data.url)
        localStorage.clear()
      }
    })
  })
});
