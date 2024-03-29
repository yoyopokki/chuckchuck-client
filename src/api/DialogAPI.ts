import RestAPI, { ERestAPIStatuses } from './RestAPI'

export interface IDialogAPIMessageItem {
  id: string
  senderId: string
  recipientId: string
  content: string
  createdAt: string
}
export interface IDialogAPIMessagesResponse {
  items: IDialogAPIMessageItem[]
}
export interface IDialogAPISendedMessageResponse {
  item: IDialogAPIMessageItem
}

class DialogAPI extends RestAPI {
  public constructor(object: string) {
    super(object)

    this.fetchMessages = this.fetchMessages.bind(this)
    this.sendMessage = this.sendMessage.bind(this)
  }

  public async fetchMessages(
    dialogId: string | number,
    userId: string | number,
    userAccessToken: string,
  ): Promise<IDialogAPIMessageItem[] | false> {
    try {
      const response = await super.index<IDialogAPIMessagesResponse>(
        [dialogId, 'messages'],
        { userId },
        userAccessToken,
      )

      switch (response.status) {
        case ERestAPIStatuses.SUCCESS:
          return response.data.items
        case ERestAPIStatuses.ERROR:
          return false
      }
    } catch (error) {
      return false
    }
  }
  public async sendMessage(
    dialogId: string | number,
    content: string,
    userId: string | number,
    userAccessToken: string,
  ): Promise<IDialogAPIMessageItem | false> {
    try {
      const response = await super.create<IDialogAPISendedMessageResponse>(
        [dialogId, 'messages'],
        { content },
        { userId },
        userAccessToken,
      )

      switch (response.status) {
        case ERestAPIStatuses.SUCCESS:
          return response.data.item
        case ERestAPIStatuses.ERROR:
          return false
      }
    } catch (error) {
      return false
    }
  }
}

const dialogAPI = new DialogAPI('dialogs')

export default dialogAPI
