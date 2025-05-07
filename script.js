document.getElementById('orderForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Thank you! Your order/message has been sent. We'll get back to you soon.");
  this.reset();
});
