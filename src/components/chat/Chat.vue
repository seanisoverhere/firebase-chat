<template>
  <div class="chat-container">

    <UserList :users="users"></UserList>

    <div class="message-container">

      <Message v-for="(message, index) in messages" 
        :key="index"
        :content="message.content"
        :from="message.user"
        :timestamp="message.ts"
        :users="users"
        :currentUser="currentUser"
      ></Message>

    </div>

    <MessageInput></MessageInput>

  </div>
</template>

<script>
import { firestore, db } from "./../../firebase";
import firebase from "firebase/app"
import MessageInput from "./MessageInput";
import UserList from "./UserList";
import Message from "./Message";

export default {
  components: {
    Message,
    MessageInput,
    UserList
  },
  data() {
    return {
      messages: [],
      users: [],
      currentUser: firebase.auth().currentUser
    }
  },
  mounted() {
    this.getUserList();
    this.getMessages();
  },
  methods: {
    getUserList() {
      const chatUserListRef = db.ref("staticChatId");

      chatUserListRef.on("value", snapshot => {
        const userListData = snapshot.val();
        this.users = userListData;
      })

    },
    getMessages() {
      firestore.collection("messages")
        .doc("staticChatId")
        .onSnapshot((doc) => {
          if (doc.exists) {
            this.messages = doc.data().messages
          }
        })
        
    }
  },
  updated() {
    let messageContainerRef = document.getElementsByClassName("message-container")[0];
    this.$nextTick(() => {
      messageContainerRef.scrollTop = messageContainerRef.scrollHeight;
    })
  }
}
</script>

<style scoped>

.chat-container{
    margin-top: 15px;
    width: 100%;
    max-width: 600px;
    background-color: #F3F6FB;
    border-radius: 10px;
    overflow: hidden;
    padding: 15px;
    border-radius: 10px;
    background: #F3F6FB;
    height: calc(100vh - 71px);
    display: flex;
    flex-direction: column;
    max-height: 800px;
}
.message-container{
    margin-bottom: 15px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    height: 100%;
}

</style>