<template>
  <div class="container">
    <h1 class="header">My-TodoList</h1>
      <b-form @submit.prevent="add()">
          <b-form-group id="input-group-2" label="Title:" label-for="input-2">
          <b-form-input
            type="text"
            v-model="task"
            id="input-2"
            required
            placeholder="Enter New Todo"
          ></b-form-input>
        </b-form-group>
        <b-form-select v-model="selected" :options="options" :select-size="2"></b-form-select>
        <b-button type="submit" class="btn" variant="warning">Submit</b-button>
      </b-form>
      <hr>
      <ul>
        <li v-for="t in tasks" :key ="t">{{t}}<strong> at : {{ selected }}</strong></li>
      </ul>
  </div>

</template>

<script>


export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
      return {
        task:'',
        tasks:[],
        selected: null,
        options: [
          { value:null, text:'Select Time' },
          { value:' 01.00', text: ' 01.00' },
          { value:' 02.00', text: ' 02.00' },
          { value:' 03.00', text: ' 03.00' },
          { value:' 04.00', text: ' 04.00' },
          { value:' 05.00', text: ' 05.00' },
          { value:' 06.00', text: ' 06.00' },
          { value:' 07.00', text: ' 07.00' },
          { value:' 08.00', text: ' 08.00' },
          { value:' 09.00', text: ' 09.00' },
          { value:' 10.00', text: ' 10.00' },
          { value:' 11.00', text: ' 11.00' },
          { value:' 12.00', text: ' 12.00' },
          { value:' 13.00', text: ' 13.00' },
          { value:' 14.00', text: ' 14.00' },
          { value:' 15.00', text: ' 15.00' },
          { value:' 16.00', text: ' 16.00' },
          { value:' 17.00', text: ' 17.00' },
          { value:' 18.00', text: ' 18.00' },
          { value:' 19.00', text: ' 19.00' },
          { value:' 20.00', text: ' 20.00' },
          { value:' 21.00', text: ' 21.00' },
          { value:' 22.00', text: ' 22.00' },
          { value:' 23.00', text: ' 23.00' },
          { value:' 24.00', text: ' 24.00' }
        ]
      }
    },
    methods:{
      add(){
        if(this.task.trim()){
          this.tasks.push(this.task);  
          this.task ='';
        }
      }
    }
}
</script>

<style scoped>
.container {
  margin-top: 80px;
  left: 50%;
  transform: translate(-50%);
  background:rgba(44, 42, 48, 0.9);
  position: absolute;
  border: 1px solid  rgb(163,132,68);
  padding:15px;
  border-radius:40px 0 40px 0;
  min-width: 500px;
  color:rgb(227, 224, 233);
}
.header{
  text-align: center;
  color: rgb(163,132,68);
}
.btn{
  float:right;
  margin-top: 15px;
}
</style>
