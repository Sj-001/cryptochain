const PubNub = require('pubnub')

const credentials = {
  publishKey: 'pub-c-33827bbf-ae38-4472-a8fd-6b77e7c8f2a5',
  subscribeKey: 'sub-c-1b5e32aa-8c71-11eb-83ad-9af11ba6f334',
  secretKey: 'sec-c-NjI3NTAzNTgtNTI3YS00ZTE4LWJhYjgtZmFlNjRkYTZkODgz'
};

const CHANNELS = {
  TEST: 'TEST',
  BLOCKCHAIN: 'BLOCKCHAIN',
  TRANSACTION: 'TRANSACTION'
};
class PubSub {
  constructor({blockchain, transactionPool, wallet}) {
    this.blockchain = blockchain
    this.transactionPool = transactionPool
    this.wallet = wallet
    this.pubnub = new PubNub(credentials);
    this.subscribeToChannels()

    this.pubnub.addListener(this.listener())
  }

  listener() {
    return{
      message: messageObject => {
        const {channel, message} = messageObject
        console.log(`Message received, Channel: ${channel}. Message: ${message}`)

        const parsedMessage = JSON.parse(message)

         switch(channel) {
          case CHANNELS.BLOCKCHAIN: 
            this.blockchain.replaceChain(parsedMessage)
            break
          
          case CHANNELS.TRANSACTION:
            if (!this.transactionPool.existingTransaction({
              inputAddress: this.wallet.publicKey
            })) {
              this.transactionPool.setTransaction(parsedMessage);
            }
            break;

          default: 
            return

        }
      }
    }
  }

  subscribeToChannels() {
    Object.values(CHANNELS).forEach(channel => {
          this.pubnub.subscribe(channel)

    })
  }

  publish({channel, message}) {
    console.log(`Publishing on ${channel}: ${message}`);
    
      this.pubnub.publish({channel, message})
  
    
  }

  broadcastChain() {
    this.publish({
      channel: CHANNELS.BLOCKCHAIN,
      message: JSON.stringify(this.blockchain.chain)
    })
  }

  broadcastTransaction(transaction) {
    console.log("Broadcasting transaction", transaction);
    this.publish({
      channel: CHANNELS.TRANSACTION,
      message: JSON.stringify(transaction)
    })
  }
}



module.exports = PubSub

