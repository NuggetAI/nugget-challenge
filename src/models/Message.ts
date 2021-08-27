class Message {
  id: number = 0;

  userName: string = '';

  message: string = '';

  dateTime: Date = new Date();

  constructor(data: object={}) {
    Object.assign(this, data)
  }
}

export default Message