export const bootstrap = (): void => {
  enum OrderStatus {
    PENDING, // default = 0
    DELIVERED = 'entregue',
    CANCELED = 200,
  }

  console.log(OrderStatus);
  console.log(OrderStatus.DELIVERED);
  //console.log(OrderStatus[5575]);

  enum OrderStatus {
    WAITINGFORPAYMENT = 500,
    SENT = 'enviado',
  }

  function changeOrderStatus(newStatus: OrderStatus): void {
    if (newStatus === OrderStatus.SENT) {
      //... PARA ENVIAR UM EMAIL PARA O CLIENTE
      console.log('Novo status: ', newStatus);
    }
  }

  changeOrderStatus(OrderStatus.SENT);
};
